import { defineConfig } from 'astro/config';
import cookieconsent from "@jop-software/astro-cookieconsent";

export default defineConfig({
  integrations: [
    cookieconsent({
      guiOptions: {
        consentModal: {
          layout: 'box',
          position: 'bottom center'
        },
        preferencesModal: {
          layout: 'box',
          position: 'right'
        }
      },
      categories: {
        necessary: {
          enabled: true,
          readOnly: true
        },
        marketing: {},   // Instagram embed
        functional: {}   // Leaflet map
      }
    })
  ]
});
