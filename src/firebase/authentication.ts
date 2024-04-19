import { useDocument } from 'vuefire'
import { collection, doc } from 'firebase/firestore'

import type { User } from 'firebase/auth'
import { useAuthStore } from '@/stores/auth'
import { useUserProfileStore } from '@/stores/user-profile'

/**
 * Sets the user and profile data in the auth and user profile stores.
 * @param {User | null} firebaseUser - The Firebase user to set in the auth store, or null to clear the user.
 * @throws {Error} When an error occurs during the asynchronous operations.
 */
export async function setUserAndProfile(firebaseUser: User | null): Promise<void> {
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
