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
  newestComicId: number | null
  loading: boolean
}

export const useComicsStore = defineStore('comics-store', {
  state: (): ComicsState => ({
    comics: {
      current: {} as Comic,
      gallery: [],
    },
    currentComic: null,
    newestComicId: null,
    loading: false,
  }),

  getters: {
    getComic: state => state.comics.current,
    isOldestComic: state => state.currentComic === 1,
    isNewestComic: state => state.currentComic === state.newestComicId,
  },

  actions: {

    /*
 * Get me the most recent comic id.
 * we can use it to fallback to this comic if the user
 * routes to a comic that doesn't exist and also to prevent the user
 * from going to a comic that doesn't exist.
 */

    async getNewestComicId() {
      const url = this.constructUrl()

      try {
        const { data: comicData } = await axios(url)
        this.newestComicId = comicData.num
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
      // Avoid calling the API if the user is already on the comic.
      if (id === this.currentComic)
        return

      const router = useRouter()

      const url = this.constructUrl(id)

      this.loading = true

      try {
        const { data: comicData } = await axios(url)
        this.comics.current = comicData
        this.currentComic = comicData.num
      }
      catch (error) {
        router.replace('/NotFound')
        console.error('Error fetching comic:', error)
      }
      finally {
        this.loading = false
      }
    },

    getRandomComicId(this: ComicsState, min = 1, max = this.newestComicId) {
      if (max === null)
        return min

      return Math.floor(Math.random() * (max - min + 1)) + min
    },

    constructUrl(id: number | string = '') {
      /*
  * Dev: Vite proxy
  * Prod: Vercel serverless proxy.
  */

      const isDev = import.meta.env.DEV
      return isDev
        ? `/api/${id}/info.0.json`
        : `/api/xkcd?id=${id}`
    },
  },
})
