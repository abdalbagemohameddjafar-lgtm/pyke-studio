# Pyke Studio

Site de Pyke Studio — création de sites web pour artisans et commerçants, Metz et alentours.

Fait avec [Astro](https://astro.build), hébergé sur Cloudflare Pages : https://pykestudio.fr
(mise en ligne automatique à chaque envoi sur la branche `main`).

## Où modifier quoi

| Quoi | Fichier |
|---|---|
| Coordonnées, réseaux, infos légales | `src/data/studio.ts` |
| Tarifs, options, maintenance, conditions | `src/data/tarifs.ts` |
| Cartes « Réalisations » | `src/data/realisations.ts` (+ capture dans `src/assets/realisations/`) |
| Textes de la page d'accueil | `src/pages/index.astro` |
| Couleurs et styles communs | `src/styles/global.css` |

## Commandes

```sh
npm install      # une seule fois
npm run dev      # aperçu local sur http://localhost:4321
npm run build    # construit le site dans dist/
```
