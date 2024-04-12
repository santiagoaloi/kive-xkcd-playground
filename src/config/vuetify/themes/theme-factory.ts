/**
 * Gets theme-specific values from a given object.
 *
 * @param {string} theme - The theme ('dark' or 'light' or more).
 * @param {object} obj - The object containing theme-specific values.
 * @returns {object} - An object containing values for the specified theme.
 */
function getThemeValues(theme, obj) {
  return Object.fromEntries(Object.entries(obj).map(([key, values]) => [key, values[theme]]))
}

/**
 * Gets color values for a specific theme.
 *
 * @param {string} theme - The theme ('dark' or 'light' or more).
 * @param {object} colors - The colors object containing theme-specific color values.
 * @returns {object} - An object containing color values for the specified theme.
 */
export const getColorValues = (theme, colors) => getThemeValues(theme, colors)

/**
 * Gets variable values for a specific theme.
 *
 * @param {string} theme - The theme ('dark' or 'light' or more).
 * @param {object} variables - The variables object containing theme-specific variable values.
 * @returns {object} - An object containing variable values for the specified theme.
 */
export const getVariableValues = (theme, variables) => getThemeValues(theme, variables)
