<script setup lang="ts">
const props = defineProps({

  height: {
    type: Number,
    default: 600,
  },

  alt: {
    type: String,
    default: '',
  },

  dense: {
    type: Boolean,
    default: false,
  },

  transparent: {
    type: Boolean,
    default: false,
  },

  img: {
    type: String,
    default: '',
  },

})

const { mdAndUp } = useDisplay()
</script>

<template>
  <VCard>
    <div class="xl:flex w-100 h-full">
      <div
        class="w-full xl:w-1/2"
      >
        <div v-if="$slots.default" class="flex flex-col flex-wrap overflow-auto w-full h-full p-16 bg-yellow-50x">
          <slot />
        </div>
      </div>

      <div
        class="xl:w-1/2 xl:block order-last"
      >
        <template v-if="!$slots.content">
          <VImg
            :alt="props.alt"
            :height="mdAndUp ? props.height : 'auto'"
            :src="props.img"
            class="bg-white border"
          >
            <template #placeholder>
              <VRow
                align="center"
                class="fill-height ma-0"
                justify="center"
              >
                <VProgressCircular
                  color="grey-lighten-5"
                  indeterminate
                />
              </VRow>
            </template>
          </VImg>
        </template>
      </div>
    </div>
  </VCard>
</template>
