export interface Service {
  icon: string;
  slug: string;
  title: string;
  desc: string;
  intro: string;
  avantages: string[];
  fonctionnalites: string[];
  faq: { q: string; a: string }[];
  priceFrom: string;
  image?: string;
}

export const services: Service[] = [
  {
    icon: "Film",
    slug: "montage-video",
    title: "Montage vidéo",
    desc: "Post-production soignée pour réseaux sociaux, pub et événements.",
    intro: "Vos rushs transformés en vidéos prêtes à publier, calibrées pour l'engagement sur les réseaux sociaux.",
    avantages: [
      "Rythme et montage pensés pour capter l'attention",
      "Formats adaptés à chaque plateforme",
      "Habillage graphique et sous-titres inclus",
      "Délais courts pour rester réactif à l'actualité",
    ],
    fonctionnalites: [
      "Montage court format (reels, TikTok, YouTube Shorts)",
      "Étalonnage couleur et mixage audio",
      "Sous-titrage automatique",
      "Livraison multi-formats",
    ],
    faq: [
      { q: "Dois-je fournir les images brutes ?", a: "Oui, ou nous pouvons nous charger aussi de la captation via le pack Événement." },
      { q: "Combien de révisions sont incluses ?", a: "1 à 2 révisions selon le pack choisi." },
    ],
    priceFrom: "25 000 F",
  },
  {
    icon: "Camera",
    slug: "photographie",
    image: "/services/photographie.webp",
    title: "Photographie",
    desc: "Séances photo professionnelles pour vos produits, événements et portraits de marque.",
    intro: "Des images nettes et bien éclairées qui donnent immédiatement une image professionnelle à votre activité, en ligne comme sur le terrain.",
    avantages: [
      "Rendu professionnel, cohérent avec votre image de marque",
      "Retouche incluse pour un rendu propre et homogène",
      "Adapté au web : formats et poids optimisés",
      "Shooting en studio ou en extérieur selon le besoin",
    ],
    fonctionnalites: [
      "Photographie de produits pour catalogue ou boutique en ligne",
      "Reportage événementiel (mariage, lancement, cérémonie)",
      "Portraits professionnels et photos d'équipe",
      "Retouche et export optimisé pour le web",
    ],
    faq: [
      { q: "Le lieu du shooting est-il inclus ?", a: "Nous nous déplaçons à Ziguinchor et environs ; au-delà, des frais de déplacement s'appliquent." },
      { q: "Combien de photos retouchées sont livrées ?", a: "Cela dépend du pack choisi, entre 10 et 40 photos retouchées en général." },
    ],
    priceFrom: "20 000 F",
  },
  {
    icon: "Brain",
    slug: "ia",
    title: "Solutions IA",
    desc: "Sites, applications et automatisations construits avec l'aide de l'intelligence artificielle.",
    intro: "Nous utilisons l'IA à deux niveaux : pour accélérer la construction de vos sites et applications, et pour automatiser des tâches dans votre activité au quotidien.",
    avantages: [
      "Développement de sites et d'applications assisté par IA, donc plus rapide",
      "Automatisation des tâches répétitives (réponses, tri, suivi)",
      "Disponibilité 24/7 pour vos clients via des assistants intelligents",
      "Mise en place progressive, sans tout bouleverser",
    ],
    fonctionnalites: [
      "Sites et applications développés avec l'assistance de l'IA",
      "Chatbot ou assistant WhatsApp",
      "Connexion à vos outils existants (CRM, tableurs, agenda)",
      "Génération de contenu (textes, visuels) pour vos supports",
    ],
    faq: [
      { q: "L'IA remplace-t-elle le travail humain sur mon projet ?", a: "Non, elle accélère certaines étapes ; la conception et la relecture restent assurées par notre équipe." },
      { q: "Est-ce adapté à une petite structure ?", a: "Oui, les packs Assistant sont justement pensés pour démarrer simplement." },
    ],
    priceFrom: "50 000 F",
  },
  {
    icon: "Code2",
    slug: "sites-web",
    title: "Création de sites web",
    desc: "Sites vitrines et plateformes sur-mesure, rapides et optimisés SEO.",
    intro: "Un site web pensé comme un véritable outil commercial : rapide, clair, et construit pour convertir vos visiteurs en clients.",
    avantages: [
      "Design sur-mesure, aligné à votre image de marque",
      "Temps de chargement optimisé pour ne perdre aucun visiteur",
      "Structure pensée pour le référencement naturel (SEO)",
      "Autonomie totale pour modifier vos contenus après livraison",
    ],
    fonctionnalites: [
      "Responsive mobile, tablette et desktop",
      "Formulaire de contact et intégration WhatsApp",
      "Back-office simple pour gérer vos contenus",
      "Hébergement et nom de domaine accompagnés",
    ],
    faq: [
      { q: "Combien de temps pour livrer un site ?", a: "Entre 1 et 5 semaines selon le pack choisi et la complexité du projet." },
      { q: "Puis-je modifier le contenu moi-même après ?", a: "Oui, un back-office simple est inclus pour gérer textes et images sans coder." },
    ],
    priceFrom: "75 000 F",
  },
  {
    icon: "Smartphone",
    slug: "applications",
    title: "Développement d'applications",
    desc: "Applications web et mobiles pensées pour vos usages réels.",
    intro: "De l'idée au produit installé sur les téléphones de vos utilisateurs : applications web (SaaS) et mobiles Android sur-mesure.",
    avantages: [
      "Architecture pensée pour évoluer avec votre activité",
      "Expérience utilisateur simple, même pour un public non technique",
      "Intégration de paiement mobile et solutions locales",
      "Accompagnement au-delà du lancement",
    ],
    fonctionnalites: [
      "Authentification et gestion des utilisateurs",
      "Back-end sécurisé avec base de données",
      "Notifications et intégrations tierces",
      "Publication sur le Play Store si nécessaire",
    ],
    faq: [
      { q: "Application web ou mobile, laquelle choisir ?", a: "Selon vos utilisateurs et votre budget, nous vous orientons vers la solution la plus pertinente." },
      { q: "Le code m'appartient-il à la fin du projet ?", a: "Oui, l'intégralité du code source vous est livrée." },
    ],
    priceFrom: "400 000 F",
  },
  {
    icon: "Video",
    slug: "production-audiovisuelle",
    title: "Production audiovisuelle",
    desc: "Captation professionnelle, de la conception au tournage.",
    intro: "De la préparation au tournage : une équipe qui capture vos événements et vos contenus avec un rendu professionnel.",
    avantages: [
      "Matériel professionnel (caméra, son, éclairage)",
      "Préparation en amont pour un tournage fluide",
      "Adaptable aux événements comme aux contenus de marque",
      "Coordination avec le montage pour un rendu cohérent",
    ],
    fonctionnalites: [
      "Captation événementielle (mariage, conférence, cérémonie)",
      "Tournage de contenus de marque",
      "Prise de son professionnelle",
      "Livrables bruts et montés",
    ],
    faq: [
      { q: "Intervenez-vous en dehors de Ziguinchor ?", a: "Oui, selon le projet, avec des frais de déplacement à prévoir." },
      { q: "Combien de temps de captation est prévu ?", a: "Cela dépend du pack : d'une demi-journée à une journée complète." },
    ],
    priceFrom: "75 000 F",
  },
  {
    icon: "Cog",
    slug: "automatisation",
    title: "Automatisation",
    desc: "Processus métier automatisés pour gagner du temps au quotidien.",
    intro: "Identifier les tâches répétitives de votre activité et les automatiser pour libérer du temps utile à votre équipe.",
    avantages: [
      "Moins d'erreurs humaines sur les tâches répétitives",
      "Temps regagné pour les tâches à forte valeur ajoutée",
      "Connexion entre vos outils existants",
      "Mise en place sans interruption de votre activité",
    ],
    fonctionnalites: [
      "Automatisation de rapports et de suivis",
      "Synchronisation entre plusieurs outils",
      "Notifications et rappels automatiques",
      "Tableaux de bord de suivi",
    ],
    faq: [
      { q: "Faut-il changer d'outils pour automatiser ?", a: "Non, nous privilégions l'automatisation des outils que vous utilisez déjà." },
      { q: "Combien de temps pour voir les bénéfices ?", a: "Souvent dès les premières semaines d'utilisation." },
    ],
    priceFrom: "150 000 F",
  },
  {
    icon: "GraduationCap",
    slug: "formation",
    title: "Formation",
    desc: "Programmes pratiques en développement, IA, photo et vidéo.",
    intro: "Des formations pratiques, en petit groupe ou en individuel, pour monter en compétence sur des outils concrets.",
    avantages: [
      "Approche pratique, orientée projet",
      "Formateurs qui utilisent ces outils au quotidien",
      "Supports de cours fournis",
      "Certificat de fin de formation",
    ],
    fonctionnalites: [
      "Développement web, mobile, IA",
      "Montage vidéo (CapCut, Premiere Pro)",
      "Formats individuels ou en équipe",
      "Présentiel ou distanciel",
    ],
    faq: [
      { q: "Faut-il un niveau minimum pour commencer ?", a: "Non, chaque formation précise son niveau (débutant, intermédiaire, avancé)." },
      { q: "Proposez-vous des formations en entreprise ?", a: "Oui, via le pack Équipe, avec un contenu adapté à votre contexte." },
    ],
    priceFrom: "20 000 F",
  },
  {
    icon: "Lightbulb",
    slug: "conseil-numerique",
    title: "Conseil numérique",
    desc: "Accompagnement stratégique pour structurer votre transformation.",
    intro: "Un regard extérieur et technique pour structurer vos choix digitaux avant d'investir dans le développement.",
    avantages: [
      "Clarification de vos priorités digitales",
      "Choix technologiques adaptés à votre budget",
      "Feuille de route réaliste et priorisée",
      "Réduction des risques avant investissement",
    ],
    fonctionnalites: [
      "Audit de votre présence digitale actuelle",
      "Recommandations technologiques",
      "Priorisation des chantiers",
      "Accompagnement au choix de prestataires",
    ],
    faq: [
      { q: "Le conseil débouche-t-il obligatoirement sur un projet chez vous ?", a: "Non, l'objectif est d'abord de clarifier vos choix, quel que soit le prestataire retenu ensuite." },
      { q: "Sous quelle forme est livré le conseil ?", a: "Sous forme de recommandations écrites et d'un échange de restitution." },
    ],
    priceFrom: "Sur devis",
  },
];

export const packs = [
  {
    name: "Starter",
    desc: "Pour démarrer une présence digitale simple et efficace.",
    price: "150 000 F",
    unit: "/ projet",
    meta: "Durée : 1–2 semaines · Maintenance 1 mois incluse",
    features: ["Site vitrine 3–5 pages", "Design responsive", "Support email"],
    featured: false,
  },
  {
    name: "Business",
    desc: "Pour les entreprises qui veulent un outil complet et évolutif.",
    price: "400 000 F",
    unit: "/ projet",
    meta: "Durée : 3–5 semaines · Maintenance 3 mois incluse",
    features: [
      "Plateforme multi-pages + back-office",
      "Optimisation SEO avancée",
      "Support prioritaire",
      "1 module IA ou automatisation",
    ],
    featured: true,
  },
  {
    name: "Premium",
    desc: "Pour les projets ambitieux : applications, IA, SaaS.",
    price: "Sur devis",
    unit: "",
    meta: "Durée : selon périmètre · Maintenance continue",
    features: [
      "Application web ou mobile sur-mesure",
      "Architecture évolutive",
      "Accompagnement dédié",
      "Intégrations IA avancées",
    ],
    featured: false,
  },
];

export const formationCategories = [
  {
    name: "Développement",
    icon: "Code2",
    items: [
      { level: "Débutant", title: "Développement Web", duration: "6 semaines", price: "50 000 F" },
      { level: "Intermédiaire", title: "React & Next.js", duration: "4 semaines", price: "60 000 F" },
      { level: "Intermédiaire", title: "Node.js", duration: "4 semaines", price: "55 000 F" },
      { level: "Débutant", title: "Python", duration: "5 semaines", price: "50 000 F" },
      { level: "Débutant", title: "Linux", duration: "3 semaines", price: "35 000 F" },
    ],
  },
  {
    name: "Intelligence Artificielle",
    icon: "Brain",
    items: [
      { level: "Avancé", title: "IA appliquée au développement web", duration: "6 semaines", price: "80 000 F" },
      { level: "Débutant", title: "Utiliser l'IA au quotidien", duration: "2 semaines", price: "30 000 F" },
    ],
  },
  {
    name: "Vidéo & Photo",
    icon: "Film",
    items: [
      { level: "Débutant", title: "Montage vidéo — CapCut", duration: "2 semaines", price: "25 000 F" },
      { level: "Intermédiaire", title: "Premiere Pro", duration: "4 semaines", price: "45 000 F" },
      { level: "Débutant", title: "Photographie — bases & retouche", duration: "3 semaines", price: "35 000 F" },
      { level: "Débutant", title: "Canva", duration: "2 semaines", price: "20 000 F" },
    ],
  },
];

export const portfolioFilters = ["Tous", "Application", "Fintech", "Éducation", "Site vitrine"];

export interface PortfolioItem {
  image: string;
  slug: string;
  category: string;
  tags: string[];
  title: string;
  desc: string;
  context: string;
  solution: string;
  stack: string[];
  result: string;
  liveUrl: string | null;
  status: string;
}

export const portfolio: PortfolioItem[] = [
  {
    image: "/portfolio/ice-facture.webp",
    slug: "ice-facture",
    category: "Application de gestion",
    tags: ["Application", "Fintech"],
    title: "Ice Facture",
    desc: "Gestion de boutique simplifiée : ventes, stocks et facturation pour entrepreneurs.",
    context: "Les commerçants avaient besoin d'un outil simple pour suivre leurs ventes et leur stock au quotidien, sans la complexité des logiciels de gestion classiques.",
    solution: "Une application avec dashboard interactif pour visualiser les ventes journalières et mensuelles, un point de vente optimisé pour un encaissement rapide en tactile, et une gestion de stock centralisée.",
    stack: ["Interface web responsive", "Dashboard temps réel", "Point de vente tactile"],
    result: "Un outil qui recentre le commerçant sur l'essentiel : suivre ses ventes et servir ses clients, sans se perdre dans des menus complexes.",
    liveUrl: "https://front-hdpa.onrender.com",
    status: "En ligne",
  },
  {
    image: "/portfolio/mokodomo.webp",
    slug: "mokodomo",
    category: "Application de livraison",
    tags: ["Application", "Fintech"],
    title: "Mokodomo",
    desc: "Livraison de plats sénégalais en 18 minutes chrono, paiement Wave & Orange Money.",
    context: "Le marché sénégalais manquait d'une application de livraison pensée pour les habitudes locales : plats du terroir, paiement mobile, délais réalistes plutôt qu'une copie de solutions occidentales.",
    solution: "Une application Android native avec plus de 2 400 restaurants référencés, suivi de livraison en temps réel, paiement intégré Wave et Orange Money, et un délai moyen affiché de 18 minutes.",
    stack: ["Kotlin", "Firebase", "OSMDroid", "Paiement mobile (Wave, Orange Money)"],
    result: "Une expérience pensée de bout en bout pour le marché local, du choix du plat au paiement, sans dépendre d'une plateforme étrangère.",
    liveUrl: "https://mokodomo.web.app",
    status: "En ligne",
  },
  {
    image: "/portfolio/equran-academy.webp",
    slug: "e-quran-academy",
    category: "SaaS éducatif",
    tags: ["Application", "Éducation"],
    title: "E-Quran Academy",
    desc: "Plateforme connectant professeurs et élèves pour l'apprentissage du Coran en ligne.",
    context: "La diaspora francophone cherche des professeurs certifiés pour l'apprentissage du Coran, avec des récitations spécifiques (Hafs, Warsh) et un format adapté à l'enseignement à distance.",
    solution: "Une marketplace complète : recherche de professeurs certifiés, salle de classe virtuelle intégrée, suivi pédagogique, cours d'essai et paiement Mobile Money.",
    stack: ["NestJS", "Prisma", "PostgreSQL", "WebRTC", "Next.js"],
    result: "Backend et frontend terminés, sécurité renforcée en deux vagues. Plateforme actuellement en finalisation avant mise en ligne publique.",
    liveUrl: null,
    status: "En développement",
  },
  {
    image: "/portfolio/saif-japon.webp",
    slug: "etudier-au-japon-avec-saif",
    category: "Site vitrine / conseil",
    tags: ["Site vitrine"],
    title: "Étudier au Japon avec Saif",
    desc: "Site de présentation pour un accompagnement d'étudiants africains vers le Japon.",
    context: "Un consultant indépendant avait besoin d'un site clair pour présenter son accompagnement aux étudiants africains souhaitant poursuivre leurs études au Japon, avec un canal de contact direct.",
    solution: "Un site vitrine sobre, centré sur la confiance et la clarté du message, avec un accès direct à WhatsApp pour démarrer la conversation sans friction.",
    stack: ["Site vitrine", "Intégration WhatsApp", "Déploiement Render"],
    result: "Un site en ligne et fonctionnel, qui sert de premier point de contact pour les futurs étudiants.",
    liveUrl: "https://etudieraujapon.onrender.com",
    status: "En ligne",
  },
];

export const journey = [
  {
    year: "La formation",
    title: "Une base d'ingénierie solide",
    text: "Mokodomo Tech est né d'un parcours en Génie Informatique, entre architecture logicielle, bases de données et développement web — la rigueur d'une formation d'ingénieur appliquée à des projets concrets.",
  },
  {
    year: "Le déclic",
    title: "Construire plutôt qu'attendre",
    text: "Plutôt que de se limiter aux exercices académiques, l'équipe a choisi de construire de vrais produits : applications mobiles, plateformes SaaS, outils métier — pour apprendre en livrant.",
  },
  {
    year: "Le terrain",
    title: "Des besoins pensés pour l'Afrique de l'Ouest",
    text: "Chaque projet part d'un besoin réel identifié localement — paiement, éducation, mobilité — plutôt que d'une solution importée et mal adaptée au contexte.",
  },
  {
    year: "Aujourd'hui",
    title: "Un studio, quatre expertises",
    text: "Mokodomo Tech réunit aujourd'hui développement, production audiovisuelle, formation et intelligence artificielle sous un même toit, pour accompagner vos projets de bout en bout.",
  },
];

export const whyUs = [
  { icon: "Rocket", title: "Innovation", desc: "Des solutions actuelles, adaptées aux réalités locales." },
  { icon: "Award", title: "Qualité", desc: "Un code propre et un design soigné, à chaque étape." },
  { icon: "Handshake", title: "Accompagnement", desc: "Un suivi humain, du premier échange à la livraison." },
  { icon: "Zap", title: "Rapidité", desc: "Des délais tenus, sans sacrifier la qualité." },
  { icon: "Headphones", title: "Support", desc: "Une équipe disponible même après la livraison." },
  { icon: "Star", title: "Expertise", desc: "Des compétences transverses : web, IA, vidéo, formation." },
];

export const testimonials = [
  { name: "Aïssatou Diallo", role: "Fondatrice, boutique en ligne", quote: "Une équipe réactive qui a su transformer une idée floue en produit clair et fonctionnel." },
  { name: "Moussa Camara", role: "Organisateur d'événements", quote: "Le montage vidéo livré était au-delà de nos attentes, dans des délais très courts." },
  { name: "Fatou Sarr", role: "Responsable communication", quote: "La formation nous a permis de reprendre en main notre site sans dépendre d'un prestataire externe." },
];

export const faqs = [
  { q: "Combien de temps prend un projet de site web ?", a: "Entre 1 et 5 semaines selon la complexité, du pack Starter au pack Business." },
  { q: "Proposez-vous un accompagnement après la livraison ?", a: "Oui, chaque pack inclut une période de maintenance, avec possibilité de prolonger le support." },
  { q: "Puis-je combiner plusieurs services (web, vidéo, IA) ?", a: "Tout à fait, c'est même fréquent : un lancement de produit mobilise souvent plusieurs de nos expertises." },
  { q: "Les formations sont-elles en ligne ou en présentiel ?", a: "Les deux formats sont proposés selon la formation et votre localisation." },
];
