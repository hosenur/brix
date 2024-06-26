// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  debug: true,
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxt/content"]  ,
  routeRules:{
    '/': { prerender: true }
  }
})