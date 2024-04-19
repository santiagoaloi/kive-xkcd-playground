import { defineStore } from 'pinia'
import type { User } from 'firebase/auth'
import type { DocumentReference, DocumentSnapshot } from 'firebase/firestore'

/**
 * Interface for the authentication state.
 */
interface AuthState {
  user: User | null
}

/**
 * Interface for the user fields.
 */
interface UserFields {
  flags: {
    isVerified: boolean
    isDisabled: boolean
    isBanned: boolean
    isNewUser: boolean
  }
}

/**
 * Interface for the user document data.
 */
interface UserDocData extends UserFields {
  uid: string
  email: string
  names: {
    firstName: string
    lastName: string
  }
  photoURL: string
  favorites: string[]
}

/**
 * Define the authentication store.
 */
export const useAuthStore = defineStore('auth-store', {
  state: (): AuthState => ({
    user: null,
  }),

  getters: {
    userId: (state: AuthState) => state.user?.uid || null,
    isLoggedIn: (state: AuthState) => !!state.user,
  },

  actions: {
    /**
     * Sign out the current user.
     */
    async signOutCurrentUser(): Promise<void> {
      const authStore = useAuthStore()
      try {
        await signOut(auth)
        authStore.$reset()
      }
      catch (error: any) {
        console.log(error)
      }
    },

    /**
     * Handle Google authentication error.
     */
    handleGoogleAuthenticationError(error: any): void {
      console.log(error)
    },

    /**
     * Get user fields.
     */
    fields(): UserFields {
      return {
        flags: {
          isVerified: false,
          isDisabled: false,
          isBanned: false,
          isNewUser: true,
        },
      }
    },

    /**
     * Add user to users collection in Google.
     */
    async addUserToUsersCollectionGoogle(user: User): Promise<{ created: boolean }> {
      const userDocRef: DocumentReference = doc(db, 'users', user.uid)
      const { uid, email, displayName, photoURL } = user

      const names = displayName !== null ? displayName.split(/(\s+)/) : []

      if (!displayName)
        throw new Error('displayName is null')

      const firstName = names[0] || ''
      const lastName = names.slice(1).join(' ').trim()

      const userDocData: UserDocData = {
        ...this.fields(),
        uid,
        email: email || '',
        names: { firstName, lastName },
        photoURL: photoURL || '',
        favorites: [],
      }

      userDocData.flags.isVerified = true

      try {
        await setDoc(userDocRef, userDocData)
        return {
          created: true,
        }
      }
      catch (error: any) {
        console.error(error)
        return {
          created: false,
        }
      }
    },

    /**
     * Create user profile.
     */
    async createUserProfile(user: User): Promise<boolean> {
      const profile = await this.addUserToUsersCollectionGoogle(user)
      return profile.created
    },

    /**
     * Check if user exists.
     */
    async checkIfUserExists(uid: string): Promise<boolean> {
      const docRef: DocumentReference = doc(db, 'users', uid)
      const docSnap: DocumentSnapshot = await getDoc(docRef)
      return docSnap.exists()
    },

    /**
     * Authenticate with Google.
     */
    async authenticateWithGoogle(): Promise<void> {
      try {
        const userCredential = await this.signInWithGooglePopup()
        const user: User = userCredential.user

        const userExists = await this.checkIfUserExists(user.uid)

        if (!userExists) {
          if (!userExists)
            await this.createUserProfile(user)
        }
      }
      catch (error: any) {
        this.handleGoogleAuthenticationError(error)
      }
    },

    /**
     * Sign in with Google popup.
     */
    async  signInWithGooglePopup() {
      const provider = new GoogleAuthProvider()
      provider.setCustomParameters({
        prompt: 'select_account',
        display: 'popup',
      })
      return await signInWithPopup(auth, provider)
    },
  },
})
