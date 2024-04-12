import { defineStore } from 'pinia'

interface appState {
  loginDialog: boolean
  comicDetailsDialog: boolean

}

export const useAppStore = defineStore('app-store', {
  state: (): appState => ({
    comicDetailsDialog: false,
    loginDialog: false,
  }),

})
