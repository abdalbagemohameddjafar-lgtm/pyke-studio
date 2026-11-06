// Coordonnées et informations de Pyke Studio.
// Modifie ici : tout le site se met à jour automatiquement.
// Règle : aucun [crochet] ni emplacement « à compléter » ne doit être publié. Si une info manque,
// on masque l'élément plutôt que d'afficher un vide.

/** E-mail de contact, utilisé partout (pied de page, formulaire, mentions légales, CGV, JSON-LD).
 *  Le jour où tu as une adresse sur ton domaine, change-la uniquement ici. */
export const EMAIL = 'pykestudio.contact@gmail.com';

/** Téléphone : null → l'élément est masqué. Format : affichage « 06 12 34 56 78 » et lien « +33612345678 ». */
export const TELEPHONE: { affichage: string; lien: string } | null = { affichage: '07 71 87 56 10', lien: '+33771875610' };

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

  // Section « 06 — Le studio » de l'accueil.
  // photo : chemin d'une image dans public/ (ex. '/assets/img/portrait.webp'), ou null = pas d'emplacement photo.
  fondateur: {
    prenom: 'Djafar',
    ville: 'Metz',
    photo: null as string | null,
    presentation: [
      'Je m’appelle Djafar, je suis étudiant en informatique à Metz.',
      'Je crée des sites simples et efficaces pour les commerçants et artisans, qui n’ont pas le temps de s’en occuper.',
      'Vous avez un seul interlocuteur, du premier échange à la mise en ligne.',
    ],
  },

  // Informations légales (mentions légales, CGV, pied de page).
  legal: {
    responsable: 'Djafar ABDALBAGE MOHAMED',
    /** Mention obligatoire depuis le 15 mai 2022 à côté du nom de l'entrepreneur individuel */
    responsableEI: 'Djafar ABDALBAGE MOHAMED — Entrepreneur individuel (EI)',
    responsableCourt: 'Djafar ABDALBAGE MOHAMED EI',
    statut: 'Micro-entreprise',
    siren: '132 434 945',
    siret: '132 434 945 00011',
    naf: '62.01Z (programmation informatique)',
    creation: '4 novembre 2026',
    adresse: '5 rue du Maréchal Juin, 57070 Metz',
    tva: 'TVA non applicable, art. 293 B du CGI',
  },

  hebergeur: {
    nom: 'Cloudflare, Inc.',
    adresse: '101 Townsend Street, San Francisco, CA 94107, États-Unis',
    telephone: '+1 888 993 5273',
    site: 'https://www.cloudflare.com',
  },
};
