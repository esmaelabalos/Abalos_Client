<template>
  <footer class="bg-[#003366] text-white p-4">
    <div class="container mx-auto text-center">
      <p class="text-sm">Copyright © 2023 ServiSage. All rights reserved.</p>
      <p class="text-sm">
        <NuxtLink to="/privacy-policy" class="text-white hover:text-blue-800">Privacy Policy</NuxtLink> |
        <NuxtLink to="/terms-of-service" class="text-white hover:text-blue-800">Terms of Service</NuxtLink>
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>