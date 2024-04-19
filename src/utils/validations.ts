/**
 * Creates a validation rule using Yup.
 *
 * @param errorMessage - The error message to display when validation fails.
 * @returns A function that takes a value and validates it against the rule. Returns true if validation passes, otherwise returns the error message.
 */
export function createValidationRule(errorMessage: string): (value: string) => string | boolean {
  return (value: string) => {
    try {
      const schema = Yup.string().required(errorMessage) // Start with string and required schema

      schema.validateSync(value)
      return true // Return true if validation passes
    }
    catch (error: any) {
      return error.message // Return the error message if validation fails
    }
  }
}
