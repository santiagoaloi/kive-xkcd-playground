<template>
  <VContainer class="flex align-center justify-center  h-100">
    <div class="align-center justify-center flex flex-col">
      <Duo404 size="190" />

      <div class="my-10">
        The page <b>{{ $route.path }} </b> does not exist.
      </div>

      <SettingsButton
        class="rounded-xl w-100 sm:w-auto"
        color="black-button"
        light
        to="/"
      >
        Keep exploring comics!
      </SettingsButton>
    </div>
  </VContainer>
</template>
