import type { DocumentReference, DocumentSnapshot } from 'firebase/firestore'

interface Options {
  fieldName?: string | null
  replace?: boolean
  duplicates?: boolean
}

export async function updateDocumentService(
  collectionName: string,
  documentId: string,
  payload: any,
  options: Options = {},
): Promise<void> {
  const { fieldName = null } = options

  function handleNewDocument(documentRef: DocumentReference, fieldName: string | null, payload: any): Promise<void> {
    if (fieldName) {
      const fieldToUpdate = { [fieldName]: payload }
      return setDoc(documentRef, fieldToUpdate)
    }
    return setDoc(documentRef, payload)
  }

  function handleFieldUpdate(documentRef: DocumentReference, existingData: any, fieldName: string, payload: any, options: Options): Promise<void> {
    const fieldToUpdate = {
      [fieldName]: Object.prototype.hasOwnProperty.call(existingData, fieldName) && !options.replace
        ? updateArrayField(existingData[fieldName] || [], payload, options)
        : payload,
    }

    return updateDoc(documentRef, fieldToUpdate)
  }

  function updateArrayField(existingArray: any[], payload: any, options: Options): any[] {
    if (options.replace === true) {
      return [...new Set(payload)] // Deduplicate when replace is true
    }
    else if (options.duplicates === false) {
      const newArray = [...new Set([...existingArray, ...payload])]
      return newArray
    }
    else {
      return [...existingArray, ...payload]
    }
  }

  function updateDocumentData(existingData: any, payload: any, options: Options): any {
    const updatedData = { ...existingData }

    Object.entries(payload).forEach(([key, value]) => {
      if (value !== undefined) {
        if (isObjectUpdate(value, existingData[key])) { updatedData[key] = updateNestedObject(existingData[key], value, options) }

        else if (isArrayUpdate(value)) {
          if (Array.isArray(existingData[key])) {
            if (value && Array.isArray(value))
              updatedData[key] = updateArray(existingData[key], value, options)
            else
              throw new Error(`Expected value to be an array, but received ${typeof value}`)
          }
          else {
            throw new TypeError(`Expected ${key} to be an array, but received ${typeof existingData[key]}`)
          }
        }

        else { updatedData[key] = value }
      }
    })

    return updatedData
  }

  function isObjectUpdate(newValue: any, existingValue: any): boolean {
    return (
      typeof newValue === 'object'
      && newValue !== null
      && !Array.isArray(newValue)
      && typeof existingValue === 'object'
      && existingValue !== null
      && !Array.isArray(existingValue)
    )
  }

  function isArrayUpdate(newValue: any): boolean {
    return Array.isArray(newValue)
  }

  function updateNestedObject(existingObject: any, newObject: any, options: Options): any {
    const updatedObject = { ...existingObject, ...newObject }

    if (options.duplicates === false) {
      Object.keys(updatedObject).forEach((key) => {
        if (Array.isArray(updatedObject[key])) {
          // Deduplicate array values if options.duplicates is false
          updatedObject[key] = [...new Set(updatedObject[key])]
        }
      })
    }

    return updatedObject
  }

  function updateArray(existingArray: any[], newArray: any[], options: Options): any[] {
    if (options.replace === true)
      return [...new Set(newArray)] // Deduplicate when replace is true

    else if (options.duplicates === false)
      return [...new Set([...existingArray, ...newArray])]

    else
      return [...existingArray, ...newArray]
  }

  try {
    const documentRef = doc(db, collectionName, documentId)
    const docSnapshot: DocumentSnapshot = await getDoc(documentRef)

    if (!docSnapshot.exists()) {
      await handleNewDocument(documentRef, fieldName, payload)
      return
    }

    const existingData = docSnapshot.data()

    if (fieldName) {
      await handleFieldUpdate(documentRef, existingData, fieldName, payload, options)
      return
    }

    const updatedData = updateDocumentData(existingData, payload, options)

    await updateDoc(documentRef, updatedData)
  }
  catch (error) {
    throw new Error(`updateDocumentService failed: ${error}`)
  }
}
