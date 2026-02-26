# MedTechValley — Maquette & traduction en composants

## 1) Source maquette
- Fichier de référence : /Users/yanisotmani/Desktop/MTV/maquette-index.html
- Objectif : utiliser la maquette comme référence UI/UX, PAS comme code à copier-coller tel quel.

## 2) Principes d’intégration
- On découpe la maquette en sections et composants.
- On recrée ces composants en React/TS (prop-driven, réutilisables).
- On garde une UI premium : spacing, typographie, grille, responsive.

## 3) Sections (à confirmer en lisant la maquette)
Exemple de découpage (à ajuster) :
- Header (logo, nav, CTA Business Letter)
- Hero (titre + promesse + CTA)
- Featured / À la une (1–3 contenus)
- Catégories / Thématiques (tags, filtres)
- Listing articles (cards)
- Bloc “Business Letter” (promesse + email capture)
- Bloc “Partenariats” (logos / bénéfices / CTA contact)
- Footer (liens, réseaux, légal)

## 4) Pages V1 dérivées de la maquette
- Home : reprend la majorité des sections
- Articles (listing)
- Article (détail)
- Business Letter
- Partenariats
- Mentions légales / Confidentialité

## 5) Composants UI (cible)
- Layout : `AppShell`, `Header`, `Footer`, `Container`
- Navigation : `Nav`, `MobileMenu`
- Contenu : `ArticleCard`, `ArticleGrid`, `Tag`, `CategoryPill`
- Editorial : `Hero`, `FeaturedSection`
- Conversion : `NewsletterSignup`, `PartnerCTA`, `ContactCTA`
- Utilitaires : `SEO` helper, `formatDate`, `readingTime` (option)

## 6) Règles UI / design system (V1)
- Grille : container centré + max width (ex: 1100–1200px)
- Typo : hiérarchie claire (H1/H2/H3 + body)
- Couleurs : palette simple (à définir)
- Responsive : mobile-first
- Accessibilité : contrastes, focus states, labels forms

## 7) TODO — infos à ajouter
- Lien exact / capture / export de la maquette
- Liste exacte des sections et libellés
- Palette couleurs / typographies