import TheFooter from './components/TheFooter.vue';
<template>
  <VApp>
    <GAppBar />

    <VSheet
      class="mx-auto w-100 p-3 bg-transparent"
      max-width="1450"
    >
      <RouterView />
    </VSheet>
  </VApp>
</template>
