<script setup lang="ts">
defineProps({

  img: {
    type: String,
    default: '',
  },

  title: {
    type: String,
    default: '',
  },

  alt: {
    type: String,
    default: '',
  },

  num: {
    type: Number,
  },

})

const emit = defineEmits('unfavorite', 'clickLink')
</script>

<template>
  <div>
    <VCard class="active-push-down rounded-lg flex flex-col h-full card-color">
      <div>
        <VImg
          :src="img"
          class="w-full prevent-select image-hover-scalex bg-background border-b"

          height="320"
        >
          <template #placeholder>
            <div class="flex h-full items-center justify-center">
              <VProgressCircular color="primary" indeterminate />
            </div>
          </template>
        </VImg>
      </div>

      <div class="flex h-full flex-col px-5 px-md-8 pb-10">
        <div class="my-2 h-full gap-5 flex flex-col">
          <div class="flex mt-5 align-center gap-3">
            <VChip class="my-5x">
              {{ num }}
            </VChip>

            <VSpacer />

            <VBtn color="grey-lighten-3" icon variant="outlined" @click.stop="emit('clickLink')">
              <VIcon color="black" icon="i-mdi:open-in-new" />
            </vbtn>

            <VBtn color="grey-lighten-3" icon variant="outlined" @click.stop="emit('unfavorite')">
              <VIcon color="primary" icon="i-mdi:heart" />
            </vbtn>
          </div>

          <div class="flex flex-col">
            <h3 class="text-2xl font-semibold blog-title" v-html="title" />
          </div>

          <p class="mt-5x truncate-lines-2 text-lg" v-html="alt" />
        </div>
      </div>
    </VCard>
  </div>
</template>

<style scoped>
.truncate-lines-2 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3; /* Number of lines to show */
    -webkit-box-orient: vertical;
  }
</style>
