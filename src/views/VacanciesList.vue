<template>
  <div class="container">
    <header>
      <Header />
    </header>
    <main class="vacancies-list">
      <div class="vacancies-sort">
        <div class="vacancies-list-title">
          Вакансии
        </div>
      </div>
      <div class="vacancies">
        <ItemsList :type="'large'"/>
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
