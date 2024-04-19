import type { Comic } from '@/stores/comics'

/**
 * Handles saving a favorite comic for a user.
 * @param {string} userId - The ID of the user.
 * @param {Comic} comic - The comic to save.
 * @returns {Promise<any>} A promise that resolves when the comic has been saved.
 */
export async function handleSaveFavoriteComic(userId: string, comic: Comic): Promise<any> {
  return await updateDocumentService('users', userId, [comic], {
    fieldName: 'favorites',
    toggle: { key: 'num' },
  })
}
