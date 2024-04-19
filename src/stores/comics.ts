import { defineStore } from 'pinia'
import { useUserProfileStore } from '@/stores/user-profile'

/**
 * Represents a comic.
 */
export interface Comic {
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

/**
 * Represents the state of the comics store.
 */
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
    /**
     * Checks if the current comic is favorited.
     */
    isFavorited(): boolean {
      const profileStore = useUserProfileStore()
      return profileStore.profile?.favorites?.some(favorite => favorite.num === this.currentComic) ?? false
    },
    /**
     * Gets the current comic.
     */
    getComic: state => state.comics.current,

    /**
     * Checks if the current comic is the oldest comic.
     */
    isOldestComic: state => state.currentComic === 1,

    /**
     * Checks if the current comic is the newest comic.
     */
    isNewestComic: state => state.currentComic === state.newestComicId,
  },

  actions: {
    /**
     * Looks up a favorited comic, sets the correct id in the url, and routes to the homepage.
     */
    lookupFavoritedComic(comic: Comic) {
      this.currentComic = comic.num
      this.comics.current = comic
      this.router.push('/')
    },

    /**
     * Gets the id of the most recent comic.
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

    /**
     * Handles all the logic for fetching the comics with the action buttons.
     */
    async switchComic(id: number) {
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

    /**
     * Gets a random comic id.
     */
    getRandomComicId(this: ComicsState, min = 1, max = this.newestComicId) {
      if (max === null)
        return min

      return Math.floor(Math.random() * (max - min + 1)) + min
    },

    /**
     * Constructs a URL for fetching a comic.
     */
    constructUrl(id: number | string = '') {
      const isDev = import.meta.env.DEV
      return isDev
        ? `/api/${id}/info.0.json`
        : `/api/xkcd?id=${id}`
    },
  },
})
