<template>
    <nav class="flex items-center justify-between bg-[#003366] text-white p-4">
      <NuxtLink :to="logo.to" class="font-bold text-2xl">
        {{ logo.text }}
      </NuxtLink>
      <div>
        <NuxtLink
          v-for="(link, index) in links"
          :key="index"
          :to="link.to"
          class="mr-4">{{ link.text }}</NuxtLink>
      </div>
    </nav>
  </template>
  
  <script>
export default {
  data() {
    return {
      links: [
        { text: 'Home', to: '/' },
        { text: 'Contact', to: '/contact' },
        { text: 'Services', to: '/services' },
        { text: 'Login', to: '/login' },
        { text: 'Signup', to: '/signup' }
      ],
      logo: {
        text: 'ServiSage',
        to: '/'
      }
    }
  }
}
</script>
<style>
.nuxt-link-exact-active {
  color: white;
}

.logo {
  font-size: v-bind(logo.fontSize); /* Add this line */
}
</style>