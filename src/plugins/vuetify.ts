import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// Import default configurations, theme, and icons from '@/config/vuetify'.
import {
  defaultsCustom,
  defaultsNative,
  themes,
} from '../config/vuetify'

// Create a new Vuetify instance with custom configurations.
export default createVuetify({

  theme: {
    themes,
  },

  defaults: {
    ...defaultsCustom,
    ...defaultsNative,
  },
})
