<script setup lang="ts">
import { useComicsStore } from '@/stores/comics'

const comicsStore = useComicsStore()

/*
 * Retrieve the value of comic query param from the current route.
 * If the 'comic' query parameter doesn't exist, it will return an empty string ('').
 * So we can start the app with the most recent comic.
 */
const comicParam = useRouteQuery('id', '')

/*
 * Watch for changes in `comicsStore.currentComic`.
 * when a new value is detected update the value of the query param
 */
watch(() => comicsStore.currentComic, (currentComic) => {
  if (currentComic)
    comicParam.value = currentComic
  comicsStore.switchComic(comicParam.value)
}, {
  immediate: true,
})

onMounted(() => {
  comicsStore.getNewestComicId()
})
</script>

<template>
  <HomeHero />
</template>
