import { ref } from 'vue'
import type { Ref } from 'vue'

/**
 * A function that can be used to save data.
 *
 * @param payload - The data to be saved.
 * @returns A promise that resolves when the save operation is complete.
 */
interface SaveFunction {
  (payload: any): Promise<void>
}

/**
 * A function that can be used to synchronize data.
 */
interface SyncFunction {
  (): void
}

/**
 * The result of a validation operation.
 *
 * @property valid - Whether the validation passed.
 */
interface ValidationResult {
  valid: boolean
}

/**
 * Validates and saves data.
 *
 * @returns An object containing a submitForm function and a loading ref. The submitForm function takes a validation result promise, a save function, a payload, and a sync function, and returns a promise that resolves when the submit operation is complete. The loading ref indicates whether a submit operation is in progress.
 */
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
