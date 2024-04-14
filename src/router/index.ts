import { createRouter, createWebHistory } from 'vue-router/auto'
import { setupLayouts } from 'virtual:generated-layouts'

// Create a new Vue Router instance
const router = createRouter({
  history: createWebHistory(),

  extendRoutes: (routes) => {
    // Dynamically generate layouts for the routes using virtual:generated-layouts
    return setupLayouts(routes)
  },
})

export default router
