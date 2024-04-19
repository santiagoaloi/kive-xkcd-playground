<script setup>
import { useUserProfileStore } from '@/stores/user-profile'

import { useComicsStore } from '@/stores/comics'

const profileStore = useUserProfileStore()
const comicsStore = useComicsStore()
</script>

<template>
  <VContainer v-if="!profileStore.profile.favorites.length" class="h-100">
    <div class="align-center justify-center flex flex-col mt-15">
      <DuoNoresults size="190" />

      <div class="my-10">
        You haven't favorited any comics yet.
      </div>
    </div>
  </VContainer>
  <div class="grid gap-8 sm:grid-cols-1 xl:grid-cols-2 ">
    <ComicCard
      v-for="comicItem in profileStore.profile.favorites"
      :key="comicItem.num" v-bind="{ ...comicItem }"
      @click-link="(id) => comicsStore.lookupFavoritedComic(comicItem)"
      @unfavorite="profileStore.saveFavoriteComic(comicItem)"
    />
  </div>
</template>
