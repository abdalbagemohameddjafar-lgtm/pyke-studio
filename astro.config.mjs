// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://pykestudio.fr',
  integrations: [
    sitemap({
      // Pages exclues du plan du site : confirmation d'envoi et page d'erreur.
      filter: (page) => !/\/(merci|404)\/?$/.test(page),
    }),
  ],
});
