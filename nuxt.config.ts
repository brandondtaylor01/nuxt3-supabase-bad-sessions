// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    // private keys.
    // ...
    public: {
      
    },
  },
  
  css: [
    '@/assets/css/reset.css',
    '@/assets/css/common.css'
  ],

  modules: [
    '@nuxtjs/supabase'
  ]
});
