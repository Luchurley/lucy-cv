# Manifest — Assets Bundle Lucy CV
## Où dézipper chaque dossier dans le repo

Dézippe `assets-bundle.zip` n'importe où, puis **déplace le contenu de chaque sous-dossier** vers `project/assets/` selon ce mapping :

```
assets-bundle/tec/*        → project/assets/projects/
assets-bundle/jaccede/*     → project/assets/projects/
assets-bundle/wegoboard/*   → project/assets/projects/
assets-bundle/equality/*    → project/assets/projects/
assets-bundle/playground/*  → project/assets/projects/
assets-bundle/logos/*       → project/assets/logos/
assets-bundle/motion/*      → project/assets/motion/
assets-bundle/other/*       → project/assets/other/  (nouveau dossier — non référencé)
```

En clair : tout va dans `project/assets/projects/` SAUF logos, motion et other qui ont leur propre dossier.

---

## Fichiers déjà confirmés EN LIGNE (ne pas re-uploader)

- `project/assets/agents/*.png` (10 photos agents IA) ✅
- `project/assets/videos/*.mp4` (10 vidéos agents IA) ✅
- `project/assets/projects/jaccede-home.png` ✅
- `project/assets/projects/wegoboard-products.png` ✅
- `project/assets/projects/wegoboard-vitrine.png` ✅

Ces 3 fichiers sont aussi dans le ZIP (dans `jaccede/` et `wegoboard/`) au cas où — si déjà présents sur GitHub, Git ne créera pas de doublon, juste "no changes" sur ces fichiers.

---

## Détail par dossier

### tec/ → projects/
- `tec-mobile.png` — screenshot Webflow mobile
- `tec-desktop.png` — screenshot Webflow desktop
- `tec-desktop-alt.jpg` — variante desktop (hero section visible)

### jaccede/ → projects/
- `jaccede-home.png`, `jaccede-home-1/2/3.png` — maquettes finales mobile
- `jaccede-desktop-home.jpg` — page d'accueil desktop complète
- `jaccede-desktop-explore.jpg` — page explorer desktop
- `jaccede-map-radius.jpg` — carte avec rayon de recherche
- `jaccede-map-poi-detail.jpg` — fiche lieu sur carte
- `jaccede-form-desktop.jpg` — formulaire "Ajouter un lieu" desktop
- `jaccede-form-wireframe-mobile.jpg` — wireframe formulaire mobile (accessibilité)

### wegoboard/ → projects/
- `wegoboard-services.png`, `wegoboard-products.png`, `wegoboard-vitrine.png` — refonte
- `wegoboard-interface.png` — interface interne
- `wegoboard-wireframe.png` — wireframe mobile
- `wegoboard-lowfi-wireframe-full.jpg` — wireframe basse fidélité page complète (avant)
- `wegoboard-product-selection.jpg` — sélection produits style refonte

### equality/ → projects/
- `equality-splash.jpg` — écran splash
- `equality-login.jpg` — écran connexion
- `equality-games.jpg` — sélection jeux
- `equality-teams.jpg` — sélection équipes
- `equality-players.jpg` — sélection joueurs
- `equality-mobile-screens.png` — planche écrans mobile
- `equality-iphone-mockup.png` — mockup iPhone
- `equality-reference-vitality-player.jpg` — référence (page joueur Vitality)
- `equality-reference-vitality-team.jpg` — référence (page équipe Vitality)
- `equality-dashboard-reference.jpg` — référence dashboard principal (base de l'écran principal Equality)

### playground/ → projects/
- `teen-bank.png` — Teen Bank Youngo
- `mariage-save-the-date.jpg` — Save the date Claire & Maxime
- `lacopain-site.jpg` — Lacopain bière artisanale

### logos/ → logos/
- `claude.png`, `chatgpt.png`, `gemini.png`, `deepseek.png` — logos Prompt Skills (Univers IA)

### motion/ → motion/
- `brian-bg.gif` — décor cosy bleu nuit Brian (The English Coach)

### other/ → other/ (nouveau dossier, non référencé dans le code)
- `cora-recipe-detail.jpg`, `cora-recipe-wireframe.jpg` — projet Cora (non documenté actuellement)
- `redburger-site.jpg` — projet Red Burger (non documenté actuellement)
- `sitemap-diagram.jpg` — diagramme d'architecture/sitemap (projet non identifié)

Ces 4 fichiers sont préservés mais **non utilisés** par le code — à garder pour usage futur si tu veux documenter ces projets plus tard.

---

## Aucun fichier manquant

Tous les visuels uploadés dans cette conversation sont dans ce bundle. Rien à re-uploader.
