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

      /**
       * Configuration for defining route folders and their respective file patterns.
       *
       * This configuration object defines the source folders for route files along with the file patterns
       * to match files within those folders. Each entry consists of a source folder (src), a file pattern
       * (filePatterns), and a path transformation function (path).
       *
       * - 'src': The source folder where route files are located.
       * - 'filePatterns': The patterns to match files within the source folder.
       * - 'path': A function that transforms the file path based on the source folder's name.
       *
       * Example entries:
       * - For 'public' routes located in 'src/pages/public', 'editPath' function is applied.
       * - For 'secure' routes located in 'src/pages/secure', 'editPath' function is applied.
       */
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

      /**
       * Extend a route's metadata based on its components.
       *
       * This function is used to modify the metadata of a route by inspecting its components.
       * It removes leading slashes from the route's name, checks if the 'default' component
       * is included in the route, and adjusts the layout and authentication requirements accordingly.
       *
       * @param {Route} route - The route object to be extended.
       */

      extendRoute: (route) => {
        // Remove one or more slashes from the beginning of route.name
        route.name = route.name.replace(/^\/+/, '')

        // Check if the 'default' component is included in the route
        if (route.components.get('default')?.includes('public')) {
          route.meta = {
            ...route.meta,
            layout: 'default',
          }
        }

        // Check if the 'default' component is included in the route and is marked as 'secure'
        if (route.components.get('default')?.includes('secure')) {
          // If 'default' includes 'secure', set the layout to 'secure' and require authentication
          route.meta = {
            ...route.meta,
            layout: 'secure',
            requiresAuth: true,

          }
        }
      },

      exclude: ['**/__**/**', '**/__**/*'],

      /**
       * Specify file extensions to consider for routes generation
       * @param {pathSegmentsay<string>} extensions - pathSegmentsay of file extensions
       */

      dts: 'src/typed-router.d.ts',

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

          // Firestore Storage
          'firebase/storage': [
            'uploadBytesResumable',
            'uploadTaskSnapshot',
            'getDownloadURL',
            ['ref', 'storageRef'],
            'uploadBytes',
          ],

          // Functions
          'firebase/functions': ['httpsCallable'],

          // // Authentication
          'firebase/auth': [
            'GoogleAuthProvider',
            'signInWithPopup',
            'signInWithEmailAndPassword',
            'signOut',
            'getIdToken',
            'createUserWithEmailAndPassword',
          ],

          // Global firebase exports
          '@/firebase': ['auth', 'db', 'functions', 'getUserState', 'storage'],
        },

      ],

      dts: 'src/auto-imports.d.ts',

      dirs: ['src/utils/**', 'src/composables/**', 'src/stores/**'],

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
