import { defineStore } from 'pinia'

interface UserProfile {
  flags?: {
    isNewUser?: boolean
  }
  uid?: string
  names?: {
    firstName?: string
    lastName?: string
  }
  email?: string
  photoURL?: string
}

export const useUserProfileStore = defineStore('user-profile', {
  state: (): { profile: UserProfile | null } => ({
    profile: null,
  }),

  getters: {
    isNewUser(): boolean | undefined {
      return this.profile?.flags?.isNewUser
    },

    profileId(): string | undefined {
      return this.profile?.uid
    },

    profileFirstNameInitial(): string | null {
      const { profile } = this
      if (!profile || !profile.names?.firstName)
        return null

      return `${capitalize(profile.names.firstName[0])}`
    },

    profileFirstName(): string | null {
      const { profile } = this
      if (!profile)
        return null

      return `${capitalize(profile?.names?.firstName)}`
    },

    profileFullName(): string | null {
      const { profile } = this
      if (!profile)
        return null

      return `${capitalize(profile?.names?.firstName)} ${capitalize(profile?.names?.lastName)}`
    },

    profileEmail(): string | null {
      const { profile } = this
      if (!profile)
        return null
      return `${profile?.email}`
    },

    profileAvatar(): string | undefined {
      const { profile } = this
      return profile?.photoURL
    },
  },

  actions: {

    async updateProfileNames(names) {
      return await handleUpdateProfileNames(this.profileId, names)
    },
  },
})
