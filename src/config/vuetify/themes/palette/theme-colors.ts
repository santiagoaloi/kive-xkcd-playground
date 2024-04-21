import materialColors from 'vuetify/util/colors'

export const colors = {
  'primary': {
    dark: materialColors.pink.lighten1,
    light: materialColors.pink.base,
  },

  'secondary': {
    dark: '#625afa',
    light: '#625afa',
  },

  'error': {
    dark: '#ff4081',
    light: '#ff4081',
  },

  'surface': {
    dark: '#1e222f',
    light: '#fff',
  },

  'surface-hover': {
    dark: '#222635',
    light: '#fcf8ff',
  },

  'background': {
    dark: '#191a23',
    light: '#f8fafc',
  },

  'link': {
    dark: materialColors.indigo.lighten3,
    light: '#000',
  },

  'black-link': {
    dark: '#9499ff',
    light: '#0B1215',
  },

  get 'surface-footer'() {
    return {
      dark: this.surface.dark,
      light: '#FAFAFA',
    }
  },

  'surface-footer-font-color': {
    dark: '#666666',
    light: '#666666',
  },

  'overview-card': {
    dark: '#242838',
    light: '#f4f4f4',
  },

  'square-avatar': {
    dark: '#383e57',
    light: '#eff1f3',
  },

  'appbar-background': {
    dark: '#191a23',
    light: '#f5f7fa',
  },

  'on-surface': {
    dark: '#adbac7',
    light: '#3b4256',
  },

  'on-surface-variant': {
    dark: '#242B33',
    light: '#F4F5FA',
  },

  'on-text-field-background': {
    dark: '#adbac7',
    light: '#181027',
  },

  'appbar-buttons': {
    dark: '#fff',
    light: '#0B1215',
  },

  'primary-button': {
    dark: '#625afa',
    light: '#625afa',
  },

  'secondary-button': {
    dark: '#573FA5',
    light: '#7d5bed',
  },

  'accent-button': {
    dark: '#272939',
    light: '#fff',
  },

  'accent-button-icon': {
    dark: '',
    light: '#2d8a9d',
  },

  'light-button': {
    dark: '#242838',
    light: materialColors.shades.white,
  },

  'black-button': {
    dark: '#242838',
    light: '#0B1215',
  },

  'notifications-button': {
    dark: '#242838',
    light: '#7856ff',
  },

  'field-outline-focus': {
    dark: materialColors.blueGrey.darken3,
    light: '#666666',
  },

  'text-field-background': {
    dark: '#242838',
    light: '#fafbfc',
  },

  'select-background': {
    dark: '#242838',
    light: '#fafbfc',
  },

  'jobpost-promoted': {
    dark: '#242032',
    light: '#f6f9ff',
  },

  'scrim': {
    dark: '#000',
    light: '#ccc',
  },

  get 'settings-card-footer'() {
    return {
      dark: this.surface.dark,
      light: materialColors.grey.lighten5,
    }
  },

  // SVG
  'logoBackground': {
    dark: '#adbac7',
    light: '#3b4256',
  },

}
