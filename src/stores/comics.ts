import { defineStore } from 'pinia'

export const useComicsStore = defineStore('comics-store', {
  state: () => ({
    comics: {
      current: {},
      gallery: [],
    },
    currentComic: null,
    loading: false,
  }),

  getters: {
    getComic: state => state.comics.current,
  },

  actions: {
    async switchComic(id: number) {
      const url = import.meta.env.DEV
        ? `/api/${id}/info.0.json`
        : `/api/xkcd?id=${id}`

      this.loading = true

      try {
        const { data: comicData } = await axios(url)
        this.comics.current = comicData
        this.currentComic = comicData.num
      }
      catch (error) {
        console.error('Error fetching comic:', error)
      }
      finally {
        this.loading = false
      }
    },
  },
})
