<template>
  <VAppBar
    :height="100"
    class=" px-3 " color="background"
  >
    <VCard
      :style="`width: ${1450}px`" class="mx-auto flex items-center p-7 mt-2 elevation-0 dark:backdrop-blur"
      color="app-background" height="68"
    >
      <KiveLogo class="ml-5" />

      <div class="text-lg">
        XKCD Comics
      </div>
      <VSpacer />

      <GAppBarMenuRight />
    </VCard>
  </VAppBar>
</template>
