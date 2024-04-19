import 'vuetify/styles'
import { createVuetify } from 'vuetify'

import {
  defaultsCustom,
  defaultsNative,
  themes,
} from '../config/vuetify'

export default createVuetify({

  theme: {
    themes,
  },

  defaults: {
    ...defaultsCustom,
    ...defaultsNative,
  },
})
