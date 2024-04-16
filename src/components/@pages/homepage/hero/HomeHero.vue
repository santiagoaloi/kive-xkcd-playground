<script setup lang="ts">
import { useAppStore } from '@/stores/app'
import { useComicsStore } from '@/stores/comics'
import { useUserProfileStore } from '@/stores/user-profile'
import { useAuthStore } from '@/stores/auth'

const comicsStore = useComicsStore()
const appStore = useAppStore()
const profileStore = useUserProfileStore()
const authStore = useAuthStore()
</script>

<template>
  <SquareImageCard
    :height="600"
    :img=" comicsStore.getComic.img"
    :loading="comicsStore.loading && 'primary'"
  >
    <div class="p-md-5 h-full flex flex-col justify-center bg-greenx">
      <!-- <HomeHeroChip /> -->

      <p class="text-5xl lg:text-6xl sm:w-8/12 lg:w-auto  font-bold mb-5">
        {{ comicsStore.getComic.title }}
      </p>

      <p class="text-2xl">
        {{ comicsStore.getComic.alt }}
      </p>
    </div>

    <template #append>
      <VToolbar class="border-t px-6" color="transparent">
        <ComicsActionButtons />

        <VSpacer />

        <div class="flex gap-3 ">
          <VBtn color="grey-lighten-3" icon variant="outlined" @click="authStore.isLoggedIn ? profileStore.saveFavoriteComic() : appStore.loginDialog = true ">
            <VIcon :color="comicsStore.isFavorited ? 'primary' : 'black'" :icon="comicsStore.isFavorited ? 'i-mdi:heart' : 'i-mdi:heart-outline'" />
          </vbtn>

          <VBtn color="grey-lighten-3" icon variant="outlined" @click="appStore.comicDetailsDialog = true">
            <VIcon color="black" icon="i-mdi:info-outline" />
          </vbtn>
        </div>
      </VToolbar>
    </template>
  </SquareImageCard>
  <ComicInfoDialog :comic="comicsStore.getComic " />
</template>
