<script setup lang="ts">
import { useUserProfileStore } from '@/stores/user-profile'

const profileStore = useUserProfileStore()
</script>

<template>
  <!-- Only render this layout if the user profile is actually loaded -->
  <VMain v-if="profileStore.profileId">
    <RouterView />
  </VMain>
</template>
