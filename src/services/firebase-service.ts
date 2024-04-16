/**
 * Options for the updateDocumentService function.
 */
export interface Options {
  /**
   * The name of the field to update. If this is not provided, the entire document will be updated with the payload.
   */
  fieldName?: string

  /**
   * The toggle option allows you to add or remove items from an array field in a document.
   * If an item in the payload already exists in the array (based on the key), it will be removed.
   * If it doesn't exist, it will be added.
   *
   * The toggle option should be an object with a single property: key.
   * The key is the property of the items in the array to use for comparison.
   *
   * Example: { key: 'id' }
   */
  toggle?: { key: string }

  /**
   * The dedup option allows you to add items from the payload to an array field in a document without adding duplicates.
   * If an item in the payload already exists in the array (based on the key), it will not be added.
   *
   * The dedup option should be an object with a single property: key.
   * The key is the property of the items in the array to use for comparison.
   *
   * Example: { key: 'id' }
   */
  dedup?: { key: string }
}

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

function dedupItems(existingArray: any[], payload: any[], key: string): any[] {
  return [...existingArray, ...payload.filter(item => !existingArray.some(existingItem => existingItem[key] === item[key]))]
}
