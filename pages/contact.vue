<template>
  <div class="flex h-screen">
    <div class="flex-1 flex flex-col">
      <Nav />
      <div class="container mx-auto my-8 p-4 mt-16 flex justify-center">
        <div class="w-full max-w-xs">
          <h1 class="text-3xl font-bold mb-4 text-center">Contact Us</h1>
          <form @submit.prevent="submitForm" class="space-y-4">
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="name">Name</label>
              <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" v-model="name" />
            </div>
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="email">Email</label>
              <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" v-model="email" />
            </div>
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="message">Message</label>
              <textarea class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" rows="4" v-model="message"></textarea>
            </div>
            <div class="flex items-center justify-between">
              <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Send</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from '~/components/Nav.vue'

export default {
  components: {
    Nav
  },
  data() {
    return {
      name: '',
      email: '',
      message: ''
    }
  },
  methods: {
    submitForm() {
      // You can implement the form submission logic here, such as sending a request to the server with the form data.
      console.log(`Name: ${this.name}, Email: ${this.email}, Message: ${this.message}`)
    },
  },
}
</script>