import { defineStore } from 'pinia'

export const useComicsStore = defineStore('comics-store', {

  state: () => ({
    comics: {
      current: {},
      gallery: [],
    },

    currentComic: null,
  }),

  getters: {

    getComic: state => state.comics.current,

  },

  actions: {
    async switchComic(id: number) {
      const url = import.meta.env.DEV
        ? `/api/${id}/info.0.json`
        : `/api/xkcd?id=${id}`

      const { data: comicData } = await axios(url)
      this.comics.current = comicData
      this.currentComic = comicData.num
    },
  },
})
