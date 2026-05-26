# WIREFRAME BRIEF — UX SKELETON MOBILE
## Lucy Hurley Portfolio · Miami Venise · v2.0
### Pour : Claude Design · Mai 2026
### Sources : checklist.design · patttterns.com
### ⚠ Application mobile first — iPhone 375×812 référence

---

> **Changements v2.0**
> Navigation entièrement repensée : bottom tab bar fixe (5 onglets).
> Nouvelle section PROJETS : grille, recherche, filtres, page détail complète.
> Suppression du footer — remplacé par bottom nav.
> Parcours utilisateur fluide revu de bout en bout.

---

## 0. PRINCIPES FONDATEURS MOBILE

### Pourquoi mobile first

Un recruteur ou client potentiel consulte un portfolio depuis son téléphone dans 60–70% des cas. Concevoir mobile d'abord force à prioriser ce qui est vraiment essentiel. Le desktop est une adaptation de la version mobile, pas l'inverse.

### Contraintes physiques à respecter

```
Écran de référence   : iPhone 375 × 812px (375pt)
Zone safe area haut  : 44pt (notch / dynamic island)
Zone safe area bas   : 34pt (home indicator)
Tap target minimum   : 44 × 44pt (WCAG 2.5.5)
Zone pouce confort   : 2/3 bas de l'écran (Thumb Zone)
Bottom nav hauteur   : 83pt (icône 24pt + label 11pt + padding)
Header hauteur       : 56pt (sticky)
```

### Zones ergonomiques (Thumb Zone)

```
┌─────────────────┐
│  ░░░░░░░░░░░░░  │  ← DIFFICILE (haut, pouce étiré)
│  ░░░░░░░░░░░░░  │
│  ░░░░░░░░░░░░░  │
│  ▒▒▒▒▒▒▒▒▒▒▒▒  │  ← CORRECT (milieu)
│  ▒▒▒▒▒▒▒▒▒▒▒▒  │
│  ████████████  │  ← OPTIMAL (bas, pouce naturel)
│  ████████████  │
│ [NAV][NAV][NAV] │  ← BOTTOM NAV ici
└─────────────────┘
```

**Règle** : toutes les actions primaires dans la zone basse. Navigation, CTA, filtres actifs → toujours accessibles sans déplacer la main.

---

## 1. ARCHITECTURE GLOBALE — NOUVELLE STRUCTURE

### Arbre de navigation

```
APP
├── [1] HOME ──────────────────── Accueil + hero + manifesto
│
├── [2] PROJETS ────────────────── Grille projets
│    ├── [FILTRES drawer]
│    ├── [RECHERCHE]
│    └── [PROJET DÉTAIL] ×6
│         ├── Overview
│         ├── Process
│         ├── Visuels (carousel)
│         └── Résultats + CTA contact
│
├── [3] SKILLS ─────────────────── Tags interactifs + XP
│
├── [4] MOI ────────────────────── Parcours + About fusionnés
│    ├── Identité + manifesto
│    ├── Expériences (accordion)
│    ├── Formation
│    └── [LORE débloqué par XP]
│
└── [5] CONTACT ────────────────── Coordonnées + score final
```

### Modèle de navigation

**Bottom Tab Bar** — persistant sur toutes les vues principales
**Push navigation** — slide depuis la droite pour les sous-pages (PROJET DÉTAIL)
**Bottom Sheet** — pour les filtres et options
**Modal full-screen** — pour Gary 🐻‍❄️ et la section secrète

---

## 2. COMPOSANT CENTRAL — BOTTOM TAB BAR

**Référence** : checklist.design/components/tabs · patttterns.com/ui-patterns/navbars-toolbars

```
┌─────────────────────────────────────────────┐
│                                             │
│  [🏠]      [💼]      [⚡]      [👤]      [✉]  │
│  HOME    PROJETS   SKILLS    MOI     CONTACT │
│                                             │
│  ← safe area bas 34pt →                    │
└─────────────────────────────────────────────┘
```

### Spécifications

```
Position        : fixed · bottom 0 · z-index 600
Hauteur totale  : 83pt (icône + label + safe area)
Fond            : blanc #FFFFFF
Border-top      : 2pt solid #0A0806
Icône           : 24×24pt · gris quand inactif · couleur accent quand actif
Label           : 10pt · Space Mono · uppercase
Tab actif       : icône + label en couleur primaire + indicateur top (2pt solid)
Tab inactif     : opacity 40%
Tap target      : toute la zone de la tab (75×83pt minimum)
```

### États des tabs

```
INACTIF                ACTIF                  AVEC BADGE XP
┌──────────────┐       ┌──────────────┐       ┌──────────────┐
│              │       │  ─────────   │ ← top │  ─────────   │
│    [icon]    │       │    [icon]    │       │  [icon] [●]  │ ← dot rouge
│    label     │       │    label     │       │    label     │
└──────────────┘       └──────────────┘       └──────────────┘
opacity 40%            couleur accent          dot = new XP
```

**Règles UX** (checklist.design — Tabs)
- [ ] Label 1 mot maximum — concis, prédictible
- [ ] Contenu change sous la tab — rien au-dessus ne change
- [ ] Ordre par popularité d'usage attendu : HOME → PROJETS → SKILLS → MOI → CONTACT
- [ ] Icône + label toujours ensemble (jamais icône seule)
- [ ] État actif clairement distinct (pas ambigu)
- [ ] Bottom nav jamais masquée — même sur les sous-pages

---

## 3. COMPOSANT GLOBAL — HEADER MOBILE

```
┌─────────────────────────────────────────────┐
│  ← safe area haut 44pt →                  │
├─────────────────────────────────────────────┤
│  [LUCY HURLEY]              [👁 XP ████░░]  │
│  UX/UI · DA · IA                           │
└─────────────────────────────────────────────┘
  ↑ sticky, border-bottom 2pt, fond blanc
  hauteur 56pt
```

**Variante — sous-page PROJET DÉTAIL**
```
┌─────────────────────────────────────────────┐
│  ← safe area haut 44pt →                  │
├─────────────────────────────────────────────┤
│  [←] [NOM DU PROJET]          [XP ████░░]  │
└─────────────────────────────────────────────┘
  ← = retour à PROJETS · push navigation
```

---

## 4. COMPOSANT GLOBAL — TOAST XP

```
                    ┌────────────────────────┐
                    │  +15 XP — Exploration  │
                    └────────────────────────┘
                    ↑ top 64pt (sous header)
                    entrée depuis la droite · 2.8s · auto-dismiss
                    non-bloquant, pas de fermeture manuelle
```

---

## 5. COMPOSANT GLOBAL — MODAL GARY 🐻‍❄️

```
┌─────────────────────────────────────────────┐
│            OVERLAY OPAQUE                  │
│                                             │
│         ╔═══════════════════════╗           │
│         ║                       ║           │
│         ║      🐻‍❄️  88pt         ║           │
│         ║                       ║           │
│         ║    GARY MODE          ║           │
│         ║    [citation]         ║           │
│         ║    [badge +100 XP]    ║           │
│         ║    [note + close]     ║           │
│         ║                       ║           │
│         ╚═══════════════════════╝           │
│         tap overlay = fermeture             │
└─────────────────────────────────────────────┘
```

---

## 6. ÉCRAN 1 — HOME

**Référence** : patttterns.com/ux-patterns/landing-pages

### Wireframe complet

```
┌─────────────────────────────────────────────┐  375pt
│ ░░░░░░░░░░ safe area 44pt ░░░░░░░░░░░░░░░░  │
│ [LUCY HURLEY]            [👁 VISITOR ██░░░]  │  56pt header sticky
├─────────────────────────────────────────────┤
│                                             │
│  ┌─────────────────────────────────────┐   │
│  │  CREATIVE                           │   │  HERO CARD
│  │  DIGITAL         [DECO BLOC °]      │   │  fond accent primaire
│  │  DIRECTOR                           │   │  padding 32pt
│  │                                     │   │
│  │  [tagline italic · max 2 lignes]    │   │
│  │                                 🐾  │   │  ← [EE] opacity 7%
│  └─────────────────────────────────────┘   │
│                                             │
│  ┌─────────────────────────────────────┐   │
│  │  NATIONALITÉ                        │   │  STAT CARD 1
│  │  🇫🇷🇬🇧 Franco-britannique           │   │  fond card2
│  └─────────────────────────────────────┘   │
│  ┌─────────────────────────────────────┐   │
│  │  LOCALISATION                       │   │  STAT CARD 2
│  │  📍 Wavrin (59) — Permis B          │   │  fond teal
│  └─────────────────────────────────────┘   │
│  ┌─────────────────────────────────────┐   │
│  │  DISPONIBILITÉ                      │   │  STAT CARD 3
│  │  🟢 Open to work                    │   │  fond orange
│  └─────────────────────────────────────┘   │
│                                             │
│  ┌─────────────────────────────────────┐   │
│  │ MANIFESTO                           │   │  MANIFESTO CARD
│  │ ┃ [citation italic]                 │   │  border-left accent
│  │                                     │   │
│  │  [paragraph — 2 mots bold]          │   │
│  └─────────────────────────────────────┘   │
│                                             │
│  ┌─────────────────────────────────────┐   │  [MASQUÉ → visible
│  │ 🔓 NIVEAU CONFIDENTIEL              │   │  après 7 clics logo]
│  │ [texte archétype Orphan]            │   │
│  │ [badge Konami hint]                 │   │
│  └─────────────────────────────────────┘   │
│                                             │
│  ┌─────────────────────────────────────┐   │
│  │  PRÊTE À COLLABORER                 │   │  CTA STRIP
│  │  hurley.lucy@gmail.com              │   │  fond accent primaire
│  │  +33 6 79 86 87 49                  │   │
│  └─────────────────────────────────────┘   │
│                                             │
│  ↓ scroll indicator (si contenu masqué)    │
├─────────────────────────────────────────────┤
│  [🏠]  [💼]  [⚡]  [👤]  [✉]              │  BOTTOM NAV 83pt
└─────────────────────────────────────────────┘
```

### Comportements HOME

- Stat cards : 1 colonne (mobile) — empilement vertical
- Scroll infini sur la page, bottom nav fixe
- CTA Strip : email + tel = liens natifs (mailto / tel)
- Logo cliquable ×7 → section secrète + animation glitch header

**Checklist UX HOME**
- [ ] Hero above the fold (visible sans scroll)
- [ ] Proposition de valeur en 3 secondes (H1 + tagline)
- [ ] Stat cards : 3 items max (Miller's Law)
- [ ] CTA contact visible en bas de page (pas besoin de chercher)
- [ ] Easter egg paw print 🐾 présent, invisible (opacity 0.07)
- [ ] Section secrète invisible par défaut

---

## 7. ÉCRAN 2 — PROJETS (LIST VIEW)

**Référence** : checklist.design/flows/filtering-items · checklist.design/components/searchbar · patttterns.com/ux-patterns/search-navigation

### Wireframe complet

```
┌─────────────────────────────────────────────┐
│ ░░░░░░░░░░ safe area 44pt ░░░░░░░░░░░░░░░░  │
│ [LUCY HURLEY]            [👁 CURIOUS ████░]  │
├─────────────────────────────────────────────┤
│                                             │
│  PROJETS                                    │  H1
│  6 projets · [N actif] ← compteur filtres  │  label + compteur
│                                             │
│  ┌─────────────────────────────────────┐   │
│  │  🔍  Rechercher un projet...        │   │  SEARCHBAR
│  └─────────────────────────────────────┘   │  (checklist.design)
│                                             │
│  ←scroll→                                  │
│  [TOUS ×] [UX/UI] [DA] [Chef de Projet]    │  FILTER CHIPS
│  [IA & Prompting] [Freelance] [CDI]         │  scroll horizontal
│                                             │
│  ─────────────────────────────────────────  │  separator
│                                             │
│  ┌──────────────┐  ┌──────────────┐        │
│  │              │  │              │        │  PROJECT CARDS
│  │   [IMG]      │  │   [IMG]      │        │  grille 2 colonnes
│  │              │  │              │        │
│  │  Jaccede     │  │  Wegoboard   │        │
│  │  [UX/UI][DA] │  │  [DA][Strat] │        │
│  │  2021–2022   │  │  2023–2024   │        │
│  └──────────────┘  └──────────────┘        │
│                                             │
│  ┌──────────────┐  ┌──────────────┐        │
│  │              │  │              │        │
│  │   [IMG]      │  │   [IMG]      │        │
│  │              │  │              │        │
│  │  Cora        │  │  Equality    │        │
│  │  [UX/UI]     │  │  [UX/UI][DA] │        │
│  │  2022–2023   │  │  2021–2022   │        │
│  └──────────────┘  └──────────────┘        │
│                                             │
│  ┌──────────────┐  ┌──────────────┐        │
│  │              │  │              │        │
│  │   [IMG]      │  │   [IMG]      │        │
│  │              │  │              │        │
│  │  TEC         │  │  Yungo       │        │
│  │  [Stratégie] │  │  [UX/UI][DA] │        │
│  │  2021–2023   │  │  2022–2023   │        │
│  └──────────────┘  └──────────────┘        │
│                                             │
├─────────────────────────────────────────────┤
│  [🏠]  [💼●]  [⚡]  [👤]  [✉]             │  BOTTOM NAV
└─────────────────────────────────────────────┘
```

### Composant — SEARCHBAR

**Référence** : checklist.design/components/searchbar

```
ÉTAT DEFAULT                    ÉTAT FOCUS
┌──────────────────────────┐    ┌──────────────────────────┐
│  🔍  Rechercher...       │    │  🔍  [curseur actif]  ✕  │
└──────────────────────────┘    └──────────────────────────┘
                                 ↑ ✕ = clear · keyboard ouvre
```

- Placeholder : `Rechercher un projet...`
- Recherche en temps réel (pas de bouton submit)
- Recherche sur : titre + tags + entreprise + année
- Clear button (✕) visible dès qu'il y a du texte

### Composant — FILTER CHIPS (scroll horizontal)

**Référence** : checklist.design/flows/filtering-items

```
CHIP INACTIF            CHIP ACTIF             CHIP ACTIF + CLOSE
┌────────────┐          ┌────────────┐          ┌───────────────┐
│   UX/UI    │    →     │  ✓ UX/UI  │    →     │  ✓ UX/UI  ✕  │
└────────────┘          └────────────┘          └───────────────┘
fond white              fond accent             ✕ = supprime filtre
border 2pt              border 2pt              feedback immédiat
```

**Filtres disponibles**

| Chip | Filtre sur | Projets concernés |
|---|---|---|
| TOUS | Reset all | 6/6 |
| UX/UI | Type de compétence | Jaccede, Cora, Equality, Yungo |
| DA | Type de compétence | Wegoboard, Equality, Yungo |
| CHEF DE PROJET | Type de compétence | TEC, Wegoboard |
| IA & PROMPTING | Type de compétence | TEC |
| FREELANCE | Type de contrat | Wegoboard, Studiø Kaøs |
| CDI | Type de contrat | TEC, Jaccede |

**Règles filtres** (checklist.design — Filtering Items)
- [ ] Chips placés directement au-dessus de la collection (proximité)
- [ ] Filtres actifs clairement indiqués (coche + fermeture individuelle ✕)
- [ ] Compteur mis à jour en temps réel : `6 projets` → `3 projets`
- [ ] Reset global possible : chip TOUS remet tout à zéro
- [ ] Filtres multi-sélectables (UX/UI + DA = projets ayant les deux)
- [ ] Empty state si aucun résultat (voir section États)

### Composant — PROJECT CARD (grille)

```
┌──────────────────────────────┐
│                              │  hauteur image : 140pt
│           [IMG]              │  ratio 3:2 · object-fit cover
│                              │
├──────────────────────────────┤  border 2pt
│  Jaccede.com                 │  titre 13pt bold
│  [UX/UI] [DA] [Accessibilité]│  tags horizontaux scroll
│  2021 – 2022                 │  année 9pt · opacity 55%
└──────────────────────────────┘
   shadow 4px offset · tap = push → Détail
```

### État EMPTY STATE (filtres actifs, 0 résultat)

**Référence** : checklist.design/flows/filtering-items

```
┌─────────────────────────────────────────────┐
│                                             │
│            🐻‍❄️                              │
│                                             │
│      Aucun projet trouvé                   │
│      avec ces filtres.                     │
│                                             │
│   [Modifier les filtres]  [Tout effacer]   │
│                                             │
└─────────────────────────────────────────────┘
```

- Gary 🐻‍❄️ apparaît dans le empty state — cohérence narrative
- 2 actions claires : modifier ou reset
- Pas de message d'erreur — ton de marque conservé

### État RECHERCHE VIDE (aucun résultat texte)

```
┌─────────────────────────────────────────────┐
│                                             │
│            🐻‍❄️                              │
│                                             │
│      Gary n'a rien trouvé               │
│      pour « [terme recherché] »          │
│                                             │
│         [Effacer la recherche]             │
│                                             │
└─────────────────────────────────────────────┘
```

**Checklist UX PROJETS (list)**
- [ ] Searchbar visible dès l'entrée (pas cachée derrière une icône)
- [ ] Filtres au-dessus de la collection (proximité — Gestalt)
- [ ] Compteur de résultats dynamique
- [ ] Filtres actifs identifiables en un coup d'œil
- [ ] Reset accessible sans navigation (chip TOUS)
- [ ] Empty state utile avec action claire
- [ ] Project cards : titre lisible + tags + date (3 infos max)
- [ ] Tap target minimum 44pt sur les chips de filtre

---

## 8. ÉCRAN 3 — PROJET DÉTAIL (push view)

**Référence** : checklist.design/components/carousel · patttterns.com/ui-patterns/carrousel-galleries

### Navigation push

```
TAP sur project card
       ↓
Slide depuis la droite (push navigation standard iOS/Android)
       ↓
[← PROJETS]  [NOM DU PROJET]  [XP bar]  ← nouveau header
       ↓
Contenu projet en scroll
       ↓
Sticky CTA en bas : [Swipe bas = retour] ou [← back]
```

### Wireframe PROJET DÉTAIL complet

```
┌─────────────────────────────────────────────┐
│  ← PROJETS    JACCEDE.COM      [XP bar]     │  header sticky
├─────────────────────────────────────────────┤
│                                             │
│  ┌─────────────────────────────────────┐   │
│  │                                     │   │  IMAGE HERO
│  │           [IMG FULLWIDTH]           │   │  hauteur 220pt
│  │                                     │   │  ratio 16:9
│  └─────────────────────────────────────┘   │
│                                             │
│  ─────── OVERVIEW ──────────────────────   │  section label
│                                             │
│  [UX/UI] [Accessibilité] [Mobile-first]    │  tags catégories
│                                             │
│  ┌─────────────────────────────────────┐   │
│  │  CONTEXTE          │  MON RÔLE      │   │  2 colonnes
│  │  Assoc. loi 1901   │  UX/UI Design  │   │
│  │  Accessibilité PMR │  Design System │   │
│  └─────────────────────────────────────┘   │
│                                             │
│  ┌─────────────────────────────────────┐   │
│  │  PÉRIODE     │  TYPE          │  XP  │   │  3 colonnes
│  │  2021–2022   │  Freelance     │  +20  │  │  ← XP gagné
│  └─────────────────────────────────────┘   │
│                                             │
│  ─────── LE DÉFI ───────────────────────   │
│                                             │
│  [Description du problème UX à résoudre.   │
│   2–3 phrases maximum. Concis, factuel.]    │
│                                             │
│  ─────── MON PROCESS ───────────────────   │
│                                             │
│  ┌─────────────────────────────────────┐   │
│  │  01  RESEARCH                       │   │  ÉTAPE 1
│  │  [description courte]               │   │
│  └─────────────────────────────────────┘   │
│  ┌─────────────────────────────────────┐   │
│  │  02  DEFINE                         │   │  ÉTAPE 2
│  │  [description courte]               │   │
│  └─────────────────────────────────────┘   │
│  ┌─────────────────────────────────────┐   │
│  │  03  DESIGN                         │   │  ÉTAPE 3
│  │  [description courte]               │   │
│  └─────────────────────────────────────┘   │
│  ┌─────────────────────────────────────┐   │
│  │  04  TEST & ITERATE                 │   │  ÉTAPE 4
│  │  [description courte]               │   │
│  └─────────────────────────────────────┘   │
│                                             │
│  ─────── VISUELS ───────────────────────   │
│                                             │
│  ┌─────────────────────────────────────┐   │
│  │                                     │   │  CAROUSEL
│  │         [SCREENSHOT 1]              │   │  swipe horizontal
│  │                                     │   │  ratio 4:3 ou 9:16
│  │              ● ○ ○ ○                │   │  dots pagination
│  └─────────────────────────────────────┘   │
│                                             │
│  ─────── RÉSULTATS ─────────────────────   │
│                                             │
│  [Ce que ce projet démontre               │
│   concrètement. Learnings, impact,        │
│   compétences prouvées.]                   │
│                                             │
│  ─────── COMPÉTENCES DÉMONTRÉES ────────   │
│                                             │
│  [UX Research] [Mobile-first]              │
│  [Design System] [Accessibilité]           │
│  [Gamification]                            │
│                                             │
│  ─────── PROJETS SIMILAIRES ─────────     │
│                                             │
│  ←scroll→                                  │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐   │
│  │  [IMG]   │ │  [IMG]   │ │  [IMG]   │   │  mini cards
│  │ Equality │ │ Cora     │ │ Yungo    │   │  scroll horiz.
│  └──────────┘ └──────────┘ └──────────┘   │
│                                             │
│  ─────────────────────────────────────    │
│                                             │
├─────────────────────────────────────────────┤
│  [✉ ME CONTACTER]                          │  CTA STICKY BOTTOM
│  ← au-dessus du bottom nav                 │  fond accent primaire
├─────────────────────────────────────────────┤
│  [🏠]  [💼●]  [⚡]  [👤]  [✉]             │  BOTTOM NAV
└─────────────────────────────────────────────┘
```

### Composant — CAROUSEL VISUELS

**Référence** : checklist.design/components/carousel · patttterns.com/ui-patterns/carrousel-galleries

```
CAROUSEL DEFAULT
┌─────────────────────────────────────────────┐
│                                             │
│              [VISUEL 1 / 4]                 │
│                                             │
│                  ● ○ ○ ○                    │  dots de pagination
└─────────────────────────────────────────────┘
   swipe left/right · dots cliquables · pas d'autoplay

CAPTION (optionnel sous le visuel)
   [Nom de l'écran ou du livrable]
```

**Règles carousel**
- [ ] Swipe natif gauche/droite (gesture mobile)
- [ ] Dots de pagination visibles (position et nombre d'images)
- [ ] Pas d'autoplay — l'utilisateur contrôle
- [ ] Min 2 images, max 8 par projet
- [ ] Tap sur image → zoom fullscreen (modal)

### CTA STICKY BOTTOM (Projet Détail)

```
┌─────────────────────────────────────────────┐
│  [✉ CONTACTER LUCY — HURLEY.LUCY@GMAIL.COM] │
└─────────────────────────────────────────────┘
   fond accent primaire · border top 2pt
   hauteur 56pt · tap → mailto: natif
   visible au-dessus du bottom nav
```

**Checklist UX PROJET DÉTAIL**
- [ ] Retour visible (← PROJETS) — navigation claire
- [ ] Image hero fullwidth en entrée (impact immédiat)
- [ ] Contexte + rôle lisibles en 5 secondes (above fold après image)
- [ ] Process numéroté (séquentiel — compréhension rapide)
- [ ] Carousel swipeable (geste natif mobile)
- [ ] Dots pagination sur carousel
- [ ] Compétences en tags (scannables)
- [ ] Projets similaires → navigation dans le portfolio
- [ ] CTA contact sticky — jamais perdu en cours de lecture
- [ ] XP +20 gagné à l'arrivée sur cette page

---

## 9. ÉCRAN 4 — SKILLS

*(voir brief v1.0 — identique, adapté mobile)*

```
┌─────────────────────────────────────────────┐
│  [LUCY HURLEY]            [XP bar]          │  header
├─────────────────────────────────────────────┤
│                                             │
│  SKILLS                                     │
│  Tape sur les tags pour gagner des XP →    │
│                                             │
│  [UX / UI DESIGN ──────────]               │  catégorie pill
│  [tag] [tag] [tag] [tag]                   │  flex wrap
│  [tag] [tag] [tag]                         │
│                                             │
│  [DIRECTION ARTISTIQUE ────]               │
│  [tag] [tag] [tag] [tag]                   │
│  [tag] [tag]                               │
│                                             │
│  [CHEF DE PROJET DIGITAL ──]               │
│  [tag] [tag] [tag] [tag]                   │
│  [tag] [tag]                               │
│                                             │
│  [IA & PROMPTING ──────────]               │
│  [tag] [tag] [tag] [tag]                   │
│  [tag]                                     │
│                                             │
│  [LANGUES ─────────────────]               │
│  [🇫🇷 C2] [🇬🇧 C2] [🇪🇸 B2]                 │
│                                             │
│  ┌ - - - - - - - - - - - - - - - - - ┐    │  hint dashed
│  │  💡 ↑↑↓↓ ou cherche la patte 🐾   │    │
│  └ - - - - - - - - - - - - - - - - - ┘    │
│                                             │
├─────────────────────────────────────────────┤
│  [🏠]  [💼]  [⚡●]  [👤]  [✉]             │  BOTTOM NAV
└─────────────────────────────────────────────┘
```

---

## 10. ÉCRAN 5 — MOI (PARCOURS + ABOUT)

### Fusion des sections : identité + expériences + lore

```
┌─────────────────────────────────────────────┐
│  [LUCY HURLEY]            [XP bar]          │  header
├─────────────────────────────────────────────┤
│                                             │
│  MOI                                        │  H1
│                                             │
│  ── IDENTITÉ ──────────────────────────    │
│                                             │
│  ┌─────────────────────────────────────┐   │
│  │  🇫🇷🇬🇧 Franco-britannique           │   │
│  └─────────────────────────────────────┘   │
│  ┌─────────────────────────────────────┐   │
│  │  📍 Wavrin, Nord (59) — Permis B    │   │
│  └─────────────────────────────────────┘   │
│  ┌─────────────────────────────────────┐   │
│  │  🟢 Open to work                    │   │
│  └─────────────────────────────────────┘   │
│                                             │
│  ── MANIFESTO ─────────────────────────    │
│                                             │
│  ┌─────────────────────────────────────┐   │
│  │ ┃ [citation italic]                 │   │
│  │   [paragraph]                       │   │
│  └─────────────────────────────────────┘   │
│                                             │
│  ── EXPÉRIENCES ───────────────────────    │
│                                             │
│  [CARD ACCORDION × 7]                      │  voir wireframe XP
│  → tap = expand + +3 XP                    │
│                                             │
│  ── FORMATION ─────────────────────────    │
│                                             │
│  [2021–22]  Certificat Web & Multimédia    │
│  [2015–18]  Licence Marketing & Comm.      │
│  [2013–15]  Bac Négociation & Clientèle    │
│                                             │
│  ── LORE [VISIBLE SI ≥ 40 XP] ─────────   │
│                                             │
│  ┌─────────────────────────────────────┐   │  débloqué progressif
│  │  🐻‍❄️  GARY                            │   │
│  │  [description Gary]                 │   │
│  │                                     │   │
│  │  🌊  VOYAGES                         │   │
│  │  Australie · Suisse · Thaïlande     │   │
│  │                                     │   │
│  │  [ARCHÉTYPE — visible si ≥ 100 XP] │   │
│  │  The Orphan · Blade Runner 2049...  │   │
│  └─────────────────────────────────────┘   │
│                                             │
│  ┌─────────────────────────────────────┐   │  [MASQUÉ → visible
│  │  🔓 NIVEAU CONFIDENTIEL             │   │  après 7 clics logo]
│  │  The Orphan · ↑↑↓↓ hint            │   │
│  └─────────────────────────────────────┘   │
│                                             │
├─────────────────────────────────────────────┤
│  [🏠]  [💼]  [⚡]  [👤●]  [✉]             │  BOTTOM NAV
└─────────────────────────────────────────────┘
```

### Lore progressif — débloquage par XP

| XP requis | Contenu débloqué | Indicateur |
|---|---|---|
| 0 | Section Lore masquée | Section invisible |
| 40 (CURIOUS) | 🐻‍❄️ Gary + Voyages | Apparaît avec fadeUp |
| 100 (INTERESTED) | Archétype + Inspirations | Débloqué avec toast |
| 190 (HIRE ME) | Texte confidentiel complet | Border accent spécial |

---

## 11. ÉCRAN 6 — CONTACT

```
┌─────────────────────────────────────────────┐
│  [LUCY HURLEY]            [XP bar]          │  header
├─────────────────────────────────────────────┤
│                                             │
│  CONTACT                                    │  H1
│                                             │
│  ┌─────────────────────────────────────┐   │
│  │  TRAVAILLONS                        │   │  HERO CONTACT
│  │  ENSEMBLE                           │   │  fond accent primaire
│  │                                     │   │
│  │  ┌─────────────────────────────┐   │   │
│  │  │  EMAIL   [lien mail]        │   │   │
│  │  └─────────────────────────────┘   │   │
│  │  ┌─────────────────────────────┐   │   │
│  │  │  TÉL     [lien tel]         │   │   │
│  │  └─────────────────────────────┘   │   │
│  │  ┌─────────────────────────────┐   │   │
│  │  │  LINKEDIN [lien ext ↗]      │   │   │
│  │  └─────────────────────────────┘   │   │
│  │  ┌─────────────────────────────┐   │   │
│  │  │  LOCALISATION  📍 Wavrin    │   │   │
│  │  └─────────────────────────────┘   │   │
│  └─────────────────────────────────────┘   │
│                                             │
│  ┌─────────────────────────────────────┐   │  SCORE FINAL
│  │  🏆 SCORE : 145 XP · INTERESTED    │   │  fond ink (dark)
│  │  3/5 sections · 🐾 · 🔓            │   │
│  │  Il te manque 45 XP pour HIRE ME   │   │
│  └─────────────────────────────────────┘   │
│                                             │
├─────────────────────────────────────────────┤
│  [🏠]  [💼]  [⚡]  [👤]  [✉●]             │  BOTTOM NAV
└─────────────────────────────────────────────┘
```

**Checklist UX CONTACT** (checklist.design — Contact Us)
- [ ] Personnalité visible dès le H2
- [ ] Chaque lien de contact cliquable nativement
- [ ] LinkedIn ouvre navigateur externe
- [ ] Localisation non-cliquable (pas de Maps — friction)
- [ ] Score final affiché (Peak-End Rule — dernier souvenir)
- [ ] Page accessible depuis bottom nav toujours visible

---

## 12. FLUX COMPLETS — NAVIGATION

### Flux 1 — Découverte d'un projet (parcours principal)

```
1. HOME → tap [💼] dans bottom nav
   → Transition : slide horizontal
2. PROJETS LIST → scan grille
   → Tap projet card (ex: Jaccede)
   → Transition : push depuis droite
3. PROJET DÉTAIL
   → Swipe visuels carousel
   → Toast : +20 XP (arrivée sur page)
   → Lecture process + résultats
   → Tap [← PROJETS] ou swipe droite
   → Transition : pop retour
4. PROJETS LIST → retour, position préservée
```

### Flux 2 — Filtrage des projets (checklist.design — Filtering Items)

```
1. PROJETS LIST → tap chip [UX/UI]
   → Chip passe en état actif (coche + ✕)
   → Grille filtrée en temps réel
   → Compteur mis à jour : "3 projets"
2. Tap chip [DA] en plus
   → Multi-sélection : "2 projets"
3. Tap ✕ sur chip [UX/UI]
   → Retrait filtre : "4 projets"
4. Tap [TOUS]
   → Reset complet : "6 projets"
```

### Flux 3 — Recherche de projet

```
1. Tap searchbar → keyboard s'ouvre
   → Header reste fixe
   → Grille se filtre en temps réel
2. Saisie "jaccede" → 1 résultat
3. ✕ clear → reset → 6 projets
4. Aucun résultat → Empty state + 🐻‍❄️
```

### Flux 4 — Progression XP et lore

```
1. Arrive sur app : VISITOR (0 XP)
2. Visite PROJETS : +15 XP → toast
3. Ouvre 1 projet : +20 XP → CURIOUS (40 XP)
   → Toast "🔓 Nouveau contenu débloqué !"
   → MOI : section Gary + Voyages apparaît
4. Click skills × 4 : +20 XP = 60 XP
5. Ouvre 2ème projet : +20 XP = 80 XP
   → Visite CONTACT : +15 XP = 95 XP
   → Tap skills × 1 : +5 XP = 100 XP
   → INTERESTED → Archétype débloqué
6. Continue jusqu'à 190 XP → HIRE ME ★
```

### Flux 5 — Easter egg Konami (mobile : swipe pattern)

```
Note : code Konami classique non disponible mobile (pas de clavier)
Alternative mobile : swipe pattern secret
↑ ↑ ↓ ↓ ← → ← → = 8 swipes séquentiels rapides
       ↓
Modal Gary 🐻‍❄️ s'ouvre + +100 XP
```

---

## 13. ÉTATS GLOBAUX À DOCUMENTER

### Skeleton loading (checklist.design/components/skeleton)

```
PROJETS LIST — LOADING
┌──────────────┐  ┌──────────────┐
│  ░░░░░░░░░░  │  │  ░░░░░░░░░░  │  rectangles animés
│  ░░░░░░░░░░  │  │  ░░░░░░░░░░  │  pulse 0.4→0.8→0.4
│  ░░░░░░░░    │  │  ░░░░░░░░    │  même layout que le
│  ░░░░░       │  │  ░░░░░       │  contenu final
└──────────────┘  └──────────────┘  → pas de layout shift
```

### Offline state

```
┌─────────────────────────────────────────────┐
│  🐻‍❄️                                         │
│  Gary ne trouve pas le réseau.              │
│  [Réessayer]                               │
└─────────────────────────────────────────────┘
```

### XP Level Up

```
Toast standard :    "+15 XP — Exploration"
                           ↓ si franchissement de seuil
Toast level up :    "⚡ INTERESTED — Nouveau contenu débloqué !"
                           ↓ simultanément
XP bar :            animation pulse 1× + nouvelle couleur
MOI section :       nouveau contenu apparaît avec fadeUp
```

---

## 14. GESTURES MOBILES DOCUMENTÉES

| Zone | Gesture | Action |
|---|---|---|
| Projet détail | Swipe droite | Retour PROJETS |
| Carousel visuels | Swipe gauche/droite | Image suivante/précédente |
| Bottom sheet filtres | Swipe bas | Fermer |
| Liste PROJETS | Pull to refresh | Reload |
| Tout l'écran | Swipe haut ×8 séquentiels | Easter egg Konami mobile |
| Image carousel | Tap | Zoom fullscreen |
| Header logo | Tap ×7 | Section secrète |
| Paw print hero | Tap | +50 XP |

---

## 15. LIVRABLES FIGMA — v2.0

### Frames à produire (mobile 375×812)

```
📱 COMPOSANTS GLOBAUX
   WF-00a  Bottom Tab Bar (5 états)
   WF-00b  Header sticky (default + sous-page + glitch)
   WF-00c  Toast XP (3 variantes)
   WF-00d  Modal Gary 🐻‍❄️
   WF-00e  Project Card (default + skeleton)
   WF-00f  Filter Chip (4 états)
   WF-00g  Searchbar (default + focus + filled)

📱 ÉCRANS PRINCIPAUX
   WF-01   HOME (default)
   WF-01b  HOME (section secrète révélée)
   WF-02   PROJETS LIST (default — 6 projets)
   WF-02b  PROJETS LIST (filtre UX/UI actif)
   WF-02c  PROJETS LIST (recherche active)
   WF-02d  PROJETS LIST (empty state)
   WF-03   PROJET DÉTAIL — Jaccede
   WF-03b  PROJET DÉTAIL — Wegoboard
   WF-03c  PROJET DÉTAIL — Cora
   WF-03d  PROJET DÉTAIL — Equality
   WF-03e  PROJET DÉTAIL — TEC
   WF-03f  PROJET DÉTAIL — Yungo
   WF-04   SKILLS (default)
   WF-04b  SKILLS (tags activés — état mi-parcours)
   WF-05   MOI (default — 0 XP)
   WF-05b  MOI (CURIOUS — lore Gary visible)
   WF-05c  MOI (INTERESTED — archétype visible)
   WF-06   CONTACT (default)
   WF-06b  CONTACT (score final ★ HIRE ME)

📱 FLOWS PROTOTYPAGE
   FLOW-01  Navigation bottom tab (5 tabs)
   FLOW-02  Projet list → détail → retour
   FLOW-03  Filtres (activer + désactiver + reset)
   FLOW-04  Recherche (saisie + résultats + empty)
   FLOW-05  Progression XP (visitor → hire me)
   FLOW-06  Easter egg modal Gary 🐻‍❄️
```

### Convention nommage frames

```
[SCREEN]-[STATE]-[VARIANT]

Exemples :
   HOME-default
   HOME-secret-revealed
   PROJETS-filter-uxui-active
   PROJETS-search-empty
   DETAIL-jaccede-default
   DETAIL-wegoboard-carousel-slide2
   MOI-curious-lore-visible
   CONTACT-hireme-score
```

---

## 16. CHECKLIST GLOBALE FINALE

### Navigation mobile
- [ ] Bottom tab bar sur tous les écrans principaux
- [ ] Bottom tab bar toujours visible (même sous-pages)
- [ ] Tab actif identifiable sans ambiguïté
- [ ] Push navigation pour les sous-pages (PROJET DÉTAIL)
- [ ] Retour accessible (← bouton + swipe droite)
- [ ] Tab PROJETS porte un badge si nouveau contenu

### Projets & filtres
- [ ] Searchbar visible sans interaction préalable
- [ ] Filtres au-dessus de la grille (proximité)
- [ ] Compteur dynamique visible (N projets)
- [ ] Multi-sélection de filtres
- [ ] Reset accessible (chip TOUS)
- [ ] Empty state avec action et 🐻‍❄️

### Projet détail
- [ ] Image hero fullwidth en entrée
- [ ] Retour visible (← + label de la page précédente)
- [ ] CTA contact sticky (jamais perdu pendant lecture)
- [ ] Carousel swipeable + dots pagination
- [ ] Projets similaires en bas (engagement)
- [ ] +20 XP gagné à l'arrivée

### Gamification
- [ ] XP bar dans le header sur toutes les pages
- [ ] Toast non-bloquant, auto-dismiss 2.8s
- [ ] Level up : toast spécial + contenu débloqué
- [ ] 🐻‍❄️ Gary dans empty state ET dans modal easter egg
- [ ] Score final dans CONTACT (Peak-End Rule)

### Accessibilité
- [ ] Tap targets min 44×44pt partout
- [ ] Actions primaires dans la zone basse (Thumb Zone)
- [ ] Skeleton loading (pas de layout shift)
- [ ] Gestures alternatives (pas que swipe — boutons visibles aussi)
- [ ] prefers-reduced-motion : animations réductibles

---

*Wireframe Brief Mobile v2.0 · Lucy Hurley Portfolio · Mai 2026*
*Sources : checklist.design/flows/filtering-items · checklist.design/components/tabs*
*checklist.design/components/searchbar · checklist.design/components/carousel*
*patttterns.com/ux-patterns/landing-pages · patttterns.com/ui-patterns/navbars-toolbars*
*patttterns.com/ui-patterns/carrousel-galleries*
