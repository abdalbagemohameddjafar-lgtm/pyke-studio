// Grille tarifaire de Pyke Studio — valable à partir de novembre 2026.
// Prix nets : TVA non applicable (art. 293 B du CGI).

export const validite = 'Valables à partir de novembre 2026';

export type Formule = {
  nom: string;
  prix: number;
  points: string[]; // liste courte (cartes de la page Tarifs)
  vedette?: boolean; // affiche le badge « Recommandé »
  resume: string; // phrase d'accroche, visible sans survol
  ideal: string; // « Idéal pour… », visible au survol
  detail: string[]; // tout ce qui est compris, visible au survol
};

// Inclus dans toutes les formules (affiché dans le détail au survol).
export const inclusPartout = [
  '2 séries de corrections incluses',
  'En ligne sous 7 à 10 jours après réception de vos contenus',
];

export const formules: Formule[] = [
  {
    nom: 'Essentiel',
    prix: 390,
    points: ['1 page complète', 'Services, horaires, carte', "Bouton d'appel + formulaire", 'Adapté mobile'],
    resume: 'Une page complète pour être trouvé et contacté.',
    ideal: 'Les commerces qui veulent une présence en ligne simple et efficace.',
    detail: [
      '1 page complète : présentation, services, horaires',
      'Carte pour vous trouver facilement',
      "Bouton d'appel direct + formulaire de contact",
      'Adapté mobile, tablette et ordinateur',
    ],
  },
  {
    nom: 'Vitrine',
    prix: 690,
    vedette: true,
    points: ["Jusqu'à 5 pages", 'Galerie / carte / services', 'Fiche Google configurée', 'Référencement local'],
    resume: 'Un vrai site pour montrer tout votre savoir-faire.',
    ideal: 'Les fleuristes, tatoueurs ou restaurants qui veulent mettre en avant leurs réalisations ou leur carte.',
    detail: [
      "Jusqu'à 5 pages",
      'Galerie photos, carte ou page services',
      'Fiche Google configurée (horaires, photos, avis)',
      'Référencement local pour être trouvé près de chez vos clients',
      "Bouton d'appel, formulaire, adapté mobile",
    ],
  },
  {
    nom: 'Vitrine+',
    prix: 990,
    points: [
      "Jusqu'à 8 pages",
      '+ 1 fonction dynamique (catalogue filtrable, menu, prise de rendez-vous…)',
    ],
    resume: 'Le site complet, avec une fonction sur mesure.',
    ideal: 'Les commerces qui ont besoin d’un catalogue, d’un menu ou de la prise de rendez-vous en ligne.',
    detail: [
      "Jusqu'à 8 pages",
      '1 fonction dynamique au choix : catalogue filtrable, menu, prise de rendez-vous…',
      'Tout ce qui est compris dans la formule Vitrine',
    ],
  },
];

export const boutique = { nom: 'Boutique en ligne', aPartirDe: 1500 };

export const options = [
  { nom: 'Page supplémentaire', prix: 80 },
  { nom: 'Rédaction des textes', prix: 120 },
  { nom: 'Version anglaise', prix: 200 },
  { nom: 'Photos sur place', prix: 100 },
  { nom: 'Modification hors forfait (30 min)', prix: 30 },
];

export const maintenance = {
  prixMois: 29,
  engagement: 'engagement 12 mois',
  points: [
    'Hébergement et nom de domaine inclus',
    'Mises à jour et sauvegardes',
    '30 min de modifications par mois (horaires, photos, prix…)',
  ],
};

export const conditions = [
  "40 % d'acompte à la signature, le solde à la mise en ligne",
  '2 séries de corrections incluses',
  'Site en ligne sous 7 à 10 jours après réception de vos contenus',
];

export const offreLancement = 'Offre de lancement : -30 % pour les 3 premiers clients';

/** 1500 → « 1 500 € » */
const ESPACE_INSECABLE = String.fromCharCode(160);
export const euros = (n: number) =>
  n.toLocaleString('fr-FR').replace(/[^0-9]/g, ESPACE_INSECABLE) + ESPACE_INSECABLE + '€';
