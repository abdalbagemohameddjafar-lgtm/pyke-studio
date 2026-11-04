// Grille tarifaire de Pyke Studio — valable à partir de novembre 2026.
// Prix nets : TVA non applicable (art. 293 B du CGI).

export const validite = 'Valables à partir de novembre 2026';

export type Formule = {
  nom: string;
  prix: number;
  points: string[];
  vedette?: boolean; // affiche le badge « Le plus choisi »
};

export const formules: Formule[] = [
  {
    nom: 'Essentiel',
    prix: 390,
    points: ['1 page complète', 'Services, horaires, carte', "Bouton d'appel + formulaire", 'Adapté mobile'],
  },
  {
    nom: 'Vitrine',
    prix: 690,
    vedette: true,
    points: ["Jusqu'à 5 pages", 'Galerie / carte / services', 'Fiche Google configurée', 'Référencement local'],
  },
  {
    nom: 'Vitrine+',
    prix: 990,
    points: [
      "Jusqu'à 8 pages",
      '+ 1 fonction dynamique (catalogue filtrable, menu, prise de rendez-vous…)',
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
