// ============================================================
// PROJECT COVER SVGs — poster-style Miami Venise compositions
// Each cover is a unique abstract composition. No fake photos.
// ============================================================

// Common palette
const C = {
  bg:     '#FFF8F0',
  card:   '#FFFFFF',
  ink:    '#0A0806',
  rose:   '#FF0055',
  teal:   '#00B8C4',
  orange: '#FF5500',
  cream:  '#FBF1E2',
};

// Each function returns a JSX SVG; viewBox 300×200 (matches 3:2 aspect)
function CoverTEC() {
  return (
    <svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      <rect width="300" height="200" fill={C.ink}/>
      {/* chat bubble grid */}
      <rect x="20" y="22" width="120" height="32" fill={C.cream} stroke={C.ink} strokeWidth="2"/>
      <rect x="20" y="62" width="160" height="32" fill={C.rose} stroke={C.ink} strokeWidth="2"/>
      <rect x="20" y="102" width="100" height="32" fill={C.cream} stroke={C.ink} strokeWidth="2"/>
      <rect x="20" y="142" width="140" height="32" fill={C.teal} stroke={C.ink} strokeWidth="2"/>
      {/* AI nodes */}
      <circle cx="240" cy="100" r="44" fill={C.orange} stroke={C.ink} strokeWidth="2.5"/>
      <circle cx="240" cy="100" r="18" fill={C.ink}/>
      <circle cx="240" cy="100" r="6" fill={C.orange}/>
      <line x1="196" y1="100" x2="180" y2="78"  stroke={C.ink} strokeWidth="1.5"/>
      <line x1="196" y1="100" x2="180" y2="118" stroke={C.ink} strokeWidth="1.5"/>
      <text x="20" y="195" fill={C.cream} fontFamily="Bebas Neue" fontSize="14" letterSpacing="2">AGENT IA · TEC · 2021</text>
    </svg>
  );
}

function CoverJaccede() {
  return (
    <svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      <rect width="300" height="200" fill={C.teal}/>
      {/* map grid */}
      <g stroke={C.ink} strokeWidth="1.2" opacity="0.35">
        {[40, 80, 120, 160, 200, 240, 280].map(x => <line key={x} x1={x} y1="0" x2={x} y2="200"/>)}
        {[40, 80, 120, 160].map(y => <line key={y} x1="0" y1={y} x2="300" y2={y}/>)}
      </g>
      {/* path */}
      <path d="M 20 160 Q 80 140 110 110 T 200 80 T 280 40" fill="none" stroke={C.ink} strokeWidth="3"/>
      {/* pins */}
      <circle cx="110" cy="110" r="8"  fill={C.rose} stroke={C.ink} strokeWidth="2"/>
      <circle cx="200" cy="80"  r="8"  fill={C.rose} stroke={C.ink} strokeWidth="2"/>
      <circle cx="280" cy="40"  r="10" fill={C.orange} stroke={C.ink} strokeWidth="2"/>
      {/* a11y marker */}
      <rect x="20" y="22" width="64" height="20" fill={C.ink}/>
      <text x="52" y="36" fill={C.cream} fontFamily="Space Mono" fontSize="10" fontWeight="700" textAnchor="middle" letterSpacing="2">A11Y</text>
      <text x="20" y="190" fill={C.ink} fontFamily="Bebas Neue" fontSize="14" letterSpacing="2">ACCÈS PMR · CARTO COMMUNE</text>
    </svg>
  );
}

function CoverWegoboard() {
  return (
    <svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      <rect width="300" height="200" fill="#0E2A4F"/>
      {/* speed lines */}
      <line x1="0" y1="40" x2="220" y2="40" stroke={C.orange} strokeWidth="2" opacity="0.6"/>
      <line x1="0" y1="55" x2="180" y2="55" stroke={C.orange} strokeWidth="2" opacity="0.4"/>
      <line x1="0" y1="68" x2="140" y2="68" stroke={C.orange} strokeWidth="2" opacity="0.3"/>
      {/* scooter silhouette */}
      <circle cx="80" cy="140" r="20" fill={C.cream} stroke={C.ink} strokeWidth="2.5"/>
      <circle cx="80" cy="140" r="6" fill={C.ink}/>
      <circle cx="230" cy="140" r="20" fill={C.cream} stroke={C.ink} strokeWidth="2.5"/>
      <circle cx="230" cy="140" r="6" fill={C.ink}/>
      <path d="M 80 140 L 100 100 L 200 100 L 230 140" stroke={C.cream} strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M 100 100 L 90 60" stroke={C.cream} strokeWidth="5" fill="none" strokeLinecap="round"/>
      <rect x="80" y="55" width="22" height="6" fill={C.cream} stroke={C.ink} strokeWidth="1.5"/>
      <text x="150" y="186" fill={C.cream} fontFamily="Bebas Neue" fontSize="18" letterSpacing="3" textAnchor="middle">WEGOBOARD · MOBILITÉ É.</text>
    </svg>
  );
}

function CoverDisrupted() {
  return (
    <svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      <rect width="300" height="200" fill={C.ink}/>
      {/* fragmented circles */}
      <circle cx="100" cy="100" r="60" fill={C.rose} stroke={C.cream} strokeWidth="2"/>
      <rect x="100" y="20" width="100" height="80" fill={C.ink}/>
      <circle cx="200" cy="100" r="60" fill={C.cream} stroke={C.rose} strokeWidth="2" opacity="0.95"/>
      <rect x="100" y="100" width="100" height="80" fill={C.ink} opacity="0.92"/>
      {/* fragments lines */}
      <line x1="0" y1="100" x2="300" y2="100" stroke={C.cream} strokeWidth="0.8" strokeDasharray="4 4"/>
      <line x1="150" y1="0" x2="150" y2="200" stroke={C.cream} strokeWidth="0.8" strokeDasharray="4 4"/>
      <text x="150" y="186" fill={C.rose} fontFamily="Bebas Neue" fontSize="18" letterSpacing="6" textAnchor="middle">DISRUPTED</text>
    </svg>
  );
}

function CoverCora() {
  return (
    <svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      <defs>
        <pattern id="dots" x="0" y="0" width="14" height="14" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1" fill={C.ink} opacity="0.2"/>
        </pattern>
      </defs>
      <rect width="300" height="200" fill={C.rose}/>
      <rect width="300" height="200" fill="url(#dots)"/>
      {/* bubble */}
      <ellipse cx="150" cy="92" rx="100" ry="58" fill={C.cream} stroke={C.ink} strokeWidth="3"/>
      <polygon points="120,142 100,168 138,150" fill={C.cream} stroke={C.ink} strokeWidth="3"/>
      <text x="150" y="88" fill={C.ink} fontFamily="Bebas Neue" fontSize="22" letterSpacing="2.5" textAnchor="middle">CORA</text>
      <text x="150" y="108" fill={C.ink} fontFamily="Space Mono" fontSize="9" fontWeight="700" letterSpacing="1.5" textAnchor="middle">BIEN-ÊTRE ÉMOTIONNEL</text>
      <text x="150" y="190" fill={C.cream} fontFamily="Space Mono" fontSize="8" fontWeight="700" letterSpacing="2" textAnchor="middle">CONVERSATION DESIGN · MOBILE</text>
    </svg>
  );
}

function CoverEquality() {
  return (
    <svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      <rect width="300" height="200" fill={C.cream}/>
      {/* = sign big */}
      <rect x="50" y="60" width="200" height="18" fill={C.ink}/>
      <rect x="50" y="106" width="200" height="18" fill={C.rose}/>
      {/* corner accents */}
      <rect x="20" y="20" width="20" height="20" fill={C.teal} stroke={C.ink} strokeWidth="2"/>
      <rect x="260" y="20" width="20" height="20" fill={C.orange} stroke={C.ink} strokeWidth="2"/>
      <rect x="20" y="160" width="20" height="20" fill={C.orange} stroke={C.ink} strokeWidth="2"/>
      <rect x="260" y="160" width="20" height="20" fill={C.teal} stroke={C.ink} strokeWidth="2"/>
      <text x="150" y="155" fill={C.ink} fontFamily="Bebas Neue" fontSize="24" letterSpacing="3.5" textAnchor="middle">EQUALITY</text>
      <text x="150" y="190" fill={C.ink} fontFamily="Space Mono" fontSize="9" fontWeight="700" letterSpacing="2" textAnchor="middle">FORMATION B2B · EDTECH</text>
    </svg>
  );
}

function CoverYungo() {
  return (
    <svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      <rect width="300" height="200" fill="#E6F1FA"/>
      <rect x="40" y="40" width="180" height="110" rx="4" fill="#0033A0" stroke={C.ink} strokeWidth="2.5"/>
      <rect x="56" y="80" width="32" height="22" fill="#F2C94C" stroke={C.ink} strokeWidth="1.5"/>
      <text x="56" y="64" fill={C.cream} fontFamily="Bebas Neue" fontSize="20" letterSpacing="2">YUNGO</text>
      <text x="56" y="130" fill={C.cream} fontFamily="Space Mono" fontSize="10" letterSpacing="2">1158 4158 5877</text>
      <text x="206" y="142" fill={C.cream} fontFamily="Space Mono" fontSize="10" fontWeight="700" letterSpacing="2" textAnchor="end">VISA</text>
      <circle cx="250" cy="50" r="22" fill={C.teal} opacity="0.6"/>
      <circle cx="42" cy="172" r="18" fill={C.teal} opacity="0.5"/>
      <text x="150" y="190" fill={C.ink} fontFamily="Space Mono" fontSize="8" fontWeight="700" letterSpacing="2" textAnchor="middle">NÉOBANQUE 12–17 ANS</text>
    </svg>
  );
}

function CoverAdhoc() {
  return (
    <svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      <rect width="300" height="200" fill={C.ink}/>
      <rect x="20" y="22" width="200" height="14" fill={C.cream}/>
      <rect x="222" y="22" width="58" height="14" fill={C.rose}/>
      <rect x="20" y="38" width="100" height="14" fill={C.orange}/>
      <rect x="122" y="38" width="158" height="14" fill={C.cream}/>
      <rect x="20" y="54" width="260" height="14" fill={C.teal}/>
      <rect x="20" y="70" width="80" height="14" fill={C.cream}/>
      <rect x="102" y="70" width="80" height="14" fill={C.rose}/>
      <rect x="184" y="70" width="96" height="14" fill={C.cream}/>
      <text x="20" y="128" fill={C.cream} fontFamily="Bebas Neue" fontSize="34" letterSpacing="2.5">AD'HOC</text>
      <text x="20" y="152" fill={C.orange} fontFamily="Bebas Neue" fontSize="18" letterSpacing="3">MEDIA</text>
      <text x="20" y="186" fill={C.cream} fontFamily="Space Mono" fontSize="8" fontWeight="700" letterSpacing="2" opacity="0.6">ORCHESTRATION · MISE EN LIGNE</text>
    </svg>
  );
}

function CoverSquid() {
  return (
    <svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      <rect width="300" height="200" fill={C.ink}/>
      <circle cx="80" cy="108" r="34" fill="none" stroke={C.rose} strokeWidth="4"/>
      <polygon points="150,72 184,142 116,142" fill="none" stroke={C.rose} strokeWidth="4"/>
      <rect x="188" y="72" width="68" height="68" fill="none" stroke={C.rose} strokeWidth="4"/>
      <text x="150" y="30" fill={C.rose} fontFamily="Bebas Neue" fontSize="14" letterSpacing="4" textAnchor="middle">VR EXPERIENCE</text>
      <text x="150" y="176" fill={C.cream} fontFamily="Bebas Neue" fontSize="18" letterSpacing="3" textAnchor="middle">UN JEU D'ENFANTS</text>
    </svg>
  );
}

// Detail-page hero (16:9). Reuses the cover style but wider.
function HeroCover({ id }) {
  // Wide variants — we'll use the project's cover scaled
  const Cover = {
    tec: CoverTEC,
    jaccede: CoverJaccede,
    wegoboard: CoverWegoboard,
    disrupted: CoverDisrupted,
    cora: CoverCora,
    equality: CoverEquality,
    yungo: CoverYungo,
    adhoc: CoverAdhoc,
    squidgame: CoverSquid,
  }[id] || CoverTEC;
  return (
    <div style={{ aspectRatio: '16 / 9', overflow: 'hidden', position: 'relative' }}>
      <div style={{ position: 'absolute', inset: 0, transform: 'scale(1.05)' }}><Cover /></div>
    </div>
  );
}

// Carousel slide — generic screenshot mockup with project-specific tint
function SlideMockup({ idx, color = '#FF0055' }) {
  const items = [
    () => (
      <svg viewBox="0 0 240 180" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
        <rect width="240" height="180" fill={C.cream}/>
        <rect x="14" y="14" width="212" height="22" fill={C.ink}/>
        <text x="20" y="30" fill={C.cream} fontFamily="Bebas Neue" fontSize="12" letterSpacing="2">SCREEN · OVERVIEW</text>
        <rect x="14" y="46" width="100" height="60" fill={color} stroke={C.ink} strokeWidth="2"/>
        <rect x="124" y="46" width="102" height="28" fill={C.card} stroke={C.ink} strokeWidth="2"/>
        <rect x="124" y="78" width="102" height="28" fill={C.card} stroke={C.ink} strokeWidth="2"/>
        <rect x="14" y="116" width="212" height="14" fill={C.cream} stroke={C.ink} strokeWidth="2"/>
        <rect x="14" y="136" width="180" height="10" fill={C.ink} opacity="0.15"/>
        <rect x="14" y="152" width="140" height="10" fill={C.ink} opacity="0.15"/>
      </svg>
    ),
    () => (
      <svg viewBox="0 0 240 180" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
        <rect width="240" height="180" fill={C.ink}/>
        <rect x="14" y="14" width="212" height="40" fill={color} stroke={C.cream} strokeWidth="2"/>
        <text x="120" y="40" fill={C.ink} fontFamily="Bebas Neue" fontSize="18" letterSpacing="3" textAnchor="middle">FLOW · STEP 2</text>
        <rect x="14" y="64" width="100" height="40" fill={C.cream}/>
        <rect x="14" y="108" width="100" height="40" fill={C.cream}/>
        <rect x="124" y="64" width="102" height="84" fill={C.cream}/>
        <rect x="14" y="156" width="212" height="10" fill={color} opacity="0.6"/>
      </svg>
    ),
    () => (
      <svg viewBox="0 0 240 180" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
        <rect width="240" height="180" fill={color}/>
        <rect x="20" y="20" width="200" height="40" fill={C.cream} stroke={C.ink} strokeWidth="2.5"/>
        <text x="120" y="46" fill={C.ink} fontFamily="Bebas Neue" fontSize="18" letterSpacing="2" textAnchor="middle">DESIGN SYSTEM</text>
        <g>
          {[30, 76, 122, 168].map((x, i) => (
            <rect key={i} x={x} y="80" width="40" height="40" fill={[C.rose, C.teal, C.orange, C.ink][i]} stroke={C.ink} strokeWidth="2"/>
          ))}
        </g>
        <rect x="20" y="136" width="100" height="22" fill={C.ink}/>
        <text x="70" y="151" fill={C.cream} fontFamily="Space Mono" fontSize="9" fontWeight="700" letterSpacing="2" textAnchor="middle">PALETTE 4</text>
        <rect x="124" y="136" width="96" height="22" fill={C.cream} stroke={C.ink} strokeWidth="2"/>
      </svg>
    ),
    () => (
      <svg viewBox="0 0 240 180" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
        <rect width="240" height="180" fill={C.cream}/>
        <rect x="14" y="14" width="212" height="22" fill={C.ink}/>
        <text x="120" y="30" fill={color} fontFamily="Bebas Neue" fontSize="12" letterSpacing="3" textAnchor="middle">RESULTS</text>
        <g>
          <rect x="14" y="46" width="68" height="60" fill={color} stroke={C.ink} strokeWidth="2"/>
          <text x="48" y="80" fill={C.ink} fontFamily="Bebas Neue" fontSize="22" textAnchor="middle">+24%</text>
          <text x="48" y="96" fill={C.ink} fontFamily="Space Mono" fontSize="7" fontWeight="700" letterSpacing="1" textAnchor="middle">CONVERSION</text>
        </g>
        <g>
          <rect x="86" y="46" width="68" height="60" fill={C.card} stroke={C.ink} strokeWidth="2"/>
          <text x="120" y="80" fill={C.ink} fontFamily="Bebas Neue" fontSize="22" textAnchor="middle">5/5</text>
          <text x="120" y="96" fill={C.ink} fontFamily="Space Mono" fontSize="7" fontWeight="700" letterSpacing="1" textAnchor="middle">USER REVIEW</text>
        </g>
        <g>
          <rect x="158" y="46" width="68" height="60" fill={C.ink}/>
          <text x="192" y="80" fill={color} fontFamily="Bebas Neue" fontSize="22" textAnchor="middle">QA</text>
          <text x="192" y="96" fill={C.cream} fontFamily="Space Mono" fontSize="7" fontWeight="700" letterSpacing="1" textAnchor="middle">SHIPPED</text>
        </g>
        <rect x="14" y="118" width="212" height="48" fill={C.card} stroke={C.ink} strokeWidth="2"/>
      </svg>
    ),
  ];
  const Item = items[idx % items.length];
  return <Item />;
}

// Single-letter monogram cover (fallback / similar cards)
function MiniCover({ name, color = '#FF0055' }) {
  const letter = (name || '?')[0].toUpperCase();
  return (
    <svg viewBox="0 0 120 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      <rect width="120" height="80" fill={color}/>
      <rect x="0" y="60" width="120" height="20" fill={C.ink}/>
      <text x="60" y="48" fill={C.ink} fontFamily="Bebas Neue" fontSize="42" letterSpacing="2" textAnchor="middle">{letter}</text>
      <text x="60" y="74" fill={C.cream} fontFamily="Space Mono" fontSize="8" fontWeight="700" letterSpacing="2" textAnchor="middle">{name?.toUpperCase()}</text>
    </svg>
  );
}

const COVERS = {
  tec: CoverTEC,
  jaccede: CoverJaccede,
  wegoboard: CoverWegoboard,
  disrupted: CoverDisrupted,
  cora: CoverCora,
  equality: CoverEquality,
  yungo: CoverYungo,
  adhoc: CoverAdhoc,
  squidgame: CoverSquid,
};

// Project accent color for mockups
const PROJECT_COLOR = {
  tec: '#FF0055',
  jaccede: '#00B8C4',
  wegoboard: '#FF5500',
  disrupted: '#FF0055',
  cora: '#FF0055',
  equality: '#00B8C4',
  yungo: '#0033A0',
  adhoc: '#FF5500',
  squidgame: '#FF0055',
};

Object.assign(window, { COVERS, HeroCover, SlideMockup, MiniCover, PROJECT_COLOR });
