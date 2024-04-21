<script setup lang="ts">
import { useAppStore } from '@/stores/app'

const appStore = useAppStore()
const authStore = useAuthStore()

const { isLoggedIn } = toRefs(authStore)

const { smAndDown } = useDisplay()
</script>

<template>
  <VAppBar
    :height="100"
    class="px-3" color="background"
  >
    <VCard
      :style="`width: ${1450}px`" class="mx-auto flex items-center p-4 justify-end gap-3"
      color="app-background" height="68"
    >
      <template v-if="!smAndDown">
        <RouterLink :class="$route.path === '/' ? 'pointer-events-none' : ''" to="/">
          <KiveLogo />
        </RouterLink>

        <div class="text-lg">
          XKCD Comics
        </div>
        <VSpacer />
      </template>

      <VBtn target="_blank"  class="rounded-lg border-0" href="https://github.com/santiagoaloi/kive-xkcd-playground" icon="i-mdi:github" variant="text">
        <VIcon color="black" />
      </vbtn>

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
