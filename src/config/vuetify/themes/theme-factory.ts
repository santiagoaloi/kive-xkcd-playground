/**
 * Gets theme-specific values from a given object.
 *
 * @param theme - The theme ('dark' or 'light' or more).
 * @param obj - The object containing theme-specific values.
 * @returns An object containing values for the specified theme.
 */
function getThemeValues(theme: string, obj: Record<string, any>): Record<string, any> {
  return Object.fromEntries(Object.entries(obj).map(([key, values]) => [key, values[theme]]))
}

/**
 * Gets color values for a specific theme.
 *
 * @param theme - The theme ('dark' or 'light' or more).
 * @param colors - The colors object containing theme-specific color values.
 * @returns An object containing color values for the specified theme.
 */
export const getColorValues = (theme: string, colors: Record<string, any>): Record<string, any> => getThemeValues(theme, colors)

/**
 * Gets variable values for a specific theme.
 *
 * @param theme - The theme ('dark' or 'light' or more).
 * @param variables - The variables object containing theme-specific variable values.
 * @returns An object containing variable values for the specified theme.
 */
export const getVariableValues = (theme: string, variables: Record<string, any>): Record<string, any> => getThemeValues(theme, variables)
