// Load CookieConsent UMD library
const ccScript = document.createElement("script");
ccScript.src =
  "https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@3.1.0/dist/cookieconsent.umd.js";

ccScript.onload = () => {
  CookieConsent.run({
    categories: {
      necessary: { enabled: true, readOnly: true },
      analytics: {},
      marketing: {},
    },

    language: {
      default: "en",
      translations: {
        en: {
          consentModal: {
            title: "We use cookies",
            description: "Cookie modal description",
            acceptAllBtn: "Accept all",
            acceptNecessaryBtn: "Reject all",
            showPreferencesBtn: "Manage Individual preferences",
          },
          preferencesModal: {
            title: "Manage cookie preferences",
            acceptAllBtn: "Accept all",
            acceptNecessaryBtn: "Reject all",
            savePreferencesBtn: "Accept current selection",
            closeIconLabel: "Close",
            sections: [
              {
                title: "Necessary cookies",
                description: "Required for the site",
                linkedCategory: "necessary",
              },
              {
                title: "Analytics cookies",
                description: "Helps us understand usage",
                linkedCategory: "analytics",
              },
              {
                title: "Marketing cookies",
                description: "Required for Instagram embeds",
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
