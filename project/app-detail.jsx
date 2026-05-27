// ============================================================
// PROJET DETAIL — full page with carousel
// ============================================================

function ProjetDetail({ projectId, onBack, onOpen, gainXP }) {
  const L = window.LUCY;
  const project = L.projects.find(p => p.id === projectId);
  const [slide, setSlide] = React.useState(0);
  const trackRef = React.useRef(null);

  // Grant +20 XP on first visit
  React.useEffect(() => {
    gainXP && gainXP(20, `Projet ouvert — ${project?.name}`);
  }, [projectId]);

  if (!project) return null;

  const similar = L.projects.filter(p => p.id !== project.id).slice(0, 5);
  const accent = window.PROJECT_COLOR[project.id] || '#FF0055';
  // Use real screenshots when present, else 4 generic mockups
  const slides = (project.screenshots && project.screenshots.length)
    ? project.screenshots
    : [null, null, null, null];

  const goSlide = (i) => {
    setSlide(i);
    const el = trackRef.current;
    if (el) {
      const slideWidth = el.children[0]?.offsetWidth || 0;
      el.scrollTo({ left: slideWidth * i + i * 10, behavior: 'smooth' });
    }
  };

  return (
    <div className="page" data-screen-label={'Detail ' + project.shortName}>
      <div className="detail-hero">
        <window.HeroCover id={project.id} />
      </div>

      <div className="display-lg" style={{ marginTop: 4 }}>{project.name}</div>
      <div className="page-subline">{project.type} · {project.year}</div>

      <div className="pcard-tags" style={{ marginTop: 10, marginBottom: 12 }}>
        {project.tags.map(t => <span key={t} className="pcard-tag">{t}</span>)}
      </div>

      {project.url && (
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="proj-url-link"
          onClick={() => gainXP && gainXP(5, `Site visité — ${project.shortName}`)}
        >
          VOIR LE SITE ↗ <span className="proj-url-val">{project.url.replace('https://', '')}</span>
        </a>
      )}

      <SectionDivider>OVERVIEW</SectionDivider>
      <div className="col-2">
        <div className="meta-card">
          <div className="body-xs dim">CONTEXTE</div>
          <div className="body-md" style={{ marginTop: 4, lineHeight: 1.55 }}>{project.context}</div>
        </div>
        <div className="meta-card">
          <div className="body-xs dim">MON RÔLE</div>
          <div className="body-md" style={{ marginTop: 4, lineHeight: 1.55 }}>{project.role}</div>
        </div>
      </div>

      <div className="spacer-md" />
      <div className="col-3">
        <div className="meta-card">
          <div className="body-xs dim">PÉRIODE</div>
          <div className="body-md" style={{ marginTop: 4, fontWeight: 700 }}>{project.year}</div>
        </div>
        <div className="meta-card">
          <div className="body-xs dim">TYPE</div>
          <div className="body-md" style={{ marginTop: 4, fontWeight: 700 }}>{project.type.split('·')[0].trim()}</div>
        </div>
        <div className="meta-card accent-rose">
          <div className="body-xs" style={{ color: 'var(--color-ink)' }}>XP</div>
          <div className="display-sm" style={{ marginTop: 2 }}>+20</div>
        </div>
      </div>

      <SectionDivider>LE DÉFI</SectionDivider>
      <div className="card" style={{ background: 'var(--color-paper-2)' }}>
        <p className="body-lg">{project.challenge}</p>
      </div>

      <SectionDivider>MON PROCESS</SectionDivider>
      {project.process.map((step, i) => (
        <div key={i} className="process-step">
          <div className="process-num">{String(i + 1).padStart(2, '0')}</div>
          <div className="process-body">
            <div className="process-title">{step.title}</div>
            <div className="process-text">{step.text}</div>
          </div>
        </div>
      ))}

      <SectionDivider>VISUELS</SectionDivider>
      <div className="carousel">
        <div className="carousel-track" ref={trackRef} onScroll={(e) => {
          const el = e.target;
          const sw = el.children[0]?.offsetWidth || 1;
          const idx = Math.round(el.scrollLeft / (sw + 10));
          setSlide(idx);
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
            <button
              key={i}
              className={'carousel-dot' + (slide === i ? ' is-on' : '')}
              onClick={() => goSlide(i)}
              aria-label={`Visuel ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {project.videos && project.videos.length > 0 && (
        <>
          <SectionDivider>VIDÉOS</SectionDivider>
          <div className="video-grid">
            {project.videos.map((src, i) => (
              <div key={i} className="video-item">
                <video controls preload="metadata" playsInline>
                  <source src={src} type="video/mp4" />
                </video>
                <div className="video-caption">DISRUPTED · FILM {String(i + 1).padStart(2, '0')}/{project.videos.length}</div>
              </div>
            ))}
          </div>
        </>
      )}

      <SectionDivider>RÉSULTATS</SectionDivider>
      <div className="card" style={{ background: 'var(--color-card)' }}>
        <p className="body-lg">{project.result}</p>
      </div>

      <SectionDivider>COMPÉTENCES DÉMONTRÉES</SectionDivider>
      <div className="skill-tags" style={{ marginBottom: 20 }}>
        {project.skills.map(s => <span key={s} className="skill-tag" style={{ cursor: 'default' }}>{s}</span>)}
      </div>

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
