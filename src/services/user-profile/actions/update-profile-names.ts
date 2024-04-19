/**
 * Handles updating profile names for a user.
 * @param {string} userId - The ID of the user.
 * @param {Record<string, string>} names - An object containing the names to update.
 * @returns {Promise<any>} A promise that resolves when the profile names have been updated.
 */
export async function handleUpdateProfileNames(userId: string, names: Record<string, string>): Promise<any> {
  return await saveUserProfileService(userId, { ...names })
}
