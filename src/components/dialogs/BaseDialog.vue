<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: 'title',
  },

})

const dialog = defineModel()
</script>

<template>
  <VDialog v-model="dialog" max-width="500" transition="fade-transition">
    <VCard>
      <VCardText>
        <div class="text-h5 mb-4">
          <b> {{ title }}</b>
        </div>

        <slot />
      </VCardText>

      <VCardActions>
        <VSpacer />

        <VBtn
          color="pink"
          text="Close"
          @click="dialog = false"
        />
      </VCardActions>
    </VCard>
  </VDialog>
</template>
