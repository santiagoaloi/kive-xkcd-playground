<script setup lang="ts">
import { useComicsStore } from '@/stores/comics'

const { smAndDown } = useDisplay()
const comicsStore = useComicsStore()
</script>

<template>
  <div class="flex sm:flex-row gap-4 mt-5 justify-center sm:justify-start mb-6">
    <SettingsButton
      :disabled="comicsStore.isOldestComic"
      @click="comicsStore.switchComic('1')"
    >
      <div>
        <VIcon icon="i-mdi:page-first" />
      </div>
    </SettingsButton>

    <SettingsButton
      :disabled="comicsStore.currentComic === 1"
      light
      @click="comicsStore.switchComic(comicsStore.currentComic - 1)"
    >
      <div>
        <VIcon icon="i-mdi:chevron-left" />
        {{ smAndDown ? '' : 'Older' }}
      </div>
    </SettingsButton>

    <SettingsButton
      light
      @click="comicsStore.switchComic(comicsStore.getRandomComicId())"
    >
      <div>
        {{ smAndDown ? '' : 'Random' }}

        <VIcon icon="i-mdi:shuffle-variant" />
      </div>
    </SettingsButton>

    <SettingsButton
      :disabled="comicsStore.isNewestComic"
      light
      @click="comicsStore.switchComic(comicsStore.currentComic + 1)"
    >
      <div>
        {{ smAndDown ? '' : 'Newer' }}

        <VIcon icon="i-mdi:chevron-right" />
      </div>
    </SettingsButton>

    <!-- passing an empty argument will result in returning the most recent comic -->
    <SettingsButton
      :disabled="comicsStore.isNewestComic"
      @click="comicsStore.switchComic('')"
    >
      <div>
        <VIcon icon="i-mdi:page-last" />
      </div>
    </SettingsButton>

    <SettingsButton
      light
    >
      <div>
        {{ smAndDown ? '' : 'Gallery' }}
        <VIcon icon="i-mdi:image" />
      </div>
    </SettingsButton>
  </div>
</template>
