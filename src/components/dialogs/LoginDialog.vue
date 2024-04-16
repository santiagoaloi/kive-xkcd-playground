<script setup lang="ts">
import { useAppStore } from '@/stores/app'
import { useAuthStore } from '@/stores/auth'

const appStore = useAppStore()
const authStore = useAuthStore()

function handleSignin() {
  authStore.authenticateWithGoogle()
  appStore.loginDialog = false
}
</script>

<template>
  <BaseDialog v-model="appStore.loginDialog" title="Welcome!">
    <div>
      Create an account or log in to continue.
    </div>

    <div class="mt-2">
      Save your favorite comics and get notified when new comics are released!
    </div>

    <SettingsButton class="mt-10" lightblock @click="handleSignin()">
      <VIcon color="white" icon="i-mdi:google" start />
      Continue with Google
    </SettingsButton>
  </BaseDialog>
</template>
