# CV Interactif

_Started 2026-05-14 16:00 UTC_

---

## User

<system-info comment="Only acknowledge these if relevant">
Project title is now "cv interactif"
Current date is now May 14, 2026
</system-info>

<default aesthetic>
If no references, art direction or design systems were provided, use this default professional modern, minimal aesthetic as a base. Declare your choice out loud so you stick to it. Guidance:
- Choose a type pairing from web-safe set or Google Fonts. Helvetica is a good choice. Avoid hard-to-read or overly stylized fonts. Use 1-3 fonts only.
- Foreground and background: choose a color tone (warm, cool, neutral, something in-between). Use subtly-toned whites and blacks; avoid saturations above 0.02 for whites.
- Accents: choose 0-2 additional accent colors using oklch. All accents should share same chroma and lightness; vary hue.
- NEVER write out an SVG yourself that's more complicated than a square, circle, diamond, etc.
- For imagery, never hand-draw SVGs; use subtly-striped SVG placeholders instead with monospace explainers for what should be dropped there (e.g. “product shot”)

CRITICAL: ignore default aesthetic entirely if given other aesthetic instructions like reference images, design systems or guidance, or if there are files in the project already.
</default aesthetic>

<pasted_text name="Pasted text (1587 lines)">
<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Compte Rendu — CV Interactif Lucy Hurley</title>
<link href="https://fonts.googleapis.com/css2?family=Unbounded:wght@400;700;900&family=Space+Grotesk:wght@300;400;500;700&display=swap" rel="stylesheet">
<style>
:root {
  --yellow:  #ffd60a;
  --red:     #ff3c3c;
  --blue:    #0057ff;
  --green:   #00c896;
  --purple:  #c400ff;
  --orange:  #ff8c00;
  --black:   #0a0a0a;
  --white:   #fafaf5;
  --grey:    #f0f0ea;
  --border:  2.5px solid #0a0a0a;
  --shadow:  4px 4px 0 #0a0a0a;
  --shadow-lg: 6px 6px 0 #0a0a0a;
  --ff-d: 'Unbounded', sans-serif;
  --ff-b: 'Space Grotesk', sans-serif;
}

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }

body {
  font-family: var(--ff-b);
  background: var(--white);
  color: var(--black);
  font-size: 14px;
  line-height: 1.65;
  -webkit-font-smoothing: antialiased;
}

/* LAYOUT */
.doc {
  max-width: 960px;
  margin: 0 auto;
  padding: 48px 32px 100px;
}

/* COVER */
.cover {
  background: var(--yellow);
  border: var(--border);
  box-shadow: var(--shadow-lg);
  padding: 48px 40px;
  margin-bottom: 48px;
  position: relative;
  overflow: hidden;
}
.cover::before {
  content: '✦ ✦ ✦ ✦ ✦ ✦ ✦ ✦ ✦ ✦ ✦ ✦';
  position: absolute;
  bottom: 12px; left: 0; right: 0;
  text-align: center;
  font-size: 11px;
  letter-spacing: 6px;
  color: rgba(0,0,0,.15);
}
.cover-eyebrow {
  font-family: var(--ff-d);
  font-size: 9px; font-weight: 700;
  letter-spacing: 3px; text-transform: uppercase;
  color: rgba(0,0,0,.45);
  margin-bottom: 16px;
}
.cover-title {
  font-family: var(--ff-d);
  font-size: clamp(28px, 5vw, 44px);
  font-weight: 900;
  line-height: 1;
  letter-spacing: -1px;
  text-transform: uppercase;
  margin-bottom: 6px;
}
.cover-title span { color: var(--red); }
.cover-sub {
  font-size: 13px; font-weight: 400;
  color: rgba(0,0,0,.55);
  margin-top: 16px;
}
.cover-meta {
  display: flex; flex-wrap: wrap; gap: 10px;
  margin-top: 24px;
}
.meta-pill {
  background: var(--black); color: var(--white);
  border: var(--border);
  padding: 5px 14px;
  font-family: var(--ff-d);
  font-size: 9px; font-weight: 700;
  letter-spacing: 1.5px; text-transform: uppercase;
}

/* SECTION HEADERS */
.section {
  margin-bottom: 48px;
}
.section-head {
  display: flex; align-items: center; gap: 14px;
  margin-bottom: 24px;
}
.section-num {
  font-family: var(--ff-d);
  font-size: 11px; font-weight: 900;
  background: var(--black); color: var(--yellow);
  width: 36px; height: 36px;
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0;
  border: var(--border);
}
.section-title {
  font-family: var(--ff-d);
  font-size: clamp(16px, 3vw, 20px);
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: -0.3px;
}
.section-line {
  flex: 1; height: 3px; background: var(--black);
}

/* CARDS */
.card {
  background: var(--white);
  border: var(--border);
  box-shadow: var(--shadow);
  padding: 24px;
  margin-bottom: 16px;
  position: relative;
  overflow: hidden;
}
.card::before {
  content: '';
  position: absolute; top: 0; left: 0; right: 0;
  height: 4px;
}
.card.c-yellow::before { background: var(--yellow); }
.card.c-red::before    { background: var(--red); }
.card.c-blue::before   { background: var(--blue); }
.card.c-green::before  { background: var(--green); }
.card.c-purple::before { background: var(--purple); }
.card.c-orange::before { background: var(--orange); }

.card-label {
  font-family: var(--ff-d);
  font-size: 8.5px; font-weight: 700;
  letter-spacing: 2.5px; text-transform: uppercase;
  color: rgba(0,0,0,.35);
  margin-bottom: 12px;
  display: flex; align-items: center; gap: 8px;
}
.card-label::after {
  content: ''; flex: 1; height: 1.5px; background: rgba(0,0,0,.1);
}
.card-title {
  font-family: var(--ff-d);
  font-size: 14px; font-weight: 700;
  text-transform: uppercase; letter-spacing: .3px;
  margin-bottom: 8px;
}

/* GRID */
.grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
.grid-3 { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px; }

@media (max-width: 640px) {
  .grid-2, .grid-3 { grid-template-columns: 1fr; }
}

/* TAGS */
.tag-cloud { display: flex; flex-wrap: wrap; gap: 7px; margin-top: 10px; }
.tag {
  font-family: var(--ff-d);
  font-size: 9px; font-weight: 700;
  letter-spacing: .5px; text-transform: uppercase;
  background: var(--black); color: var(--white);
  border: var(--border); padding: 4px 11px;
}
.tag.inv {
  background: var(--white); color: var(--black);
}
.tag.col-y { background: var(--yellow); color: var(--black); }
.tag.col-r { background: var(--red);    color: var(--white); }
.tag.col-b { background: var(--blue);   color: var(--white); }
.tag.col-g { background: var(--green);  color: var(--black); }
.tag.col-p { background: var(--purple); color: var(--white); }
.tag.col-o { background: var(--orange); color: var(--white); }

/* EASTER EGG CARDS */
.egg-card {
  background: var(--black);
  border: var(--border);
  box-shadow: var(--shadow-lg);
  padding: 20px;
  margin-bottom: 12px;
  position: relative;
}
.egg-header {
  display: flex; align-items: center; gap: 12px;
  margin-bottom: 10px;
}
.egg-emoji { font-size: 28px; flex-shrink: 0; }
.egg-title {
  font-family: var(--ff-d);
  font-size: 12px; font-weight: 700;
  color: var(--yellow); text-transform: uppercase;
  letter-spacing: .5px;
}
.egg-trigger {
  display: inline-block;
  background: var(--yellow);
  border: 2px solid var(--yellow);
  color: var(--black);
  font-family: var(--ff-d);
  font-size: 8px; font-weight: 700;
  padding: 2px 9px; letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 6px;
}
.egg-body {
  font-size: 12px; color: rgba(255,255,255,.65);
  line-height: 1.65; font-weight: 300;
}
.egg-result {
  margin-top: 8px;
  font-size: 11px; color: var(--green);
  font-weight: 600;
}
.egg-status {
  position: absolute; top: 16px; right: 16px;
  font-family: var(--ff-d);
  font-size: 8px; font-weight: 700;
  letter-spacing: 1px; text-transform: uppercase;
}
.egg-status.done { color: var(--green); }
.egg-status.planned { color: var(--orange); }
.egg-status.idea { color: var(--purple); }

/* XP ITEMS */
.xp-item {
  border: var(--border);
  box-shadow: var(--shadow);
  margin-bottom: 12px;
  overflow: hidden;
}
.xp-header {
  display: grid;
  grid-template-columns: 10px 1fr auto;
  gap: 14px; align-items: start;
  padding: 14px 16px;
  background: var(--grey);
  border-bottom: var(--border);
}
.xp-dot {
  width: 10px; height: 10px;
  border: var(--border);
  margin-top: 4px; flex-shrink: 0;
}
.xp-role {
  font-family: var(--ff-d);
  font-size: 11.5px; font-weight: 700;
  text-transform: uppercase; letter-spacing: .3px;
}
.xp-co   { font-size: 11px; color: var(--blue); font-weight: 700; margin-top: 3px; }
.xp-date { font-size: 10px; color: rgba(0,0,0,.4); margin-top: 2px; }
.xp-badge {
  font-family: var(--ff-d);
  font-size: 8px; font-weight: 700;
  background: var(--black); color: var(--white);
  padding: 3px 9px; white-space: nowrap;
  text-transform: uppercase; letter-spacing: 1px;
  align-self: start;
}
.xp-body {
  padding: 14px 16px;
  font-size: 12px; color: var(--black);
  line-height: 1.7; opacity: .75;
}
.xp-chips { display: flex; flex-wrap: wrap; gap: 5px; margin-top: 10px; }
.xchip {
  font-family: var(--ff-d);
  font-size: 8px; font-weight: 700;
  background: var(--black); color: var(--white);
  border: var(--border); padding: 3px 9px;
  text-transform: uppercase; letter-spacing: .5px;
}

/* SKILL BAR */
.sk-row { margin-bottom: 14px; }
.sk-head { display: flex; justify-content: space-between; margin-bottom: 5px; }
.sk-name {
  font-family: var(--ff-d);
  font-size: 10px; font-weight: 700;
  text-transform: uppercase; letter-spacing: .5px;
}
.sk-pct { font-family: var(--ff-d); font-size: 12px; font-weight: 900; color: var(--red); }
.sk-track {
  height: 10px; background: var(--grey);
  border: var(--border); overflow: hidden;
}
.sk-fill {
  height: 100%; background: var(--black);
  position: relative;
}
.sk-fill::after {
  content: '';
  position: absolute; inset: 0;
  background: repeating-linear-gradient(-45deg, rgba(255,255,255,.15) 0, rgba(255,255,255,.15) 4px, transparent 4px, transparent 8px);
}

/* ITERATION TABLE */
.iter-table {
  width: 100%; border-collapse: collapse;
  border: var(--border);
  box-shadow: var(--shadow);
}
.iter-table th {
  background: var(--black); color: var(--yellow);
  font-family: var(--ff-d);
  font-size: 9px; font-weight: 700;
  text-transform: uppercase; letter-spacing: 1.5px;
  padding: 10px 14px; text-align: left;
  border-right: 1px solid rgba(255,255,255,.1);
}
.iter-table td {
  padding: 11px 14px; font-size: 12px;
  border-top: 1.5px solid rgba(0,0,0,.08);
  border-right: 1.5px solid rgba(0,0,0,.08);
  vertical-align: top; line-height: 1.6;
}
.iter-table tr:nth-child(even) td { background: var(--grey); }
.status-done    { color: var(--green); font-weight: 700; font-family: var(--ff-d); font-size: 9px; text-transform: uppercase; }
.status-next    { color: var(--orange); font-weight: 700; font-family: var(--ff-d); font-size: 9px; text-transform: uppercase; }
.status-idea    { color: var(--purple); font-weight: 700; font-family: var(--ff-d); font-size: 9px; text-transform: uppercase; }

/* PROFILE BLOCK */
.profile-block {
  background: var(--black);
  border: var(--border);
  box-shadow: var(--shadow-lg);
  padding: 28px;
  margin-bottom: 16px;
  color: var(--white);
}
.profile-quote {
  font-size: 15px; font-weight: 300;
  line-height: 1.8; font-style: italic;
  color: rgba(255,255,255,.75);
  border-left: 4px solid var(--yellow);
  padding-left: 18px;
}
.profile-highlight {
  font-weight: 700; font-style: normal;
  color: var(--yellow);
}

/* DIVIDER */
.divider {
  height: 4px; background: var(--black);
  margin: 40px 0;
}

/* CHECKLIST */
.checklist { list-style: none; display: flex; flex-direction: column; gap: 8px; }
.checklist li {
  display: flex; align-items: flex-start; gap: 12px;
  font-size: 13px; line-height: 1.6;
}
.check-icon {
  width: 22px; height: 22px;
  border: var(--border);
  display: flex; align-items: center; justify-content: center;
  font-size: 11px; font-weight: 700;
  flex-shrink: 0; margin-top: 1px;
}
.check-icon.done { background: var(--green); color: var(--black); }
.check-icon.next { background: var(--orange); color: var(--black); }
.check-icon.idea { background: var(--purple); color: var(--white); }

/* WIREFRAME NOTE */
.wf-note {
  background: var(--yellow);
  border: var(--border);
  box-shadow: var(--shadow);
  padding: 14px 18px;
  margin-top: 12px;
  font-size: 12px; font-weight: 500;
}
.wf-note strong {
  font-family: var(--ff-d); font-size: 10px;
  font-weight: 700; text-transform: uppercase;
  letter-spacing: 1px; display: block; margin-bottom: 4px;
}

/* TOC */
.toc {
  background: var(--grey); border: var(--border);
  box-shadow: var(--shadow); padding: 24px; margin-bottom: 48px;
}
.toc-title {
  font-family: var(--ff-d); font-size: 10px; font-weight: 700;
  letter-spacing: 2px; text-transform: uppercase;
  margin-bottom: 16px; color: rgba(0,0,0,.4);
}
.toc-list { list-style: none; display: flex; flex-direction: column; gap: 6px; }
.toc-list li a {
  font-family: var(--ff-d);
  font-size: 11px; font-weight: 700;
  text-transform: uppercase; letter-spacing: .5px;
  color: var(--black); text-decoration: none;
  display: flex; align-items: center; gap: 10px;
  transition: color .2s;
}
.toc-list li a:hover { color: var(--red); }
.toc-num {
  background: var(--black); color: var(--yellow);
  width: 22px; height: 22px;
  display: flex; align-items: center; justify-content: center;
  font-size: 10px; flex-shrink: 0;
}

/* PRINT */
@media print {
  body { background: white; font-size: 12px; }
  .doc { padding: 20px; }
  .card, .egg-card, .xp-item { box-shadow: none; }
}
</style>
</head>
<body>
<div class="doc">

  <!-- COVER -->
  <div class="cover">
    <div class="cover-eyebrow">Document de référence — Confidentiel</div>
    <div class="cover-title">CV INTERACTIF<br><span>LUCY HURLEY</span></div>
    <p class="cover-sub">
      Compte rendu complet : informations validées, wireframe, easter eggs,
      design system, contenu réel et itérations à venir.
    </p>
    <div class="cover-meta">
      <span class="meta-pill">Version 1.0</span>
      <span class="meta-pill">Mai 2026</span>
      <span class="meta-pill">Neubrutalism</span>
      <span class="meta-pill">HTML Interactif</span>
      <span class="meta-pill">Mobile First</span>
    </div>
  </div>

  <!-- TOC -->
  <div class="toc">
    <div class="toc-title">Table des matières</div>
    <ul class="toc-list">
      <li><a href="#s1"><span class="toc-num">01</span> Profil personnel & identité</a></li>
      <li><a href="#s2"><span class="toc-num">02</span> Informations de contact & réseaux</a></li>
      <li><a href="#s3"><span class="toc-num">03</span> Parcours professionnel complet</a></li>
      <li><a href="#s4"><span class="toc-num">04</span> Compétences & outils</a></li>
      <li><a href="#s5"><span class="toc-num">05</span> Formation</a></li>
      <li><a href="#s6"><span class="toc-num">06</span> Design system — Neubrutalism</a></li>
      <li><a href="#s7"><span class="toc-num">07</span> Architecture & wireframe validé</a></li>
      <li><a href="#s8"><span class="toc-num">08</span> Easter eggs — tous les détails</a></li>
      <li><a href="#s9"><span class="toc-num">09</span> Contenu Fun & Secret</a></li>
      <li><a href="#s10"><span class="toc-num">10</span> Itérations & roadmap</a></li>
      <li><a href="#s11"><span class="toc-num">11</span> Checklist UX & accessibilité</a></li>
    </ul>
  </div>

  <!-- ═══════════════════════════════════════════
       01 — PROFIL
  ═══════════════════════════════════════════ -->
  <div class="section" id="s1">
    <div class="section-head">
      <div class="section-num">01</div>
      <div class="section-title">Profil personnel &amp; identité</div>
      <div class="section-line"></div>
    </div>

    <div class="profile-block">
      <div class="card-label" style="color:rgba(255,255,255,.3)">Citation de référence — à utiliser dans la section Secret</div>
      <div class="profile-quote">
        "Je suis le genre de personne qu'on croit avoir comprise trop vite,
        jusqu'au moment où tout se contredit. À la fois
        <span class="profile-highlight">profondément sensible</span> et presque
        <span class="profile-highlight">brutalement lucide</span>, je fonctionne à l'intuition,
        à l'instinct, au ressenti vrai. J'aime ce qui est vivant, intense, sincère :
        les animaux, les nuits qui refont le monde, les conversations qui grattent l'âme,
        les départs improvisés sans billet retour, les gens qui pensent trop et ressentent encore plus.
        Un mélange étrange entre <span class="profile-highlight">feu et contrôle</span>,
        instinct et analyse, tendresse et survie.
        Bref — un organisme complexe.
        <span class="profile-highlight">Comme un loup qui aurait appris le marketing digital
        et la philosophie existentielle par fatigue de la civilisation humaine.</span>"
      </div>
    </div>

    <div class="grid-2">
      <div class="card c-yellow">
        <div class="card-label">Identité</div>
        <div style="display:flex;flex-direction:column;gap:8px;font-size:13px;">
          <div><strong>Prénom</strong> — Lucy</div>
          <div><strong>Nom</strong> — Hurley</div>
          <div><strong>Localisation</strong> — 22 rue des résistants, 59136 Wavrin, Nord</div>
          <div><strong>Permis</strong> — Permis B</div>
        </div>
      </div>
      <div class="card c-red">
        <div class="card-label">Titres professionnels</div>
        <div class="tag-cloud">
          <span class="tag">Chef de Projet Digital</span>
          <span class="tag">UX/UI Designer</span>
          <span class="tag">Head of Digital</span>
          <span class="tag">Directrice Digitale</span>
          <span class="tag">Fondatrice</span>
          <span class="tag">Community Manager</span>
        </div>
      </div>
    </div>

    <div class="card c-purple">
      <div class="card-label">Traits de personnalité (à infuser dans tout le contenu)</div>
      <div class="grid-2" style="margin-top:4px;">
        <ul style="list-style:none;display:flex;flex-direction:column;gap:7px;font-size:12.5px;">
          <li>🔥 Sensible ET brutalement lucide</li>
          <li>🐺 Indépendante jusqu'à l'excès, loyale entière</li>
          <li>🌙 Fonctionne à l'intuition et à l'instinct</li>
          <li>⚡ Vite, efficace — inbox à zéro, livrables en avance</li>
        </ul>
        <ul style="list-style:none;display:flex;flex-direction:column;gap:7px;font-size:12.5px;">
          <li>🎨 Créatrice nativement (design, écriture, idées)</li>
          <li>🐾 Amoureuse des animaux — non négociable</li>
          <li>💥 Déteste le superficiel et les vérités édulcorées</li>
          <li>🌍 Aime les départs sans billet retour</li>
        </ul>
      </div>
    </div>
  </div>

  <div class="divider"></div>

  <!-- ═══════════════════════════════════════════
       02 — CONTACT
  ═══════════════════════════════════════════ -->
  <div class="section" id="s2">
    <div class="section-head">
      <div class="section-num">02</div>
      <div class="section-title">Contact &amp; Réseaux</div>
      <div class="section-line"></div>
    </div>

    <div class="grid-2">
      <div class="card c-blue">
        <div class="card-label">Coordonnées validées</div>
        <div style="display:flex;flex-direction:column;gap:10px;font-size:13px;">
          <div>✉️ <strong>hurley.lucy@gmail.com</strong><br><small style="color:rgba(0,0,0,.45)">Clic = copie dans le presse-papiers</small></div>
          <div>📞 <strong>+33 6 79 86 87 49</strong><br><small style="color:rgba(0,0,0,.45)">Clic = appel direct (mobile)</small></div>
          <div>📍 <strong>59136 Wavrin — Permis B</strong></div>
        </div>
      </div>
      <div class="card c-green">
        <div class="card-label">Réseaux professionnels</div>
        <div style="display:flex;flex-direction:column;gap:10px;font-size:13px;">
          <div>💼 <strong>linkedin.com/in/luchurley</strong><br><small style="color:rgba(0,0,0,.45)">Lien actif — s'ouvre dans un nouvel onglet</small></div>
          <div style="opacity:.45;">🎨 <strong>Behance</strong> — à créer<br><small>Portfolio à construire (itération V2)</small></div>
          <div style="opacity:.45;">🌐 <strong>Portfolio web</strong> — à créer<br><small>Domaine à acheter (itération V3)</small></div>
        </div>
      </div>
    </div>

    <div class="wf-note">
      <strong>Note wireframe</strong>
      Chaque élément de contact doit avoir un feedback visuel immédiat au clic :
      toast "Email copié !" pour l'email, ouverture directe de l'appel sur mobile,
      ouverture dans un nouvel onglet pour LinkedIn. Le hover doit changer le fond
      en vert #00c896 avec text blanc — signal d'action clair.
    </div>
  </div>

  <div class="divider"></div>

  <!-- ═══════════════════════════════════════════
       03 — PARCOURS
  ═══════════════════════════════════════════ -->
  <div class="section" id="s3">
    <div class="section-head">
      <div class="section-num">03</div>
      <div class="section-title">Parcours professionnel complet</div>
      <div class="section-line"></div>
    </div>

    <p style="font-size:13px;color:rgba(0,0,0,.55);margin-bottom:20px;font-style:italic;">
      8 expériences dans l'ordre antéchronologique. Chaque card est un accordéon interactif
      — fermé par défaut, s'ouvre au clic, ferme les autres automatiquement.
    </p>

    <!-- XP 1 -->
    <div class="xp-item">
      <div class="xp-header">
        <div class="xp-dot" style="background:var(--green)"></div>
        <div>
          <div class="xp-role">Contrôle Qualité</div>
          <div class="xp-co">Dassault Aviation · Site industriel</div>
          <div class="xp-date">Avr. 2025 — Mars 2026</div>
        </div>
        <div class="xp-badge">CDI</div>
      </div>
      <div class="xp-body">
        Gestion des flux de pièces peintes et contrôle qualité via SAP ERP.
        Suivi des anomalies, traitement des litiges et coordination inter-services
        pour garantir conformité et traçabilité. Saisie &amp; suivi des entrées
        en stock SAP ERP, contrôle qualité des pièces (anomalies, rayures,
        non-conformités), analyse et gestion des litiges via SAP et OGA,
        coordination inter-services.
        <div class="xp-chips">
          <span class="xchip">SAP ERP</span><span class="xchip">OGA</span>
          <span class="xchip">Contrôle qualité</span><span class="xchip">Logistique</span>
          <span class="xchip">Aéronautique</span>
        </div>
      </div>
    </div>

    <!-- XP 2 -->
    <div class="xp-item">
      <div class="xp-header">
        <div class="xp-dot" style="background:var(--yellow)"></div>
        <div>
          <div class="xp-role">Chef de Projet Digital</div>
          <div class="xp-co">AD'HOC MEDIA · Télétravail</div>
          <div class="xp-date">Mai 2023 — Juin 2024</div>
        </div>
        <div class="xp-badge">Freelance</div>
      </div>
      <div class="xp-body">
        Coordination de la refonte d'un site e-commerce de signalétique (B2C/B2B) :
        site vitrine, multisite privé/public, intégration web2print Doowup × Darius.
        Pilotage complet des équipes et des livrables. Gestion des étapes projet
        pour cohérence, performance et qualité. Optimisation UX/UI et suivi client continu.
        <div class="xp-chips">
          <span class="xchip">Gestion de projet</span><span class="xchip">UX/UI</span>
          <span class="xchip">E-commerce</span><span class="xchip">Web2print</span>
          <span class="xchip">B2B/B2C</span>
        </div>
      </div>
    </div>

    <!-- XP 3 -->
    <div class="xp-item">
      <div class="xp-header">
        <div class="xp-dot" style="background:var(--purple)"></div>
        <div>
          <div class="xp-role">Head of Digital — Directrice Digitale</div>
          <div class="xp-co">The English Coach · Télétravail</div>
          <div class="xp-date">Juin 2021 — Nov. 2023</div>
        </div>
        <div class="xp-badge">CDI</div>
      </div>
      <div class="xp-body">
        Direction artistique et digitale 360° en environnement startup.
        Branding complet, développement site web + application mobile avec
        <strong>agent IA intégré</strong>. Management communication, CRM, KPIs.
        Création du branding &amp; tous supports de communication.
        Dev site + app, supervision UX/UI, stratégie d'acquisition.
        Gestion CRM et reporting performances.
        <div class="xp-chips">
          <span class="xchip">Direction artistique</span><span class="xchip">Agent IA</span>
          <span class="xchip">UX/UI</span><span class="xchip">CRM</span>
          <span class="xchip">Adobe Suite</span><span class="xchip">Motion Design</span>
        </div>
      </div>
    </div>

    <!-- XP 4 -->
    <div class="xp-item">
      <div class="xp-header">
        <div class="xp-dot" style="background:var(--blue)"></div>
        <div>
          <div class="xp-role">UX/UI Designer</div>
          <div class="xp-co">Studiø Kaøs · Freelance / Télétravail</div>
          <div class="xp-date">Juin 2021 — Sept. 2022</div>
        </div>
        <div class="xp-badge">Freelance</div>
      </div>
      <div class="xp-body">
        Conception de produits digitaux end-to-end : benchmarking, wireframing,
        design thinking, usability testing, product design, motion design
        et création de contenu.
        <div class="xp-chips">
          <span class="xchip">Wireframing</span><span class="xchip">Design Thinking</span>
          <span class="xchip">Usability Testing</span><span class="xchip">Product Design</span>
          <span class="xchip">Motion Design</span>
        </div>
      </div>
    </div>

    <!-- XP 5 -->
    <div class="xp-item">
      <div class="xp-header">
        <div class="xp-dot" style="background:var(--orange)"></div>
        <div>
          <div class="xp-role">Founder — Marque de mode</div>
          <div class="xp-co">Distupted · Télétravail</div>
          <div class="xp-date">Juin 2020 — Juin 2021</div>
        </div>
        <div class="xp-badge">Fondatrice</div>
      </div>
      <div class="xp-body">
        Conception &amp; lancement d'une collection capsule unisexe de harnais vegan.
        Direction artistique, e-commerce, communication digitale et sourcing éthique.
        <strong>Collection sold-out intégralement.</strong>
        Blessures transformées en objets beaux. UX appliquée à la mode.
        <div class="xp-chips">
          <span class="xchip">Direction artistique</span><span class="xchip">E-commerce</span>
          <span class="xchip">Branding</span><span class="xchip">Sourcing éthique</span>
        </div>
      </div>
    </div>

    <!-- XP 6 -->
    <div class="xp-item">
      <div class="xp-header">
        <div class="xp-dot" style="background:var(--green)"></div>
        <div>
          <div class="xp-role">Responsable Merchandising</div>
          <div class="xp-co">Tommy Bahama · Bondi Beach, Australie</div>
          <div class="xp-date">Juin 2018 — Mai 2019</div>
        </div>
        <div class="xp-badge">CDI</div>
      </div>
      <div class="xp-body">
        Ouverture du magasin, mise en place du merchandising, animation commerciale,
        formation équipe de vente, gestion des objectifs CA.
        Ambassadrice marque haut de gamme en contexte international (clientèle EN).
        Expérience internationale en immersion totale — Bondi Beach, Australie.
        <div class="xp-chips">
          <span class="xchip">Merchandising</span><span class="xchip">Management</span>
          <span class="xchip">Retail premium</span><span class="xchip">International</span>
        </div>
      </div>
    </div>

    <!-- XP 7 -->
    <div class="xp-item">
      <div class="xp-header">
        <div class="xp-dot" style="background:var(--red)"></div>
        <div>
          <div class="xp-role">Responsable de Stand</div>
          <div class="xp-co">North Sails &amp; Scotch&amp;Soda — Galeries Lafayette Nantes</div>
          <div class="xp-date">Juin 2019 — Fév. 2020</div>
        </div>
        <div class="xp-badge">CDI / CDD</div>
      </div>
      <div class="xp-body">
        Ventes, merchandising visuel, gestion des stocks et suivi des KPIs.
        Accompagnement client bilingue FR/EN pour clientèle internationale.
        Recrutée directement par Scotch&amp;Soda sur recommandation après
        excellence chez North Sails — preuve par les faits.
        <div class="xp-chips">
          <span class="xchip">Vente active</span><span class="xchip">Merchandising</span>
          <span class="xchip">KPIs</span><span class="xchip">Bilingue FR/EN</span>
        </div>
      </div>
    </div>

    <!-- XP 8 -->
    <div class="xp-item">
      <div class="xp-header">
        <div class="xp-dot" style="background:var(--orange)"></div>
        <div>
          <div class="xp-role">Community Manager</div>
          <div class="xp-co">Boatpeople Music Band · Lille</div>
          <div class="xp-date">Jan. 2017 — Avr. 2018</div>
        </div>
        <div class="xp-badge">CDI</div>
      </div>
      <div class="xp-body">
        Stratégie de présence sociale, création de contenus &amp; visuels,
        campagnes publicitaires, négociation prestataires,
        coordination d'un événement caritatif.
        <div class="xp-chips">
          <span class="xchip">Social Media</span><span class="xchip">Contenu</span>
          <span class="xchip">Événementiel</span><span class="xchip">Campagnes</span>
        </div>
      </div>
    </div>

    <div class="wf-note">
      <strong>Note wireframe — Accordéon XP</strong>
      Un seul item ouvert à la fois. Ouverture avec max-height animation (ease-out cubic).
      Le point coloré grossit (scale 1.5) et passe au rouge quand ouvert.
      Le badge de type CDI/Freelance passe au rouge quand ouvert.
      Le chevron tourne 180°. Focus visible au clavier obligatoire.
    </div>
  </div>

  <div class="divider"></div>

  <!-- ═══════════════════════════════════════════
       04 — COMPÉTENCES
  ═══════════════════════════════════════════ -->
  <div class="section" id="s4">
    <div class="section-head">
      <div class="section-num">04</div>
      <div class="section-title">Compétences &amp; Outils</div>
      <div class="section-line"></div>
    </div>

    <div class="card c-red">
      <div class="card-label">Barres de compétences (animées au chargement de l'onglet)</div>
      <div id="skills">
        <div class="sk-row"><div class="sk-head"><span class="sk-name">UX / UI Design</span><span class="sk-pct">95%</span></div><div class="sk-track"><div class="sk-fill" style="width:95%"></div></div></div>
        <div class="sk-row"><div class="sk-head"><span class="sk-name">Gestion de projet digital</span><span class="sk-pct">90%</span></div><div class="sk-track"><div class="sk-fill" style="width:90%"></div></div></div>
        <div class="sk-row"><div class="sk-head"><span class="sk-name">Direction artistique</span><span class="sk-pct">88%</span></div><div class="sk-track"><div class="sk-fill" style="width:88%"></div></div></div>
        <div class="sk-row"><div class="sk-head"><span class="sk-name">Motion / Graphic Design</span><span class="sk-pct">86%</span></div><div class="sk-track"><div class="sk-fill" style="width:86%"></div></div></div>
        <div class="sk-row"><div class="sk-head"><span class="sk-name">Stratégie marketing &amp; communication</span><span class="sk-pct">85%</span></div><div class="sk-track"><div class="sk-fill" style="width:85%"></div></div></div>
        <div class="sk-row"><div class="sk-head"><span class="sk-name">Contrôle qualité / SAP ERP</span><span class="sk-pct">78%</span></div><div class="sk-track"><div class="sk-fill" style="width:78%"></div></div></div>
        <div class="sk-row"><div class="sk-head"><span class="sk-name">Dev web / CRM</span><span class="sk-pct">74%</span></div><div class="sk-track"><div class="sk-fill" style="width:74%"></div></div></div>
      </div>
    </div>

    <div class="card c-blue">
      <div class="card-label">Cloud d'outils — hover = fond bleu + texte blanc</div>
      <div class="tag-cloud">
        <span class="tag inv">Adobe Suite</span>
        <span class="tag inv">Figma</span>
        <span class="tag inv">Webflow</span>
        <span class="tag inv">HTML / CSS</span>
        <span class="tag inv">SAP ERP</span>
        <span class="tag inv">OGA</span>
        <span class="tag inv">CRM</span>
        <span class="tag inv">Motion Design</span>
        <span class="tag inv">Wireframing</span>
        <span class="tag inv">Design Thinking</span>
        <span class="tag inv">Usability Testing</span>
        <span class="tag inv">Notion</span>
      </div>
    </div>

    <div class="card c-green">
      <div class="card-label">Langues</div>
      <div class="grid-3">
        <div style="text-align:center;padding:14px;background:var(--grey);border:var(--border);box-shadow:var(--shadow);">
          <div style="font-size:28px;margin-bottom:6px;">🇫🇷</div>
          <div style="font-family:var(--ff-d);font-size:11px;font-weight:700;text-transform:uppercase;">Français</div>
          <div style="font-size:10px;font-weight:700;color:var(--blue);margin-top:3px;">C2 — Natif</div>
        </div>
        <div style="text-align:center;padding:14px;background:var(--grey);border:var(--border);box-shadow:var(--shadow);">
          <div style="font-size:28px;margin-bottom:6px;">🇬🇧</div>
          <div style="font-family:var(--ff-d);font-size:11px;font-weight:700;text-transform:uppercase;">Anglais</div>
          <div style="font-size:10px;font-weight:700;color:var(--blue);margin-top:3px;">C2 — Bilingue</div>
        </div>
        <div style="text-align:center;padding:14px;background:var(--grey);border:var(--border);box-shadow:var(--shadow);">
          <div style="font-size:28px;margin-bottom:6px;">🇪🇸</div>
          <div style="font-family:var(--ff-d);font-size:11px;font-weight:700;text-transform:uppercase;">Espagnol</div>
          <div style="font-size:10px;font-weight:700;color:var(--blue);margin-top:3px;">B2 — Conv.</div>
        </div>
      </div>
    </div>

    <div class="wf-note">
      <strong>Note wireframe — Animation skills</strong>
      Les barres partent de 0% et se remplissent à leur valeur réelle quand
      l'onglet Skills devient actif. Délai staggeré : chaque barre décalée de 150ms.
      Transition : 1.4s cubic-bezier(.16,1,.3,1). Une seule animation par session.
    </div>
  </div>

  <div class="divider"></div>

  <!-- ═══════════════════════════════════════════
       05 — FORMATION
  ═══════════════════════════════════════════ -->
  <div class="section" id="s5">
    <div class="section-head">
      <div class="section-num">05</div>
      <div class="section-title">Formation</div>
      <div class="section-line"></div>
    </div>

    <div class="card c-orange">
      <div class="card-label">Ordre antéchronologique — du plus récent au plus ancien</div>
      <div style="display:flex;flex-direction:column;gap:10px;">
        <div style="padding:12px 14px;background:var(--grey);border:var(--border);box-shadow:var(--shadow);border-left:5px solid var(--orange);">
          <div style="font-family:var(--ff-d);font-size:11px;font-weight:700;text-transform:uppercase;">Certificat Web &amp; Multimédia / Webmaster</div>
          <div style="font-size:10.5px;color:var(--blue);margin-top:3px;font-weight:700;">Webstart · Lille — Mention</div>
          <div style="font-size:10px;color:rgba(0,0,0,.4);margin-top:2px;font-family:var(--ff-d);font-weight:700;letter-spacing:1px;">2021 – 2022</div>
        </div>
        <div style="padding:12px 14px;background:var(--grey);border:var(--border);box-shadow:var(--shadow);border-left:5px solid var(--red);">
          <div style="font-family:var(--ff-d);font-size:11px;font-weight:700;text-transform:uppercase;">Licence — Responsable Stratégie Marketing &amp; Communication</div>
          <div style="font-size:10.5px;color:var(--blue);margin-top:3px;font-weight:700;">ESMOD International · Roubaix — Fashion Business</div>
          <div style="font-size:10px;color:rgba(0,0,0,.4);margin-top:2px;font-family:var(--ff-d);font-weight:700;letter-spacing:1px;">2015 – 2018</div>
        </div>
        <div style="padding:12px 14px;background:var(--grey);border:var(--border);box-shadow:var(--shadow);border-left:5px solid var(--blue);">
          <div style="font-family:var(--ff-d);font-size:11px;font-weight:700;text-transform:uppercase;">Bac — Prospection, Négociation &amp; Suivi Clientèle</div>
          <div style="font-size:10.5px;color:var(--blue);margin-top:3px;font-weight:700;">Écoles Nantaises de Commerce · Nantes</div>
          <div style="font-size:10px;color:rgba(0,0,0,.4);margin-top:2px;font-family:var(--ff-d);font-weight:700;letter-spacing:1px;">2013 – 2015</div>
        </div>
        <div style="padding:12px 14px;background:var(--grey);border:var(--border);box-shadow:var(--shadow);border-left:5px solid var(--green);">
          <div style="font-family:var(--ff-d);font-size:11px;font-weight:700;text-transform:uppercase;">BEP Production Graphique &amp; Imprimée</div>
          <div style="font-size:10.5px;color:var(--blue);margin-top:3px;font-weight:700;">La Joliverie · Nantes</div>
          <div style="font-size:10px;color:rgba(0,0,0,.4);margin-top:2px;font-family:var(--ff-d);font-weight:700;letter-spacing:1px;">2012 – 2013</div>
        </div>
      </div>
    </div>
  </div>

  <div class="divider"></div>

  <!-- ═══════════════════════════════════════════
       06 — DESIGN SYSTEM
  ═══════════════════════════════════════════ -->
  <div class="section" id="s6">
    <div class="section-head">
      <div class="section-num">06</div>
      <div class="section-title">Design System — Neubrutalism</div>
      <div class="section-line"></div>
    </div>

    <div class="grid-2">
      <div class="card c-yellow">
        <div class="card-label">Règles fondamentales</div>
        <ul style="list-style:none;display:flex;flex-direction:column;gap:8px;font-size:12.5px;">
          <li>▶ Bordures noires épaisses : <strong>2.5px solid #0a0a0a</strong></li>
          <li>▶ Ombres dures décalées : <strong>4px 4px 0 #0a0a0a</strong></li>
          <li>▶ Zéro blur, zéro gradient</li>
          <li>▶ Hover = translate(-2px,-2px) + ombre +2px</li>
          <li>▶ Active = translate(2px,2px) + ombre 0</li>
          <li>▶ Pas de border-radius sauf exception</li>
          <li>▶ Couleurs saturées à 100%</li>
        </ul>
      </div>
      <div class="card c-red">
        <div class="card-label">Palette validée</div>
        <div style="display:flex;flex-direction:column;gap:8px;">
          <div style="display:flex;align-items:center;gap:10px;"><div style="width:32px;height:32px;background:#ffd60a;border:var(--border);flex-shrink:0;"></div><div><strong>#ffd60a</strong> — Jaune primary (fond app)</div></div>
          <div style="display:flex;align-items:center;gap:10px;"><div style="width:32px;height:32px;background:#ff3c3c;border:var(--border);flex-shrink:0;"></div><div><strong>#ff3c3c</strong> — Rouge accent 1</div></div>
          <div style="display:flex;align-items:center;gap:10px;"><div style="width:32px;height:32px;background:#0057ff;border:var(--border);flex-shrink:0;"></div><div><strong>#0057ff</strong> — Bleu accent 2</div></div>
          <div style="display:flex;align-items:center;gap:10px;"><div style="width:32px;height:32px;background:#00c896;border:var(--border);flex-shrink:0;"></div><div><strong>#00c896</strong> — Vert accent 3</div></div>
          <div style="display:flex;align-items:center;gap:10px;"><div style="width:32px;height:32px;background:#c400ff;border:var(--border);flex-shrink:0;"></div><div><strong>#c400ff</strong> — Violet accent 4</div></div>
          <div style="display:flex;align-items:center;gap:10px;"><div style="width:32px;height:32px;background:#ff8c00;border:var(--border);flex-shrink:0;"></div><div><strong>#ff8c00</strong> — Orange accent 5</div></div>
        </div>
      </div>
    </div>

    <div class="card c-blue">
      <div class="card-label">Typographie</div>
      <div style="display:flex;flex-direction:column;gap:14px;">
        <div>
          <div style="font-family:'Unbounded',sans-serif;font-size:28px;font-weight:900;text-transform:uppercase;letter-spacing:-1px;line-height:1;">LUCY HURLEY</div>
          <div style="font-size:10px;color:rgba(0,0,0,.4);margin-top:4px;font-family:'Unbounded',sans-serif;font-weight:700;letter-spacing:2px;text-transform:uppercase;">Display H1 — Unbounded 900 — 28-44px</div>
        </div>
        <div>
          <div style="font-family:'Unbounded',sans-serif;font-size:14px;font-weight:700;text-transform:uppercase;letter-spacing:.3px;">CHEF DE PROJET DIGITAL</div>
          <div style="font-size:10px;color:rgba(0,0,0,.4);margin-top:4px;font-family:'Unbounded',sans-serif;font-weight:700;letter-spacing:2px;text-transform:uppercase;">H2 Card title — Unbounded 700 — 12-14px</div>
        </div>
        <div>
          <div style="font-family:'Space Grotesk',sans-serif;font-size:13px;font-weight:400;line-height:1.7;">Description de l'expérience professionnelle, texte courant et contenu des cards.</div>
          <div style="font-size:10px;color:rgba(0,0,0,.4);margin-top:4px;font-family:'Unbounded',sans-serif;font-weight:700;letter-spacing:2px;text-transform:uppercase;">Body — Space Grotesk 400 — 12-13px</div>
        </div>
        <div>
          <div style="font-family:'Unbounded',sans-serif;font-size:9px;font-weight:700;letter-spacing:2.5px;text-transform:uppercase;color:rgba(0,0,0,.4);">SECTION LABEL — CARTE</div>
          <div style="font-size:10px;color:rgba(0,0,0,.4);margin-top:4px;font-family:'Unbounded',sans-serif;font-weight:700;letter-spacing:2px;text-transform:uppercase;">Label — Unbounded 700 — 8.5px — LS 2.5px</div>
        </div>
      </div>
    </div>

    <div class="card c-green">
      <div class="card-label">2 Thèmes validés</div>
      <div class="grid-2">
        <div style="background:#ffd60a;border:var(--border);padding:14px;box-shadow:var(--shadow);">
          <div style="font-family:var(--ff-d);font-size:10px;font-weight:700;text-transform:uppercase;margin-bottom:8px;">Thème A — Jaune Bold</div>
          <div style="font-size:11px;">Fond #ffd60a · Cards blanc · Bordures noires<br>Ambiance : solaire, audacieux, énergique</div>
        </div>
        <div style="background:#1a0a2e;border:var(--border);padding:14px;box-shadow:var(--shadow);color:#fafaf5;">
          <div style="font-family:var(--ff-d);font-size:10px;font-weight:700;text-transform:uppercase;margin-bottom:8px;color:var(--yellow);">Thème B — Nuit Violette</div>
          <div style="font-size:11px;">Fond #1a0a2e · Bordures blanches<br>Ambiance : mystérieux, créatif, nocturne</div>
        </div>
      </div>
    </div>
  </div>

  <div class="divider"></div>

  <!-- ═══════════════════════════════════════════
       07 — WIREFRAME
  ═══════════════════════════════════════════ -->
  <div class="section" id="s7">
    <div class="section-head">
      <div class="section-num">07</div>
      <div class="section-title">Architecture &amp; Wireframe validé</div>
      <div class="section-line"></div>
    </div>

    <div class="card c-purple">
      <div class="card-label">Structure globale — App mobile first (max 480px, phone frame desktop)</div>
      <div style="font-family:'Courier New',monospace;font-size:12px;line-height:2;background:var(--black);color:var(--green);padding:20px;margin-top:8px;overflow-x:auto;">
        ┌─────────────────────────────────────┐<br>
        │  HEADER (bg: --ac2 / bleu)          │<br>
        │  ┌─────┐  LUCY HURLEY               │<br>
        │  │PHOTO│  Chef de Projet · UX/UI     │<br>
        │  └─────┘  📍 Wavrin · Permis B       │<br>
        │  [● DISPONIBLE MAINTENANT]           │<br>
        │  [🎨][🔗][🕹]                        │<br>
        ├─────────────────────────────────────┤<br>
        │  TABS (bg: noir, texte blanc)        │<br>
        │  [⚡Profil][💼XP][🛠Skills][✦Fun][🔐???]│<br>
        ├─────────────────────────────────────┤<br>
        │  PANEL ACTIF (scrollable)            │<br>
        │  ┌──────────────────────────────┐   │<br>
        │  │ CARD (border+shadow brutaliste│   │<br>
        │  │ Stripe colorée en haut 4px   │   │<br>
        │  └──────────────────────────────┘   │<br>
        ├─────────────────────────────────────┤<br>
        │  BOTTOM NAV (bg: noir)              │<br>
        │  [⚡Profil][💼XP][🛠Skills][✦Fun]   │<br>
        └─────────────────────────────────────┘<br>
      </div>
    </div>

    <div class="grid-2">
      <div class="card c-yellow">
        <div class="card-label">Onglet Profil — contenu</div>
        <ul style="list-style:none;display:flex;flex-direction:column;gap:6px;font-size:12px;">
          <li>1. Card rouge — Typewriter (accroche)</li>
          <li>2. Card bleu — Langues (3 pills)</li>
          <li>3. Card vert — Contact (4 items cliquables)</li>
          <li>4. Card orange — Formation (4 items)</li>
        </ul>
      </div>
      <div class="card c-red">
        <div class="card-label">Onglet XP — contenu</div>
        <ul style="list-style:none;display:flex;flex-direction:column;gap:6px;font-size:12px;">
          <li>8 accordéons dans l'ordre antéchronologique</li>
          <li>Point coloré différent par poste</li>
          <li>Un seul item ouvert à la fois</li>
          <li>Chips neubrutalist en bas de chaque item</li>
        </ul>
      </div>
      <div class="card c-blue">
        <div class="card-label">Onglet Skills — contenu</div>
        <ul style="list-style:none;display:flex;flex-direction:column;gap:6px;font-size:12px;">
          <li>7 barres animées au premier accès</li>
          <li>Pattern hachuré dans les barres (brutaliste)</li>
          <li>Cloud de 12 outils (hover = bleu+blanc)</li>
          <li>Barres ne s'animent qu'une seule fois</li>
        </ul>
      </div>
      <div class="card c-green">
        <div class="card-label">Onglet Fun — contenu</div>
        <ul style="list-style:none;display:flex;flex-direction:column;gap:6px;font-size:12px;">
          <li>Grande card orange — 10 blagues (tap to change)</li>
          <li>Grille 2×2 : Thème / Confetti / Fun fact / Code secret</li>
          <li>Card violet — compte à rebours 5→0 vers onglet ???</li>
        </ul>
      </div>
      <div class="card c-purple" style="grid-column:span 2;">
        <div class="card-label">Onglet Secret "???" — débloqué après 5s sur Fun</div>
        <ul style="list-style:none;display:flex;flex-direction:column;gap:6px;font-size:12px;">
          <li>Hero noir — grand titre "UN LOUP QUI CODE"</li>
          <li>6 cards personnelles (voir section 09)</li>
          <li>CTA final vert — déclenche overlay + confetti</li>
        </ul>
      </div>
    </div>

    <div class="card c-orange">
      <div class="card-label">Transitions entre onglets</div>
      <div style="font-size:13px;line-height:1.8;">
        <strong>Direction :</strong> aller à droite = slide gauche (translateX -30px → 0), aller à gauche = slide droite.<br>
        <strong>Durée :</strong> 280ms cubic-bezier(.16,1,.3,1)<br>
        <strong>Bottom nav :</strong> active = texte couleur fond app, icône scale(1.2)<br>
        <strong>Tab actif :</strong> fond = couleur fond app, texte noir, pas de border-bottom
      </div>
    </div>
  </div>

  <div class="divider"></div>

  <!-- ═══════════════════════════════════════════
       08 — EASTER EGGS
  ═══════════════════════════════════════════ -->
  <div class="section" id="s8">
    <div class="section-head">
      <div class="section-num">08</div>
      <div class="section-title">Easter Eggs — Tous les détails</div>
      <div class="section-line"></div>
    </div>

    <p style="font-size:13px;color:rgba(0,0,0,.55);margin-bottom:20px;font-style:italic;">
      Légende — <span class="status-done">✓ FAIT</span> : implémenté dans la version actuelle ·
      <span class="status-next">→ NEXT</span> : itération suivante ·
      <span class="status-idea">✦ IDÉE</span> : à discuter
    </p>

    <!-- EGG 1 -->
    <div class="egg-card">
      <div class="egg-status done">✓ Fait</div>
      <div class="egg-header">
        <div class="egg-emoji">🐺</div>
        <div>
          <div class="egg-title">Easter Egg #1 — Long press sur la photo</div>
          <span class="egg-trigger">Trigger : Maintien 650ms souris ou touch</span>
        </div>
      </div>
      <div class="egg-body">
        L'utilisateur maintient le clic (ou le tap mobile) sur la photo de Lucy pendant 650ms.
        Déclenche une explosion de confettis neubrutalist (carrés + cercles + triangles,
        couleurs palette complète, ombres dures).
        <div class="egg-result">
          → Overlay noir s'ouvre avec 🐺 + titre "Easter Egg #1 !" +
          "Tu as maintenu le clic. Tu fais partie des gens qui vont jusqu'au bout.
          Exactement ce que j'aime."
        </div>
      </div>
    </div>

    <!-- EGG 2 -->
    <div class="egg-card">
      <div class="egg-status done">✓ Fait</div>
      <div class="egg-header">
        <div class="egg-emoji">⚡</div>
        <div>
          <div class="egg-title">Easter Egg #2 — Triple clic sur le nom</div>
          <span class="egg-trigger">Trigger : 3 clics rapides sur "LUCY HURLEY" (&lt;420ms)</span>
        </div>
      </div>
      <div class="egg-body">
        Cliquer 3 fois rapidement sur le nom dans le header.
        1 clic simple = toast avec l'email.
        3 clics = overlay spécial.
        <div class="egg-result">
          → Overlay avec ⚡ + "Easter Egg #2 — Triple clic !" +
          "Je lis les briefs en entier. Et les petites lignes. Et les easter eggs. — Lucy, probablement."
        </div>
      </div>
    </div>

    <!-- EGG 3 -->
    <div class="egg-card">
      <div class="egg-status done">✓ Fait</div>
      <div class="egg-header">
        <div class="egg-emoji">🕹</div>
        <div>
          <div class="egg-title">Easter Egg #3 — Konami Code</div>
          <span class="egg-trigger">Trigger : ↑ ↑ ↓ ↓ ← → ← → (clavier)</span>
        </div>
      </div>
      <div class="egg-body">
        La séquence Konami classique au clavier. Détectée via keydown listener sur document.
        Erreur = reset du compteur. Réussir = confetti massif + overlay.
        <div class="egg-result">
          → 🏆 + "KONAMI CODE !" +
          "Tu connais les secrets — tu serais parfait·e dans mon équipe.
          Ou ma liste de contacts. Les deux."
        </div>
      </div>
    </div>

    <!-- EGG 4 -->
    <div class="egg-card">
      <div class="egg-status done">✓ Fait</div>
      <div class="egg-header">
        <div class="egg-emoji">🔐</div>
        <div>
          <div class="egg-title">Easter Egg #4 — Onglet Secret</div>
          <span class="egg-trigger">Trigger : Rester 5 secondes sur l'onglet Fun</span>
        </div>
      </div>
      <div class="egg-body">
        Un compte à rebours 5→0 s'affiche dans la card violette de l'onglet Fun.
        À 0, l'onglet "???" apparaît dans la tab bar (opacity 0→1, slide depuis la droite).
        Le bottom nav ne le montre pas — accessible uniquement via les tabs.
        <div class="egg-result">
          → Toast "🔐 Un onglet ??? vient d'apparaître..."
          + onglet "???" devient cliquable
        </div>
      </div>
    </div>

    <!-- EGG 5 -->
    <div class="egg-card">
      <div class="egg-status done">✓ Fait</div>
      <div class="egg-header">
        <div class="egg-emoji">💌</div>
        <div>
          <div class="egg-title">Easter Egg #5 — CTA final dans Secret</div>
          <span class="egg-trigger">Trigger : Cliquer sur la card verte tout en bas de l'onglet Secret</span>
        </div>
      </div>
      <div class="egg-body">
        Après avoir tout lu dans la section Secret, le dernier bloc
        "Tu as trouvé le fond" déclenche l'overlay final + confetti.
        <div class="egg-result">
          → 💌 + "Tu es allé·e jusqu'au fond" +
          "C'est exactement le genre de curiosité et d'attention aux détails
          que j'apporte dans chaque projet. On devrait vraiment se parler."
        </div>
      </div>
    </div>

    <!-- EGG 6 — NEXT -->
    <div class="egg-card">
      <div class="egg-status planned">→ Next</div>
      <div class="egg-header">
        <div class="egg-emoji">🌙</div>
        <div>
          <div class="egg-title">Easter Egg #6 — Mode idle / Personnage qui passe</div>
          <span class="egg-trigger">Trigger : Aucune interaction pendant 12 secondes</span>
        </div>
      </div>
      <div class="egg-body">
        Actuellement : toast "Toujours là ? 👀" qui apparaît après 12s d'inactivité.
        <br><br>
        <strong style="color:var(--yellow);">Idée V2 :</strong> Un petit loup pixel art traverse l'écran de droite à gauche via CSS animation.
        Animation CSS @keyframes translateX(calc(100vw + 100px) → -100px).
        Durée 4s, ease-linear. Disparaît après le passage.
        <div class="egg-result">
          → Visuel : loup ASCII ou sprite SVG minimaliste brutaliste
        </div>
      </div>
    </div>

    <!-- EGG 7 — NEXT -->
    <div class="egg-card">
      <div class="egg-status planned">→ Next</div>
      <div class="egg-header">
        <div class="egg-emoji">🎵</div>
        <div>
          <div class="egg-title">Easter Egg #7 — Son au Konami Code</div>
          <span class="egg-trigger">Trigger : Konami Code réussi</span>
        </div>
      </div>
      <div class="egg-body">
        En plus du confetti et de l'overlay, jouer un son court via Web Audio API
        (synthétisé, pas de fichier externe — 8 notes montantes type jingle victoire).
        Respecter prefers-reduced-motion ET ajouter un bouton mute.
        <div class="egg-result">
          → Web Audio API oscillator : fréquences C4 E4 G4 C5 en succession rapide
        </div>
      </div>
    </div>

    <!-- EGG 8 — IDÉE -->
    <div class="egg-card">
      <div class="egg-status idea">✦ Idée</div>
      <div class="egg-header">
        <div class="egg-emoji">🔄</div>
        <div>
          <div class="egg-title">Easter Egg #8 — Rotation de l'avatar hover</div>
          <span class="egg-trigger">Trigger : Hover photo + scroll de la molette</span>
        </div>
      </div>
      <div class="egg-body">
        Quand la souris est sur la photo ET que l'utilisateur scroll la molette,
        la photo pivote dans la direction du scroll.
        Limite : max ±45°. Release = retour à 0° en elastic.
        Surprenant, mémorable, dit "je joue avec les détails".
        <div class="egg-result">
          → Event wheel sur .ava → rotate CSS property en fonction de deltaY
        </div>
      </div>
    </div>

    <!-- EGG 9 — IDÉE -->
    <div class="egg-card">
      <div class="egg-status idea">✦ Idée</div>
      <div class="egg-header">
        <div class="egg-emoji">🖱</div>
        <div>
          <div class="egg-title">Easter Egg #9 — Curseur personnalisé réactif</div>
          <span class="egg-trigger">Trigger : Survol de zones spécifiques</span>
        </div>
      </div>
      <div class="egg-body">
        Actuellement : curseur SVG rouge par défaut.
        V2 : le curseur change selon la zone survolée.
        Sur les cards XP = curseur 🔍 (loupe).
        Sur les chips = curseur ✦.
        Sur le nom = curseur 🐺.
        Sur les boutons de contact = curseur ✉.
        <div class="egg-result">
          → CSS cursor: url() data SVG inline par zone avec attribute selector
        </div>
      </div>
    </div>

    <!-- EGG 10 — IDÉE -->
    <div class="egg-card">
      <div class="egg-status idea">✦ Idée</div>
      <div class="egg-header">
        <div class="egg-emoji">🎨</div>
        <div>
          <div class="egg-title">Easter Egg #10 — Thème aléatoire secouer l'écran</div>
          <span class="egg-trigger">Trigger : Shake le téléphone (mobile) ou secouer rapidement la souris</span>
        </div>
      </div>
      <div class="egg-body">
        Sur mobile : DeviceMotionEvent — si accélération &gt; seuil pendant 1s = change thème aléatoirement.
        Sur desktop : si la souris fait 5 mouvements rapides zigzag en 500ms = même effet.
        Brutaliste par nature : imprévisible, physique, mémorable.
        <div class="egg-result">
          → Toast "🎨 Tu secoues pour changer les couleurs ? Respect." + nouveau thème
        </div>
      </div>
    </div>
  </div>

  <div class="divider"></div>

  <!-- ═══════════════════════════════════════════
       09 — CONTENU FUN & SECRET
  ═══════════════════════════════════════════ -->
  <div class="section" id="s9">
    <div class="section-head">
      <div class="section-num">09</div>
      <div class="section-title">Contenu Fun &amp; Secret</div>
      <div class="section-line"></div>
    </div>

    <div class="card c-orange">
      <div class="card-label">10 blagues validées — mélange design/dev + perso Lucy</div>
      <div style="display:flex;flex-direction:column;gap:10px;margin-top:4px;">
        <div style="background:var(--grey);border:var(--border);padding:12px 14px;display:flex;gap:12px;align-items:flex-start;">
          <span style="font-size:20px;flex-shrink:0;">🐺</span>
          <div style="font-size:12px;line-height:1.65;">"Je suis le genre de personne qu'on croit avoir comprise trop vite. C'est voulu."</div>
        </div>
        <div style="background:var(--grey);border:var(--border);padding:12px 14px;display:flex;gap:12px;align-items:flex-start;">
          <span style="font-size:20px;flex-shrink:0;">🔥</span>
          <div style="font-size:12px;line-height:1.65;">"Je peux sentir qu'un brief est mauvais avant la fin de la première phrase. Instinct, pas magie."</div>
        </div>
        <div style="background:var(--grey);border:var(--border);padding:12px 14px;display:flex;gap:12px;align-items:flex-start;">
          <span style="font-size:20px;flex-shrink:0;">🎨</span>
          <div style="font-size:12px;line-height:1.65;">"La différence entre un bon et un mauvais design ? 8px de padding. Chaque fois."</div>
        </div>
        <div style="background:var(--grey);border:var(--border);padding:12px 14px;display:flex;gap:12px;align-items:flex-start;">
          <span style="font-size:20px;flex-shrink:0;">🌙</span>
          <div style="font-size:12px;line-height:1.65;">"Les meilleures idées arrivent à 2h du matin dans une conversation qui gratte l'âme."</div>
        </div>
        <div style="background:var(--grey);border:var(--border);padding:12px 14px;display:flex;gap:12px;align-items:flex-start;">
          <span style="font-size:20px;flex-shrink:0;">🤯</span>
          <div style="font-size:12px;line-height:1.65;">"Un UX designer entre dans un bar. Il teste 3 parcours différents avant de commander."</div>
        </div>
        <div style="background:var(--grey);border:var(--border);padding:12px 14px;display:flex;gap:12px;align-items:flex-start;">
          <span style="font-size:20px;flex-shrink:0;">🐾</span>
          <div style="font-size:12px;line-height:1.65;">"Je peux rester indépendante jusqu'à l'excès. Ou être complètement loyale. Rarement les deux en même temps, rarement aucun des deux."</div>
        </div>
        <div style="background:var(--grey);border:var(--border);padding:12px 14px;display:flex;gap:12px;align-items:flex-start;">
          <span style="font-size:20px;flex-shrink:0;">☕</span>
          <div style="font-size:12px;line-height:1.65;">"CSS : les 3 lettres qui ont fait pleurer le plus de monde dans l'histoire de l'humanité."</div>
        </div>
        <div style="background:var(--grey);border:var(--border);padding:12px 14px;display:flex;gap:12px;align-items:flex-start;">
          <span style="font-size:20px;flex-shrink:0;">🌀</span>
          <div style="font-size:12px;line-height:1.65;">"Figma a planté. Tout est perdu. Sauf le lien de partage. Qui ne sauvegardait pas depuis 25 minutes."</div>
        </div>
        <div style="background:var(--grey);border:var(--border);padding:12px 14px;display:flex;gap:12px;align-items:flex-start;">
          <span style="font-size:20px;flex-shrink:0;">⚡</span>
          <div style="font-size:12px;line-height:1.65;">"Je travaille vite. Très vite. Inbox à zéro. Livrables en avance. Ce n'est pas de l'anxiété, c'est du respect pour le temps des autres."</div>
        </div>
        <div style="background:var(--grey);border:var(--border);padding:12px 14px;display:flex;gap:12px;align-items:flex-start;">
          <span style="font-size:20px;flex-shrink:0;">🔮</span>
          <div style="font-size:12px;line-height:1.65;">"Pour demain matin." — Le brief. "Finalement on change tout." — Le lendemain.</div>
        </div>
      </div>
    </div>

    <div class="card c-purple">
      <div class="card-label">8 fun facts validés (bouton Fun fact dans la grille)</div>
      <ul style="list-style:none;display:flex;flex-direction:column;gap:8px;font-size:12.5px;">
        <li>🌏 "J'ai vécu à Bondi Beach, Australie. Sans billet retour."</li>
        <li>🎨 "À 15 ans, je redesignais les interfaces de mes jeux dans un carnet. C'était déjà du UX."</li>
        <li>✂️ "J'ai lancé une marque de harnais vegan. Sold-out. Entièrement."</li>
        <li>🐾 "Chien au bureau = je signe sans lire la fiche de poste."</li>
        <li>⚡ "Inbox à zéro. Toujours. C'est presque pathologique."</li>
        <li>🌍 "3 langues courantes. 4 si on compte le langage des créatifs."</li>
        <li>🔥 "Je fonctionne à l'instinct ET à l'analyse. En même temps. Tout le temps."</li>
        <li>🌙 "Les nuits qui refont le monde sont mes réunions de créativité préférées."</li>
      </ul>
    </div>

    <div class="card c-red">
      <div class="card-label">6 cards section Secret "UN LOUP QUI CODE"</div>
      <div style="display:flex;flex-direction:column;gap:10px;font-size:12.5px;">
        <div><strong>🎨 Designer avant d'avoir le mot</strong> — À 15 ans je redesignais les interfaces de mes jeux. Je ne savais pas que ça s'appelait UX. Je savais juste que c'était mieux comme ça.</div>
        <div><strong>🌏 Australie sans billet retour</strong> — Bondi Beach. Soleil à 8h. J'ai pris un avion pour "voir". Je suis restée un an. C'est là que l'anglais bilingue est devenu une évidence.</div>
        <div><strong>🐾 L'animal au bureau = signature du contrat</strong> — Si tu as un chien au bureau, je signe sans lire la fiche de poste. C'est une politique personnelle, pas négociable.</div>
        <div><strong>✂️ Sold-out. Entièrement.</strong> — J'ai lancé une marque de harnais vegan unisexe. Sold-out en intégralité. Parce que l'UX s'applique aussi aux vêtements, et les blessures deviennent parfois de beaux objets.</div>
        <div><strong>🔥 Feu et contrôle</strong> — Je fonctionne à l'instinct et à l'analyse en même temps. Je peux sentir qu'un brief est mauvais avant la fin de la première phrase, et passer 3h à peaufiner 8px de padding.</div>
        <div><strong>🌙 Les nuits qui refont le monde</strong> — Je suis le genre de personne qui pense trop et ressent encore plus. Les meilleures idées arrivent à 2h du matin dans une conversation qui gratte l'âme.</div>
      </div>
    </div>
  </div>

  <div class="divider"></div>

  <!-- ═══════════════════════════════════════════
       10 — ITÉRATIONS
  ═══════════════════════════════════════════ -->
  <div class="section" id="s10">
    <div class="section-head">
      <div class="section-num">10</div>
      <div class="section-title">Itérations &amp; Roadmap</div>
      <div class="section-line"></div>
    </div>

    <table class="iter-table">
      <thead>
        <tr>
          <th>Version</th>
          <th>Élément</th>
          <th>Description</th>
          <th>Priorité</th>
          <th>Statut</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>V1 — Actuel</strong></td>
          <td>Neubrutalism complet</td>
          <td>Design system, 5 onglets, accordéons, skills animées, 5 easter eggs, 2 thèmes, confetti, Konami code</td>
          <td>🔴 Critique</td>
          <td><span class="status-done">✓ Fait</span></td>
        </tr>
        <tr>
          <td><strong>V1.1</strong></td>
          <td>Loup pixel art idle</td>
          <td>Petite animation SVG loup qui traverse l'écran après 12s d'inactivité (remplace le toast actuel)</td>
          <td>🟡 Haute</td>
          <td><span class="status-next">→ Next</span></td>
        </tr>
        <tr>
          <td><strong>V1.1</strong></td>
          <td>Son Web Audio API</td>
          <td>Jingle 8 notes au Konami Code. Bouton mute. Pas de fichier audio externe.</td>
          <td>🟡 Haute</td>
          <td><span class="status-next">→ Next</span></td>
        </tr>
        <tr>
          <td><strong>V1.2</strong></td>
          <td>Curseurs personnalisés</td>
          <td>SVG différent selon la zone (🐺 sur nom, ✉ sur contact, 🔍 sur XP, ✦ sur chips)</td>
          <td>🟢 Moyenne</td>
          <td><span class="status-next">→ Next</span></td>
        </tr>
        <tr>
          <td><strong>V1.2</strong></td>
          <td>Rotation avatar molette</td>
          <td>Hover photo + scroll molette = rotation ±45°. Elastic return.</td>
          <td>🟢 Moyenne</td>
          <td><span class="status-next">→ Next</span></td>
        </tr>
        <tr>
          <td><strong>V1.3</strong></td>
          <td>Shake to theme</td>
          <td>DeviceMotion mobile ou zigzag souris desktop = changement de thème aléatoire</td>
          <td>🟢 Moyenne</td>
          <td><span class="status-idea">✦ Idée</span></td>
        </tr>
        <tr>
          <td><strong>V2</strong></td>
          <td>Section Projets</td>
          <td>6ème onglet "Projets" avec galerie scrollable horizontalement. Cards projets avec lien Behance.</td>
          <td>🟡 Haute</td>
          <td><span class="status-idea">✦ Idée</span></td>
        </tr>
        <tr>
          <td><strong>V2</strong></td>
          <td>Behance + Portfolio</td>
          <td>Créer le compte Behance avec des case studies Distupted, The English Coach, AD'HOC. Lier dans Contact.</td>
          <td>🟡 Haute</td>
          <td><span class="status-idea">✦ Idée</span></td>
        </tr>
        <tr>
          <td><strong>V2</strong></td>
          <td>3ème thème</td>
          <td>Thème "Neon Rose" — fond noir + rose #ff69b4 + vert acide. Rotation des 3 thèmes.</td>
          <td>🟢 Moyenne</td>
          <td><span class="status-idea">✦ Idée</span></td>
        </tr>
        <tr>
          <td><strong>V3</strong></td>
          <td>Domaine propre</td>
          <td>lucyhurley.fr ou lucyhurley.design — hosting Netlify, HTTPS, og:image pour les partages LinkedIn</td>
          <td>🟡 Haute (image pro)</td>
          <td><span class="status-idea">✦ Idée</span></td>
        </tr>
        <tr>
          <td><strong>V3</strong></td>
          <td>Analytics discrets</td>
          <td>Plausible.io (RGPD-friendly, no cookies) pour voir combien de recruteurs ont trouvé les easter eggs</td>
          <td>🟢 Moyenne</td>
          <td><span class="status-idea">✦ Idée</span></td>
        </tr>
        <tr>
          <td><strong>V3</strong></td>
          <td>Mode "recruiter fast view"</td>
          <td>Easter egg secret → active un mode "vue rapide" qui présente tout en 60 secondes automatiquement (auto-scroll par section avec timer)</td>
          <td>🟢 Fun+Pro</td>
          <td><span class="status-idea">✦ Idée</span></td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="divider"></div>

  <!-- ═══════════════════════════════════════════
       11 — CHECKLIST UX
  ═══════════════════════════════════════════ -->
  <div class="section" id="s11">
    <div class="section-head">
      <div class="section-num">11</div>
      <div class="section-title">Checklist UX &amp; Accessibilité</div>
      <div class="section-line"></div>
    </div>

    <div class="grid-2">
      <div class="card c-green">
        <div class="card-label">Implémenté — Version actuelle</div>
        <ul class="checklist">
          <li><div class="check-icon done">✓</div><div>Skip link visible au focus clavier</div></li>
          <li><div class="check-icon done">✓</div><div>ARIA roles (tablist, tabpanel, tab, listitem, progressbar)</div></li>
          <li><div class="check-icon done">✓</div><div>aria-selected sur les tabs, aria-expanded sur les accordéons</div></li>
          <li><div class="check-icon done">✓</div><div>Navigation clavier flèches entre tabs (←→)</div></li>
          <li><div class="check-icon done">✓</div><div>Focus trap dans l'overlay (Escape pour fermer)</div></li>
          <li><div class="check-icon done">✓</div><div>focus-visible sur tous les éléments interactifs</div></li>
          <li><div class="check-icon done">✓</div><div>aria-live pour les toasts et les annonces d'onglet</div></li>
          <li><div class="check-icon done">✓</div><div>prefers-reduced-motion respecté (animations désactivées)</div></li>
          <li><div class="check-icon done">✓</div><div>alt text sur l'image, aria-label sur les boutons icône</div></li>
          <li><div class="check-icon done">✓</div><div>Touch targets min 44×44px sur mobile</div></li>
          <li><div class="check-icon done">✓</div><div>safe-area-inset pour les iPhone avec notch</div></li>
          <li><div class="check-icon done">✓</div><div>viewport-fit=cover pour les écrans encoché</div></li>
          <li><div class="check-icon done">✓</div><div>font-size relatif (clamp) pour le scaling</div></li>
          <li><div class="check-icon done">✓</div><div>Feedback immédiat sur chaque action (toast ou overlay)</div></li>
          <li><div class="check-icon done">✓</div><div>Ouverture LinkedIn dans nouvel onglet + noopener</div></li>
        </ul>
      </div>
      <div class="card c-orange">
        <div class="card-label">À faire — Itérations suivantes</div>
        <ul class="checklist">
          <li><div class="check-icon next">→</div><div>Audit contraste WCAG AA complet (notamment chips jaunes sur blanc)</div></li>
          <li><div class="check-icon next">→</div><div>Test VoiceOver iOS + TalkBack Android</div></li>
          <li><div class="check-icon next">→</div><div>aria-describedby sur l'avatar (description du long press)</div></li>
          <li><div class="check-icon next">→</div><div>role="status" sur le compte à rebours Fun (vs role="timer")</div></li>
          <li><div class="check-icon next">→</div><div>Fallback curseur si CSS cursor SVG non supporté</div></li>
          <li><div class="check-icon next">→</div><div>og:title / og:description / og:image pour le partage LinkedIn</div></li>
          <li><div class="check-icon next">→</div><div>Manifest PWA pour l'installation en app (V3)</div></li>
          <li><div class="check-icon idea">✦</div><div>Traduction EN (version bilingue toggle FR/EN)</div></li>
          <li><div class="check-icon idea">✦</div><div>Print stylesheet pour l'onglet Profil (version imprimable)</div></li>
        </ul>
      </div>
    </div>

    <div class="card c-yellow" style="margin-top:16px;">
      <div class="card-label">Règles UX non négociables</div>
      <div class="grid-2">
        <ul style="list-style:none;display:flex;flex-direction:column;gap:8px;font-size:12.5px;">
          <li>▶ Chaque clic = feedback visuel (transform + shadow)</li>
          <li>▶ Chaque action = feedback sonore OU textuel (toast)</li>
          <li>▶ Espacement minimum 44px entre éléments tactiles</li>
          <li>▶ Texte min 11px pour lisibilité mobile</li>
        </ul>
        <ul style="list-style:none;display:flex;flex-direction:column;gap:8px;font-size:12.5px;">
          <li>▶ Aucune information cachée uniquement dans la couleur</li>
          <li>▶ Loading state si action asynchrone (&gt;200ms)</li>
          <li>▶ Pas de carousel autoplay</li>
          <li>▶ Easter eggs : fun MAIS jamais bloquants</li>
        </ul>
      </div>
    </div>
  </div>

  <!-- FOOTER -->
  <div style="margin-top:60px;text-align:center;border-top:var(--border);padding-top:28px;">
    <div style="font-family:var(--ff-d);font-size:9px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:rgba(0,0,0,.3);">
      Lucy Hurley — CV Interactif — Document de référence v1.0 — Mai 2026
    </div>
    <div style="font-size:12px;color:rgba(0,0,0,.4);margin-top:8px;">
      hurley.lucy@gmail.com · linkedin.com/in/luchurley
    </div>
  </div>

</div>
</body>
</html>
</pasted_text>

<!-- The user explicitly selected the following skills for this project, as attachments to their message. These are not optional context — they define how you work. Use them. -->
<attached-skill name="Wireframe">
Help the user explore design ideas quickly. Interview them, then generate multiple rough wireframes to map out the design space before committing to a direction. Prioritize breadth over polish: show 3-5 distinctly different approaches for each idea. Use simple shapes, placeholder text, and minimal color to keep the focus on structure and flow. Use a sketchy vibe -- handwritten but readable fonts; b&w with some color; low-fi and simple. Provide simple tweaks; show options side-by-side if small or using a tab control if large.
</attached-skill>


<system-reminder>Auto-injected reminder (ignore if not relevant): do not recreate copyrighted or branded UI unless the user's email domain matches that company. Create original designs instead.</system-reminder>

## Assistant

_[tool: questions_v2]_

I've read through the whole brief — really clear spec, with the 5 tabs (Profil / XP / Skills / Fun / ???), neubrutalist direction, easter eggs, and validated content. Before I sketch, a few quick questions so the wireframes land in the right zone.

## User

Questions answered:
- scope: Full app — all 5 tabs, Mobile phone frame only
- explore_axes: Fun tab layout (grid vs feed vs cards), Secret reveal pattern (countdown vs sequence vs trigger), Easter egg surfacing (how findable vs hidden), Explore a few options
- fidelity: 2
- annotations: Decide for me
- comparison: Storyboard flow (sequence of states)
- secret_flow: Yes, dedicated storyboard for it
- device: No — bare wireframes

## Assistant

## User

le design system de mon cv interactif

## Assistant

_[tool: read_file]_

_[tool: list_files]_

_[tool: questions_v2]_

Parfait, j'ai bien lu le design system **Miami Venise** — c'est très clair et complet. Avant de me lancer, une vérification rapide :

Il y a eu deux briefs qui se recoupent :
1. Le premier compte rendu (1587 lignes) — palette jaune multi-accents, 5 onglets, 10 easter eggs, mascotte loup 🐺
2. Ce design system Miami Venise — palette cream + rose/teal/orange, 4 sections, mascotte Samoyed Gary 🐻‍❄️, XP system, Konami code

**Le design system Miami Venise remplace-t-il le premier brief, ou faut-il combiner les deux ?** (Je pars du principe que oui, Miami Venise est la version finale et fait foi.)

Et côté livrable, vous m'aviez sélectionné les wireframes en storyboard. Vous préférez :

## User

Questions answered:
- system_authority: Miami Venise fait foi — ignore le premier brief
- deliverable: Un design system showcase (composants + tokens visualisés) d'abord
- sections_count: on s'occupe des wireframe après, concentre toi sur le design system
- mascot: gary est un ours poolaire en smiley

## Assistant

_[tool: update_todos]_

Compris — je construis un design system showcase complet et interactif, qui s'applique lui-même (le doc est dans Miami Venise). Gary = 🐻‍❄️ ours polaire.

_[tool: write_file]_

## Assistant

_[tool: write_file]_

_[tool: write_file]_

## User

wireframe pour le cv interactif, feel free to add if need be, the more details the better

## Assistant

_[tool: read_file]_

_[tool: list_files]_

_[tool: copy_starter_component]_

Compris — je construis des wireframes mobile détaillés avec le canvas storyboard. Le compass-rose s'oriente vers : bare wireframes low-fi (sans frame téléphone), accent rose Miami pour les annotations clés, flows en séquence.

_[tool: read_file]_

_[tool: write_file]_

Je vais construire ça en plusieurs fichiers pour rester gérable. Commençons par les styles + primitives wireframe + composants globaux.

_[tool: write_file]_

Maintenant les primitives + composants globaux du wireframe.

_[tool: write_file]_

Maintenant les écrans complets (HOME, PROJETS, DÉTAIL, SKILLS, MOI, CONTACT) + leurs variantes.

_[tool: read_file]_

_[tool: write_file]_

_[tool: write_file]_

Maintenant le fichier principal qui compose tout dans le canvas.

_[tool: write_file]_

_[tool: grep]_

_[tool: grep]_

_[tool: read_file]_

_[tool: show_html]_

_[tool: done]_

_[tool: fork_verifier_agent]_

Wireframes livrés — **9 sections, ~50 artboards** dans un canvas pan/zoom :

**Section 01 · Composants globaux** (14) — Header, Bottom Tab Bar (3 états), Toast XP, Modal Gary 🐻‍❄️, Searchbar, Filter Chips, Project Card, Empty State, Stat Cards, Process, CTA Sticky, Accordion, Manifesto

**Sections 02–07 · Écrans** — Home (default + secret), Projets list (6 variantes : default / filter / search focus / search filled / empty filter / empty search), Projet Détail complet, Skills (default + progress), Moi (4 niveaux XP : VISITOR → ★ HIRE ME), Contact (default + hireme)

**Section 08 · États globaux** — Skeleton loading, Offline, Level-up moment

**Sections 09–13 · Flows storyboard** (5)
- F1 · Découverte projet (HOME → grille → détail → retour)
- F2 · Filtrage (avec état conflit + reset)
- F3 · Recherche (tap → focus → filled → empty)
- F4 · Progression XP (VISITOR → CURIOUS unlock → ★ HIRE ME)
- F5 · Konami easter egg (avec écran "swipe pattern 6/10")

**Notes annexes** — Thumb zone, Seuils XP, Checklist UX globale

**Style :** Bebas Neue + Space Mono (cohérence DS) + Caveat pour les annotations manuscrites en rose Miami. Marqueurs numérotés, image placeholders ×-in-box, tap-hints animés (pulse rose) sur les flows, toasts XP épinglés sur les états transitoires.

**À noter :** chaque variante d'écran est un artboard séparé — tu peux drag-réordonner, supprimer, ou ouvrir en focus mode (icône ↗) pour le voir plein écran et naviguer avec ←/→.

## User

attention a l'accessibilité pour toast xp les xp en rose sur du orange ne sont pas suffisament contrasté - l'accessibilité est très importante pour ce projet

## Assistant

_[tool: grep]_

Tu as raison — `#FF0055` sur `#FF5500` est sous AA (ratio ~1.4:1). Je remplace le chiffre XP par une **pastille inversée** (ink #0A0806 sur cream #FFF8F0, ratio ~16:1) à l'intérieur du toast orange — ça crée une hiérarchie nette **et** passe AAA largement.

_[tool: grep]_

_[tool: str_replace_edit]_

Je fixe ça partout — et je vérifie aussi le toast level-up (cream sur rose = 3.74:1, **fail AA**). Solutions :

**Toast standard** (orange) → pastille XP en `ink` sur `cream` à l'intérieur (~16:1, AAA)
**Toast level-up** (rose) → texte en `ink` (4.87:1, **AA OK** pour body)

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

Maintenant ajoutons un artboard dédié pour montrer la note d'accessibilité contraste, et fixer la légende.

_[tool: str_replace_edit]_

_[tool: run_script]_

Compris — Gary devient un loup 🐺, on garde le nom. Je swap globalement puis j'ajoute la note a11y.

_[tool: grep]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: str_replace_edit]_

_[tool: done]_

Fait. Les corrections :

**A11y toast XP — partout dans les wireframes (composant, flows, légende)**
- Standard : pastille **ink (#0A0806)** sur cream `#FFF8F0` à l'intérieur du toast orange → ~16:1, **AAA**
- Level-up : texte **ink sur rose** (au lieu de cream sur rose qui ne donnait que 3.7:1) → ~4.87:1, **AA**
- Règle système ajoutée : jamais deux accents vifs en juxtaposition (rose × orange, rose × teal, teal × orange) — ils utilisent toujours `ink` ou `cream` comme couleur de texte

**Nouvel artboard** « A11Y · contrast audit toast XP » dans la section Notes UX — montre avant/après avec ratios chiffrés.

**Mascotte** : Gary devient un **loup 🐺** (nom conservé) dans tous les fichiers — wireframes, screens, components, app, et le doc DS showcase.

## User

en prenant en compte les commentaires et toutes les infos que l'on peut trouver dans ce fichier. créer les wireframes finaux - high fidelity. avec tous les textes et images et infos, etc...

## Assistant

_[tool: read_file]_

_[tool: grep]_

_[tool: update_todos]_

Brief reçu et bien noté. Je construis le prototype hi-fi complet — 5 onglets fonctionnels, contenu réel, Gary 🐺 (loup), XP système, easter eggs, et la palette Miami Venise propre.

_[tool: write_file]_

_[tool: write_file]_

Maintenant les données complètes — toutes les vraies infos consolidées.

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: done]_

_[tool: save_screenshot]_

_[tool: view_image]_

_[tool: eval_js]_

_[tool: eval_js]_

_[tool: eval_js]_

_[tool: save_screenshot]_

_[tool: view_image]_

_[tool: eval_js]_

_[tool: eval_js]_

_[tool: str_replace_edit]_

Bug trouvé : la classe `.page` a `animation: fadeUp 0.35s ease both` qui démarre à `opacity:0` — en mode preview avec `prefers-reduced-motion` (souvent forcé par les screenshot tools headless), l'animation ne tick pas et la page reste invisible. Je retire l'animation par défaut.

_[tool: grep]_

_[tool: str_replace_edit]_

_[tool: save_screenshot]_

_[tool: view_image]_

_[tool: eval_js]_

_[tool: eval_js]_

_[tool: show_html]_

_[tool: get_webview_logs]_

_[tool: sleep]_

_[tool: save_screenshot]_

_[tool: view_image]_

_[tool: eval_js]_

_[tool: save_screenshot]_

_[tool: view_image]_

_[tool: save_screenshot]_

_[tool: view_image]_

_[tool: screenshot_user_view]_

_[tool: str_replace_edit]_

L'app rend bien dans le user view ! Le screenshot tool ne capture juste pas. Le header a un wrap awkward — je corrige.

_[tool: str_replace_edit]_

_[tool: screenshot_user_view]_

_[tool: done]_

_[tool: sleep]_

_[tool: screenshot_user_view]_

_[tool: eval_js_user_view]_

L'app rend magnifiquement ! Header propre, hero impactant, stat cards stylées, manifesto rose. Let me verify the other tabs.

_[tool: sleep]_

_[tool: screenshot_user_view]_

_[tool: eval_js_user_view]_

_[tool: sleep]_

_[tool: screenshot_user_view]_

_[tool: eval_js_user_view]_

_[tool: sleep]_

_[tool: screenshot_user_view]_

_[tool: eval_js_user_view]_

_[tool: sleep]_

_[tool: screenshot_user_view]_

_[tool: eval_js_user_view]_

_[tool: sleep]_

_[tool: screenshot_user_view]_

_[tool: fork_verifier_agent]_

Tout fonctionne — 5 onglets opérationnels, XP qui s'accumule (visite 5+15+10+15+10+10 = 65, +5 par projet ouvert), Konami code prêt, Gary modal, logo×7 secret reveal, accordéons parcours, filtres + search projets, easter eggs paw + secret.Le **CV interactif hi-fi** est livré. 🐺

**5 onglets fonctionnels** avec contenu réel du portrait vivant :
- **HOME** — hero rose impactant, stat cards franco-britannique / Wavrin / open to work, manifesto complet, CTA prête à collaborer
- **PROJETS** — 7 projets (TEC, Jaccede, Wegoboard, Distupted, Cora, Equality, Yungo) avec SVG covers poster brutalistes uniques, searchbar, filtres multi-sélection, états vides à la Gary
- **PROJET DÉTAIL** — push view avec hero, overview 2-col, process 4 étapes numérotées, carousel visuels, résultats, projets similaires, CTA sticky mailto
- **SKILLS** — 4 catégories (UX/UI · DA · Chef de Projet · IA & Prompting) + 3 langues, tags interactifs avec niveaux
- **MOI** — identité, manifesto, **12 expériences en accordéon** (Dassault → Havens UK), formation, **lore débloqué progressivement par XP** (Gary / Voyages / Archétype Orphan / Univers esthétiques / Niveau confidentiel)
- **CONTACT** — coordonnées cliquables (mailto/tel/LinkedIn natifs), **score final dynamique** Peak-End Rule

**Système XP** opérationnel : VISITOR → CURIOUS (40) → INTERESTED (100) → ★ HIRE ME (190). Chaque action récompensée, level-up déclenche un toast spécial + débloque le lore.

**Easter eggs actifs** :
- 🐾 patte dans le hero (+50 XP)
- Logo × 7 clics (<600ms entre) → section confidentielle révélée + glitch (+25 XP)
- ↑↑↓↓←→←→BA Konami → modal Gary 🐺 (+100 XP)
- Accordéons +3 XP, skills validés +2 XP, contacts +5 XP

**A11y** : pill ink/cream sur toast XP (AAA), niveau level-up ink/rose (AA), focus states, ARIA roles, `prefers-reduced-motion` respecté, contraste audit appliqué partout.

**Note technique** : les screenshots tools de mon iframe ne capturaient pas correctement le rendu, mais l'app rend parfaitement dans la vue utilisateur — je l'ai vérifié visuellement à chaque écran.

## User

pas fan du bloc violet sur le fond rose, mettre une photo de moi a la place ? ou une photo sans fond? attention se rappeler que c'est a l'intention de recruteur. revoir les textes a propos de moi en gardant ça a l'esprit, certaine phrase doit etre dit de manière plus subtil. aussi, ajouter plus de grain dans le background cream pour un aspect plus retro. j'aime bien les images pour les collections de projets mais une fois ouvert il faut mettre une capture d'écran du projet. je te mets les capture join a ce message.

## Assistant

_[tool: snip]_

_[tool: snip]_

_[tool: image_metadata]_

_[tool: image_metadata]_

_[tool: view_image]_

_[tool: view_image]_

_[tool: image_metadata]_

_[tool: image_metadata]_

_[tool: image_metadata]_

_[tool: image_metadata]_

_[tool: image_metadata]_

_[tool: image_metadata]_

_[tool: view_image]_

_[tool: view_image]_

_[tool: view_image]_

_[tool: view_image]_

_[tool: copy_starter_component]_

_[tool: copy_files]_

Reçu — j'ai le site TEC en référence et plusieurs screenshots projets. Plan d'action :

1. Photo : je mets un **drag-and-drop slot** (tu glisses ta photo dedans, ça persiste) à la place du bloc déco
2. Textes : version recruteur — plus subtil, on garde le caractère mais on évite le trop intime
3. Grain : j'ajoute ta texture `bg noise.png` en overlay
4. Screenshots projets : intégrés dans les pages détail (TEC, Jaccede, Yungo, etc.)

_[tool: read_file]_

_[tool: view_image]_

_[tool: write_file]_

Excellent — j'ai assez d'info pour structurer ça proprement. Je restructure les données projet : 8 projets avec screenshots réels intégrés, AD'HOC + Wegoboard distincts, textes recruteur-friendly.

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: grep]_

_[tool: read_file]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: read_file]_

_[tool: str_replace_edit]_

_[tool: grep]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: str_replace_edit]_

_[tool: grep]_

_[tool: read_file]_

_[tool: str_replace_edit]_

_[tool: grep]_

_[tool: read_file]_

_[tool: str_replace_edit]_

_[tool: grep]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: read_file]_

_[tool: str_replace_edit]_

_[tool: grep]_

_[tool: str_replace_edit]_

_[tool: done]_

_[tool: copy_files]_

_[tool: str_replace_edit]_

_[tool: screenshot_user_view]_

_[tool: eval_js_user_view]_

_[tool: sleep]_

_[tool: eval_js_user_view]_

_[tool: sleep]_

_[tool: eval_js_user_view]_

_[tool: sleep]_

_[tool: screenshot_user_view]_

_[tool: eval_js_user_view]_

_[tool: sleep]_

_[tool: screenshot_user_view]_

_[tool: eval_js_user_view]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

Compris — je déplace le grain en arrière-plan de la zone hors-phone uniquement.

_[tool: grep]_

_[tool: read_file]_

_[tool: str_replace_edit]_

_[tool: done]_

_[tool: sleep]_

_[tool: screenshot_user_view]_

_[tool: snip]_

_[tool: eval_js_user_view]_

_[tool: sleep]_

_[tool: screenshot_user_view]_

_[tool: done]_

Tout est en place :

**Photo** — `<image-slot>` ajouté à droite du hero. Glisse ta photo dessus, ça persiste automatiquement (même au reload).

**Textes recruteur** — manifesto plus subtil ("Sensible et lucide. Intuitive et méthodique."), Distupted recadrée ("concept éditorial fort" plutôt que "trauma transformé"), Tommy Bahama factuelle ("21 ans, partie seule" sans le commentaire psychologique), lore Gary épuré.

**Grain rétro** — 3 couches de noise (turbulence fine, ta `bg-noise.png`, specks coarses + radial gradients rose/teal) **uniquement sur la zone cream autour du téléphone**, jamais à l'intérieur. Vraie ambiance riso/print.

**Projets** — 8 cartes maintenant : TEC, Jaccede, **AD'HOC Media** (nouveau · orchestration adhocmedia.fr), Wegoboard (corrigé en mobilité électrique), **Squid Game VR** (nouveau · à la place de Cora avec tes vrais screenshots), Equality, Distupted, Yungo. Les screenshots réels s'affichent dans le carousel des projets ouverts (TEC × 3 · Jaccede × 4 · Wegoboard × 2 · Squid × 3 · Yungo × 2).

**Bonus** — fixed un bug de scroll (le `main` débordait au lieu de scroller en interne), corrigé les covers Yungo (carte VISA bleue 12-17) et Wegoboard (silhouette trottinette + lignes de vitesse).

## User

le bg noise uniquement dans le bg : #FFF8F0 — Crépi Vénitien. j'ai des screen de cora du coup garde cora a la place de yungo plutot

## Assistant

_[tool: grep]_

_[tool: grep]_

_[tool: read_file]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: done]_

Fait :

**Noise** — purement sur le cream `#FFF8F0` (les radial gradients rose/teal sont retirés)

**Cora restauré · Yungo retiré** — Cora redevient un projet à part entière avec un brief réécrit pour le contexte recettes/hypermarché. `screenshots: []` pour l'instant, prête à recevoir tes captures dès que tu les envoies.

