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

// ============== ICÔNES (Lucide, tracés inline, trait unifié 2px) ==============
const ICONS = {
  'home': '<path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" /><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />',
  'id-card': '<path d="M16 10h2" /><path d="M16 14h2" /><path d="M6.17 15a3 3 0 0 1 5.66 0" /><circle cx="9" cy="11" r="2" /><rect x="2" y="5" width="20" height="14" rx="2" />',
  'calendar-days': '<path d="M8 2v4" /><path d="M16 2v4" /><rect width="18" height="18" x="3" y="4" rx="2" /><path d="M3 10h18" /><path d="M8 14h.01" /><path d="M12 14h.01" /><path d="M16 14h.01" /><path d="M8 18h.01" /><path d="M12 18h.01" /><path d="M16 18h.01" />',
  'list-checks': '<path d="M13 5h8" /><path d="M13 12h8" /><path d="M13 19h8" /><path d="m3 17 2 2 4-4" /><path d="m3 7 2 2 4-4" />',
  'paw-print': '<circle cx="11" cy="4" r="2" /><circle cx="18" cy="8" r="2" /><circle cx="20" cy="16" r="2" /><path d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z" />',
  'chart-line': '<path d="M3 3v16a2 2 0 0 0 2 2h16" /><path d="m19 9-5 5-4-4-3 3" />',
  'gamepad-2': '<line x1="6" x2="10" y1="11" y2="11" /><line x1="8" x2="8" y1="9" y2="13" /><line x1="15" x2="15.01" y1="12" y2="12" /><line x1="18" x2="18.01" y1="10" y2="10" /><path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z" />',
  'search': '<path d="m21 21-4.34-4.34" /><circle cx="11" cy="11" r="8" />',
  'heart-handshake': '<path d="M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0 2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828l2.823-2.762" />',
  'moon': '<path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401" />',
  'sun': '<circle cx="12" cy="12" r="4" /><path d="M12 2v2" /><path d="M12 20v2" /><path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" /><path d="M2 12h2" /><path d="M20 12h2" /><path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" />',
  'footprints': '<path d="M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z" /><path d="M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z" /><path d="M16 17h4" /><path d="M4 13h4" />',
  'timer': '<line x1="10" x2="14" y1="2" y2="2" /><line x1="12" x2="15" y1="14" y2="11" /><circle cx="12" cy="14" r="8" />',
  'hourglass': '<path d="M5 22h14" /><path d="M5 2h14" /><path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22" /><path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2" />',
  'save': '<path d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" /><path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7" /><path d="M7 3v4a1 1 0 0 0 1 1h7" />',
  'gift': '<path d="M12 7v14" /><path d="M20 11v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8" /><path d="M7.5 7a1 1 0 0 1 0-5A4.8 8 0 0 1 12 7a4.8 8 0 0 1 4.5-5 1 1 0 0 1 0 5" /><rect x="3" y="7" width="18" height="4" rx="1" />',
  'triangle-alert': '<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" /><path d="M12 9v4" /><path d="M12 17h.01" />',
  'phone': '<path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />',
  'message-circle': '<path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" />',
  'weight': '<circle cx="12" cy="5" r="3" /><path d="M6.5 8a2 2 0 0 0-1.905 1.46L2.1 18.5A2 2 0 0 0 4 21h16a2 2 0 0 0 1.925-2.54L19.4 9.5A2 2 0 0 0 17.48 8Z" />',
  'camera': '<path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z" /><circle cx="12" cy="13" r="3" />',
  'printer': '<path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" /><path d="M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6" /><rect x="6" y="14" width="12" height="8" rx="1" />',
  'download': '<path d="M12 15V3" /><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><path d="m7 10 5 5 5-5" />',
  'upload': '<path d="M12 3v12" /><path d="m17 8-5-5-5 5" /><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />',
  'plus': '<path d="M5 12h14" /><path d="M12 5v14" />',
  'minus': '<path d="M5 12h14" />',
  'x': '<path d="M18 6 6 18" /><path d="m6 6 12 12" />',
  'star': '<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />',
  'trophy': '<path d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978" /><path d="M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978" /><path d="M18 9h1.5a1 1 0 0 0 0-5H18" /><path d="M4 22h16" /><path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z" /><path d="M6 9H4.5a1 1 0 0 1 0-5H6" />',
  'medal': '<path d="M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15" /><path d="M11 12 5.12 2.2" /><path d="m13 12 5.88-9.8" /><path d="M8 7h8" /><circle cx="12" cy="17" r="5" /><path d="M12 18v-2h-.5" />',
  'award': '<path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" /><circle cx="12" cy="8" r="6" />',
  'snowflake': '<path d="m10 20-1.25-2.5L6 18" /><path d="M10 4 8.75 6.5 6 6" /><path d="m14 20 1.25-2.5L18 18" /><path d="m14 4 1.25 2.5L18 6" /><path d="m17 21-3-6h-4" /><path d="m17 3-3 6 1.5 3" /><path d="M2 12h6.5L10 9" /><path d="m20 10-1.5 2 1.5 2" /><path d="M22 12h-6.5L14 15" /><path d="m4 10 1.5 2L4 14" /><path d="m7 21 3-6-1.5-3" /><path d="m7 3 3 6h4" />',
  'syringe': '<path d="m18 2 4 4" /><path d="m17 7 3-3" /><path d="M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5" /><path d="m9 11 4 4" /><path d="m5 19-3 3" /><path d="m14 4 6 6" />',
  'bug': '<path d="M12 20v-9" /><path d="M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z" /><path d="M14.12 3.88 16 2" /><path d="M21 21a4 4 0 0 0-3.81-4" /><path d="M21 5a4 4 0 0 1-3.55 3.97" /><path d="M22 13h-4" /><path d="M3 21a4 4 0 0 1 3.81-4" /><path d="M3 5a4 4 0 0 0 3.55 3.97" /><path d="M6 13H2" /><path d="m8 2 1.88 1.88" /><path d="M9 7.13V6a3 3 0 1 1 6 0v1.13" />',
  'pill': '<path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z" /><path d="m8.5 8.5 7 7" />',
  'stethoscope': '<path d="M11 2v2" /><path d="M5 2v2" /><path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1" /><path d="M8 15a6 6 0 0 0 12 0v-3" /><circle cx="20" cy="10" r="2" />',
  'map-pin': '<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" /><circle cx="12" cy="10" r="3" />',
  'dog': '<path d="M11.25 16.25h1.5L12 17z" /><path d="M16 14v.5" /><path d="M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444a11.702 11.702 0 0 0-.493-3.309" /><path d="M8 14v.5" /><path d="M8.5 8.5c-.384 1.05-1.083 2.028-2.344 2.5-1.931.722-3.576-.297-3.656-1-.113-.994 1.177-6.53 4-7 1.923-.321 3.651.845 3.651 2.235A7.497 7.497 0 0 1 14 5.277c0-1.39 1.844-2.598 3.767-2.277 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.45-2.239-2.5" />',
  'bone': '<path d="M17 10c.7-.7 1.69 0 2.5 0a2.5 2.5 0 1 0 0-5 .5.5 0 0 1-.5-.5 2.5 2.5 0 1 0-5 0c0 .81.7 1.8 0 2.5l-7 7c-.7.7-1.69 0-2.5 0a2.5 2.5 0 0 0 0 5c.28 0 .5.22.5.5a2.5 2.5 0 1 0 5 0c0-.81-.7-1.8 0-2.5Z" />',
  'check': '<path d="M20 6 9 17l-5-5" />',
  'scissors': '<circle cx="6" cy="6" r="3" /><path d="M8.12 8.12 12 12" /><path d="M20 4 8.12 15.88" /><circle cx="6" cy="18" r="3" /><path d="M14.8 14.8 20 20" />',
  'thermometer-sun': '<path d="M12 2v2" /><path d="M12 8a4 4 0 0 0-1.645 7.647" /><path d="M2 12h2" /><path d="M20 14.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0z" /><path d="m4.93 4.93 1.41 1.41" /><path d="m6.34 17.66-1.41 1.41" />',
  'utensils': '<path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" /><path d="M7 2v20" /><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />',
  'sparkles': '<path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" /><path d="M20 2v4" /><path d="M22 4h-4" /><circle cx="4" cy="20" r="2" />',
  'ban': '<circle cx="12" cy="12" r="10" /><path d="M4.929 4.929 19.07 19.071" />',
};
function icon(name, cls = '') {
  const inner = ICONS[name];
  if (!inner) return '';
  return `<svg class="icon ${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${inner}</svg>`;
}

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

// ============== TOAST ==============
let toastTimer;
function toast(msg) {
  const t = $('#toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 2600);
}

// ============== RÉCOMPENSES À DÉBLOQUER ==============
// Pas d'XP : des récompenses ponctuelles, gagnées par de vraies actions.
// Présentation dans gary-data.js (D.badges), conditions ici.
const flags = () => S.get('flags', {});
const setFlag = f => { const v = flags(); if (!v[f]) { v[f] = true; S.set('flags', v); } };
const sumStore = prefix => S.keys()
  .filter(k => k.startsWith('gary:' + prefix))
  .reduce((a, k) => { try { return a + (JSON.parse(localStorage.getItem(k)) || 0); } catch (e) { return a; } }, 0);
const allDone = p => {
  const items = checklistItems(p);
  const done = S.get(checkStoreKey(p), []);
  return items.length > 0 && items.every(i => done.includes(i.id));
};
const BADGE_CHECKS = {
  'premiere-balade': () => sumStore('walks:') >= 1,
  'promeneur': () => sumStore('walks:') >= 25,
  'grand-air': () => sumStore('walkmin:') >= 300,
  'jour-parfait': () => allDone('jour'),
  'semaine-reglee': () => allDone('semaine'),
  'mois-carre': () => allDone('mois'),
  'premiere-pesee': () => S.get('weights', []).length >= 2,
  'photographe': () => S.get('photos', []).length >= 3,
  'lecteur-de-gary': () => !!flags().quizSignaux,
  'demystificateur': () => !!flags().quizMythes,
  'sante-planifiee': () => ['vaccin', 'vermifuge', 'bravecto', 'veto']
    .every(t => { const d = dueForType(t); return d && daysFromToday(d.due) >= 0; }),
  'archiviste': () => !!flags().export,
  'fidele': () => (S.get('streak', { n: 1 }).n) >= 7,
  'champion': () => D.badges.filter(b => b.id !== 'champion')
    .every(b => S.get('badges', []).includes(b.id)),
};
// Vérifie tout, débloque le nouveau, toast. Appelé avant chaque rendu.
function refreshBadges() {
  const owned = S.get('badges', []);
  const news = D.badges.filter(b => !owned.includes(b.id) && BADGE_CHECKS[b.id] && BADGE_CHECKS[b.id]());
  if (!news.length) return 0;
  S.set('badges', [...owned, ...news.map(b => b.id)]);
  toast(news.length === 1
    ? `🏅 Récompense débloquée : ${news[0].nom} !`
    : `🏅 ${news.length} récompenses débloquées !`);
  // « Champion » peut se débloquer dans la foulée de la dernière
  return news.length + refreshBadges();
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
      <span class="check-box" aria-hidden="true">${done.includes(item.id) ? icon('check') : ''}</span>
      <span class="check-label">${esc(item.label)}</span>
      ${item.custom && !compact ? `<button class="check-del" data-action="check-del" data-periode="${p}" data-id="${esc(item.id)}" aria-label="Supprimer la tâche">${icon('x')}</button>` : ''}
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
        <td style="text-align:right"><button class="check-del" data-action="weight-del" data-date="${esc(w.date)}" aria-label="Supprimer la pesée du ${esc(fmtDate(w.date))}">${icon('x')}</button></td></tr>`).join('')}
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
        aria-pressed="${favs.includes(f.id)}" aria-label="Favori : ${esc(f.titre)}">${icon('star')}</button>
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

// ============== RÉCOMPENSES — RENDU ==============
function rewardGridHTML() {
  const owned = S.get('badges', []);
  return `<div class="reward-grid">
    ${D.badges.map(b => `
      <div class="reward-tile ${owned.includes(b.id) ? '' : 'locked'}">
        ${icon(b.icon)}
        <strong>${esc(b.nom)}</strong>
        <span>${esc(b.desc)}</span>
      </div>`).join('')}
  </div>`;
}

// ============== VUES ==============
const TABS = [
  { id: 'accueil', icon: 'home', label: 'Accueil' },
  { id: 'fiche', icon: 'id-card', label: 'Fiche' },
  { id: 'sante', icon: 'calendar-days', label: 'Santé' },
  { id: 'routines', icon: 'list-checks', label: 'Routines' },
  { id: 'comportement', icon: 'paw-print', label: 'Comportement' },
  { id: 'suivi', icon: 'chart-line', label: 'Suivi' },
  { id: 'jeux', icon: 'gamepad-2', label: 'Jeux', mode: 'perso' },
];

const VIEWS = {

  // ---------- ACCUEIL ----------
  accueil() {
    const ws = S.get('weights', []);
    const lastW = ws.length ? [...ws].sort((a, b) => a.date < b.date ? -1 : 1).slice(-1)[0] : null;
    const walks = S.get('walks:' + todayStr(), 0);
    const walkMin = S.get('walkmin:' + todayStr(), 0);
    const stim = S.get('stim:' + todayStr(), 0);
    const cdTypes = ['vaccin', 'vermifuge', 'bravecto', 'veto'];
    const countdowns = cdTypes.map(t => {
      const st = D.santeTypes.find(s => s.id === t);
      const d = dueForType(t);
      return `<div class="countdown-row">
        ${icon(st.icone)}<span class="cd-label">${esc(st.label)}</span>
        ${d ? dueBadge(d.due) : '<span class="badge badge-off">à planifier</span>'}
      </div>`;
    }).join('');
    const owned = S.get('badges', []);
    const lastBadge = owned.length ? D.badges.find(b => b.id === owned[owned.length - 1]) : null;

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
        <h2>${icon('sun')} Aujourd'hui</h2>
        ${checklistHTML('jour', { compact: true })}
      </section>

      <section class="card">
        <h2>${icon('footprints')} Compteurs du jour</h2>
        <div style="display:grid;gap:14px">
          <div class="counter">
            <span style="flex:1">Promenades</span>
            <button class="btn-round" data-action="walk-minus" aria-label="Retirer une promenade">${icon('minus')}</button>
            <span class="counter-val">${walks}</span>
            <button class="btn-round" data-action="walk-plus" aria-label="Ajouter une promenade">${icon('plus')}</button>
          </div>
          <div class="counter">
            <span style="flex:1">Temps de balade</span>
            <button class="btn-round" data-action="walkmin-minus" aria-label="Retirer 10 minutes de balade">${icon('minus')}</button>
            <span class="counter-val">${walkMin}<small style="font-size:.6em"> min</small></span>
            <button class="btn-round" data-action="walkmin-plus" aria-label="Ajouter 10 minutes de balade">${icon('plus')}</button>
          </div>
          <div class="counter">
            <span style="flex:1">Stimulation (jeu, flair, éducation)</span>
            <button class="btn-round" data-action="stim-minus" aria-label="Retirer 5 minutes">${icon('minus')}</button>
            <span class="counter-val">${stim}<small style="font-size:.6em"> min</small></span>
            <button class="btn-round" data-action="stim-plus" aria-label="Ajouter 5 minutes">${icon('plus')}</button>
          </div>
        </div>
      </section>

      <section class="card">
        <h2>${icon('hourglass')} Échéances santé</h2>
        ${countdowns}
        <p class="faint" style="margin-top:8px">Détails et ajouts dans l'onglet Santé.</p>
      </section>

      <section class="card" data-mode="perso">
        <h2>${icon('medal')} Récompenses</h2>
        <p class="muted">${owned.length} / ${D.badges.length} débloquée${owned.length > 1 ? 's' : ''}${lastBadge ? ` · dernière : ${esc(lastBadge.nom)}` : ''}</p>
        <p class="faint">La collection complète est dans l'onglet Jeux.</p>
      </section>

      <section class="card">
        <h2>${icon('save')} Sauvegarde & transmission</h2>
        <p class="muted">Exporter = tout l'état de l'app dans un fichier JSON (à garder, ou à envoyer sur un autre appareil / à la personne qui garde Gary).</p>
        <div class="btn-row">
          <button class="btn btn-primary" data-action="export">${icon('download')} Exporter (JSON)</button>
          <button class="btn" data-action="import">${icon('upload')} Importer</button>
          <button class="btn" data-action="print">${icon('printer')} Imprimer la page</button>
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
        <h2>${icon('id-card')} ${esc(D.profil.nom)}</h2>
        <p><strong>${esc(D.profil.race)}</strong> · ${esc(D.profil.sexe)}${D.profil.castre ? '' : ' non castré'} ·
          né le ${fmtDate(D.profil.naissance)} à ${esc(D.profil.lieuNaissance)} (${ageStr()})</p>
        <p class="muted">Croquettes : ${esc(D.profil.croquettes)}</p>
      </section>

      <section class="card">
        <h2>${icon('gift')} Mode d'emploi récompense <span class="chip chip-fait">vital pour un tiers</span></h2>
        <p>${esc(D.recompenses.resume)}</p>
        ${D.recompenses.hierarchie.map(h => `
          <h3>${esc(h.rang)} — ${esc(h.quoi)}</h3>
          <p class="muted">${esc(h.detail)}</p>`).join('')}
        <h3>Interdits</h3>
        ${D.recompenses.interdits.map(i => `<p class="muted">${icon('ban')} ${esc(i)}</p>`).join('')}
      </section>

      <section class="card">
        <h2>${icon('triangle-alert')} Dangers & spécificités</h2>
        ${D.dangers.map(d => `
          <h3>${icon(d.icone)} ${esc(d.titre)}</h3>
          <p class="muted">${esc(d.detail)}</p>`).join('')}
      </section>

      <section class="card">
        <h2>${icon('phone')} Contacts & infos pratiques</h2>
        ${isGarde() ? '' : '<p class="faint">Ces champs s\'enregistrent automatiquement (aucune valeur n\'est pré-inventée).</p>'}
        ${champsHTML}
      </section>

      <section class="card">
        <h2>${icon('message-circle')} Ordres utiles pendant une garde</h2>
        ${D.ordres.filter(o => o.utile).map(o => `
          <h3>« ${esc(o.nom)} »</h3>
          ${o.note ? `<p class="muted">${esc(o.note)}</p>` : ''}`).join('')}
        <p class="faint" style="margin-top:8px">La liste complète des ordres est dans l'onglet Comportement.</p>
      </section>`;
  },

  // ---------- SANTÉ ----------
  sante() {
    const evs = getEvents().map(e => ({ ...e, due: nextDue(e) })).sort((a, b) => a.due < b.due ? -1 : 1);
    const typeOpts = D.santeTypes.map(t => `<option value="${t.id}">${esc(t.label)}</option>`).join('');
    return `
      <section class="card">
        <h2>${icon('calendar-days')} Calendrier santé</h2>
        <p class="faint">Pour un soin récurrent, entrer la date de la DERNIÈRE fois : l'échéance suivante est calculée. Pour un rendez-vous, entrer la date prévue (récurrence 0).</p>
        ${evs.length ? evs.map(e => {
          const st = D.santeTypes.find(s => s.id === e.type) || D.santeTypes.at(-1);
          return `<div class="event-row">
            ${icon(st.icone)}
            <div class="ev-main">
              <div>${esc(e.label)}</div>
              <div class="ev-date">${e.rec > 0 ? `fait le ${fmtDate(e.date)} · tous les ${e.rec} j → prochaine : ${fmtDate(e.due)}` : `prévu le ${fmtDate(e.date)}`}</div>
            </div>
            ${dueBadge(e.due)}
            <button class="check-del" data-action="event-del" data-id="${esc(e.id)}" aria-label="Supprimer ${esc(e.label)}">${icon('x')}</button>
          </div>`;
        }).join('') : '<p class="muted">Aucun événement. Ajoute le dernier vaccin, vermifuge, Bravecto… ci-dessous.</p>'}
      </section>

      <section class="card">
        <h2>${icon('plus')} Ajouter un événement</h2>
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
      { p: 'jour', icon: 'sun', titre: 'Chaque jour', ss: `se réinitialise chaque jour (${fmtDate(todayStr())})` },
      { p: 'semaine', icon: 'calendar-days', titre: 'Chaque semaine', ss: `semaine ${weekKey().split('-W')[1]}` },
      { p: 'mois', icon: 'moon', titre: 'Chaque mois', ss: monthKey() },
    ];
    return blocs.map(b => `
      <section class="card">
        <h2>${icon(b.icon)} ${b.titre} <span class="faint" style="font-weight:400">· ${esc(b.ss)}</span></h2>
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

      ${aSavoir.length ? `<h2 style="font-size:.95rem;margin:18px 4px 10px;color:var(--ink-soft)">${icon('sparkles')} Pour aller plus loin (à la demande)</h2>` : ''}
      ${aSavoir.map(ficheHTML).join('')}

      <section class="card" data-mode="perso">
        <h2>${icon('message-circle')} Ordres connus (${D.ordres.length})</h2>
        ${[...new Set(D.ordres.map(o => o.cat))].map(cat => `
          <h3>${esc(cat)}</h3>
          <p class="muted">${D.ordres.filter(o => o.cat === cat).map(o => `« ${esc(o.nom)} »`).join(' · ')}</p>`).join('')}
      </section>

      <section class="card" data-mode="perso">
        <h2>${icon('bone')} Chantiers d'éducation en cours</h2>
        ${D.chantiers.map(c => `<p class="muted">→ ${esc(c)}</p>`).join('')}
        <p class="faint" style="margin-top:8px">Les protocoles détaillés restent en coaching — module « Protocoles » possible en phase 2, sourcé.</p>
      </section>`;
  },

  // ---------- SUIVI (poids + galerie) ----------
  suivi() {
    const photos = S.get('photos', []);
    return `
      <section class="card">
        <h2>${icon('weight')} Courbe de poids</h2>
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
        <h2>${icon('camera')} Galerie</h2>
        ${photos.length ? `<div class="gallery-grid">
          ${photos.map(p => `<div class="photo-cell">
            <img src="${p.src}" alt="Photo de Gary du ${esc(fmtDate(p.date))}" loading="lazy">
            <button class="photo-del" data-action="photo-del" data-id="${esc(p.id)}" aria-label="Supprimer la photo">${icon('x')}</button>
          </div>`).join('')}
        </div>` : '<p class="muted">Aucune photo pour l\'instant.</p>'}
        <div class="btn-row">
          <button class="btn btn-primary" data-action="photo-add">${icon('camera')} Ajouter une photo</button>
        </div>
        <p class="faint">Les photos sont réduites et stockées dans le navigateur — l'espace est limité, garde les originaux ailleurs.</p>
        <input type="file" id="photo-file" accept="image/*" class="sr-only" aria-hidden="true" tabindex="-1">
      </section>`;
  },

  // ---------- JEUX ----------
  jeux() {
    if (quiz) return quizHTML();
    return `
      <section class="card">
        <h2>${icon('paw-print')} Que dit Gary ?</h2>
        <p class="muted">Lire ses signaux comme un pro — ${D.quizSignaux.length} situations.</p>
        <div class="btn-row"><button class="btn btn-primary" data-action="quiz-start" data-quiz="signaux">Jouer</button></div>
      </section>

      <section class="card">
        <h2>${icon('snowflake')} Vrai ou Mythe ?</h2>
        <p class="muted">Démêler les faits du folklore sur le Samoyède — ${D.quizMythes.length} affirmations.</p>
        <div class="btn-row"><button class="btn btn-primary" data-action="quiz-start" data-quiz="mythes">Jouer</button></div>
      </section>

      <section class="card">
        <h2>${icon('medal')} Récompenses</h2>
        <p class="faint">Elles se débloquent en s'occupant de Gary — pas de points, juste des moments.</p>
        ${rewardGridHTML()}
      </section>`;
  },
};

// ============== QUIZ ==============
function quizData() { return quiz.type === 'signaux' ? D.quizSignaux : D.quizMythes; }
function quizHTML() {
  const data = quizData();
  const titre = quiz.type === 'signaux' ? `${icon('paw-print')} Que dit Gary ?` : `${icon('snowflake')} Vrai ou Mythe ?`;

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
          <strong>${quiz.answered === bonne ? 'Exact !' : 'Pas tout à fait.'}</strong> ${esc(q.explication)}
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
      <button class="btn-round" data-action="search-toggle" aria-label="Rechercher" aria-expanded="false">${icon('search')}</button>
      <button class="btn-round" data-action="garde-toggle" aria-pressed="${isGarde()}"
        aria-label="Mode garde : n'afficher que l'essentiel pour un soignant" title="Mode garde">${icon('heart-handshake')}</button>
      <button class="btn-round" data-action="theme-toggle"
        aria-label="Basculer clair / sombre">${icon(S.get('theme', 'clair') === 'sombre' ? 'sun' : 'moon')}</button>
    </div>
    <div class="garde-banner">${icon('heart-handshake')} Mode garde actif — seul l'essentiel pour s'occuper de Gary est affiché.</div>
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
      aria-selected="${t.id === currentTab}">${icon(t.icon)} ${t.label}</button>`).join('');
}

function renderMain() {
  // débloque les récompenses gagnées par la dernière action AVANT de rendre
  refreshBadges();
  if (isGarde() && TABS.find(t => t.id === currentTab)?.mode === 'perso') currentTab = 'accueil';
  $('#main').innerHTML = VIEWS[currentTab]();
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
    S.set(key, done.includes(id) ? done.filter(d => d !== id) : [...done, id]);
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
  'walk-plus': () => { S.set('walks:' + todayStr(), S.get('walks:' + todayStr(), 0) + 1); renderMain(); },
  'walk-minus': () => { S.set('walks:' + todayStr(), Math.max(0, S.get('walks:' + todayStr(), 0) - 1)); renderMain(); },
  'walkmin-plus': () => { S.set('walkmin:' + todayStr(), S.get('walkmin:' + todayStr(), 0) + 10); renderMain(); },
  'walkmin-minus': () => { S.set('walkmin:' + todayStr(), Math.max(0, S.get('walkmin:' + todayStr(), 0) - 10)); renderMain(); },
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
    renderMain();
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
    if (quiz.answered === bonne) quiz.score++;
    renderMain();
  },
  'quiz-next': () => {
    quiz.idx++; quiz.answered = null;
    // sans-faute → récompense correspondante
    if (quiz.idx >= quizData().length && quiz.score === quizData().length) {
      setFlag(quiz.type === 'signaux' ? 'quizSignaux' : 'quizMythes');
    }
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
    setFlag('export');
    toast('Sauvegarde exportée 💾');
    refreshBadges();
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
      renderMain();
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
  // Série de visites quotidiennes (pour la récompense « Fidèle au poste »)
  const streak = S.get('streak', { last: '', n: 0 });
  if (streak.last !== todayStr()) {
    const n = streak.last === addDays(todayStr(), -1) ? streak.n + 1 : 1;
    S.set('streak', { last: todayStr(), n });
  }
  renderAll();
}
init();

})();
