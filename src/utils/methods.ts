/**
 * Capitalizes the first letter of the input string.
 *
 * @param str - The string to capitalize.
 * @param lowerRest - Optional. Whether to convert the rest of the string to lowercase. Defaults to true.
 * @returns The input string with the first letter capitalized and the rest of the string optionally converted to lowercase,
 * or undefined if the input string is falsy.
 */
export function capitalize(str: string, lowerRest: boolean = true): string | undefined {
  if (!str)
    return

  return str[0].toUpperCase() + (lowerRest ? str.slice(1).toLowerCase() : str.slice(1))
}

/**
 * Converts a camelCase string to a sentence with the first letter of the first word capitalized
 * and the rest of the words separated by spaces.
 *
 * @param camelCase - The camelCase string to convert.
 * @returns The converted sentence.
 */
export function camelCaseToSentence(camelCase: string): string {
  let sentence: string = camelCase.replace(/([A-Z])/g, ' $1').toLowerCase()
  sentence = sentence.charAt(0).toUpperCase() + sentence.slice(1)
  return sentence
}
