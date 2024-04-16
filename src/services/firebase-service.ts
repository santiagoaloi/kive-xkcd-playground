import type { DocumentReference, DocumentSnapshot } from 'firebase/firestore'

export interface Options {
  fieldName?: string | null
  dedup?: boolean
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
      [fieldName]: Object.prototype.hasOwnProperty.call(existingData, fieldName) && !options.dedup
        ? updateArrayField(existingData[fieldName] || [], payload, options)
        : payload,
    }

    return updateDoc(documentRef, fieldToUpdate)
  }

  function updateArrayField(existingArray: any[], payload: any, options: Options): any[] {
    if (options.dedup === true)
      return [...new Set(payload)] // Deduplicate when dedup is true

    else
      return [...existingArray, ...payload]
  }

  function updateDocumentData(existingData: any, payload: any, options: Options): any {
    const updatedData = { ...existingData }

    Object.entries(payload).forEach(([key, value]) => {
      if (value !== undefined) {
        if (isObjectUpdate(value, existingData[key])) { updatedData[key] = updateNestedObject(existingData[key], value, options) }

        else if (isArrayUpdate(value)) {
          if (!Array.isArray(value))
            throw new Error(`Expected an array, but received ${typeof value}`)

          updatedData[key] = updateArray(existingData[key] || [], value, options)
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

    return updatedObject
  }

  function updateArray(existingArray: any[], newArray: any[], options: Options): any[] {
    if (options.dedup === true)
      return [...new Set(newArray)] // Deduplicate when dedup is true

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
