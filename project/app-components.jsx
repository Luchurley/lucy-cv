// ============================================================
// SHARED COMPONENTS — Header, BottomNav, Toast, Modal, XP
// ============================================================

const { useState, useEffect, useRef, useCallback } = React;

// ---------- XP TIER UTIL ----------
function tierFromXP(xp) {
  const tiers = window.LUCY.tiers;
  for (let i = tiers.length - 1; i >= 0; i--) {
    if (xp >= tiers[i].min) return tiers[i];
  }
  return tiers[0];
}
function xpProgress(xp) {
  const tier = tierFromXP(xp);
  // Within tier progress (0–100)
  if (tier.key === 'hireme') return 100;
  const range = tier.max - tier.min + 1;
  const within = xp - tier.min;
  return Math.min(100, Math.max(0, Math.round((within / range) * 100)));
}

// ---------- HEADER ----------
function Header({ xp, onLogoTap, isSub, subTitle, onBack, logoGlitch }) {
  const tier = tierFromXP(xp);
  const pct = xpProgress(xp);
  return (
    <header className={'header' + (isSub ? ' is-sub' : '')}>
      {isSub ? (
        <>
          <button className="header-back" onClick={onBack} aria-label="Retour">
            <span>‹</span> RETOUR
          </button>
          <div className="header-title">{subTitle}</div>
        </>
      ) : (
        <div
          className={'header-logo' + (logoGlitch ? ' is-glitching' : '')}
          onClick={onLogoTap}
          role="button"
          tabIndex={0}
        >
          <span className="dot" />
          LUCY HURLEY
        </div>
      )}
      <div className="xp-pod">
        <div className="xp-pod-row">
          <div className="xp-bar" data-lv={tier.key} aria-hidden="true">
            <span style={{ width: pct + '%' }} />
          </div>
          <span className="xp-num">{xp}</span>
        </div>
        <span className={'xp-level lv-' + tier.key} aria-label={'Niveau ' + tier.label}>
          {tier.label}
        </span>
      </div>
    </header>
  );
}

// ---------- BOTTOM NAV ----------
const NAV_ITEMS = [
  { id: 'home',    label: 'HOME',     icon: <><path d="M3 11l9-8 9 8"/><path d="M5 9v11h14V9"/></> },
  { id: 'projets', label: 'PROJETS',  icon: <><rect x="3" y="4" width="18" height="16"/><line x1="3" y1="9" x2="21" y2="9"/></> },
  { id: 'skills',  label: 'SKILLS',   icon: <><polygon points="12,3 14,9 21,9 15.5,13 17,20 12,16 7,20 8.5,13 3,9 10,9"/></> },
  { id: 'moi',     label: 'MOI',      icon: <><circle cx="12" cy="8" r="4"/><path d="M4 21c0-5 4-8 8-8s8 3 8 8"/></> },
  { id: 'contact', label: 'CONTACT',  icon: <><rect x="3" y="5" width="18" height="14"/><polyline points="3,7 12,13 21,7"/></> },
];

function BottomNav({ active, onNav, newBadge }) {
  return (
    <nav className="bnav" role="tablist">
      {NAV_ITEMS.map(item => (
        <button
          key={item.id}
          role="tab"
          aria-selected={active === item.id}
          className={'bnav-tab' + (active === item.id ? ' is-active' : '')}
          onClick={() => onNav(item.id)}
        >
          {newBadge && newBadge[item.id] && <span className="dot" />}
          <svg viewBox="0 0 24 24">{item.icon}</svg>
          <span className="lbl">{item.label}</span>
        </button>
      ))}
    </nav>
  );
}

// ---------- TOASTS ----------
function ToastStack({ toasts, onDismiss }) {
  return (
    <div className="toast-stage" aria-live="polite" aria-atomic="true">
      {toasts.map(t => (
        <div key={t.id} className={'toast' + (t.tier ? ' is-levelup' : '') + (t.funfact ? ' is-funfact' : '') + (t.out ? ' is-out' : '')}>
          {t.funfact && <span className="fact-emoji">{t.emoji}</span>}
          {!t.funfact && t.xp != null && <span className="xp-pill">{t.tier ? '★' : (t.xp > 0 ? '+' + t.xp + ' XP' : t.xp + ' XP')}</span>}
          <span>{t.label}</span>
        </div>
      ))}
    </div>
  );
}

function useToasts() {
  const [toasts, setToasts] = useState([]);
  const idRef = useRef(0);

  const push = useCallback((t) => {
    const id = ++idRef.current;
    setToasts(prev => [...prev, { id, ...t }]);
    setTimeout(() => {
      setToasts(prev => prev.map(x => x.id === id ? { ...x, out: true } : x));
    }, 2500);
    setTimeout(() => {
      setToasts(prev => prev.filter(x => x.id !== id));
    }, 2800);
  }, []);

  return [toasts, push];
}

// ---------- MODAL (Gary) ----------
function GaryModal({ onClose, line }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <div className="overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <img src="assets/gary/gary-lucy.png" alt="Lucy & Gary" className="modal-gary-img" />
        <div className="modal-title">GARY MODE</div>
        <div className="modal-quote">« {line} »</div>
        <div className="modal-badge">+100 XP EARNED 🎮</div>
        <span className="modal-hint">↑↑↓↓←→←→↑↓ · click pour fermer</span>
      </div>
    </div>
  );
}

// ---------- GARY STICKER (tier celebration) ----------
const GARY_STICKER_SRC = {
  curious:    'assets/gary/gary-pup.png',
  interested: 'assets/gary/gary-mud.png',
  hireme:     'assets/gary/gary-run.png',
};
const GARY_STICKER_LABEL = {
  curious:    'CURIOUS !',
  interested: 'INTERESTED !',
  hireme:     '★ HIRE ME ★',
};

function GarySticker({ tier, out }) {
  if (!tier || !GARY_STICKER_SRC[tier]) return null;
  return (
    <div className={'gary-sticker' + (out ? ' is-out' : '') + (tier === 'hireme' ? ' is-hireme' : '')}>
      <img src={GARY_STICKER_SRC[tier]} alt={'Gary · ' + tier} />
      <div className="gary-sticker-label">{GARY_STICKER_LABEL[tier]}</div>
    </div>
  );
}

// ---------- KONAMI ----------
function useKonami(onSuccess, onProgress) {
  const buf = useRef([]);
  const touchRef = useRef(null);
  const SEQ = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','ArrowUp','ArrowDown'];

  useEffect(() => {
    const feed = (code) => {
      buf.current.push(code);
      if (buf.current.length > SEQ.length) buf.current.shift();
      if (buf.current.join(',') === SEQ.join(',')) {
        buf.current = [];
        if (onProgress) onProgress(0);
        onSuccess();
      } else if (onProgress) {
        let maxPrefix = 0;
        const b = buf.current;
        for (let i = Math.max(0, b.length - SEQ.length); i < b.length; i++) {
          const sub = b.slice(i);
          let count = 0;
          while (count < sub.length && sub[count] === SEQ[count]) count++;
          if (count === sub.length && count > maxPrefix) maxPrefix = count;
        }
        onProgress(maxPrefix);
      }
    };

    const onKey = (e) => feed(e.code);

    const onTouchStart = (e) => {
      touchRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    };

    const onTouchEnd = (e) => {
      if (!touchRef.current) return;
      const dx = e.changedTouches[0].clientX - touchRef.current.x;
      const dy = e.changedTouches[0].clientY - touchRef.current.y;
      touchRef.current = null;
      if (Math.max(Math.abs(dx), Math.abs(dy)) < 35) return;
      const code = Math.abs(dx) > Math.abs(dy)
        ? (dx > 0 ? 'ArrowRight' : 'ArrowLeft')
        : (dy > 0 ? 'ArrowDown' : 'ArrowUp');
      feed(code);
    };

    window.addEventListener('keydown', onKey);
    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchend', onTouchEnd, { passive: true });
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchend', onTouchEnd);
    };
  }, [onSuccess, onProgress]);
}

// ---------- KONAMI PROGRESS OVERLAY ----------
function KonamiProgress({ progress }) {
  if (progress < 3) return null;
  const pct = Math.round((progress / 10) * 100);
  return (
    <div className="konami-progress" aria-live="polite" aria-label={`Code Konami : ${progress} sur 10`}>
      <span className="konami-seq">↑↑↓↓←→←→↑↓</span>
      <span className="konami-count">{progress}/10</span>
      <div className="konami-bar"><div style={{ width: pct + '%' }} /></div>
    </div>
  );
}

// ---------- SECTION DIVIDER ----------
function SectionDivider({ children }) {
  return (
    <div className="section-divider"><span>{children}</span></div>
  );
}

// ---------- EMPTY STATE ----------
function EmptyState({ emoji = '🐺', title, sub, actions = [] }) {
  return (
    <div className="empty">
      <div className="empty-emoji">{emoji}</div>
      <div className="empty-title">{title}</div>
      {sub && <div className="empty-sub">{sub}</div>}
      <div className="empty-actions">
        {actions.map((a, i) => (
          <button key={i} className={'btn-empty ' + (a.primary ? 'is-primary' : '')} onClick={a.onClick}>
            {a.label}
          </button>
        ))}
      </div>
    </div>
  );
}

// ---------- AGENT CARD ----------
function AgentCard({ agent, gainXP, seenRef }) {
  const [flipped, setFlipped] = React.useState(false);
  const vidRef = React.useRef(null);

  const toggle = () => {
    setFlipped(f => {
      const next = !f;
      if (next) {
        if (gainXP && seenRef && seenRef.current) {
          const k = 'agent:' + agent.id;
          if (!seenRef.current.has(k)) {
            seenRef.current.add(k);
            gainXP(5, `Agent découvert — ${agent.name}`);
          }
        }
        setTimeout(() => { if (vidRef.current) vidRef.current.play(); }, 280);
      } else {
        if (vidRef.current) { vidRef.current.pause(); vidRef.current.currentTime = 0; }
      }
      return next;
    });
  };

  return (
    <div className={'agent-card' + (flipped ? ' is-flipped' : '')} onClick={toggle}>
      <div className="agent-card-inner">
        <div className="agent-card-front">
          <div className="agent-photo">
            {agent.photo
              ? <img src={agent.photo} alt={agent.name} loading="lazy" />
              : <div className="agent-photo-placeholder">{agent.name[0]}</div>
            }
          </div>
          <div className="agent-meta">
            <div className="agent-name">{agent.name}</div>
            <div className="agent-age-domain">{agent.age} · {agent.domain}</div>
            <div className="agent-tone">{agent.tone}</div>
          </div>
          <div className="agent-chevron">▶</div>
        </div>
        <div className="agent-card-back">
          {agent.video && (
            <video ref={vidRef} src={agent.video} muted loop playsInline preload="none" />
          )}
          <div className="agent-back-label">{agent.name} · {agent.role}</div>
        </div>
      </div>
    </div>
  );
}

// ---------- AGENT CARD LARGE (page IA) ----------
function AgentCardLarge({ agent, gainXP, seenRef }) {
  const [flipped, setFlipped] = React.useState(false);
  const vidRef = React.useRef(null);

  const toggle = () => {
    setFlipped(f => {
      const next = !f;
      if (next) {
        if (gainXP && seenRef && seenRef.current) {
          const k = 'ia:' + agent.id;
          if (!seenRef.current.has(k)) {
            seenRef.current.add(k);
            gainXP(5, `Agent découvert — ${agent.name}`);
          }
        }
        setTimeout(() => { if (vidRef.current) vidRef.current.play(); }, 280);
      } else {
        if (vidRef.current) { vidRef.current.pause(); vidRef.current.currentTime = 0; }
      }
      return next;
    });
  };

  return (
    <div className={'ia-agent-card' + (flipped ? ' is-flipped' : '')} onClick={toggle}>
      <div className="ia-agent-inner">
        <div className="ia-agent-front">
          <div className="ia-agent-photo">
            {agent.photo
              ? <img src={agent.photo} alt={agent.name} loading="lazy" />
              : <div className="ia-agent-photo-placeholder">{agent.name[0]}</div>
            }
          </div>
          <div className="ia-agent-info">
            <div className="ia-agent-name">{agent.name}</div>
            <div className="ia-agent-sub">{agent.age} · {agent.domain}</div>
            <div className="ia-agent-role">{agent.role}</div>
          </div>
          {agent.video && <div className="ia-agent-hint">▶ TAP</div>}
        </div>
        <div className="ia-agent-back">
          {agent.video && (
            <video ref={vidRef} src={agent.video} muted loop playsInline preload="none" />
          )}
          <div className="ia-agent-back-label">{agent.name}</div>
        </div>
      </div>
    </div>
  );
}

// ---------- PROJECT DETAIL TABS ----------
function ProjectDetailTabs({ labels, missionComplete, gainXP }) {
  const [activeTab, setActiveTab] = React.useState(0);
  const switchTab = (i) => {
    setActiveTab(i);
    if (i === 1 && gainXP) gainXP(10, 'Mission complète explorée');
  };
  return (
    <div className="detail-tabs">
      <div className="detail-tab-bar">
        {labels.map((label, i) => (
          <button key={i} className={'detail-tab-btn' + (activeTab === i ? ' is-active' : '')} onClick={() => switchTab(i)}>{label}</button>
        ))}
      </div>
      {activeTab === 1 && missionComplete && (
        <div className="mission-complete">
          <div className="mc-section">
            <div className="mc-label">PÉRIMÈTRE STRATÉGIQUE</div>
            {missionComplete.strategic.map((item, i) => (
              <div key={i} className="mc-item">· {item}</div>
            ))}
          </div>
          <div className="mc-section">
            <div className="mc-label">OPS & AUTOMATION</div>
            <p className="body-md" style={{ marginBottom: 4 }}>{missionComplete.ops.dendreo}</p>
            <p className="body-md">{missionComplete.ops.zapier}</p>
            <div className="xp-chips" style={{ marginTop: 8 }}>
              {missionComplete.ops.tools.map(t => <span key={t} className="xp-chip">{t}</span>)}
            </div>
          </div>
          <div className="mc-section">
            <div className="mc-label">GRAPHISME & PRINT</div>
            <p className="body-md">{missionComplete.graphic.text}</p>
            {missionComplete.graphic.items.map((item, i) => (
              <div key={i} className="mc-item">· {item}</div>
            ))}
          </div>
          <div className="mc-section">
            <div className="mc-label">MARKETING</div>
            <p className="body-md">{missionComplete.marketing.text}</p>
            {missionComplete.marketing.items.map((item, i) => (
              <div key={i} className="mc-item">· {item}</div>
            ))}
            <div className="xp-chips" style={{ marginTop: 8 }}>
              {missionComplete.marketing.platforms.map(t => <span key={t} className="xp-chip">{t}</span>)}
            </div>
          </div>
          <div className="mc-section">
            <div className="mc-label">MANAGEMENT</div>
            <p className="body-md">{missionComplete.management.text}</p>
            {missionComplete.management.items.map((item, i) => (
              <div key={i} className="mc-item">· {item}</div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

Object.assign(window, {
  Header, BottomNav, ToastStack, useToasts, GaryModal, GarySticker, useKonami,
  SectionDivider, EmptyState, tierFromXP, xpProgress, KonamiProgress,
  AgentCard, AgentCardLarge, ProjectDetailTabs,
});
