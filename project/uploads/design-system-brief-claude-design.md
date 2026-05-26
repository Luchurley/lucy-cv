# DESIGN SYSTEM BRIEF
## Lucy Hurley Portfolio — Miami Venise
### Pour : Claude Design · Mai 2026

---

## 0. CONTEXTE DU PROJET

Portfolio interactif gamifié pour **Lucy Maurice Hurley** — UX/UI Designer, Chef de Projet Digital, Directrice Artistique, Prompteuse IA.

**Ce n'est pas un CV.** C'est une expérience narrative interactive avec :
- Système de progression XP (niveaux, badges, easter eggs)
- Navigation gamifiée entre 4 sections principales
- Mascotte officielle : 🐻‍❄️ (Samoyed nommé Gary)
- Easter eggs cachés et contenu à débloquer
- Esthétique **Neubrutalism** — structure brutale, couleurs vibrantes

---

## 1. PALETTE — MIAMI VENISE

> Énergie neon de Miami + chaleur dorée et canal de Venise.
> Fond cream chaud, shadows noires — **vrai neubrutalism, light mode uniquement.**

### Couleurs principales

| Token | Hex | Nom | Rôle |
|---|---|---|---|
| `color/bg` | `#FFF8F0` | Crépi Vénitien | Fond global — cream chaud, pas blanc froid |
| `color/card` | `#FFFFFF` | Blanc Pur | Surfaces cards, header sticky |
| `color/ink` | `#0A0806` | Encre Chaude | Texte, borders, shadows — quasi-noir légèrement brun |
| `color/primary` | `#FF0055` | Rose Miami | CTA primaire, hero, titres forts, logo accent |
| `color/secondary` | `#00B8C4` | Teal Canal | Navigation active, info cards, liens, CTA strip |
| `color/tertiary` | `#FF5500` | Orange Tramonto | Toasts XP, notifications, accents vifs |

### Règles d'usage

- `#FF0055` — Jamais en texte normal sur fond cream (ratio 4.4:1 < 4.5 AA). Réservé aux titres ≥ 18px et aux éléments graphiques.
- `#00B8C4` — Toujours avec texte `#0A0806` dessus (ratio 5.2:1 ✅)
- `#FF5500` — Toujours avec texte blanc `#FFFFFF` dessus (ratio 4.8:1 ✅)
- Ne jamais mettre deux accents adjacents sans séparateur ink
- Les cards `#FFFFFF` sur fond `#FFF8F0` créent la hiérarchie uniquement via border + shadow — **pas de couleur de fond alternative**

---

## 2. BACKGROUND — NOISE TEXTURE

> **Le fond n'est pas un cream plat. Il porte une texture grain.**

### Spécifications

```
Type      : Fractal Noise (feTurbulence SVG)
Méthode   : SVG base64 en overlay fixe
baseFrequency : 0.75
numOctaves    : 4
stitchTiles   : stitch
Opacity       : 5.5% (0.055)
mixBlendMode  : multiply
backgroundSize: 250px × 250px
backgroundRepeat : repeat
Position      : fixed, inset 0, z-index top, pointer-events none
```

### Dans Figma

Créer un rectangle full-frame :
- Effet : **Noise** (plugin ou effet natif)
- Opacity : **5–6%**
- Blend mode : **Multiply**
- Couvrir toutes les frames / composants

### Pourquoi

Le grain donne une qualité "print / riso" au fond cream. Il évite l'effet écran trop propre et ajoute de la texture organique cohérente avec l'esthétique neubrutalism.

---

## 3. TYPOGRAPHIE

### Familles

| Famille | Source | Usage |
|---|---|---|
| **Bebas Neue** | Google Fonts | Display — H1, H2, sections headers, hero |
| **Space Mono** | Google Fonts | Body — texte, UI, labels, tags, buttons |

### Échelle typographique

| Token | Famille | Taille | Poids | Usage |
|---|---|---|---|---|
| `type/display/xl` | Bebas Neue | 92px | Regular | Hero principal |
| `type/display/lg` | Bebas Neue | 72px | Regular | Titres de section |
| `type/display/md` | Bebas Neue | 40px | Regular | Sous-titres |
| `type/display/sm` | Bebas Neue | 28px | Regular | Card titles |
| `type/body/lg` | Space Mono | 14px | 400/700 | Corps principal |
| `type/body/md` | Space Mono | 12px | 400/700 | Corps secondaire |
| `type/body/sm` | Space Mono | 10px | 700 | Labels, tags |
| `type/body/xs` | Space Mono | 9px | 700 | Micro-labels, hints |

### Règles

- Bebas Neue = **toujours uppercase**, lettre-spacing 1–4px
- Space Mono = italic disponible pour citations et manifesto
- Pas d'autre famille dans ce projet
- Line-height corps : 1.7–1.85

---

## 4. NEUBRUTALISM — RÈGLES SYSTÈME

> Ces règles définissent l'identité visuelle. Aucune exception.

### Borders

```
--border-base   : 2.5px solid #0A0806
--border-thick  : 3px solid #0A0806
--border-brutal : 4px solid #0A0806
--border-thin   : 1.5px solid #0A0806
--border-dashed : 1.5px dashed #0A0806
```

- **Toujours `#0A0806`** — jamais de border colorée sauf cas exceptionnel documenté
- **Aucun border-radius** — 0px partout. Exception maximale : 2px uniquement si contrainte technique
- Borders sur tous les composants interactifs sans exception

### Shadows — Hard Offset (signature neubrutalism)

```
--shadow/sm  : 2px 2px 0 #0A0806
--shadow/md  : 4px 4px 0 #0A0806
--shadow/lg  : 6px 6px 0 #0A0806
--shadow/xl  : 8px 8px 0 #0A0806
```

- **Zéro blur** — pas de box-shadow avec blur. Toujours `0` en troisième paramètre
- **Couleur fixe `#0A0806`** — jamais de shadow colorée sauf variantes spécifiques documentées
- Shadow accent rose (hero uniquement) : `8px 8px 0 #FF0055`

### Interactions — États

| État | Transform | Shadow | Background |
|---|---|---|---|
| Default | none | `shadow/md` | défini par composant |
| Hover | `translate(-2px, -2px)` | `shadow/lg` | idem |
| Active / Pressed | `translate(3px, 3px)` | none | `#0A0806` |
| Disabled | none | none | opacity 0.4 |

### Anti-patterns

- ❌ Gradients — interdits
- ❌ Border-radius > 2px
- ❌ Shadows avec blur
- ❌ Ombres colorées sur composants standard
- ❌ Animations > 400ms
- ❌ Transitions `ease-in-out` prolongées — préférer `snap` (0.1s) ou `quick` (0.15s)

---

## 5. SPACING & GRID

### Tokens espacement

```
--space/xs  : 4px
--space/sm  : 8px
--space/md  : 14px
--space/lg  : 20px
--space/xl  : 32px
--space/2xl : 48px
--space/3xl : 72px
```

### Layout

- Max-width contenu : **920px**, centré
- Padding horizontal : **28px** (desktop) / **16px** (mobile)
- Grid principale : **12 colonnes**, gap 14px
- Cards gap : **14px** standard

---

## 6. COMPOSANTS — CATALOGUE COMPLET

### 6.1 BUTTON

**3 variantes × 3 états**

```
Variante DEFAULT
  bg: #FFFFFF · color: #0A0806
  border: 2.5px solid #0A0806 · shadow: 3px 3px 0 #0A0806
  font: Space Mono 700 11px uppercase · letter-spacing: 2px · padding: 7px 14px

Variante ACTIVE (nav selected, pressed)
  bg: #0A0806 · color: #00B8C4 (teal)
  shadow: none · transform: translate(3px,3px)

Variante ACCENT
  bg: #FF0055 ou #00B8C4 selon contexte · color: #0A0806
  shadow: 4px 4px 0 #0A0806
```

### 6.2 CARD

**3 niveaux**

```
CARD BASE
  bg: #FFFFFF · border: 2.5px · shadow: 5px 5px 0 #0A0806
  padding: 20px 24px · radius: 0

CARD HERO (section principale)
  bg: #FF0055 · border: 3px · shadow: 8px 8px 0 #0A0806
  padding: 52px 44px · overflow: hidden
  + bloc décoratif rotaté en position absolute (bg teal ou orange, opacity 0.35)

CARD INTERACTIVE (expandable, expériences)
  Default : shadow 5px · bg white
  Open    : shadow none · transform translate(5px,5px) · bg = couleur accent de l'item
  Transition : all 0.15s
```

### 6.3 SKILL TAG

```
DEFAULT
  bg: #FFFFFF · border: 2.5px · shadow: 3px 3px 0 · padding: 6px 14px
  font: Space Mono 700 11px

CLICKED 1x
  bg: #FFFFFF · indicateur "·" ajouté

CLICKED 2x (max)
  bg: couleur accent de la catégorie · shadow: none
  transform: translate(3px,3px)
```

### 6.4 XP BAR

```
Container : width 72px · height 12px · border 2px · bg #FFF8F0
Fill      : bg #FF5500 (niveaux 0–2) → #FF0055 (niveau max HIRE ME)
Transition: width 0.6s cubic-bezier(.4,0,.2,1)
Pas de border-radius
```

### 6.5 TOAST NOTIFICATION

```
Position  : fixed · top 20px · right 20px · z-index 9000
bg        : #FF5500 · border 2.5px · shadow 4px 4px 0
padding   : 10px 18px · font Space Mono 700 13px
color texte : #FFFFFF
Animation : slideRight 0.3s ease (depuis droite)
Durée     : 2800ms puis disparition
Max-width : 260px
```

### 6.6 MODAL (Gary / Secrets)

```
Overlay   : rgba(10,8,6,0.88) · fixed inset 0 · z-index 8000
Card      : bg #FFFFFF · border 3px · shadow 8px 8px 0 #FF0055
padding   : 48px 40px · max-width 420px · text-align center
Animation : fadeUp 0.3s ease
```

### 6.7 HEADER STICKY

```
bg        : #FFFFFF · border-bottom 3px solid #0A0806
position  : sticky top 0 · z-index 500
padding   : 12px 28px
Layout    : flex · space-between · align-center · flex-wrap · gap 12px
Contenu   : Logo | XP Bar | Navigation
```

### 6.8 STAT CARD (info blocks)

```
3 colonnes, Miller's Law (max 3)
Card 1 — Nationalité  : bg #FFF8F0 (cream secondaire)
Card 2 — Localisation : bg #00B8C4 (teal)
Card 3 — Disponibilité: bg #FF5500 (orange)
Toutes : border 2.5px · shadow 4px · padding 16px 18px
Label  : 9px 700 opacity 0.55 · letterSpacing 2px
Value  : 12px 700
```

### 6.9 BLOCKQUOTE (Manifesto)

```
border-left : 5px solid #FF0055
padding-left: 20px
font        : Space Mono italic 14px · line-height 1.8
color       : #0A0806 opacity 0.55
```

---

## 7. GAMIFICATION — SYSTÈME VISUEL

### Niveaux & Couleurs associées

| XP | Label | Couleur XP bar | Couleur badge |
|---|---|---|---|
| 0–39 | VISITOR | `#0A0806` opacity 0.45 | Neutre |
| 40–99 | CURIOUS | `#00B8C4` | Teal |
| 100–189 | INTERESTED | `#FF5500` | Orange |
| 190+ | ★ HIRE ME ★ | `#FF0055` | Rose |

### Toast XP

- Background : `#FF5500`
- Texte montant : `+15 XP —` en rose `#FF0055`
- Texte label : blanc `#FFFFFF`

### Badges

- Forme : rectangulaire, border 2px, shadow 2px
- Background : couleur de la rareté (commun = teal, rare = orange, légendaire = rose)
- Font : Space Mono 700 9px uppercase

---

## 8. MASCOTTE — 🐻‍❄️ GARY

> ⚠️ La mascotte de ce portfolio est un **Samoyed** représenté par l'emoji **🐻‍❄️**
> Ne jamais utiliser 🐕 ou tout autre emoji canin pour représenter Gary.

### Identité

- **Nom** : Gary
- **Race** : Samoyed (chien blanc, pelage dense)
- **Emoji officiel** : 🐻‍❄️ (ours polaire blanc = approximation emoji la plus proche du blanc immaculé du Samoyed)
- **Personnalité** : stratégique, silencieux, il juge, il approuve rarement, il est omniprésent

### Rôles dans l'interface

| Contexte | Apparence | Déclencheur |
|---|---|---|
| Easter egg principal | Modal centré, fond overlay sombre | Code Konami ↑↑↓↓←→←→BA |
| Paw print caché | 🐾 opacity 0.07 dans hero | Click zone cachée → +50 XP |
| Inactivité 5 min | Apparition discrète avec phrase | Timer passif |
| GARY MODE | Full modal + animation + +100 XP | Konami uniquement |
| Footer hint | 🐻‍❄️ mentionné textuellement | Toujours visible |

### Gary Modal — specs

```
Emoji    : 🐻‍❄️ · font-size 88px · line-height 1
Titre    : "GARY MODE" · Bebas Neue 52px · color #FF0055
Citation : Space Mono italic 13px · color opacity 0.55
Badge    : bg #FF5500 · "GARY APPROVED" ou "+100 XP EARNED 🎮"
Note     : "↑↑↓↓←→←→BA · Click anywhere to close" · opacity 0.4
```

### Ton des messages de Gary

- Jamais enthousiaste — toujours légèrement condescendant
- Phrases courtes, punchlines directes
- Exemples :
  - *"Il approuve votre curiosité."*
  - *"Le Samoyed le plus stratégique de l'industrie digitale."*
  - *"Il juge. Il ne dit rien. C'est suffisant."*
  - *"Vous avez trouvé le code. Il s'en foutait de toute façon."*

---

## 9. ANIMATIONS

| Nom | Propriété | Valeurs | Usage |
|---|---|---|---|
| `fadeUp` | opacity + translateY | 0,16px → 1,0 — 0.35s ease | Entrée de sections |
| `slideRight` | translateX + opacity | 120px,0 → 0,1 — 0.3s ease | Toast notifications |
| `glitch` | skewX | 0→-4°→3°→-2°→1°→0 — 0.8s | Easter egg titre 7 clics |
| `blink` | opacity | 1→0→1 — 1s infinite | Hint "x clics restants" |
| `fadeIn` | opacity | 0→1 — 0.25s | Expérience expand |
| Button hover | transform + shadow | translate(-2,-2) + shadow+2px | Tous les boutons |
| Button active | transform + shadow | translate(3,3) + shadow 0 | État pressed |
| Card expand | transform + shadow | translate(5,5) + shadow 0 | Cards expériences |

**Règle générale** : toutes les animations < 400ms. Respecter `prefers-reduced-motion`.

---

## 10. EASTER EGGS — RÉFÉRENCE VISUELLE

| Easter egg | Couleur accent | Composant |
|---|---|---|
| Paw print 🐾 | `#FF0055` sur reveal | Zone cliquable hero |
| Titre 7x | Glitch animation | Header logo |
| Konami → 🐻‍❄️ Gary | Modal `shadow #FF0055` | Modal overlay |
| Section confidentielle | Border `#FF0055` · bg `#0A0806` | Card noire inline |
| Score final | Accent `#FF5500` | Section Contact |

---

## 11. RESPONSIVE

| Breakpoint | Width | Adaptations clés |
|---|---|---|
| Mobile S | < 375px | 1 col, nav condensée, XP masquée |
| Mobile L | 375–767px | 1 col, hamburger |
| Tablet | 768–1023px | 2 cols |
| Desktop | ≥ 1024px | Layout complet 920px max |

Tap targets minimum : **44×44px** (WCAG 2.5.5)
Shadow réduite mobile : **3px** (vs 5px desktop)

---

## 12. TOKENS CSS — RÉFÉRENCE COMPLÈTE

```css
/* COULEURS */
--color-bg         : #FFF8F0;
--color-card       : #FFFFFF;
--color-ink        : #0A0806;
--color-ink-dim    : rgba(10, 8, 6, 0.45);
--color-primary    : #FF0055;
--color-secondary  : #00B8C4;
--color-tertiary   : #FF5500;

/* BORDERS */
--border-base      : 2.5px solid #0A0806;
--border-thick     : 3px solid #0A0806;
--border-brutal    : 4px solid #0A0806;
--border-thin      : 1.5px solid #0A0806;
--border-dashed    : 1.5px dashed #0A0806;

/* SHADOWS */
--shadow-sm        : 2px 2px 0 #0A0806;
--shadow-md        : 4px 4px 0 #0A0806;
--shadow-lg        : 6px 6px 0 #0A0806;
--shadow-xl        : 8px 8px 0 #0A0806;
--shadow-hero      : 8px 8px 0 #FF0055;

/* SPACING */
--space-xs         : 4px;
--space-sm         : 8px;
--space-md         : 14px;
--space-lg         : 20px;
--space-xl         : 32px;
--space-2xl        : 48px;
--space-3xl        : 72px;

/* TRANSITIONS */
--trans-snap       : all 0.1s;
--trans-quick      : all 0.15s ease;
--trans-base       : all 0.25s ease;
--trans-slow       : all 0.6s cubic-bezier(.4,0,.2,1);

/* BACKGROUND NOISE */
--noise-opacity    : 0.055;
--noise-size       : 250px;
--noise-blend      : multiply;
--noise-frequency  : 0.75;
--noise-octaves    : 4;
```

---

## 13. CHECKLIST AVANT LIVRAISON

- [ ] Bebas Neue + Space Mono chargées (Google Fonts)
- [ ] Noise texture active sur le fond (#FFF8F0 + overlay 5.5%)
- [ ] Aucun border-radius > 0px (sauf exception documentée)
- [ ] Aucune shadow avec blur
- [ ] Tous les boutons ont un état hover et active définis
- [ ] 🐻‍❄️ Gary présent et jamais remplacé par 🐕
- [ ] XP bar visible dans le header à tout moment
- [ ] Paw print 🐾 en opacity 0.07 dans la hero card
- [ ] Code Konami ↑↑↓↓←→←→BA fonctionnel
- [ ] Score final dans la section CONTACT (Peak-End Rule)
- [ ] Contraste rose/cream = grandes typos uniquement
- [ ] prefers-reduced-motion respecté

---

*Document de référence — Miami Venise Design System · Lucy Hurley Portfolio · Mai 2026*
*Ne pas distribuer sans autorisation*
