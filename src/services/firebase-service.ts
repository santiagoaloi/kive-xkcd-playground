/**
 * Options for the updateDocumentService function.
 */
export interface Options {
  /**
   * The name of the field to update. If this is not provided, the entire document will be updated with the payload.
   * @default undefined
   */
  fieldName?: string

  /**
   * The toggle option allows you to add or remove items from an array field in a document.
   * If an item in the payload already exists in the array (based on the key), it will be removed.
   * If it doesn't exist, it will be added.
   * The toggle option should be an object with a single property: key.
   * The key is the property of the items in the array to use for comparison.
   * @example { key: 'id' }
   * @default undefined
   */
  toggle?: { key: string }

  /**
   * The dedup option allows you to add items from the payload to an array field in a document without adding duplicates.
   * If an item in the payload already exists in the array (based on the key), it will not be added.
   * The dedup option should be an object with a single property: key.
   * The key is the property of the items in the array to use for comparison.
   * @example { key: 'id' }
   * @default undefined
   */
  dedup?: { key: string }
}

/**
 * Updates a document in a Firebase collection.
 * @param collectionName - The name of the collection.
 * @param documentId - The ID of the document to update.
 * @param payload - The data to update the document with.
 * @param options - Options for how to update the document.
 * @returns A promise that resolves when the update is complete.
 */
export async function updateDocumentService(
  collectionName: string,
  documentId: string,
  payload: any[],
  options: Options = {},
): Promise<void> {
  const { fieldName = null, toggle = null, dedup = null } = options

  const documentRef = doc(db, collectionName, documentId)
  const docSnapshot = await getDoc(documentRef)

  if (!docSnapshot.exists()) {
    await setDoc(documentRef, { [fieldName]: payload })
    return
  }

  const existingData = docSnapshot.data()

  if (fieldName) {
    const existingArray = existingData[fieldName] || []
    let updatedArray

    if (toggle) {
      const key = toggle.key
      updatedArray = toggleItems(existingArray, payload, key)
    }

    else if (dedup) {
      const key = dedup.key
      updatedArray = dedupItems(existingArray, payload, key)
    }

    else {
      updatedArray = [...existingArray, ...payload]
    }

    await updateDoc(documentRef, { [fieldName]: updatedArray })
    return
  }

  // Ensure payload is an object before passing to updateDoc
  const payloadObject = Array.isArray(payload) ? Object.assign({}, ...payload) : payload
  await updateDoc(documentRef, payloadObject)
}

/**
 * Toggles items in an array based on a key.
 * @param existingArray - The existing array.
 * @param payload - The items to toggle.
 * @param key - The key to use for comparison.
 * @returns The updated array.
 */
function toggleItems(existingArray: any[], payload: any[], key: string): any[] {
  return payload.reduce((acc, item) => {
    const index = acc.findIndex(existingItem => existingItem[key] === item[key])

    if (index !== -1) {
      // item exists, remove it
      return [...acc.slice(0, index), ...acc.slice(index + 1)]
    }

    else {
      // item doesn't exist, add it
      return [...acc, item]
    }
  }, existingArray)
}

/**
 * Adds items to an array without adding duplicates.
 * @param existingArray - The existing array.
 * @param payload - The items to add.
 * @param key - The key to use for comparison.
 * @returns The updated array.
 */
function dedupItems(existingArray: any[], payload: any[], key: string): any[] {
  return [...existingArray, ...payload.filter(item => !existingArray.some(existingItem => existingItem[key] === item[key]))]
}
