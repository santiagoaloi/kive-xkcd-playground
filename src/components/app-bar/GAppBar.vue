<script setup>
const { smAndDown } = useDisplay()
</script>

<template>
  <VAppBar
    :height="100"
    class="px-3 " color="background"
  >
    <VCard
      :style="`width: ${1450}px`" class="mx-auto flex items-center p-7 mt-2 elevation-0 d"
      color="app-background" height="68"
    >
      <template v-if="!smAndDown">
        <KiveLogo class="ml-5" />

        <div class="text-lg">
          XKCD Comics
        </div>
        <VSpacer />
      </template>

      <ComicsActionButtons />
    </VCard>
  </VAppBar>
</template>
