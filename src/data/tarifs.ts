// Grille tarifaire de Pyke Studio — valable à partir de novembre 2026.
// Prix nets : TVA non applicable (art. 293 B du CGI).

export const validite = 'Valables à partir de novembre 2026';

// ---------------------------------------------------------------------------
// OFFRE DE LANCEMENT — la seule chose à changer pour l'activer ou la couper.
// actif: false → plus aucun prix barré ni mention de l'offre sur le site.
// placesRestantes : à mettre à jour À LA MAIN à chaque contrat signé (3 → 2 → 1 → 0).
//   À 0, l'offre disparaît automatiquement du site.
// dateFin : null = « jusqu'à épuisement des places » ; sinon une date en toutes lettres, ex. '31 janvier 2027'.
// ---------------------------------------------------------------------------
export const OFFRE_LANCEMENT = {
  actif: true,
  remise: 0.3, // -30 %
  places: 3, // pour les 3 premiers contrats signés
  placesRestantes: 3,
  dateFin: null as string | null,
};

const offreActive = OFFRE_LANCEMENT.actif && OFFRE_LANCEMENT.placesRestantes > 0;
const pourcentage = Math.round(OFFRE_LANCEMENT.remise * 100);

/** Conditions complètes de l'offre (pratique commerciale loyale : on dit clairement jusqu'à quand). */
export const offreLancement = offreActive
  ? `Offre de lancement : -${pourcentage} % pour les ${OFFRE_LANCEMENT.places} premiers contrats signés, ${
      OFFRE_LANCEMENT.dateFin ? `jusqu’au ${OFFRE_LANCEMENT.dateFin}` : `jusqu’à épuisement des ${OFFRE_LANCEMENT.places} places`
    }`
  : '';

/** Compteur affiché à côté de l'offre. */
export const placesRestantes = offreActive ? `places restantes : ${OFFRE_LANCEMENT.placesRestantes}` : '';

/** Explication du prix barré. */
export const PRIX_BARRE = 'Tarif standard appliqué après l’offre de lancement';

/** Prix après remise de lancement (arrondi à l'euro), ou null si l'offre est coupée. */
export const prixRemise = (prix: number) =>
  offreActive ? Math.round(prix * (1 - OFFRE_LANCEMENT.remise)) : null;

export type Formule = {
  nom: string;
  slug: string; // utilisé dans les liens « Choisir cette formule » (?formule=…)
  prix: number;
  inclut?: string; // « Tout Essentiel, plus : » — la formule reprend la précédente
  points: string[]; // liste courte (accueil)
  vedette?: boolean; // affiche « Recommandé »
  resume: string;
  ideal: string; // « Idéal pour… » (page Tarifs)
  detail: string[]; // tout ce qui est compris (page Tarifs)
  supplement?: string; // mention discrète sous la liste (page Tarifs)
  pourQui: string; // une ligne sous le nom (accueil)
};

// Inclus dans toutes les formules (page Tarifs).
export const inclusPartout = [
  '2 séries de corrections incluses',
  'En ligne sous 7 à 10 jours après réception de vos contenus',
];

export const formules: Formule[] = [
  {
    nom: 'Essentiel',
    slug: 'essentiel',
    prix: 390,
    points: ['1 page complète', 'Services, horaires et carte', 'Bouton d’appel et formulaire', 'Adapté mobile'],
    resume: 'Une page complète pour être trouvé et contacté.',
    pourQui: 'Pour être trouvé et contacté',
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
    slug: 'vitrine',
    prix: 690,
    vedette: true,
    inclut: 'Tout Essentiel, plus :',
    points: ['Jusqu’à 5 pages', 'Galerie, carte ou services', 'Fiche Google configurée', 'Référencement local'],
    resume: 'Un vrai site pour montrer tout votre savoir-faire.',
    pourQui: 'Pour montrer votre savoir-faire',
    ideal: 'Les fleuristes, tatoueurs ou restaurants qui veulent mettre en avant leurs réalisations ou leur carte.',
    detail: [
      'Tout ce qui est compris dans la formule Essentiel',
      "Jusqu'à 5 pages",
      'Galerie photos, carte ou page services',
      'Fiche Google configurée (horaires, photos, avis)',
      'Référencement local pour être trouvé près de chez vos clients',
    ],
  },
  {
    nom: 'Vitrine+',
    slug: 'vitrine-plus',
    prix: 990,
    inclut: 'Tout Vitrine, plus :',
    points: ['Jusqu’à 8 pages', '1 fonction sur mesure : menu, catalogue ou rendez-vous'],
    resume: 'Le site complet, avec une fonction sur mesure.',
    pourQui: 'Avec menu, catalogue ou rendez-vous',
    ideal: 'Les commerces qui ont besoin d’un catalogue, d’un menu ou de la prise de rendez-vous en ligne.',
    detail: [
      'Tout ce qui est compris dans la formule Vitrine',
      "Jusqu'à 8 pages",
      '1 fonction dynamique au choix : catalogue filtrable, menu, prise de rendez-vous…',
    ],
    supplement: 'Fonction supplémentaire : sur devis',
  },
];

export const boutique = { nom: 'Boutique en ligne', aPartirDe: 1500 };

// Chaque option doit avoir un prix : une option sans prix n'est pas affichée.
export const options: { nom: string; prix: number | null }[] = [
  { nom: 'Page supplémentaire', prix: 80 },
  { nom: 'Rédaction des textes', prix: 120 },
  { nom: 'Version anglaise', prix: 200 },
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
  facturation: 'Facturée mensuellement, payable d’avance.',
};

export const conditions = [
  "40 % d'acompte à la commande",
  'Le solde (60 %) est réglé à la validation finale du site, présenté sur une adresse de prévisualisation, avant sa mise en ligne sur le nom de domaine du client.',
  'Paiement par virement bancaire',
  '2 séries de corrections incluses',
  'Site en ligne sous 7 à 10 jours après réception de vos contenus',
];

/** 1500 → « 1 500 € » */
const ESPACE_INSECABLE = String.fromCharCode(160);
export const euros = (n: number) =>
  n.toLocaleString('fr-FR').replace(/[^0-9]/g, ESPACE_INSECABLE) + ESPACE_INSECABLE + '€';
