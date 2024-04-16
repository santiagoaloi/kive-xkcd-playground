export async function handleSaveFavoriteComic(userId, comic) {
  return await saveUserProfileService(userId, { favorites: [comic] }, {
    dedup: true,
  })
}
