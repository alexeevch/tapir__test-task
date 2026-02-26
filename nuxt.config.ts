export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  modules: ["@nuxt/eslint", "nuxt-svgo"],

  runtimeConfig: {
    public: {
      appName: "",
      apiUrl: ""
    }
  },

  css: ["~/assets/styles/main.scss"],

  svgo: {
    autoImportPath: "~/assets/icons/"
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "~/assets/styles/functions" as *;`
        }
      }
    }
  }
});
