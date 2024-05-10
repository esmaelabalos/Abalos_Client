<template>
  <div class="homepage">
    <header>
      <Nav />
    </header>
    <main>
      <h1>Welcome to ServiceSage</h1>
      <p>This is the homepage of ServiceSage system.</p>
    </main>
    <footer>
      <p>&copy; 2024 ServiceSage</p>
    </footer>
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";

export default {
  name: "Homepage",
  components: {
    Nav
  }
};
</script>

<style scoped>
.homepage {
  max-width: 800px;
  margin: 40px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

header {
  background-color: #333;
  color: #fff;
  padding: 10px;
  text-align: center;
}

main {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

footer {
  background-color: #333;
  color: #fff;
  padding: 10px;
  text-align: center;
  clear: both;
}
</style>