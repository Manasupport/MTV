# MedTechValley — Architecture cible (V1)

## 1) Principes
- Architecture découplée : le front ne dépend pas d’un CMS spécifique.
- Itération rapide : contenu en local (mock) au départ, CMS possible en V2.
- Qualité : performance, SEO, accessibilité, code maintenable.
- Dépendances minimales : éviter les frameworks/usines à gaz tant que non requis.

## 2) Stack recommandée (V1)
Front-end :
- React + TypeScript
- Build tool : Vite
- Styling : au choix (à décider)
  - Option A : Tailwind (rapide & cohérent)
  - Option B : CSS modules (sobre, peu de dépendances)

Routage :
- React Router (site SPA) OU bascule vers Next.js si besoin SEO/SSR plus fort.
Décision V1 :
- Par défaut : SPA + bonnes pratiques SEO (metadata, structure, performance)
- Reconsidérer Next.js si : pages très nombreuses / SEO critique / besoin SSR.

Contenu :
- V1 : fichiers locaux dans `/src/content` (ex : JSON/MD/MDX)
- V2 : CMS headless (ex : Strapi) + DB (PostgreSQL) hébergés en Europe

## 3) Structure repo (cible)
- `/docs` : cadrage projet (vision/architecture/maquette)
- `/src/pages` : pages (Home, Articles, Article, Newsletter, Partners, Legal…)
- `/src/components` : composants UI réutilisables (Header, Footer, Cards…)
- `/src/content` : contenu mock (articles, catégories, config)
- `/src/lib` : utilitaires (SEO helpers, formatters, fetch layer futur CMS)
- `/src/assets` : images / icônes

## 4) SEO & Performance (V1)
- Titres et meta par page (title, description, OG tags)
- HTML sémantique (h1 unique, sections, nav, main, footer)
- Images optimisées (formats modernes, lazy loading)
- Core Web Vitals : limiter JS inutile, composants légers
- Sitemap/robots : à ajouter quand les routes sont stabilisées

## 5) Analytics & RGPD (V1)
- Analytics : [à compléter : plausible analytics léger]
- Bandeau cookies si nécessaire (selon outil)
- Politique de confidentialité à jour
- Minimiser la collecte : uniquement ce qui sert (newsletter/contact)

## 6) Newsletter / Business Letter
- Capture email : formulaire (outil à définir)
- Double opt-in recommandé (selon outil)
- Stockage / traitement : dépend de l’outil newsletter
- Stripe :
  - V1 : seulement si abonnement payant dès le début
  - Sinon : V2

## 7) Déploiement (V1)
Objectif : déploiement simple, versionné, reproductible.
- Option A : GitHub Pages (simple pour statique)
- Option B : Vercel (plus flexible si besoin routes avancées / fonctions)
Décision : [à compléter]

Domaine :
- DNS géré chez GoDaddy
- Cible : pointer vers GitHub Pages ou Vercel selon option

## 8) Sécurité (baseline)
- Dépendances à jour
- Pas de secrets dans le repo
- Variables d’environnement via config d’hébergement
- Lint/format (ESLint/Prettier) pour éviter dette