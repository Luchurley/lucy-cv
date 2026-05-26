/* global React, Header, SafeTop, BottomNav, Box, Stack, Row, Mono, HW, Disp, Tag, Btn, ImgPh, Divider, Marker, SearchBar, FilterChip, ProjectCard, StatCard, ManifestoBlock, Accordion, CTASticky, EmptyState, ToastXP, ModalGary */
// ============================================================
// WF SCREENS — All wireframe screens for mobile portfolio
// ============================================================

// ---------- HOME ----------
const HomeScreen = ({ variant = 'default' }) => {
  const secret = variant === 'secret';
  const xp = secret ? 95 : 12;
  const level = secret ? 'CURIOUS' : 'VISITOR';
  return (
    <div className="wf-phone tall">
      <SafeTop />
      <Header xp={xp} level={level} />
      <div className="wf-canvas" style={{ padding: 10, overflow: 'auto' }}>
        <Stack gap={10}>
          {/* HERO */}
          <Box className="fill-rose shadow" style={{ padding: 12, position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', width: 80, height: 80, background: 'var(--teal)', opacity: 0.35, top: -20, right: -20, transform: 'rotate(18deg)', border: '1.5px solid var(--ink)' }} />
            <Mono size={7} style={{ opacity: 0.6, position: 'relative' }}>CREATIVE</Mono>
            <Disp size={32} style={{ display: 'block', position: 'relative', lineHeight: 0.92, marginTop: 4 }}>DIGITAL<br/>DIRECTOR</Disp>
            <div style={{ fontFamily: 'var(--ff-mono)', fontStyle: 'italic', fontSize: 9, marginTop: 8, opacity: 0.75, lineHeight: 1.5 }}>
              UX · UI · DA · IA — design qui ne ment pas, projets qui livrent.
            </div>
            <span style={{ position: 'absolute', bottom: 8, right: 10, fontSize: 22, opacity: 0.07 }}>🐾</span>
            <Marker n="1" top={4} right={6} />
          </Box>

          {/* STAT CARDS */}
          <Stack gap={8}>
            <StatCard label="NATIONALITÉ" value="🇫🇷🇬🇧 Franco-britannique" variant="cream" />
            <StatCard label="LOCALISATION" value="📍 Wavrin (59) · Permis B" variant="teal" />
            <StatCard label="DISPONIBILITÉ" value="🟢 Open to work" variant="org" />
          </Stack>

          <ManifestoBlock
            quote="Je suis le genre de personne qu'on croit avoir comprise trop vite."
            body="Sensible et brutalement lucide. Intuition + analyse. Inbox à zéro."
          />

          {secret && (
            <Box className="shadow-rose" style={{ background: 'var(--ink)', color: 'var(--paper)', padding: 10, border: '2px solid var(--rose)', position: 'relative' }}>
              <Mono size={7} style={{ color: 'var(--rose)' }}>🔓 NIVEAU CONFIDENTIEL</Mono>
              <div style={{ fontFamily: 'var(--ff-mono)', fontStyle: 'italic', fontSize: 9, marginTop: 5, lineHeight: 1.5, color: 'rgba(255,248,240,0.7)' }}>
                « The Orphan · Blade Runner 2049 · une nuit qui refait le monde. »
              </div>
              <Mono size={6} style={{ color: 'var(--orange)', marginTop: 6, display: 'block' }}>HINT — KONAMI ↑↑↓↓←→←→</Mono>
              <Marker n="2" top={-8} right={-8} />
            </Box>
          )}

          {/* CTA STRIP */}
          <Box className="fill-rose shadow" style={{ padding: 12, textAlign: 'center' }}>
            <Disp size={18}>PRÊTE À COLLABORER</Disp>
            <div style={{ fontFamily: 'var(--ff-mono)', fontSize: 9, fontWeight: 700, marginTop: 4 }}>hurley.lucy@gmail.com</div>
            <div style={{ fontFamily: 'var(--ff-mono)', fontSize: 9, fontWeight: 700, marginTop: 2 }}>+33 6 79 86 87 49</div>
            <Marker n="3" top={4} right={6} />
          </Box>

          <HW size={13} style={{ textAlign: 'center', color: 'var(--ink-mid)', display: 'block', padding: '4px 0' }}>↓ scroll · bottom nav fixed ↓</HW>
        </Stack>
      </div>
      <BottomNav active="home" />
    </div>
  );
};

// ---------- PROJETS LIST ----------
const PROJECTS = [
  { name: 'Jaccede', tags: ['UX/UI', 'DA'], date: '2021–2022' },
  { name: 'Wegoboard', tags: ['DA', 'STRAT'], date: '2023–2024' },
  { name: 'Cora', tags: ['UX/UI'], date: '2022–2023' },
  { name: 'Equality', tags: ['UX/UI', 'DA'], date: '2021–2022' },
  { name: 'TEC', tags: ['STRAT'], date: '2021–2023' },
  { name: 'Yungo', tags: ['UX/UI', 'DA'], date: '2022–2023' },
];

const ProjetsScreen = ({ variant = 'default' }) => {
  let visible = PROJECTS;
  if (variant === 'filter') visible = PROJECTS.filter(p => p.tags.includes('UX/UI'));
  if (variant === 'search-filled') visible = PROJECTS.filter(p => p.name.toLowerCase().includes('jacc'));
  const isFilter = variant === 'filter';
  const isSearchFocus = variant === 'search-focus';
  const isSearchFilled = variant === 'search-filled';
  const isEmptyFilter = variant === 'empty-filter';
  const isEmptySearch = variant === 'empty-search';
  const isSkeleton = variant === 'skeleton';

  return (
    <div className="wf-phone tall">
      <SafeTop />
      <Header xp={isFilter || isSearchFilled ? 38 : 24} level={isFilter ? 'CURIOUS' : 'VISITOR'} />
      <div className="wf-canvas" style={{ padding: 10, overflow: 'auto' }}>
        <Stack gap={8}>
          <Row justify="space-between" align="end">
            <Disp size={26}>PROJETS</Disp>
            <Mono size={8} style={{ color: 'var(--ink-mid)' }}>{visible.length}/6</Mono>
          </Row>
          <Mono size={7} style={{ color: 'var(--ink-mid)' }}>
            {visible.length} projets {(isFilter || isSearchFilled || isEmptyFilter) && '· FILTRES ACTIFS'}
          </Mono>

          <SearchBar state={isSearchFocus ? 'focus' : isSearchFilled || isEmptySearch ? 'filled' : 'default'} value={isEmptySearch ? 'xyzfoo' : 'jaccede'} />

          {/* Filter chips (horizontal scroll) */}
          <div style={{ display: 'flex', gap: 4, overflowX: 'hidden', position: 'relative', paddingBottom: 2 }}>
            <FilterChip state={isFilter || isEmptyFilter ? 'inactive' : 'active'}>TOUS</FilterChip>
            {isFilter
              ? <FilterChip state="active-x">UX/UI</FilterChip>
              : <FilterChip>UX/UI</FilterChip>}
            {isEmptyFilter && <FilterChip state="active-x">CHEF DE PROJET</FilterChip>}
            {isEmptyFilter && <FilterChip state="active-x">FREELANCE</FilterChip>}
            <FilterChip>DA</FilterChip>
            <FilterChip>STRAT</FilterChip>
            <FilterChip>IA</FilterChip>
            <span style={{ fontFamily: 'var(--ff-hw)', fontSize: 12, color: 'var(--rose)', alignSelf: 'center', whiteSpace: 'nowrap', marginLeft: 2 }}>→</span>
          </div>

          <Divider variant="solid" style={{ margin: '2px 0' }} />

          {/* Grid */}
          {isEmptyFilter ? (
            <EmptyState
              title="Aucun projet trouvé"
              sub="avec ces filtres."
              actions={[{ label: 'MODIFIER' }, { label: 'TOUT EFFACER', variant: 'rose' }]}
            />
          ) : isEmptySearch ? (
            <EmptyState
              title="Gary n'a rien trouvé"
              sub={'pour « xyzfoo »'}
              actions={[{ label: 'EFFACER', variant: 'rose' }]}
            />
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
              {(isSkeleton ? [1,2,3,4] : visible).map((p, i) => (
                <ProjectCard key={i} {...(isSkeleton ? { skeleton: true } : p)} />
              ))}
            </div>
          )}

          {(isFilter || isSearchFilled) && (
            <HW size={12} style={{ textAlign: 'center', color: 'var(--ink-mid)', padding: '4px 0' }}>compteur dynamique ↑ · résultats temps réel</HW>
          )}
        </Stack>
      </div>
      <BottomNav active="proj" badge={variant === 'default' ? 'proj' : null} />
    </div>
  );
};

// ---------- PROJET DÉTAIL ----------
const ProjetDetail = () => (
  <div className="wf-phone tall">
    <SafeTop />
    <div className="wf-header">
      <Row gap={6}>
        <span style={{ fontSize: 14, fontWeight: 700 }}>‹</span>
        <Mono size={9}>PROJETS</Mono>
        <span style={{ fontFamily: 'var(--ff-disp)', fontSize: 14, marginLeft: 6, letterSpacing: 1 }}>JACCEDE</span>
      </Row>
      <div className="wf-xp">
        <span className="wf-mono-sm" style={{ fontSize: 7 }}>CURIOUS</span>
        <div className="wf-xp-bar"><span style={{ width: '52%' }} /></div>
      </div>
    </div>
    <div className="wf-canvas" style={{ padding: 10, overflow: 'auto' }}>
      <Stack gap={10}>
        <ImgPh label="HERO IMG · 16:9" solid style={{ height: 110 }} />

        <SectionLabel>OVERVIEW</SectionLabel>
        <Row gap={4} style={{ flexWrap: 'wrap' }}>
          <Tag>UX/UI</Tag><Tag>ACCESSIBILITÉ</Tag><Tag>MOBILE-FIRST</Tag>
        </Row>

        <Row gap={6} style={{ alignItems: 'stretch' }}>
          <Box style={{ flex: 1, padding: 6 }}>
            <Mono size={7} style={{ opacity: 0.55 }}>CONTEXTE</Mono>
            <div style={{ fontFamily: 'var(--ff-mono)', fontSize: 8, marginTop: 3, lineHeight: 1.5 }}>Assoc. loi 1901 · Accessibilité PMR</div>
          </Box>
          <Box style={{ flex: 1, padding: 6 }}>
            <Mono size={7} style={{ opacity: 0.55 }}>MON RÔLE</Mono>
            <div style={{ fontFamily: 'var(--ff-mono)', fontSize: 8, marginTop: 3, lineHeight: 1.5 }}>UX/UI · Design System</div>
          </Box>
        </Row>

        <Box className="shadow" style={{ padding: 6, display: 'grid', gridTemplateColumns: '1fr 1fr 50px', gap: 6 }}>
          <div><Mono size={6} style={{ opacity: 0.55 }}>PÉRIODE</Mono><div style={{ fontSize: 9, fontFamily: 'var(--ff-mono)', fontWeight: 700, marginTop: 2 }}>2021–2022</div></div>
          <div><Mono size={6} style={{ opacity: 0.55 }}>TYPE</Mono><div style={{ fontSize: 9, fontFamily: 'var(--ff-mono)', fontWeight: 700, marginTop: 2 }}>Freelance</div></div>
          <div style={{ textAlign: 'right' }}><Mono size={6} style={{ opacity: 0.55, color: 'var(--rose)' }}>+XP</Mono><div style={{ fontSize: 11, fontFamily: 'var(--ff-disp)', color: 'var(--rose)', marginTop: 2 }}>+20</div></div>
        </Box>

        <SectionLabel>LE DÉFI</SectionLabel>
        <BodyLine />

        <SectionLabel>MON PROCESS</SectionLabel>
        {['RESEARCH', 'DEFINE', 'DESIGN', 'TEST & ITERATE'].map((step, i) => (
          <Box key={i} style={{ padding: 6, display: 'flex', alignItems: 'center', gap: 8 }}>
            <Disp size={14} style={{ color: 'var(--rose)' }}>{String(i+1).padStart(2,'0')}</Disp>
            <Stack gap={2} style={{ flex: 1 }}>
              <Mono size={8}>{step}</Mono>
              <BodyLine compact />
            </Stack>
          </Box>
        ))}

        <SectionLabel>VISUELS</SectionLabel>
        <Box style={{ padding: 6 }}>
          <ImgPh label="SCREEN 1 / 4 · swipe horiz." solid style={{ height: 110 }} />
          <Row justify="center" gap={4} style={{ marginTop: 6 }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--ink)' }} />
            <span style={{ width: 6, height: 6, borderRadius: '50%', border: '1.5px solid var(--ink)' }} />
            <span style={{ width: 6, height: 6, borderRadius: '50%', border: '1.5px solid var(--ink)' }} />
            <span style={{ width: 6, height: 6, borderRadius: '50%', border: '1.5px solid var(--ink)' }} />
          </Row>
        </Box>

        <SectionLabel>RÉSULTATS</SectionLabel>
        <BodyLine />

        <SectionLabel>COMPÉTENCES DÉMONTRÉES</SectionLabel>
        <Row gap={4} style={{ flexWrap: 'wrap' }}>
          <Tag>UX RESEARCH</Tag><Tag>MOBILE-FIRST</Tag><Tag>DESIGN SYSTEM</Tag><Tag>ACCESSIBILITÉ</Tag>
        </Row>

        <SectionLabel>PROJETS SIMILAIRES</SectionLabel>
        <div style={{ display: 'flex', gap: 6, overflow: 'hidden' }}>
          {['Equality', 'Cora', 'Yungo'].map(n => (
            <div key={n} style={{ minWidth: 72 }}>
              <ImgPh label={n.toUpperCase()} solid style={{ height: 50 }} />
              <div style={{ fontFamily: 'var(--ff-mono)', fontSize: 8, fontWeight: 700, marginTop: 3 }}>{n}</div>
            </div>
          ))}
          <span style={{ fontFamily: 'var(--ff-hw)', fontSize: 14, color: 'var(--rose)', alignSelf: 'center' }}>→</span>
        </div>
      </Stack>
    </div>
    <CTASticky />
    <BottomNav active="proj" />
  </div>
);

const SectionLabel = ({ children }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 6, margin: '2px 0' }}>
    <span style={{ flex: 1, height: 1.5, background: 'var(--ink)' }} />
    <Mono size={8}>{children}</Mono>
    <span style={{ flex: 1, height: 1.5, background: 'var(--ink)' }} />
  </div>
);

const BodyLine = ({ compact = false }) => (
  <Stack gap={3}>
    <div style={{ height: compact ? 5 : 6, background: 'var(--ink-trace)', width: '100%' }} />
    <div style={{ height: compact ? 5 : 6, background: 'var(--ink-trace)', width: '90%' }} />
    {!compact && <div style={{ height: 6, background: 'var(--ink-trace)', width: '70%' }} />}
  </Stack>
);

// ---------- SKILLS ----------
const SkillsScreen = ({ variant = 'default' }) => {
  const xp = variant === 'progress' ? 95 : 22;
  return (
    <div className="wf-phone tall">
      <SafeTop />
      <Header xp={xp} level={variant === 'progress' ? 'CURIOUS' : 'VISITOR'} />
      <div className="wf-canvas" style={{ padding: 10, overflow: 'auto' }}>
        <Stack gap={10}>
          <Disp size={26}>SKILLS</Disp>
          <HW size={13} style={{ color: 'var(--ink-mid)' }}>tape les tags · gagne des XP →</HW>

          {[
            { cat: 'UX / UI DESIGN', tags: ['Figma','Wireframing','Prototypage','Design Thinking','Usability Test','Design System','Mobile-first'], hot: variant === 'progress' ? [0,1,3] : [] },
            { cat: 'DIRECTION ARTISTIQUE', tags: ['Branding','Identité','Motion','Adobe Suite','Typo','Print'], hot: variant === 'progress' ? [0,3] : [] },
            { cat: 'CHEF DE PROJET DIGITAL', tags: ['Gestion projet','CRM','Roadmap','KPIs','Agile','Notion'], hot: [] },
            { cat: 'IA & PROMPTING', tags: ['Agent IA','Claude','Prompt design','Custom GPT','RAG'], hot: variant === 'progress' ? [1] : [] },
          ].map((g, gi) => (
            <Stack key={gi} gap={5}>
              <Row gap={4}>
                <Tag className="filled-ink" variant="filled-ink">{g.cat}</Tag>
                <span style={{ flex: 1, height: 1.5, background: 'var(--ink)' }} />
              </Row>
              <Row gap={4} style={{ flexWrap: 'wrap' }}>
                {g.tags.map((t, ti) => (
                  <Tag key={ti} variant={g.hot.includes(ti) ? 'active' : ''}>{t}{g.hot.includes(ti) ? '' : ''}</Tag>
                ))}
              </Row>
            </Stack>
          ))}

          <Stack gap={5}>
            <Row gap={4}><Tag variant="filled-ink">LANGUES</Tag><span style={{ flex: 1, height: 1.5, background: 'var(--ink)' }} /></Row>
            <Row gap={4}>
              <Tag>🇫🇷 C2</Tag><Tag>🇬🇧 C2</Tag><Tag>🇪🇸 B2</Tag>
            </Row>
          </Stack>

          <Box className="dashed" style={{ padding: 8, borderStyle: 'dashed', textAlign: 'center' }}>
            <HW size={13}>💡 ↑↑↓↓ ou cherche la patte 🐾</HW>
          </Box>
        </Stack>
      </div>
      <BottomNav active="skl" />
    </div>
  );
};

// ---------- MOI ----------
const MoiScreen = ({ variant = 'default' }) => {
  const lvl = { default: 'VISITOR', curious: 'CURIOUS', interested: 'INTERESTED', hireme: '★ HIRE ME' }[variant];
  const xp = { default: 18, curious: 52, interested: 130, hireme: 195 }[variant];
  const showGary = variant !== 'default';
  const showArchetype = variant === 'interested' || variant === 'hireme';
  const showConfidential = variant === 'hireme';

  return (
    <div className="wf-phone tall">
      <SafeTop />
      <Header xp={xp} level={lvl} lvMax={variant === 'hireme'} />
      <div className="wf-canvas" style={{ padding: 10, overflow: 'auto' }}>
        <Stack gap={10}>
          <Disp size={26}>MOI</Disp>

          <SectionLabel>IDENTITÉ</SectionLabel>
          <Stack gap={5}>
            <Box className="fill-soft" style={{ padding: 6, fontSize: 9, fontFamily: 'var(--ff-mono)' }}>🇫🇷🇬🇧 Franco-britannique</Box>
            <Box className="fill-teal" style={{ padding: 6, fontSize: 9, fontFamily: 'var(--ff-mono)' }}>📍 Wavrin (59) — Permis B</Box>
            <Box className="fill-org" style={{ padding: 6, fontSize: 9, fontFamily: 'var(--ff-mono)', color: 'var(--paper)' }}>🟢 Open to work</Box>
          </Stack>

          <SectionLabel>MANIFESTO</SectionLabel>
          <ManifestoBlock
            quote="Un loup qui code. Tendresse et survie."
            body="Sensible et brutalement lucide."
          />

          <SectionLabel>EXPÉRIENCES — 7 ACCORDÉONS</SectionLabel>
          <Stack gap={6}>
            <Accordion role="Contrôle Qualité" company="Dassault Aviation" period="2025–2026" type="CDI" open />
            <Accordion role="Chef de Projet Digital" company="AD'HOC MEDIA" period="2023–2024" type="Freelance" />
            <Accordion role="Head of Digital" company="The English Coach" period="2021–2023" type="CDI" />
            <Accordion role="UX/UI Designer" company="Studiø Kaøs" period="2021–2022" type="Freelance" />
            <Mono size={7} style={{ color: 'var(--ink-mid)', textAlign: 'center', display: 'block' }}>+ 3 autres ↓</Mono>
          </Stack>

          <SectionLabel>FORMATION</SectionLabel>
          <Stack gap={4}>
            {[
              ['2021–22', 'Certificat Web & Multimédia', 'Webstart'],
              ['2015–18', 'Licence Marketing & Comm.', 'ESMOD'],
              ['2013–15', 'Bac Négociation Clientèle', 'ENC Nantes'],
            ].map((f, i) => (
              <Row key={i} gap={6} style={{ padding: '4px 6px', borderLeft: '3px solid var(--rose)', background: 'var(--paper-2)' }}>
                <Mono size={7} style={{ width: 40, color: 'var(--ink-mid)' }}>{f[0]}</Mono>
                <Stack gap={1} style={{ flex: 1 }}>
                  <span style={{ fontFamily: 'var(--ff-mono)', fontSize: 8, fontWeight: 700 }}>{f[1]}</span>
                  <Mono size={6} style={{ color: 'var(--ink-mid)' }}>{f[2]}</Mono>
                </Stack>
              </Row>
            ))}
          </Stack>

          <SectionLabel>{showGary ? `LORE · ${lvl}` : 'LORE — 🔒 VERROUILLÉ'}</SectionLabel>
          {showGary ? (
            <Box className="shadow" style={{ padding: 10 }}>
              <Row gap={6}>
                <span style={{ fontSize: 22 }}>🐺</span>
                <Stack gap={2} style={{ flex: 1 }}>
                  <Mono size={8}>GARY · LE LOUP STRATÉGIQUE</Mono>
                  <BodyLine compact />
                </Stack>
              </Row>
              <Divider variant="solid" style={{ margin: '8px 0' }} />
              <Row gap={6}>
                <span style={{ fontSize: 18 }}>🌊</span>
                <Stack gap={2} style={{ flex: 1 }}>
                  <Mono size={8}>VOYAGES · AUS · CH · TH</Mono>
                  <BodyLine compact />
                </Stack>
              </Row>
              {showArchetype && (
                <>
                  <Divider variant="solid" style={{ margin: '8px 0' }} />
                  <Row gap={6}>
                    <span style={{ fontSize: 18 }}>🎬</span>
                    <Stack gap={2} style={{ flex: 1 }}>
                      <Mono size={8} style={{ color: 'var(--rose)' }}>ARCHÉTYPE · THE ORPHAN</Mono>
                      <BodyLine compact />
                    </Stack>
                  </Row>
                </>
              )}
            </Box>
          ) : (
            <Box className="dashed" style={{ padding: 16, textAlign: 'center', borderStyle: 'dashed' }}>
              <HW size={13} style={{ color: 'var(--ink-mid)' }}>débloqué à 40 XP · CURIOUS</HW>
              <div style={{ marginTop: 6, fontFamily: 'var(--ff-mono)', fontSize: 7, letterSpacing: 1, color: 'var(--ink-mid)' }}>EXPLORE POUR DÉBLOQUER</div>
            </Box>
          )}

          {showConfidential && (
            <Box className="shadow-rose" style={{ background: 'var(--ink)', color: 'var(--paper)', padding: 10, border: '2px solid var(--rose)' }}>
              <Mono size={7} style={{ color: 'var(--rose)' }}>🔓 NIVEAU CONFIDENTIEL</Mono>
              <BodyLine compact />
              <Mono size={6} style={{ color: 'var(--orange)', marginTop: 4, display: 'block' }}>↑↑↓↓ — full lore</Mono>
            </Box>
          )}
        </Stack>
      </div>
      <BottomNav active="moi" />
    </div>
  );
};

// ---------- CONTACT ----------
const ContactScreen = ({ variant = 'default' }) => {
  const hireme = variant === 'hireme';
  return (
    <div className="wf-phone tall">
      <SafeTop />
      <Header xp={hireme ? 95 : 60} level={hireme ? '★ HIRE ME' : 'INTERESTED'} lvMax={hireme} />
      <div className="wf-canvas" style={{ padding: 10, overflow: 'auto' }}>
        <Stack gap={10}>
          <Disp size={26}>CONTACT</Disp>

          <Box className="fill-rose shadow" style={{ padding: 14, position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', width: 60, height: 60, background: 'var(--teal)', opacity: 0.35, top: -16, right: -16, transform: 'rotate(20deg)', border: '1.5px solid var(--ink)' }} />
            <Disp size={28} style={{ position: 'relative', lineHeight: 0.92 }}>TRAVAILLONS<br/>ENSEMBLE</Disp>
            <Stack gap={6} style={{ marginTop: 12, position: 'relative' }}>
              <Box style={{ padding: 6, background: 'var(--paper)' }}>
                <Mono size={7} style={{ opacity: 0.55 }}>EMAIL</Mono>
                <div style={{ fontSize: 9, fontFamily: 'var(--ff-mono)', fontWeight: 700, marginTop: 2 }}>hurley.lucy@gmail.com</div>
              </Box>
              <Box style={{ padding: 6, background: 'var(--paper)' }}>
                <Mono size={7} style={{ opacity: 0.55 }}>TÉL</Mono>
                <div style={{ fontSize: 9, fontFamily: 'var(--ff-mono)', fontWeight: 700, marginTop: 2 }}>+33 6 79 86 87 49</div>
              </Box>
              <Box style={{ padding: 6, background: 'var(--paper)' }}>
                <Mono size={7} style={{ opacity: 0.55 }}>LINKEDIN ↗</Mono>
                <div style={{ fontSize: 9, fontFamily: 'var(--ff-mono)', fontWeight: 700, marginTop: 2 }}>/in/luchurley</div>
              </Box>
              <Box style={{ padding: 6, background: 'var(--paper)' }}>
                <Mono size={7} style={{ opacity: 0.55 }}>LOCALISATION</Mono>
                <div style={{ fontSize: 9, fontFamily: 'var(--ff-mono)', fontWeight: 700, marginTop: 2 }}>📍 Wavrin (59)</div>
              </Box>
            </Stack>
          </Box>

          <Box style={{ background: 'var(--ink)', color: 'var(--paper)', padding: 12, border: '2px solid var(--ink)', boxShadow: hireme ? '4px 4px 0 var(--rose)' : '3px 3px 0 var(--ink)' }}>
            <Row justify="space-between" align="start">
              <Mono size={7} style={{ color: 'var(--orange)' }}>🏆 SCORE FINAL</Mono>
              <span style={{ fontFamily: 'var(--ff-disp)', fontSize: 14, color: hireme ? 'var(--rose)' : 'var(--teal)' }}>
                {hireme ? '195 XP' : '145 XP'}
              </span>
            </Row>
            <div style={{ fontFamily: 'var(--ff-disp)', fontSize: 22, color: hireme ? 'var(--rose)' : 'var(--orange)', marginTop: 4, letterSpacing: 1 }}>
              {hireme ? '★ HIRE ME ★' : 'INTERESTED'}
            </div>
            <div style={{ fontFamily: 'var(--ff-mono)', fontSize: 8, marginTop: 4, color: 'rgba(255,248,240,0.6)' }}>
              {hireme ? '5/5 sections · 🐾 trouvée · 🔓 débloqué · GARY APPROVED' : '3/5 sections · 🐾 · 🔓'}
            </div>
            {!hireme && (
              <div style={{ fontFamily: 'var(--ff-mono)', fontSize: 8, marginTop: 4, color: 'var(--orange)' }}>
                +45 XP pour HIRE ME ↗
              </div>
            )}
          </Box>
        </Stack>
      </div>
      <BottomNav active="ctc" />
    </div>
  );
};

// ============================================================
// STATES (skeleton, offline, level-up)
// ============================================================
const SkeletonScreen = () => (
  <div className="wf-phone tall">
    <SafeTop />
    <Header xp={10} level="VISITOR" />
    <div className="wf-canvas" style={{ padding: 10 }}>
      <Stack gap={8}>
        <div className="wf-skel" style={{ height: 18, width: '50%' }} />
        <div className="wf-skel" style={{ height: 22, width: '100%' }} />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
          {[1,2,3,4].map(i => <ProjectCard key={i} skeleton />)}
        </div>
      </Stack>
    </div>
    <BottomNav active="proj" />
  </div>
);

const OfflineScreen = () => (
  <div className="wf-phone tall">
    <SafeTop />
    <Header xp={0} level="VISITOR" />
    <div className="wf-canvas" style={{ padding: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <EmptyState
        title="Gary ne trouve pas le réseau."
        sub="vérifiez votre connexion."
        actions={[{ label: 'RÉESSAYER', variant: 'rose' }]}
      />
    </div>
    <BottomNav active="home" />
  </div>
);

const LevelUpScreen = () => (
  <div className="wf-phone tall">
    <SafeTop />
    <Header xp={42} level="CURIOUS" />
    <div style={{ position: 'absolute', top: 50, right: 8, zIndex: 10 }}>
      <div className="wf-toast is-levelup">
        <span className="xp">★</span>
        <span>CURIOUS · contenu débloqué</span>
      </div>
    </div>
    <div className="wf-canvas" style={{ padding: 10, overflow: 'auto' }}>
      <Stack gap={8}>
        <Disp size={26}>MOI</Disp>
        <SectionLabel>LORE · CURIOUS — débloqué à l'instant</SectionLabel>
        <Box className="shadow" style={{ padding: 10, animation: 'demoFadeUp .35s ease both' }}>
          <Row gap={6}>
            <span style={{ fontSize: 22 }}>🐺</span>
            <Stack gap={2} style={{ flex: 1 }}>
              <Mono size={8} style={{ color: 'var(--rose)' }}>GARY ✦ NOUVEAU</Mono>
              <BodyLine compact />
            </Stack>
          </Row>
        </Box>
      </Stack>
    </div>
    <BottomNav active="moi" />
  </div>
);

Object.assign(window, {
  HomeScreen, ProjetsScreen, ProjetDetail, SkillsScreen, MoiScreen, ContactScreen,
  SkeletonScreen, OfflineScreen, LevelUpScreen,
  SectionLabel, BodyLine, PROJECTS,
});
