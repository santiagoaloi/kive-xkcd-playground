<script setup lang="ts">
import { useThemeStore } from '@/stores/theme'

const themeStore = useThemeStore()
</script>

<template>
  <VBtn

    :icon="themeStore.isDark ? 'i-mdi:lightbulb-on' : 'i-mdi:lightbulb-outline'"
    class="rounded-lg border-0"
    color="link" rounded="lg"
    variant="text"
    @click="themeStore.themeToggle()"
  />
</template>
