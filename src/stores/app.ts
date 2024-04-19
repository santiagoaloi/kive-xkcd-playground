import { defineStore } from 'pinia'

/**
 * Interface for the application state.
 * @property {boolean} loginDialog - Represents the state of the login dialog.
 * @property {boolean} comicDetailsDialog - Represents the state of the comic details dialog.
 */
interface AppState {
  loginDialog: boolean
  comicDetailsDialog: boolean
}

/**
 * Defines a store for the application state.
 * @returns {Store} The application state store.
 */
export const useAppStore = defineStore('app-store', {
  /**
   * Defines the initial state of the application.
   * @returns {AppState} The initial application state.
   */
  state: (): AppState => ({
    comicDetailsDialog: false,
    loginDialog: false,
  }),
})
