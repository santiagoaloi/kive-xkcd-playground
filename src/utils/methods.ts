/**
 * Capitalizes the first letter of the input string.
 *
 * @param str - The string to capitalize.
 * @returns The input string with the first letter capitalized, or undefined if the input string is falsy.
 */
export function capitalize(str: string): string | undefined {
  // If the input string is empty or falsy (e.g., null, undefined, empty string),
  // return 'undefined'.
  if (!str)
    return

  // Capitalize the first letter of the input string by combining:
  // 1. The first character of the input string converted to uppercase.
  // 2. The rest of the input string (excluding the first character).
  return str[0].toUpperCase() + str.slice(1)
}
