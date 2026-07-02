// ============================================================
// GARY · APP — moteur de rendu
// ------------------------------------------------------------
// Tout le CONTENU vit dans gary-data.js (window.GARY).
// Ce fichier ne fait que : état (localStorage gary:*), rendu
// data → DOM, interactions. Ajouter une fiche = toucher la data,
// jamais ce moteur.
// ============================================================
(() => {
'use strict';

const D = window.GARY;

// ============== HELPERS ==============
const $ = sel => document.querySelector(sel);
const esc = s => String(s ?? '').replace(/[&<>"']/g, c =>
  ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

// Stockage namespacé gary:* — tout passe par ici (export/import inclus)
const S = {
  get(k, d) {
    try { const v = localStorage.getItem('gary:' + k); return v === null ? d : JSON.parse(v); }
    catch (e) { return d; }
  },
  set(k, v) {
    try { localStorage.setItem('gary:' + k, JSON.stringify(v)); }
    catch (e) { toast('⚠️ Stockage plein — pense à exporter puis nettoyer les photos'); }
  },
  del(k) { localStorage.removeItem('gary:' + k); },
  keys() { return Object.keys(localStorage).filter(k => k.startsWith('gary:')); },
};

// ---- Dates ----
const pad = n => String(n).padStart(2, '0');
const todayStr = () => {
  const d = new Date();
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
};
const weekKey = () => {
  // clé ISO-semaine : AAAA-Wnn
  const d = new Date(); d.setHours(12, 0, 0, 0);
  d.setDate(d.getDate() + 3 - ((d.getDay() + 6) % 7)); // jeudi de la semaine
  const jan4 = new Date(d.getFullYear(), 0, 4);
  const week = 1 + Math.round(((d - jan4) / 86400000 - 3 + ((jan4.getDay() + 6) % 7)) / 7);
  return `${d.getFullYear()}-W${pad(week)}`;
};
const monthKey = () => todayStr().slice(0, 7);
const fmtDate = iso => new Date(iso + 'T12:00:00')
  .toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', year: 'numeric' });
const addDays = (iso, n) => {
  const d = new Date(iso + 'T12:00:00'); d.setDate(d.getDate() + n);
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
};
const daysFromToday = iso =>
  Math.round((new Date(iso + 'T12:00:00') - new Date(todayStr() + 'T12:00:00')) / 86400000);

// Âge calculé automatiquement depuis la date de naissance
function garyAge() {
  const birth = new Date(D.profil.naissance + 'T12:00:00');
  const now = new Date();
  let months = (now.getFullYear() - birth.getFullYear()) * 12 + (now.getMonth() - birth.getMonth());
  if (now.getDate() < birth.getDate()) months--;
  return { ans: Math.floor(months / 12), mois: months % 12 };
}
const ageStr = () => {
  const a = garyAge();
  return `${a.ans} an${a.ans > 1 ? 's' : ''}${a.mois ? ` et ${a.mois} mois` : ''}`;
};

// ============== TOAST + XP ==============
let toastTimer;
function toast(msg) {
  const t = $('#toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 2200);
}

function addXP(n, label) {
  const before = levelFor(S.get('xp', 0));
  const xp = S.get('xp', 0) + n;
  S.set('xp', xp);
  const after = levelFor(xp);
  toast(after.nom !== before.nom
    ? `🏔️ Niveau « ${after.nom} » atteint !`
    : `+${n} XP${label ? ' · ' + label : ''}`);
  // rafraîchit la barre XP si visible
  document.querySelectorAll('[data-xp-bar]').forEach(() => renderXPWidgets());
}
function levelFor(xp) {
  let lvl = D.niveaux[0], next = null;
  for (const n of D.niveaux) { if (xp >= n.seuil) lvl = n; else { next = n; break; } }
  return { ...lvl, next };
}
function renderXPWidgets() {
  const xp = S.get('xp', 0);
  const lvl = levelFor(xp);
  const pct = lvl.next ? Math.min(100, Math.round((xp - lvl.seuil) / (lvl.next.seuil - lvl.seuil) * 100)) : 100;
  document.querySelectorAll('[data-xp-bar]').forEach(elx => {
    elx.innerHTML = `
      <div style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:6px">
        <strong>❄️ ${esc(lvl.nom)}</strong>
        <span class="faint">${xp} XP${lvl.next ? ` · prochain : ${esc(lvl.next.nom)} à ${lvl.next.seuil}` : ' · niveau max'}</span>
      </div>
      <div class="xp-bar-wrap"><div class="xp-bar" style="width:${pct}%"></div></div>`;
  });
}

// ============== CHIPS DE VÉRITÉ ==============
const chipHTML = tag => {
  const map = { fait: ['chip-fait', 'fait établi'], folklore: ['chip-folklore', 'folklore'], hypothese: ['chip-hypothese', 'hypothèse'] };
  const [cls, label] = map[tag] || ['chip-mode', tag];
  return `<span class="chip ${cls}">${esc(label)}</span>`;
};

// ============== ÉTAT GLOBAL UI ==============
let currentTab = S.get('tab', 'accueil');
let quiz = null; // état du quiz en cours (mémoire seulement)

function applyTheme() {
  document.documentElement.dataset.theme = S.get('theme', 'clair') === 'sombre' ? 'dark' : '';
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.content = S.get('theme', 'clair') === 'sombre' ? '#1F2733' : '#E4EBF2';
}
function applyGarde() {
  document.body.classList.toggle('mode-soignant', !!S.get('garde', false));
}
const isGarde = () => !!S.get('garde', false);

// ============== SANTÉ — calculs d'échéances ==============
const getEvents = () => S.get('events', []);
// Prochaine échéance d'un événement : date + récurrence (si récurrent),
// sinon la date elle-même (rendez-vous planifié).
function nextDue(ev) { return ev.rec > 0 ? addDays(ev.date, ev.rec) : ev.date; }
// Pour un type donné : l'échéance la plus proche (ou null si rien)
function dueForType(typeId) {
  const evs = getEvents().filter(e => e.type === typeId);
  if (!evs.length) return null;
  return evs.map(e => ({ ev: e, due: nextDue(e) })).sort((a, b) => a.due < b.due ? -1 : 1)[0];
}
function dueBadge(due) {
  const dj = daysFromToday(due);
  if (dj < 0) return `<span class="badge badge-late">en retard de ${-dj} j</span>`;
  if (dj === 0) return `<span class="badge badge-soon">aujourd'hui</span>`;
  if (dj <= 7) return `<span class="badge badge-soon">dans ${dj} j</span>`;
  return `<span class="badge badge-ok">dans ${dj} j</span>`;
}

// ============== CHECKLISTS ==============
const periodKeys = { jour: todayStr, semaine: weekKey, mois: monthKey };
const checkStoreKey = p => `checks:${p}:${periodKeys[p]()}`;
// reset auto : la clé contient la période courante → nouvelle période = état vide.
// On nettoie les clés des périodes passées au lancement.
function cleanupOldChecks() {
  const valid = ['jour', 'semaine', 'mois'].map(p => 'gary:' + checkStoreKey(p));
  S.keys().filter(k => k.startsWith('gary:checks:') && !valid.includes(k))
    .forEach(k => localStorage.removeItem(k));
}
function checklistItems(p) {
  return [...D.checklists[p], ...S.get(`custom:${p}`, []).map(i => ({ ...i, custom: true }))];
}
function checklistHTML(p, { compact = false } = {}) {
  const done = S.get(checkStoreKey(p), []);
  return checklistItems(p).map(item => `
    <div class="check-item ${done.includes(item.id) ? 'done' : ''}" data-action="check-toggle"
         data-periode="${p}" data-id="${esc(item.id)}" role="checkbox" tabindex="0"
         aria-checked="${done.includes(item.id)}">
      <span class="check-box" aria-hidden="true">${done.includes(item.id) ? '✔' : ''}</span>
      <span class="check-label">${esc(item.label)}</span>
      ${item.custom && !compact ? `<button class="check-del" data-action="check-del" data-periode="${p}" data-id="${esc(item.id)}" aria-label="Supprimer la tâche">✕</button>` : ''}
    </div>`).join('');
}

// ============== COURBE DE POIDS (SVG, série unique) ==============
// Couleur : --glacier (#3E92C9), validée sur surfaces claire et sombre.
// Relief du contraste en clair : étiquette directe sur le dernier point
// + tableau complet des pesées sous la courbe.
function weightChartHTML() {
  const ws = [...S.get('weights', [])].sort((a, b) => a.date < b.date ? -1 : 1);
  if (!ws.length) return `<p class="muted">Aucune pesée enregistrée.</p>`;

  const W = 640, H = 260, L = 46, R = 18, T = 18, B = 34;
  const kgs = ws.map(w => w.kg);
  let yMin = Math.floor(Math.min(...kgs) - 1), yMax = Math.ceil(Math.max(...kgs) + 1);
  if (yMax - yMin < 4) yMax = yMin + 4;
  const dates = ws.map(w => new Date(w.date + 'T12:00:00').getTime());
  const xMin = Math.min(...dates), xMax = Math.max(...dates);
  const X = t => xMax === xMin ? (L + W - R) / 2 : L + (t - xMin) / (xMax - xMin) * (W - L - R);
  const Y = kg => T + (yMax - kg) / (yMax - yMin) * (H - T - B);

  // grille horizontale recessive + labels d'axe
  const step = (yMax - yMin) <= 6 ? 1 : 2;
  let grid = '';
  for (let v = yMin; v <= yMax; v += step) {
    grid += `<line class="grid-line" x1="${L}" y1="${Y(v)}" x2="${W - R}" y2="${Y(v)}"/>
             <text class="axis-label" x="${L - 8}" y="${Y(v) + 4}" text-anchor="end">${v}</text>`;
  }

  const pts = ws.map((w, i) => ({ x: X(dates[i]), y: Y(w.kg), w }));
  const line = pts.length > 1
    ? `<polyline class="data-line" points="${pts.map(p => `${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' ')}"/>` : '';
  const dots = pts.map((p, i) => `
    <circle class="data-dot" cx="${p.x.toFixed(1)}" cy="${p.y.toFixed(1)}" r="4"/>
    <circle cx="${p.x.toFixed(1)}" cy="${p.y.toFixed(1)}" r="13" fill="transparent" tabindex="0"
      data-tip="${esc(p.w.kg)} kg · ${esc(fmtDate(p.w.date))}" aria-label="${esc(p.w.kg)} kg le ${esc(fmtDate(p.w.date))}"/>`).join('');
  const last = pts[pts.length - 1];
  const lastLabel = `<text class="data-label" x="${(last.x - 4).toFixed(1)}" y="${(last.y - 12).toFixed(1)}" text-anchor="end">${last.w.kg} kg</text>`;
  const xLabels = `
    <text class="axis-label" x="${L}" y="${H - 8}">${esc(fmtDate(ws[0].date))}</text>
    ${ws.length > 1 ? `<text class="axis-label" x="${W - R}" y="${H - 8}" text-anchor="end">${esc(fmtDate(ws[ws.length - 1].date))}</text>` : ''}`;

  return `
    <div class="chart-wrap" style="position:relative" id="chart-box">
      <svg class="chart-svg" viewBox="0 0 ${W} ${H}" role="img" aria-label="Courbe du poids de Gary en kilogrammes">
        ${grid}${line}${dots}${lastLabel}${xLabels}
      </svg>
    </div>
    <table class="weight-table">
      <thead><tr><th>Date</th><th>Poids</th><th></th></tr></thead>
      <tbody>${[...ws].reverse().map(w => `
        <tr><td>${esc(fmtDate(w.date))}</td><td><strong>${esc(w.kg)} kg</strong></td>
        <td style="text-align:right"><button class="check-del" data-action="weight-del" data-date="${esc(w.date)}" aria-label="Supprimer la pesée du ${esc(fmtDate(w.date))}">✕</button></td></tr>`).join('')}
      </tbody>
    </table>`;
}

// tooltip de survol de la courbe
function wireChartTips() {
  const box = $('#chart-box');
  if (!box) return;
  let tip = null;
  const show = target => {
    hide();
    tip = document.createElement('div');
    tip.className = 'chart-tip';
    tip.textContent = target.dataset.tip;
    box.appendChild(tip);
    const b = box.getBoundingClientRect(), c = target.getBoundingClientRect();
    tip.style.left = (c.left - b.left + c.width / 2) + 'px';
    tip.style.top = (c.top - b.top + 4) + 'px';
  };
  const hide = () => { tip?.remove(); tip = null; };
  box.querySelectorAll('circle[data-tip]').forEach(c => {
    c.addEventListener('mouseenter', () => show(c));
    c.addEventListener('mouseleave', hide);
    c.addEventListener('focus', () => show(c));
    c.addEventListener('blur', hide);
  });
}

// ============== FICHES (comportement) ==============
function ficheHTML(f) {
  const favs = S.get('favs', []);
  const inner = `
    <div class="fiche-head">
      <h3>${esc(f.titre)}</h3>
      <button class="fav-btn" data-action="fav" data-id="${esc(f.id)}"
        aria-pressed="${favs.includes(f.id)}" aria-label="Favori : ${esc(f.titre)}">★</button>
    </div>
    <p class="fiche-corps">${esc(f.corps)}</p>
    <div class="fiche-chips">${f.tags.map(chipHTML).join('')}
      ${f.mode === 'perso' ? '<span class="chip chip-mode">perso</span>' : ''}</div>`;
  // Règle dure : niveau a_savoir = TOUJOURS plié dans un accordéon.
  if (f.niveau === 'a_savoir') {
    const open = S.get('acc', []).includes(f.id);
    return `
      <details class="acc" data-acc="${esc(f.id)}" data-mode="${f.mode}" id="fiche-${esc(f.id)}" ${open ? 'open' : ''}>
        <summary>${esc(f.titre)}</summary>
        <div class="acc-body">${inner}</div>
      </details>`;
  }
  return `<div class="card fiche" data-mode="${f.mode}" id="fiche-${esc(f.id)}">${inner}</div>`;
}

// ============== VUES ==============
const TABS = [
  { id: 'accueil', label: '🏠 Accueil' },
  { id: 'fiche', label: '🪪 Fiche' },
  { id: 'sante', label: '📅 Santé' },
  { id: 'routines', label: '✅ Routines' },
  { id: 'comportement', label: '🐾 Comportement' },
  { id: 'suivi', label: '📈 Suivi' },
  { id: 'jeux', label: '🎮 Jeux', mode: 'perso' },
];

const VIEWS = {

  // ---------- ACCUEIL ----------
  accueil() {
    const ws = S.get('weights', []);
    const lastW = ws.length ? [...ws].sort((a, b) => a.date < b.date ? -1 : 1).slice(-1)[0] : null;
    const walks = S.get('walks:' + todayStr(), 0);
    const stim = S.get('stim:' + todayStr(), 0);
    const cdTypes = ['vaccin', 'vermifuge', 'bravecto', 'veto'];
    const countdowns = cdTypes.map(t => {
      const st = D.santeTypes.find(s => s.id === t);
      const d = dueForType(t);
      return `<div class="countdown-row">
        <span>${st.icone}</span><span class="cd-label">${esc(st.label)}</span>
        ${d ? dueBadge(d.due) : '<span class="badge badge-off">à planifier</span>'}
      </div>`;
    }).join('');

    return `
      <section class="card card-frost hero">
        <div class="hero-emoji" aria-hidden="true">${D.profil.emoji}</div>
        <div>
          <div class="hero-name">${esc(D.profil.nom)}</div>
          <div class="hero-sub">${esc(D.profil.race)} · ${ageStr()} · ${lastW ? esc(lastW.kg) + ' kg' : ''}</div>
          <div class="hero-sub">Croquettes : ${esc(D.profil.croquettes)}</div>
        </div>
      </section>

      <section class="card">
        <h2>☀️ Aujourd'hui</h2>
        ${checklistHTML('jour', { compact: true })}
      </section>

      <section class="card">
        <h2>🚶 Compteurs du jour</h2>
        <div style="display:grid;gap:14px">
          <div class="counter">
            <span style="flex:1">Promenades</span>
            <button class="btn-round" data-action="walk-minus" aria-label="Retirer une promenade">−</button>
            <span class="counter-val">${walks}</span>
            <button class="btn-round" data-action="walk-plus" aria-label="Ajouter une promenade">+</button>
          </div>
          <div class="counter">
            <span style="flex:1">Stimulation (jeu, flair, éducation)</span>
            <button class="btn-round" data-action="stim-minus" aria-label="Retirer 5 minutes">−</button>
            <span class="counter-val">${stim}<small style="font-size:.6em"> min</small></span>
            <button class="btn-round" data-action="stim-plus" aria-label="Ajouter 5 minutes">+</button>
          </div>
        </div>
      </section>

      <section class="card">
        <h2>⏳ Échéances santé</h2>
        ${countdowns}
        <p class="faint" style="margin-top:8px">Détails et ajouts dans l'onglet Santé.</p>
      </section>

      <section class="card" data-mode="perso">
        <h2>❄️ Progression</h2>
        <div data-xp-bar></div>
      </section>

      <section class="card">
        <h2>💾 Sauvegarde & transmission</h2>
        <p class="muted">Exporter = tout l'état de l'app dans un fichier JSON (à garder, ou à envoyer sur un autre appareil / à la personne qui garde Gary).</p>
        <div class="btn-row">
          <button class="btn btn-primary" data-action="export">Exporter (JSON)</button>
          <button class="btn" data-action="import">Importer</button>
          <button class="btn" data-action="print">Imprimer la page</button>
        </div>
        <input type="file" id="import-file" accept="application/json" class="sr-only" aria-hidden="true" tabindex="-1">
      </section>`;
  },

  // ---------- FICHE D'IDENTITÉ (soignant) ----------
  fiche() {
    const vals = S.get('identite', {});
    const groupes = [...new Set(D.identiteChamps.map(c => c.groupe))];
    const champsHTML = groupes.map(g => `
      <h3>${esc(g)}</h3>
      ${D.identiteChamps.filter(c => c.groupe === g).map(c => {
        const v = vals[c.id] ?? c.defaut ?? '';
        if (isGarde()) {
          // Mode garde : lecture seule, téléphones cliquables
          const shown = v
            ? (c.tel ? `<a href="tel:${esc(v.replace(/[^+\d]/g, ''))}">${esc(v)}</a>` : esc(v))
            : '<span class="faint">À compléter</span>';
          return `<p style="margin-bottom:6px"><span class="muted">${esc(c.label)} :</span> ${shown}</p>`;
        }
        return `<div class="field">
          <label for="id-${c.id}">${esc(c.label)}</label>
          <input id="id-${c.id}" data-idfield="${c.id}" value="${esc(v)}" placeholder="${esc(c.placeholder)}"
            ${c.tel ? 'inputmode="tel"' : ''}>
        </div>`;
      }).join('')}`).join('');

    return `
      <section class="card card-frost">
        <h2>🪪 ${esc(D.profil.nom)}</h2>
        <p><strong>${esc(D.profil.race)}</strong> · ${esc(D.profil.sexe)}${D.profil.castre ? '' : ' non castré'} ·
          né le ${fmtDate(D.profil.naissance)} à ${esc(D.profil.lieuNaissance)} (${ageStr()})</p>
        <p class="muted">Croquettes : ${esc(D.profil.croquettes)}</p>
      </section>

      <section class="card">
        <h2>🎁 Mode d'emploi récompense <span class="chip chip-fait">vital pour un tiers</span></h2>
        <p>${esc(D.recompenses.resume)}</p>
        ${D.recompenses.hierarchie.map(h => `
          <h3>${esc(h.rang)} — ${esc(h.quoi)}</h3>
          <p class="muted">${esc(h.detail)}</p>`).join('')}
        <h3>Interdits</h3>
        ${D.recompenses.interdits.map(i => `<p class="muted">🚫 ${esc(i)}</p>`).join('')}
      </section>

      <section class="card">
        <h2>⚠️ Dangers & spécificités</h2>
        ${D.dangers.map(d => `
          <h3>${d.icone} ${esc(d.titre)}</h3>
          <p class="muted">${esc(d.detail)}</p>`).join('')}
      </section>

      <section class="card">
        <h2>📇 Contacts & infos pratiques</h2>
        ${isGarde() ? '' : '<p class="faint">Ces champs s\'enregistrent automatiquement (aucune valeur n\'est pré-inventée).</p>'}
        ${champsHTML}
      </section>

      <section class="card">
        <h2>🗣️ Ordres utiles pendant une garde</h2>
        ${D.ordres.filter(o => o.utile).map(o => `
          <h3>« ${esc(o.nom)} »</h3>
          ${o.note ? `<p class="muted">${esc(o.note)}</p>` : ''}`).join('')}
        <p class="faint" style="margin-top:8px">La liste complète des ordres est dans l'onglet Comportement.</p>
      </section>`;
  },

  // ---------- SANTÉ ----------
  sante() {
    const evs = getEvents().map(e => ({ ...e, due: nextDue(e) })).sort((a, b) => a.due < b.due ? -1 : 1);
    const typeOpts = D.santeTypes.map(t => `<option value="${t.id}">${t.icone} ${esc(t.label)}</option>`).join('');
    return `
      <section class="card">
        <h2>📅 Calendrier santé</h2>
        <p class="faint">Pour un soin récurrent, entrer la date de la DERNIÈRE fois : l'échéance suivante est calculée. Pour un rendez-vous, entrer la date prévue (récurrence 0).</p>
        ${evs.length ? evs.map(e => {
          const st = D.santeTypes.find(s => s.id === e.type) || D.santeTypes.at(-1);
          return `<div class="event-row">
            <span aria-hidden="true">${st.icone}</span>
            <div class="ev-main">
              <div>${esc(e.label)}</div>
              <div class="ev-date">${e.rec > 0 ? `fait le ${fmtDate(e.date)} · tous les ${e.rec} j → prochaine : ${fmtDate(e.due)}` : `prévu le ${fmtDate(e.date)}`}</div>
            </div>
            ${dueBadge(e.due)}
            <button class="check-del" data-action="event-del" data-id="${esc(e.id)}" aria-label="Supprimer ${esc(e.label)}">✕</button>
          </div>`;
        }).join('') : '<p class="muted">Aucun événement. Ajoute le dernier vaccin, vermifuge, Bravecto… ci-dessous.</p>'}
      </section>

      <section class="card">
        <h2>➕ Ajouter un événement</h2>
        <div class="form-grid">
          <div class="field">
            <label for="ev-type">Type</label>
            <select id="ev-type">${typeOpts}</select>
          </div>
          <div class="field">
            <label for="ev-label">Libellé</label>
            <input id="ev-label" placeholder="ex. Vaccin CHPL, Bravecto…">
          </div>
          <div class="field">
            <label for="ev-date">Date (dernière fois, ou date prévue)</label>
            <input id="ev-date" type="date" value="${todayStr()}">
          </div>
          <div class="field">
            <label for="ev-rec">Récurrence (jours, 0 = ponctuel)</label>
            <input id="ev-rec" type="number" min="0" step="1" value="365">
          </div>
        </div>
        <p class="faint" id="ev-note"></p>
        <div class="btn-row"><button class="btn btn-primary" data-action="event-add">Ajouter</button></div>
        <p class="faint" style="margin-top:10px">Les récurrences proposées sont des usages courants : le protocole réel est celui du vétérinaire.</p>
      </section>`;
  },

  // ---------- ROUTINES (checklists) ----------
  routines() {
    const blocs = [
      { p: 'jour', titre: '☀️ Chaque jour', ss: `se réinitialise chaque jour (${fmtDate(todayStr())})` },
      { p: 'semaine', titre: '🗓️ Chaque semaine', ss: `semaine ${weekKey().split('-W')[1]}` },
      { p: 'mois', titre: '🌙 Chaque mois', ss: monthKey() },
    ];
    return blocs.map(b => `
      <section class="card">
        <h2>${b.titre} <span class="faint" style="font-weight:400">· ${esc(b.ss)}</span></h2>
        ${checklistHTML(b.p)}
        <div class="btn-row">
          <input class="search-input" style="flex:1;min-width:0" id="custom-${b.p}" placeholder="Ajouter une tâche…" aria-label="Nouvelle tâche ${b.p}">
          <button class="btn" data-action="check-add" data-periode="${b.p}">Ajouter</button>
        </div>
      </section>`).join('');
  },

  // ---------- COMPORTEMENT ----------
  comportement() {
    const filtre = S.get('filtreCat', 'tout');
    const favs = S.get('favs', []);
    const chips = [
      ['tout', 'Tout'], ['fav', '★ Favoris'], ['corps', 'Langage corporel'],
      ['signal', 'Signaux d\'apaisement'], ['gary', 'Gary'], ['samoyede', 'Samoyède'],
    ];
    const keep = f => (filtre === 'tout') || (filtre === 'fav' ? favs.includes(f.id) : f.cat === filtre);
    const fiches = D.fiches.filter(keep);
    const essentiels = fiches.filter(f => f.niveau === 'essentiel');
    const aSavoir = fiches.filter(f => f.niveau === 'a_savoir');

    return `
      <div class="filter-row" role="group" aria-label="Filtres">
        ${chips.map(([id, label]) => `
          <button class="filter-chip" data-action="filtre" data-filtre="${id}"
            aria-pressed="${filtre === id}">${label}</button>`).join('')}
      </div>

      ${essentiels.map(ficheHTML).join('')}

      ${aSavoir.length ? `<h2 style="font-size:.95rem;margin:18px 4px 10px;color:var(--ink-soft)">📚 Pour aller plus loin (à la demande)</h2>` : ''}
      ${aSavoir.map(ficheHTML).join('')}

      <section class="card" data-mode="perso">
        <h2>🗣️ Ordres connus (${D.ordres.length})</h2>
        ${[...new Set(D.ordres.map(o => o.cat))].map(cat => `
          <h3>${esc(cat)}</h3>
          <p class="muted">${D.ordres.filter(o => o.cat === cat).map(o => `« ${esc(o.nom)} »`).join(' · ')}</p>`).join('')}
      </section>

      <section class="card" data-mode="perso">
        <h2>🎯 Chantiers d'éducation en cours</h2>
        ${D.chantiers.map(c => `<p class="muted">→ ${esc(c)}</p>`).join('')}
        <p class="faint" style="margin-top:8px">Les protocoles détaillés restent en coaching — module « Protocoles » possible en phase 2, sourcé.</p>
      </section>`;
  },

  // ---------- SUIVI (poids + galerie) ----------
  suivi() {
    const photos = S.get('photos', []);
    return `
      <section class="card">
        <h2>⚖️ Courbe de poids</h2>
        ${weightChartHTML()}
        <div class="btn-row" style="align-items:flex-end">
          <div class="field" style="margin:0;flex:1;min-width:110px">
            <label for="w-date">Date</label>
            <input id="w-date" type="date" value="${todayStr()}">
          </div>
          <div class="field" style="margin:0;width:110px">
            <label for="w-kg">Poids (kg)</label>
            <input id="w-kg" type="number" step="0.1" min="1" max="60" inputmode="decimal">
          </div>
          <button class="btn btn-primary" data-action="weight-add">Ajouter</button>
        </div>
      </section>

      <section class="card">
        <h2>📷 Galerie</h2>
        ${photos.length ? `<div class="gallery-grid">
          ${photos.map(p => `<div class="photo-cell">
            <img src="${p.src}" alt="Photo de Gary du ${esc(fmtDate(p.date))}" loading="lazy">
            <button class="photo-del" data-action="photo-del" data-id="${esc(p.id)}" aria-label="Supprimer la photo">✕</button>
          </div>`).join('')}
        </div>` : '<p class="muted">Aucune photo pour l\'instant.</p>'}
        <div class="btn-row">
          <button class="btn btn-primary" data-action="photo-add">Ajouter une photo</button>
        </div>
        <p class="faint">Les photos sont réduites et stockées dans le navigateur — l'espace est limité, garde les originaux ailleurs.</p>
        <input type="file" id="photo-file" accept="image/*" class="sr-only" aria-hidden="true" tabindex="-1">
      </section>`;
  },

  // ---------- JEUX ----------
  jeux() {
    if (quiz) return quizHTML();
    return `
      <section class="card card-frost">
        <h2>❄️ Progression</h2>
        <div data-xp-bar></div>
        <p class="faint" style="margin-top:8px">L'XP se gagne en s'occupant de Gary : tâches cochées, pesées, quiz…</p>
      </section>

      <section class="card">
        <h2>🐾 Que dit Gary ?</h2>
        <p class="muted">Lire ses signaux comme un pro — ${D.quizSignaux.length} situations.</p>
        <div class="btn-row"><button class="btn btn-primary" data-action="quiz-start" data-quiz="signaux">Jouer</button></div>
      </section>

      <section class="card">
        <h2>🧊 Vrai ou Mythe ?</h2>
        <p class="muted">Démêler les faits du folklore sur le Samoyède — ${D.quizMythes.length} affirmations.</p>
        <div class="btn-row"><button class="btn btn-primary" data-action="quiz-start" data-quiz="mythes">Jouer</button></div>
      </section>`;
  },
};

// ============== QUIZ ==============
function quizData() { return quiz.type === 'signaux' ? D.quizSignaux : D.quizMythes; }
function quizHTML() {
  const data = quizData();
  const titre = quiz.type === 'signaux' ? '🐾 Que dit Gary ?' : '🧊 Vrai ou Mythe ?';

  if (quiz.idx >= data.length) {
    const pct = Math.round(quiz.score / data.length * 100);
    return `
      <section class="card card-frost">
        <h2>${titre} — terminé !</h2>
        <p style="font-size:1.3rem;font-weight:600">${quiz.score} / ${data.length} ${pct === 100 ? '🏆' : pct >= 60 ? '👏' : '💪'}</p>
        <p class="muted">${pct === 100 ? 'Sans faute — Gary est entre de bonnes mains.' : 'Les explications de chaque question sont aussi dans l\'onglet Comportement.'}</p>
        <div class="btn-row">
          <button class="btn btn-primary" data-action="quiz-start" data-quiz="${quiz.type}">Rejouer</button>
          <button class="btn" data-action="quiz-quit">Retour aux jeux</button>
        </div>
      </section>`;
  }

  const q = data[quiz.idx];
  const options = quiz.type === 'signaux' ? q.options : ['Vrai', 'Mythe'];
  const bonne = quiz.type === 'signaux' ? q.bonne : (q.vrai ? 0 : 1);
  return `
    <section class="card">
      <h2>${titre} <span class="faint" style="font-weight:400">· ${quiz.idx + 1}/${data.length}</span></h2>
      <p style="margin-bottom:14px">${esc(q.q)}</p>
      ${options.map((opt, i) => `
        <button class="quiz-option ${quiz.answered !== null ? (i === bonne ? 'correct' : (i === quiz.answered ? 'wrong' : '')) : ''}"
          data-action="quiz-answer" data-i="${i}" ${quiz.answered !== null ? 'disabled' : ''}>${esc(opt)}</button>`).join('')}
      ${quiz.answered !== null ? `
        <div class="quiz-feedback">
          ${quiz.answered === bonne ? '✅ Exact !' : '❌ Pas tout à fait.'} ${esc(q.explication)}
          ${q.chip ? `<div style="margin-top:6px">${chipHTML(q.chip)}</div>` : ''}
        </div>
        <div class="btn-row"><button class="btn btn-primary" data-action="quiz-next">${quiz.idx + 1 < data.length ? 'Question suivante' : 'Voir le score'}</button></div>` : ''}
      <div class="btn-row"><button class="btn" data-action="quiz-quit">Quitter</button></div>
    </section>`;
}

// ============== RECHERCHE ==============
// Index simple : fiches + ordres + dangers. Respecte le mode garde.
function searchIndex() {
  const idx = [];
  D.fiches.forEach(f => idx.push({ mode: f.mode, tab: 'comportement', target: 'fiche-' + f.id, titre: f.titre, texte: f.corps, where: 'Comportement' }));
  D.dangers.forEach(d => idx.push({ mode: 'soignant', tab: 'fiche', target: null, titre: d.titre, texte: d.detail, where: 'Fiche · dangers' }));
  D.ordres.forEach(o => idx.push({ mode: 'soignant', tab: 'comportement', target: null, titre: 'Ordre « ' + o.nom + ' »', texte: o.note || o.cat, where: 'Ordres' }));
  D.recompenses.hierarchie.forEach(h => idx.push({ mode: 'soignant', tab: 'fiche', target: null, titre: h.quoi, texte: h.detail, where: 'Fiche · récompenses' }));
  return idx;
}
const norm = s => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
function runSearch(q) {
  const box = $('#search-results');
  if (!q || q.length < 2) { box.innerHTML = ''; return; }
  const nq = norm(q);
  const hits = searchIndex()
    .filter(it => !(isGarde() && it.mode === 'perso'))
    .filter(it => norm(it.titre + ' ' + it.texte).includes(nq))
    .slice(0, 8);
  box.innerHTML = hits.length ? hits.map((h, i) => `
    <button class="search-hit" data-action="search-go" data-tab="${h.tab}" data-target="${h.target || ''}">
      <span class="hit-where">${esc(h.where)}</span>${esc(h.titre)}
    </button>`).join('') : '<p class="faint" style="padding:4px 8px">Aucun résultat.</p>';
}

// ============== RENDU GLOBAL ==============
function renderHeader() {
  $('#header').innerHTML = `
    <div class="header-row">
      <div class="header-title">${D.profil.emoji} Gary <small>${esc(D.profil.race)} · ${ageStr()}</small></div>
      <button class="btn-round" data-action="search-toggle" aria-label="Rechercher" aria-expanded="false">🔍</button>
      <button class="btn-round" data-action="garde-toggle" aria-pressed="${isGarde()}"
        aria-label="Mode garde : n'afficher que l'essentiel pour un soignant" title="Mode garde">🧤</button>
      <button class="btn-round" data-action="theme-toggle"
        aria-label="Basculer clair / sombre">${S.get('theme', 'clair') === 'sombre' ? '☀️' : '🌙'}</button>
    </div>
    <div class="garde-banner">🧤 Mode garde actif — seul l'essentiel pour s'occuper de Gary est affiché.</div>
    <div class="search-wrap" id="search-wrap">
      <input class="search-input" id="search-input" placeholder="Chercher (signal, ordre, récompense…)" aria-label="Recherche">
      <div class="search-results" id="search-results"></div>
    </div>`;
  $('#search-input').addEventListener('input', e => runSearch(e.target.value));
}

function renderTabs() {
  $('#tabs').innerHTML = TABS
    .filter(t => !(isGarde() && t.mode === 'perso'))
    .map(t => `<button class="tab" role="tab" data-action="tab" data-tab="${t.id}"
      aria-selected="${t.id === currentTab}">${t.label}</button>`).join('');
}

function renderMain() {
  if (isGarde() && TABS.find(t => t.id === currentTab)?.mode === 'perso') currentTab = 'accueil';
  $('#main').innerHTML = VIEWS[currentTab]();
  renderXPWidgets();
  wireChartTips();
  // note dynamique du formulaire santé
  const sel = $('#ev-type');
  if (sel) {
    const upd = () => {
      const t = D.santeTypes.find(s => s.id === sel.value);
      $('#ev-rec').value = t.recurrenceJours;
      $('#ev-note').textContent = t.note || '';
      if (!$('#ev-label').value) $('#ev-label').value = t.label;
    };
    sel.addEventListener('change', upd);
    upd();
  }
}

function renderAll() {
  applyTheme(); applyGarde();
  renderHeader(); renderTabs(); renderMain();
  $('#disclaimer').textContent = D.disclaimer;
}

// ============== ACTIONS (délégation d'événements) ==============
const actions = {
  'tab': t => { currentTab = t.dataset.tab; quiz = null; S.set('tab', currentTab); renderTabs(); renderMain(); },
  'theme-toggle': () => { S.set('theme', S.get('theme', 'clair') === 'sombre' ? 'clair' : 'sombre'); renderAll(); },
  'garde-toggle': () => { S.set('garde', !isGarde()); renderAll(); },
  'search-toggle': t => {
    const w = $('#search-wrap');
    w.classList.toggle('open');
    t.setAttribute('aria-expanded', w.classList.contains('open'));
    if (w.classList.contains('open')) $('#search-input').focus();
  },
  'search-go': t => {
    currentTab = t.dataset.tab; S.set('tab', currentTab);
    renderTabs(); renderMain();
    $('#search-wrap').classList.remove('open');
    const target = t.dataset.target && document.getElementById(t.dataset.target);
    if (target) {
      if (target.tagName === 'DETAILS') target.open = true;
      target.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  },

  // --- favoris ---
  'fav': t => {
    const favs = S.get('favs', []);
    const id = t.dataset.id;
    S.set('favs', favs.includes(id) ? favs.filter(f => f !== id) : [...favs, id]);
    t.setAttribute('aria-pressed', !favs.includes(id));
  },
  'filtre': t => { S.set('filtreCat', t.dataset.filtre); renderMain(); },

  // --- checklists ---
  'check-toggle': t => {
    const key = checkStoreKey(t.dataset.periode);
    const done = S.get(key, []);
    const id = t.dataset.id;
    if (done.includes(id)) S.set(key, done.filter(d => d !== id));
    else { S.set(key, [...done, id]); addXP(2, 'tâche faite'); }
    renderMain();
  },
  'check-del': t => {
    const p = t.dataset.periode;
    S.set(`custom:${p}`, S.get(`custom:${p}`, []).filter(i => i.id !== t.dataset.id));
    renderMain();
  },
  'check-add': t => {
    const p = t.dataset.periode;
    const input = $(`#custom-${p}`);
    const label = input.value.trim();
    if (!label) return;
    S.set(`custom:${p}`, [...S.get(`custom:${p}`, []), { id: 'c-' + Date.now(), label }]);
    renderMain();
  },

  // --- compteurs du jour ---
  'walk-plus': () => { S.set('walks:' + todayStr(), S.get('walks:' + todayStr(), 0) + 1); addXP(2, 'promenade'); renderMain(); },
  'walk-minus': () => { S.set('walks:' + todayStr(), Math.max(0, S.get('walks:' + todayStr(), 0) - 1)); renderMain(); },
  'stim-plus': () => { S.set('stim:' + todayStr(), S.get('stim:' + todayStr(), 0) + 5); renderMain(); },
  'stim-minus': () => { S.set('stim:' + todayStr(), Math.max(0, S.get('stim:' + todayStr(), 0) - 5)); renderMain(); },

  // --- santé ---
  'event-add': () => {
    const date = $('#ev-date').value;
    const label = $('#ev-label').value.trim();
    if (!date || !label) { toast('Date et libellé requis'); return; }
    const ev = { id: 'e-' + Date.now(), type: $('#ev-type').value, label, date, rec: Math.max(0, parseInt($('#ev-rec').value, 10) || 0) };
    S.set('events', [...getEvents(), ev]);
    toast('Événement ajouté'); renderMain();
  },
  'event-del': t => {
    S.set('events', getEvents().filter(e => e.id !== t.dataset.id));
    renderMain();
  },

  // --- poids ---
  'weight-add': () => {
    const date = $('#w-date').value, kg = parseFloat($('#w-kg').value);
    if (!date || !kg || kg <= 0) { toast('Date et poids requis'); return; }
    const ws = S.get('weights', []).filter(w => w.date !== date);
    S.set('weights', [...ws, { date, kg }]);
    addXP(5, 'pesée notée'); renderMain();
  },
  'weight-del': t => {
    S.set('weights', S.get('weights', []).filter(w => w.date !== t.dataset.date));
    renderMain();
  },

  // --- galerie ---
  'photo-add': () => $('#photo-file').click(),
  'photo-del': t => {
    S.set('photos', S.get('photos', []).filter(p => p.id !== t.dataset.id));
    renderMain();
  },

  // --- quiz ---
  'quiz-start': t => { quiz = { type: t.dataset.quiz, idx: 0, score: 0, answered: null }; renderMain(); },
  'quiz-quit': () => { quiz = null; renderMain(); },
  'quiz-answer': t => {
    if (quiz.answered !== null) return;
    quiz.answered = parseInt(t.dataset.i, 10);
    const q = quizData()[quiz.idx];
    const bonne = quiz.type === 'signaux' ? q.bonne : (q.vrai ? 0 : 1);
    if (quiz.answered === bonne) { quiz.score++; addXP(5, 'bonne réponse'); }
    renderMain();
  },
  'quiz-next': () => {
    quiz.idx++; quiz.answered = null;
    if (quiz.idx >= quizData().length && quiz.score === quizData().length) addXP(10, 'sans faute !');
    renderMain();
  },

  // --- export / import / impression ---
  'export': () => {
    const data = {};
    S.keys().forEach(k => { try { data[k] = JSON.parse(localStorage.getItem(k)); } catch (e) { } });
    const blob = new Blob([JSON.stringify({ app: 'gary', version: 1, exporte: new Date().toISOString(), data }, null, 2)],
      { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `gary-sauvegarde-${todayStr()}.json`;
    a.click();
    URL.revokeObjectURL(a.href);
    toast('Sauvegarde exportée 💾');
  },
  'import': () => $('#import-file').click(),
  'print': () => window.print(),
};

document.addEventListener('click', e => {
  const t = e.target.closest('[data-action]');
  if (t && actions[t.dataset.action]) actions[t.dataset.action](t, e);
});
// checklists accessibles au clavier (role=checkbox)
document.addEventListener('keydown', e => {
  if ((e.key === ' ' || e.key === 'Enter') && e.target.matches('.check-item')) {
    e.preventDefault();
    actions['check-toggle'](e.target);
  }
});

// Champs identité : sauvegarde automatique à la saisie
document.addEventListener('input', e => {
  const f = e.target.dataset?.idfield;
  if (!f) return;
  const vals = S.get('identite', {});
  vals[f] = e.target.value;
  S.set('identite', vals);
});

// Import de sauvegarde JSON
document.addEventListener('change', e => {
  if (e.target.id === 'import-file' && e.target.files[0]) {
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const json = JSON.parse(reader.result);
        if (json.app !== 'gary' || !json.data) throw new Error('format');
        if (!confirm(`Importer cette sauvegarde du ${json.exporte?.slice(0, 10) || '?'} ? L'état actuel sera remplacé.`)) return;
        S.keys().forEach(k => localStorage.removeItem(k));
        Object.entries(json.data).forEach(([k, v]) => localStorage.setItem(k, JSON.stringify(v)));
        location.reload();
      } catch (err) { toast('⚠️ Fichier de sauvegarde invalide'); }
    };
    reader.readAsText(e.target.files[0]);
    e.target.value = '';
  }
  // Photo : redimensionnement canvas → dataURL stockée
  if (e.target.id === 'photo-file' && e.target.files[0]) {
    const file = e.target.files[0];
    const img = new Image();
    img.onload = () => {
      const MAX = 900;
      const scale = Math.min(1, MAX / Math.max(img.width, img.height));
      const cv = document.createElement('canvas');
      cv.width = Math.round(img.width * scale);
      cv.height = Math.round(img.height * scale);
      cv.getContext('2d').drawImage(img, 0, 0, cv.width, cv.height);
      const src = cv.toDataURL('image/jpeg', .8);
      S.set('photos', [{ id: 'p-' + Date.now(), date: todayStr(), src }, ...S.get('photos', [])]);
      URL.revokeObjectURL(img.src);
      addXP(5, 'photo ajoutée'); renderMain();
    };
    img.src = URL.createObjectURL(file);
    e.target.value = '';
  }
});

// Accordéons : état ouvert/fermé mémorisé (toggle ne bulle pas → capture)
document.addEventListener('toggle', e => {
  const id = e.target.dataset?.acc;
  if (!id) return;
  const open = S.get('acc', []);
  S.set('acc', e.target.open ? [...new Set([...open, id])] : open.filter(a => a !== id));
}, true);

// Impression : ouvrir tous les accordéons, puis restaurer
let printClosed = [];
window.addEventListener('beforeprint', () => {
  printClosed = [...document.querySelectorAll('details.acc:not([open])')];
  printClosed.forEach(d => d.open = true);
});
window.addEventListener('afterprint', () => {
  printClosed.forEach(d => d.open = false);
  printClosed = [];
});

// ============== INIT ==============
function init() {
  cleanupOldChecks();
  // Première ouverture : poids connu au lancement (25 kg, juillet 2026)
  if (S.get('weights', null) === null) {
    S.set('weights', [{ date: todayStr(), kg: D.profil.poidsInitial }]);
  }
  // Petit bonus de visite quotidienne
  const last = S.get('lastVisit', '');
  if (last !== todayStr()) {
    S.set('lastVisit', todayStr());
    if (last) setTimeout(() => addXP(3, 'de retour auprès de Gary'), 800);
  }
  renderAll();
}
init();

})();
