// Load CookieConsent UMD library
const ccScript = document.createElement("script");
ccScript.src =
  "https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@3.1.0/dist/cookieconsent.umd.js";

ccScript.onload = () => {
  CookieConsent.run({
    guiOptions: {
    consentModal: {
      layout: "box",
      position: "bottom right",
      flipButtons: false
    },
    preferencesModal: {
      layout: "box"
    }
  },
    categories: {
      necessary: { enabled: true, readOnly: true },
      analytics: {},
      marketing: {},
    },

    language: {
      default: "da",
      translations: {
        da: {
          consentModal: {
            title: "Vi bruger cookies",
            description:
              "Vi anvender cookies for at sikre den grundlæggende funktionalitet af hjemmesiden samt til at indsamle analyse- og marketingdata. Du kan vælge kun at acceptere nødvendige cookies eller tilpasse dine præferencer.",
            acceptAllBtn: "Accepter alle",
            acceptNecessaryBtn: "Afvis nødvendige",
            showPreferencesBtn: "Administrer præferencer",
          },
          preferencesModal: {
            title: "Administrer cookie-præferencer",
            acceptAllBtn: "Accepter alle",
            acceptNecessaryBtn: "Afvis nødvendige",
            savePreferencesBtn: "Accepter valgte",
            closeIconLabel: "Luk",
            sections: [
              {
                title: "Nødvendige cookies",
                description:
                  "Disse cookies er nødvendige for, at hjemmesiden fungerer korrekt og kan ikke fravælges.",
                linkedCategory: "necessary",
              },
              {
                title: "Analysecookies",
                description:
                  "Disse cookies hjælper os med at forstå, hvordan besøgende bruger hjemmesiden, så vi kan forbedre brugeroplevelsen.",
                linkedCategory: "analytics",
              },
              {
                title: "Marketingcookies",
                description:
                  "Disse cookies bruges til at vise relevant indhold, f.eks. Instagram-embeds og andre tredjeparts tjenester.",
                linkedCategory: "marketing",
              },
            ],
          },
        },
      },
    },
  });
};

document.head.appendChild(ccScript);
