const orgCollectionName = 'users'

export async function saveUserProfileService(userId, payload) {
  try {
    return await updateDocumentService(orgCollectionName, userId, payload, {
      replace: true,
      duplicates: false,
    })
  }

  catch (error) {
    throw new Error(`saveUserProfileService failed. ${error}`)
  }
}
