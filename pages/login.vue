<template>
  <div class="flex h-screen">
    <div class="flex-1 flex flex-col">
      <Nav />
      <div class="container mx-auto my-8 p-4 mt-16 flex justify-center">
        <div class="w-full max-w-xs">
          <h1 class="text-3xl font-bold mb-4 text-center">Login</h1>
          <form @submit.prevent="login" class="space-y-4">
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="email">Email</label>
              <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" v-model="email" />
            </div>
            <div class="mb-6">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="password">Password</label>
              <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" v-model="password" />
              <p v-if="loginError" class="text-red-500 text-xs italic">{{ loginError }}</p>
            </div>
            <div class="flex items-center justify-between">
              <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Sign In</button>
              <NuxtLink to="/signup" class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">Sign Up</NuxtLink>
            </div>
            <div class="flex items-center justify-center mt-4">
              <NuxtLink to="/forgot-password" class="text-blue-500 hover:text-blue-800">Forgot Password?</NuxtLink>
            </div>
            <div class="flex items-center justify-center mt-2">
              <hr class="w-1/3 border-gray-400"> <!-- Or Divider -->
              <span class="text-gray-600 mx-2">or</span>
              <hr class="w-1/3 border-gray-400"> <!-- Or Divider -->
            </div>
            <div class="flex items-center justify-center mt-4">
              <NuxtLink to="/signup" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Create New Account</NuxtLink>
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
      email: '',
      password: '',
      loginError: ''
    }
  },
  methods: {
    async login() {
      // You can implement the login logic here, such as sending a request to the server with the email and password.
      try {
        // For example, using axios
        await this.$axios.$post('/api/auth/login', {
          email: this.email,
          password: this.password
        })
        // Navigate to the Homepage.vue page after successful login
        this.$router.push('/homepage')
      } catch (error) {
        this.loginError = error.response.data.message
      }
    }
  }
}
</script>
