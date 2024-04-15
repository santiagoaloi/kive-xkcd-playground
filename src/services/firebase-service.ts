/**
 * Updates an array field by pushing a new value within a Firestore document.
 * @param {string} collectionName - The name of the Firestore collection.
 * @param {string} documentId - The ID of the Firestore document.
 * @param {string} fieldPath - The path to the array field within the document.
 * @param {any} newValue - The new value to push into the specified array field.
 * @returns {Promise<{ updated: boolean }>} An object indicating if the update was successful.
 */
export async function pushToArrayFieldService(collectionName, documentId, fieldPath, newValue) {
  try {
    const documentRef = doc(db, collectionName, documentId)
    const docSnapshot = await getDoc(documentRef)

    if (docSnapshot.exists()) {
      const existingData = docSnapshot.data()

      if (existingData) {
        // Ensure the specified field is an array
        let currentField = existingData
        const fieldKeys = fieldPath.split('.')

        for (let i = 0; i < fieldKeys.length; i++) {
          const key = fieldKeys[i]
          if (!currentField[key]) {
            console.error(`Nested key "${key}" does not exist.`)
            return { updated: false }
          }
          currentField = currentField[key]
        }

        if (Array.isArray(currentField)) {
          // Check if the new value already exists in the array
          if (currentField.includes(newValue)) {
            console.error(`Value "${newValue}" already exists in the array "${fieldPath}".`)
            return { updated: false }
          }

          // Push the new value into the array
          currentField.push(newValue)

          // Update the document with the modified array field
          await updateDoc(documentRef, { [fieldPath]: currentField })
          return { updated: true }
        }
        else {
          console.error(`Field "${fieldPath}" is not an array.`)
          return { updated: false }
        }
      }
    }
    else {
      console.error(
        `Document with ID "${documentId}" does not exist in collection "${collectionName}".`,
      )
    }

    return { updated: false }
  }
  catch (error) {
    console.error(`Error updating array field in "${collectionName}" collection: `, error)
    return { updated: false }
  }
}

export async function getDocumentsByFieldValueService(collectionName, keyPath, value) {
  try {
    const q = query(collection(db, collectionName), where(keyPath, '==', value))
    const querySnapshot = await getDocs(q)
    const matchingDocuments = []

    querySnapshot.forEach((doc) => {
      matchingDocuments.push({ id: doc.id, ...doc.data() })
    })

    return matchingDocuments
  }
  catch (error) {
    console.error(`Error searching documents in "${collectionName}" collection: `, error)
    return []
  }
}

export async function getDocumentByIdService(collectionName, documentId) {
  try {
    const documentRef = doc(db, collectionName, documentId)
    const docSnapshot = await getDoc(documentRef)

    if (docSnapshot.exists())
      return { id: docSnapshot.id, ...docSnapshot.data() }

    else

      return null
  }
  catch (error) {
    console.error(`Error retrieving document from "${collectionName}" collection: `, error)
    throw error
  }
}

export async function getDocumentsByIdService(collectionName, documentIds) {
  try {
    const documents = []

    for (const documentId of documentIds) {
      const documentRef = doc(db, collectionName, documentId)
      const docSnapshot = await getDoc(documentRef)

      if (docSnapshot.exists())
        documents.push({ ...docSnapshot.data() })
    }

    return documents
  }
  catch (error) {
    console.error(`Error retrieving documents from "${collectionName}" collection: `, error)
    throw error
  }
}

export async function updateDocumentService(
  collectionName,
  documentId,
  payload,
  options = {},
) {
  const { fieldName = null } = options

  function handleNewDocument(documentRef, fieldName, payload) {
    if (fieldName) {
      const fieldToUpdate = { [fieldName]: payload }
      return setDoc(documentRef, fieldToUpdate)
    }
    return setDoc(documentRef, payload)
  }

  function handleFieldUpdate(documentRef, existingData, fieldName, payload, options) {
    const fieldToUpdate = {
      [fieldName]: Object.prototype.hasOwnProperty.call(existingData, fieldName) && !options.replace
        ? updateArrayField(existingData[fieldName] || [], payload, options)
        : payload,
    }

    return updateDoc(documentRef, fieldToUpdate)
  }

  function updateArrayField(existingArray, payload, options) {
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

  function updateDocumentData(existingData, payload, options) {
    const updatedData = { ...existingData }

    Object.entries(payload).forEach(([key, value]) => {
      if (value !== undefined) {
        if (isObjectUpdate(value, existingData[key]))
          updatedData[key] = updateNestedObject(existingData[key], value, options)

        else if (isArrayUpdate(value))
          updatedData[key] = updateArray(existingData[key] || [], value, options)

        else
          updatedData[key] = value
      }
    })

    return updatedData
  }

  function isObjectUpdate(newValue, existingValue) {
    return (
      typeof newValue === 'object'
      && newValue !== null
      && !Array.isArray(newValue)
      && typeof existingValue === 'object'
      && existingValue !== null
      && !Array.isArray(existingValue)
    )
  }

  function isArrayUpdate(newValue) {
    return Array.isArray(newValue)
  }

  function updateNestedObject(existingObject, newObject, options) {
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

  function updateArray(existingArray, newArray, options) {
    if (options.replace === true)
      return [...new Set(newArray)] // Deduplicate when replace is true

    else if (options.duplicates === false)
      return [...new Set([...existingArray, ...newArray])]

    else
      return [...existingArray, ...newArray]
  }

  try {
    const documentRef = doc(db, collectionName, documentId)
    const docSnapshot = await getDoc(documentRef)

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

export async function removeItemFromArrayService(
  collectionName,
  documentId,
  itemId,
  arrayFieldName,
  options = {},
) {
  try {
    const documentRef = doc(db, collectionName, documentId)

    // Fetch the document
    const docSnapshot = await getDoc(documentRef)

    if (docSnapshot.exists()) {
      const data = docSnapshot.data()

      // Ensure that the field to update exists and is an array
      if (Array.isArray(data[arrayFieldName])) {
        let indexToRemove

        // If options.field is provided, find the index of the item where the item's field matches itemId
        // Otherwise, find the index of itemId in the array
        if (options.field)
          indexToRemove = data[arrayFieldName].findIndex(item => item[options.field] === itemId)
        else
          indexToRemove = data[arrayFieldName].indexOf(itemId)

        if (indexToRemove !== -1) {
          // Remove the item from the array
          data[arrayFieldName].splice(indexToRemove, 1)

          // Update the document with the modified array
          await updateDoc(documentRef, { [arrayFieldName]: data[arrayFieldName] })

          return { removed: true }
        }
        else {
          console.error(`Item "${itemId}" not found in "${arrayFieldName}" array.`)
        }
      }
      else {
        console.error(`Field "${arrayFieldName}" either doesn't exist or is not an array.`)
      }
    }
    else {
      console.error(
        `Document with ID "${documentId}" does not exist in collection "${collectionName}".`,
      )
    }

    return { removed: false }
  }
  catch (error) {
    console.error(`Error removing item from "${arrayFieldName}" array: `, error)
    return { removed: false }
  }
}

export async function createNewDocumentService(collectionName, payload) {
  try {
    const docRef = await addDoc(collection(db, collectionName), payload)
    return docRef.id // Returns the newly generated document's UID
  }
  catch (error) {
    throw new Error(`createNewDocumentService failed. ${error}`)
  }
}

/**
 * Uploads a file to a specified path in the storage.
 *
 * @param {string} path - The path in the storage where the file will be uploaded.
 * @param {File} file - The file to be uploaded.
 * @returns {Promise<{ uploading: boolean, downloadURL: string }>} A Promise that resolves with an object containing the upload status and the download URL.
 * @throws {Error} If there is an error during the upload process.
 */
export function uploadFileService(path, file) {
  return new Promise((resolve, reject) => {
    // Create a reference to the storage path
    const ref = storageRef(storage, `${path}/${file.name}`)

    // Create an upload task with resumable bytes
    const uploadTask = uploadBytesResumable(ref, file)

    let uploading = false

    // Listen for state changes during the upload
    uploadTask.on(
      'state_changed',
      // Callback function for state changes
      (snapshot) => {
        if (snapshot.state === 'running')
          uploading = true
      },
      // Error callback function
      (error) => {
        reject(error)
      },
      // Completion callback function
      () => {
        // Upload completed successfully, get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          uploading = false
          // Resolve the Promise with the upload status and download URL
          resolve({ uploading, downloadURL })
        })
      },
    )
  })
}
