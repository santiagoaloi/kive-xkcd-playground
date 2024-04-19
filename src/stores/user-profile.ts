import { defineStore } from 'pinia'

import type { Comic } from '@/stores/comics'
import { useComicsStore } from '@/stores/comics'

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
  favorites?: Comic[]
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
      if (!profile || !profile.names?.firstName)
        return null

      return `${capitalize(profile.names.firstName)}`
    },

    profileFullName(): string | null {
      const { profile } = this
      if (!profile || !profile.names?.firstName || !profile.names?.lastName)
        return null

      return `${capitalize(profile.names.firstName)} ${capitalize(profile.names.lastName)}`
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

    async updateProfileNames(names: object) {
      return await handleUpdateProfileNames(this.profileId, names)
    },

    async saveFavoriteComic(comic: object) {
      const comicsStore = useComicsStore()
      return await handleSaveFavoriteComic(this.profileId, comic || comicsStore.getComic)
    },

  },
})
