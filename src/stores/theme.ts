import { defineStore } from 'pinia'
import type { Ref } from 'vue'
import { computed, ref } from 'vue'

/**
 * Theme store for managing color mode.
 */
export const useThemeStore = defineStore(
  'global-theme',
  (): {
    currentTheme: Ref<string>
    mode: Ref<string>
    isDark: Ref<boolean>
    themeToggle: () => void
  } => {
    /**
     * Current color mode.
     */
    const mode: Ref<string> = useColorMode({
      initialValue: 'light',
      emitAuto: false,
    })

    /**
     * Current theme, computed from mode.
     */
    const currentTheme = computed(() => mode.value)

    /**
     * Whether the current mode is 'dark'.
     */
    const isDark = computed(() => mode.value === 'dark')

    /**
     * HTML tag for toggling 'dark' class.
     */
    const htmlTag = document.querySelector('html')

    /**
     * Watch for changes in isDark and toggle 'dark' class on htmlTag.
     */
    watchImmediate(isDark, (newValue) => {
      if (htmlTag)
        htmlTag.classList.toggle('dark', newValue)
    })

    /**
     * Function to toggle theme between 'dark' and 'light'.
     */
    const themeToggle = () => {
      mode.value = mode.value === 'dark' ? 'light' : 'dark'
    }

    return { currentTheme, mode, isDark, themeToggle }
  },

)
