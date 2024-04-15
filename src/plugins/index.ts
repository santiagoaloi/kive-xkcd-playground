// Plugins
import type { App } from 'vue'
import { VueFire, VueFireFirestoreOptionsAPI } from 'vuefire'

import pinia from '../stores'
import router from '../router'
import vuetify from './vuetify'
import { firebaseApp } from '@/firebase'

// Types

export function registerPlugins(app: App) {
  app
    .use(vuetify)
    .use(router)
    .use(VueFire, {
      firebaseApp,
      modules: [VueFireFirestoreOptionsAPI()],
    })
    .use(pinia)
}
