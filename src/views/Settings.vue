<template>
  <div class="container">
    <header>
      <Header />
    </header>
    <main>
      <h2>settings</h2>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "@components/Header.vue";
import Footer from "@components/Footer.vue";
export default {
  name: "Settings",
  components: { Header, Footer }
}
</script>

<style scoped>

</style>
