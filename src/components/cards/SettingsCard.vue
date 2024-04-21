<script setup lang="ts">
defineProps({
  height: {
    type: [String, Number],
    default: 'auto',
  },

  titleDivider: {
    type: Boolean,
    default: false,
  },

  loading: {
    type: Boolean,
    default: false,
  },

  align: {
    type: String,
    default: 'end',
  },

  kbd: {
    type: Boolean,
    default: false,
  },

  noGutters: {
    type: Boolean,
    default: false,
  },

  flex: {
    type: Boolean,
    default: true,
  },

  flat: {
    type: Boolean,
    default: false,
  },

  title: {
    type: String,
    default: '',
  },

  titleDanger: {
    type: Boolean,
    default: false,
  },

  subtitle: {
    type: String,
    default: '',
  },

  split: {
    type: Boolean,
    default: false,
  },

  fillHeight: {
    type: Boolean,
    default: false,
  },

  hideFooter: {
    type: Boolean,
    default: false,
  },

  scrollable: {
    type: Boolean,
    default: false,
  },
})

const { mdAndUp } = useDisplay()
</script>

<template>
  <VCard class="flex flex-col h-full rounded-lg w-100 mt-1">
    <div
      v-if="$slots.right || $slots.scrollable || title || subtitle"
      :class="[
        !split && 'flex-col',
        fillHeight && 'h-full',
        scrollable && 'overflow-auto',
      ]" class="flex pt-5 no-scrollbar"
    >
      <div v-if="title || subtitle" class="pb-2 px-5">
        <div :class="[split && 'flex-col', $slots['right-actions'] && mdAndUp && 'flex']" class=" w-100 gap-1 align-center ">
          <div>
            <div v-if="title" :class="titleDanger && 'text-error'" class="text-h6 font-bold mb-2" v-html="title" />
            <div v-if="subtitle" class="text-body-2" v-html="subtitle" />
          </div>

          <VSpacer />

          <div :class="!mdAndUp && 'mt-3'" class="flex gap-6">
            <slot name="right-actions" />
          </div>
        </div>
      </div>

      <div
        v-if="$slots.right"
        :class="[
          `align-${align}`,
          split && 'justify-end',
          flex && 'flex',
        ]" class="h-full w-100"
      >
        <slot name="right" />
      </div>

      <VDivider v-if="!split && titleDivider" class="mt-1" />

      <div class="px-3 flex flex-col overflow-auto h-100">
        <slot name="scrollable" />
      </div>
    </div>

    <slot name="title" />

    <VSheet v-if="!$slots.scrollable" :class="[scrollable && 'overflow-auto']" :height="height" class="mx-4 my-3 no-scrollbar">
      <slot />
    </VSheet>

    <!-- Progress Bar -->
    <VProgressLinear
      v-if="!$slots.progress && loading"
      :model-value="loading"
      bg-color="grey-lighten-3"
      color="link"
      height="1"
      indeterminate
    />

    <slot v-if="$slots.progress" name="progress" />

    <VSheet
      v-if="$slots.footer && !hideFooter"
      class="border-t ronded-0 items-end align-center justify-center inline-flex bg-surface-footer"
      min-height="60"
    >
      <FormActions class="flex w-100 gap-3 mx-4">
        <template v-if="kbd">
          <small class="flex align-center">
            Esc to reset
          </small>
        </template>
        <slot name="footer" />
      </FormActions>
    </VSheet>
  </VCard>
</template>
