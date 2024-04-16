import type { Ref, UnwrapRef } from 'vue'

export function useResetRef<T>(reference: Ref<T> | UnwrapRef<T>, options?: any) {
  if (!isRef(reference) && !isReactive(reference))
    throw new Error('A Ref or a Reactive variable should be passed as an argument to resetRef')

  let initialRefValue: Ref<any> | UnwrapRef<any>

  if (isRef(reference))
    initialRefValue = cloneDeep(reference.value)

  if (isReactive(reference))
    initialRefValue = cloneDeep(reference)

  const hasNewValues = computed(() => {
    const currentRefValue = isRef(reference) ? reference.value : reference
    return !isEqual(currentRefValue, initialRefValue)
  })

  function setDefaultValue() {
    return cloneDeep(options?.customDefault || initialRefValue)
  }

  function reset() {
    if (isRef(reference))
      reference.value = setDefaultValue()

    if (isReactive(reference)) {
      if (isObject(toRaw(reference))) {
        for (const key in toRaw(reference) as Record<string, unknown>)
          delete (reference as Record<string, unknown>)[key]

        Object.assign(reference, setDefaultValue())
      }

      if (isArray(toRaw(reference)))
        (reference as unknown[]).splice(0, (reference as unknown[]).length, ...setDefaultValue())
    }
  }

  function syncInitialValues() {
    if (isRef(reference))
      initialRefValue = cloneDeep(reference.value)

    if (isReactive(reference))
      initialRefValue = cloneDeep(reference)

    reset()
  }

  return { reset, hasNewValues, syncInitialValues }
}
