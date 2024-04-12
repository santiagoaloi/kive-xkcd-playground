/**
 * Sets the user and profile data based on the provided Firebase user.
 *
 * @param {object} firebaseUser - The Firebase user object.
 * @returns {Promise} A Promise that resolves with an object containing profile information.
 */

import { useAuthStore } from '@/stores/auth'
import { useUserProfileStore } from '@/stores/user-profile'

export async function setUserAndProfile(firebaseUser) {
  const authStore = useAuthStore()
  const profileStore = useUserProfileStore()

  // Destructure and access the user and profile stores
  const { user } = toRefs(authStore)
  const { profile } = toRefs(profileStore)

  try {
    // Set the user value in the store
    user.value = firebaseUser
    profile.value = null

    if (firebaseUser) {
      // Get a reference to the user's profile document in Firestore
      const userProfileRef = doc(db, 'users', firebaseUser.uid)

      // Listen to realtime changes in the user profile.
      onSnapshot(userProfileRef, (snap) => {
        profile.value = snap.data()
      })
    }
  }
  catch (error) {
    // Handle any errors that may occur during the asynchronous operations
    throw new Error('Failed to set user and profile data.', error)
  }
}
