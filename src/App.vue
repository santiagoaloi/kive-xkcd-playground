import TheFooter from './components/TheFooter.vue';
<template>
  <VApp class="mx-3">
    <GAppBar />

    <VSheet
      class="mx-auto w-100 bg-transparent"
      max-width="1450"
    >
      <RouterView />
    </VSheet>
  </VApp>
</template>
