export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Green-Report',
    htmlAttrs: {
      lang: 'en'
    },
    script: [
      {
        src: 'https://apis.google.com/js/platform.js?onload=renderButton',
        defer: true,
        async: true
      }
    ],
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      // For google authentication
      { name: 'google-signin-scope', content: 'profile email' },
      {
        name: 'google-signin-client_id',
        content: '625910950860-otlptp54tf0do72frvgmuf53vgq3qgle.apps.googleusercontent.com'//FIXME This should be something like process.env.GOOGLE_CLIENT_ID
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/firebase'
  ],
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Firebase module configuration: https://firebase.nuxtjs.org/
  firebase: {
    config: {
      apiKey: '<apiKey>',
      authDomain: '<authDomain>',
      projectId: '<projectId>',
      storageBucket: '<storageBucket>',
      messagingSenderId: '<messagingSenderId>',
      appId: '<appId>',
      measurementId: '<measurementId>'
    },
    services: {
      auth: true // Use firebase authentication
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    publicPath: '/nuxt/',
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) { }
  },
}
