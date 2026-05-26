/* global React */
// ============================================================
// WF PRIMITIVES — building blocks for low-fi mobile wireframes
// ============================================================

const Box = ({ children, className = '', style, ...rest }) => (
  <div className={'wf-box ' + className} style={style} {...rest}>{children}</div>
);

const Stack = ({ children, gap = 4, className = '', style, ...rest }) => (
  <div className={'wf-stack ' + className} style={{ gap, ...style }} {...rest}>{children}</div>
);

const Row = ({ children, gap = 4, align = 'center', justify, className = '', style, ...rest }) => (
  <div className={'wf-row ' + className} style={{ gap, alignItems: align, justifyContent: justify, ...style }} {...rest}>{children}</div>
);

const Mono = ({ children, size = 9, className = '', style }) => (
  <span className={'wf-mono ' + className} style={{ fontSize: size, ...style }}>{children}</span>
);

const HW = ({ children, size = 17, className = '', style }) => (
  <span className={'wf-hw ' + className} style={{ fontSize: size, ...style }}>{children}</span>
);

const Disp = ({ children, size = 22, className = '', style }) => (
  <span className={'wf-disp ' + className} style={{ fontSize: size, ...style }}>{children}</span>
);

const Tag = ({ children, variant = '', className = '' }) => (
  <span className={'wf-tag ' + variant + ' ' + className}>{children}</span>
);

const Btn = ({ children, variant = '', size = '', className = '' }) => (
  <span className={'wf-btn ' + variant + ' ' + size + ' ' + className}>{children}</span>
);

const ImgPh = ({ label, height, width, solid = false, style }) => (
  <div className={'wf-img ' + (solid ? 'solid' : '')} style={{ height, width, ...style }}>
    {label && <div className="wf-img-label">{label}</div>}
  </div>
);

const Divider = ({ variant = '', style }) => (
  <div className={'wf-divider ' + variant} style={style} />
);

// Numbered red dot marker positioned absolutely inside a screen
const Marker = ({ n, top, left, right, bottom }) => (
  <div className="wf-marker" style={{ top, left, right, bottom }}>{n}</div>
);

// Side callouts panel
const Callouts = ({ items, side = 'right', topOffset = 0 }) => (
  <div className={'wf-callouts ' + (side === 'left' ? 'left' : '')} style={{ top: topOffset }}>
    {items.map((it, i) => (
      <div className="wf-callout" key={i}>
        {side === 'left' ? null : <div className="wf-callout-num">{i + 1}</div>}
        <div className="wf-callout-text">{it}</div>
        {side === 'left' ? <div className="wf-callout-num">{i + 1}</div> : null}
      </div>
    ))}
  </div>
);

// ============================================================
// GLOBAL COMPONENTS — Header, Bottom Nav, Toast, Modal, etc.
// ============================================================

const Header = ({ sub = false, title, xp = 47, level = 'VISITOR', lvMax = false }) => (
  <div className="wf-header">
    <Row gap={6}>
      {sub && <span style={{ fontSize: 14, fontWeight: 700 }}>‹</span>}
      <div className="logo">
        {sub ? title : <>LUCY HURLEY <small>UX · DA · IA</small></>}
      </div>
    </Row>
    <div className="wf-xp">
      <span className="wf-mono-sm" style={{ fontSize: 7 }}>{level}</span>
      <div className={'wf-xp-bar ' + (lvMax ? 'lv-max' : '')}>
        <span style={{ width: xp + '%' }} />
      </div>
    </div>
  </div>
);

const SafeTop = () => (
  <div className="wf-safe-top"><span className="wf-safe-label">SAFE AREA 44pt — notch</span></div>
);
const SafeBot = () => (
  <div className="wf-safe-bot"><span className="wf-safe-label">SAFE AREA 34pt — home</span></div>
);

const BottomNav = ({ active = 'home', badge = null }) => {
  const tabs = [
    { id: 'home', icn: '⌂', lbl: 'HOME' },
    { id: 'proj', icn: '▦', lbl: 'PROJETS' },
    { id: 'skl',  icn: '✦', lbl: 'SKILLS' },
    { id: 'moi',  icn: '◉', lbl: 'MOI' },
    { id: 'ctc',  icn: '✉', lbl: 'CONTACT' },
  ];
  return (
    <div>
      <div className="wf-nav">
        {tabs.map(t => (
          <div key={t.id} className={'wf-nav-tab ' + (active === t.id ? 'active' : '')}>
            {badge === t.id && <span className="dot" />}
            <span className="icn">{t.icn}</span>
            <span className="lbl">{t.lbl}</span>
          </div>
        ))}
      </div>
      <SafeBot />
    </div>
  );
};

const ToastXP = ({ label = 'Exploration', xp = '+15 XP' }) => (
  <div className="wf-toast">
    <span className="xp">{xp}</span>
    <span>— {label}</span>
  </div>
);

const ModalGary = ({ note = '↑↑↓↓←→←→BA · tap pour fermer' }) => (
  <div className="wf-overlay">
    <div className="wf-modal">
      <div style={{ fontSize: 42, lineHeight: 1 }}>🐺</div>
      <div className="wf-disp" style={{ marginTop: 8, fontSize: 24, color: 'var(--rose)' }}>GARY MODE</div>
      <div style={{ fontFamily: 'var(--ff-mono)', fontStyle: 'italic', fontSize: 9, marginTop: 6, color: 'var(--ink-mid)', lineHeight: 1.5 }}>
        « Il approuve votre curiosité. »
      </div>
      <span className="wf-tag filled-org" style={{ marginTop: 10, color: 'var(--paper)', fontSize: 8 }}>+100 XP EARNED</span>
      <div style={{ fontFamily: 'var(--ff-mono)', fontSize: 7, marginTop: 10, opacity: 0.4, letterSpacing: 1 }}>{note}</div>
    </div>
  </div>
);

// Generic small modal frame
const Overlay = ({ children }) => (
  <div className="wf-overlay">{children}</div>
);

const SearchBar = ({ state = 'default', value = '' }) => {
  const isFocus = state === 'focus' || state === 'filled';
  return (
    <div className={'wf-search ' + (isFocus ? 'focused' : '')}>
      <span className="icn">🔍</span>
      <span className="ph">
        {state === 'default' && 'Rechercher un projet...'}
        {state === 'focus' && <><span style={{ opacity: 0.4 }}>Rechercher...</span><span className="caret" style={{ display: 'inline-block', verticalAlign: 'middle', marginLeft: 2 }} /></>}
        {state === 'filled' && value}
      </span>
      {state === 'filled' && <span className="clear">×</span>}
    </div>
  );
};

const FilterChip = ({ children, state = 'inactive' }) => {
  if (state === 'active-x')
    return <span className="wf-tag active">✓ {children} ×</span>;
  if (state === 'active')
    return <span className="wf-tag active">✓ {children}</span>;
  return <span className="wf-tag">{children}</span>;
};

const ProjectCard = ({ name, tags = [], date, skeleton = false }) => {
  if (skeleton) {
    return (
      <div className="wf-pcard">
        <div className="ph wf-skel" />
        <div className="meta">
          <div className="wf-skel" style={{ height: 8, width: '70%' }} />
          <div className="wf-skel" style={{ height: 6, width: '50%' }} />
          <Row gap={3}>
            <div className="wf-skel" style={{ height: 10, width: 28 }} />
            <div className="wf-skel" style={{ height: 10, width: 22 }} />
          </Row>
        </div>
      </div>
    );
  }
  return (
    <div className="wf-pcard">
      <ImgPh label={name?.toUpperCase()} solid={false} style={{ borderTop: 'none', borderLeft: 'none', borderRight: 'none', height: 70 }} />
      <div className="meta">
        <div className="ttl">{name}</div>
        <div className="tg">{tags.map((t, i) => <Tag key={i}>{t}</Tag>)}</div>
        <div className="date">{date}</div>
      </div>
    </div>
  );
};

const StatCard = ({ label, value, variant = 'cream' }) => (
  <div className={'wf-stat ' + variant}>
    <Mono size={7} style={{ opacity: 0.55, letterSpacing: 1.5 }}>{label}</Mono>
    <div style={{ fontFamily: 'var(--ff-mono)', fontSize: 10, fontWeight: 700, marginTop: 3 }}>{value}</div>
  </div>
);

const ManifestoBlock = ({ quote, body }) => (
  <Box className="shadow" style={{ padding: 10, borderLeft: '4px solid var(--rose)' }}>
    <Mono size={7} style={{ opacity: 0.55 }}>MANIFESTO</Mono>
    <div style={{ fontFamily: 'var(--ff-mono)', fontStyle: 'italic', fontSize: 9, marginTop: 4, lineHeight: 1.55, color: 'var(--ink)' }}>
      « {quote} »
    </div>
    {body && (
      <div style={{ fontFamily: 'var(--ff-mono)', fontSize: 8, marginTop: 6, lineHeight: 1.6, color: 'var(--ink-mid)' }}>
        {body}
      </div>
    )}
  </Box>
);

const Accordion = ({ role, company, period, type, open = false, body }) => (
  <div>
    <div className={'wf-acc ' + (open ? 'open' : '')}>
      <Stack gap={2} style={{ flex: 1 }}>
        <div style={{ fontFamily: 'var(--ff-mono)', fontSize: 9, fontWeight: 700, letterSpacing: 0.5, textTransform: 'uppercase' }}>{role}</div>
        <div style={{ fontFamily: 'var(--ff-mono)', fontSize: 7, color: 'var(--ink-mid)', letterSpacing: 0.5 }}>{company} · {period}</div>
      </Stack>
      <Row gap={4}>
        {type && <Tag>{type}</Tag>}
        <span style={{ fontSize: 11, transform: open ? 'rotate(180deg)' : 'none', display: 'inline-block', transition: 'transform .2s' }}>▾</span>
      </Row>
    </div>
    {open && body && (
      <div style={{ borderLeft: '2px dashed var(--ink-soft)', borderRight: '2px dashed var(--ink-soft)', borderBottom: '1.5px solid var(--ink)', padding: '8px 10px', background: 'var(--paper-2)', marginTop: -2, marginLeft: 2, marginRight: 2 }}>
        {body}
      </div>
    )}
  </div>
);

const CTASticky = ({ label = '✉ ME CONTACTER · HURLEY.LUCY@GMAIL.COM' }) => (
  <div className="wf-cta-sticky">{label}</div>
);

const EmptyState = ({ title, sub, actions = [], emoji = '🐺' }) => (
  <div className="wf-empty">
    <div className="bear">{emoji}</div>
    <HW size={16}>{title}</HW>
    {sub && <span style={{ fontFamily: 'var(--ff-mono)', fontSize: 8, color: 'var(--ink-mid)', lineHeight: 1.5 }}>{sub}</span>}
    <Row gap={6} style={{ marginTop: 6 }}>
      {actions.map((a, i) => <Btn key={i} variant={a.variant}>{a.label}</Btn>)}
    </Row>
  </div>
);

// Expose to other Babel scripts
Object.assign(window, {
  Box, Stack, Row, Mono, HW, Disp, Tag, Btn, ImgPh, Divider, Marker, Callouts,
  Header, SafeTop, SafeBot, BottomNav, ToastXP, ModalGary, Overlay,
  SearchBar, FilterChip, ProjectCard, StatCard, ManifestoBlock,
  Accordion, CTASticky, EmptyState,
});
