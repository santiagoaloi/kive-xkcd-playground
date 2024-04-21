<template>
  <VApp class="mx-3">
    <AuthProvider>
      <GAppBar />
      <VSheet
        class="mx-auto w-100 bg-transparent h-100"
        max-width="1450"
      >
        <!-- This handles layouts only -->
        <RouterView v-slot="{ Component }">
          <template v-if="Component">
            <!-- Cache views to enhance navigation speed across layouts and pages,
              preserving the user's place in the comic when returning to the homepage
              and the scroll position  -->
            <KeepAlive>
              <component :is="Component" />
            </KeepAlive>
          </template>
        </RouterView>
      </VSheet>
    </AuthProvider>
    <!-- Login Dialog can be called from anywhere -->
    <LoginDialog />
    <!-- Notification snackbar can be called from anywhere -->
    <GSnackbar />
  </VApp>
</template>
