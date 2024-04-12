<script setup>
import { setUserAndProfile } from '@/firebase/authentication'

auth.onAuthStateChanged(async (user) => {
  await setUserAndProfile(user)
})
</script>

<template>
  <slot />
</template>
