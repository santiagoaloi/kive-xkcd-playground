export function validateAndSave() {
  const loading = ref(false)

  async function submitForm(e, saveFunction, payload, sync) {
    loading.value = true

    try {
      const { valid } = await e

      if (!valid)
        snackbar('Please, correct the required fields.', 'error')

      await saveFunction({ ...payload })
      snackbar('Name has been updated.')

      sync()
    }
    catch (error) {
      snackbar(`An error occurred: ${error} `, 'error')
    }
    finally {
      loading.value = false
    }
  }

  return { submitForm, loading }
}
