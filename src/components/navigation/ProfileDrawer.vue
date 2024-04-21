<script setup lang="ts">
const sidebarLinks = [{ title: 'Profile', route: '/profile/dashboard', icon: 'i-mdi:account-outline' }]

const sidebar = [
  {
    title: 'Favorite Comics',
    route: '/profile/favorites',
    icon: 'i-mdi:thought-bubble-outline',
  },

]
</script>

<template>
  <VList class=" mt-2 bg-transparent" density="compact">
    <!-- * [ Home ] -->
    <VListItem
      v-for="link in sidebarLinks" :key="link.route" :ripple="false" :title="link.title" :to="link.route" exact link
      rounded="lg"
    >
      <template #prepend="{ isActive }">
        <VIcon :color="isActive && 'link'" :icon="link.icon" end />
      </template>
    </VListItem>

    <div class="my-5" />

    <VListSubheader class="text-overline">
      Comics
    </VListSubheader>

    <!-- * [ Engagement ] -->
    <VListItem
      v-for="link in sidebar"
      :key="link.route" :ripple="false" :title="link.title"
      :to="link.route" rounded="lg"
    >
      <template #prepend="{ isActive }">
        <VIcon :color="isActive && 'link'" :icon="link.icon" end />
      </template>
    </VListItem>
  </VList>
</template>
