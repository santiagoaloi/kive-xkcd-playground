/**
 * Handles removing all favorite comics for a user.
 * @param {string} userId - The ID of the user.
 * @returns {Promise<any>} A promise that resolves when the favorites have been removed.
 */
export async function handleRemoveAllFavorites(userId: string): Promise<any> {
  return await updateDocumentService('users', userId, [], { fieldName: 'favorites' })
}
