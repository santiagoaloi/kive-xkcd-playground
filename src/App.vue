<template>
  <VApp class="mx-3">
    <AuthProvider>
      <GAppBar />

      <VSheet
        class="mx-auto w-100 bg-transparent h-100"
        max-width="1450"
      >
        <!-- This handles layouts only -->
        <VFadeTransition hide-on-leave>
          <RouterView />
        </VFadeTransition>
      </VSheet>

      <!-- Login Dialog can be called from anywhere -->
      <LoginDialog />
    </AuthProvider>
  </VApp>
</template>
