import type { ComputedRef } from 'vue'

/**
 * An interface for the return value of the useFormFields function.
 */
interface UseFormFieldsReturn {
  formFields: FormFields
  formRef: FormRef
  reset: () => void
  changed: ComputedRef<boolean>
  sync: () => void
}

/**
 * A generic store interface.
 */
interface Store {
  [key: string]: any
}

/**
 * An interface for form fields.
 */
interface FormFields {
  names: Store
}

/**
 * An interface for a reset reference.
 */
interface ResetRef {
  reset: () => void
  hasNewValues: ComputedRef<boolean>
  syncInitialValues: () => void
}

/**
 * An interface for a form reference.
 */
interface FormRef {
  value: {
    resetValidation: () => void
  } | undefined
}

/**
 * A function that sets up form fields.
 * @param store - The store to use for the form fields.
 * @param propertyPath - The path to the property in the store to use for the form fields.
 * @returns An object with the form fields, a form reference, a reset function, a computed reference indicating whether the form has changed, and a sync function.
 */
export function useFormFields(store: Store, propertyPath: string): UseFormFieldsReturn {
  const propertyPathParts = propertyPath.split('.')

  const data = propertyPathParts.reduce((obj: any, part: string) => obj && obj[part], store)

  const formFields = reactive({
    names: { ...data },
  })

  const { reset: resetForm, hasNewValues: changed, syncInitialValues: sync } = useResetRef(formFields) as ResetRef

  const formRef = ref<{ resetValidation: () => void }>()

  function reset() {
    if (formRef.value)
      formRef.value.resetValidation()

    // Reset form to initial values.
    resetForm()
  }

  return { formFields, formRef, reset, changed, sync }
}
