<script setup lang="ts">
import { useAppStore } from '@/stores/app'

defineProps({
  comic: {
    type: Object,
    default: () => {},
  },

})

const appStore = useAppStore()

function formattedDate(comic): string {
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  const day = comic.day
  const month = monthNames[Number(comic.month) - 1] // Convert month to number before subtracting 1
  const year = comic.year
  return `${month} ${day}, ${year}`
}
</script>

<template>
  <BaseDialog v-model="appStore.comicDetailsDialog" title="Welcome!">
    <div>
      Posted {{ formattedDate(comic) }}
    </div>

    <div class="mt-5">
      Comic Id
    </div>
    <div class="text-h5 mt-1">
      {{ comic.num }}
    </div>

    <div class="mt-5">
      Image URL (for hotlinking/embedding)
    </div>
    <div class="mt-1 text-primary">
      {{ comic.img }}
    </div>
  </BaseDialog>
</template>
