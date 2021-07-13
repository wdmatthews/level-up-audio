import colors from 'vuetify/es5/util/colors'

export default {
  target: 'static',
  router: {
    base: '/level-up-audio/',
  },
  head: {
    titleTemplate: '%s | Level Up Audio',
    title: 'Welcome',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Level up your game’s audio!' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
    ],
  },
  css: [
    '~/assets/css/utilities.css',
  ],
  plugins: [],
  components: true,
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify',
  ],
  modules: [
    '@nuxt/content',
  ],
  content: {
    fullTextSearchFields: ['name', 'description'],
  },
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.deepPurple.accent1,
          accent: colors.lightBlue.accent1,
          secondary: colors.blueGrey.base,
          info: colors.cyan.base,
          success: colors.green.accent3,
          warning: colors.amber.base,
          error: colors.red.base,
        },
      },
    },
  },
  build: {
    extend(config, ctx) {
      config.module.rules.push({
        test: /\.(txt|ogg|mp3|wav|mpe?g)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
        },
      })
    },
  },
}
