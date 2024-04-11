<script setup lang="ts">
import { useComicsStore } from '@/stores/comics'

const comicsStore = useComicsStore()
</script>

<template>
  <SquareImageCard
    :height="600"
    :img=" comicsStore.getComic.img"
    :loading="comicsStore.loading && 'pink'"
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
          <VBtn color="grey-lighten-3" icon variant="outlined">
            <VIcon color="pink" icon="i-mdi:heart-outline" />
          </vbtn>

          <VBtn color="grey-lighten-3" icon variant="outlined">
            <VIcon color="black" icon="i-mdi:info-outline" />
          </vbtn>
        </div>
      </VToolbar>
    </template>
  </SquareImageCard>
</template>
