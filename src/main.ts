import App from './App.vue'
import { registerPlugins } from './plugins'

import './styles/tailwind.css'
import './styles/vuetify-overrides.css'

import 'virtual:uno.css'

const app = createApp(App)

registerPlugins(app)

app.mount('#app')
