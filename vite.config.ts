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
import presetIcons from '@unocss/preset-icons/browser'

// Utilities
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({

  plugins: [

    UnoCSS(),

    VueRouter({
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

    Fonts({
      google: {
        families: [{
          name: 'Roboto',
          styles: 'wght@100;300;400;500;700;900',
        }],
      },
    }),
  ],

  define: { 'process.env': {} },

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
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
