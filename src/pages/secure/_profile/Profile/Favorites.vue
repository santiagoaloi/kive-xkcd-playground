<script setup>
import { useComicsStore } from '@/stores/comics'
import { useUserProfileStore } from '@/stores/user-profile'

const profileStore = useUserProfileStore()
const comicsStore = useComicsStore()
</script>

<template>
  <VSheet class="sticky top-20 align-center" color="background" height="80" style="z-index:1">
    <div class="flex flex-col h-100 w-100 align-center justify-center">
      <div class="w-100 flex align-center gap-3">
        <VSpacer />

        <SettingsButton class="mr-1" height="40" @click="profileStore.removeAllFavorites()">
          Remove all favorites
        </SettingsButton>

        <VBtnToggle
          v-model="profileStore.favoritesViewType"
          class=" rounded-lg"
          density="compact"
          divided
          mandatory
          style="height: 40px"
          variant="outlined"
        >
          <VBtn>
            <VIcon icon="i-mdi-format-list-bulleted-square" />
          </VBtn>
          <VBtn>
            <VIcon icon="i-mdi-dots-grid" />
          </VBtn>
        </VBtnToggle>
      </div>
    </div>
  </VSheet>

  <VContainer v-if="!profileStore.profile.favorites.length" class="h-100">
    <div class="align-center justify-center flex flex-col mt-15">
      <DuoNoresults size="190" />

      <div class="my-10">
        You haven't favorited any comics yet.
      </div>
    </div>
  </VContainer>
  <div :class="`xl:grid-cols-${profileStore.favoritesViewType === 0 ? 1 : 2}`" class="grid gap-8 sm:grid-cols-1">
    <ComicCard
      v-for="comicItem in profileStore.profile.favorites"
      :key="comicItem.num"
      :view-type="profileStore.favoritesViewType" v-bind="{ ...comicItem }"
      @click-link="(id) => comicsStore.lookupFavoritedComic(comicItem)"
      @unfavorite="profileStore.saveFavoriteComic(comicItem)"
    />
  </div>
</template>
