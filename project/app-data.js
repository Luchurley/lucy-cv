// ============================================================
// LUCY HURLEY · DATA — v2 · Recruiter-friendly tone
// ============================================================

window.LUCY = {
  identity: {
    name: 'LUCY HURLEY',
    fullName: 'Lucy Maurice Hurley',
    tagline: 'UX · UI · DA · IA',
    role1: 'CREATIVE',
    role2: 'DIGITAL',
    role3: 'DIRECTOR',
    location: 'Wavrin (59) · Permis B',
    nationality: '🇫🇷🇬🇧 Franco-britannique',
    availability: '🟢 Open to work',
    age: '29 ans · Lille',
    languages: [
      { flag: '🇫🇷', name: 'Français', level: 'C2 · Natif' },
      { flag: '🇬🇧', name: 'English', level: 'C2 · Bilingue' },
      { flag: '🇪🇸', name: 'Español', level: 'B2 · Conv.' },
    ],
  },

  contact: {
    email: 'hurley.lucy@gmail.com',
    phone: '+33 6 79 86 87 49',
    linkedin: 'linkedin.com/in/luchurley',
    linkedinUrl: 'https://linkedin.com/in/luchurley',
  },

  // ===== Recruiter-friendly manifesto =====
  manifesto: {
    short: `Sensible et lucide à la fois. Intuitive et méthodique. J'aime ce qui a du sens et ce qui livre.`,
    full: `Designer, cheffe de projet, parfois prompteuse IA — ce qui m'intéresse, c'est ce qui <strong>relie</strong>. Faire des produits qui parlent vraiment, à des gens vraiment. Le design n'est pas un habillage : c'est un langage, et il doit dire quelque chose de juste.`,
    closing: `Un équilibre entre <strong>feu et contrôle</strong>, créativité et exécution. Inbox à zéro. Livrables en avance. Respect du temps des autres.`,
    signoff: `Un loup qui code, qui écrit, qui livre — et qui choisit avec qui il chasse.`,
  },

  // ============== PROJETS ==============
  projects: [
    {
      id: 'tec',
      name: 'The English Coach',
      shortName: 'TEC',
      year: '2021–2023',
      type: 'CDI · Head of Digital',
      role: 'Head of Digital · DA · IA Conversationnelle',
      context: 'Organisme de formation linguistique 100% en ligne · Site + app + IA + Qualiopi',
      tags: ['IA', 'UX/UI', 'STRAT.', 'CRM'],
      categories: ['ia', 'ux', 'strat'],
      contract: ['cdi'],
      cover: 'tec',
      url: 'the-english-coach.webflow.io',
      challenge: `Construire un organisme de formation crédible et conforme Qualiopi, et y intégrer un agent IA conversationnel pour la pratique orale autonome — en 2021, avant que "AI assistant" ne soit un job title.`,
      process: [
        { title: 'AUDIT & STRATÉGIE', text: `Cartographie des besoins apprenants, benchmark concurrentiel, identification des points de friction dans l'apprentissage de l'oral. Plan stratégique 360°.` },
        { title: 'BRANDING & SITE', text: `Identité complète, design system, supports de communication. Site Webflow construit de A à Z (the-english-coach.webflow.io).` },
        { title: 'IA CONVERSATIONNELLE', text: `Conception et déploiement d'un compagnon IA pour la pratique orale 24h/24. Prompt design, conversation UX, fallbacks pédagogiques. En production en 2021.` },
        { title: 'CRM & QUALIOPI', text: `Architecture CRM apprenants, dashboards KPIs, conformité Qualiopi (audits passés), montage CPF / OPCO / Datadock.` },
      ],
      result: `Plateforme en production. Audits Qualiopi passés. CRM fonctionnel. Agent IA déployé. Du brief direction au reporting performance — pilotage 360° en autonomie.`,
      skills: ['Direction Artistique', 'AI Product Design', 'Prompt Engineering', 'Webflow', 'CRM Architecture', 'Qualiopi'],
      screenshots: ['assets/projects/tec-site-1.png', 'assets/projects/tec-site-2.png', 'assets/projects/tec-interface.png'],
    },
    {
      id: 'jaccede',
      name: 'Jaccede.com',
      shortName: 'Jaccede',
      year: '2021–2022',
      type: 'Freelance · Studiø Kaøs',
      role: 'UX/UI Designer',
      context: 'Association loi 1901 · Cartographie accessibilité PMR · App contributive',
      tags: ['UX/UI', 'A11Y'],
      categories: ['ux'],
      contract: ['freelance'],
      cover: 'jaccede',
      challenge: `Refondre l'app mobile d'une association qui cartographie l'accessibilité des lieux pour les personnes à mobilité réduite — contributive, communautaire, et contrainte par les guidelines WCAG 2.1 AA stricts.`,
      process: [
        { title: 'RESEARCH', text: `Interviews PMR, audit a11y de l'existant, mapping des parcours utilisateurs critiques. Lecture éthnographique des usages réels.` },
        { title: 'DEFINE', text: `Personas, journey maps, design principles centrés mobilité réduite. Priorisation contre l'effort des contributeurs.` },
        { title: 'DESIGN', text: `Wireframes mobile-first, design system PMR-compatible, prototypes haute fidélité. Contrastes AAA partout, tap targets 48pt+.` },
        { title: 'TEST & ITERATE', text: `Usability testing avec utilisateurs réels, itérations sur les flows de contribution, validation a11y avec un PMR consultant.` },
      ],
      result: `Design system inclusif livré, prototypes haute fidélité validés. Sujet qui m'a marquée durablement : l'accessibilité, ce n'est pas un module à cocher, c'est une grammaire de pensée.`,
      skills: ['UX Research', 'A11y WCAG 2.1', 'Mobile-first', 'Design System', 'Usability Testing'],
      screenshots: ['assets/projects/jaccede-home.png', 'assets/projects/jaccede-1.png', 'assets/projects/jaccede-2.png', 'assets/projects/jaccede-3.png'],
    },
    {
      id: 'adhoc',
      name: 'AD\'HOC Media',
      shortName: 'AD\'HOC',
      year: '2023–2024',
      type: 'Freelance · Cheffe de projet',
      role: 'Cheffe de projet · Orchestration',
      context: 'Agence média événementielle & musicale · Site institutionnel · Mise en ligne',
      tags: ['CHEFFE DE PROJET', 'ORCHESTRATION'],
      categories: ['strat'],
      contract: ['freelance'],
      cover: 'adhoc',
      url: 'adhocmedia.fr',
      challenge: `Orchestrer la mise en ligne du site institutionnel adhocmedia.fr : coordination des intervenants (dev, design, contenu, direction), respect des deadlines, cohérence éditoriale et qualité de la livraison.`,
      process: [
        { title: 'KICKOFF', text: `Cadrage du périmètre avec la direction. Audit de l'existant. Identification des dépendances et risques projet.` },
        { title: 'COORDINATION', text: `Pilotage des prestataires (dev, contenus, illustrations), suivi quotidien des livrables, déblocages des points durs en temps réel.` },
        { title: 'QUALITÉ', text: `Recettes successives, validation UX, vérification responsive et accessibilité, contrôle des contenus avant push.` },
        { title: 'MISE EN LIGNE', text: `Coordination du déploiement, vérification post-prod, briefing équipe interne sur les workflows de mise à jour.` },
      ],
      result: `Site institutionnel livré dans les temps, équipe formée à la maintenance. Coordination 360° qui m'a appris à orchestrer des stakeholders aux objectifs très différents — créatifs, techniques, business.`,
      skills: ['Coordination Projet', 'Pilotage Multi-Acteurs', 'Recette UX', 'Mise en Production'],
      screenshots: [],
    },
    {
      id: 'wegoboard',
      name: 'Wegoboard',
      shortName: 'Wegoboard',
      year: '2023–2024',
      type: 'Freelance · UX/UI · DA',
      role: 'UX/UI · Direction Artistique',
      context: 'E-commerce de mobilité électrique · Trottinettes & vélos · B2C',
      tags: ['UX/UI', 'DA', 'E-COM'],
      categories: ['ux', 'da'],
      contract: ['freelance'],
      cover: 'wegoboard',
      url: 'wegoboard.com',
      challenge: `Concevoir l'expérience d'un e-commerce de mobilité électrique premium : pédagogie produit forte (autonomie, puissance, sécurité), pages techniques scannables, tunnel d'achat fluide.`,
      process: [
        { title: 'AUDIT', text: `Audit concurrentiel (decathlon, dott, lime), benchmark UX des fiches produits techniques. Identification des points de friction dans la décision d'achat scooter.` },
        { title: 'UX', text: `Architecture d'info, page d'accueil pédagogique, comparateur produits, fiches détaillées avec specs techniques accessibles aux non-initiés.` },
        { title: 'DA', text: `Identité visuelle dynamique, photographie produit dirigée, iconographie technique cohérente, mise en avant des partenariats médias (TF1, M6, RMC).` },
        { title: 'CONVERSION', text: `Optimisation du tunnel d'achat, intégration des aides à la décision (calculateur d'autonomie, comparateur), CTA contextuels.` },
      ],
      result: `Refonte livrée, parcours d'achat fluidifié, image de marque premium. Le projet m'a fait travailler à l'intersection technique × pédagogie × esthétique.`,
      skills: ['UX e-commerce', 'Direction Artistique', 'Fiches produits techniques', 'Conversion'],
      screenshots: ['assets/projects/wegoboard-mobility.png', 'assets/projects/wegoboard-products.png'],
    },
    {
      id: 'squidgame',
      name: 'Squid Game VR',
      shortName: 'Squid VR',
      year: '2022–2023',
      type: 'Freelance · Studiø Kaøs',
      role: 'UX/UI · Direction Artistique',
      context: 'Expérience VR immersive · Univers Squid Game · Site vitrine + abonnement',
      tags: ['UX/UI', 'DA', 'VR'],
      categories: ['ux', 'da'],
      contract: ['freelance'],
      cover: 'squidgame',
      challenge: `Construire le site vitrine d'une expérience VR inspirée de l'univers Squid Game — capturer l'intensité de la franchise tout en restant un site marketing clair, avec un parcours d'abonnement crédible.`,
      process: [
        { title: 'UNIVERS', text: `Mood board pop-graphique radical (rose néon × noir profond), références cinéma + jeu vidéo, hommage visuel sans tomber dans la copie.` },
        { title: 'UX', text: `Architecture narrative : hook hero → "un jeu d'enfants" → expérience VR → preuves sociales → CTA abonnement. Logique d'engagement progressif.` },
        { title: 'UI & MOTION', text: `Composition typographique nerveuse, micro-interactions au hover, cartes "personnages" interactives, transitions tendues.` },
        { title: 'CONVERSION', text: `Pages d'abonnement (Premium 59,90€ / Découverte 19,90€) avec hiérarchie claire, frictions minimales, social proof intégré.` },
      ],
      result: `Site vitrine + tunnel d'abonnement livrés. Projet qui a poussé loin le couplage entre direction artistique forte et UX rigoureuse. Aimé travailler la tension entre dark fun et clarté commerciale.`,
      skills: ['Direction Artistique', 'UX vitrine', 'Motion design', 'Univers de marque'],
      screenshots: ['assets/projects/wegoboard-vitrine.png', 'assets/projects/products.png', 'assets/projects/services.png'],
    },
    {
      id: 'equality',
      name: 'Equality',
      shortName: 'Equality',
      year: '2021–2022',
      type: 'Freelance · Studiø Kaøs',
      role: 'UX/UI · Direction Artistique',
      context: 'Plateforme communautaire · Login Discord/Twitch/Apple · Onboarding gamifié',
      tags: ['UX/UI', 'DA', 'COMMU'],
      categories: ['ux', 'da'],
      contract: ['freelance'],
      cover: 'equality',
      challenge: `Concevoir l'expérience d'une plateforme communautaire avec un parcours d'onboarding qui collecte les préférences utilisateurs sans friction — jeux favoris, équipes, joueurs.`,
      process: [
        { title: 'STRATÉGIE', text: `Architecture d'info centrée sur le matchmaking d'intérêts. Identification des frictions classiques sur les sign-up flows communautaires.` },
        { title: 'ONBOARDING', text: `Flow en 4 étapes : login rapide (Discord/Twitch/Apple/FB) → choix de jeux → équipes favorites → joueurs suivis. Progression visible, retour arrière permis.` },
        { title: 'UI', text: `Design system dark + accents jaune/rose, carousels horizontaux pour la découverte, toggles tactiles, indicateurs de progression discrets.` },
        { title: 'TEST', text: `Usability test sur le parcours sign-up : objectif sub-90s pour finir l'onboarding. Itérations sur les copies de boutons et le tone of voice.` },
      ],
      result: `Onboarding livré avec un taux d'abandon ramené sous la barre des concurrents observés. Le projet m'a fait travailler la psychologie de l'engagement initial.`,
      skills: ['UX d\'onboarding', 'Mobile UI', 'Tone of Voice', 'Dark UI'],
      screenshots: [],
    },
    {
      id: 'distupted',
      name: 'Distupted',
      shortName: 'Distupted',
      year: '2020–2021',
      type: 'Fondatrice',
      role: 'Fondatrice · Direction Artistique',
      context: 'Marque capsule unisexe · Harnais vegan · Mode alternative · E-commerce indépendant',
      tags: ['BRAND', 'DA', 'MODE'],
      categories: ['da'],
      contract: ['founder'],
      cover: 'distupted',
      challenge: `Créer une marque capsule unisexe vegan, sans capital, sans audience. Construire l'univers, le produit et le canal de A à Z en autonomie complète.`,
      process: [
        { title: 'CONCEPT', text: `Nom intentionnellement mal orthographié — "Distupted" ≠ "Disrupted". Le mot est déformé, comme la mode qu'il propose. Univers : dualité, fragments, mode alternative assumée.` },
        { title: 'DA & PRODUITS', text: `Direction artistique complète, sourcing matériaux vegan et éthiques, shootings réels, lookbooks, identité visuelle radicale.` },
        { title: 'E-COMMERCE', text: `Boutique en ligne, communication digitale, content social. Une boucle complète DA → produit → vente → SAV.` },
        { title: 'LIVRAISON', text: `Production en petite série, shootings réels, lookbooks photographiés, univers visuel cohérent de bout en bout.` },
      ],
      result: `Projet entièrement déployé, collection sold-out. Laboratoire créatif fondateur dans mon parcours : m'a appris à porter une vision entière, sans filet, sans intermédiaire.`,
      skills: ['Branding', 'Direction Artistique', 'Sourcing éthique', 'E-commerce', 'Production'],
      screenshots: [],
    },
    {
      id: 'cora',
      name: 'Cora · Recettes',
      shortName: 'Cora',
      year: '2022–2023',
      type: 'Freelance · Studiø Kaøs',
      role: 'UX/UI Designer',
      context: 'Hypermarché Cora · Plateforme recettes & courses · Web + Mobile · UX d\'achat',
      tags: ['UX/UI', 'GROCERY'],
      categories: ['ux'],
      contract: ['freelance'],
      cover: 'cora',
      challenge: `Concevoir l'expérience d'un module recettes intégré à un site e-commerce d'hypermarché : transformer une intention "qu'est-ce qu'on mange ?" en panier rempli, sans friction et sans pop-up agressif.`,
      process: [
        { title: 'RESEARCH', text: `Audit du tunnel courses existant, interviews utilisateurs sur les freins à la planification repas, benchmark des apps recettes (Marmiton, Hellofresh).` },
        { title: 'ARCHITECTURE', text: `Mapping du parcours recette → ingrédients → panier. Hiérarchisation : recette en grande page détaillée + carnet de recettes personnel + ajout direct au panier.` },
        { title: 'UI', text: `Fiches recettes claires : difficulté · durée · ingrédients · ustensiles · préparation pas-à-pas avec cases à cocher. Valeurs nutritionnelles, avis utilisateurs, vous aimeriez aussi.` },
        { title: 'CONVERSION', text: `CTA "Ajouter au panier" depuis chaque recette avec adaptation nombre de personnes. Recettes saisonnières mises en avant. Pictos de saisonnalité.` },
      ],
      result: `Plateforme recettes livrée avec un flow recette→panier ultra-fluide. Le projet m'a fait pratiquer l'UX d'achat appliqué à un cas multi-produits.`,
      skills: ['UX e-commerce', 'Information architecture', 'Web + Mobile', 'Conversion'],
      screenshots: [],
    },
  ],

  // ============== PARCOURS COMPLET (MOI) ==============
  experiences: [
    {
      role: 'Contrôle Qualité & Gestion ERP',
      company: 'Dassault Aviation',
      period: 'Avr. 2025 — Mars 2026',
      type: 'CDI',
      color: 'secondary',
      summary: `SAP ERP en environnement aéronautique industriel — flux de pièces, qualité, traçabilité, anomalies.`,
      body: `Maîtrise opérationnelle du module SAP ERP : gestion de stock et traçabilité, saisie et suivi des flux de pièces en production. Gestion des anomalies et non-conformités via SAP et OGA. Analyse, traitement des litiges, coordination inter-services.

<strong>Rigueur documentaire</strong>, respect des procédures qualité, adaptation rapide aux outils industriels. SAP ERP en contexte aéronautique est l'un des environnements les plus exigeants — la preuve que l'adaptabilité dont je parle est mesurable.`,
      chips: ['SAP ERP', 'OGA', 'Aéronautique', 'Qualité', 'Industrie', 'Traçabilité'],
    },
    {
      role: 'Cheffe de Projet Digital',
      company: "AD'HOC Media",
      period: 'Mai 2023 — Juin 2024',
      type: 'Freelance',
      color: 'tertiary',
      summary: `Coordination de la mise en ligne du site institutionnel adhocmedia.fr + refonte e-commerce Wegoboard.`,
      body: `Orchestration de la mise en ligne de <strong>adhocmedia.fr</strong> : pilotage des prestataires (dev, design, contenu), recettes successives, mise en production. Coordination 360° dans un milieu événementiel et musical exigeant en réactivité.

En parallèle : pilotage de la refonte e-commerce <strong>Wegoboard</strong> (mobilité électrique) — UX/UI, DA, tunnel d'achat, fiches produits techniques.`,
      chips: ['Gestion de projet', 'UX/UI', 'E-commerce', 'Coordination', 'Mise en production'],
    },
    {
      role: 'Head of Digital · Coordinatrice Pédagogique',
      company: 'The English Coach',
      period: 'Juin 2021 — Nov. 2023',
      type: 'CDI',
      color: 'primary',
      summary: `Direction digitale 360° d'un OF en ligne. Conception et déploiement d'un agent IA conversationnel — en 2021.`,
      body: `Pilotage opérationnel complet : suivi pédagogique, planification, conformité <strong>Qualiopi</strong> (audits, indicateurs), CPF / OPCO / Datadock.

<strong>Conception et déploiement d'un compagnon IA conversationnel</strong> pour la pratique orale autonome 24h/24 — en 2021-2022, avant que "AI assistant" soit un job title.

Site Webflow construit de A à Z (the-english-coach.webflow.io), design system, CRM apprenants, dashboards KPIs, reporting direction, coordination formateurs et partenaires.`,
      chips: ['IA Conversationnelle', 'Prompt Design', 'Webflow', 'CRM', 'Qualiopi', 'Direction Artistique'],
    },
    {
      role: 'UX/UI Designer · Créatrice de Contenus',
      company: 'Studiø Kaøs',
      period: 'Juin 2021 — Sept. 2022',
      type: 'Freelance',
      color: 'ink',
      summary: `Produits digitaux end-to-end pour startups et secteur éducatif.`,
      body: `Benchmarking et analyse concurrentielle, wireframing lo-fi → hi-fi, design thinking, usability testing, product design, motion design, création de contenus éducatifs, UX research.

Clients principaux : secteur éducatif, fintech, expérience immersive, communautés. Projets variés qui ont musclé l'agilité créative et la capacité à entrer vite dans un sujet.`,
      chips: ['Wireframing', 'Design Thinking', 'Usability Testing', 'Product Design', 'Motion Design', 'UX Research'],
    },
    {
      role: 'Fondatrice · Direction Artistique',
      company: 'Distupted',
      period: 'Juin 2020 — Juin 2021',
      type: 'Fondatrice',
      color: 'tertiary',
      summary: `Marque capsule unisexe vegan. Univers visuel cohérent, livraison de bout en bout.`,
      body: `Marque indépendante créée from scratch pendant le COVID. Nom intentionnellement mal orthographié — <strong>Distupted</strong> ≠ Disrupted. Direction artistique complète, sourcing matériaux vegan, shootings, lookbooks, identité visuelle radicale.

Collection sold-out en intégralité. Le projet m'a appris à porter un univers de bout en bout sans intermédiaire — et à assumer une posture créative entière.`,
      chips: ['Branding', 'DA complète', 'Mode éthique', 'E-commerce', 'Shooting'],
    },
    {
      role: 'Conseillère Sanitaire COVID',
      company: 'Plateforme nationale',
      period: '2020',
      type: 'CDD · Crise',
      color: 'secondary',
      summary: `Gestion d'appels sanitaires en première ligne pendant la pandémie.`,
      body: `Gestion des appels COVID (information, prise de rendez-vous), accompagnement de personnes en détresse, dans un contexte de crise nationale.

Engagement de première ligne. Un moment qui n'a rien à voir avec le digital, mais qui dit quelque chose du caractère.`,
      chips: ['Service public', 'Gestion de crise', 'Empathie active'],
    },
    {
      role: 'Responsable de Stand · Premium',
      company: 'North Sails & Scotch&Soda — Galeries Lafayette Nantes',
      period: 'Juin 2019 — Fév. 2020',
      type: 'CDI / CDD',
      color: 'primary',
      summary: `Retail premium bilingue. Recrutée par Scotch&Soda après mes résultats chez North Sails. Sans candidature.`,
      body: `Conseil client bilingue FR/EN (clientèle internationale), merchandising et display visuel, reporting commercial, gestion de stock, maintien image premium.

<strong>Recrutée directement par Scotch&Soda</strong> après mes performances chez North Sails. Aucune candidature. Repérage par les résultats — la forme de validation la plus forte qui soit dans le retail.`,
      chips: ['Vente premium', 'Bilingue FR/EN', 'Merchandising', 'KPIs', 'International'],
    },
    {
      role: 'Responsable Merchandising · Tommy Bahama',
      company: 'Tommy Bahama · Bondi Beach 🌊 Sydney',
      period: 'Juin 2018 — Mai 2019',
      type: 'CDI · International',
      color: 'tertiary',
      summary: `Ouverture du magasin Bondi Beach. 21 ans, partie seule à l'autre bout du monde.`,
      body: `Ouverture d'un magasin from scratch en Australie : merchandising, formation et management d'équipe, KPIs, reporting, fidélisation client, maintien image premium en environnement international anglophone.

21 ans, partie seule. L'expérience qui a fait basculer mon anglais en bilingue et ma capacité d'adaptation à un autre niveau.`,
      chips: ['Merchandising', 'Management', 'Retail premium', 'International', 'Anglais natif pro'],
    },
    {
      role: 'Designer Freelance',
      company: 'Multi-clients',
      period: '2018',
      type: 'Freelance',
      color: 'ink',
      summary: `Premier travail de design pro — point d'origine de la carrière créative.`,
      body: `Stratégie communication, conception visuelle, typographie, publicité, direction artistique pour clients variés. Le bascule officielle vers le design.`,
      chips: ['DA', 'Typographie', 'Publicité', 'Conception visuelle'],
    },
    {
      role: 'Community Manager',
      company: 'Boatpeople Music Band · Lille',
      period: 'Jan. 2017 — Avr. 2018',
      type: 'CDI',
      color: 'secondary',
      summary: `Les racines : monde culturel, musical, créatif.`,
      body: `Stratégie réseaux sociaux, création de contenus, campagnes, négociation prestataires, coordination d'un événement caritatif. Premier vrai pied dans le digital créatif.`,
      chips: ['Social Media', 'Contenu', 'Événementiel', 'Campagnes'],
    },
    {
      role: 'Assistante Responsable Magasin',
      company: 'House of California',
      period: '2016',
      type: 'CDI',
      color: 'primary',
      summary: `Univers lifestyle californien — vendre une projection mentale, pas un produit.`,
      body: `Identité visuelle et univers de marque, contenu créatif et storytelling, direction artistique, présence digitale, achats / stocks / fournisseurs, e-commerce, rédaction produit bilingue, recrutement.

M'a appris les marques expérientielles, le branding émotionnel, la cohérence entre espace, produit et identité.`,
      chips: ['Branding émotionnel', 'E-commerce', 'Rédaction FR/EN', 'Retail lifestyle'],
    },
    {
      role: 'Barmaid · UK 🇬🇧',
      company: 'Havens Holidays',
      period: '2015 · Royaume-Uni',
      type: 'CDD',
      color: 'ink',
      summary: `Première expérience internationale. Volume, rythme, English immersion.`,
      body: `Le grand saut numéro 1. Volume, rythme, anglais total immersion. Première brique de l'autonomie qui m'a portée jusqu'à Bondi Beach et au-delà.`,
      chips: ['English immersion', 'Volume', 'Service'],
    },
  ],

  formation: [
    { period: '2021–2022', title: 'Certificat UX/UI Design', school: 'Webstart · Lille', mention: 'Mention', color: 'primary' },
    { period: '2015–2018', title: 'Licence Marketing & Communication Stratégique', school: 'ESMOD International · Roubaix', mention: 'Mode + Business', color: 'tertiary' },
    { period: '2013–2015', title: 'Bac Prospection, Négociation & Suivi Clientèle', school: 'Écoles Nantaises de Commerce', mention: '', color: 'secondary' },
    { period: '—', title: 'BEP Production Graphique & Imprimée', school: 'La Joliverie · Nantes', mention: 'Origines art graphique', color: 'ink' },
  ],

  // ============== SKILLS ==============
  skillsByCat: [
    {
      cat: 'UX / UI DESIGN', tagCat: 'ux',
      tags: ['UX Research', 'UI Design', 'Wireframing', 'Prototypage', 'Design Systems', 'Usability Testing', 'Figma', 'Mobile-first', 'A11y WCAG'],
    },
    {
      cat: 'DIRECTION ARTISTIQUE', tagCat: 'da',
      tags: ['Branding', 'Identité', 'Typographie', 'Motion Design', 'Adobe Suite', 'Photographie', 'Editorial Design'],
    },
    {
      cat: 'CHEFFE DE PROJET DIGITAL', tagCat: 'pm',
      tags: ['Gestion projet 360°', 'CRM Architecture', 'Webflow', 'CMS', 'Coordination', 'Qualiopi · CPF', 'KPIs & Reporting'],
    },
    {
      cat: 'IA & PROMPTING', tagCat: 'ai',
      tags: ['IA Conversationnelle', 'Prompt Engineering', 'AI Product Design', 'Chatbot UX', 'Claude / GPT', 'Automatisation'],
    },
  ],

  // ============== LORE ==============
  lore: {
    gary: {
      emoji: '🐺',
      title: 'GARY · LE STRATÈGE',
      body: `Gary n'est pas un animal de compagnie. C'est un compagnon, une extension d'identité, et la preuve qu'un lien fiable change tout.

Personnalité : stratégique, il observe avant d'agir. Légèrement condescendant — il juge, il approuve rarement. Loyal mais à ses conditions. Surprenant dans ses apparitions.`,
    },
    travels: {
      emoji: '🌊',
      title: 'VOYAGES · TRANSFORMATION',
      body: `Bondi Beach 🇦🇺, Suisse 🇨🇭, Thaïlande 🇹🇭. Pas du tourisme — des chapitres. Chaque déplacement a changé quelque chose dans la manière de regarder.`,
    },
    archetype: {
      emoji: '🎬',
      title: 'INSPIRATIONS · NORD',
      body: `Cinéma : <em>Blade Runner 2049</em> — texture, mélancolie, neon, IA, humanité.
Musique : <em>Orelsan</em> — honnêteté brute, genre-blending, France sans complexe.
Littérature : <em>Man's Search for Meaning</em> (Frankl), <em>L'Étranger</em> (Camus).

Pas un moodboard. Un nord.`,
    },
    aesthetic: {
      emoji: '🌙',
      title: 'UNIVERS ESTHÉTIQUES',
      body: `Cyberpoétique · Dark Feminine · Brutalism UI · Liminal aesthetics · Futurisme mélancolique · Narration fragmentée.

Une grammaire visuelle, pas un moodboard.`,
    },
    confidential: {
      emoji: '🔓',
      title: 'PROJET À 5 ANS',
      body: `Construire une plateforme communautaire intelligente et profondément humaine. <strong>Pas un produit optimisé pour l'addiction algorithmique.</strong>

IA conversationnelle · accompagnement émotionnel · communauté · gamification · design avancé · logique d'entraide. Une plateforme qui ait une âme.`,
    },
  },

  // ============== FUN ==============
  jokes: [
    `Je suis le genre de personne qu'on croit avoir comprise trop vite. C'est voulu.`,
    `La différence entre un bon et un mauvais design ? 8px de padding. Chaque fois.`,
    `Je peux sentir qu'un brief est mauvais avant la fin de la première phrase. Instinct, pas magie.`,
    `J'ai déployé un agent IA en production en 2021. Avant que "AI assistant" soit un job title.`,
    `Je travaille vite. Inbox à zéro. Livrables en avance. Ce n'est pas de l'anxiété, c'est du respect du temps des autres.`,
    `"Pour demain matin." — Le brief. "Finalement on change tout." — Le lendemain.`,
  ],

  // ============== XP TIERS ==============
  tiers: [
    { min: 0,   max: 39,  key: 'visitor',    label: 'VISITOR' },
    { min: 40,  max: 99,  key: 'curious',    label: 'CURIOUS' },
    { min: 100, max: 189, key: 'interested', label: 'INTERESTED' },
    { min: 190, max: 999, key: 'hireme',     label: '★ HIRE ME ★' },
  ],

  // ============== GARY LINES ==============
  garyLines: [
    `Il approuve votre curiosité.`,
    `Le loup le plus stratégique de l'industrie digitale.`,
    `Il juge. Il ne dit rien. C'est suffisant.`,
    `Vous avez trouvé le code. Il s'en foutait de toute façon.`,
    `Curiosité validée. Pour cette fois.`,
  ],
};
