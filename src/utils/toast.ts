import { toast } from 'vuetify-sonner'

export function snackbar(text: string, type?: string): void {
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
