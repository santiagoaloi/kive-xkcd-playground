import type { Ref, UnwrapRef } from 'vue'

/**
 * A hook that provides functionality to reset a reactive reference to its initial state.
 *
 * @param reference - The reactive reference to be reset.
 * @param options - Optional settings for the reset behavior.
 * @returns An object containing a reset function, a computed reference indicating whether new values have been assigned, and a function to synchronize the initial values.
 *
 * @throws Will throw an error if the provided reference is not a Ref or a Reactive variable.
 */

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

        Object.assign(reference as object, setDefaultValue())
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
