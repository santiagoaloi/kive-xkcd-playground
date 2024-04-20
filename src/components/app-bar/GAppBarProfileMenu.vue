<script setup>
const authStore = useAuthStore()
const profileStore = useUserProfileStore()

const { profileFullName, profileEmail, profileAvatar, profile, profileFirstNameInitial } = toRefs(profileStore)

const router = useRouter()
const route = useRoute()

async function signOutCurrentUser() {
  try {
    await authStore.signOutCurrentUser()
  }
  catch (error) {
    console.error(error)
    // snackbar(`An error occurred: ${error} `, 'error')
  }
  finally {
    // Avoid redirecting to the same page and removing the query parameters.
    if (route.path !== '/')
      router.replace('/')
  }
}

const { lgAndUp } = useDisplay()
</script>

<template>
  <VMenu
    v-if="lgAndUp"
    close-on-content-click offset="24 183"
  >
    <template #activator="{ props }">
      <RoundedSquareAvatar v-bind="props" :initial="profileFirstNameInitial || ''" :loading="!profile" :src="profileAvatar" account link />
    </template>

    <VCard v-if="profile" :link="false" :ripple="false" class="p-5" min-width="250" @click.self.stop>
      <div class="mx-auto">
        <div @click.stop>
          <div class="text-lg">
            <b>{{ profileFullName }}</b>
          </div>
          <div>{{ profileEmail }}</div>
        </div>

        <VDivider class="my-3" />

        <VBtn
          v-for="button in [{ name: 'Profile', to: '/profile' }, { name: 'Favorites', to: '/profile/favorites' }]"
          :key="button.to"
          :to="button.to"
          block
          class="mb-2"
          color="primary"
          variant="text"
        >
          {{ button.name }}
        </VBtn>

        <VDivider class="my-3" />

        <VBtn block color="primary" variant="text" @click.stop="signOutCurrentUser()">
          Sign out
        </VBtn>
      </div>
    </VCard>
  </VMenu>
</template>
