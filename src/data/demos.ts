// =====================================================================
// NOS SITES DE DÉMONSTRATION — le seul fichier à modifier pour ajouter une démo.
//
// Il alimente : la liste « 02 — Réalisations », le bloc « projet mis en avant »,
// l'exemple affiché sous les formules (accueil, section 04) et la page /tarifs.
//
// Pour ajouter une démo :
//   1. Déposez une capture de sa page d'accueil dans public/assets/img/ :
//      <nom>-accueil-large-1440.webp (1440 × 800) et <nom>-accueil-large-720.webp (720 × 400).
//   2. Copiez un bloc ci-dessous et remplissez-le.
//   3. « formule » doit être le slug d'une formule de src/data/tarifs.ts
//      (essentiel, vitrine, vitrine-plus). Une seule démo par formule est utilisée comme exemple.
// =====================================================================

export type Demo = {
  nom: string;
  secteur: string; // affiché en petit, ex. « Parfumerie »
  formule: 'essentiel' | 'vitrine' | 'vitrine-plus';
  url: string;
  image: string; // capture 1440 × 800
  imagePetite: string; // même capture en 720 × 400
  alt: string;
  description: string; // une phrase (bloc mis en avant)
  phraseFormule: string; // ce que la formule apporte concrètement dans cette démo (bloc des formules)
  precision?: string; // petite mention sous la démo (Réalisations + exemple de formule), ex. démo plus riche que la formule
  positionImage: 'droite' | 'gauche'; // place de la vignette par rapport au nom (liste Réalisations)
  cadrage: string; // partie de la capture visible dans la vignette-pilule (CSS object-position)
  enAvant?: boolean; // true : démo du bloc « projet mis en avant » (une seule)
};

export const demos: Demo[] = [
  {
    nom: 'Maison Ambre',
    secteur: 'Parfumerie',
    formule: 'vitrine',
    url: 'https://maison-ambre.pages.dev',
    image: '/assets/img/ma-accueil-large-1440.webp',
    imagePetite: '/assets/img/ma-accueil-large-720.webp',
    alt: 'Page d’accueil du site de la parfumerie Maison Ambre : un flacon ambré sur fond crème',
    description: 'Une parfumerie fictive : 73 parfums, des filtres et un test olfactif.',
    phraseFormule: 'Plusieurs pages pour raconter la maison, présenter la collection et donner envie de passer en boutique.',
    positionImage: 'droite',
    cadrage: '72% 50%',
  },
  {
    nom: 'TSUTSU',
    secteur: 'Comptoir à temaki',
    formule: 'vitrine-plus',
    url: 'https://tsutsu.pages.dev',
    image: '/assets/img/tsutsu-accueil-large-1440.webp',
    imagePetite: '/assets/img/tsutsu-accueil-large-720.webp',
    alt: 'Page d’accueil du site TSUTSU, comptoir à temaki : lanternes allumées et titre « Roulé à la main. Mangé dans la minute. »',
    description: 'Un comptoir à temaki fictif à Metz : la carte filtrable, la commande à emporter et la réservation au comptoir.',
    phraseFormule: 'Le menu en ligne, avec la commande à emporter : c’est la fonction sur mesure incluse.',
    precision:
      'La démo montre plusieurs fonctions (carte filtrable, click & collect, réservation). La formule Vitrine+ en inclut une au choix ; les autres sont disponibles en option.',
    positionImage: 'gauche',
    cadrage: '50% 45%',
    enAvant: true,
  },
  {
    nom: 'Morel Plomberie',
    secteur: 'Plombier-chauffagiste',
    formule: 'essentiel',
    url: 'https://morel-plomberie.pages.dev',
    image: '/assets/img/morel-accueil-large-1440.webp',
    imagePetite: '/assets/img/morel-accueil-large-720.webp',
    alt: 'Page d’accueil du site Morel Plomberie : titre « Votre plombier à Metz, dépannage rapide 7j/7 », boutons Appeler et Devis, photo d’un plombier sous un évier',
    description: 'Un plombier fictif à Metz : une seule page pensée pour faire appeler, avec devis en ligne et urgences 7j/7.',
    phraseFormule: 'Une seule page claire : services, zone d’intervention, avis, horaires et un formulaire de devis, avec le bouton « Appeler » toujours à portée de pouce.',
    positionImage: 'droite',
    cadrage: '30% 50%',
  },
];

/** Démo qui illustre une formule (ou undefined s'il n'y en a pas encore). */
export const demoPourFormule = (slug: string) => demos.find((d) => d.formule === slug);

/** Texte affiché pour une formule sans démo (on n'invente pas de démo). */
export const sansDemo: Record<string, string> = {};
