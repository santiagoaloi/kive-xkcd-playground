import RootApp from './App.vue'
import { registerPlugins } from './plugins'

// stylesheets
import 'virtual:uno.css'
import './styles/tailwind.css'
import './styles/vuetify-overrides.css'

// Create a new Vue app instance
const kiveApp = createApp(RootApp)

// Register plugins with the app
registerPlugins(kiveApp)

// Mount the Vue app to the DOM
kiveApp.mount('#app')
