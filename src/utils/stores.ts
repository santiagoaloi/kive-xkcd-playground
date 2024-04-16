import type { Ref } from 'vue'
import { ref } from 'vue'

interface SnackbarFunction {
  (message: string, type?: string): void
}

interface SaveFunction {
  (payload: any): Promise<void>
}

interface SyncFunction {
  (): void
}

interface ValidationResult {
  valid: boolean
}

export function validateAndSave(): { submitForm: (e: Promise<ValidationResult>, saveFunction: SaveFunction, payload: any, sync: SyncFunction) => Promise<void>, loading: Ref<boolean> } {
  const loading: Ref<boolean> = ref(false)

  async function submitForm(e: Promise<ValidationResult>, saveFunction: SaveFunction, payload: any, sync: SyncFunction): Promise<void> {
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
