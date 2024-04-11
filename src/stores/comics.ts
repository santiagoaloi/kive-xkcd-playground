import { defineStore } from 'pinia'

interface Comic {
  month: string
  num: number
  link: string
  year: string
  news: string
  safe_title: string
  transcript: string
  alt: string
  img: string
  title: string
  day: string
}

interface ComicsState {
  comics: {
    current: Comic
    gallery: Comic[]
  }
  currentComic: number | null
  mostRecentComicId: number | null
  loading: boolean
}

export const useComicsStore = defineStore('comics-store', {
  state: (): ComicsState => ({
    comics: {
      current: {} as Comic,
      gallery: [],
    },
    currentComic: null,
    mostRecentComicId: null,
    loading: false,
  }),

  getters: {
    getComic: state => state.comics.current,
    isOldestComic: state => state.currentComic === 1,
    isNewestComic: state => state.currentComic === state.mostRecentComicId,
  },

  actions: {

    /*
 * Get me the most recent comic id.
 * we can use it to fallback to this comic if the user
 * routes to a comic that doesn't exist and also to prevent the user
 * from going to a comic that doesn't exist.
 */

    async getNewestComicId() {
      /*
  * Dev: Vite proxy
  * Prod: Vercel serverless proxy.
  */
      const url = import.meta.env.DEV
        ? `/api/info.0.json`
        : `/api/xkcd?id`

      try {
        const { data: comicData } = await axios(url)
        this.mostRecentComicId = comicData.num
      }
      catch (error) {
        console.error('Error fetching comic:', error)
      }
      finally {
        this.loading = false
      }
    },

    /*
 * Handle all the logic for fetching the comics with the action buttons.
 */
    async switchComic(id: number) {
      /*
 * If the user tries to go to a comic in the url and the comic doesn't exist
 * we can redirect the user to the most recent comic.
 */

      if (id > this.mostRecentComicId!)
        id = this.mostRecentComicId! || 0

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

    getRandomComicId(this: ComicsState, min = 1, max = this.mostRecentComicId) {
      if (max === null)
        return min

      return Math.floor(Math.random() * (max - min + 1)) + min
    },
  },
})
