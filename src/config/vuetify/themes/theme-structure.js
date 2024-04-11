// mainFile.js

import { colors } from './palette/theme-colors'
import { variables } from './palette/theme-variables'
import { getColorValues, getVariableValues } from './theme-factory'

/**
 * Creates a common theme structure based on the specified theme.
 *
 * @param {string} theme - The theme ('dark' or 'light' or more).
 * @returns {object} - An object representing the common theme structure.
 */
export function commonThemeStructure(theme) {
  return {
    dark: theme === 'dark',
    colors: getColorValues(theme, colors),
    variables: getVariableValues(theme, variables),
  }
}
