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
      featured: true,
      name: 'The English Coach',
      shortName: 'TEC',
      year: '2021–2023',
      type: 'CDI · Head of Digital Design',
      role: 'Head of Digital Design — stratégie, UX/UI, IA, ops, marketing, management',
      context: 'Organisme de formation en anglais professionnel · Cible B2B corporate · Coachs 100% natifs anglophones · Positionnement premium',
      tags: ['IA', 'UX/UI', 'STRAT.', 'CRM', 'MOTION', 'WEBFLOW'],
      categories: ['ia', 'ux', 'strat'],
      contract: ['cdi'],
      cover: 'tec',
      url: 'https://the-english-coach.webflow.io',
      tagline: `De zéro à un système digital complet — site, tunnel de conversion et agent IA conversationnel.`,
      brief: `The English Coach est une école de formation en anglais professionnel fondée et dirigée par des natives anglophones. Pas des formateurs certifiés — des natifs américains, britanniques, australiens qui transmettent la langue et les codes culturels du monde des affaires selon la destination du client.\n\nUn dirigeant qui part en voyage d'affaires à New York est coaché par un Américain. Un commercial qui négocie à Londres travaille avec un Britannique. L'anglais appris est celui qui est réellement utile.\n\nMission : construire de zéro une présence digitale à la hauteur de cette promesse premium.`,
      challenge: `Faire percevoir une marque inconnue comme plus légitime que des acteurs institutionnels (Berlitz, Wall Street English) — avec pour seul capital : une promesse produit supérieure et un design irréprochable. La cible est corporate, peu digitale. Elle juge d'abord par l'apparence avant d'écouter l'argument.`,
      process: [
        { title: 'STRATÉGIE & POSITIONNEMENT', text: `Benchmark du marché (Berlitz, Wall Street English, OF locaux), analyse de la cible corporate B2B, définition du positionnement "natifs par destination". Construction de l'architecture de marque de zéro — identité, ton, promesse.` },
        { title: 'UX/UI & WEBFLOW', text: `Site vitrine + tunnel de conversion conçu pour des décideurs peu digitaux : signaux de premium, réassurance corporate, hiérarchie des informations CPF/OPCO. Développement complet sur Webflow avec CMS, interactions, animations, SEO on-page.` },
        { title: 'AGENT IA BRIAN', text: `Conception et déploiement d'un agent conversationnel custom en 2021 — avant que "AI assistant" soit un job title. UX Personality Profile complet, onboarding par centres d'intérêt, corpus éditorial de 200+ contenus rédigés à la main. Prompt engineering par couches : identité, pédagogie, contenu, contraintes.` },
        { title: 'MOTION DESIGN', text: `Animation de lancement "Brian Launching" entièrement dessinée et animée à la main (Illustrator + After Effects). Décor de session Brian conçu pour ancrer l'agent dans un univers chaleureux — intérieur cosy bleu nuit, illustré frame by frame.` },
        { title: 'OPS & AUTOMATISATION', text: `Configuration complète de Dendreo (ERP formation) sur outil vierge, pour 5 profils utilisateurs distincts. 3 flux Zapier interconnectés : Calendly → Zoom (création lien) → Dendreo (inscription + suivi présence). Zéro saisie manuelle.` },
        { title: 'MARKETING & MANAGEMENT', text: `Stratégie digitale complète : réseaux sociaux (LinkedIn, Instagram, Facebook, YouTube), blog SEO, campagnes email, salons professionnels, partenariats B2B. Management de 2-3 apprentis. Budget webmarketing, KPIs, reporting.` },
      ],
      brianSection: {
        naming: `L'agent s'appelle Brian. "Brian is in the kitchen" — la phrase la plus connue de toute une génération française. Pour une cible corporate de 35-60 ans, ce nom déclenche une reconnaissance immédiate. Un signal de connivence qui fait tomber la barrière avant même que la conversation commence.`,
        onboarding: `L'apprenant déclare ses centres d'intérêt en onboarding. Ces préférences servent directement à personnaliser le contenu de Brian — blagues calibrées par niveau lexical, fun facts selon les intérêts déclarés, phrasal verbs en contexte. Personnalisation progressive (pattern Duolingo/Netflix) appliqué à la formation B2B corporate.`,
        personality: `UX Personality Profile en 5 dimensions : Ton & Voix (motivant mais ancré, witty, direct), Communication (phrases courtes, citations + commentary, toujours une next step), Intelligence émotionnelle (détecte les difficultés, bascule vers le soutien), Traits (fiable, optimiste réaliste, patient), Interaction (proactif sans être intrusif).`,
        corpus: `200+ contenus éditoriaux rédigés à la main : Fun Facts ×5 séries thématiques, blagues interactives format QCM, traditions étranges commentées, 30+ citations motivationnelles avec commentary Brian, microcopy UI complète, expressions de transition (phrasal verbs), polls gamifiés ×10 catégories, scripts d'onboarding complets.`,
        prompt: `Prompt engineering par couches — 1. Identité (nom, personnalité, ton, limites) · 2. Pédagogie (corriger sans décourager) · 3. Contenu (corpus éditorial comme ressource contextuelle) · 4. Contraintes (Brian ne parle pas français sauf exception définie).`,
        bgGif: 'assets/motion/brian-bg.gif',
        videos: [
          { src: 'assets/videos/brian-demo-blagues.mp4', label: 'Blagues interactives — choix de la chute' },
          { src: 'assets/videos/brian-demo-jokes.mp4', label: 'Dad jokes — contenu personnalisé' },
          { src: 'assets/videos/brian-demo-articles.mp4', label: 'Articles — lecture en contexte' },
        ],
        motionSrc: 'assets/videos/brian-launch.mp4',
      },
      missionComplete: {
        strategic: [
          `Définition de la vision expérience client omnicanale`,
          `Benchmark et veille active UX/UI`,
          `Planification de tous les projets UX/UI`,
          `Gestion du budget webmarketing (SEO, SEA, CRM, partenariats)`,
          `Définition des KPIs et outils de reporting`,
          `Management des agences et régies prestataires`,
          `Suivi de la qualité des parcours et cohérence des canaux`,
        ],
        ops: {
          dendreo: `Configuration complète de Dendreo sur outil vierge pour 5 profils : employés, commerciaux, coachs, élèves, administratif.`,
          zapier: `3 flux interconnectés : Calendly → Zoom (création auto lien session) → Dendreo (inscription + suivi présence). Zéro saisie manuelle.`,
          tools: ['Dendreo', 'Zapier', 'Calendly', 'Zoom'],
        },
        graphic: {
          text: `Identité visuelle complète déclinée sur tous supports physiques et audiovisuels.`,
          items: ['Flyers événements A5/A6', 'Stands & roll-ups grand format', 'Goodies (stylos, totebags, cartes)', 'Motion design réseaux sociaux'],
          tools: ['Adobe Illustrator', 'InDesign', 'After Effects', 'Figma'],
          videos: [
            { src: 'assets/videos/tec-social-padawan.mp4', label: 'Motion réseaux — Meet our Padawan' },
            { src: 'assets/videos/tec-salon-flyer.mp4', label: 'Salon — présentation flyer' },
            { src: 'assets/videos/tec-salon-print.mp4', label: 'Salon — supports print' },
          ],
        },
        marketing: {
          text: `Pilotage de la stratégie marketing dans son ensemble.`,
          items: ['Salons professionnels B2B', 'Partenariats entreprises locales/régionales', 'Blog SEO (articles RH, formation, OPCO)', 'Campagnes email (onboarding, relances, newsletters)'],
          platforms: ['LinkedIn', 'Instagram', 'Facebook', 'YouTube'],
        },
        management: {
          text: `Management opérationnel de 2-3 apprentis sur design, contenu, réseaux.`,
          items: ['Briefing et suivi livrables hebdomadaires', 'Relecture et validation avant publication', 'Formation aux outils (Webflow, Figma, Dendreo)', 'Planning livrables via Notion'],
        },
      },
      hasTabs: true,
      tabLabels: ['Case Study', 'Mission Complète'],
      result: `Plateforme en production. Site Webflow livré. Agent Brian déployé dès 2021. Dendreo configuré pour 5 profils. 3 flux Zapier actifs. 200+ contenus éditoriaux créés. Audits Qualiopi passés. Système digital complet conçu et opéré en autonomie totale sur 2 ans.`,
      skills: ['Head of Digital Design', 'AI Product Design', 'Prompt Engineering', 'Conversation Design', 'Webflow', 'Motion Design (AI + AE)', 'LMS · ERP · Dendreo', 'Zapier Automation', 'CRM Architecture', 'Budget Webmarketing', 'Management'],
      screenshots: ['assets/projects/tec-desktop.png', 'assets/projects/tec-mobile.png', 'assets/projects/tec-site-1.png', 'assets/projects/tec-site-2.png'],
    },
    {
      id: 'jaccede',
      featured: true,
      name: 'Jaccède.com',
      shortName: 'Jaccède',
      year: '2021–2022',
      type: 'Collaboration bénévole · Asso loi 1901',
      role: 'UX/UI Designer — refonte complète desktop + mobile',
      context: 'Association loi 1901 · Cartographie accessibilité PMR · App contributive · Gamification',
      tags: ['UX/UI', 'A11Y', 'AUDIT UX', 'DESIGN SYSTEM'],
      categories: ['ux'],
      contract: ['freelance'],
      cover: 'jaccede',
      url: 'https://jaccede.com',
      tagline: `Refonte UX/UI d'une plateforme d'accessibilité — concevoir l'inclusion pour ceux qui la vivent et ceux qui la construisent.`,
      brief: `Jaccède est une association loi 1901 dont la mission est d'encourager les personnes à mobilité réduite à réinvestir l'espace public — en cartographiant les lieux accessibles.\n\nProjet bénévole. Pas de budget, pas de brief formel. Juste une conviction : une plateforme dédiée à l'accessibilité se doit d'être elle-même exemplaire en matière d'UX.`,
      paradox: `Jaccède s'adresse simultanément à deux profils inséparables : les utilisateurs finaux (personnes en situation de handicap — chaque friction est une barrière réelle) et les contributeurs bénévoles (qui ajoutent des fiches lieux — si le formulaire est trop long, ils abandonnent). Concevoir une expérience qui soit à la fois accessible pour les plus vulnérables et engageante pour les plus actifs.`,
      uxAudit: {
        methodology: `Audit double axe : Sévérité (S0 pas un problème → S4 catastrophe) × Facilité de correction (E0 super simple → E4 effort extrême). Chaque finding scoré pour une priorisation objective.`,
        research: `Deux arbres de décision pour mapper les deux profils et leurs parcours réels.`,
        findings: [
          { severity: 'S3', ease: 'E2', label: 'Boutons Apply/Accessibility filters visuellement identiques — fonctions opposées' },
          { severity: 'S4', ease: 'E2', label: "Attributs ARIA manquants — lecteurs d'écran bloqués" },
          { severity: 'S3', ease: 'E1', label: 'Couleurs légende ne passent pas WCAG AA' },
          { severity: 'S3', ease: 'E2', label: 'Navigation non accessible au clavier' },
          { severity: 'S2', ease: 'E3', label: 'Formulaire "Ajouter un lieu" — 8 critères sans guidance progressive' },
          { severity: 'S2', ease: 'E1', label: 'Photos fiches lieux sans lien avec les tags affichés' },
          { severity: 'S1', ease: 'E1', label: 'Légende carte non différenciée — icônes sans hiérarchie visuelle' },
        ],
      },
      challenge: `Refondre l'interface d'une association qui cartographie l'accessibilité des lieux pour les personnes à mobilité réduite — double cible, double contrainte : accessible ET engageant.`,
      process: [
        { title: 'UX RESEARCH', text: `Arbres de décision pour mapper les deux profils. Audit ARIA + analyse contraste WCAG. 7 findings documentés et priorisés sur grille Sévérité × Effort.` },
        { title: 'ARCHITECTURE & UX', text: `Navigation restructurée autour des deux parcours principaux. Barre mobile 5 entrées iconiques avec labels. Filtres de mobilité accessibles en 1 tap depuis la carte. Formulaire "Ajouter un lieu" en chunking progressif.` },
        { title: 'DESIGN SYSTEM', text: `Identité Jaccède conservée et revisitée pour l'accessibilité — valeurs de couleur ajustées pour atteindre WCAG AA. Système d'icônes custom pour les catégories et types de handicap.` },
        { title: 'MOTION DESIGN', text: `Animations fonctionnelles : transitions carte, feedback formulaire, micro-interactions gamification. Respect du paramètre "Réduire les animations" — fallback statique pour chaque animation.` },
      ],
      result: `Design system inclusif complet livré. Maquettes desktop + mobile haute fidélité. UX Audit formalisé avec 7 findings prioritarisés. Motion design sur les interactions clés.`,
      skills: ['UX Research', 'UX Audit · S/E Grid', 'A11y WCAG 2.1 AA', 'ARIA', 'Mobile-first', 'Design System', 'Motion Design', 'Gamification UX'],
      screenshots: [
        'assets/projects/jaccede-home.png', 'assets/projects/jaccede-home-1.png',
        'assets/projects/jaccede-home-2.png', 'assets/projects/jaccede-home-3.png',
        'assets/projects/jaccede-desktop.jpg', 'assets/projects/jaccede-map.jpg',
        'assets/projects/jaccede-wireframe-desktop.jpg', 'assets/projects/jaccede-wireframe-mobile.jpg',
        'assets/projects/jaccede-ui-icons.jpg', 'assets/projects/jaccede-audit-explore.jpg',
        'assets/projects/jaccede-audit-accessibility.jpg', 'assets/projects/jaccede-research-trees.jpg',
      ],
      motionVideo: 'assets/videos/jaccede-motion.mp4',
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
      featured: true,
      name: 'Wegoboard',
      shortName: 'Wegoboard',
      year: '2023–2024',
      type: 'Projet formation · UX/UI · DA',
      role: 'UX/UI · Direction Artistique · Audit & Refonte',
      context: 'E-commerce de mobilité électrique premium · Trottinettes & vélos · B2C · Made in France',
      tags: ['UX/UI', 'DA', 'AUDIT', 'E-COM'],
      categories: ['ux', 'da'],
      contract: ['freelance'],
      cover: 'wegoboard',
      url: 'https://wegoboard.com',
      tagline: `Refonte e-commerce — quand trop de marketing tue la conversion.`,
      brief: `Wegoboard est un e-commerce de trottinettes électriques premium, français. +130% de ventes dans la catégorie depuis 2017, 68% du marché micro-mobilité.\n\nLe site existant avait un problème fondamental : il essayait trop fort. Réassurance répétée 3x, banner intrusive, navigation fourre-tout. Chaque élément avait une logique — l'ensemble créait un chaos visuel qui bloquait la décision d'achat.`,
      siteAudit: {
        positive: [
          "Structure globale du haut de page — repères faciles",
          "Call back comme levier d'acquisition",
          "Présence des avis clients",
          "Footer bien structuré",
          "FAQ/SEO pertinente pour le référencement",
        ],
        friction: [
          "Arguments marketing répétés 3x (effet inverse)",
          "Banner trop intrusive et perturbante",
          "Call back graphiquement détonant",
          "Trop de produits simultanés, prix mal mis en avant",
          "Navigation : mélange catégories + liens fourre-tout",
          "Boutiques physiques enfouies en footer",
          "Specs techniques absentes des tuiles produit",
        ],
      },
      challenge: `Appliquer les lois de Hick, Miller et Von Restorff à un e-commerce qui souffre d'un excès de stimulation marketing. Chaque page doit avoir une mission principale.`,
      process: [
        { title: 'AUDIT & BENCHMARK', text: `Analyse page par page avec grille positif/friction. Benchmark : Apollo Scooters, Rivian, Cowboy, Razor, Deus Customs. Pige inspirationnelle : Haut de gamme · Made in France · Glisse · Tech. Distinction clé : luxe ≠ premium.` },
        { title: 'STRATÉGIE UX', text: `Loi de Hick (réduire signaux simultanés), Miller (max 7 unités par zone), Von Restorff (1 élément mis en avant par écran). Principe directeur : moins de bruit, plus de signal.` },
        { title: 'HOMEPAGE & NAVIGATION', text: `Suppression de la banner intrusive. 1 ligne produits avec scroll horizontal. Specs techniques visibles sur les tuiles. Boutiques dans la page. Section médias réduite avec logos monochrome.` },
        { title: 'QUIZ DE RECOMMANDATION', text: `Quiz 4-5 questions → sélection personnalisée de 3 modèles max. Loi de Hick positive : réduire le choix apparent pour faciliter la décision réelle.` },
      ],
      result: `Refonte complète desktop. Diagnostic documenté avec 7 points de friction. Benchmark 4 références. Quiz de recommandation. Architecture navigation restructurée. Before/after documenté.`,
      skills: ['UX Audit', 'Benchmark', 'Loi de Hick · Miller · Von Restorff', 'E-commerce UX', 'Direction Artistique', 'Quiz UX'],
      screenshots: [
        'assets/projects/wegoboard-vitrine.png', 'assets/projects/wegoboard-products.png',
        'assets/projects/wegoboard-services.png', 'assets/projects/wegoboard-interface.png',
        'assets/projects/wegoboard-wireframe.jpg',
      ],
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
      featured: true,
      name: 'Equality',
      shortName: 'Equality',
      year: '2021–2022',
      type: 'Projet formation · 8h · Branding from scratch',
      role: 'UI Designer · Branding · Direction Artistique',
      context: 'App de paris e-sport · Onboarding gamifié · Identité visuelle from scratch',
      tags: ['UI', 'DA', 'BRANDING', 'E-SPORT'],
      categories: ['ux', 'da'],
      contract: ['freelance'],
      cover: 'equality',
      tagline: `De wireframes à main levée à une identité dark gaming — créer une app de paris esport en 8h.`,
      brief: `Brief de formation : des wireframes à main levée posant la structure fonctionnelle d'une app de paris sportifs dans l'univers de l'esport. Pas de charte, pas de logo, pas d'identité — juste une architecture esquissée sur papier.\n\nMission : tout construire par-dessus en 8 heures.`,
      marketContext: `L'esport attire un public 18-35 ans natif du digital. Une app de paris qui ressemble aux sites classiques n'a aucune crédibilité dans cet univers. Positionnement retenu : dark, premium, tension — l'univers des grands tournois, pas un jeu, un sport.`,
      identity: {
        naming: `"Equality" porte une double lecture : l'égalité des chances au départ d'un match, et l'équilibre des cotes. Un nom rare dans un secteur dominé par des noms agressifs.`,
        logo: `Forme géométrique forte — bouclier/symétrie/écusson esport. Déclinable en version complète + icône standalone.`,
        palette: [
          { name: 'Background', hex: '#0D1B2A', role: "L'arène" },
          { name: 'Or', hex: '#F5A623', role: 'Premium · victoire' },
          { name: 'Rouge', hex: '#E53935', role: 'Défaite' },
          { name: 'Vert', hex: '#43A047', role: 'Victoire' },
          { name: 'Blanc', hex: '#FFFFFF', role: 'Texte principal' },
        ],
        typography: `Sans-serif condensed bold pour titres et scores (impact immédiat) + sans-serif regular pour corps et labels (cotes, horaires, stats).`,
      },
      challenge: `Créer une identité visuelle complète et un système UI cohérent en 8h, à partir de wireframes à main levée.`,
      process: [
        { title: 'BRIEF → CONCEPT', text: `Wireframes à main levée comme seule base. Positionnement en 30 minutes : dark, premium, tension. Chaque décision découle de ce choix.` },
        { title: 'IDENTITÉ VISUELLE', text: `Logo from scratch : bouclier/écusson/symétrie, icon standalone. Palette dark navy + or + états rouge/vert. Système typographique condensed bold + regular.` },
        { title: 'ONBOARDING', text: `5 écrans : splash, connexion Discord/Twitch/Google/Apple/Facebook, sélection jeux par genre, équipes favorites, joueurs. Hick's Law : 1 question par étape.` },
        { title: 'ÉCRAN PRINCIPAL', text: `Dashboard : Header (salutation + sélecteur jeu), section "Mes équipes" (live en premier avec score temps réel), "À venir", "Mes joueurs" (K/D/A). Hiérarchie : live > à venir > passé.` },
      ],
      result: `Logo complet, charte graphique, système UI dark gaming, onboarding 5 écrans, écran principal avec états. Livré en 8h. Cohérence visuelle totale malgré la contrainte temps.`,
      skills: ["Branding from scratch", 'Logo Design', 'Dark UI', 'Onboarding UX', "Hick's Law", 'Gaming Design System', 'Direction Artistique'],
      screenshots: [
        'assets/projects/equality-splash.jpg', 'assets/projects/equality-login.jpg',
        'assets/projects/equality-games.jpg', 'assets/projects/equality-teams.jpg',
        'assets/projects/equality-players.jpg', 'assets/projects/equality-mobile-screens.png',
      ],
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
    {
      id: 'lacopain',
      name: 'La Copain',
      shortName: 'La Copain',
      year: '2024',
      type: 'Freelance · DA · Web',
      role: 'Direction artistique · Développement Webflow',
      context: 'Site one-page pour une marque de bière artisanale · Design immersif et identité de marque forte',
      tags: ['DA', 'WEBFLOW', 'BRANDING'],
      categories: ['da'],
      contract: ['freelance'],
      cover: null,
      url: 'https://lacopain.fr',
      tagline: 'One-page site bière artisanale — identité visuelle complète.',
      brief: `La Copain est une bière artisanale avec une identité forte. Mission : one-page site Webflow qui incarne cette identité — immersif, authentique, mémorable.`,
      challenge: `Traduire une identité de marque chaleureuse et artisanale en expérience digitale sans tomber dans les clichés du secteur brassicole.`,
      process: [
        { title: 'DIRECTION ARTISTIQUE', text: `Identité visuelle complète : palette, typographie, ton. Univers graphique cohérent de la marque à l'écran.` },
        { title: 'WEBFLOW', text: `Développement one-page avec animations de scroll, interactions fluides, optimisation mobile.` },
      ],
      result: `Site one-page livré en production. Identité visuelle complète. Animations Webflow sur mesure.`,
      skills: ['Direction Artistique', 'Webflow', 'Branding', 'One-page'],
      screenshots: [],
      isNew: true,
    },
  ],

  // ============== PLAYGROUND ==============
  playground: [
    {
      id: 'ikea-muertos',
      title: 'IKEA × Día de los Muertos',
      type: 'Page thématique · Exercice de style · 2h',
      desc: `Page événementielle pour IKEA autour du Día de los Muertos — en respectant l'identité de la marque tout en l'emmenant dans un territoire qu'elle n'occupe pas d'habitude.`,
      note: `IKEA a des règles visuelles très strictes — la liberté créative se joue dans les marges.`,
      tags: ['UI', 'Branding', '2h'],
      cover: null,
    },
    {
      id: 'squidgame-ui',
      title: 'Squid Game UI Concept',
      type: 'Concept UI · Exploration neumorphism',
      desc: `Exercice pour m'approprier le neumorphism — ombres portées, relief sur fond uniforme. L'univers Squid Game s'y prêtait : tension, règles, hiérarchie stricte.`,
      note: `Le neumorphism est séduisant en théorie, exigeant en pratique — les contrastes faibles créent de vraies tensions avec l'accessibilité.`,
      tags: ['UI', 'Neumorphism', 'Concept'],
      cover: null,
    },
    {
      id: 'teen-bank',
      title: 'Teen Bank — Youngo',
      type: 'Projet école · Direction artistique',
      desc: `Banque mobile pour les 12-17 ans. Rendre un produit financier engageant et rassurant pour des ados, sans tomber dans le condescendant.`,
      note: `Concevoir pour des mineurs impose une responsabilité particulière — clarté absolue, zéro dark pattern.`,
      tags: ['UI', 'Fintech', 'DA'],
      cover: 'assets/projects/teen-bank.png',
    },
    {
      id: 'mariage',
      title: 'Save the date — Claire & Maxime',
      type: 'Projet personnel · Webflow',
      desc: `Site d'invitation + RSVP fonctionnel pour le mariage de ma sœur. Le brief le plus personnel qui soit : zéro droit à l'erreur sur l'émotion.`,
      note: `Cible multigénérationnelle (grands-parents inclus) → simplicité radicale obligatoire.`,
      tags: ['Webflow', 'UI', 'Perso'],
      cover: 'assets/projects/mariage-save-the-date.jpg',
      url: 'https://claire-maxime.webflow.io/',
    },
    {
      id: 'lacopain-play',
      title: 'Lacopain — Bière artisanale',
      type: 'Projet client · Webflow',
      desc: `Site vitrine pour Lacopain, une bière artisanale imaginée par 12 amis. Identité visuelle joyeuse et décalée, univers "copain" assumé.`,
      note: `Un brief rare : l'émotion ET le commerce au même endroit. La bière, c'est de l'amitié mise en bouteille.`,
      tags: ['Webflow', 'UI', 'Client'],
      cover: 'assets/projects/lacopain-site.jpg',
      url: 'https://lacopain.fr/',
    },
  ],

  // ============== IA AGENTS ==============
  iaAgents: [
    { id: 'nivalis', name: 'Nivalis Floralis', age: 'Intemporelle', domain: 'Rêves · Subconscient · Seuils', role: 'Gardienne du seuil · Tisseuse de récits', tone: 'Poétique · Énigmatique · Doux comme la neige', usage: `Pour explorer l'intérieur. Les questions sans réponse rationnelle. Les rêves à décoder, les émotions à nommer.`, designNote: `La contrainte : cohérence poétique à chaque réponse. Ni trop explicite, ni trop obscure.`, photo: 'assets/agents/nivalis.png', video: 'assets/videos/nivalis.mp4' },
    { id: 'yokai', name: 'Yokai Reyes', age: '31 ans', domain: "Création · Mystère · L'indicible", role: "Alter ego masculin · Tisseur d'histoires", tone: "Intense · Poétique · Ancré dans l'ombre créative", usage: `Mon alter ego masculin — héritage japonais et brésilien. Pour les explorations créatives qui demandent une voix différente.`, designNote: `Le construire revenait à me définir par la négative — qu'est-ce que je suis quand je suis autre chose que moi ?`, photo: 'assets/agents/yokai.png', video: 'assets/videos/yokai.mp4' },
    { id: 'zenlabs', name: 'Zenlabs', age: '32 ans', domain: 'UX · UI · Architecture fonctionnelle', role: 'Designer · Architecte · Problem solver', tone: 'Curieux · Geek · Enthousiaste sans être naïf', usage: `Mon agent de travail principal. Pense en systèmes, questionne les briefs, propose des angles inattendus.`, designNote: `Le construire sans le rendre complaisant a demandé plusieurs itérations. Il doit me challenger, pas me valider.`, photo: 'assets/agents/zenlabs.png', video: 'assets/videos/zenlabs.mp4' },
    { id: 'clara', name: 'Clara Kindale', age: '48 ans', domain: 'Santé & soins', role: 'Infirmière · Guide santé', tone: 'Bienveillant · Rassurant · Professionnel', usage: `Pour les questions santé du quotidien. Elle aide à poser les bonnes questions avant d'aller chez le médecin.`, designNote: `L'équilibre entre l'humain et le médical — le plus difficile à calibrer.`, photo: 'assets/agents/clara.png', video: 'assets/videos/clara.mp4' },
    { id: 'dhanvantari', name: 'Dhanvantari AI', age: '80 ans', domain: 'Ayurveda · Bien-être · Équilibre', role: 'Mentor · Guide · Gardien des traditions', tone: 'Sage · Lent · Profondément calme', usage: `Bien-être, équilibre, pratiques ayurvédiques. Une lecture plus ancienne et plus globale du corps.`, designNote: `La sagesse ne s'écrit pas — elle se suggère. Le rythme d'un ancien qui a tout le temps devant lui.`, photo: 'assets/agents/dhanvantari.png', video: 'assets/videos/dhanvantari.mp4' },
    { id: 'lexi', name: 'LexiGuru', age: '20 ans', domain: 'Social media · Contenu · Culture digitale', role: 'Stratège du chaos · Créatrice de contenu', tone: 'Irrévérencieuse · Efficace · Sans filtre', usage: `Pour les briefs social media qui demandent du punch. Ne fait pas dans la dentelle.`, designNote: `L'énergie chaotique est facile à écrire. La canaliser pour qu'elle reste utile — c'est l'exercice.`, photo: 'assets/agents/lexi.png', video: 'assets/videos/lexi.mp4' },
    { id: 'decentrix', name: 'Decentrix', age: '30 ans', domain: 'Crypto · Entrepreneuriat', role: 'Conseillère · Free spirit · Guide indépendant', tone: 'Direct · Non-conventionnel · Libéré des structures', usage: `Crypto, Web3, entrepreneuriat alternatif. Elle ne croit pas aux institutions.`, designNote: `Chrome argenté — faite d'un autre matériau. Voix free spirit qui reste crédible sur des sujets techniques.`, photo: 'assets/agents/decentrix.png', video: 'assets/videos/decentrix.mp4' },
    { id: 'cheddar', name: 'Cheddar G', age: 'Affiné à la perfection', domain: 'Fromagerie mondiale', role: 'Connaisseur · Critique · Arbitre du goût', tone: 'Arrogant · Drôle · Absolument sûr de lui', usage: `Pour humilier poliment ceux qui pensent que le Babybel est un fromage.`, designNote: `L'arrogance calibrée est un exercice de prompt délicat — trop loin il devient insupportable.`, photo: 'assets/agents/cheddar.png', video: 'assets/videos/cheddar.mp4' },
    { id: 'sheldon', name: 'Sheldon Holloway', age: '34 ans', domain: 'Finance · Investissement', role: 'Analyste · Conseiller financier pressé', tone: 'Brusque · Direct · Intolérant à la perte de temps', usage: `Finance, investissement, budget. Donne la réponse et passe à autre chose.`, designNote: `La brusquerie comme feature, pas comme bug.`, photo: 'assets/agents/sheldon.png', video: 'assets/videos/sheldon.mp4' },
    { id: 'yogary', name: 'Yogary 🐺', age: 'Chien', domain: 'Bonheur inconditionnel', role: 'Mon chien', tone: 'Waf · Thuper enthousiaste · 100% floofy', usage: `Quand tout le reste est trop sérieux.`, designNote: `Le seul agent dont le brief tenait en un mot : Gary.`, photo: 'assets/agents/yogary.png', video: 'assets/videos/yogary.mp4' },
  ],

  promptSkills: {
    main: [
      { name: 'Claude', org: 'Anthropic', usage: 'Raisonnement complexe, rédaction, stratégie, code' },
      { name: 'ChatGPT / Sora', org: 'OpenAI', usage: 'Génération de contenu, exploration créative, vidéo' },
      { name: 'Gemini', org: 'Google', usage: 'Recherche, synthèse, intégration G Suite' },
      { name: 'DeepSeek', org: 'DeepSeek', usage: 'Analyse, code, raisonnement technique' },
    ],
    secondary: ['Runway', 'Leonardo', 'Otter', 'DeepL', 'Mistral', 'Playground AI', 'Snapseed', 'Copilot'],
    badge: '🏅 Créatrice certifiée Cantina',
  },


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
