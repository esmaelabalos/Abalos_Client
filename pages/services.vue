<template>
  <div class="flex flex-col h-screen">
    <header class="flex items-center justify-between bg-[#003366] text-white p-4">
      <div class="flex items-center">
        <h1 class="text-2xl font-bold">ServiSage</h1>
      </div>
      <nav class="flex items-center">
        <NuxtLink to="/" class="mr-4">Home</NuxtLink>
        <NuxtLink to="/contact" class="mr-4">Contact</NuxtLink>
        <NuxtLink to="/services" class="mr-4">Services</NuxtLink>
        <NuxtLink to="/login" class="mr-4">Login</NuxtLink>
        <NuxtLink to="/signup" class="mr-4">Signup</NuxtLink>
        <NuxtLink to="/login" class="bg-white text-[#003366] font-bold py-2 px-4 rounded-lg hover:bg-gray-200"> Request Service </NuxtLink>
      </nav>
    </header>
    <div class="container mx-auto my-8 p-4">
      <h2 class="text-xl font-bold mb-4">Our Services</h2>
      <section class="flex flex-wrap justify-center mb-8">
        <div class="w-full md:w-1/3 p-4">
          <article class="bg-white rounded-lg shadow-md p-6">
            <h2 class="text-xl font-bold mb-2 text-[#003366]">Electrical Services</h2>
            <p class="text-gray-700 text-justify"> Our licensed electricians provide expert installation, repair, and maintenance of electrical systems, ensuring your home's safety and functionality. </p>
            <NuxtLink to="/services/electrical" class="inline-block align-baseline font-bold text-sm text-[#003366] hover:text-blue-800"> Learn More </NuxtLink>
          </article>
        </div>
        <div class="w-full md:w-1/3 p-4">
          <article class="bg-white rounded-lg shadow-md p-6">
            <h2 class="text-xl font-bold mb-2 text-[#003366]">Plumbing Services</h2>
            <p class="text-gray-700 text-justify"> Our experienced plumbers offer expert installation, repair, and maintenance of plumbing systems, ensuring your home's water and gas systems are always in top condition. </p>
            <NuxtLink to="/services/plumbing" class="inline-block align-baseline font-bold text-sm text-[#003366] hover:text-blue-800"> Learn More </NuxtLink>
          </article>
        </div>
        <div class="w-full md:w-1/3 p-4">
          <article class="bg-white rounded-lg shadow-md p-6">
            <h2 class="text-xl font-bold mb-2 text-[#003366]"> Landscaping Services </h2>
            <p class="text-gray-700 text-justify"> Our team of landscapers provides expert lawn care, gardening, and outdoor maintenance services, ensuring your home's exterior is always beautiful and well-maintained. </p>
            <NuxtLink to="/services/landscaping" class="inline-block align-baseline font-bold text-sm text-[#003366] hover:text-blue-800"> Learn More </NuxtLink>
          </article>
        </div>
        <div class="w-full md:w-1/3 p-4">
          <article class="bg-white rounded-lg shadow-md p-6">
            <h2 class="text-xl font-bold mb-2 text-[#003366]">Cleaning Services</h2>
            <p class="text-gray-700 text-justify"> Our dedicated cleaning professionals offer expert home cleaning services, ensuring your home's cleanliness and sanitation. </p>
            <NuxtLink to="/services/cleaning" class="inline-blockalign-baseline font-bold text-sm text-[#003366] hover:text-blue-800"> Learn More </NuxtLink>
          </article>
        </div>
        <div class="w-full md:w-1/3 p-4">
          <article class="bg-white rounded-lg shadow-md p-6">
            <h2 class="text-xl font-bold mb-2 text-[#003366]">Gardening Services</h2>
            <p class="text-gray-700 text-justify"> Our team of experienced gardeners provide expert gardening services, including planting, pruning, and lawn care, to help you maintain a beautiful and healthy garden. </p>
            <NuxtLink to="/services/gardening" class="inline-block align-baseline font-bold text-sm text-[#003366] hover:text-blue-800"> Learn More </NuxtLink>
          </article>
        </div>
        <div class="w-full md:w-1/3 p-4">
          <article class="bg-white rounded-lg shadow-md p-6">
            <h2 class="text-xl font-bold mb-2 text-[#003366]">Beauty Care Services</h2>
            <p class="text-gray-700 text-justify"> Our team of beauty care professionals offer expert beauty services, including hair and makeup, to help you look and feel your best. </p>
            <NuxtLink to="/services/beauty-care" class="inline-block align-baseline font-bold text-sm text-[#003366] hover:text-blue-800"> Learn More </NuxtLink>
          </article>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Services'
}
</script>

<style scoped>
</style>