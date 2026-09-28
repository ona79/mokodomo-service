# Documentation Technique : Mokodomo Tech

## 1. Présentation du Projet

**Mokodomo Tech** est une plateforme web moderne développée pour un studio digital panafricain. Le site présente les différents services de l'entreprise (développement de sites et applications, intelligence artificielle, production audiovisuelle, formations), ses réalisations (portfolio), ses offres (packs), et permet aux clients potentiels de prendre contact directement via WhatsApp.

Le projet est conçu avec une approche "mobile-first", mettant l'accent sur les performances, les animations fluides et une interface utilisateur premium (glassmorphism, dégradés, animations au défilement).

## 2. Architecture Technique

Le projet repose sur les technologies modernes de l'écosystème React :

*   **Framework** : [Next.js 15](https://nextjs.org/) (App Router)
*   **Bibliothèque UI** : [React 18](https://react.dev/)
*   **Langage** : [TypeScript](https://www.typescriptlang.org/) (Typage strict pour la robustesse)
*   **Style & CSS** : [Tailwind CSS 3](https://tailwindcss.com/) (Classes utilitaires, configuration personnalisée)
*   **Animations** : [Framer Motion 11](https://www.framer.com/motion/) (Animations complexes, transitions de pages, animations au scroll)
*   **Icônes** : [Lucide React](https://lucide.dev/) (Icônes vectorielles légères)
*   **Analytique** : [Plausible Analytics](https://plausible.io/) (Script léger et respectueux de la vie privée, configuré via `.env`)

## 3. Structure du Projet

L'architecture du code suit les conventions du **App Router** de Next.js :

```text
mokodomo-service/
├── app/                        # Routage et pages de l'application (Next.js App Router)
│   ├── layout.tsx              # Layout principal (Header, Footer, Meta-données globales)
│   ├── page.tsx                # Page d'accueil regroupant toutes les sections
│   ├── globals.css             # Styles globaux et variables CSS
│   ├── sitemap.ts              # Génération dynamique du sitemap SEO
│   ├── robots.ts               # Configuration robots.txt
│   ├── realisations/           # Routes pour le portfolio
│   │   └── [slug]/page.tsx     # Page de détail d'une réalisation
│   └── services/               # Routes pour les services
│       └── [slug]/page.tsx     # Page de détail d'un service
├── components/                 # Composants UI réutilisables
│   ├── Header.tsx / Footer.tsx # Navigation et pied de page
│   ├── Hero.tsx, Stats.tsx...  # Sections spécifiques de la page d'accueil
│   ├── Contact.tsx             # Formulaire de contact lié à WhatsApp
│   ├── CanvasScrollBackground.tsx # Animation de fond sur canvas gérée au scroll
│   └── Animated*.tsx           # Composants encapsulant des animations Framer Motion
├── lib/
│   └── data.ts                 # Base de données statique (contenu du site)
├── public/                     # Ressources statiques (images, vidéos, polices)
├── tailwind.config.ts          # Configuration des thèmes, couleurs et plugins Tailwind
└── package.json                # Dépendances et scripts du projet
```

## 4. Gestion des Données (Data Layer)

Le projet n'utilise pas de CMS externe ou de base de données backend complexe. L'intégralité du contenu est gérée statiquement via le fichier `lib/data.ts`. 

Cette approche permet :
1.  **Des performances maximales** : Aucune latence de requête réseau lors du rendu des pages.
2.  **Une maintenance simplifiée** : Les textes, prix et images peuvent être mis à jour directement dans ce fichier sans toucher aux composants JSX.

Les structures de données principales exportées depuis `lib/data.ts` sont :
*   `services` : Liste des prestations avec détails, avantages, et FAQ spécifiques.
*   `portfolio` : Projets réalisés, avec contexte, solutions, stack technique et liens.
*   `packs` : Offres packagées (Starter, Business, Premium).
*   `formationCategories` : Catalogue des formations structurées par niveau et catégories.
*   `journey`, `whyUs`, `testimonials`, `faqs` : Données pour les sections "À propos" et réassurance.

## 5. Composants Principaux & Fonctionnalités

### 5.1. Background Vidéo Interactif (`CanvasScrollBackground.tsx`)
Ce composant gère une animation de fond sophistiquée. Il dessine une séquence d'images sur un `<canvas>` HTML. La frame affichée est calculée en fonction de la progression du défilement (scroll) de la page entière, créant un effet cinématique fluide. Les images sont chargées par lots (batching) pour optimiser les performances de chargement initial.

### 5.2. Formulaire de Contact WhatsApp (`Contact.tsx`)
Le formulaire de contact ne nécessite pas de backend (pas d'API route Node.js ou PHP). À la soumission, les données saisies (nom, entreprise, message) sont formatées et encodées dans une URL WhatsApp API (`https://wa.me/...`). L'utilisateur est redirigé vers son application WhatsApp avec le message pré-rempli, facilitant une conversion rapide.

### 5.3. Animations (`framer-motion`)
Le projet utilise massivement `framer-motion` pour l'UX :
*   `PageTransition.tsx` : Encapsule les pages pour créer des transitions douces lors de la navigation entre les routes.
*   **Stagger effects** (animations en cascade) : Utilisés dans `Hero.tsx` et `Services.tsx` pour faire apparaître les éléments un par un.
*   **Scroll-linked animations** : Les composants comme `AnimatedServiceContent` ou `Contact` utilisent `whileInView` pour se déclencher uniquement lorsqu'ils deviennent visibles à l'écran.

## 6. Routage & Pages (Next.js App Router)

### Pages Statiques
*   **`/` (Accueil)** : Composée de l'assemblage de multiples sections (Hero, Stats, Services, Packs, Formations, etc.). Le fond canvas y est injecté.
*   **`/mentions-legales`** : Page de conformité légale.

### Pages Dynamiques
Les pages dynamiques utilisent la fonction `generateStaticParams` de Next.js. Cela signifie que lors du build (`npm run build`), Next.js va générer statiquement (SSG) toutes les pages possibles basées sur les données de `lib/data.ts`.
*   **`/services/[slug]`** : Affiche les détails d'un service (avantages, fonctionnalités, FAQ spécifiques).
*   **`/realisations/[slug]`** : Affiche une étude de cas détaillée pour un projet du portfolio.

## 7. Configuration Design & UI

Le design system est centralisé dans `tailwind.config.ts`.
*   **Thème sombre (Dark Mode par défaut)** : Couleurs de fond basées sur le bleu nuit (`#0B1020` pour `bg`, `#111827` pour `panel`).
*   **Couleurs d'accentuation** : Le rouge framboise (`#E11D48`, `#F43F5E`) est utilisé pour les Call-To-Actions et les icônes.
*   **Dégradés (Gradients)** : Un dégradé personnalisé `grad-accent` est défini dans Tailwind pour une utilisation facile via les classes.
*   **Typographie** : La police *Manrope* (importée via `next/font/google` dans `layout.tsx`) est appliquée globalement pour un rendu moderne et sans saut de police (Cumulative Layout Shift).

## 8. SEO (Search Engine Optimization)

Le projet intègre des optimisations natives pour le référencement :
*   **Metadata dynamiques** : Le layout principal définit des balises OpenGraph globales. Les pages dynamiques (`/services/[slug]`, `/realisations/[slug]`) utilisent `generateMetadata()` pour générer des balises `<title>` et `<meta description>` uniques basées sur le contenu.
*   **Sitemap automatisé** : `app/sitemap.ts` génère automatiquement le `sitemap.xml` recensant toutes les routes statiques et dynamiques, avec des priorités définies.
*   **Robots.txt** : Généré dynamiquement via `app/robots.ts`.

## 9. Déploiement et Commandes

### Prérequis
*   Node.js (version recommandée : 18.x ou supérieure)
*   npm ou yarn

### Variables d'environnement (`.env`)
```env
# Renseignez votre domaine Plausible si vous utilisez cet outil analytique.
# Laissez vide ou commentez la ligne si non utilisé.
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=mokodomo-tech.com
```

### Scripts disponibles
*   `npm run dev` : Lance le serveur de développement local sur `http://localhost:3000`.
*   `npm run build` : Compile l'application pour la production (Génération statique des pages).
*   `npm run start` : Lance le serveur de production (nécessite d'avoir exécuté le build auparavant).
*   `npm run lint` : Lance l'analyseur de code ESLint pour détecter les erreurs.

## 10. Guide de Personnalisation Rapide

Pour adapter le site, voici les fichiers clés à modifier :
1.  **Textes, prix, témoignages, projets** : Éditez `lib/data.ts`. L'interface entière se mettra à jour.
2.  **Couleurs principales** : Modifiez les valeurs hexadécimales dans `tailwind.config.ts` (section `colors`).
3.  **Numéro WhatsApp** : Dans `components/Contact.tsx`, modifiez la constante `https://wa.me/221781901424`.
4.  **Logo et Nom de l'entreprise** : Éditez `components/Header.tsx` (navigation) et `components/Footer.tsx`.
5.  **Vidéo de fond (Canvas)** : Remplacez les images dans `public/video_front/`. Assurez-vous de conserver la nomenclature séquentielle (`ezgif-frame-001.jpg`, etc.) et d'ajuster `TOTAL_FRAMES` dans `components/CanvasScrollBackground.tsx` si le nombre d'images change.
