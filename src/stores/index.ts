// Utilities
import { createPinia } from 'pinia'
import { markRaw } from 'vue'
import router from '@/router'

const pinia = createPinia()

pinia.use(({ store }) => {
  // The 'router' instance is marked as raw using 'markRaw'.
  // This prevents Vue from observing and tracking it in the reactivity system.
  store.router = markRaw(router)
})

export default pinia
