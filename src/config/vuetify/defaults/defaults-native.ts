export default {
  // Native Vuetify Components

  VRow: {
    class: 'w-100',
  },

  VToolbar: {
    VBtn: {
      ripple: false,
      color: 'primary-button',
      variant: 'elevated',
      border: true,
    },
  },

  VBtn: {
    ripple: false,
    color: 'primary-button',
    border: false,
  },

  VCard: {
    border: true,
    elevation: 0,
    ripple: false,
    class: 'rounded-lg',
  },

  VAppBar: {
    flat: true,
    density: 'comfortable',
    color: 'appbar-background',
    VBtn: {
      ripple: false,
    },
  },

  VTextField: {
    hideDetails: false,
    density: 'comfortable',
    variant: 'outlined',
    color: 'field-outline-focus',
    bgColor: 'text-field-background',
    persistentPlaceholder: true,
  },

  VCombobox: {
    hideDetails: false,
    density: 'comfortable',
    variant: 'outlined',
    color: 'field-outline-focus',
    bgColor: 'text-field-background',
    menuProps: { contentClass: 'autocomplete-list-bg-color', maxHeight: '200' },
    persistentPlaceholder: true,
  },

  VAutocomplete: {
    // autoSelectFirst: true,
    hideDetails: false,
    density: 'comfortable',
    variant: 'outlined',
    color: 'field-outline-focus',
    bgColor: 'text-field-background',
    menuProps: { contentClass: 'autocomplete-list-bg-color', maxHeight: '200' },
    persistentPlaceholder: true,

    VList: {
      density: 'compact',
    },
  },

  VSelect: {
    autoSelectFirst: true,
    hideDetails: false,
    density: 'comfortable',
    variant: 'outlined',
    color: 'field-outline-focus',
    bgColor: 'text-field-background',
    menuProps: { contentClass: 'autocomplete-list-bg-color', maxHeight: '200' },
    persistentPlaceholder: true,
  },

  VTextarea: {
    hideDetails: false,
    variant: 'outlined',
    color: 'field-outline-focus',
    bgColor: 'text-field-background',
    rows: 3,
  },

  VTooltip: { location: 'bottom' },

  VImg: { transition: false, class: 'dark:opacity-90 prevent-select pointer-events-none' },

  VAlert: {
    border: 'start',
    borderColor: 'purple-accent-4',
    elevation: true,
  },

  VCheckbox: {
    hideDetails: true,
  },

  VDialog: {
    scrim: '#000',
  },

  VMenu: {
    transition: false,
  },

  VChip: {
    class: 'border-sm',
  },

  VListItem: {
    ripple: false,
    class: 'my-1',
  },

  VFooter: {
    color: 'transparent',
  },

  VForm: {
    'fast-fail': true,
  },

}
