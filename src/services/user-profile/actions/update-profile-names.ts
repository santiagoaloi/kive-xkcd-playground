export async function handleUpdateProfileNames(userId, names) {
  return await saveUserProfileService(userId, { ...names })
}
