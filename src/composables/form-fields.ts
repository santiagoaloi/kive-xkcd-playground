interface Store {
  [key: string]: any
}

interface FormFields {
  names: Store
}

interface ResetRef {
  reset: () => void
  hasNewValues: boolean
  syncInitialValues: () => void
}

interface FormRef {
  value: {
    resetValidation: () => void
  }
}

interface UseFormFieldsReturn {
  formFields: FormFields
  formRef: FormRef
  reset: () => void
  changed: boolean
  sync: () => void
}

export function useFormFields(store: Store, propertyPath: string): UseFormFieldsReturn {
  const propertyPathParts = propertyPath.split('.')

  const data = propertyPathParts.reduce((obj: any, part: string) => obj && obj[part], store)

  const formFields = reactive({
    names: { ...data },
  })

  const { reset: resetForm, hasNewValues: changed, syncInitialValues: sync } = useResetRef(formFields) as ResetRef

  const formRef = ref<{ resetValidation: () => void }>()

  function reset() {
    formRef.value.resetValidation()

    // Reset form to initial values.
    resetForm()
  }

  return { formFields, formRef, reset, changed, sync }
}
