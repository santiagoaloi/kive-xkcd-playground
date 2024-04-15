export function createValidationRule(errorMessage) { // validations = []
  return (value) => {
    try {
      const schema = Yup.string().required(errorMessage) // Start with string and required schema

      schema.validateSync(value)
      return true // Return true if validation passes
    }
    catch (error) {
      return error.message // Return the error message if validation fails
    }
  }
}
