<script setup lang="ts">
import { useUserProfileStore } from '@/stores/user-profile'

const profileStore = useUserProfileStore()
</script>

<template>
  <div class="flex">
    <div class="py-5 border-b pl-3 bg-redx gap-y-2 flex flex-col bg-bluex w-100 text-black dark:text-[#ccc]">
      <div class="text-3xl ">
        {{ profileStore.profileFirstName }}'s Profile
      </div>
      Check out your saved comics and change your account settings
    </div>
  </div>

  <div class="h-full grid grid-cols-12 gap-6 py-5">
    <div class="lg:block hidden col-span-3">
      <div class="sticky top-24">
        <ProfileDrawer />
      </div>
    </div>

    <div class="col-span-12 lg:col-span-9">
      <RouterView />
    </div>
  </div>
</template>
