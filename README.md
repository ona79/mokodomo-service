# Mokodomo Tech — Site Next.js

## Installation

```bash
npm install
npm run dev
```

Ouvrir http://localhost:3000

## Build production

```bash
npm run build
npm start
```

## Structure

- `app/` — layout et page principale (App Router)
- `components/` — une section = un composant (Header, Hero, Stats, Services, Packs, Formations, Portfolio, Journey, WhyUs, Testimonials, FAQ, Contact, Footer)
- `lib/data.ts` — tout le contenu texte (services, packs, formations, portfolio, parcours, FAQ...) modifiable sans toucher au JSX

## Personnalisation rapide

- **Couleurs** : `tailwind.config.ts` → `theme.extend.colors`
- **Textes / prix** : `lib/data.ts`
- **Logo / nom** : `components/Header.tsx` et `components/Footer.tsx`
- **Formulaire de contact** : `components/Contact.tsx` — actuellement en mode démo (pas d'envoi réel). Pour le rendre fonctionnel, brancher une API route (`app/api/contact/route.ts`) ou un service comme Resend/Formspree.

## Animations

Chaque section utilise un style d'animation différent (Framer Motion) pour éviter la répétition au scroll :
- Hero : stagger + flottement des cartes
- Stats : compteurs animés
- Services : scale-in en cascade
- Packs : glissement alterné gauche/droite
- Formations : révélation par clip-path
- Portfolio : rotation + scale
- Parcours : timeline alternée gauche/droite
- Pourquoi nous : flou → net
- Témoignages : slider en fondu
- FAQ : accordéon
- Contact : glissement gauche/droite

## Responsive

Mobile-first avec breakpoints Tailwind (`sm`, `md`, `lg`). Menu mobile avec overlay dans `Header.tsx`.
