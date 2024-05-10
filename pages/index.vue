<template>
  <div class="flex h-screen overflow-y-auto">
    <div class="flex-1 flex flex-col">
      <Nav />
      <div class="container mx-auto my-8 p-4 mt-16">
        <h1 class="text-3xl font-bold mb-4 text-[#003366]">Welcome to ServiSage</h1>
        <p class="text-lg leading-relaxed text-justify">Implementing hassle-free home care solution.</p>
        <div class="flex flex-wrap mt-8">
          <div
            v-for="(service, index) in services"
            :key="index"
            class="w-full md:w-1/3 p-4">
            <div class="bg-white rounded-lg shadow-md p-6">
              <h2 class="text-xl font-bold mb-2 text-[#003366]">{{ service.title }}</h2>
              <p class="text-gray-700 text-justify">{{ service.description }}</p>
              <NuxtLink
                :to="service.link"
                class="inline-block align-baseline font-bold text-sm text-[#003366] hover:text-blue-800">Learn More</NuxtLink>
            </div>
          </div>
        </div>
        <div class="mt-8">
          <NuxtLink to="/services" class="bg-white text-[#003366] font-bold py-2 px-4 rounded-lg hover:bg-gray-200"> View All Services </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from '~/components/nav.vue';

export default {
  components: {
    Nav
  },
  data() {
    return {
      services: [
        { title: 'Gardening', description: 'We offer professional gardening services to keep your outdoor space looking its best. Our team of experienced gardeners can handle everything from lawn care to planting and pruning.', link: '/services/gardening' },
        { title: 'Beauty Care', description: 'Our beauty care services are designed to help you look and feel your best. From hair and makeup to skincare and massage, we offer a range of services to suit your needs.', link: '/services/beauty-care' },
        { title: 'Home Service Package', description: 'Our home service package includes a range of services to help you maintain your home. From cleaning and laundry to handyman services, we have you covered.', link: '/services/home-service-package' }
      ]
    }
  }
}
</script>

<style>
.h-screen {
  min-height: 100vh;
}

.overflow-y-auto {
  overflow-y: auto;
}
</style>
