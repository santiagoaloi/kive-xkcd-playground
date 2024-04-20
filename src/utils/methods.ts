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

/**
 * Converts a camelCase string to a sentence with the first letter of the first word capitalized
 * and the rest of the words separated by spaces.
 *
 * @param camelCase - The camelCase string to convert.
 * @returns The converted sentence.
 */
export function camelCaseToSentence(camelCase: string): string {
  // Add a space before all uppercase letters, then make the entire string lowercase
  let sentence: string = camelCase.replace(/([A-Z])/g, ' $1').toLowerCase()

  // Capitalize the first letter
  sentence = sentence.charAt(0).toUpperCase() + sentence.slice(1)

  return sentence
}
