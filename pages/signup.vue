<template>
  <div class="flex h-screen">
    <div class="flex-1 flex flex-col">
      <Nav />
      <div class="container mx-auto my-8 p-4 flex justify-center">
        <div class="w-full max-w-xs">
          <h1 class="text-3xl font-bold mb-4 text-center">Sign Up</h1>
          <form @submit.prevent="register" class="space-y-4">
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="name">Name</label>
              <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" v-model="name" />
            </div>
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="email">Email</label>
              <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" v-model="email" />
            </div>
            <div class="mb-6">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="password">Password</label>
              <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" v-model="password" />
              <p class="text-red-500 text-xs italic">Please choose a password.</p>
            </div>
            <div class="flex items-center justify-between">
              <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Sign Up</button>
              <NuxtLink to="/login" class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">Already have an account? Log in</NuxtLink>
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
      password: '',
    }
  },
  methods: {
    async register() {
      // You can implement the registration logic here, such as sending a request to the server with the name, email, and password.
      console.log(`Name: ${this.name}, Email: ${this.email}, Password: ${this.password}`)
    },
  },
}
</script>