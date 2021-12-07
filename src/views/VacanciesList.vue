<template>
  <div class="container">
    <header>
      <Header />
    </header>
    <main class="vacancies-list">
      <div class="vacancies-sort">
        <div class="vacancies-list-title">
          Фильтр вакансий
        </div>
        <div class="vacancies-sort-item" >
          <div class="sort-item-title">
            <span><font-awesome-icon :icon="angleIcon"/></span>
            дата публикации:
          </div>
          <select v-model="selectedTime" @change="sortChange">
            <option value="descendingTime">сначала новые</option>
            <option value="ascendingTime">сначала старые</option>
          </select>
        </div>
        <div class="vacancies-sort-item">
          <div class="sort-item-title">
            <span><font-awesome-icon :icon="angleIcon" /></span>
            заработная плата:
          </div>
          <select v-model="selectedSalary" @change="sortChange">
            <option value="descendingSalary">по убыванию</option>
            <option value="ascendingSalary">по возрастанию</option>
          </select>
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
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";

export default {
  name: "VacansiesList",
  data() {
    return {
      angleIcon: faCaretRight,
      selectedTime: "descendingTime",
      selectedSalary: "descendingSalary"
    };
  },
  components: { ItemsList, Header, Footer, FontAwesomeIcon },
  methods: {
    sortChange(event){
      const idx = event.target.options.selectedIndex;
      this.$store.dispatch('sortVacancies', event.target.options[idx].value);
    }
  }
};
</script>

<style >
</style>
