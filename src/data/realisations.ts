// Cartes de la section « Réalisations » (6 cartes, 2 par ligne).
//
// Pour ajouter un vrai projet : remplace une ligne `A_VENIR` par un objet
// comme celui de Maison Ambre (titre, sous-titre, lien, image, texte alt).
// L'image se range dans src/assets/realisations/ (capture 1280 × 800).

import type { ImageMetadata } from 'astro';
import maisonAmbre from '../assets/realisations/maison-ambre.jpg';

export type Projet = {
  titre: string;
  sousTitre: string;
  lien: string;
  image: ImageMetadata;
  alt: string;
};

export const A_VENIR = null;

export const realisations: (Projet | null)[] = [
  {
    titre: 'Maison Ambre',
    sousTitre: 'Parfumerie · Projet de démonstration',
    lien: 'https://portfolio-maison-ambre.netlify.app',
    image: maisonAmbre,
    alt: "Page d'accueil du site Maison Ambre, parfumerie de créateur",
  },
  A_VENIR,
  A_VENIR,
  A_VENIR,
  A_VENIR,
  A_VENIR,
];
