// Utilities
import type { Pinia, Store } from 'pinia'
import { createPinia } from 'pinia'
import type { Router } from '@/router'
import router from '@/router'

/**
 * Creates a new Pinia instance.
 */
const pinia: Pinia = createPinia()

/**
 * Adds a plugin to the Pinia instance.
 * The plugin adds the router instance to every store.
 * The router instance is marked as raw using 'markRaw'.
 * This prevents Vue from observing and tracking it in the reactivity system.
 */
pinia.use(({ store }: { store: Store }) => {
  store.router = markRaw(router) as Router
})

/**
 * Exports the configured Pinia instance.
 */
export default pinia
