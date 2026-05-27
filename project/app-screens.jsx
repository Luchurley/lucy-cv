// ============================================================
// SCREENS — Home, Projets, Skills, Moi, Contact
// ============================================================

const { useMemo: _useMemo } = React;

// ---------- HOME ----------
function HomeScreen({ onTapProjets, onTapContact, secretRevealed, onPawTap, unlockedFacts }) {
  const L = window.LUCY;
  return (
    <div className="page" data-screen-label="Home">
      <div className="card-hero">
        <div className="card-hero-text">
          <span className="body-xs">{L.identity.role1}</span>
          <div className="display-xl" style={{ marginTop: 6 }}>
            {L.identity.role2}<br/>{L.identity.role3}
          </div>
          <p className="body-md italic" style={{ marginTop: 14, lineHeight: 1.65 }}>
            {L.identity.tagline} — design qui ne ment pas, projets qui livrent.
          </p>
        </div>
        <div className="card-hero-photo">
          <img
            src="assets/portrait.jpg"
            alt="Lucy Hurley"
            className="portrait-img"
          />
        </div>
        <button
          aria-label="Paw print easter egg"
          className="card-hero-paw"
          onClick={onPawTap}
        >🐾</button>
      </div>

      <div className="xp-hint-bar">
        <span className="xp-hint-dot">●</span>
        explore · clique · découvre · <strong>+XP à chaque action</strong>
        <span className="xp-hint-dot">●</span>
      </div>

      <div className="spacer-md" />

      <div className="stat cream" style={{ marginBottom: 10 }}>
        <div className="stat-label">NATIONALITÉ</div>
        <div className="stat-value">{L.identity.nationality}</div>
      </div>
      <div className="stat teal" style={{ marginBottom: 10 }}>
        <div className="stat-label">LOCALISATION</div>
        <div className="stat-value">📍 {L.identity.location}</div>
      </div>
      <div className="stat orange" style={{ marginBottom: 10 }}>
        <div className="stat-label" style={{ color: 'rgba(255,255,255,0.7)' }}>DISPONIBILITÉ</div>
        <div className="stat-value">{L.identity.availability}</div>
      </div>

      <div className="spacer-md" />

      <div className="card">
        <div className="card-label">MANIFESTO</div>
        <div className="bq" dangerouslySetInnerHTML={{ __html: `« ${L.manifesto.short} » <br/><br/>${L.manifesto.full}<br/><br/>${L.manifesto.closing}` }} />
      </div>

      <div className="spacer-md" />

      {secretRevealed && (
        <>
          <div className="secret">
            <div className="secret-label">🔓 NIVEAU CONFIDENTIEL</div>
            <div className="secret-quote">
              Un espace où se croisent culture, introspection et design narratif.
              Inspirations : écrire pour exister, la psychologie des trajectoires humaines,
              et des projets digitaux pensés comme des organismes vivants.
            </div>
            <div className="secret-hint">↑↑↓↓←→←→BA · GARY ATTEND</div>
          </div>
          <div className="spacer-md" />
        </>
      )}

      {unlockedFacts && unlockedFacts.length > 0 && (
        <>
          <div className="section-divider"><span>FUN FACTS DÉBLOQUÉS · {unlockedFacts.length}</span></div>
          <div className="funfacts-grid">
            {unlockedFacts.map(f => (
              <div key={f.id} className="funfact-card">
                <span className="funfact-emoji">{f.emoji}</span>
                <div className="funfact-title">{f.title}</div>
                <div className="funfact-text">{f.text}</div>
              </div>
            ))}
          </div>
          <div className="spacer-md" />
        </>
      )}

      <div className="cta-strip">
        <div className="body-xs" style={{ color: 'var(--color-ink)', opacity: 0.7 }}>OPEN TO WORK</div>
        <div className="display-md" style={{ marginTop: 6 }}>PRÊTE À<br/>COLLABORER</div>
        <div className="cta-strip-links">
          <a href={'mailto:' + L.contact.email} className="cta-link" onClick={onTapContact}>
            ✉ {L.contact.email}
            <small>tap = mail natif</small>
          </a>
          <a href={'tel:' + L.contact.phone.replace(/\s/g, '')} className="cta-link" onClick={onTapContact}>
            📞 {L.contact.phone}
            <small>tap = appel mobile</small>
          </a>
        </div>
      </div>

      <div className="spacer-lg" />
      <div style={{ textAlign: 'center' }}>
        <button className="btn-empty is-primary" onClick={onTapProjets} style={{ fontSize: 11 }}>
          VOIR LES PROJETS →
        </button>
      </div>
    </div>
  );
}

// ---------- PROJETS LIST ----------
function ProjetsScreen({ onOpen, gainXP }) {
  const L = window.LUCY;
  const [search, setSearch] = useState('');
  const [filters, setFilters] = useState([]);

  const FILTERS = [
    { key: 'ux',       label: 'UX/UI' },
    { key: 'da',       label: 'DA' },
    { key: 'strat',    label: 'STRAT.' },
    { key: 'ia',       label: 'IA' },
    { key: 'cdi',      label: 'CDI' },
    { key: 'freelance', label: 'FREELANCE' },
    { key: 'founder',  label: 'FONDATRICE' },
  ];

  const toggleFilter = (k) => {
    setFilters(prev => prev.includes(k) ? prev.filter(x => x !== k) : [...prev, k]);
  };
  const resetAll = () => { setFilters([]); setSearch(''); };

  const visible = L.projects.filter(p => {
    if (filters.length) {
      const ok = filters.every(f => p.categories.includes(f) || p.contract.includes(f));
      if (!ok) return false;
    }
    if (search.trim()) {
      const q = search.trim().toLowerCase();
      const haystack = [p.name, p.type, p.context, ...(p.tags||[])].join(' ').toLowerCase();
      if (!haystack.includes(q)) return false;
    }
    return true;
  });

  return (
    <div className="page" data-screen-label="Projets">
      <div className="page-title-row">
        <div className="display-lg">PROJETS</div>
        <span className="body-xs dim">{visible.length}/{L.projects.length}</span>
      </div>
      <div className="page-subline">
        {visible.length} {visible.length > 1 ? 'projets' : 'projet'}
        {(filters.length > 0 || search) && <span style={{ color: 'var(--color-primary)' }}> · filtres actifs</span>}
      </div>

      <div className="search">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="7"/>
          <line x1="21" y1="21" x2="16.65" y2="16.65"/>
        </svg>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Rechercher un projet…"
          aria-label="Rechercher un projet"
        />
        {search && (
          <button className="search-clear" onClick={() => setSearch('')} aria-label="Effacer la recherche">×</button>
        )}
      </div>

      <div className="chip-row" role="group" aria-label="Filtres">
        <button
          className={'chip' + (filters.length === 0 && !search ? ' is-active' : '')}
          onClick={resetAll}
        >TOUS</button>
        {FILTERS.map(f => (
          <button
            key={f.key}
            className={'chip' + (filters.includes(f.key) ? ' is-active' : '')}
            onClick={() => toggleFilter(f.key)}
            aria-pressed={filters.includes(f.key)}
          >
            {filters.includes(f.key) && '✓ '}{f.label}
            {filters.includes(f.key) && <span className="chip-x" aria-hidden="true">×</span>}
          </button>
        ))}
      </div>

      <div className="spacer-md" />

      {visible.length === 0 ? (
        search ? (
          <EmptyState
            title="Aucun résultat"
            sub={`pour « ${search} »`}
            actions={[{ label: 'EFFACER', primary: true, onClick: () => setSearch('') }]}
          />
        ) : (
          <EmptyState
            title="Aucun projet trouvé"
            sub="avec ces filtres."
            actions={[{ label: 'TOUT EFFACER', primary: true, onClick: resetAll }]}
          />
        )
      ) : (
        <div className="proj-grid">
          {visible.map(p => {
            const Cover = window.COVERS[p.cover];
            return (
              <button
                key={p.id}
                className="pcard"
                onClick={() => onOpen(p.id)}
                aria-label={`Ouvrir le projet ${p.name}`}
              >
                <div className="pcard-cover"><Cover /></div>
                <div className="pcard-meta">
                  <div className="pcard-title">{p.name}</div>
                  <div className="pcard-tags">
                    {p.tags.slice(0, 3).map(t => <span key={t} className="pcard-tag">{t}</span>)}
                  </div>
                  <div className="pcard-date">{p.year}</div>
                </div>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

// ---------- SKILLS ----------
function SkillsScreen({ skillStates, onSkillTap }) {
  const L = window.LUCY;
  return (
    <div className="page" data-screen-label="Skills">
      <div className="display-lg">SKILLS</div>
      <div className="page-subline">Tape les tags pour gagner des XP. Chaque tag : 2 niveaux.</div>

      {L.skillsByCat.map((g, gi) => (
        <div key={gi} className="skill-cat">
          <div className="skill-cat-head">
            <span className="skill-cat-title">{g.cat}</span>
          </div>
          <div className="skill-tags">
            {g.tags.map((t, ti) => {
              const key = g.tagCat + ':' + t;
              const state = skillStates[key] || 0;
              return (
                <button
                  key={key}
                  className={'skill-tag cat-' + g.tagCat + (state === 1 ? ' is-1' : state === 2 ? ' is-2' : '')}
                  onClick={() => onSkillTap(key)}
                  aria-pressed={state === 2}
                >{t}</button>
              );
            })}
          </div>
        </div>
      ))}

      <div className="skill-cat">
        <div className="skill-cat-head">
          <span className="skill-cat-title">LANGUES</span>
        </div>
        <div className="skill-tags">
          {L.identity.languages.map(l => (
            <span key={l.name} className="skill-tag cat-lg is-2">
              {l.flag} {l.name} · {l.level}
            </span>
          ))}
        </div>
      </div>

      <div className="hint-box">
        💡 indice — <span className="blink">↑ ↑ ↓ ↓ ← → ← → B A</span> · ou cherche la patte 🐾
      </div>
    </div>
  );
}

// ---------- MOI ----------
function MoiScreen({ xp, openAcc, onToggleAcc, gainXP }) {
  const L = window.LUCY;
  const tier = tierFromXP(xp);
  const showCurious = tier.key !== 'visitor';
  const showInterested = tier.key === 'interested' || tier.key === 'hireme';
  const showHireMe = tier.key === 'hireme';

  return (
    <div className="page" data-screen-label="Moi">
      <div className="display-lg">MOI</div>
      <div className="page-subline">Identité · Manifesto · Parcours · Formation · Lore</div>

      <SectionDivider>IDENTITÉ</SectionDivider>
      <div className="stat cream" style={{ marginBottom: 8 }}>
        <div className="stat-label">NOM COMPLET</div>
        <div className="stat-value">{L.identity.fullName}</div>
      </div>
      <div className="stat teal" style={{ marginBottom: 8 }}>
        <div className="stat-label">NATIONALITÉ</div>
        <div className="stat-value">{L.identity.nationality}</div>
      </div>
      <div className="stat orange" style={{ marginBottom: 8 }}>
        <div className="stat-label" style={{ color: 'rgba(255,255,255,0.7)' }}>LOCALISATION & PERMIS</div>
        <div className="stat-value">📍 {L.identity.location}</div>
      </div>

      <SectionDivider>MANIFESTO</SectionDivider>
      <div className="card">
        <div className="bq" dangerouslySetInnerHTML={{ __html: `« ${L.manifesto.short} »<br/><br/>${L.manifesto.full}<br/><br/>${L.manifesto.closing}` }} />
      </div>

      <SectionDivider>PARCOURS · {L.experiences.length} EXPÉRIENCES</SectionDivider>

      {L.experiences.map((exp, i) => (
        <div key={i} className={'xp-accordion' + (openAcc === i ? ' is-open' : '')}>
          <button className="xp-head" onClick={() => onToggleAcc(i)} aria-expanded={openAcc === i}>
            <div className="xp-role-block">
              <div className="xp-role">{exp.role}</div>
              <div className="xp-co">{exp.company} <span className="period">· {exp.period}</span></div>
            </div>
            <span className="xp-badge">{exp.type}</span>
            <span className="xp-chevron">▾</span>
          </button>
          {openAcc === i && (
            <div className="xp-body">
              <p className="body-md italic dim" style={{ marginBottom: 8 }}>{exp.summary}</p>
              <div dangerouslySetInnerHTML={{ __html: exp.body.split('\n\n').map(p => `<p>${p}</p>`).join('') }} />
              <div className="xp-chips">
                {exp.chips.map(c => <span key={c} className="xp-chip">{c}</span>)}
              </div>
            </div>
          )}
        </div>
      ))}

      <SectionDivider>FORMATION</SectionDivider>
      {L.formation.map((f, i) => (
        <div key={i} className={'formation-row b-' + f.color}>
          <div className="formation-period">{f.period}</div>
          <div className="formation-meta">
            <div className="formation-title">{f.title}</div>
            <div className="formation-school">{f.school}{f.mention && ` · ${f.mention}`}</div>
          </div>
        </div>
      ))}

      <SectionDivider>{showCurious ? `LORE · ${tier.label}` : 'LORE · 🔒 VERROUILLÉ'}</SectionDivider>

      {!showCurious ? (
        <div className="lore-locked">
          <div className="display-xs">débloqué à 40 XP · CURIOUS</div>
          <p>explore l'app · clique les skills · ouvre les projets · trouve la patte 🐾<br/>les couches du lore se débloquent en parcours.</p>
        </div>
      ) : (
        <>
          <div className="lore-card">
            <div className="lore-head"><span className="lore-emoji">{L.lore.travels.emoji}</span><span className="lore-title">{L.lore.travels.title}</span></div>
            <div className="lore-body" dangerouslySetInnerHTML={{ __html: L.lore.travels.body.split('\n\n').map(p => `<p style="margin-bottom:6px">${p}</p>`).join('') }} />
          </div>
          {showInterested && (
            <>
              <div className="lore-card">
                <div className="lore-head"><span className="lore-emoji">{L.lore.archetype.emoji}</span><span className="lore-title">{L.lore.archetype.title}</span></div>
                <div className="lore-body" dangerouslySetInnerHTML={{ __html: L.lore.archetype.body.split('\n').map(p => p ? `<p style="margin-bottom:4px">${p}</p>` : '').join('') }} />
              </div>
              <div className="lore-card">
                <div className="lore-head"><span className="lore-emoji">{L.lore.aesthetic.emoji}</span><span className="lore-title">{L.lore.aesthetic.title}</span></div>
                <div className="lore-body" dangerouslySetInnerHTML={{ __html: L.lore.aesthetic.body.split('\n\n').map(p => `<p style="margin-bottom:6px">${p}</p>`).join('') }} />
              </div>
            </>
          )}
          {showHireMe && (
            <div className="lore-card dark">
              <div className="lore-head"><span className="lore-emoji">{L.lore.confidential.emoji}</span><span className="lore-title">{L.lore.confidential.title}</span></div>
              <div className="lore-body" dangerouslySetInnerHTML={{ __html: L.lore.confidential.body }} />
            </div>
          )}
        </>
      )}

      <div className="spacer-lg" />
    </div>
  );
}

// ---------- CONTACT ----------
const CONTACT_PAW_POS = [
  { top: '12px', right: '18px' },
  { bottom: '14px', right: '28px' },
  { top: '55%', right: '8px' },
  { bottom: '8px', left: '20px' },
  { top: '30%', right: '52px' },
];

function ContactScreen({ xp, onContactTap, unlockedFacts, onPawTap }) {
  const L = window.LUCY;
  const tier = tierFromXP(xp);
  const isHireme = tier.key === 'hireme';
  const toGo = isHireme ? 0 : (190 - xp);
  const [foundPaws, setFoundPaws] = React.useState(new Set());

  const tapContactPaw = (i) => {
    if (foundPaws.has(i)) return;
    setFoundPaws(prev => new Set([...prev, i]));
    if (onPawTap) onPawTap();
  };

  return (
    <div className="page" data-screen-label="Contact">
      <div className="display-lg">CONTACT</div>
      <div className="page-subline">tap = action native · email · tel · LinkedIn</div>

      <div className="contact-hero">
        <div className="contact-paws">
          {CONTACT_PAW_POS.map((pos, i) => (
            <button
              key={i}
              className={'contact-paw-btn' + (foundPaws.has(i) ? ' is-found' : '')}
              style={pos}
              onClick={() => tapContactPaw(i)}
              aria-label="Patte cachée"
            >🐾</button>
          ))}
        </div>
        <div className="display-md" style={{ position: 'relative' }}>TRAVAILLONS<br/>ENSEMBLE</div>
        <div className="contact-links">
          <a href={'mailto:' + L.contact.email} className="contact-link" onClick={() => onContactTap('email')}>
            <div>
              <div className="lbl">EMAIL</div>
              <div className="val">{L.contact.email}</div>
            </div>
            <span>→</span>
          </a>
          <a href={'tel:' + L.contact.phone.replace(/\s/g, '')} className="contact-link" onClick={() => onContactTap('phone')}>
            <div>
              <div className="lbl">TÉL · MOBILE</div>
              <div className="val">{L.contact.phone}</div>
            </div>
            <span>→</span>
          </a>
          <a href={L.contact.linkedinUrl} target="_blank" rel="noopener noreferrer" className="contact-link" onClick={() => onContactTap('linkedin')}>
            <div>
              <div className="lbl">LINKEDIN ↗</div>
              <div className="val">/in/luchurley</div>
            </div>
            <span>↗</span>
          </a>
          <div className="contact-link" style={{ cursor: 'default' }}>
            <div>
              <div className="lbl">LOCALISATION</div>
              <div className="val">📍 {L.identity.location}</div>
            </div>
            <span></span>
          </div>
        </div>
      </div>

      <div className={'score-card' + (isHireme ? ' is-hireme' : '')}>
        <div className="score-label">🏆 SCORE FINAL · PEAK-END</div>
        <div className="score-xp">{xp}<span style={{ fontSize: 18, marginLeft: 6 }}>XP</span></div>
        <div className="score-tier">{tier.label}</div>
        <div className="score-detail">
          {isHireme
            ? `Tu as tout exploré. Curiosité validée.`
            : `Tu es ${tier.label}. ${toGo > 0 ? `+${toGo} XP pour ★ HIRE ME` : ''}`
          }
        </div>
        {!isHireme && (
          <div className="score-progress">
            🐾 hero · 🔓 logo×7 · ↑↑↓↓ Konami · skills · projets
          </div>
        )}
      </div>

      {unlockedFacts && unlockedFacts.length > 0 && (
        <>
          <SectionDivider>FUN FACTS · {unlockedFacts.length}/{L.funFacts.length} DÉBLOQUÉS</SectionDivider>
          <div className="funfacts-grid">
            {unlockedFacts.map(f => (
              <div key={f.id} className="funfact-card">
                <span className="funfact-emoji">{f.emoji}</span>
                <div className="funfact-title">{f.title}</div>
                <div className="funfact-text">{f.text}</div>
              </div>
            ))}
          </div>
          <div className="spacer-md" />
        </>
      )}

      <div className="spacer-lg" />

      <div className="card" style={{ background: 'var(--color-paper-2)' }}>
        <div className="card-label">CITATION</div>
        <div className="bq">
          « Je veux créer une plateforme qui ait une <strong>âme</strong>,
          pas juste un produit optimisé pour l'addiction algorithmique et les KPI
          présentés dans un Notion beige. »
          <cite>— le projet SIS'</cite>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { HomeScreen, ProjetsScreen, SkillsScreen, MoiScreen, ContactScreen });
