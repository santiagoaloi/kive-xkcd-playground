<template>
  <VAppBar
    :height="100"
    class="px-3 " color="background"
  >
    <VCard
      :style="`width: ${1450}px`" class="mx-auto flex items-center p-4 justify-center"
      color="app-background" height="68"
    >
      <template v-if="!smAndDown">
        <KiveLogo class="ml-5 " />

        <div class="text-lg">
          XKCD Comics
        </div>
        <VSpacer />
      </template>

      <SettingsButton>
        <div>
          <VIcon icon="i-mdi:image" start />
        </div>
        Comics Gallery
      </SettingsButton>
    </VCard>
  </VAppBar>
</template>
