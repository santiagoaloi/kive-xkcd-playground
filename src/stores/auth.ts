import { defineStore } from 'pinia'
import type { User } from 'firebase/auth'
import type { DocumentReference, DocumentSnapshot } from 'firebase/firestore'

interface AuthState {
  user: User | null
}

interface UserFields {
  flags: {
    isVerified: boolean
    isDisabled: boolean
    isBanned: boolean
    isNewUser: boolean
  }
}

interface UserDocData extends UserFields {
  uid: string
  email: string
  names: {
    firstName: string
    lastName: string
  }
  photoURL: string
}

export const useAuthStore = defineStore('auth-store', {
  state: (): AuthState => ({
    user: null,
  }),

  getters: {
    userId: (state: AuthState) => state.user?.uid || null,
    isLoggedIn: (state: AuthState) => !!state.user,
  },

  actions: {
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

    handleGoogleAuthenticationError(error: any): void {
      console.log(error)
    },

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

    async createUserProfile(user: User): Promise<boolean> {
      const profile = await this.addUserToUsersCollectionGoogle(user)
      return profile.created
    },

    async checkIfUserExists(uid: string): Promise<boolean> {
      const docRef: DocumentReference = doc(db, 'users', uid)
      const docSnap: DocumentSnapshot = await getDoc(docRef)
      return docSnap.exists()
    },

    async authenticateWithGoogle(): Promise<void> {
      try {
        const userCredential = await this.signInWithGooglePopup()
        const user: User = userCredential.user
        const userExists = await this.checkIfUserExists(user.uid)

        if (!userExists) {
          if (!userExists) {
            const profileCreated = await this.createUserProfile(user)

            if (!profileCreated)
              return
          }
        }

        if (userCredential)

          this.router.push('/profile')
      }
      catch (error: any) {
        this.handleGoogleAuthenticationError(error)
      }
    },
    // ...

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
