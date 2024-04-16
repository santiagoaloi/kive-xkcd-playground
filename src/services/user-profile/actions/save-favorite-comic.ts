export async function handleSaveFavoriteComic(userId, comic) {
  return await updateDocumentService('users', userId, [comic], {
    fieldName: 'favorites',
    toggle: { key: 'num' },
  })
}
