import { defineStore } from 'pinia'

import type { Comic } from '@/stores/comics'
import { useComicsStore } from '@/stores/comics'

/**
 * Interface for the user profile.
 * @property {object} flags - Contains user flags.
 * @property {string} uid - The user ID.
 * @property {object} names - Contains user's first and last names.
 * @property {string} email - The user's email.
 * @property {string} photoURL - The URL of the user's photo.
 * @property {Comic[]} favorites - The user's favorite comics.
 */

export interface UserProfile {
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

/**
 * Defines a store for the user profile.
 * @returns {Store} The user profile store.
 */
export const useUserProfileStore = defineStore('user-profile', {
  /**
   * Defines the initial state of the user profile.
   * @returns {object} The initial user profile state.
   */
  state: (): { profile: UserProfile | null } => ({
    profile: null,
  }),

  getters: {
    /**
     * Checks if the user is new.
     * @returns {boolean | undefined} True if the user is new, false otherwise.
     */
    isNewUser(): boolean | undefined {
      return this.profile?.flags?.isNewUser
    },

    /**
     * Gets the user's ID.
     * @returns {string | undefined} The user's ID.
     */
    profileId(): string | undefined {
      return this.profile?.uid
    },

    /**
     * Gets the first initial of the user's first name.
     * @returns {string | null} The first initial of the user's first name.
     */
    profileFirstNameInitial(): string | null {
      const { profile } = this
      if (!profile || !profile.names?.firstName)
        return null

      return `${capitalize(profile.names.firstName[0])}`
    },

    /**
     * Gets the user's first name.
     * @returns {string | null} The user's first name.
     */
    profileFirstName(): string | null {
      const { profile } = this
      if (!profile || !profile.names?.firstName)
        return null

      return `${capitalize(profile.names.firstName)}`
    },

    /**
     * Gets the user's full name.
     * @returns {string | null} The user's full name.
     */
    profileFullName(): string | null {
      const { profile } = this
      if (!profile || !profile.names?.firstName || !profile.names?.lastName)
        return null

      return `${capitalize(profile.names.firstName)} ${capitalize(profile.names.lastName)}`
    },

    /**
     * Gets the user's email.
     * @returns {string | null} The user's email.
     */
    profileEmail(): string | null {
      const { profile } = this
      if (!profile)
        return null
      return `${profile?.email}`
    },

    /**
     * Gets the URL of the user's photo.
     * @returns {string | undefined} The URL of the user's photo.
     */
    profileAvatar(): string | undefined {
      const { profile } = this
      return profile?.photoURL
    },
  },

  actions: {
    async updateProfileNames(names: Record<string, string>) {
      if (!this.profileId)
        throw new Error('Profile ID is undefined')

      return await handleUpdateProfileNames(this.profileId, names)
    },

    async saveFavoriteComic(comic?: Comic) {
      if (!this.profileId)
        throw new Error('Profile ID is undefined')

      const comicsStore = useComicsStore()
      return await handleSaveFavoriteComic(this.profileId, comic || comicsStore.getComic)
    },

    async removeAllFavorites() {
      return await handleRemoveAllFavorites(this.profileId)
    },
  },
})
