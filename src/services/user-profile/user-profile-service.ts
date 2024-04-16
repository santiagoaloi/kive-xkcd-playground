import type { Options } from '@/services/firebase-service'

const orgCollectionName: string = 'users'

export async function saveUserProfileService(userId: string, payload: any, options?: Options): Promise<void> {
  try {
    return await updateDocumentService(orgCollectionName, userId, payload, options)
  }
  catch (error: any) {
    throw new Error(`saveUserProfileService failed. ${error}`)
  }
}
