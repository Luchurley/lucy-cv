// ============================================================
// APP — main entry · state · routing · easter eggs · XP system
// ============================================================

/* global React, ReactDOM, Header, BottomNav, ToastStack, useToasts,
   GaryModal, useKonami, KonamiProgress, HomeScreen, ProjetsScreen, ProjetDetail,
   SkillsScreen, MoiScreen, ContactScreen, tierFromXP */

const { useState: $useState, useEffect: $useEffect, useRef: $useRef, useCallback: $useCallback } = React;

function App() {
  // ---- ROUTING ----
  const [tab, setTab] = $useState('home');
  const [detailId, setDetailId] = $useState(null);
  // ---- XP STATE ----
  const [xp, setXP] = $useState(0);
  const lastTierRef = $useRef('visitor');
  // ---- EASTER EGG STATES ----
  const [garyOpen, setGaryOpen] = $useState(false);
  const [garyLine, setGaryLine] = $useState(window.LUCY.garyLines[0]);
  const [secretRevealed, setSecretRevealed] = $useState(false);
  const [pawClicked, setPawClicked] = $useState(false);
  const logoTapsRef = $useRef({ count: 0, last: 0 });
  const [logoGlitch, setLogoGlitch] = $useState(false);
  // ---- KONAMI PROGRESS ----
  const [konamiProgress, setKonamiProgress] = $useState(0);
  // ---- VISITED SCREENS (to grant XP once per visit) ----
  const visitedRef = $useRef(new Set());
  // ---- SKILL TAP STATES ----
  const [skillStates, setSkillStates] = $useState({});
  // ---- ACCORDION ----
  const [openAcc, setOpenAcc] = $useState(null);
  // ---- NEW BADGES ----
  const [newBadge, setNewBadge] = $useState({});
  // ---- TOASTS ----
  const [toasts, pushToast] = useToasts();
  // ---- BADGES SEEN ----
  const badgesSeenRef = $useRef(new Set());
  // ---- FUN FACTS ----
  const [unlockedFacts, setUnlockedFacts] = $useState([]);

  // ---- unlockFact helper ----
  const unlockFact = $useCallback((id) => {
    const fact = window.LUCY.funFacts.find(f => f.id === id);
    if (!fact) return;
    setUnlockedFacts(prev => {
      if (prev.find(f => f.id === id)) return prev;
      setTimeout(() => pushToast({ funfact: true, emoji: fact.emoji, label: `${fact.title} — ${fact.text}` }), 200);
      return [...prev, fact];
    });
  }, [pushToast]);

  // ---- gainXP helper ----
  const gainXP = $useCallback((amount, label) => {
    setXP(prev => {
      const next = Math.max(0, prev + amount);
      // Toast with the XP gain
      pushToast({ xp: amount, label });
      // Level-up detection + fact unlock
      const prevTier = tierFromXP(prev).key;
      const nextTier = tierFromXP(next).key;
      if (prevTier !== nextTier) {
        const t = tierFromXP(next);
        setTimeout(() => pushToast({ tier: true, label: `${t.label} · contenu débloqué` }), 350);
        setTimeout(() => unlockFact(nextTier), 700);
      }
      return next;
    });
  }, [pushToast, unlockFact]);

  // ---- Tab change ----
  const onNav = (id) => {
    setDetailId(null);
    setTab(id);
    // First visit grants XP
    if (!visitedRef.current.has(id)) {
      visitedRef.current.add(id);
      const xpMap = { home: 5, projets: 15, skills: 10, moi: 15, contact: 10 };
      if (xpMap[id]) gainXP(xpMap[id], `Visite · ${id.toUpperCase()}`);
    }
    // Clear "new" badge on that tab
    setNewBadge(prev => { const n = { ...prev }; delete n[id]; return n; });
  };

  // ---- Project open ----
  const openProject = (id) => {
    setDetailId(id);
  };
  const backToProjets = () => {
    setDetailId(null);
  };

  // ---- Accordion toggle ----
  const toggleAcc = (i) => {
    setOpenAcc(prev => {
      if (prev !== i) {
        // First time expanding → +3 XP
        const k = 'acc:' + i;
        if (!badgesSeenRef.current.has(k)) {
          badgesSeenRef.current.add(k);
          gainXP(3, `Expérience explorée`);
        }
      }
      return prev === i ? null : i;
    });
  };

  // ---- Skill tap ----
  const onSkillTap = (key) => {
    setSkillStates(prev => {
      const cur = prev[key] || 0;
      const next = cur < 2 ? cur + 1 : 0;
      const out = { ...prev, [key]: next };
      // Reach state 2 → +2 XP
      if (next === 2) {
        const seenKey = 'skill:' + key;
        if (!badgesSeenRef.current.has(seenKey)) {
          badgesSeenRef.current.add(seenKey);
          gainXP(2, `Skill validé`);
        }
      }
      return out;
    });
  };

  // ---- Logo ×7 ----
  const onLogoTap = () => {
    const now = Date.now();
    const { count, last } = logoTapsRef.current;
    const c = (now - last < 600) ? count + 1 : 1;
    logoTapsRef.current = { count: c, last: now };
    if (c >= 7 && !secretRevealed) {
      setSecretRevealed(true);
      setLogoGlitch(true);
      setTimeout(() => setLogoGlitch(false), 800);
      gainXP(25, `Section secrète révélée`);
      unlockFact('logo');
      logoTapsRef.current = { count: 0, last: 0 };
      // Auto-switch to home if not there to show it
      setTab('home');
    } else if (c === 4) {
      setLogoGlitch(true);
      setTimeout(() => setLogoGlitch(false), 400);
    }
  };

  // ---- Paw tap ----
  const onPawTap = () => {
    if (!pawClicked) {
      setPawClicked(true);
      gainXP(50, `🐾 Tu as trouvé la patte`);
      unlockFact('paw');
    }
  };

  // ---- Konami progress callback (stable ref) ----
  const onKonamiProgress = $useCallback((p) => setKonamiProgress(p), []);

  // ---- Konami ----
  useKonami($useCallback(() => {
    setKonamiProgress(0);
    if (!garyOpen) {
      const line = window.LUCY.garyLines[Math.floor(Math.random() * window.LUCY.garyLines.length)];
      setGaryLine(line);
      setGaryOpen(true);
      const seenGary = badgesSeenRef.current.has('gary');
      if (!seenGary) {
        badgesSeenRef.current.add('gary');
        gainXP(100, `KONAMI · Gary apparaît`);
        unlockFact('konami');
      } else {
        pushToast({ tier: true, label: `Gary est déjà passé. Il s'en fout.` });
      }
    }
  }, [garyOpen, gainXP, pushToast]), onKonamiProgress);

  // ---- Contact tap ----
  const onContactTap = (kind) => {
    const k = 'contact:' + kind;
    if (!badgesSeenRef.current.has(k)) {
      badgesSeenRef.current.add(k);
      gainXP(5, `Contact ${kind.toUpperCase()}`);
    }
  };

  const isSub = tab === 'projets' && detailId;
  const subTitle = isSub ? window.LUCY.projects.find(p => p.id === detailId)?.shortName : '';

  return (
    <>
      <Header
        xp={xp}
        onLogoTap={onLogoTap}
        isSub={isSub}
        subTitle={subTitle}
        onBack={isSub ? backToProjets : null}
        logoGlitch={logoGlitch}
      />
      <main className="scroll">
        {tab === 'home' && !detailId && (
          <HomeScreen
            onTapProjets={() => onNav('projets')}
            onTapContact={() => onContactTap('email')}
            secretRevealed={secretRevealed}
            onPawTap={onPawTap}
            unlockedFacts={unlockedFacts}
          />
        )}
        {tab === 'projets' && !detailId && (
          <ProjetsScreen onOpen={openProject} gainXP={gainXP} />
        )}
        {tab === 'projets' && detailId && (
          <ProjetDetail
            projectId={detailId}
            onBack={backToProjets}
            onOpen={openProject}
            gainXP={gainXP}
          />
        )}
        {tab === 'skills' && (
          <SkillsScreen skillStates={skillStates} onSkillTap={onSkillTap} />
        )}
        {tab === 'moi' && (
          <MoiScreen
            xp={xp}
            openAcc={openAcc}
            onToggleAcc={toggleAcc}
            gainXP={gainXP}
          />
        )}
        {tab === 'contact' && (
          <ContactScreen xp={xp} onContactTap={onContactTap} unlockedFacts={unlockedFacts} />
        )}
      </main>

      {isSub && (
        <div className="cta-sticky" onClick={() => { window.location.href = 'mailto:' + window.LUCY.contact.email; }}>
          ✉ ME CONTACTER · {window.LUCY.contact.email}
        </div>
      )}

      <BottomNav active={tab} onNav={onNav} newBadge={newBadge} />

      <ToastStack toasts={toasts} />

      <KonamiProgress progress={konamiProgress} />

      {garyOpen && <GaryModal onClose={() => setGaryOpen(false)} line={garyLine} />}
    </>
  );
}

// Mount
const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<App />);
