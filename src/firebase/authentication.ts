import { useDocument } from 'vuefire'
import { collection } from 'firebase/firestore'

import type { User } from 'firebase/auth'
import { useAuthStore } from '@/stores/auth'
import { useUserProfileStore } from '@/stores/user-profile'

export async function setUserAndProfile(firebaseUser) {
  const authStore = useAuthStore()
  const profileStore = useUserProfileStore()

  // Destructure and access the user and profile stores
  const { user } = toRefs(authStore)
  const { profile } = toRefs(profileStore)

  try {
    user.value = firebaseUser

    if (firebaseUser)
      profile.value = useDocument(doc(collection(db, 'users'), firebaseUser.uid)) as unknown as User
  }

  catch (error) {
    // Handle any errors that may occur during the asynchronous operations
    throw new Error('Failed to set user and profile data.', error)
  }
}
