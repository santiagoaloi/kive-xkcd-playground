<script setup lang="ts">
import { setUserAndProfile } from '@/firebase/authentication'

const loading = ref(true)

// This listener is triggered when the user signs in or out, and also right after the listener is registered
auth.onAuthStateChanged(async (user) => {
  // Update the application's state with the user's information
  await setUserAndProfile(user)

  // Once the user's information has been set, update the loading state to false
  // This will happy only on the first load of the application.
  if (loading.value)
    loading.value = false
})
</script>

<template>
  <slot v-if="!loading" />
</template>
