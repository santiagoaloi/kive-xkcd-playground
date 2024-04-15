import { toast } from 'vuetify-sonner'

export function snackbar(text, type) {
  let color

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
