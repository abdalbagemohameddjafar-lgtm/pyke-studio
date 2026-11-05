// Types des variables d'environnement (fichier .env)
interface ImportMetaEnv {
  /** Clé d'accès Web3Forms (vide = le formulaire ouvre l'application e-mail du visiteur). */
  readonly PUBLIC_WEB3FORMS_KEY?: string;
}
interface ImportMeta {
  readonly env: ImportMetaEnv;
}
