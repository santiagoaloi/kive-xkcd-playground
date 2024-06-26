// Plugins
import { URL, fileURLToPath } from 'node:url'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Fonts from 'unplugin-fonts/vite'
import Layouts from 'vite-plugin-vue-layouts'
import Vue from '@vitejs/plugin-vue'
import VueRouter from 'unplugin-vue-router/vite'
import Vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

// UnoCSS
import UnoCSS from 'unocss/vite'

// Utilities
import { defineConfig } from 'vite'
import { editRoute } from './src/utils/routing'

// https://vitejs.dev/config/
export default defineConfig({

  plugins: [

    UnoCSS(),

    VueRouter({

      routesFolder: [
        {
          src: 'src/pages/public',
          filePatterns: '**/*',
          path: file => editRoute(file, 'public'),
        },

        {
          src: 'src/pages/secure',
          filePatterns: '**/*',
          path: file => editRoute(file, 'secure'),
        },
      ],

      extendRoute(route) {
        if (route.path.includes('profile'))
          route.addToMeta({ layout: 'secure', requiresAuth: true })
      },

      exclude: ['**/__**/**', '**/__**/*'],
    }),

    Layouts(),

    AutoImport({
      imports: [

        'vue',
        {
          'vue-router/auto': ['useRoute', 'useRouter'],
          'vuetify': ['useDisplay', 'createVuetify', 'useTheme'],
          '@vueuse/router': [
            'useRouteQuery',
          ],
          'axios': [['default', 'axios']],

          'yup': [
            ['*', 'Yup'],
          ],

          '@vueuse/core': [
            'watchImmediate',
            'useColorMode',
          ],

          'lodash-es': ['cloneDeep', 'isEqual', 'isArray', 'isObject'],

          // Firebase
          '@/firebase': ['db', 'auth'],

          // Firestore Database
          'firebase/firestore': [
            'updateDoc',
            'arrayUnion',
            'doc',
            'getDoc',
            'getDocs',
            'setDoc',
            'addDoc',
            'where',
            'query',
            'collection',
            'onSnapshot',
            'deleteDoc',
          ],

          // Firebase Authentication
          'firebase/auth': [
            'GoogleAuthProvider',
            'signInWithPopup',
            'signInWithEmailAndPassword',
            'signOut',
            'getIdToken',
            'createUserWithEmailAndPassword',
          ],

          // Vuefire composables
          'vuefire': ['useFirebaseAuth', 'useCurrentUser'],

        },

      ],

      dts: 'src/auto-imports.d.ts',

      /**
       * Path for directories to be auto imported
       */

      dirs: ['src/utils/**', 'src/composables/**', 'src/stores/**', 'src/services/**/*'],

      eslintrc: {
        enabled: true,
      },

      vueTemplate: true,
    }),

    // https://github.com/antfu/unplugin-vue-components
    // Autoimport Vue SFCs.
    Components({
      dirs: ['src/components'],

      // Avoid index.vue conflicts.
      allowOverrides: false,

      deep: true,
      extensions: ['vue'],

      dts: 'src/components.d.ts',

    }),

    Fonts({
      google: {
        families: [{
          name: 'Roboto',
          styles: 'wght@100;300;400;500;700;900',
        }],
      },
    }),

    Vue({
      template: { transformAssetUrls },
    }),

    // https://github.com/vuetifyjs/vuetify-loader/tree/master/packages/vite-plugin#readme
    Vuetify({
      autoImport: true,
      styles: {
        configFile: 'src/styles/settings.scss',
      },
    }),

  ],

  define: { 'process.env': {} },

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@U': fileURLToPath(new URL('./src/utils', import.meta.url)),

    },
    extensions: [
      '.js',
      '.json',
      '.jsx',
      '.mjs',
      '.ts',
      '.tsx',
      '.vue',
    ],
  },

  optimizeDeps: {
    exclude: [
      'vuetify',
      '@vueuse/router',
      'axios',
      'lodash-es',
    ],
  },

  server: {
    port: 3000,

    proxy: {
      // Forward the request to the proxy instead of sending it directly to the server.
      '/api': {
        // Forward the request to 'https://xkcd.com'.
        target: 'https://xkcd.com',

        // Change the 'host' header of the request to the target ('https://xkcd.com').
        changeOrigin: true,

        // Remove the '/api' prefix from the path.
        // Becomes 'https://xkcd.com/xxx/info.0.json'.
        rewrite: path => path.replace(/^\/api/, ''),
      },
    },

  },
})
