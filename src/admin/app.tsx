import logo from "./extensions/favicon-32x32.png";
import favicon from "./extensions/favicon.ico";

function getEnvironment(defaultEnv:string) {
  return (process.env.NODE_ENV || defaultEnv).toUpperCase()
}
export default {
  config: {
    auth: {
      logo
    },
    head:{
      favicon
    },
    menu: {
      logo
    },
    locales: [
      // 'ar',
      'fr',
      // 'cs',
      // 'de',
      // 'dk',
      // 'es',
      // 'he',
      // 'id',
      // 'it',
      // 'ja',
      // 'ko',
      // 'ms',
      // 'nl',
      // 'no',
      // 'pl',
      // 'pt-BR',
      // 'pt',
      // 'ru',
      // 'sk',
      // 'sv',
      // 'th',
      // 'tr',
      // 'uk',
      // 'vi',
      // 'zh-Hans',
      // 'zh',
    ],
    tutorials: false,
    notifications: {
      releases: false,
    },
    translations: {
      "en": {
        "app.components.LeftMenu.navbrand.workplace": getEnvironment("workspace")
      },
      "fr": {
        "app.components.LeftMenu.navbrand.workplace": getEnvironment("espace de travail")
      },
    },
  },
  bootstrap(app) {
    /* eslint-disable-next-line no-console */
    console.log(app);
  },
};
