import type { UnwrapRef } from 'vue'

export function useResetRef<T>(reference: Ref<T> | UnwrapRef<T>, options?: any) {
  // Check if the reference is a Ref or a Reactive variable
  if (!isRef(reference) && !isReactive(reference))
    throw new Error('A Ref or a Reactive variable should be passed as an argument to resetRef')

  let initialRefValue: Ref<any> | UnwrapRef<any>

  if (isRef(reference)) {
    // Make a deep copy of the initial Ref value
    initialRefValue = cloneDeep(reference.value)
  }

  if (isReactive(reference)) {
    // Make a deep copy of the initial Reactive object
    initialRefValue = cloneDeep(reference)
  }

  // Computed property to determine if there are new values compared to the initial state
  const hasNewValues = computed(() => {
    const currentRefValue = isRef(reference) ? reference.value : reference
    return !isEqual(currentRefValue, initialRefValue)
  })

  /**
   * Returns a deep copy of the default value, considering custom default options.
   * @returns {object} A deep copy of the default value.
   */
  function setDefaultValue() {
    return cloneDeep(options?.customDefault || initialRefValue)
  }

  /**
   * Resets the reference to its initial state.
   */
  function reset() {
    if (isRef(reference)) {
      // For Ref, deep copy the default value and assign it back to the reference's value
      reference.value = setDefaultValue()
    }

    if (isReactive(reference)) {
      if (isObject(toRaw(reference))) {
        // Clear the reactive object by deleting all keys
        for (const key in toRaw(reference))
          delete reference[key]

        // Assign new default values to the reactive object
        Object.assign(reference, setDefaultValue())
      }

      if (isArray(toRaw(reference))) {
        // For reactive arrays, clear the existing elements and push new default elements
        reference.splice(0, reference.length, ...setDefaultValue())
      }
    }
  }

  /**
   * Updates the initial values based on the current reference state.
   */
  function syncInitialValues() {
    if (isRef(reference))
      initialRefValue = cloneDeep(reference.value)

    if (isReactive(reference))
      initialRefValue = cloneDeep(reference)

    reset()
  }

  // Return an object with reset and hasNewValues functions
  return { reset, hasNewValues, syncInitialValues }
}
