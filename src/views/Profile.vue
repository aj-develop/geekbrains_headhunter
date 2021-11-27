<template>
  <div class="container">
    <header>
      <Header />
    </header>
    <main>
      <div class="profile">
        <h3 class="section-title">Личный кабинет</h3>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "@components/Header.vue";
import Footer from "@components/Footer.vue";

export default {
  name: "Profile",
  components: { Header, Footer }
};
</script>

<style >
</style>
