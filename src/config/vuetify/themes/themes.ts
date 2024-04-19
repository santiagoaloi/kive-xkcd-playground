import themeDark from './variations/theme-dark.js'
import themeLight from './variations/theme-light.js'

/**
 * An object that combines the dark and light themes.
 */
export const themes: Record<string, any> = {
  ...themeDark,
  ...themeLight,
}
