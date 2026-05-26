/* global React, Header, BottomNav, ToastXP, ModalGary, Box, Stack, Row, Mono, HW, Disp, Tag, Btn, ImgPh, SearchBar, FilterChip, ProjectCard, EmptyState, StatCard, SafeTop, Marker */
// ============================================================
// WF COMPONENTS — Global component showcase artboards
// Each is a small, focused wireframe for ONE component.
// ============================================================

// Generic small artboard wrapper with title strip + content area
const CompoFrame = ({ children, bg = 'var(--paper)' }) => (
  <div style={{
    width: '100%', height: '100%',
    background: bg,
    border: '2px solid var(--ink)',
    boxSizing: 'border-box',
    padding: 12,
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
  }}>
    {children}
  </div>
);
const CompoTitle = ({ children, sub }) => (
  <div>
    <div style={{ fontFamily: 'var(--ff-disp)', fontSize: 14, letterSpacing: 1.5, lineHeight: 1 }}>{children}</div>
    {sub && <div style={{ fontFamily: 'var(--ff-mono)', fontSize: 7, color: 'var(--ink-mid)', letterSpacing: 1, marginTop: 2 }}>{sub}</div>}
  </div>
);
const Spec = ({ children }) => (
  <div style={{ fontFamily: 'var(--ff-hw)', fontSize: 13, color: 'var(--rose)', fontWeight: 600, lineHeight: 1.15 }}>{children}</div>
);

// 01 — HEADER default
const C_Header_Default = () => (
  <CompoFrame>
    <CompoTitle sub="56pt · sticky · z-500">HEADER · DEFAULT</CompoTitle>
    <Stack gap={6}>
      <SafeTop />
      <Header xp={47} level="VISITOR" />
    </Stack>
    <Spec>1. logo (tap×7 = glitch + secret)</Spec>
    <Spec>2. XP bar globale (toujours visible)</Spec>
  </CompoFrame>
);

// 02 — HEADER sub-page
const C_Header_Sub = () => (
  <CompoFrame>
    <CompoTitle sub="variante sous-page (PROJET DÉTAIL)">HEADER · SUB</CompoTitle>
    <Stack gap={6}>
      <SafeTop />
      <div className="wf-header">
        <Row gap={6}>
          <span style={{ fontSize: 16, fontWeight: 700 }}>‹</span>
          <Mono size={9}>PROJETS</Mono>
          <span style={{ fontFamily: 'var(--ff-disp)', fontSize: 13, marginLeft: 4, letterSpacing: 1 }}>JACCEDE</span>
        </Row>
        <div className="wf-xp">
          <span className="wf-mono-sm" style={{ fontSize: 7 }}>CURIOUS</span>
          <div className="wf-xp-bar"><span style={{ width: '52%' }} /></div>
        </div>
      </div>
    </Stack>
    <Spec>‹ = retour push (slide droite)</Spec>
    <Spec>nom de l'écran courant inséré</Spec>
  </CompoFrame>
);

// 03 — Bottom nav — 3 states stacked
const C_BottomNav = () => (
  <CompoFrame>
    <CompoTitle sub="83pt · 5 tabs · safe area incl.">BOTTOM TAB BAR</CompoTitle>
    <Stack gap={10}>
      <div>
        <Mono size={7} style={{ color: 'var(--ink-mid)' }}>· DEFAULT (Home active)</Mono>
        <BottomNav active="home" />
      </div>
      <div>
        <Mono size={7} style={{ color: 'var(--ink-mid)' }}>· PROJETS — avec badge new</Mono>
        <BottomNav active="proj" badge="proj" />
      </div>
      <div>
        <Mono size={7} style={{ color: 'var(--ink-mid)' }}>· CONTACT active</Mono>
        <BottomNav active="ctc" />
      </div>
    </Stack>
    <Spec>tap target 75×83pt minimum</Spec>
  </CompoFrame>
);

// 04 — Toast XP — 3 variants
const C_Toast = () => (
  <CompoFrame>
    <CompoTitle sub="top 64pt · slide-right · 2.8s · non-bloquant">TOAST XP</CompoTitle>
    <Stack gap={10} style={{ marginTop: 8 }}>
      <div>
        <Mono size={7} style={{ color: 'var(--ink-mid)' }}>· standard exploration</Mono>
        <div style={{ marginTop: 4 }}><ToastXP xp="+15 XP" label="Exploration" /></div>
      </div>
      <div>
        <Mono size={7} style={{ color: 'var(--ink-mid)' }}>· projet ouvert</Mono>
        <div style={{ marginTop: 4 }}><ToastXP xp="+20 XP" label="Projet ouvert" /></div>
      </div>
      <div>
        <Mono size={7} style={{ color: 'var(--ink-mid)' }}>· LEVEL UP (rose · ink text AA)</Mono>
        <div style={{ marginTop: 4 }}>
          <div className="wf-toast is-levelup">
            <span className="xp">★</span>
            <span>CURIOUS · contenu débloqué</span>
          </div>
        </div>
      </div>
    </Stack>
    <Spec>non-bloquant · pas de close manuel · auto-dismiss</Spec>
  </CompoFrame>
);

// 05 — Modal Gary
const C_Modal = () => (
  <CompoFrame>
    <CompoTitle sub="overlay 0.88 · centré · tap = fermer">MODAL · GARY 🐺</CompoTitle>
    <div style={{ flex: 1, position: 'relative', border: '1.5px dashed var(--ink-soft)', minHeight: 220 }}>
      <ModalGary />
    </div>
    <Spec>shadow 8px rose · easter egg Konami</Spec>
  </CompoFrame>
);

// 06 — Searchbar 3 states
const C_Search = () => (
  <CompoFrame>
    <CompoTitle sub="checklist.design/components/searchbar">SEARCHBAR · 3 ÉTATS</CompoTitle>
    <Stack gap={10}>
      <div>
        <Mono size={7} style={{ color: 'var(--ink-mid)' }}>· DEFAULT</Mono>
        <div style={{ marginTop: 4 }}><SearchBar state="default" /></div>
      </div>
      <div>
        <Mono size={7} style={{ color: 'var(--ink-mid)' }}>· FOCUS (keyboard ouvre)</Mono>
        <div style={{ marginTop: 4 }}><SearchBar state="focus" /></div>
      </div>
      <div>
        <Mono size={7} style={{ color: 'var(--ink-mid)' }}>· FILLED (clear ✕ apparait)</Mono>
        <div style={{ marginTop: 4 }}><SearchBar state="filled" value="jaccede" /></div>
      </div>
    </Stack>
    <Spec>recherche temps réel · titre + tags + entreprise + année</Spec>
  </CompoFrame>
);

// 07 — Filter chip 4 states
const C_FilterChip = () => (
  <CompoFrame>
    <CompoTitle sub="checklist.design/flows/filtering-items">FILTER CHIP · 4 ÉTATS</CompoTitle>
    <Stack gap={10}>
      <div>
        <Mono size={7} style={{ color: 'var(--ink-mid)' }}>· INACTIF</Mono>
        <Row gap={4} style={{ marginTop: 4 }}><FilterChip>UX/UI</FilterChip></Row>
      </div>
      <div>
        <Mono size={7} style={{ color: 'var(--ink-mid)' }}>· HOVER / TAP</Mono>
        <Row gap={4} style={{ marginTop: 4 }}><FilterChip state="active">UX/UI</FilterChip></Row>
      </div>
      <div>
        <Mono size={7} style={{ color: 'var(--ink-mid)' }}>· ACTIF (avec ✕ pour retrait individuel)</Mono>
        <Row gap={4} style={{ marginTop: 4 }}><FilterChip state="active-x">UX/UI</FilterChip></Row>
      </div>
      <div>
        <Mono size={7} style={{ color: 'var(--ink-mid)' }}>· MULTI-SÉLECTION</Mono>
        <Row gap={4} style={{ marginTop: 4, flexWrap: 'wrap' }}>
          <FilterChip state="active-x">UX/UI</FilterChip>
          <FilterChip state="active-x">DA</FilterChip>
        </Row>
      </div>
    </Stack>
    <Spec>multi-sélect OK · TOUS = reset</Spec>
  </CompoFrame>
);

// 08 — Project card (default + skeleton)
const C_ProjectCard = () => (
  <CompoFrame>
    <CompoTitle sub="grille 2 col · push navigation">PROJECT CARD</CompoTitle>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
      <ProjectCard name="Jaccede" tags={['UX/UI', 'DA']} date="2021–2022" />
      <ProjectCard skeleton />
    </div>
    <Mono size={6} style={{ color: 'var(--ink-mid)' }}>
      ↑ default (img + titre + tags + date)
      <br/>↑ skeleton loading (pulse 1.2s)
    </Mono>
    <Spec>tap = push détail (slide droite)</Spec>
  </CompoFrame>
);

// 09 — Empty state
const C_Empty = () => (
  <CompoFrame>
    <CompoTitle sub="filtres 0 résultat / recherche vide">EMPTY STATE · 🐺</CompoTitle>
    <div style={{ border: '1.5px dashed var(--ink-soft)', padding: 4 }}>
      <EmptyState
        title="Gary n'a rien trouvé"
        sub={"pour « xyzfoo »"}
        actions={[{ label: 'EFFACER', variant: 'rose' }]}
      />
    </div>
    <Spec>Gary 🐺 = cohérence narrative</Spec>
    <Spec>action claire visible</Spec>
  </CompoFrame>
);

// 10 — Stat card row
const C_StatCards = () => (
  <CompoFrame>
    <CompoTitle sub="Miller's Law · 3 max · home + moi">STAT CARDS · 3 VARIANTES</CompoTitle>
    <Stack gap={6}>
      <StatCard label="NATIONALITÉ" value="🇫🇷🇬🇧 Franco-britannique" variant="cream" />
      <StatCard label="LOCALISATION" value="📍 Wavrin · Permis B" variant="teal" />
      <StatCard label="DISPONIBILITÉ" value="🟢 Open to work" variant="org" />
    </Stack>
    <Spec>cream · teal · orange (jamais 2 acc. adj.)</Spec>
  </CompoFrame>
);

// 11 — Process step block
const C_Process = () => (
  <CompoFrame>
    <CompoTitle sub="projet détail · 4 étapes séquentielles">PROCESS STEP</CompoTitle>
    <Stack gap={6}>
      {['RESEARCH', 'DEFINE', 'DESIGN', 'TEST & ITERATE'].map((step, i) => (
        <Box key={i} style={{ padding: 6, display: 'flex', alignItems: 'center', gap: 8 }}>
          <Disp size={16} style={{ color: 'var(--rose)' }}>{String(i+1).padStart(2,'0')}</Disp>
          <Stack gap={2} style={{ flex: 1 }}>
            <Mono size={8}>{step}</Mono>
            <div style={{ height: 5, background: 'var(--ink-trace)', width: '85%' }} />
          </Stack>
        </Box>
      ))}
    </Stack>
    <Spec>numéroté · scannable · linéaire</Spec>
  </CompoFrame>
);

// 12 — CTA Sticky bottom
const C_CTASticky = () => (
  <CompoFrame>
    <CompoTitle sub="projet détail · au-dessus bottom nav">CTA STICKY BOTTOM</CompoTitle>
    <div style={{ flex: 1 }} />
    <div style={{ borderTop: '2px solid var(--ink)' }}>
      <div className="wf-cta-sticky">✉ ME CONTACTER · HURLEY.LUCY@GMAIL.COM</div>
      <BottomNav active="proj" />
    </div>
    <Spec>jamais perdu pendant lecture projet</Spec>
  </CompoFrame>
);

// 13 — Accordion (XP)
const C_Accordion = () => (
  <CompoFrame>
    <CompoTitle sub="parcours · MOI · expand/collapse">ACCORDION · EXPÉRIENCE</CompoTitle>
    <Stack gap={6}>
      <div className="wf-acc">
        <Stack gap={2} style={{ flex: 1 }}>
          <Mono size={9}>CONTRÔLE QUALITÉ</Mono>
          <Mono size={7} style={{ color: 'var(--ink-mid)' }}>Dassault Aviation · 2025–2026</Mono>
        </Stack>
        <Row gap={4}><Tag>CDI</Tag><span style={{ fontSize: 11 }}>▾</span></Row>
      </div>
      <div className="wf-acc open">
        <Stack gap={2} style={{ flex: 1 }}>
          <Mono size={9}>CHEF DE PROJET DIGITAL</Mono>
          <Mono size={7} style={{ color: 'var(--ink-mid)' }}>AD'HOC MEDIA · 2023–2024</Mono>
        </Stack>
        <Row gap={4}><Tag>FREELANCE</Tag><span style={{ fontSize: 11, transform: 'rotate(180deg)' }}>▾</span></Row>
      </div>
      <div style={{ border: '1.5px dashed var(--ink-soft)', borderTop: 0, padding: '6px 8px', marginTop: -6, background: 'var(--paper-2)' }}>
        <div style={{ height: 5, background: 'var(--ink-trace)', width: '95%' }} />
        <div style={{ height: 5, background: 'var(--ink-trace)', width: '70%', marginTop: 3 }} />
        <Row gap={3} style={{ marginTop: 6 }}>
          <Tag>UX/UI</Tag><Tag>WEB2PRINT</Tag>
        </Row>
      </div>
    </Stack>
    <Spec>tap = expand · +3 XP</Spec>
  </CompoFrame>
);

// 14 — Manifesto blockquote
const C_Manifesto = () => (
  <CompoFrame>
    <CompoTitle sub="border-left rose 5px · italic">BLOCKQUOTE · MANIFESTO</CompoTitle>
    <div style={{ borderLeft: '4px solid var(--rose)', paddingLeft: 12, marginTop: 8 }}>
      <Mono size={7} style={{ opacity: 0.55 }}>MANIFESTO</Mono>
      <div style={{ fontFamily: 'var(--ff-mono)', fontStyle: 'italic', fontSize: 10, marginTop: 6, lineHeight: 1.7 }}>
        « Je suis le genre de personne qu'on croit avoir comprise trop vite,
        jusqu'au moment où tout se contredit. »
      </div>
    </div>
    <Spec>style cohérent partout (home + moi)</Spec>
  </CompoFrame>
);

Object.assign(window, {
  C_Header_Default, C_Header_Sub, C_BottomNav, C_Toast, C_Modal,
  C_Search, C_FilterChip, C_ProjectCard, C_Empty, C_StatCards,
  C_Process, C_CTASticky, C_Accordion, C_Manifesto,
  CompoFrame, CompoTitle, Spec,
});
