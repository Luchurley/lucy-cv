// ============================================================
// LUCY HURLEY · DATA — v3 · recruiter-friendly
// ============================================================

window.LUCY = {
  identity: {
    name: 'LUCY HURLEY',
    fullName: 'Lucy Maurice Hurley',
    tagline: 'UX · UI · DA · IA',
    role1: 'CREATIVE',
    role2: 'DIGITAL',
    role3: 'ARCHITECT',
    location: 'Wavrin (59) · Permis B',
    nationality: '🇫🇷🇬🇧 Franco-britannique · native',
    availability: '🟢 Open to work',
    age: '29 ans · Lille',
    languages: [
      { flag: '🇫🇷', name: 'Français', level: 'C2 · Natif' },
      { flag: '🇬🇧', name: 'English', level: 'C2 · Natif' },
      { flag: '🇪🇸', name: 'Español', level: 'B2 · Conv.' },
    ],
  },

  contact: {
    email: 'hurley.lucy@gmail.com',
    phone: '+33 6 79 86 87 49',
    linkedin: 'linkedin.com/in/luchurley',
    linkedinUrl: 'https://linkedin.com/in/luchurley',
  },

  manifesto: {
    short: `Pas le profil qu'on case facilement dans une case — et c'est exactement ce qui m'a rendue utile partout où je suis passée.`,
    full: `Formée, curieuse, obstinée quand il le faut. Je construis des interfaces comme je construis mes projets de vie : avec <strong>méthode, sensibilité et une vraie ligne directrice</strong>. UX/UI, direction artistique, motion, IA, gestion de projet — je conçois des expériences digitales de A à Z.`,
    closing: `Autodidacte par nature, transversale par instinct, sincère par choix. <strong>Inbox à zéro. Livrables en avance.</strong> Respect du temps des autres.`,
    signoff: `Un équilibre entre feu et méthode — créativité sans perdre le nord, exécution sans perdre l'âme.`,
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
      url: 'https://the-english-coach.webflow.io',
      challenge: `Construire un organisme de formation crédible et conforme Qualiopi, y intégrer un agent IA conversationnel — en 2021 — et concevoir l'ensemble des systèmes digitaux qui font tourner l'organisation.`,
      process: [
        { title: 'AUDIT & STRATÉGIE', text: `Cartographie des besoins apprenants, benchmark concurrentiel, identification des points de friction dans l'apprentissage de l'oral. Plan stratégique 360°.` },
        { title: 'BRANDING & SITE', text: `Identité complète, design system, supports de communication. Site Webflow construit de A à Z (the-english-coach.webflow.io).` },
        { title: 'IA CONVERSATIONNELLE', text: `Conception et déploiement d'un compagnon IA pour la pratique orale 24h/24. Prompt design, conversation UX, fallbacks pédagogiques. En production en 2021.` },
        { title: 'SYSTÈMES & AUTOMATISATION', text: `Configuration et optimisation du LMS, ERP et APIs diverses. Objectif : automatisation des flux, optimisation des fonctionnalités globales, amélioration des parcours produits et utilisateurs. Architecture CRM apprenants, dashboards KPIs, conformité Qualiopi, montage CPF / OPCO.` },
      ],
      result: `Plateforme en production. Audits Qualiopi passés. LMS, ERP et IA déployés. Design de systèmes digitaux complexes, de A à Z, en autonomie totale.`,
      skills: ['Direction Artistique', 'AI Product Design', 'Prompt Engineering', 'LMS · ERP · APIs', 'CRM Architecture', 'Qualiopi'],
      screenshots: ['assets/projects/tec-site-1.png', 'assets/projects/tec-site-2.png'],
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
      url: 'https://jaccede.com',
      challenge: `Refondre l'app mobile d'une association qui cartographie l'accessibilité des lieux pour les personnes à mobilité réduite — contributive, communautaire, et contrainte par les guidelines WCAG 2.1 AA stricts.`,
      process: [
        { title: 'RESEARCH', text: `Interviews PMR, audit a11y de l'existant, mapping des parcours utilisateurs critiques. Lecture éthnographique des usages réels.` },
        { title: 'DEFINE', text: `Personas, journey maps, design principles centrés mobilité réduite. Priorisation contre l'effort des contributeurs.` },
        { title: 'DESIGN', text: `Wireframes mobile-first, design system PMR-compatible, prototypes haute fidélité. Contrastes AAA partout, tap targets 48pt+.` },
        { title: 'TEST & ITERATE', text: `Usability testing avec utilisateurs réels, itérations sur les flows de contribution, validation a11y avec un PMR consultant.` },
      ],
      result: `Design system inclusif livré, prototypes haute fidélité validés. Sujet qui m'a marquée durablement : l'accessibilité, ce n'est pas un module à cocher, c'est une grammaire de pensée.`,
      skills: ['UX Research', 'A11y WCAG 2.1', 'Mobile-first', 'Design System', 'Usability Testing'],
      screenshots: ['assets/projects/jaccede-home.png', 'assets/projects/jaccede-map.jpg', 'assets/projects/jaccede-form.jpg', 'assets/projects/jaccede-desktop.jpg'],
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
      url: 'https://www.adhocmedia.fr/',
      challenge: `Suite à une sollicitation directe, contribution à la mise en place d'un site vitrine et d'un écosystème multisite privé/public — avec intégration d'une solution web-to-print développée avec Doowup et Darius.`,
      process: [
        { title: 'ÉCOSYSTÈME DIGITAL', text: `Coordination du déploiement des plateformes web, intégration de solutions digitales avec partenaires externes (Doowup, Darius), amélioration de la visibilité en ligne.` },
        { title: 'WEB-TO-PRINT', text: `Intégration d'une solution web-to-print sur mesure. Pont entre les outils de production print et les interfaces web — pour des capacités de services personnalisés.` },
        { title: 'QUALITÉ & LIVRAISON', text: `Recettes successives, validation UX, coordination des intervenants, vérification post-prod, amélioration de l'expérience client en ligne.` },
        { title: 'PRÉSENCE DIGITALE', text: `Optimisation des capacités de services personnalisés, amélioration de la présence digitale globale, cohérence éditoriale sur l'ensemble des supports.` },
      ],
      result: `Écosystème multisite livré, solution web-to-print intégrée. Coordination 360° entre partenaires techniques, direction et équipes internes.`,
      skills: ['Gestion de projet', 'Web-to-print', 'Pilotage Multi-Acteurs', 'Intégration digitale', 'Mise en Production'],
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
      url: 'https://wegoboard.com',
      challenge: `Concevoir l'expérience d'un e-commerce de mobilité électrique premium : pédagogie produit forte (autonomie, puissance, sécurité), pages techniques scannables, tunnel d'achat fluide.`,
      process: [
        { title: 'AUDIT', text: `Audit concurrentiel (Decathlon, Dott, Lime), benchmark UX des fiches produits techniques. Identification des points de friction dans la décision d'achat.` },
        { title: 'UX', text: `Architecture d'info, page d'accueil pédagogique, comparateur produits, fiches détaillées avec specs techniques accessibles aux non-initiés.` },
        { title: 'DA', text: `Identité visuelle dynamique, photographie produit dirigée, iconographie technique cohérente, mise en avant des partenariats médias (TF1, M6, RMC).` },
        { title: 'CONVERSION', text: `Optimisation du tunnel d'achat, intégration des aides à la décision (calculateur d'autonomie, comparateur), CTA contextuels.` },
      ],
      result: `Refonte livrée, parcours d'achat fluidifié, image de marque premium. Le projet m'a fait travailler à l'intersection technique × pédagogie × esthétique.`,
      skills: ['UX e-commerce', 'Direction Artistique', 'Fiches produits techniques', 'Conversion'],
      screenshots: ['assets/projects/wegoboard-mobility.png', 'assets/projects/wegoboard-products.png', 'assets/projects/wegoboard-wireframe.jpg', 'assets/projects/wegoboard-full.png'],
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
      screenshots: ['assets/projects/wegoboard-vitrine.png', 'assets/projects/products.png', 'assets/projects/services.png', 'assets/projects/tec-interface.png'],
    },
    {
      id: 'equality',
      name: 'Equality',
      shortName: 'Equality',
      year: '2021–2022',
      type: 'Freelance · Studiø Kaøs',
      role: 'UX/UI · Direction Artistique',
      context: 'App de paris e-sport · Onboarding gamifié · Login Discord/Twitch/Apple',
      tags: ['UX/UI', 'DA', 'E-SPORT'],
      categories: ['ux', 'da'],
      contract: ['freelance'],
      cover: 'equality',
      challenge: `Concevoir l'app de paris e-sport avec un parcours d'onboarding qui collecte les préférences utilisateurs sans friction — jeux favoris, équipes, joueurs suivis — pour personnaliser l'expérience dès le premier lancement.`,
      process: [
        { title: 'STRATÉGIE', text: `Architecture d'info centrée sur le matchmaking d'intérêts. Identification des frictions classiques sur les sign-up flows communautaires e-sport.` },
        { title: 'ONBOARDING', text: `Flow en 4 étapes : login rapide (Discord/Twitch/Apple/FB) → choix de jeux → équipes favorites → joueurs suivis. Progression visible, retour arrière permis.` },
        { title: 'UI', text: `Design system dark + accents jaune/rose, carousels horizontaux pour la découverte, toggles tactiles, indicateurs de progression discrets.` },
        { title: 'TEST', text: `Usability test sur le parcours sign-up : objectif sub-90s pour finir l'onboarding. Itérations sur les copies de boutons et le tone of voice.` },
      ],
      result: `Onboarding livré avec un taux d'abandon ramené sous la barre des concurrents observés. Le projet m'a fait travailler la psychologie de l'engagement initial dans un univers ultra-concurrentiel.`,
      skills: ['UX d\'onboarding', 'Mobile UI', 'Tone of Voice', 'Dark UI', 'E-sport'],
      screenshots: ['assets/projects/equality-splash.jpg', 'assets/projects/equality-login.jpg', 'assets/projects/equality-games.jpg', 'assets/projects/equality-teams.jpg'],
    },
    {
      id: 'cora',
      name: 'Cora · Recettes',
      shortName: 'Cora',
      year: '2022–2023',
      type: 'Freelance · Studiø Kaøs',
      role: 'UX/UI Designer',
      context: 'Concours en équipe · Site Cora · Module recettes & courses · Web + Mobile',
      tags: ['UX/UI', 'GROCERY'],
      categories: ['ux'],
      contract: ['freelance'],
      cover: 'cora',
      challenge: `Concevoir l'expérience d'un module recettes intégré au site e-commerce de l'hypermarché Cora : transformer une intention "qu'est-ce qu'on mange ?" en panier rempli, sans friction et sans pop-up agressif.`,
      process: [
        { title: 'RESEARCH', text: `Audit du tunnel courses existant, interviews utilisateurs sur les freins à la planification repas, benchmark des apps recettes (Marmiton, Hellofresh).` },
        { title: 'ARCHITECTURE', text: `Mapping du parcours recette → ingrédients → panier. Hiérarchisation : recette en grande page détaillée + carnet de recettes personnel + ajout direct au panier.` },
        { title: 'UI', text: `Fiches recettes claires : difficulté · durée · ingrédients · ustensiles · préparation pas-à-pas avec cases à cocher. Valeurs nutritionnelles, avis, suggestions.` },
        { title: 'CONVERSION', text: `CTA "Ajouter au panier" depuis chaque recette avec adaptation nombre de personnes. Recettes saisonnières mises en avant. Pictos de saisonnalité.` },
      ],
      result: `Projet livré en équipe dans le cadre d'un concours. Flow recette→panier ultra-fluide. Une expérience de collaboration créative en conditions réelles.`,
      skills: ['UX e-commerce', 'Information architecture', 'Web + Mobile', 'Conversion'],
      screenshots: ['assets/projects/cora-detail-1.jpg', 'assets/projects/cora-detail-2.jpg'],
    },
    {
      id: 'disrupted',
      name: 'Disrupted',
      shortName: 'Disrupted',
      year: '2020–2021',
      type: 'Fondatrice',
      role: 'Fondatrice · Direction Artistique',
      context: 'Marque capsule unisexe · Harnais vegan · Mode alternative · E-commerce indépendant',
      tags: ['BRAND', 'DA', 'MODE'],
      categories: ['da'],
      contract: ['founder'],
      cover: 'disrupted',
      challenge: `Créer une marque capsule unisexe vegan, sans capital, sans audience. Construire l'univers, le produit et le canal de A à Z en autonomie complète.`,
      process: [
        { title: 'CONCEPT', text: `Nom intentionnellement ambigu — Disrupted. Le mot porte la dualité : fragmenté et disruptif à la fois. Univers : mode alternative assumée, matériaux vegan, esthétique radicale.` },
        { title: 'DA & PRODUITS', text: `Direction artistique complète, sourcing matériaux vegan et éthiques, shootings réels, lookbooks, identité visuelle radicale.` },
        { title: 'E-COMMERCE', text: `Boutique en ligne, communication digitale, content social. Une boucle complète DA → produit → vente → SAV.` },
        { title: 'LIVRAISON', text: `Production en petite série, shootings réels, lookbooks photographiés, univers visuel cohérent de bout en bout.` },
      ],
      result: `Projet entièrement déployé, collection sold-out. Laboratoire créatif fondateur dans mon parcours : m'a appris à porter une vision entière, sans filet, sans intermédiaire.`,
      skills: ['Branding', 'Direction Artistique', 'Sourcing éthique', 'E-commerce', 'Production'],
      screenshots: [],
      videos: [
        'assets/disrupted/disrupted-1.mp4',
        'assets/disrupted/disrupted-2.mp4',
        'assets/disrupted/disrupted-3.mp4',
        'assets/disrupted/disrupted-4.mp4',
      ],
    },
  ],

  // ============== PARCOURS COMPLET ==============
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
      body: `Suite à une sollicitation directe, contribution à la mise en place du site vitrine <strong>adhocmedia.fr</strong> et d'un écosystème multisite privé/public. Intégration d'une solution web-to-print avec partenaires externes (Doowup, Darius).

Coordination du déploiement des plateformes, intégration de solutions digitales, amélioration de la visibilité en ligne et de l'expérience client.`,
      chips: ['Gestion de projet', 'Web-to-print', 'Coordination', 'Intégration digitale', 'Mise en production'],
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

Clients principaux : secteur éducatif, fintech, expérience immersive, communautés e-sport. Projets variés qui ont musclé l'agilité créative et la capacité à entrer vite dans un sujet.

Parmi les projets marquants : <strong>conception et structuration d'un jeu grandeur nature</strong> type murder mystery / escape game — idéation, gameplay, narration et architecture des règles.`,
      chips: ['Wireframing', 'Design Thinking', 'Usability Testing', 'Product Design', 'Motion Design', 'UX Research'],
    },
    {
      role: 'Fondatrice · Direction Artistique',
      company: 'Disrupted',
      period: 'Juin 2020 — Juin 2021',
      type: 'Fondatrice',
      color: 'tertiary',
      summary: `Marque capsule unisexe vegan. Univers visuel cohérent, livraison de bout en bout.`,
      body: `Marque indépendante créée from scratch pendant le COVID. Direction artistique complète, sourcing matériaux vegan, shootings, lookbooks, identité visuelle radicale.

Collection sold-out en intégralité. Le projet m'a appris à porter un univers de bout en bout sans intermédiaire — et à assumer une posture créative entière.`,
      chips: ['Branding', 'DA complète', 'Mode éthique', 'E-commerce', 'Shooting'],
    },
    {
      role: 'Conseillère Sanitaire COVID',
      company: 'Plateforme nationale',
      period: '2020',
      type: 'CDD · Crise',
      color: 'secondary',
      summary: `Confrontation aux réalités concrètes et aux problématiques complexes. Pragmatisme face à la crise.`,
      body: `Capacité à se confronter aux réalités concrètes et aux problématiques complexes, avec une orientation forte vers la recherche de solutions pragmatiques.

Ce passage illustre une motivation profonde : l'UX et le design comme outils de résolution de problèmes réels — pas seulement esthétiques. Ce qui m'a amenée au digital, c'est l'envie de concevoir des interfaces qui répondent à de vrais besoins humains.`,
      chips: ['Pragmatisme', 'Résolution de problèmes', 'Empathie appliquée'],
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
      company: 'Tommy Bahama · Sydney 🌊 Australie',
      period: 'Juin 2018 — Mai 2019',
      type: 'CDI',
      color: 'tertiary',
      summary: `Thaïlande puis Australie — deux étapes décisives. Merchandising sur plusieurs stores Sydney, responsabilité du store de Bondi.`,
      body: `Après un passage marquant en Thaïlande — pays auquel je me suis fortement attachée et où j'avais envisagé de rester — je pars en Australie à 21 ans.

Intégration dans les équipes Tommy Bahama (marque premium américaine établie) : merchandising sur plusieurs stores à Manly Beach et Sydney, déplacements ponctuels pour recommandations merchandising, responsabilité progressive du store de Bondi Beach. Environnement 100% anglophone, clientèle internationale, maintien de l'image premium de la marque.

Une aventure collective dans un cadre exigeant — KPIs, reporting, formation équipe, fidélisation client.`,
      chips: ['Merchandising', 'Management d\'équipe', 'Retail premium', 'Manly · Bondi · Sydney'],
    },
    {
      role: 'Designer Freelance',
      company: 'Multi-clients',
      period: '2018',
      type: 'Freelance',
      color: 'ink',
      summary: `Premier travail de design pro — point d'origine de la carrière créative.`,
      body: `Stratégie communication, conception visuelle, typographie, publicité, direction artistique pour clients variés. Le basculement officiel vers le design.`,
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
      body: `Le grand saut numéro 1. Volume, rythme, environnement anglophone total. Première brique de l'autonomie qui m'a portée jusqu'à Bondi Beach et au-delà.`,
      chips: ['English', 'Volume', 'Service'],
    },
  ],

  formation: [
    { period: '2021–2022', title: 'Certificat UX/UI Design', school: 'Webstart · Lille', mention: 'Mention', color: 'primary' },
    { period: '2015–2018', title: 'Licence Marketing & Communication Stratégique', school: 'ESMOD International · Roubaix', mention: 'Mode + Business', color: 'tertiary' },
    { period: '2013–2015', title: 'Bac Prospection, Négociation & Suivi Clientèle', school: 'Écoles Nantaises de Commerce', mention: '', color: 'secondary' },
    { period: '2011–2013', title: 'BEP Production Graphique & Imprimée', school: 'La Joliverie · Nantes', mention: 'Origines art graphique', color: 'ink' },
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
    travels: {
      emoji: '🌊',
      title: 'VOYAGES · 18 PAYS',
      body: `🇫🇷 France · 🇬🇧 Angleterre · 🏴󠁧󠁢󠁳󠁣󠁴󠁿 Écosse · 🇯🇪 Jersey · 🇧🇪 Belgique · 🇳🇱 Pays-Bas · 🇨🇭 Suisse · 🇪🇸 Espagne · 🇮🇨 Canaries · 🇵🇹 Portugal · 🇮🇹 Italie · 🇬🇷 Grèce · 🇹🇷 Turquie · 🇺🇸 Miami · 🇱🇰 Sri Lanka · 🇹🇭 Thaïlande · 🇲🇾 Malaisie · 🇦🇺 Australie

+ à venir ✈️ — Pas du tourisme. Des chapitres.`,
    },
    archetype: {
      emoji: '🎬',
      title: 'INSPIRATIONS · NORD',
      body: `<strong>Studio Ghibli</strong> comme référence centrale — des univers où le vivant, la complexité humaine et la poésie du réel coexistent sans simplification. Une attention particulière aux récits sensibles, aux mondes en tension et aux personnages profondément incarnés.

<strong>Culture du réel et du documentaire</strong> (ARTE, enquêtes, Hugo Clément) — intérêt fort pour les systèmes sociaux, les dynamiques humaines et ce qui se joue derrière les apparences.

<strong>Pensée et littérature</strong> (Zola, Camus, Frankl) — attrait pour des récits lucides, structurés, qui interrogent le sens, les déterminismes et la condition humaine.

<strong>Univers artistiques à forte intensité émotionnelle</strong> (Orelsan, Delilah Bon, Die Antwoord) — entre narration sociale, introspection et expression brute.

Lecture du monde à la fois sensible et analytique, guidée par le vivant, la vérité et une direction artistique adaptative centrée sur le sens.`,
    },
    aesthetic: {
      emoji: '🎨',
      title: 'DIRECTION ARTISTIQUE',
      body: `Direction artistique adaptative et contextuelle — entre réalisme brut, poésie visuelle et narration émotionnelle. Un langage visuel qui évolue avec le projet sans perdre son identité propre.

<strong>DA adaptative · narrative · émotionnelle.</strong> Chaque projet a son univers, chaque univers a sa logique. Ce qui reste constant : rigueur typographique, cohérence système, et l'intuition qu'un bon design se sent avant d'être lu.`,
    },
    confidential: {
      emoji: '🔓',
      title: 'PROJET PERSONNEL',
      body: `Un projet en cours, au croisement du <strong>design d'impact</strong>, de l'accessibilité et de l'engagement pour les femmes. FemTech · UX inclusif · IA.

Une sensibilité aux problématiques sociales concrètes, et l'envie de concevoir des outils qui répondent à de vrais besoins — associatifs, humains, structurels.`,
    },
  },

  // ============== FUN FACTS (débloqués via easter eggs) ==============
  funFacts: [
    { id: 'paw',        emoji: '🚲', title: 'GARY EN CHARRETTE',      text: `Se déplace en vélo électrique avec une charrette pour Gary. L'éthique appliquée au quotidien.` },
    { id: 'konami',     emoji: '🐺', title: 'GARY',                   text: `Gary est un Samoyède. Il a sa propre charrette-vélo. Il approuve rarement. Il juge en permanence.` },
    { id: 'logo',       emoji: '🏠', title: 'ARCHITECTE D\'INTÉRIEUR', text: `A conçu seule les plans 2D & 3D de sa rénovation maison. Apprendre vite, c'est sa méthode.` },
    { id: 'curious',    emoji: '🤖', title: 'AGENT BUILDER',           text: `Participe à des concours IA et construit des agents chez Cantina — au-delà de son activité principale.` },
    { id: 'interested', emoji: '🌀', title: 'GRANDE AVENTURIÈRE',      text: `Dit oui à tout — sport, voyage, défi technique, nouveau langage. Si c'est nouveau, ça l'intéresse.` },
    { id: 'hireme',     emoji: '📖', title: 'AUTODIDACTE',             text: `Curieuse de nature. Apprend, se cultive, comprend. Les idées qui élargissent le champ l'attirent autant que les bons designs.` },
  ],

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
    `Il approuve votre curiosité. Pour cette fois.`,
    `Il juge. Il ne dit rien. C'est suffisant.`,
    `Vous avez trouvé le code. Il s'en foutait de toute façon.`,
    `Curiosité validée. Gary est impressionné — mais ne le dira jamais.`,
    `Un Samoyède stratégique dans ton portfolio. Tu l'as mérité.`,
  ],
};
