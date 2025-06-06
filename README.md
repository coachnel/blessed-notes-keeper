# Blessed Notes Keeper

Application de prise de notes chrétienne mobile-first, connectée à Supabase.

## Fonctionnalités principales
- Prise de notes et journal spirituel
- Lecture de la Bible Louis Segond intégrée
- Statistiques quotidiennes
- Gestion des rappels de prière personnalisés
- Favoris synchronisés en temps réel
- Notifications push (PWA)
- Interface moderne et responsive

## Installation

1. Clonez ce dépôt :
   ```sh
   git clone https://github.com/chronosservices/blessed-notes-keeper.git
   ```
2. Installez les dépendances :
   ```sh
   npm install
   ```
3. Configurez vos variables d'environnement dans un fichier `.env` (voir `.env.example`).
4. Lancez l'application en développement :
   ```sh
   npm run dev
   ```

## Déploiement sur Vercel
- Le projet est prêt pour Vercel (voir `vercel.json`).
- Variables d'environnement à renseigner sur Vercel : SUPABASE_URL, SUPABASE_ANON_KEY
- Build automatique : `npm run build`

## Technologies utilisées
- React, TypeScript, Vite, Tailwind CSS, Supabase, PWA

## Contribution
Les contributions sont les bienvenues !

## Licence
MIT
