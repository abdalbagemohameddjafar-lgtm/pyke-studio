// Coordonnées et informations de Pyke Studio.
// Modifie ici : tout le site se met à jour automatiquement.
//
// ⚠️ Tout ce qui est entre [crochets] est un emplacement à compléter : il reste VISIBLE sur le site
// tant qu'il n'est pas remplacé. Ne rien inventer : mets tes vraies informations.

/** E-mail de contact, utilisé partout (pied de page, formulaire, mentions légales, CGV, JSON-LD).
 *  Le jour où tu as une adresse sur ton domaine, change-la uniquement ici. */
export const EMAIL = 'pykestudio.contact@gmail.com';

/** Téléphone : null tant qu'il n'est pas fourni (le site affiche alors un emplacement visible).
 *  Format attendu : affichage « 06 12 34 56 78 » et lien « +33612345678 ». */
export const TELEPHONE: { affichage: string; lien: string } | null = { affichage: '07 71 87 56 10', lien: '+33771875610' };
export const TELEPHONE_A_COMPLETER = '[TÉLÉPHONE À COMPLÉTER]';

export const studio = {
  nom: 'Pyke Studio',
  slogan: 'Sites web pour artisans et commerçants',
  zone: 'Partout en France, à distance',
  email: EMAIL,
  telephone: TELEPHONE,
  pseudo: '@pyke.studio',
  instagram: 'https://www.instagram.com/pyke.studio',
  tiktok: 'https://www.tiktok.com/@pyke.studio',
  url: 'https://pykestudio.fr',

  // Section « Qui est derrière Pyke Studio » (accueil, avant le formulaire).
  // photo : chemin d'une image dans public/ (ex. '/assets/img/portrait.webp'), ou null.
  fondateur: {
    prenom: '[PRÉNOM À COMPLÉTER]',
    ville: '[VILLE À COMPLÉTER]',
    photo: null as string | null,
    presentation: [
      '[À COMPLÉTER : qui vous êtes, en une phrase.]',
      '[À COMPLÉTER : pourquoi vous créez des sites pour les commerçants.]',
      '[À COMPLÉTER : comment vous travaillez avec vos clients.]',
    ],
  },

  // Informations légales (obligatoires dans les mentions légales et les CGV).
  legal: {
    responsable: '[Prénom NOM à compléter]',
    statut: 'Micro-entreprise (entrepreneur individuel)',
    siret: '[SIRET à compléter]',
    adresse: '[Adresse à compléter]',
    tva: 'TVA non applicable, art. 293 B du CGI',
  },

  hebergeur: {
    nom: 'Cloudflare, Inc.',
    adresse: '101 Townsend Street, San Francisco, CA 94107, États-Unis',
    telephone: '[TÉLÉPHONE DE L’HÉBERGEUR À COMPLÉTER]',
    site: 'https://www.cloudflare.com',
  },
};
