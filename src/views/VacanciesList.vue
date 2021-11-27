<template>
  <div class="container">
    <header>
      <Header />
    </header>
    <main>
      <div class="vacancies">
        <h3 class="section-title">Вакансии</h3>
        <ItemsList />
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
import ItemsList from "@components/ItemsList.vue";
import Header from "@components/Header.vue";
import Footer from "@components/Footer.vue";

export default {
  name: "VacansiesList",
  components: { ItemsList, Header, Footer },
  methods: {}
};
</script>

<style >
</style>
