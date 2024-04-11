<script setup lang="ts">
const { smAndDown } = useDisplay()
</script>

<template>
  <div class="flex sm:flex-row gap-4 mt-5 justify-center sm:justify-start mb-6">
    <SettingsButton
      class="rounded-xl w-100 sm:w-auto"
      color="black-button"
    >
      <div>
        <VIcon icon="i-mdi:page-first" />
      </div>
    </SettingsButton>

    <SettingsButton
      class="rounded-xl w-100 sm:w-auto"
      color="black-button"
      light
    >
      <div>
        <VIcon icon="i-mdi:chevron-left" />
        {{ smAndDown ? '' : 'Older' }}
      </div>
    </SettingsButton>

    <SettingsButton
      class="rounded-xl w-100 sm:w-auto"
      light
    >
      <div>
        {{ smAndDown ? '' : 'Random' }}

        <VIcon icon="i-mdi:shuffle-variant" />
      </div>
    </SettingsButton>

    <SettingsButton
      class="rounded-xl w-100 sm:w-auto"
      light
    >
      <div>
        {{ smAndDown ? '' : 'Newer' }}

        <VIcon icon="i-mdi:chevron-right" />
      </div>
    </SettingsButton>

    <SettingsButton
      class="rounded-xl w-100 sm:w-auto"
      color="black-button"
    >
      <div>
        <VIcon icon="i-mdi:page-last" />
      </div>
    </SettingsButton>
  </div>
</template>
