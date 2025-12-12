// public/cookieconsent-config.js
// Load CookieConsent synchronously as early as possible

const ccScript = document.createElement("script");
ccScript.src =
  "https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@3.1.0/dist/cookieconsent.umd.js";
ccScript.async = false;

ccScript.onload = () => {
  window.CookieConsent.run({
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
      marketing: {}
    },

    language: {
      default: "da",
      translations: {
        da: {
          consentModal: {
            title: "Vi bruger cookies",
            description:
              "Vi anvender cookies for at sikre den grundlæggende funktionalitet samt til analyse og marketing.",
            acceptAllBtn: "Accepter alle",
            acceptNecessaryBtn: "Afvis nødvendige",
            showPreferencesBtn: "Administrer præferencer"
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
                  "Disse cookies er nødvendige for at hjemmesiden fungerer korrekt.",
                linkedCategory: "necessary"
              },
              {
                title: "Analysecookies",
                description:
                  "Disse cookies hjælper os med at forbedre brugeroplevelsen.",
                linkedCategory: "analytics"
              },
              {
                title: "Marketingcookies",
                description:
                  "Disse cookies muliggør visning af Instagram-indhold og andre tredjepartswidgets.",
                linkedCategory: "marketing"
              }
            ]
          }
        }
      }
    }
  });
};

document.head.appendChild(ccScript);
