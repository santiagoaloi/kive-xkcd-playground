<script setup lang="ts">
import { useComicsStore } from '@/stores/comics'

const comicsStore = useComicsStore()
</script>

<template>
  <SquareImageCard
    :height="700"
    :img=" comicsStore.getComic.img"
    :loading="comicsStore.loading && 'primary'"
  >
    <div class="p-md-5 h-full flex flex-col justify-center bg-greenx">
      <!-- <HomeHeroChip /> -->

      <p class="text-5xl lg:text-6xl sm:w-8/12 lg:w-auto  font-bold mb-5">
        {{ comicsStore.getComic.title }}
      </p>

      <p class="we-made-job-hunting text-2xl">
        {{ comicsStore.getComic.alt }}
      </p>
    </div>
  </SquareImageCard>
</template>
