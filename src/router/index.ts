import { createRouter, createWebHistory } from 'vue-router/auto'
import { setupLayouts } from 'virtual:generated-layouts'
import type { RouteLocationNormalized } from 'vue-router'

import { getUserState } from '@/firebase'
// Create a new Vue Router instance
const router = createRouter({
  history: createWebHistory(),

  extendRoutes: (routes) => {
    // Dynamically generate layouts for the routes using virtual:generated-layouts
    return setupLayouts(routes[0].children)
  },
})

// Add a 'beforeEach' guard
router.beforeEach(async (to: RouteLocationNormalized) => {
  // Perform some asynchronous operation
  const isAuthenticated = await getUserState()

  if (to.meta.requiresAuth && !isAuthenticated) {
    // If the route requires authentication and the user is not authenticated,
    // redirect to the login page
    return '/'
  }
  // If no return statement is provided, navigation proceeds as normal
})

export default router
