import type { Options } from '@/services/firebase-service'

/** The name of the collection in the database where user profiles are stored. */
const orgCollectionName: string = 'users'

/**
 * Saves a user profile to the database.
 * @param userId - The ID of the user whose profile is being saved.
 * @param payload - The data to save to the user's profile.
 * @param options - Options for how to update the document.
 * @returns A promise that resolves when the profile has been saved.
 * @throws Will throw an error if the save operation fails.
 */
export async function saveUserProfileService(userId: string, payload: any, options?: Options): Promise<void> {
  try {
    return await updateDocumentService(orgCollectionName, userId, payload, options)
  }
  catch (error: any) {
    throw new Error(`saveUserProfileService failed. ${error}`)
  }
}
