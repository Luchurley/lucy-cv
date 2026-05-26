/* global React, ReactDOM, DesignCanvas, DCSection, DCArtboard,
   HomeScreen, ProjetsScreen, ProjetDetail, SkillsScreen, MoiScreen, ContactScreen,
   SkeletonScreen, OfflineScreen, LevelUpScreen,
   C_Header_Default, C_Header_Sub, C_BottomNav, C_Toast, C_Modal,
   C_Search, C_FilterChip, C_ProjectCard, C_Empty, C_StatCards,
   C_Process, C_CTASticky, C_Accordion, C_Manifesto,
   Header, BottomNav, ToastXP, ModalGary, Mono, HW, Box, Stack, Row, Disp, Tag, Btn, SearchBar, FilterChip, ProjectCard, SafeTop, EmptyState */

// ============================================================
// WF APP — Main DesignCanvas composition
// ============================================================

// Dimensions
const PHONE_W = 290;
const PHONE_H_STD = 580; // standard "above the fold" only
const PHONE_H_TALL = 780; // when the screen scrolls a fair amount
const PHONE_H_XTALL = 1020; // long scrolling pages (Home, Moi, Detail)
const COMPO_W = 320;
const COMPO_H = 420;
const COMPO_H_TALL = 540;

// Konami flow special step — swipe pattern in progress
const KonamiInProgress = () =>
<div className="wf-phone tall">
    <SafeTop />
    <Header xp={92} level="INTERESTED" />
    <div className="wf-canvas" style={{ position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(10,8,6,0.92)' }} />
      <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 12, padding: 16 }} data-comment-anchor="466590085f-div-29-7">
        <Mono size={9} style={{ color: 'var(--orange)' }}>SEQUENCE DETECTED</Mono>
        <div style={{ fontFamily: 'var(--ff-disp)', fontSize: 28, color: 'var(--paper)', letterSpacing: 3, lineHeight: 1 }}>↑ ↑ ↓ ↓ ← →</div>
        <div style={{ fontFamily: 'var(--ff-disp)', fontSize: 22, color: 'var(--ink-mid)', letterSpacing: 3, lineHeight: 1, opacity: 0.5 }}>← → B A</div>
        <div style={{ marginTop: 10, fontFamily: 'var(--ff-hw)', fontSize: 14, color: 'var(--rose)' }}>6 / 10 swipes</div>
        <div style={{ width: 160, height: 4, background: 'rgba(255,248,240,0.2)', border: '1px solid var(--paper)' }}>
          <div style={{ height: '100%', width: '60%', background: 'var(--rose)' }} />
        </div>
        <div style={{ marginTop: 12, fontFamily: 'var(--ff-mono)', fontSize: 8, color: 'rgba(255,248,240,0.6)', textAlign: 'center', maxWidth: 200 }}>
          MOBILE · pattern de swipes séquentiels
        </div>
      </div>
    </div>
    <BottomNav active="moi" />
  </div>;


// "Tap target" indicator overlay — shows where the user tapped between screens
const TapHint = ({ where, label }) => {
  const pos = {
    'bottom-proj': { bottom: 38, left: '30%' },
    'bottom-moi': { bottom: 38, left: '58%' },
    'bottom-ctc': { bottom: 38, right: '5%' },
    'card-jaccede': { top: 320, left: '20%' },
    'chip-ux': { top: 230, left: '20%' },
    'chip-da': { top: 230, left: '35%' },
    'chip-tous': { top: 230, left: '5%' },
    'search': { top: 195, left: '50%' },
    'logo': { top: 35, left: '15%' },
    'paw': { top: 235, right: '8%' }
  }[where] || {};
  return (
    <div style={{ position: 'absolute', ...pos, zIndex: 10, pointerEvents: 'none' }}>
      <div style={{
        width: 36, height: 36, borderRadius: '50%',
        border: '2.5px solid var(--rose)',
        background: 'rgba(255,0,85,0.18)',
        boxShadow: '0 0 0 4px rgba(255,0,85,0.15)',
        animation: 'tapPulse 1.4s ease-out infinite'
      }} />
      {label && <div style={{
        position: 'absolute',
        top: 42, left: -10,
        fontFamily: 'var(--ff-hw)', fontSize: 13, fontWeight: 600,
        color: 'var(--rose)', whiteSpace: 'nowrap',
        background: 'var(--paper)', padding: '0 4px'
      }}>{label}</div>}
    </div>);

};

// Floating toast pinned over a screen (for flow demos)
const PinnedToast = ({ top = 60, right = 8, children, accent }) =>
<div style={{ position: 'absolute', top, right, zIndex: 20 }}>
    <div className={'wf-toast ' + (accent ? 'is-levelup' : '')}>
      {children}
    </div>
  </div>;


// Wrapper to layer overlays on top of a screen
const WithLayer = ({ children, layer }) =>
<div style={{ position: 'relative', width: '100%', height: '100%' }}>
    {children}
    {layer}
  </div>;


// ============================================================
// MAIN APP COMPOSITION
// ============================================================
function App() {
  return (
    <DesignCanvas>

      {/* ====================================================
           INTRO PANEL
        ==================================================== */}
      <DCSection
        id="intro"
        title="Wireframes Mobile · v2.0"
        subtitle="Lucy Hurley Portfolio · Miami Venise · iPhone 375×812 référence">
        
        <DCArtboard id="brief" label="Brief résumé" width={420} height={560}>
          <div style={{ padding: 24, background: 'var(--paper)', height: '100%', display: 'flex', flexDirection: 'column', gap: 14, fontFamily: 'var(--ff-mono)' }}>
            <div style={{ fontFamily: 'var(--ff-disp)', fontSize: 34, letterSpacing: 1.5, lineHeight: 0.95 }}>WIREFRAMES<br />MOBILE v2</div>
            <div style={{ fontFamily: 'var(--ff-hw)', fontSize: 16, color: 'var(--rose)', lineHeight: 1.2 }}>Low-fi · loose · annoté</div>
            <div style={{ height: 2, background: 'var(--ink)', margin: '4px 0' }} />
            <div style={{ fontSize: 11, lineHeight: 1.6 }}>
              <strong>Architecture :</strong> 5 écrans + 1 sous-page<br />
              <strong>Navigation :</strong> Bottom tab bar fixe<br />
              <strong>Référence :</strong> 375×812pt (iPhone)<br />
              <strong>Touch target :</strong> 44×44pt min<br />
              <strong>Gamification :</strong> XP · niveaux · lore débloquable<br />
              <strong>Mascotte :</strong> 🐺 Gary (loup stratégique)
            </div>
            <div style={{ height: 1, background: 'var(--ink-soft)' }} />
            <div style={{ fontSize: 10, lineHeight: 1.7 }}>
              <strong style={{ fontFamily: 'var(--ff-disp)', letterSpacing: 2 }}>SECTIONS</strong><br />
              01 · Composants globaux (14)<br />
              02 · Home (2 variantes)<br />
              03 · Projets list (6 variantes)<br />
              04 · Projet détail<br />
              05 · Skills (2 variantes)<br />
              06 · Moi (4 niveaux XP)<br />
              07 · Contact (2 variantes)<br />
              08 · États globaux (3)<br />
              09 · Flows (5 storyboards)
            </div>
            <div style={{ height: 1, background: 'var(--ink-soft)' }} />
            <div style={{ fontFamily: 'var(--ff-hw)', fontSize: 14, color: 'var(--rose)', lineHeight: 1.25 }}>
              ↳ pan + zoom le canvas<br />
              ↳ clic ↗ sur un artboard = focus<br />
              ↳ ←/→ pour passer au suivant
            </div>
          </div>
        </DCArtboard>

        <DCArtboard id="legend" label="Légende annotation" width={420} height={560}>
          <div style={{ padding: 24, background: 'var(--paper)', height: '100%', display: 'flex', flexDirection: 'column', gap: 14, fontFamily: 'var(--ff-mono)' }}>
            <div style={{ fontFamily: 'var(--ff-disp)', fontSize: 22, letterSpacing: 1.5 }}>LÉGENDE</div>
            <div style={{ height: 2, background: 'var(--ink)' }} />

            <div style={{ display: 'grid', gridTemplateColumns: '40px 1fr', gap: 10, alignItems: 'center' }}>
              <div className="wf-marker">1</div>
              <div style={{ fontSize: 11 }}>Marker rose numéroté · pointe sur élément clé</div>

              <div style={{ fontFamily: 'var(--ff-hw)', fontSize: 14, color: 'var(--rose)', textAlign: 'center' }}>note</div>
              <div style={{ fontSize: 11 }}>Annotation manuscrite rose</div>

              <div className="wf-img" style={{ width: 36, height: 24 }}><div className="wf-img-label" style={{ fontSize: 5 }}>IMG</div></div>
              <div style={{ fontSize: 11 }}>Placeholder image (×-in-box)</div>

              <div className="wf-skel" style={{ width: 36, height: 14 }} />
              <div style={{ fontSize: 11 }}>Skeleton loading (pulse)</div>

              <span className="wf-tag">UX/UI</span>
              <div style={{ fontSize: 11 }}>Tag / chip inactif</div>

              <span className="wf-tag active">✓ UX/UI</span>
              <div style={{ fontSize: 11 }}>Tag / chip actif (rose)</div>

              <div className="wf-toast" style={{ fontSize: 7, padding: '3px 6px' }}><span className="xp" style={{ padding: '1px 5px' }}>+15</span>XP</div>
              <div style={{ fontSize: 11 }}>Toast XP non-bloquant</div>

              <div style={{
                width: 24, height: 24, borderRadius: '50%',
                border: '2px solid var(--rose)',
                background: 'rgba(255,0,85,0.18)'
              }} />
              <div style={{ fontSize: 11 }}>Tap target (dans les flows)</div>

              <div style={{ width: 30, height: 30, borderRadius: '50%', background: 'var(--rose)', color: 'var(--paper)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--ff-mono)', fontSize: 12, fontWeight: 700 }}>!</div>
              <div style={{ fontSize: 11 }}>Easter egg / interaction cachée</div>
            </div>

            <div style={{ flex: 1 }} />
            <div style={{ fontFamily: 'var(--ff-hw)', fontSize: 13, color: 'var(--ink-mid)', lineHeight: 1.3 }}>
              Tous les écrans sont à l'échelle 290px de large, soit ~77% d'un iPhone 375pt.
              Le contenu réel scrollera dans l'app.
            </div>
          </div>
        </DCArtboard>
      </DCSection>

      {/* ====================================================
           SECTION 01 — COMPOSANTS GLOBAUX
        ==================================================== */}
      <DCSection
        id="components"
        title="01 · Composants globaux"
        subtitle="Le vocabulaire de l'app — atomes réutilisables sur toutes les vues">
        
        <DCArtboard id="c-header" label="Header default" width={COMPO_W} height={COMPO_H}><C_Header_Default /></DCArtboard>
        <DCArtboard id="c-header-sub" label="Header sous-page" width={COMPO_W} height={COMPO_H}><C_Header_Sub /></DCArtboard>
        <DCArtboard id="c-nav" label="Bottom tab bar · 3 états" width={COMPO_W} height={COMPO_H_TALL}><C_BottomNav /></DCArtboard>
        <DCArtboard id="c-toast" label="Toast XP · 3 variantes" width={COMPO_W} height={COMPO_H_TALL}><C_Toast /></DCArtboard>
        <DCArtboard id="c-modal" label="Modal Gary 🐺" width={COMPO_W} height={COMPO_H_TALL}><C_Modal /></DCArtboard>
        <DCArtboard id="c-search" label="Searchbar · 3 états" width={COMPO_W} height={COMPO_H}><C_Search /></DCArtboard>
        <DCArtboard id="c-chip" label="Filter chip · 4 états" width={COMPO_W} height={COMPO_H_TALL}><C_FilterChip /></DCArtboard>
        <DCArtboard id="c-pcard" label="Project card" width={COMPO_W} height={COMPO_H}><C_ProjectCard /></DCArtboard>
        <DCArtboard id="c-empty" label="Empty state" width={COMPO_W} height={COMPO_H}><C_Empty /></DCArtboard>
        <DCArtboard id="c-stat" label="Stat cards · 3 variantes" width={COMPO_W} height={COMPO_H}><C_StatCards /></DCArtboard>
        <DCArtboard id="c-process" label="Process step" width={COMPO_W} height={COMPO_H_TALL}><C_Process /></DCArtboard>
        <DCArtboard id="c-cta" label="CTA sticky bottom" width={COMPO_W} height={COMPO_H}><C_CTASticky /></DCArtboard>
        <DCArtboard id="c-acc" label="Accordion experience" width={COMPO_W} height={COMPO_H}><C_Accordion /></DCArtboard>
        <DCArtboard id="c-mani" label="Blockquote manifesto" width={COMPO_W} height={COMPO_H}><C_Manifesto /></DCArtboard>
      </DCSection>

      {/* ====================================================
           SECTION 02 — HOME
        ==================================================== */}
      <DCSection
        id="home"
        title="02 · Home"
        subtitle="WF-01 · Accueil + hero + stat cards + manifesto + CTA strip">
        
        <DCArtboard id="home-default" label="HOME · default (VISITOR 0 XP)" width={PHONE_W} height={PHONE_H_XTALL}>
          <HomeScreen variant="default" />
        </DCArtboard>
        <DCArtboard id="home-secret" label="HOME · secret révélé (after logo ×7)" width={PHONE_W} height={PHONE_H_XTALL}>
          <HomeScreen variant="secret" />
        </DCArtboard>
      </DCSection>

      {/* ====================================================
           SECTION 03 — PROJETS LIST
        ==================================================== */}
      <DCSection
        id="projets"
        title="03 · Projets list"
        subtitle="WF-02 · Grille + searchbar + filter chips + états vides">
        
        <DCArtboard id="proj-default" label="PROJETS · default (6 projets)" width={PHONE_W} height={PHONE_H_TALL}>
          <ProjetsScreen variant="default" />
        </DCArtboard>
        <DCArtboard id="proj-filter" label="PROJETS · filter UX/UI actif" width={PHONE_W} height={PHONE_H_TALL}>
          <ProjetsScreen variant="filter" />
        </DCArtboard>
        <DCArtboard id="proj-search-focus" label="PROJETS · searchbar focus" width={PHONE_W} height={PHONE_H_TALL}>
          <ProjetsScreen variant="search-focus" />
        </DCArtboard>
        <DCArtboard id="proj-search-filled" label="PROJETS · searchbar filled (1 res.)" width={PHONE_W} height={PHONE_H_TALL}>
          <ProjetsScreen variant="search-filled" />
        </DCArtboard>
        <DCArtboard id="proj-empty-filter" label="PROJETS · empty (filtres conflits)" width={PHONE_W} height={PHONE_H_TALL}>
          <ProjetsScreen variant="empty-filter" />
        </DCArtboard>
        <DCArtboard id="proj-empty-search" label="PROJETS · empty (recherche vide)" width={PHONE_W} height={PHONE_H_TALL}>
          <ProjetsScreen variant="empty-search" />
        </DCArtboard>
      </DCSection>

      {/* ====================================================
           SECTION 04 — PROJET DÉTAIL
        ==================================================== */}
      <DCSection
        id="detail"
        title="04 · Projet détail"
        subtitle="WF-03 · Push view · hero img + process + carousel + sticky CTA">
        
        <DCArtboard id="detail-jaccede" label="DÉTAIL · Jaccede (push depuis grille)" width={PHONE_W} height={PHONE_H_XTALL}>
          <ProjetDetail />
        </DCArtboard>
      </DCSection>

      {/* ====================================================
           SECTION 05 — SKILLS
        ==================================================== */}
      <DCSection
        id="skills"
        title="05 · Skills"
        subtitle="WF-04 · Tags interactifs par catégorie · gagne XP au tap">
        
        <DCArtboard id="skl-default" label="SKILLS · default" width={PHONE_W} height={PHONE_H_TALL}>
          <SkillsScreen variant="default" />
        </DCArtboard>
        <DCArtboard id="skl-progress" label="SKILLS · état mi-parcours" width={PHONE_W} height={PHONE_H_TALL}>
          <SkillsScreen variant="progress" />
        </DCArtboard>
      </DCSection>

      {/* ====================================================
           SECTION 06 — MOI
        ==================================================== */}
      <DCSection
        id="moi"
        title="06 · Moi"
        subtitle="WF-05 · Parcours + identité + manifesto · lore débloqué par XP">
        
        <DCArtboard id="moi-default" label="MOI · VISITOR (lore verrouillé)" width={PHONE_W} height={PHONE_H_XTALL}>
          <MoiScreen variant="default" />
        </DCArtboard>
        <DCArtboard id="moi-curious" label="MOI · CURIOUS (Gary + Voyages)" width={PHONE_W} height={PHONE_H_XTALL}>
          <MoiScreen variant="curious" />
        </DCArtboard>
        <DCArtboard id="moi-interested" label="MOI · INTERESTED (+ Archétype)" width={PHONE_W} height={PHONE_H_XTALL}>
          <MoiScreen variant="interested" />
        </DCArtboard>
        <DCArtboard id="moi-hireme" label="MOI · ★ HIRE ME (full lore)" width={PHONE_W} height={PHONE_H_XTALL}>
          <MoiScreen variant="hireme" />
        </DCArtboard>
      </DCSection>

      {/* ====================================================
           SECTION 07 — CONTACT
        ==================================================== */}
      <DCSection
        id="contact"
        title="07 · Contact"
        subtitle="WF-06 · Coordonnées + score final (Peak-End Rule)">
        
        <DCArtboard id="ctc-default" label="CONTACT · default" width={PHONE_W} height={PHONE_H_TALL}>
          <ContactScreen variant="default" />
        </DCArtboard>
        <DCArtboard id="ctc-hireme" label="CONTACT · score ★ HIRE ME" width={PHONE_W} height={PHONE_H_TALL}>
          <ContactScreen variant="hireme" />
        </DCArtboard>
      </DCSection>

      {/* ====================================================
           SECTION 08 — ÉTATS GLOBAUX
        ==================================================== */}
      <DCSection
        id="states"
        title="08 · États globaux"
        subtitle="Skeleton loading · offline · level up moment">
        
        <DCArtboard id="state-skel" label="SKELETON · projets en chargement" width={PHONE_W} height={PHONE_H_TALL}>
          <SkeletonScreen />
        </DCArtboard>
        <DCArtboard id="state-offline" label="OFFLINE · pas de réseau" width={PHONE_W} height={PHONE_H_TALL}>
          <OfflineScreen />
        </DCArtboard>
        <DCArtboard id="state-levelup" label="LEVEL UP · CURIOUS unlock" width={PHONE_W} height={PHONE_H_TALL}>
          <LevelUpScreen />
        </DCArtboard>
      </DCSection>

      {/* ====================================================
           FLOW 01 — DÉCOUVERTE PROJET
        ==================================================== */}
      <DCSection
        id="flow-1"
        title="Flow 01 · Découverte projet"
        subtitle="HOME → tap [💼] → PROJETS → tap card → DÉTAIL → swipe retour">
        
        <DCArtboard id="f1-1" label="1. HOME · tap [💼]" width={PHONE_W} height={PHONE_H_XTALL}>
          <WithLayer layer={<TapHint where="bottom-proj" label="tap [💼]" />}>
            <HomeScreen variant="default" />
          </WithLayer>
        </DCArtboard>
        <DCArtboard id="f1-2" label="2. PROJETS · tap card Jaccede" width={PHONE_W} height={PHONE_H_TALL}>
          <WithLayer layer={<TapHint where="card-jaccede" label="tap Jaccede" />}>
            <ProjetsScreen variant="default" />
          </WithLayer>
        </DCArtboard>
        <DCArtboard id="f1-3" label="3. DÉTAIL · toast +20 XP" width={PHONE_W} height={PHONE_H_XTALL}>
          <WithLayer layer={<PinnedToast top={56}><span className="xp">+20 XP</span> — Projet ouvert</PinnedToast>}>
            <ProjetDetail />
          </WithLayer>
        </DCArtboard>
        <DCArtboard id="f1-4" label="4. Retour · scroll position préservée" width={PHONE_W} height={PHONE_H_TALL}>
          <ProjetsScreen variant="default" />
        </DCArtboard>
      </DCSection>

      {/* ====================================================
           FLOW 02 — FILTRAGE
        ==================================================== */}
      <DCSection
        id="flow-2"
        title="Flow 02 · Filtrage projets"
        subtitle="6 projets → UX/UI → +DA multi-sélect → reset · compteur live">
        
        <DCArtboard id="f2-1" label="1. 6 projets · tap [UX/UI]" width={PHONE_W} height={PHONE_H_TALL}>
          <WithLayer layer={<TapHint where="chip-ux" label="tap UX/UI" />}>
            <ProjetsScreen variant="default" />
          </WithLayer>
        </DCArtboard>
        <DCArtboard id="f2-2" label="2. Filtre actif · 3 projets" width={PHONE_W} height={PHONE_H_TALL}>
          <WithLayer layer={<PinnedToast top={56}><span className="xp">+5 XP</span> — Filtre appliqué</PinnedToast>}>
            <ProjetsScreen variant="filter" />
          </WithLayer>
        </DCArtboard>
        <DCArtboard id="f2-3" label="3. Conflit · 0 résultat (empty)" width={PHONE_W} height={PHONE_H_TALL}>
          <ProjetsScreen variant="empty-filter" />
        </DCArtboard>
        <DCArtboard id="f2-4" label="4. Reset [TOUS] · retour 6 projets" width={PHONE_W} height={PHONE_H_TALL}>
          <WithLayer layer={<TapHint where="chip-tous" label="tap TOUS" />}>
            <ProjetsScreen variant="default" />
          </WithLayer>
        </DCArtboard>
      </DCSection>

      {/* ====================================================
           FLOW 03 — RECHERCHE
        ==================================================== */}
      <DCSection
        id="flow-3"
        title="Flow 03 · Recherche"
        subtitle="Tap searchbar → keyboard → saisie → résultats live → empty si rien">
        
        <DCArtboard id="f3-1" label="1. PROJETS · tap searchbar" width={PHONE_W} height={PHONE_H_TALL}>
          <WithLayer layer={<TapHint where="search" label="tap 🔍" />}>
            <ProjetsScreen variant="default" />
          </WithLayer>
        </DCArtboard>
        <DCArtboard id="f3-2" label="2. Focus · keyboard ouvre" width={PHONE_W} height={PHONE_H_TALL}>
          <ProjetsScreen variant="search-focus" />
        </DCArtboard>
        <DCArtboard id="f3-3" label="3. « jaccede » · 1 résultat live" width={PHONE_W} height={PHONE_H_TALL}>
          <ProjetsScreen variant="search-filled" />
        </DCArtboard>
        <DCArtboard id="f3-4" label="4. « xyzfoo » · empty + Gary" width={PHONE_W} height={PHONE_H_TALL}>
          <ProjetsScreen variant="empty-search" />
        </DCArtboard>
      </DCSection>

      {/* ====================================================
           FLOW 04 — PROGRESSION XP
        ==================================================== */}
      <DCSection
        id="flow-4"
        title="Flow 04 · Progression XP · VISITOR → ★ HIRE ME"
        subtitle="Chaque action = +XP · niveaux débloquent du lore (MOI)">
        
        <DCArtboard id="f4-1" label="1. Arrivée · VISITOR 0 XP" width={PHONE_W} height={PHONE_H_XTALL}>
          <HomeScreen variant="default" />
        </DCArtboard>
        <DCArtboard id="f4-2" label="2. Visite PROJETS · +15 XP" width={PHONE_W} height={PHONE_H_TALL}>
          <WithLayer layer={<PinnedToast top={56}><span className="xp">+15 XP</span> — Exploration</PinnedToast>}>
            <ProjetsScreen variant="default" />
          </WithLayer>
        </DCArtboard>
        <DCArtboard id="f4-3" label="3. Seuil 40 XP · CURIOUS unlock" width={PHONE_W} height={PHONE_H_XTALL}>
          <WithLayer layer={<PinnedToast top={56} accent>⚡ CURIOUS · contenu débloqué</PinnedToast>}>
            <MoiScreen variant="curious" />
          </WithLayer>
        </DCArtboard>
        <DCArtboard id="f4-4" label="4. 195 XP · ★ HIRE ME · score final" width={PHONE_W} height={PHONE_H_TALL}>
          <ContactScreen variant="hireme" />
        </DCArtboard>
      </DCSection>

      {/* ====================================================
           FLOW 05 — KONAMI EASTER EGG
        ==================================================== */}
      <DCSection
        id="flow-5"
        title="Flow 05 · Easter egg Konami · Gary 🐺"
        subtitle="Swipe pattern mobile alt. clavier ↑↑↓↓←→←→BA · spawn modal Gary">
        
        <DCArtboard id="f5-1" label="1. SKILLS · hint dashed visible" width={PHONE_W} height={PHONE_H_TALL}>
          <SkillsScreen variant="default" />
        </DCArtboard>
        <DCArtboard id="f5-2" label="2. Pattern en cours · 6/10 swipes" width={PHONE_W} height={PHONE_H_TALL}>
          <KonamiInProgress />
        </DCArtboard>
        <DCArtboard id="f5-3" label="3. GARY MODE · modal + +100 XP" width={PHONE_W} height={PHONE_H_TALL}>
          <WithLayer layer={
          <div style={{ position: 'absolute', inset: 0 }}>
              <ModalGary />
            </div>
          }>
            <MoiScreen variant="interested" />
          </WithLayer>
        </DCArtboard>
      </DCSection>

      {/* ====================================================
           NOTES UX / CHECKLIST
        ==================================================== */}
      <DCSection
        id="notes"
        title="Notes UX · sources"
        subtitle="Patterns checklist.design + patttterns.com appliqués">
        
        <DCArtboard id="note-thumb" label="Thumb zone · zone pouce" width={320} height={520}>
          <div style={{ padding: 18, background: 'var(--paper)', height: '100%', display: 'flex', flexDirection: 'column', gap: 10, fontFamily: 'var(--ff-mono)', fontSize: 11 }}>
            <div style={{ fontFamily: 'var(--ff-disp)', fontSize: 18, letterSpacing: 1.5 }}>THUMB ZONE</div>
            <div style={{ height: 1.5, background: 'var(--ink)' }} />
            <div style={{ position: 'relative', flex: 1, border: '2px solid var(--ink)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ flex: 1, background: 'rgba(255,0,85,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '1.5px dashed var(--ink-soft)' }}>
                <span style={{ fontFamily: 'var(--ff-hw)', fontSize: 14, color: 'var(--rose)' }}>difficile · pouce étiré</span>
              </div>
              <div style={{ flex: 1, background: 'rgba(255,85,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '1.5px dashed var(--ink-soft)' }}>
                <span style={{ fontFamily: 'var(--ff-hw)', fontSize: 14, color: 'var(--orange)' }}>correct · milieu</span>
              </div>
              <div style={{ flex: 1.4, background: 'rgba(0,184,196,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '2px solid var(--ink)' }}>
                <span style={{ fontFamily: 'var(--ff-hw)', fontSize: 14, color: 'var(--ink)' }}>OPTIMAL · zone bottom nav</span>
              </div>
              <BottomNav active="home" />
            </div>
            <div style={{ fontSize: 9, color: 'var(--ink-mid)', lineHeight: 1.55 }}>
              Toutes les actions primaires (nav, CTA, filtres) doivent vivre dans le tiers bas.
              C'est pourquoi la bottom tab bar est le principal moyen de navigation, et pourquoi
              le CTA de contact en détail projet est sticky bottom.
            </div>
          </div>
        </DCArtboard>

        <DCArtboard id="note-progression" label="Système XP · seuils" width={320} height={520}>
          <div style={{ padding: 18, background: 'var(--paper)', height: '100%', display: 'flex', flexDirection: 'column', gap: 12, fontFamily: 'var(--ff-mono)' }}>
            <div style={{ fontFamily: 'var(--ff-disp)', fontSize: 18, letterSpacing: 1.5 }}>SEUILS XP</div>
            <div style={{ height: 1.5, background: 'var(--ink)' }} />
            <Stack gap={10}>
              {[
              { lvl: 'VISITOR', range: '0–39', color: 'rgba(10,8,6,0.45)', unlock: 'aucun lore visible' },
              { lvl: 'CURIOUS', range: '40–99', color: 'var(--teal)', unlock: '🐺 Gary + Voyages' },
              { lvl: 'INTERESTED', range: '100–189', color: 'var(--orange)', unlock: 'Archétype + inspirations' },
              { lvl: '★ HIRE ME', range: '190+', color: 'var(--rose)', unlock: 'Lore confidentiel complet' }].
              map((l, i) =>
              <div key={i} style={{ borderLeft: `4px solid ${l.color}`, paddingLeft: 10 }}>
                  <div style={{ fontFamily: 'var(--ff-disp)', fontSize: 14, letterSpacing: 1, color: l.color === 'rgba(10,8,6,0.45)' ? 'var(--ink)' : l.color }}>{l.lvl}</div>
                  <div style={{ fontSize: 9, color: 'var(--ink-mid)', marginTop: 2 }}>{l.range} XP</div>
                  <div style={{ fontSize: 10, marginTop: 3, lineHeight: 1.5 }}>{l.unlock}</div>
                </div>
              )}
            </Stack>
            <div style={{ flex: 1 }} />
            <div style={{ fontFamily: 'var(--ff-hw)', fontSize: 13, color: 'var(--rose)', lineHeight: 1.3 }}>
              barre XP toujours visible header → progression instantanément perceptible
            </div>
          </div>
        </DCArtboard>

        <DCArtboard id="note-checklist" label="Checklist UX globale" width={320} height={520}>
          <div style={{ padding: 18, background: 'var(--paper)', height: '100%', display: 'flex', flexDirection: 'column', gap: 8, fontFamily: 'var(--ff-mono)', fontSize: 9, lineHeight: 1.55 }}>
            <div style={{ fontFamily: 'var(--ff-disp)', fontSize: 18, letterSpacing: 1.5 }}>CHECKLIST</div>
            <div style={{ height: 1.5, background: 'var(--ink)' }} />
            {[
            ['NAV', 'Bottom tab bar persistante 5 onglets'],
            ['NAV', 'Push depuis droite pour détail projet'],
            ['NAV', 'Retour bouton ‹ + swipe droite'],
            ['LIST', 'Searchbar visible sans interaction'],
            ['LIST', 'Filtres au-dessus de la grille (Gestalt)'],
            ['LIST', 'Compteur dynamique'],
            ['LIST', 'Empty state + 🐺'],
            ['DETAIL', 'Hero img fullwidth en entrée'],
            ['DETAIL', 'Process numéroté 4 étapes'],
            ['DETAIL', 'Carousel swipe + dots pagination'],
            ['DETAIL', 'CTA sticky bottom mailto'],
            ['GAME', 'XP bar header toujours visible'],
            ['GAME', 'Toast non-bloquant 2.8s'],
            ['GAME', 'Score final dans CONTACT'],
            ['A11Y', 'Tap targets 44×44pt partout'],
            ['A11Y', 'Skeleton loading (pas de layout shift)'],
            ['A11Y', 'prefers-reduced-motion respecté']].
            map((c, i) =>
            <Row key={i} gap={6}>
                <span className="wf-tag" style={{ minWidth: 30, justifyContent: 'center', fontSize: 6 }}>{c[0]}</span>
                <span style={{ flex: 1 }}>{c[1]}</span>
                <span style={{ color: 'var(--rose)', fontWeight: 700 }}>✓</span>
              </Row>
            )}
          </div>
        </DCArtboard>
        <DCArtboard id="note-a11y" label="A11y · contrast audit toast XP" width={360} height={580}>
          <div style={{ padding: 20, background: 'var(--paper)', height: '100%', display: 'flex', flexDirection: 'column', gap: 10, fontFamily: 'var(--ff-mono)' }}>
            <div style={{ fontFamily: 'var(--ff-disp)', fontSize: 20, letterSpacing: 1.5 }}>A11Y · TOAST XP</div>
            <div style={{ height: 2, background: 'var(--ink)' }} />
            <div style={{ fontFamily: 'var(--ff-hw)', fontSize: 13, color: 'var(--rose)', lineHeight: 1.25 }}>
              le brief original spécifiait rose #FF0055 sur orange #FF5500 → ~1.4:1, fail AA.
              correction appliquée :
            </div>

            <Mono size={7} style={{ color: 'var(--ink-mid)', marginTop: 4 }}>· AVANT (non-conforme)</Mono>
            <div style={{ background: '#FF5500', border: '1.5px solid var(--ink)', boxShadow: '3px 3px 0 var(--ink)', padding: '5px 10px', display: 'inline-flex', gap: 6, fontFamily: 'var(--ff-mono)', fontSize: 9, fontWeight: 700, color: '#FFF8F0', alignSelf: 'flex-start' }}>
              <span style={{ color: '#FF0055' }}>+15 XP</span>
              <span>— Exploration</span>
            </div>
            <Row gap={6} style={{ fontSize: 10 }}>
              <span className="wf-tag" style={{ background: '#FF0055', color: 'var(--paper)', borderColor: 'var(--ink)' }}>FAIL</span>
              <span>rose sur orange · ≈ 1.4 : 1</span>
            </Row>

            <Mono size={7} style={{ color: 'var(--ink-mid)', marginTop: 4 }}>· APRÈS · standard (AAA)</Mono>
            <div className="wf-toast" style={{ alignSelf: 'flex-start' }}>
              <span className="xp">+15 XP</span>
              <span>— Exploration</span>
            </div>
            <Row gap={6} style={{ fontSize: 10 }}>
              <span className="wf-tag filled-teal" style={{ borderColor: 'var(--ink)' }}>AAA</span>
              <span>cream sur ink · ≈ 16 : 1</span>
            </Row>

            <Mono size={7} style={{ color: 'var(--ink-mid)', marginTop: 4 }}>· APRÈS · level-up (AA)</Mono>
            <div className="wf-toast is-levelup" style={{ alignSelf: 'flex-start' }}>
              <span className="xp">★</span>
              <span>CURIOUS · débloqué</span>
            </div>
            <Row gap={6} style={{ fontSize: 10 }}>
              <span className="wf-tag filled-teal" style={{ borderColor: 'var(--ink)' }}>AA</span>
              <span>ink sur rose · ≈ 4.87 : 1</span>
            </Row>

            <div style={{ height: 1, background: 'var(--ink-soft)', marginTop: 4 }} />
            <div style={{ fontFamily: 'var(--ff-mono)', fontSize: 9, lineHeight: 1.55, color: 'var(--ink)' }}>
              <strong>règle système ·</strong> jamais deux accents vifs en juxtaposition
              (rose × orange, rose × teal, teal × orange). les accents séparent des zones,
              ils ne se superposent pas — ils utilisent ink ou cream comme texte.
            </div>
            <div style={{ fontFamily: 'var(--ff-hw)', fontSize: 13, color: 'var(--rose)', lineHeight: 1.25 }}>
              le chiffre XP garde son identité graphique grâce au pill ink. plus lisible
              qu'avant, et conforme WCAG 2.1 AA partout.
            </div>
          </div>
        </DCArtboard>

      </DCSection>

    </DesignCanvas>);

}

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<App />);