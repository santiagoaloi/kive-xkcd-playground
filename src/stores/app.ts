import { defineStore } from 'pinia'

interface appState {
  isDialogActive: boolean
}

export const useAppStore = defineStore('app-store', {
  state: (): appState => ({

    isDialogActive: false,
  }),

})
