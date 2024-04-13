/**
 * Edit and transform a SFC absolute  file path for use in route definitions.
 *
 * This function takes an input SFC absolute file path and performs several operations to transform it for use
 * in route definitions. It includes splitting the path into segments, handling underscore segments,
 * joining the remaining parts, ensuring a lowercase path, and appending '.vue' if needed.
 *
 * @param absolutePath - The input SFC absolute file path to be edited.
 * @param segmentName - The name of the segment used to identify the route.
 * @returns The edited and transformed SFC absolute file path.
 */

export function editRoute(absolutePath: string, segmentName: string): string {
  // Split the file path by '/'
  const parts = absolutePath.split('/')

  // Find the index of the provided segment name in the path
  const segmentIndex = parts.indexOf(segmentName)

  /**
   * Recursively removes segments starting with an underscore from an array.
   * @param pathSegments - The input array of path segments.
   * @returns An array with underscore segments removed.
   */
  function removeUnderscoreSegments(pathSegments: string[]): string[] {
    // Example of how pathSegments array looks: ['_jobposts', 'JobPosts', '_published', 'Published.vue']

    const filteredSegments: string[] = []

    for (let i = 0; i < pathSegments.length; i++) {
      if (pathSegments[i].startsWith('_')) {
        // Skip segments starting with an underscore
        continue
      }

      // Add the current segment to the filteredSegments array
      filteredSegments.push(pathSegments[i])

      // Recursively process subdirectories
      if (
        i < pathSegments.length - 1
        && pathSegments[i + 1]
        && pathSegments[i + 1].startsWith('_')
      ) {
        filteredSegments.push(...removeUnderscoreSegments(pathSegments.slice(i + 1)))
        break // Exit the loop when an underscore segment is encountered
      }
    }
    return filteredSegments
  }

  if (segmentIndex !== -1 && segmentIndex + 1 < parts.length) {
    // Remove segments starting with an underscore
    const remainingParts = removeUnderscoreSegments(parts.slice(segmentIndex + 1))

    // Join the remaining parts to get the simplified path
    absolutePath = `/${remainingParts.join('/')}`

    // Ensure that the resulting file name ends with ".vue"
    // if (!absolutePath.endsWith('.vue')) {
    //   absolutePath += '.vue'
    // }
  }

  // Convert the path to lowercase
  absolutePath = absolutePath.toLowerCase()

  // console.log('👉 New SFC Path', absolutePath)
  return absolutePath
}
