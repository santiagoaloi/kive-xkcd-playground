<template>
  <VContainer class="flex align-center justify-center  h-100">
    <div class="align-center justify-center flex flex-col">
      <div>
        <DuoNoresults size="190" />
      </div>

      <div class="my-10">
        Ths comic is not found
      </div>

      <SettingsButton
        class="rounded-xl w-100 sm:w-auto"
        color="black-button"
        light
        to="/"
      >
        <div>
          Keep exploring comics!
        </div>
      </SettingsButton>
    </div>
  </VContainer>
</template>
