<template>
    <header class="bg-[#003366] text-white p-4">
      <div class="container mx-auto flex justify-between items-center">
        <NuxtLink to="/" class="text-2xl font-bold">ServiSage</NuxtLink>
        <nav>
          <ul class="flex space-x-4">
            <li><NuxtLink to="/services" class="hover:underline">Services</NuxtLink></li>
            <li><NuxtLink to="/contact" class="hover:underline">Contact</NuxtLink></li>
            <li><NuxtLink to="/login" class="hover:underline">Login</NuxtLink></li>
            <li><NuxtLink to="/signup" class="hover:underline">Signup</NuxtLink></li>
          </ul>
        </nav>
      </div>
    </header>
  </template>
  
  <style scoped>
    header {
      @apply sticky top-0 z-50;
    }
  </style>
  