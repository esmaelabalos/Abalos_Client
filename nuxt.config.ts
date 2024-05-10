export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ["@nuxtjs/tailwindcss"],
  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'login',
        path: '/login',
        component: resolve(__dirname, 'pages/login.vue'),
        layout: 'login'
      })
      routes.push({
        name: 'homepage',
        path: '/',
        component: resolve(__dirname, 'pages/homepage.vue'),
        layout: 'homepage'
      })
    }
  }
})