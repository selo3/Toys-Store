/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import vuetify from './vuetify'
import pinia from '../store'
import router from '../router'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import i18n from './i18'


pinia.use(piniaPluginPersistedstate)
export function registerPlugins (app) {
  app
    .use(vuetify)
    .use(router)
    .use(pinia)
    .use(i18n)

}
