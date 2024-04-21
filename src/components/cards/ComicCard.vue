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
    <VHover v-slot="{ isHovering, props }">
      <VCard
        v-bind="props"
        class="active-push-down rounded-lg flex flex-col h-full card-color"
      >
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
            <div class="flex mt-5 align-center gap-3 h-12">
              <VChip class="my-5x">
                {{ num }}
              </VChip>

              <VSpacer />

              <VFadeTransition>
                <div v-show="isHovering" class="flex gap-3">
                  <VBtn
                    class="rounded-lg" color="grey-lighten-3" icon="i-mdi:heart" variant="outlined"
                    @click.stop="emit('unfavorite')"
                  >
                    <VIcon color="primary" />
                  </vbtn>

                  <VBtn

                    class="rounded-lg" color="grey-lighten-3" icon="i-mdi:open-in-new" variant="outlined"
                    @click.stop="emit('clickLink')"
                  >
                    <VIcon color="black" />
                  </vbtn>
                </div>
              </VFadeTransition>
            </div>

            <div class="flex flex-col">
              <h3 class="text-2xl font-semibold blog-title" v-html="title" />
            </div>

            <p class="mt-5x truncate-lines-2 text-lg" v-html="alt" />
          </div>
        </div>
      </VCard>
    </VHover>
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
