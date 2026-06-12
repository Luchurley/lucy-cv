# Case Study — Jaccède
## UX Writing complet · Portfolio Lucy Hurley

---

## META (carte projet dans la liste)

**Titre du projet**
Jaccède

**Tagline**
Refonte UX/UI d'une plateforme d'accessibilité — concevoir l'inclusion pour ceux qui la vivent et ceux qui la construisent.

**Tags**
`UX/UI` `Accessibilité` `Gamification` `Cartographie` `Motion Design` `Refonte` `Bénévolat`

**Rôle**
UX/UI Designer — collaboration bénévole

**Périmètre**
Desktop + Mobile · Refonte complète

**Statut**
Projet Figma complet · Wireframes finaux livrés

---

## SECTION 1 — CONTEXTE & BRIEF

**Titre de section**
Le brief

**Texte principal**
Jaccède est une association loi 1901 dont la mission est d'encourager les personnes à mobilité réduite à réinvestir l'espace public — en cartographiant les lieux accessibles, en décloisonnant les représentations, en transformant le regard de la société sur le handicap.

La plateforme existante remplissait sa mission sur le fond. Sur la forme, elle ne rendait pas justice à l'ambition du projet : une interface vieillissante, une architecture de l'information confuse, une expérience de contribution (ajouter un lieu) trop complexe pour des utilisateurs dont certains naviguent eux-mêmes avec des contraintes d'accessibilité.

Mission : refonte complète de l'expérience digitale — desktop et mobile — en conservant l'âme et les valeurs de l'association tout en modernisant radicalement l'interface et la logique de navigation.

**Encadré**
Un projet bénévole. Pas de budget, pas de brief formel. Juste une conviction : une plateforme dédiée à l'accessibilité se doit d'être elle-même exemplaire en matière d'UX.

---

## SECTION 2 — LE DÉFI

**Titre de section**
Le paradoxe Jaccède

**Texte principal**
Jaccède s'adresse simultanément à deux profils aux besoins radicalement différents — et pourtant inséparables.

**Les utilisateurs finaux** — personnes en situation de handicap ou à mobilité réduite — qui cherchent des lieux accessibles près de chez eux, avec des filtres précis sur leur type de handicap. Pour eux, chaque friction dans l'interface est une friction dans la vie réelle. Une navigation confuse n'est pas un inconfort — c'est une barrière.

**Les contributeurs bénévoles** — qui ajoutent et enrichissent les fiches lieux. Leur motivation repose sur un sentiment d'utilité et de communauté. Si le formulaire est trop long, trop complexe, ou trop peu gratifiant, ils abandonnent. Et la base de données s'appauvrit.

Le vrai défi : **concevoir une expérience unifiée qui soit à la fois accessible pour les plus vulnérables et engageante pour les plus actifs.**

**Sous-titre**
Les problèmes identifiés sur l'existant

**Liste**
- Architecture de l'information peu lisible — hiérarchie des contenus confuse entre Explorer, Challenges, Boutique, A propos
- Expérience carte surchargée — trop d'informations simultanées, pas de hiérarchie visuelle claire
- Formulaire "Ajouter un lieu" trop dense — 8 catégories d'accessibilité à renseigner sans guidance progressive
- Système de gamification sous-exploité — points et challenges présents mais invisibles dans la navigation
- Identité visuelle datée — ne reflétant pas le dynamisme et la modernité de la mission associative
- Pas de différenciation claire entre l'état non connecté et connecté

---

## SECTION 3 — UX RESEARCH & AUDIT

**Titre de section**
Avant de dessiner, comprendre. Avant de comprendre, mesurer.

**Texte principal**
La refonte Jaccède ne part pas d'une intuition visuelle — elle part d'une démarche UX formalisée en deux phases : une phase de research utilisateur, puis un audit UX structuré avec grille de sévérité.

---

**Sous-section A : UX Research**

**Titre**
Comprendre qui utilise Jaccède — et comment

**Texte**
Deux arbres de décision ont été construits pour cartographier les profils utilisateurs et leurs parcours réels sur la plateforme. L'objectif : identifier les points de friction avant de toucher à l'interface.

Les deux profils principaux documentés :
- **Utilisateur final** — personne en situation de handicap ou à mobilité réduite, cherchant un lieu accessible selon sa mobilité spécifique
- **Contributeur bénévole** — personne souhaitant ajouter ou enrichir des fiches lieux

Pour chaque profil : fréquence de sortie, type de handicap, expériences digitales existantes, motivations, freins, et éléments essentiels avant la sortie. Les arbres de décision ont permis d'identifier que les deux parcours partagent une entrée commune (la recherche de lieu) mais divergent radicalement en termes de besoins d'interface.

**Visuel suggéré**
Arbres de décision UX Research (les deux versions côte à côte)

---

**Sous-section B : UX Audit — Méthodologie**

**Titre**
Un audit structuré, pas une liste de griefs

**Texte**
L'audit UX de l'existant a été conduit avec une grille double axe :

- **Sévérité (S0 → S4)** — de "pas un problème d'utilisabilité" à "catastrophe d'utilisabilité — must fix"
- **Facilité de correction (E0 → E4)** — de "super simple, effort minimum" à "effort extrême, dev et design lourds"

Chaque finding est scoré sur ces deux dimensions. Ça permet de prioriser objectivement : un S3/E1 (problème majeur, facile à corriger) passe avant un S2/E4 (problème mineur, très coûteux à corriger).

**Visuel suggéré**
Grille Severity × Ease to fix avec légende

---

**Sous-section C : UX Audit — Findings principaux**

**Titre**
Ce que l'audit a révélé

**Les findings par zone**

**Page Explorer (carte + liste)**
- Boutons "Apply saved filters" et "Accessibility filters" visuellement identiques malgré des fonctions opposées — confusion utilisateur (S3/E2)
- Légende de la carte non différenciée — les icônes carrées frappent l'œil sans hiérarchie visuelle (S1/E1)
- Photos des fiches lieux sans lien avec les tags métiers affichés (S2/E1)

**Accessibilité de l'interface (ARIA)**
- Éléments formulaire sans attributs ARIA requis — les lecteurs d'écran ne peuvent pas interpréter l'état des champs
- Boutons sans nom accessible — lecteurs d'écran annoncent "button" sans contexte
- Liens sans texte discernable — navigation au clavier impossible pour les utilisateurs de screen readers
- Hiérarchie des headings non séquentielle — structure sémantique cassée

**Contraste**
- Couleurs de la légende ne passent pas les seuils WCAG — particulièrement problématique pour une plateforme dont les utilisateurs incluent des personnes malvoyantes

**Navigation**
- Éléments de navigation non accessibles au clavier

**Note critique**
C'est le paradoxe documenté : une plateforme dont la mission est l'accessibilité avait une interface qui échouait aux standards WCAG les plus basiques. Ce n'est pas un jugement — c'est exactement pourquoi l'audit était nécessaire.

---

**Sous-section D : De l'audit aux décisions**

**Titre**
Chaque décision de refonte a une source

**Texte**
L'audit a directement informé les décisions de design :

| Finding audit | Décision de refonte |
|---|---|
| Boutons non différenciés sur Explorer | Système de boutons avec hiérarchie visuelle claire — primaire/secondaire/outline |
| Légende carte illisible | Icônes de catégories custom avec fond turquoise et label systématique |
| Couleurs WCAG insuffisantes | Révision des valeurs de couleur pour atteindre WCAG AA sur tous les éléments texte |
| Formulaire "Ajouter un lieu" sans guidance | Chunking progressif en sections titrées avec icônes dédiées |
| Manque d'accessibilité ARIA | Attributs ARIA intégrés dès la conception des composants dans le design system |

---

## SECTION 4 — PROCESS & DÉCISIONS UX

**Titre de section**
Les décisions qui ont tout changé

**Sous-section A : Architecture de l'information**

**Titre**
Reconstruire la navigation depuis les usages réels

**Texte**
La navigation a été repensée autour des deux parcours principaux — Explorer (trouver un lieu) et Contribuer (ajouter un lieu) — avec Challenges, Boutique et Paramètres comme couches secondaires accessibles mais non prioritaires.

La barre de navigation mobile a été reconstruite avec 5 entrées fixes et iconiques : Explorer · Challenges · Donation · Boutique · Paramètres. Chaque icône accompagnée d'un label — principe de reconnaissance plutôt que rappel (Don Norman).

**Sous-section B : Expérience carte & recherche**

**Titre**
La carte comme interface principale, pas comme fond de page

**Texte**
Sur l'existant, la carte était un élément parmi d'autres. Dans la refonte, elle devient le point d'entrée central de l'expérience Explorer.

Décisions clés :
- Filtres de mobilité accessibles en 1 tap depuis la carte (pas dans un menu secondaire)
- Rayon de recherche ajustable visuellement directement sur la carte
- Fiche lieu en overlay bottom sheet — sans quitter la carte
- Catégories de lieux en scroll horizontal au-dessus de la carte — scan rapide, sélection en 1 tap

**Sous-section C : Formulaire "Ajouter un lieu"**

**Titre**
Rendre la contribution accessible à ceux qui contribuent

**Texte**
Le formulaire existant présentait les 8 catégories d'accessibilité en une seule page longue, sans guidance, sans progression visible. Résultat probable : abandon en cours de route.

La refonte introduit une logique de **chunking progressif** :
- Sélection du type de lieu en premier (iconique, visuel, rapide)
- Informations de base (nom, téléphone, site, horaires) regroupées
- Section accessibilité avec les 8 critères présentés avec icônes dédiées et système de notation à 3 niveaux (rouge/orange/vert) — intuitif, sans texte long à lire
- Adresse en dernier — après que l'utilisateur est déjà engagé dans le formulaire

Chaque section est visuellement séparée et titrée. L'utilisateur sait où il en est et ce qu'il reste à faire.

**Sous-section D : Gamification**

**Titre**
Rendre visible ce qui motivait sans le montrer

**Texte**
Le système de gamification existait dans les données mais était invisible dans l'interface. La refonte le met en scène :
- Compteur de points personnels visible sur le profil connecté
- Section Challenges avec progression visuelle et récompenses claires
- Classement des "Jaccodeurs du moment" sur la homepage — social proof et motivation communautaire
- Badges et niveaux liés aux contributions — chaque lieu ajouté a une valeur visible

---

## SECTION 5 — UI & SYSTÈME VISUEL

**Titre de section**
Un système visuel qui porte les valeurs

**Texte principal**
L'identité visuelle existante de Jaccède — violet profond, turquoise, illustrations rondes — a servi de base. Pas de rupture identitaire : l'association a une marque reconnue par sa communauté, et la refonte devait rester Jaccède.

Le travail a porté sur **la révision des valeurs de couleurs pour l'accessibilité** — certains contrastes de l'identité originale ne passaient pas les seuils WCAG AA, particulièrement problématique pour une plateforme dont les utilisateurs incluent des personnes malvoyantes. Chaque couleur du système a été testée et ajustée pour garantir un ratio de contraste suffisant sans trahir l'esprit de la marque.

**Les ajustements structurants**

- **Typographie** — contraste fort entre un serif expressif pour les titres et un sans-serif lisible pour le contenu — accessibilité et caractère simultanément
- **Iconographie** — système d'icônes personnalisé pour les catégories d'accessibilité (déficience auditive, visuelle, physique...) — reconnaissance immédiate, pas de texte technique
- **Système de notation accessibilité** — 3 niveaux codés couleur (rouge = non accessible, orange = partiellement, vert = accessible) — universel, intuitif, applicable à tout type de handicap
- **Cartes de lieux** — hiérarchie claire : photo · nom · adresse · critères d'accessibilité en chips · note smiley · favoris
- **États connecté / non connecté** — différenciés visuellement dès la homepage et la navigation

**Label section écrans**
Desktop — Homepage · Explorer · Ajouter un lieu · Shop

**Label section écrans mobile**
Mobile — Home · Explorer · Connected · Ajouter un lieu

---

## SECTION 6 — MOTION DESIGN

**Titre de section**
Le mouvement comme langage d'inclusion

**Texte**
Le motion design sur Jaccède n'est pas décoratif — il est fonctionnel. Dans une interface destinée à des utilisateurs avec des besoins spécifiques, le mouvement doit guider sans distraire, confirmer sans surprendre.

**Principes appliqués**
- Transitions douces entre les états de la carte (zoom, rayon, sélection de lieu)
- Animations de feedback sur les actions de contribution (ajout d'un lieu, validation d'un critère)
- Micro-interactions sur la gamification — compteur de points, progression de challenge
- Respect du paramètre "Réduire les animations" — toutes les animations ont une version statique de fallback

**Label vidéo**
Motion design — interactions clés de l'interface Jaccède

**Légende**
Transitions carte, feedback formulaire, animations gamification — conçus pour guider sans surcharger.

---

## SECTION 7 — LIVRABLES

**Titre de section**
Ce qui a été produit

**Liste des livrables**
- Analyse UX formalisée de l'existant
- Architecture de l'information restructurée
- Wireframes desktop complets (Homepage, Explorer, Connected, Ajouter un lieu, Shop)
- Wireframes mobile complets (5 écrans principaux + états connecté/non connecté)
- Système UI complet — composants, couleurs, typographie, iconographie accessibilité
- Motion design sur les interactions clés
- Fichier Figma organisé (page Wireframe final + page Itérations)

**Note**
Projet bénévole livré sans contrainte de deadline commerciale — ce qui a permis une rigueur de process rarement possible en mission client classique.

---

## SECTION 8 — RÉFLEXION

**Titre de section**
Ce que ce projet m'a appris

**Texte**
Concevoir pour l'accessibilité oblige à une honnêteté intellectuelle que les projets "mainstream" n'imposent pas de la même façon. Quand ton utilisateur navigue avec un lecteur d'écran, ou avec une seule main, ou avec une vision partielle — chaque décision de design a un impact réel sur sa capacité à accéder au monde.

Ce qui m'a le plus frappé : **le formulaire d'ajout de lieu était lui-même peu accessible**. Une plateforme dont la mission est de recenser les lieux accessibles avait un outil de contribution qui créait de la friction pour ses propres contributeurs. C'est un angle mort classique — on pense à l'utilisateur final, pas à l'utilisateur contributeur.

La gamification m'a aussi appris quelque chose sur la motivation. Les points et les challenges existaient déjà dans les données. Ils ne motivaient pas parce qu'ils étaient invisibles. La visibilité d'une récompense est aussi importante que la récompense elle-même.

**Pull quote**
> "Concevoir pour l'accessibilité, c'est concevoir pour tout le monde — mais en commençant par ceux pour qui les mauvaises décisions coûtent le plus cher."

---

## NAVIGATION INTERNE

- Brief
- Défi & paradoxe
- UX Research & Audit
- Décisions UX
- UI & Système visuel
- Motion
- Livrables
- Réflexion

---

## MÉTADONNÉES TECHNIQUES (pour Claude Code)

**ID projet** : `jaccede`
**Couleur d'accent projet** : violet `#3D1D8E` + turquoise `#00C9B1`

**Médias disponibles ✅**
- [x] Maquettes finales desktop — jaccede_home.png, jaccede_home_1.png, jaccede_home_2.png, jaccede_home_3.png
- [x] Screenshots site existant (before) — wireframe vert/violet
- [x] Planche benchmark/pige (moodboard clusters)
- [x] Wireframes à main levée — desktop liste+carte, mobile homepage, mobile ajouter un lieu
- [x] Design system complet — couleurs, typo, icônes, composants, états, layouts, médias
- [x] UI Kit — State & Focus, Search area, Base components, Cards, Form fields, Layout, Icons, Colors, Typography, Media
- [x] Mockups goodies/merchandising Jaccède
- [x] UX Audit — couverture Part 2, Accessibility Check, Recommendations grid, Explore findings
- [x] UX Research — arbres de décision (2 versions)
- [x] Vidéo motion design

**Médias encore manquants**
- [ ] Screenshots maquettes mobile finales (exports Figma propres)
- [ ] Screenshots page Explorer finale avec carte

**Composants React nécessaires**
- `HeroProject`
- `SectionText`
- `BeforeAfter` — site existant vs maquette finale
- `UXAuditGrid` — grille Severity × Ease to fix
- `SectionMedia` — grille écrans desktop + mobile
- `DesignSystemShowcase` — palette + typo + icônes
- `PullQuote`
- `DeliverablesList`
- `ProjectNav`
- `MotionVideo`
