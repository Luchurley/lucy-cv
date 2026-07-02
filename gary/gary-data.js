// ============================================================
// GARY · DATA — source de vérité du contenu
// ------------------------------------------------------------
// Règle du projet : ajouter une fiche = ajouter un objet ici.
// Zéro touche au moteur (app.js).
//
// Chaque contenu porte deux axes :
//   mode   : 'soignant' (ce qu'un tiers doit savoir) | 'perso' (approfondissement Lucy)
//   niveau : 'essentiel' (visible par défaut) | 'a_savoir' (accordéon plié, à la demande)
// Chips de vérité : 'fait' | 'folklore' | 'hypothese'
// ============================================================

window.GARY = {

  // ============== PROFIL — FAITS HARD-CODÉS ==============
  profil: {
    nom: 'Gary',
    race: 'Samoyède',
    sexe: 'Mâle',
    castre: false,
    naissance: '2022-02-09',
    lieuNaissance: 'Arques (62)',
    poidsInitial: 25, // kg — poids connu au lancement de l'app (juillet 2026)
    croquettes: 'Wolfood Poulet',
    emoji: '🐻‍❄️',
  },

  // ============== RÉCOMPENSES — MODE D'EMPLOI (vital pour un tiers) ==============
  recompenses: {
    resume: `Gary est PEU gourmand, palais difficile. Ne t'attends pas à ce qu'il prenne une friandise facilement — ce n'est pas contre toi. Sa vraie monnaie : le JEU et le contact social.`,
    hierarchie: [
      { rang: 'N°1 — toujours', quoi: 'Le JEU + l\'accès social', detail: 'Il est ultra-social. Pour le rappel, le focus ou le calme : proposer un jeu ou une interaction marche mieux que la nourriture, surtout en distraction.' },
      { rang: 'Jackpot food', quoi: 'Knacki poulet · fromage type Kiri', detail: 'Ses deux seules valeurs sûres côté nourriture. À réserver aux moments importants (rappel réussi, situation difficile).' },
      { rang: 'Cran inférieur', quoi: 'Saumon (lanières/peau) · gibier · friandises lyophilisées', detail: 'Fonctionne au calme, pas fiable en distraction.' },
      { rang: 'Inutile', quoi: 'Fruits et légumes', detail: 'Il les recrache systématiquement. Ne pas insister.' },
    ],
    interdits: [
      'Friandises contenant des poils (il n\'aime pas → ne pas donner)',
    ],
  },

  // ============== DANGERS / SPÉCIFICITÉS (fiche soignant) ==============
  // icone : nom d'icône de la bibliothèque (Lucide, tracés inline dans app.js)
  dangers: [
    { icone: 'ban', titre: 'Pas de friandises à poils', detail: 'Aucune friandise contenant des poils (peau avec fourrure, oreilles poilues…). Il n\'aime pas, on n\'en donne pas.' },
    { icone: 'scissors', titre: 'Ne JAMAIS le raser ni le tondre', detail: 'Le double manteau du Samoyède le protège du froid ET de la chaleur/du soleil. Le raser l\'expose. Brossage oui, tonte non.' },
    { icone: 'thermometer-sun', titre: 'Sensible à la chaleur', detail: 'Pas d\'effort aux heures chaudes. Ombre, eau fraîche, sorties tôt le matin / tard le soir en été. Jamais seul dans une voiture.' },
    { icone: 'dog', titre: 'Mâle non castré', detail: 'Monte vite en excitation avec les autres chiens et peut être très intéressé par les femelles. Rester attentif dans les rencontres, ne pas le laisser s\'emballer.' },
    { icone: 'utensils', titre: 'Peu gourmand — ne pas forcer', detail: 'S\'il refuse une friandise ou boude sa gamelle une fois, ce n\'est pas alarmant en soi : c\'est son profil. Sa récompense fiable, c\'est le jeu.' },
  ],

  // ============== IDENTITÉ — CHAMPS ÉDITABLES ==============
  // Valeurs par défaut : à compléter par Lucy dans l'app (stockées en localStorage).
  // RÈGLE : aucune donnée inventée ici — uniquement des champs vides ou connus.
  identiteChamps: [
    { id: 'puce',       groupe: 'Identification', label: 'N° de puce', placeholder: 'À compléter' },
    { id: 'assurance',  groupe: 'Assurance', label: 'Compagnie + n° de contrat', placeholder: 'À compléter' },
    { id: 'assurTel',   groupe: 'Assurance', label: 'Téléphone assurance', placeholder: 'À compléter', tel: true },
    { id: 'vetoNom',    groupe: 'Vétérinaire', label: 'Cabinet / Dr', placeholder: 'À compléter' },
    { id: 'vetoTel',    groupe: 'Vétérinaire', label: 'Téléphone véto', placeholder: 'À compléter', tel: true },
    { id: 'vetoAdr',    groupe: 'Vétérinaire', label: 'Adresse', placeholder: 'À compléter' },
    { id: 'vetoUrg',    groupe: 'Vétérinaire', label: 'Urgences vétérinaires (nuit/week-end)', placeholder: 'À compléter', tel: true },
    { id: 'contact1',   groupe: 'Personnes à contacter', label: 'Lucy', placeholder: 'Téléphone', defaut: '+33 6 79 86 87 49', tel: true },
    { id: 'contact2',   groupe: 'Personnes à contacter', label: 'Contact n°2 (ex. Héloïse)', placeholder: 'Nom + téléphone', tel: true },
    { id: 'contact3',   groupe: 'Personnes à contacter', label: 'Contact n°3', placeholder: 'Nom + téléphone', tel: true },
    { id: 'repas',      groupe: 'Repas', label: 'Rythme des repas (heures + quantité)', placeholder: 'À compléter — ex. matin & soir, X g de Wolfood Poulet' },
  ],

  // ============== ORDRES CONNUS ==============
  // utile : true → mis en avant en mode garde (un tiers peut s'en servir)
  ordres: [
    { nom: 'Assis',   cat: 'Base',      utile: true,  note: 'Acquis, fiable.' },
    { nom: 'Couché',  cat: 'Base',      utile: true },
    { nom: 'Reste',   cat: 'Base',      utile: true,  note: 'Fiable au calme, moins en distraction.' },
    { nom: 'Viens',   cat: 'Base',      utile: true,  note: 'Rappel. En distraction : utiliser le jeu / la voix joyeuse, pas la friandise.' },
    { nom: 'Pied',    cat: 'Base',      utile: true },
    { nom: 'Laisse',  cat: 'Base',      utile: true,  note: 'Lâcher / ignorer quelque chose.' },
    { nom: 'Relax',   cat: 'Calme',     utile: true,  note: 'Retour au calme.' },
    { nom: 'Pipi',    cat: 'Pratique',  utile: true,  note: 'Déclenche l\'élimination — pratique avant un trajet.' },
    { nom: 'Go',      cat: 'Mouvement', utile: false },
    { nom: 'Back',    cat: 'Mouvement', utile: false },
    { nom: 'Jump',    cat: 'Mouvement', utile: false },
    { nom: 'Tourne',  cat: 'Mouvement', utile: false },
    { nom: 'Bow',     cat: 'Trick',     utile: false },
    { nom: 'Catch',   cat: 'Trick',     utile: false },
    { nom: 'Cherche', cat: 'Trick',     utile: false },
    { nom: 'Touche',  cat: 'Trick',     utile: false },
    { nom: 'Pan',     cat: 'Trick',     utile: false },
    { nom: 'Kiss',    cat: 'Trick',     utile: false },
    { nom: 'Look',    cat: 'Attention', utile: false },
    { nom: 'Check',   cat: 'Attention', utile: false },
    { nom: 'Clicker', cat: 'Outil',     utile: false, note: 'Il connaît le clicker (marqueur).' },
  ],

  // ============== CHANTIERS D'ÉDUCATION (perso) ==============
  chantiers: [
    'Rappel avec distractions',
    'Marche au pied sans récompense',
    'Gestion de l\'excitation',
    'Calme avant l\'action',
    'Autocontrôle',
    'Tolérance à la frustration',
    'Focus',
    'Neutralité face aux autres chiens',
  ],

  // ============== FICHES — COMPORTEMENT & RACE ==============
  // tags de vérité : 'fait' | 'folklore' | 'hypothese'
  fiches: [

    // ---------- LANGAGE CORPOREL (soignant · essentiel) ----------
    {
      id: 'lc-queue', mode: 'soignant', niveau: 'essentiel', cat: 'corps',
      titre: 'La queue', tags: ['fait'],
      corps: `Une queue qui bat ne veut pas dire « content » — elle veut dire « activé ». Regarder la hauteur et la vitesse : portée haute et rapide = excitation forte (pas forcément joyeuse) ; portée basse ou rentrée = inquiétude ; battement souple, large, avec tout l'arrière-train qui suit = détente. Chez Gary la queue en panache est portée haut par défaut (morphologie de Samoyède) : comparer à SON habitude, pas à un chien moyen.`,
    },
    {
      id: 'lc-oreilles', mode: 'soignant', niveau: 'essentiel', cat: 'corps',
      titre: 'Les oreilles', tags: ['fait'],
      corps: `Oreilles dressées vers l'avant = attention, intérêt (ou tension si le reste du corps est figé). Oreilles plaquées en arrière = inconfort, apaisement ou peur selon le contexte. Chez un chien à oreilles droites comme Gary, les micro-mouvements sont faciles à lire : c'est un bon premier indicateur.`,
    },
    {
      id: 'lc-posture', mode: 'soignant', niveau: 'essentiel', cat: 'corps',
      titre: 'La posture générale', tags: ['fait'],
      corps: `Corps souple, courbes, mouvements ronds = détente. Corps raide, immobile, poids vers l'avant, bouche qui se ferme = tension qui monte → ne pas insister, détourner l'attention calmement. Poids vers l'arrière, corps abaissé = envie de se soustraire → lui laisser de l'espace.`,
    },
    {
      id: 'lc-playbow', mode: 'soignant', niveau: 'essentiel', cat: 'corps',
      titre: 'L\'appel au jeu (play bow)', tags: ['fait'],
      corps: `Avant-train baissé, arrière-train en l'air, queue qui bat : invitation au jeu, sans ambiguïté. Gary le fait beaucoup (il connaît même l'ordre « Bow »). C'est LE moment idéal pour le récompenser par du jeu — sa monnaie préférée.`,
    },
    {
      id: 'lc-oeil', mode: 'soignant', niveau: 'essentiel', cat: 'corps',
      titre: 'L\'œil de baleine (blanc visible)', tags: ['fait'],
      corps: `Quand le blanc de l'œil devient visible sur le côté (tête tournée mais regard fixé sur la chose), c'est un signe d'inconfort net. Situation typique : un chien qu'on serre dans les bras ou qu'on coince. Réaction correcte : relâcher la contrainte, lui rendre de l'espace.`,
    },
    {
      id: 'lc-gueule', mode: 'soignant', niveau: 'essentiel', cat: 'corps',
      titre: 'Gueule et halètement', tags: ['fait'],
      corps: `Gueule entrouverte, souple, « souriante » = détendu (le fameux air du Samoyède). Gueule qui se ferme d'un coup = attention, la tension monte. Halètement : normal après effort ou par chaleur (fréquent chez Gary, sensible au chaud), mais un halètement rapide SANS effort ni chaleur peut signaler du stress.`,
    },
    {
      id: 'lc-poil', mode: 'soignant', niveau: 'a_savoir', cat: 'corps',
      titre: 'Le poil hérissé (piloérection)', tags: ['fait'],
      corps: `Poils dressés sur le garrot ou la ligne du dos = pic d'activation (excitation, surprise, tension) — c'est un réflexe, pas une « agressivité » en soi. Chez Gary c'est peu visible sous la fourrure épaisse : se fier plutôt à la posture et à la queue.`,
    },

    // ---------- SIGNAUX D'APAISEMENT (soignant · essentiel) ----------
    {
      id: 'sa-baillement', mode: 'soignant', niveau: 'essentiel', cat: 'signal',
      titre: 'Le bâillement (hors réveil)', tags: ['fait'],
      corps: `Un bâillement en dehors des moments de fatigue est souvent un signal d'apaisement : le chien évacue une tension ou tente de calmer la situation. Si Gary bâille pendant qu'on le manipule ou qu'on le gronde : il dit « ça me met mal à l'aise ». Baisser la pression.`,
    },
    {
      id: 'sa-lechage', mode: 'soignant', niveau: 'essentiel', cat: 'signal',
      titre: 'Le léchage de truffe', tags: ['fait'],
      corps: `Petit coup de langue rapide sur la truffe, hors repas : signal d'inconfort léger très fréquent. Typique quand quelqu'un se penche au-dessus de lui ou le fixe. Un seul léchage ne dit rien ; répété, il dit « trop de pression ».`,
    },
    {
      id: 'sa-tete', mode: 'soignant', niveau: 'essentiel', cat: 'signal',
      titre: 'Détourner la tête ou le regard', tags: ['fait'],
      corps: `Tourner la tête sur le côté face à un chien ou une personne = désamorçage poli (« je ne cherche pas le conflit »). À respecter : ne pas lui remettre la tête face à soi, ne pas le fixer dans les yeux pour « gagner ».`,
    },
    {
      id: 'sa-renifler', mode: 'soignant', niveau: 'essentiel', cat: 'signal',
      titre: 'Renifler le sol soudainement', tags: ['fait', 'hypothese'],
      corps: `Se mettre à renifler le sol pile quand un chien ou une situation approche peut être un signal d'apaisement (se rendre « occupé » pour désamorcer)… ou une vraie odeur intéressante. C'est le contexte qui tranche : si ça arrive systématiquement dans les moments de tension, c'est un signal.`,
    },
    {
      id: 'sa-ebrouement', mode: 'soignant', niveau: 'essentiel', cat: 'signal',
      titre: 'L\'ébrouement (se secouer à sec)', tags: ['fait'],
      corps: `Se secouer comme s'il sortait de l'eau, alors qu'il est sec : un « reset » après un moment de tension ou d'excitation (fin de jeu, croisement de chien, câlin un peu long). Bon signe : la tension retombe. Utile à repérer pour savoir quand une interaction l'a chargé.`,
    },
    {
      id: 'sa-figer', mode: 'soignant', niveau: 'essentiel', cat: 'signal',
      titre: 'Ralentir ou se figer', tags: ['fait'],
      corps: `Des mouvements qui ralentissent exagérément = tentative d'apaiser. Un chien qui se FIGE complètement (immobilité totale, regard fixe) est monté d'un cran : c'est un avertissement à prendre au sérieux. On n'insiste jamais sur un chien figé — on désamorce en s'éloignant calmement ou en l'appelant gaiement à distance.`,
    },
    {
      id: 'sa-gratter', mode: 'soignant', niveau: 'a_savoir', cat: 'signal',
      titre: 'Se gratter, s\'étirer « hors contexte »', tags: ['fait', 'hypothese'],
      corps: `Se gratter alors que rien ne gratte, s'étirer en pleine sollicitation : souvent des comportements de substitution — le chien évacue un petit conflit interne (« je veux / je n'ose pas »). Interprétation à confirmer par le contexte, comme pour le reniflage.`,
    },
    {
      id: 'sa-methodo', mode: 'perso', niveau: 'a_savoir', cat: 'signal',
      titre: 'D\'où viennent les « signaux d\'apaisement » ?', tags: ['fait', 'hypothese'],
      corps: `Le cadre des « calming signals » a été popularisé par l'éducatrice norvégienne Turid Rugaas à partir d'observations de terrain. Il est très largement utilisé par les professionnels du comportement, mais sa validation scientifique reste partielle : les études confirment que ces comportements apparaissent plus souvent en situation de tension, sans prouver une « intention de communication » systématique. En pratique : lire ces signaux comme des indicateurs d'inconfort fiables, sans en faire un langage univoque. Toujours croiser avec le contexte et le reste du corps.`,
    },

    // ---------- GARY EN PARTICULIER (perso) ----------
    {
      id: 'ga-excitation', mode: 'perso', niveau: 'essentiel', cat: 'gary',
      titre: 'Gary et l\'excitation', tags: ['fait'],
      corps: `Profil observé : optimiste, très confiant (parfois trop), monte vite en excitation — surtout avec les autres chiens — et devient alors distractible. Le manque d'autocontrôle en excitation est LE chantier de fond. Conséquence pratique : les récompenses food ne tiennent pas en distraction ; travailler avec le jeu et l'accès social (voir Mode d'emploi récompense), et privilégier le calme AVANT l'action.`,
    },
    {
      id: 'ga-shadow', mode: 'perso', niveau: 'a_savoir', cat: 'gary',
      titre: 'La relation avec Shadow', tags: ['fait', 'hypothese'],
      corps: `Gary a une relation particulière avec Shadow (chienne). Règle d'analyse à garder : toujours distinguer ce qui relève de l'attachement social, de l'émotionnel, de la motivation sexuelle (mâle non castré), de l'excitation ou du jeu — ce sont des moteurs différents qui appellent des réponses différentes. L'analyse fine et les protocoles restent en coaching (hors app pour l'instant).`,
    },
    {
      id: 'ga-mastication', mode: 'perso', niveau: 'a_savoir', cat: 'gary',
      titre: 'Mastication : profil faible', tags: ['fait'],
      corps: `Gary n'est pas un grand masticateur. Item de référence qui fonctionne : le bois de cerf fumé (marque Évident). Les à-mâcher classiques (type « fromage de yak ») présentent peu d'intérêt vu son profil. Le grand comparatif mastication (cornes, sabots, tendons…) viendra en phase 2, sourcé.`,
    },

    // ---------- SAMOYÈDE — LA RACE (perso · a_savoir surtout) ----------
    {
      id: 'sam-smile', mode: 'perso', niveau: 'a_savoir', cat: 'samoyede',
      titre: 'Le « sammy smile »', tags: ['fait', 'folklore'],
      corps: `FAIT : le « sourire » du Samoyède est morphologique — les commissures des lèvres légèrement retroussées font partie du standard de la race. FOLKLORE : l'explication d'éleveurs selon laquelle ce sourire « empêche la bave de geler et la formation de glaçons » est une jolie histoire transmise dans le milieu, pas un fait démontré.`,
    },
    {
      id: 'sam-manteau', mode: 'soignant', niveau: 'a_savoir', cat: 'samoyede',
      titre: 'Le double manteau', tags: ['fait'],
      corps: `Le Samoyède a un double manteau : sous-poil dense + poil de couverture. Il isole du froid ET fait tampon contre la chaleur et le soleil. C'est pour ça qu'on ne rase jamais un Samoyède (repousse abîmée, peau exposée). L'entretien passe par le brossage régulier, surtout en période de mue, où le sous-poil part par poignées — c'est normal.`,
    },
    {
      id: 'sam-hypo', mode: 'perso', niveau: 'a_savoir', cat: 'samoyede',
      titre: '« Hypoallergénique » ?', tags: ['folklore'],
      corps: `Le Samoyède est souvent vendu comme « hypoallergénique ». Réalité : aucune race de chien n'est réellement hypoallergénique — les allergènes principaux viennent de la salive et des squames, pas du poil lui-même. Certaines personnes allergiques tolèrent mieux certains chiens, mais c'est individuel et imprévisible.`,
    },
    {
      id: 'sam-origine', mode: 'perso', niveau: 'a_savoir', cat: 'samoyede',
      titre: 'Origines : Sibérie', tags: ['fait'],
      corps: `Le Samoyède tient son nom des peuples samoyèdes de Sibérie, chez qui ces chiens vivaient au contact étroit des familles : garde et conduite des rennes, traction, chaleur sous la tente. Ce passé explique deux traits très « Gary » : la proximité humaine constante (pot-de-colle) et l'endurance/énergie à canaliser.`,
    },
    {
      id: 'sam-vocal', mode: 'perso', niveau: 'a_savoir', cat: 'samoyede',
      titre: 'Une race qui cause', tags: ['fait'],
      corps: `Contrairement au cliché du chien nordique silencieux, le Samoyède est une race expressive et volontiers vocale : aboiements, « discussions », vocalises. C'est un trait de race à canaliser, pas un « défaut » de Gary.`,
    },
    {
      id: 'sam-castration', mode: 'perso', niveau: 'a_savoir', cat: 'samoyede',
      titre: 'Mâle non castré : lire avant de conclure', tags: ['fait'],
      corps: `Gary n'est pas castré. Devant un comportement (monte, fixation, excitation), toujours différencier : hormonal / appris / renforcé par l'environnement / lié à l'excitation / au manque d'autocontrôle / au stress. La castration modifie surtout les comportements à forte composante hormonale ; elle n'est jamais une solution miracle aux problèmes d'excitation ou d'éducation, et peut ne rien changer aux comportements appris.`,
    },
  ],

  // ============== QUIZ 1 — « QUE DIT GARY ? » ==============
  quizSignaux: [
    {
      q: 'Gary bâille pendant que tu lui mets son harnais, alors qu\'il vient de dormir toute la nuit.',
      options: ['Il est encore fatigué', 'Il évacue une tension / demande moins de pression', 'Il a faim'],
      bonne: 1,
      explication: 'Un bâillement hors fatigue est souvent un signal d\'apaisement. Manipulation + excitation du départ = petit trop-plein. Ralentir le geste, parler calmement.',
    },
    {
      q: 'Un inconnu se penche au-dessus de Gary pour le caresser. Gary donne des petits coups de langue rapides sur sa truffe.',
      options: ['Il salive parce qu\'il attend une friandise', 'Il est mal à l\'aise avec cette approche', 'Il dit bonjour'],
      bonne: 1,
      explication: 'Le léchage de truffe répété = inconfort léger. Se pencher au-dessus d\'un chien est une posture qui met la pression. Mieux : s\'accroupir de côté et le laisser venir.',
    },
    {
      q: 'Un chien inconnu approche. Gary se met soudain à renifler le sol intensément.',
      options: ['Il a trouvé une odeur, rien à voir', 'Il désamorce peut-être la rencontre — lire le contexte', 'Il cherche à manger'],
      bonne: 1,
      explication: 'Le reniflage « pile au bon moment » est souvent un signal d\'apaisement (se rendre occupé). Mais ça peut aussi être une vraie odeur : c\'est la répétition dans les moments de tension qui fait le diagnostic.',
    },
    {
      q: 'Après un croisement un peu tendu avec un autre chien, Gary se secoue comme s\'il sortait de l\'eau.',
      options: ['Il a des puces', 'Il fait retomber la tension : bon signe', 'Il veut jouer'],
      bonne: 1,
      explication: 'L\'ébrouement à sec est un « reset » après un moment chargé. C\'est le signe que l\'interaction l\'avait activé — et que ça redescend.',
    },
    {
      q: 'Gary baisse l\'avant-train, arrière-train en l\'air, queue qui bat.',
      options: ['Il s\'étire', 'Il invite au jeu', 'Il a mal au ventre'],
      bonne: 1,
      explication: 'C\'est le play bow, l\'invitation au jeu sans ambiguïté. Et le jeu, c\'est SA récompense n°1 : moment parfait pour obtenir quelque chose de lui.',
    },
    {
      q: 'Gary s\'immobilise complètement, corps raide, regard fixe, bouche fermée.',
      options: ['Il se concentre, tout va bien', 'Tension nette : ne pas insister, désamorcer calmement', 'Il joue à « Reste »'],
      bonne: 1,
      explication: 'Le figement est un avertissement. On n\'insiste jamais : on retire la pression, on s\'éloigne ou on l\'appelle gaiement à distance.',
    },
    {
      q: 'Quelqu\'un serre Gary dans ses bras. On voit le blanc de son œil sur le côté.',
      options: ['Il adore le câlin', 'Il est coincé et mal à l\'aise : relâcher', 'Il regarde quelque chose au loin'],
      bonne: 1,
      explication: 'L\'« œil de baleine » = inconfort net. Beaucoup de chiens tolèrent les câlins-contention sans les aimer. On relâche et on le laisse choisir le contact.',
    },
    {
      q: 'La queue de Gary bat très vite, portée très haut, corps tendu vers un autre chien.',
      options: ['Il est content : queue qui bat = joie', 'Il est très activé — pas forcément joyeux : lire le reste du corps', 'Il a peur'],
      bonne: 1,
      explication: 'Une queue qui bat dit « activation », pas « joie ». Haute + rapide + corps tendu = excitation forte. Chez Gary c\'est le signal de la montée à canaliser avant qu\'il ne s\'emballe.',
    },
  ],

  // ============== QUIZ 2 — « VRAI OU MYTHE ? » ==============
  quizMythes: [
    {
      q: 'Le « sammy smile » (sourire du Samoyède) est une particularité morphologique de la race.',
      vrai: true, chip: 'fait',
      explication: 'VRAI — les commissures retroussées font partie du standard de la race. C\'est de la morphologie, pas une émotion.',
    },
    {
      q: 'Ce sourire a été sélectionné pour empêcher la bave de geler et la formation de glaçons.',
      vrai: false, chip: 'folklore',
      explication: 'FOLKLORE — c\'est une histoire d\'éleveurs, jolie mais jamais démontrée. On garde le fait (le sourire), on étiquette la légende.',
    },
    {
      q: 'Le Samoyède est un chien hypoallergénique.',
      vrai: false, chip: 'folklore',
      explication: 'MYTHE — aucune race n\'est réellement hypoallergénique : les allergènes viennent surtout de la salive et des squames. La tolérance varie selon les personnes, pas selon un label.',
    },
    {
      q: 'Il ne faut jamais raser un Samoyède, même en été.',
      vrai: true, chip: 'fait',
      explication: 'VRAI — le double manteau isole du froid ET protège de la chaleur et du soleil. On brosse (beaucoup), on ne tond pas.',
    },
    {
      q: 'Les chiens nordiques comme le Samoyède sont silencieux.',
      vrai: false, chip: 'folklore',
      explication: 'MYTHE — le Samoyède est une race expressive et volontiers vocale. Gary qui « discute », c\'est la race, pas un bug.',
    },
    {
      q: 'Le Samoyède doit son nom aux peuples samoyèdes de Sibérie, où il gardait les rennes et tirait les charges.',
      vrai: true, chip: 'fait',
      explication: 'VRAI — chien de travail ET de famille, il vivait au contact étroit des humains. D\'où le côté pot-de-colle ultra-social… de Gary.',
    },
    {
      q: 'Un chien qui bâille est forcément fatigué.',
      vrai: false, chip: 'folklore',
      explication: 'MYTHE — hors des moments de repos, le bâillement est souvent un signal d\'apaisement : le chien évacue une tension.',
    },
    {
      q: 'Castrer un mâle règle les problèmes d\'excitation et d\'éducation.',
      vrai: false, chip: 'folklore',
      explication: 'MYTHE — la castration ne touche que les comportements à forte composante hormonale. Excitation, autocontrôle, comportements appris : ça se travaille, ça ne s\'opère pas.',
    },
  ],

  // ============== CHECKLISTS — MODÈLES PAR PÉRIODE ==============
  // L'état coché est mémorisé par période (jour/semaine/mois) et se
  // réinitialise automatiquement au changement de période.
  checklists: {
    jour: [
      { id: 'j-balade-am', label: 'Promenade du matin' },
      { id: 'j-balade-pm', label: 'Promenade du soir' },
      { id: 'j-eau', label: 'Eau fraîche vérifiée' },
      { id: 'j-repas', label: 'Repas donné(s) — croquettes Wolfood Poulet' },
      { id: 'j-jeu', label: 'Session jeu / stimulation' },
      { id: 'j-calme', label: 'Moment calme après l\'action' },
    ],
    semaine: [
      { id: 's-brossage', label: 'Brossage complet' },
      { id: 's-tiques', label: 'Contrôle tiques + épillets (saison chaude)' },
      { id: 's-oreilles', label: 'Vérif oreilles' },
      { id: 's-yeux', label: 'Vérif yeux' },
      { id: 's-gamelles', label: 'Lavage des gamelles' },
      { id: 's-enrichissement', label: 'Une nouveauté (jeu, parcours, odeur…)' },
    ],
    mois: [
      { id: 'm-pesee', label: 'Pesée → noter dans la courbe de poids' },
      { id: 'm-griffes', label: 'Vérif griffes' },
      { id: 'm-antiparasitaire', label: 'Point antiparasitaire (selon protocole véto)' },
      { id: 'm-stock', label: 'Stock croquettes OK' },
      { id: 'm-backup', label: 'Sauvegarde JSON de l\'app (export)' },
    ],
  },

  // ============== SANTÉ — TYPES D'ÉVÉNEMENTS ==============
  // recurrenceJours : proposition par défaut, TOUJOURS modifiable.
  // Les périodicités réelles dépendent du protocole du vétérinaire.
  santeTypes: [
    { id: 'vaccin', label: 'Vaccin', icone: 'syringe', recurrenceJours: 365, note: 'Rappel annuel usuel — suivre le carnet de vaccination et le véto.' },
    { id: 'vermifuge', label: 'Vermifuge', icone: 'pill', recurrenceJours: 90, note: 'Fréquence à valider avec le véto selon le mode de vie.' },
    { id: 'bravecto', label: 'Bravecto (puces/tiques)', icone: 'bug', recurrenceJours: 84, note: 'Se référer à la notice du produit (12 semaines) et au véto.' },
    { id: 'antiparasitaire', label: 'Autre antiparasitaire', icone: 'shield-alert', recurrenceJours: 30, note: 'Selon le produit utilisé — vérifier la notice.' },
    { id: 'veto', label: 'Visite vétérinaire', icone: 'stethoscope', recurrenceJours: 365, note: 'Bilan annuel usuel, ou selon besoin.' },
    { id: 'pesee', label: 'Pesée', icone: 'weight', recurrenceJours: 30, note: 'Alimente la courbe de poids.' },
    { id: 'autre', label: 'Autre', icone: 'map-pin', recurrenceJours: 0, note: '' },
  ],

  // ============== RÉCOMPENSES À DÉBLOQUER ==============
  // Pas de barre d'XP ni de niveaux : des récompenses ponctuelles,
  // débloquées par de vraies actions de soin. Les conditions vivent
  // dans app.js (BADGE_CHECKS), la présentation ici.
  badges: [
    { id: 'premiere-balade', nom: 'Premiers pas', desc: 'Compter une première promenade', icon: 'footprints' },
    { id: 'promeneur', nom: 'Grand promeneur', desc: '25 promenades comptées', icon: 'medal' },
    { id: 'grand-air', nom: 'Bol d\'air', desc: '5 heures de balade cumulées', icon: 'timer' },
    { id: 'jour-parfait', nom: 'Journée parfaite', desc: 'Toute la checklist du jour cochée', icon: 'sun' },
    { id: 'semaine-reglee', nom: 'Semaine réglée', desc: 'Toute la checklist de la semaine cochée', icon: 'calendar-days' },
    { id: 'mois-carre', nom: 'Mois carré', desc: 'Toute la checklist du mois cochée', icon: 'star' },
    { id: 'premiere-pesee', nom: 'Sur la balance', desc: 'Ajouter une pesée à la courbe de poids', icon: 'weight' },
    { id: 'photographe', nom: 'Paparazzi polaire', desc: '3 photos dans la galerie', icon: 'camera' },
    { id: 'lecteur-de-gary', nom: 'Traducteur de Gary', desc: 'Un sans-faute au quiz « Que dit Gary ? »', icon: 'paw-print' },
    { id: 'demystificateur', nom: 'Démystificateur', desc: 'Un sans-faute au quiz « Vrai ou Mythe ? »', icon: 'snowflake' },
    { id: 'sante-planifiee', nom: 'Santé sous contrôle', desc: 'Vaccin, vermifuge, antipuces et véto planifiés, rien en retard', icon: 'stethoscope' },
    { id: 'archiviste', nom: 'Archiviste', desc: 'Faire un export JSON de sauvegarde', icon: 'save' },
    { id: 'fidele', nom: 'Fidèle au poste', desc: 'Ouvrir l\'app 7 jours de suite', icon: 'award' },
    { id: 'champion', nom: 'Champion des neiges', desc: 'Débloquer toutes les autres récompenses', icon: 'trophy' },
  ],

  // ============== DISCLAIMER PERMANENT ==============
  disclaimer: 'Cette app est un carnet personnel : elle ne remplace ni un vétérinaire, ni un vétérinaire nutritionniste. En cas de doute sur la santé de Gary, appeler le véto.',
};
