<script setup lang="ts">
defineProps({
  size: {
    type: String,
    default: 'default',
  },

  color: {
    type: String,
    default: 'black-button',
  },

  block: {
    type: Boolean,
    default: false,
  },

  border: {
    type: Boolean,
    default: true,
  },

  disabled: {
    type: Boolean,
    default: false,
  },

  title: {
    type: String,
    default: '',
  },

  loading: {
    type: Boolean,
    default: false,
  },

  light: {
    type: Boolean,
    default: false,
  },

})
</script>

<template>
  <div :class="{ 'cursor-not-allowed pointer-events-none': disabled || loading }">
    <VBtn
      v-bind="{ ...$attrs }"
      :active="false"
      :border="border"
      :color="light ? 'light-button' : contrast ? 'white' : color"
      :loading="loading"
      :size="size"
      :type="!disabled && submit ? 'submit' : 'button'"
      block
      class="rounded-xl w-100 sm:w-auto"
      elevation="0"
      @click.stop
    >
      <VIcon v-if="removeIcon" start>
        $mdiTrashCanOutline
      </VIcon>

      <VIcon v-if="refreshIcon" start>
        $mdiRefresh
      </VIcon>

      <VIcon v-if="copyIcon" start>
        $mdiContentCopy
      </VIcon>

      {{ title }}
      <slot />
    </VBtn>
  </div>
</template>
