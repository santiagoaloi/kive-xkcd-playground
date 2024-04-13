<script setup lang="ts">
const sidebarLinks = [{ title: 'Dashboard', route: '/profile/dashboard', icon: 'i-mdi:home-outline' }]

const sidebarEngagements = [
  { title: 'Messages', route: '', icon: 'i-mdi:email-outline', disabled: true },
  {
    title: 'Applicants',
    route: '',
    icon: 'i-mdi:bullseye-arrow',
    disabled: true,
  },
  {
    title: 'Job Posts',
    route: '',
    icon: 'i-mdi:bookmark-outline',
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
      Engagement
    </VListSubheader>

    <!-- * [ Engagement ] -->
    <VListItem
      v-for="link in sidebarEngagements"
      :key="link.id" :disabled="link.disabled" :ripple="false" :title="link.title"
      :to="link.route" rounded="lg"
    >
      <template #prepend="{ isActive }">
        <VIcon :color="isActive && 'primary'" :icon="link.icon" end />
      </template>
    </VListItem>
  </VList>
</template>
