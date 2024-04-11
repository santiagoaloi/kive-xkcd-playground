<script setup lang="ts">
import { useComicsStore } from '@/stores/comics'

const { smAndDown } = useDisplay()
const comicsStore = useComicsStore()
</script>

<template>
  <div class="flex sm:flex-row gap-4 mt-5 justify-center sm:justify-start mb-6">
    <SettingsButton
      :disabled="comicsStore.isFirstComic"
      class="rounded-xl w-100 sm:w-auto"
      color="black-button"
      @click="comicsStore.switchComic('1')"
    >
      <div>
        <VIcon icon="i-mdi:page-first" />
      </div>
    </SettingsButton>

    <SettingsButton
      :disabled="comicsStore.currentComic === 1"
      class="rounded-xl w-100 sm:w-auto"
      color="black-button"
      light
      @click="comicsStore.switchComic(comicsStore.currentComic - 1)"
    >
      <div>
        <VIcon icon="i-mdi:chevron-left" />
        {{ smAndDown ? '' : 'Older' }}
      </div>
    </SettingsButton>

    <SettingsButton

      class="rounded-xl w-100 sm:w-auto"
      light
    >
      <div>
        {{ smAndDown ? '' : 'Random' }}

        <VIcon icon="i-mdi:shuffle-variant" />
      </div>
    </SettingsButton>

    <SettingsButton
      :disabled="comicsStore.isMostRecentComic"
      class="rounded-xl w-100 sm:w-auto"
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
      :disabled="comicsStore.isMostRecentComic"

      class="rounded-xl w-100 sm:w-auto"
      color="black-button"
      @click="comicsStore.switchComic('')"
    >
      <div>
        <VIcon icon="i-mdi:page-last" />
      </div>
    </SettingsButton>

    <SettingsButton

      class="rounded-xl w-100 sm:w-auto"
      light
    >
      <div>
        Gallery
        <VIcon icon="i-mdi:image" />
      </div>
    </SettingsButton>
  </div>
</template>
