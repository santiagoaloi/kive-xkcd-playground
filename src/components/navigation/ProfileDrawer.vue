<script setup lang="ts">
const sidebarLinks = [{ title: 'Profile', route: '/profile/dashboard', icon: 'i-mdi:account-outline' }]

const sidebar = [
  {
    title: 'Saved Comics',
    route: '',
    icon: 'i-mdi:thought-bubble-outline',
    disabled: true,
  },

]
</script>

<template>
  <VList class="pa-y mt-2 px-0x bg-transparent" density="compact">
    <!-- * [ Home ] -->
    <VListItem
      v-for="link in sidebarLinks" :key="link.id" :ripple="false" :title="link.title" :to="link.route" exact link
      rounded="lg"
    >
      <template #prepend="{ isActive }">
        <VIcon :color="isActive && 'primary'" :icon="link.icon" end />
      </template>
    </VListItem>

    <div class="my-5" />

    <VListSubheader class="text-overline">
      Comics
    </VListSubheader>

    <!-- * [ Engagement ] -->
    <VListItem
      v-for="link in sidebar"
      :key="link.id" :disabled="link.disabled" :ripple="false" :title="link.title"
      :to="link.route" rounded="lg"
    >
      <template #prepend="{ isActive }">
        <VIcon :color="isActive && 'primary'" :icon="link.icon" end />
      </template>
    </VListItem>
  </VList>
</template>
