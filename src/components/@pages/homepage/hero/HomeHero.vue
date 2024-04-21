<script setup lang="ts">
import { useAppStore } from '@/stores/app'
import { useAuthStore } from '@/stores/auth'
import { useComicsStore } from '@/stores/comics'
import { useUserProfileStore } from '@/stores/user-profile'

const appStore = useAppStore()
const authStore = useAuthStore()
const comicsStore = useComicsStore()
const profileStore = useUserProfileStore()

const { lgAndUp } = useDisplay()
</script>

<template>
  <SquareImageCard
    :height="600"
    :img=" comicsStore.getComic.img"
    :loading="comicsStore.loading && 'primary'"
  >
    <div class="p-md-5 h-full flex flex-col justify-center">
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

        <VChip v-if="lgAndUp" label>
          {{ comicsStore.paginationDetails }}
        </VChip>

        <VSpacer />

        <div class="flex gap-3 align-center ">
          <!-- If not authenticated, show the login dialog instead of saving as favorite -->
          <VBtn :icon="comicsStore.isFavorited ? 'i-mdi:heart' : 'i-mdi:heart-outline'" class="rounded-lg" color="grey-lighten-3" variant="outlined" @click="authStore.isLoggedIn ? profileStore.saveFavoriteComic() : appStore.loginDialog = true ">
            <VIcon :color="comicsStore.isFavorited ? 'primary' : 'black'" />
          </vbtn>

          <!-- Trigger Details for nerds dialog -->
          <VBtn class="rounded-lg" color="grey-lighten-3" icon="i-mdi:info-outline" variant="outlined" @click="appStore.comicDetailsDialog = true">
            <VIcon color="black" />
          </VBtn>
        </div>
      </VToolbar>
    </template>
  </SquareImageCard>
  <!-- TODO: this could be a global dialog that could be accessed from anywhere -->
  <ComicInfoDialog :comic="comicsStore.getComic " />
</template>
