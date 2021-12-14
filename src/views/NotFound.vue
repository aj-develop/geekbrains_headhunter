<template>
  <div class="container">
    <header>
      <Header />
    </header>
    <main>
      <div class="notfound-cnt">
        <div class="notfound-smile">
          <h1>:(</h1>
        </div>
        <div class="notfound-page">
          <div class="notfound-404">
            <h1>
            4
            <span class="notfound-0">0</span>
            4
            </h1>
          </div>
          <h3 class="notfound-text">Запрошенная страница не существует</h3>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "@components/Header.vue";
import Footer from "@components/Footer.vue";

export default {
  name: "NotFound",
  components: { Header, Footer }
}
</script>

<style>

</style>