// ============================================================
// PROJET DETAIL — wireframe-faithful structure per project type
// ============================================================

function ProjetDetail({ projectId, onBack, onOpen, gainXP }) {
  const L = window.LUCY;
  const project = L.projects.find(p => p.id === projectId);
  const [tab, setTab] = React.useState(0);
  const [slide, setSlide] = React.useState(0);
  const trackRef = React.useRef(null);

  React.useEffect(() => {
    gainXP && gainXP(20, `Projet ouvert — ${project?.name}`);
    setTab(0);
    setSlide(0);
  }, [projectId]);

  if (!project) return null;

  const similar = L.projects.filter(p => p.id !== project.id).slice(0, 5);
  const accent = window.PROJECT_COLOR[project.id] || '#FF0055';
  const slides = project.screenshots && project.screenshots.length
    ? project.screenshots
    : [null, null, null, null];

  const featuredList = L.projects.filter(p => p.featured);
  const featuredIdx = featuredList.findIndex(p => p.id === project.id);
  const isFeatured = featuredIdx >= 0;

  const goSlide = (i) => {
    setSlide(i);
    const el = trackRef.current;
    if (el) {
      const sw = el.children[0]?.offsetWidth || 0;
      el.scrollTo({ left: sw * i + i * 10, behavior: 'smooth' });
    }
  };

  // ---- Section helpers ----
  const CsSec = ({ children }) => (
    <div className="cs-sec-h"><span>{children}</span></div>
  );

  // Case study body (reused for TEC tab 0 + all other featured projects)
  const renderCS = () => (
    <>
      {project.brief && (
        <>
          <CsSec>LE BRIEF</CsSec>
          <div className="cs-body-card">
            <p style={{ whiteSpace: 'pre-line', lineHeight: 1.7 }}>{project.brief}</p>
          </div>
        </>
      )}

      {project.paradox && (
        <>
          <CsSec>DOUBLE CIBLE</CsSec>
          <div className="cs-info-teal">
            <p>{project.paradox}</p>
          </div>
        </>
      )}

      {project.marketContext && (
        <>
          <CsSec>CONTEXTE MARCHÉ</CsSec>
          <div className="cs-body-card">
            <p style={{ lineHeight: 1.7 }}>{project.marketContext}</p>
          </div>
        </>
      )}

      {project.identity && (
        <>
          <CsSec>IDENTITÉ VISUELLE</CsSec>
          {[
            { key: 'NAMING', val: project.identity.naming },
            { key: 'LOGO',   val: project.identity.logo },
          ].map(b => (
            <div key={b.key} className="cs-blk">
              <div className="cs-blk-l">{b.key}</div>
              <p className="cs-blk-b">{b.val}</p>
            </div>
          ))}
          <div className="cs-blk">
            <div className="cs-blk-l">PALETTE</div>
            <div className="cs-palette">
              {project.identity.palette.map((c, i) => (
                <div key={i} className="cs-swatch">
                  <div className="cs-swatch-chip" style={{ background: c.hex }} />
                  <div className="cs-swatch-name">{c.name}</div>
                  <div className="cs-swatch-hex">{c.hex}</div>
                  <div className="cs-swatch-role">{c.role}</div>
                </div>
              ))}
            </div>
          </div>
          {project.identity.typography && (
            <div className="cs-blk">
              <div className="cs-blk-l">TYPOGRAPHIE</div>
              <p className="cs-blk-b">{project.identity.typography}</p>
            </div>
          )}
        </>
      )}

      {project.uxAudit && (
        <>
          <CsSec>UX AUDIT · {project.uxAudit.findings.length} FINDINGS</CsSec>
          <div className="cs-body-card" style={{ marginBottom: 10 }}>
            <div className="body-xs dim" style={{ marginBottom: 6 }}>MÉTHODOLOGIE</div>
            <p>{project.uxAudit.methodology}</p>
          </div>
          <div className="audit-grid">
            {project.uxAudit.findings.map((f, i) => (
              <div key={i} className="audit-finding">
                <div className="audit-scores">
                  <span className={'audit-badge sev-' + f.severity.toLowerCase()}>{f.severity}</span>
                  <span className={'audit-badge eas-' + f.ease.toLowerCase()}>{f.ease}</span>
                </div>
                <div className="audit-label">{f.label}</div>
              </div>
            ))}
          </div>
        </>
      )}

      {project.siteAudit && (
        <>
          <CsSec>AUDIT DE L'EXISTANT</CsSec>
          <div className="cs-audit2">
            <div className="cs-audit2-col cs-audit2-ok">
              <div className="cs-audit2-h">✓ CE QUI FONCTIONNE</div>
              {project.siteAudit.positive.map((item, i) => (
                <div key={i} className="cs-audit2-item">· {item}</div>
              ))}
            </div>
            <div className="cs-audit2-col cs-audit2-ko">
              <div className="cs-audit2-h">× CE QUI BLOQUE</div>
              {project.siteAudit.friction.map((item, i) => (
                <div key={i} className="cs-audit2-item">· {item}</div>
              ))}
            </div>
          </div>
        </>
      )}

      {project.challenge && (
        <>
          <CsSec>LE DÉFI</CsSec>
          <div className="cs-body-card">
            <p style={{ lineHeight: 1.7 }}>{project.challenge}</p>
          </div>
        </>
      )}

      {project.process && project.process.length > 0 && (
        <>
          <CsSec>PROCESS · {project.process.length} ÉTAPES</CsSec>
          {project.process.map((step, i) => (
            <div key={i} className="process-step">
              <div className="process-num">{String(i + 1).padStart(2, '0')}</div>
              <div className="process-body">
                <div className="process-title">{step.title}</div>
                <div className="process-text">{step.text}</div>
              </div>
            </div>
          ))}
        </>
      )}

      {/* Desktop mocks */}
      {project.desktopMocks && project.desktopMocks.length > 0 && (
        <>
          <CsSec>VISUELS DESKTOP</CsSec>
          {project.desktopMocks.map((m, i) => (
            <div key={i} className="cs-desk-mock">
              {m.src
                ? <img src={m.src} alt={m.cap} loading="lazy" />
                : <div className="cs-desk-mock-ph">{m.cap}</div>}
              <div className="cs-desk-mock-cap">{m.cap}</div>
            </div>
          ))}
        </>
      )}

      {/* Brian section (TEC) */}
      {project.brianSection && (
        <>
          <CsSec>AGENT IA · BRIAN</CsSec>
          <div className="cs-brian">
            {[
              { lbl: 'A · POURQUOI BRIAN ?',         val: project.brianSection.naming },
              { lbl: 'B · ONBOARDING PERSONNALISÉ',  val: project.brianSection.onboarding },
              { lbl: 'C · UX PERSONALITY PROFILE',   val: project.brianSection.personality },
            ].map(b => (
              <div key={b.lbl} className="cs-blk">
                <div className="cs-blk-l">{b.lbl}</div>
                <p className="cs-blk-b">{b.val}</p>
              </div>
            ))}
            <div className="cs-blk cs-blk-ink">
              <div className="cs-blk-l">D · CORPUS ÉDITORIAL · 200+ CONTENUS</div>
              <p className="cs-blk-b">{project.brianSection.corpus}</p>
            </div>
            <div className="cs-blk">
              <div className="cs-blk-l">E · PROMPT ENGINEERING</div>
              <p className="cs-blk-b">{project.brianSection.prompt}</p>
            </div>
          </div>
          {project.brianSection.videos && project.brianSection.videos.length > 0 && (
            <>
              <div className="cs-sub-h">F · DÉMO BRIAN EN PRODUCTION</div>
              <div className="cs-vidrow">
                {project.brianSection.videos.map((v, i) => (
                  <div key={i} className="cs-vidrow-item">
                    <video src={v.src} controls playsInline preload="none" />
                    <div className="cs-vidrow-cap">{v.label}</div>
                  </div>
                ))}
              </div>
            </>
          )}
          {project.brianSection.motionSrc && (
            <>
              <div className="cs-sub-h">G · MOTION · BRIAN LAUNCHING</div>
              <video src={project.brianSection.motionSrc} autoPlay loop muted playsInline
                className="cs-motion-vid" />
            </>
          )}
        </>
      )}

      {/* Motion video (Jaccède) */}
      {project.motionVideo && (
        <>
          <CsSec>MOTION DESIGN</CsSec>
          <div className="cs-desk-mock">
            <video src={project.motionVideo} controls playsInline preload="metadata"
              style={{ width: '100%', display: 'block' }} />
            <div className="cs-desk-mock-cap">Motion — interactions clés</div>
          </div>
        </>
      )}

      {/* UI Kit gallery */}
      {project.uiKitGallery && project.uiKitGallery.length > 0 && (
        <>
          <CsSec>UI KIT · DESIGN SYSTEM</CsSec>
          <div className="cs-gallery-hint">← swipe planches UI kit →</div>
          <div className="cs-gallery">
            {project.uiKitGallery.map((item, i) => (
              <figure key={i} className="cs-gallery-item">
                {item.src
                  ? <img src={item.src} alt={item.cap} loading="lazy" />
                  : <div className="cs-gallery-ph">{item.cap}</div>}
                <figcaption>{item.cap}</figcaption>
              </figure>
            ))}
          </div>
        </>
      )}

      {/* Phone mocks */}
      {project.phoneMocks && project.phoneMocks.length > 0 && (
        <>
          <CsSec>ÉCRANS MOBILE</CsSec>
          <div className="cs-phone-mocks">
            {project.phoneMocks.map((m, i) => (
              <figure key={i} className="cs-phone-mock">
                {m.src
                  ? <img src={m.src} alt={m.cap} loading="lazy" />
                  : <div className="cs-phone-mock-ph">{m.cap}</div>}
                <figcaption>{m.cap}</figcaption>
              </figure>
            ))}
          </div>
        </>
      )}

      {/* Form mocks (Jaccède) */}
      {project.formMocks && project.formMocks.length > 0 && (
        <>
          <CsSec>FORMULAIRE · LO-FI / HI-FI</CsSec>
          <div className="cs-phone-mocks">
            {project.formMocks.map((m, i) => (
              <figure key={i} className="cs-phone-mock">
                {m.src
                  ? <img src={m.src} alt={m.cap} loading="lazy" />
                  : <div className="cs-phone-mock-ph">{m.cap}</div>}
                <figcaption>{m.cap}</figcaption>
              </figure>
            ))}
          </div>
        </>
      )}

      {/* General carousel for non-featured / other projects */}
      {slides.length > 0 && !isFeatured && (
        <>
          <CsSec>VISUELS</CsSec>
          <div className="carousel">
            <div className="carousel-track" ref={trackRef} onScroll={(e) => {
              const el = e.target;
              const sw = el.children[0]?.offsetWidth || 1;
              setSlide(Math.round(el.scrollLeft / (sw + 10)));
            }}>
              {slides.map((src, i) => (
                <div key={i} className={'carousel-slide' + (src ? ' is-photo' : '')}>
                  {src
                    ? <img src={src} alt={`${project.shortName} – visuel ${i + 1}`} loading="lazy" />
                    : <window.SlideMockup idx={i} color={accent} />}
                </div>
              ))}
            </div>
            <div className="carousel-dots">
              {slides.map((_, i) => (
                <button key={i} className={'carousel-dot' + (slide === i ? ' is-on' : '')}
                  onClick={() => goSlide(i)} aria-label={`Visuel ${i + 1}`} />
              ))}
            </div>
          </div>
        </>
      )}

      {/* Project videos (Disrupted films) */}
      {project.videos && project.videos.length > 0 && (
        <>
          <CsSec>VIDÉOS</CsSec>
          <div className="video-grid">
            {project.videos.map((src, i) => (
              <div key={i} className="video-item">
                <video controls preload="metadata" playsInline>
                  <source src={src} type="video/mp4" />
                </video>
                <div className="video-caption">FILM {String(i + 1).padStart(2, '0')}/{project.videos.length}</div>
              </div>
            ))}
          </div>
        </>
      )}

      <CsSec>RÉSULTATS</CsSec>
      <div className="cs-result">
        <p>{project.result}</p>
      </div>

      <CsSec>COMPÉTENCES DÉMONTRÉES</CsSec>
      <div className="skill-tags" style={{ marginBottom: 20 }}>
        {project.skills.map(s => <span key={s} className="skill-tag" style={{ cursor: 'default' }}>{s}</span>)}
      </div>

      {project.hasTabs && (
        <div className="cs-tab-bar cs-tab-bar-bottom">
          {project.tabLabels.map((label, i) => (
            <button key={i}
              className={'cs-tab-btn' + (tab === i ? ' is-active' : '')}
              onClick={() => {
                setTab(i);
                if (i === 1 && gainXP) gainXP(10, 'Mission complète explorée');
                window.scrollTo && window.scrollTo({ top: 0, behavior: 'smooth' });
              }}>
              {label}
            </button>
          ))}
        </div>
      )}
    </>
  );

  // Mission complète content (TEC tab 1)
  const renderMission = () => {
    const mc = project.missionComplete;
    if (!mc) return null;
    return (
      <div style={{ paddingTop: 14 }}>
        <div className="cs-blk" style={{ marginBottom: 10 }}>
          <div className="cs-blk-l">PÉRIMÈTRE STRATÉGIQUE</div>
          {mc.strategic.map((s, i) => <div key={i} className="mc-item body-sm">· {s}</div>)}
        </div>
        <div className="cs-blk" style={{ marginBottom: 10 }}>
          <div className="cs-blk-l">OPS & AUTOMATISATION</div>
          <p className="body-sm" style={{ marginBottom: 6 }}>{mc.ops.dendreo}</p>
          <p className="body-sm" style={{ marginBottom: 8 }}>{mc.ops.zapier}</p>
          <div className="xp-chips">{mc.ops.tools.map(t => <span key={t} className="xp-chip">{t}</span>)}</div>
        </div>
        <div className="cs-blk" style={{ marginBottom: 10 }}>
          <div className="cs-blk-l">GRAPHISME & PRINT</div>
          <p className="body-sm" style={{ marginBottom: 6 }}>{mc.graphic.text}</p>
          {mc.graphic.items.map((s, i) => <div key={i} className="mc-item body-sm">· {s}</div>)}
          <div className="xp-chips" style={{ marginTop: 8 }}>
            {mc.graphic.tools.map(t => <span key={t} className="xp-chip">{t}</span>)}
          </div>
          {mc.graphic.videos && mc.graphic.videos.length > 0 && (
            <div className="cs-vidrow" style={{ marginTop: 12 }}>
              {mc.graphic.videos.map((v, i) => (
                <div key={i} className="cs-vidrow-item">
                  <video src={v.src} controls playsInline preload="none" />
                  <div className="cs-vidrow-cap">{v.label}</div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="cs-blk" style={{ marginBottom: 10 }}>
          <div className="cs-blk-l">MARKETING</div>
          <p className="body-sm" style={{ marginBottom: 6 }}>{mc.marketing.text}</p>
          {mc.marketing.items.map((s, i) => <div key={i} className="mc-item body-sm">· {s}</div>)}
          <div className="xp-chips" style={{ marginTop: 8 }}>
            {mc.marketing.platforms.map(t => <span key={t} className="xp-chip">{t}</span>)}
          </div>
        </div>
        <div className="cs-blk">
          <div className="cs-blk-l">MANAGEMENT</div>
          <p className="body-sm" style={{ marginBottom: 6 }}>{mc.management.text}</p>
          {mc.management.items.map((s, i) => <div key={i} className="mc-item body-sm">· {s}</div>)}
        </div>
      </div>
    );
  };

  return (
    <div className="page" data-screen-label={'Detail ' + project.shortName}>

      {/* Hero */}
      {isFeatured ? (
        <div className="cs-hero">
          <span className="cs-kick">CASE STUDY {String(featuredIdx + 1).padStart(2, '0')}</span>
          <div className="cs-title">{project.name}</div>
          <p className="cs-tagline">{project.tagline}</p>
        </div>
      ) : (
        <div className="cs-hero cs-hero-proj">
          <span className="cs-kick">PROJET</span>
          <div className="cs-title">{project.name}</div>
          {project.tagline && <p className="cs-tagline">{project.tagline}</p>}
        </div>
      )}

      {/* Meta card */}
      <div className="cs-metacard">
        <div className="cs-metacard-row">
          <span className="cs-metacard-k">RÔLE</span>
          <span className="cs-metacard-v">{project.role}</span>
        </div>
        <div className="cs-metacard-row">
          <span className="cs-metacard-k">CONTEXTE</span>
          <span className="cs-metacard-v">{project.context}</span>
        </div>
        <div className="cs-metacard-row">
          <span className="cs-metacard-k">PÉRIODE</span>
          <span className="cs-metacard-v">{project.year} · {project.type.split('·')[0].trim()}</span>
        </div>
        {project.url && (
          <div className="cs-metacard-row">
            <span className="cs-metacard-k">LIEN</span>
            <a href={project.url} target="_blank" rel="noopener noreferrer"
              className="cs-metacard-link"
              onClick={() => gainXP && gainXP(5, `Site visité — ${project.shortName}`)}>
              {project.url.replace('https://', '')} ↗
            </a>
          </div>
        )}
      </div>

      {/* Tags */}
      <div className="pcard-tags" style={{ marginBottom: 16 }}>
        {project.tags.map(t => <span key={t} className="pcard-tag">{t}</span>)}
      </div>

      {/* Tab bar (TEC only) */}
      {project.hasTabs && (
        <div className="cs-tab-bar">
          {project.tabLabels.map((label, i) => (
            <button key={i}
              className={'cs-tab-btn' + (tab === i ? ' is-active' : '')}
              onClick={() => { setTab(i); if (i === 1 && gainXP) gainXP(10, 'Mission complète explorée'); }}>
              {label}
            </button>
          ))}
        </div>
      )}

      {/* Content */}
      {project.hasTabs
        ? (tab === 0 ? renderCS() : renderMission())
        : renderCS()
      }

      {/* Similar projects */}
      <SectionDivider>PROJETS SIMILAIRES</SectionDivider>
      <div className="similar-row">
        {similar.map(p => {
          const color = window.PROJECT_COLOR[p.id] || '#FF0055';
          return (
            <button key={p.id} className="similar-card" onClick={() => onOpen(p.id)}>
              <div className="similar-cover">
                <window.MiniCover name={p.shortName} color={color} />
              </div>
              <div className="similar-meta">
                <div className="similar-title">{p.shortName}</div>
                <div className="similar-date">{p.year}</div>
              </div>
            </button>
          );
        })}
      </div>

      <div className="spacer-lg" />
      <div className="spacer-lg" />
    </div>
  );
}

window.ProjetDetail = ProjetDetail;
