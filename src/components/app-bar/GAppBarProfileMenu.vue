<script setup>
import { capitalize } from '@U/methods'

const authStore = useAuthStore()
const profileStore = useUserProfileStore()

const { profileFullName, profileEmail, profileAvatar, profile, profileFirstNameInitial } = toRefs(profileStore)

const router = useRouter()

async function signOutCurrentUser() {
  try {
    await authStore.signOutCurrentUser()
  }
  catch (error) {
    console.error(error)
    // snackbar(`An error occurred: ${error} `, 'error')
  }
  finally {
    /**
     * Delays the execution of routing,
     * helps for a cleanr transition back to the login page.
     */

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
      <RoundedSquareAvatar v-bind="props" :initial="profileFirstNameInitial || ''" :loading="!profile" :src="profileAvatar" account link size="45" />
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

        <VBtn block color="primary" to="/profile" variant="text">
          Dashboard
        </VBtn>

        <VDivider class="my-3" />

        <VBtn block color="primary" variant="text" @click.stop="signOutCurrentUser()">
          Sign out
        </VBtn>
      </div>
    </VCard>
  </VMenu>
</template>
