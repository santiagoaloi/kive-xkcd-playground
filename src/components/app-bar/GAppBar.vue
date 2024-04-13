<script setup lang="ts">
import { useAppStore } from '@/stores/app'

const appStore = useAppStore()
const authStore = useAuthStore()

const { isLoggedIn } = toRefs(authStore)
</script>

<template>
  <VAppBar
    :height="100"
    class="px-3" color="background"
  >
    <VCard
      :style="`width: ${1450}px`" class="mx-auto flex items-center p-4 justify-center"
      color="app-background" height="68"
    >
      <template v-if="!smAndDown">
        <KiveLogo />

        <div class="text-lg">
          XKCD Comics
        </div>
        <VSpacer />
      </template>

      <template v-if="!isLoggedIn">
        <SettingsButton size="large" @click="appStore.loginDialog = true">
          Sign in
        </SettingsButton>
      </template>

      <template v-else>
        <GAppBarProfileMenu />
      </template>
    </VCard>
  </VAppBar>
</template>
