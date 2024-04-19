import { toast } from 'vuetify-sonner'

/**
 * Displays a snackbar message using the vuetify-sonner toast function.
 *
 * @param text - The message to display in the snackbar.
 * @param type - The type of the snackbar, which determines its color. 'error' results in an error color, any other value results in the primary color.
 */
export function snackbar(text: string, type?: 'error' | string): void {
  let color: string

  switch (type) {
    case 'error':
      // Vuetify error color (defined in theme)
      color = 'error'
      break

    default:
      // Vuetify primary color (defined in theme)
      color = '#000'
      break
  }

  toast(text, {
    duration: 5000, // duration of the toast
    onAutoClose: () => {}, // function to call when the toast auto closes
    onDismiss: () => {}, // function to call when the toast is dismissed
    id: 'unique-id', // unique id for the toast
    important: false, // whether the toast is important
    action: {
      label: 'close',
      buttonProps: {
        color: 'white',
      },
    },
    cardProps: {
      color,
      class: 'pa-1 rounded-lg',
    },
  })
}
