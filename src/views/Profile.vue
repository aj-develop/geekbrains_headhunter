<template>
  <div class="container">
    <header>
      <Header />
    </header>
    <main>
      <h2 class="profile__title">Найди вакансию своей мечты</h2>
      <Search/>
      <ItemsList />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "@components/Header.vue";
import Footer from "@components/Footer.vue";
import Search from "../components/Search";
import ItemsList from "../components/ItemsList";

export default {
  name: "Profile",
  components: {Search, Header, Footer,ItemsList }
};
</script>

<style >
.profile__title{
  text-align: center;
  padding: 10px;
}
.searchWrap{
  border: 1px solid #ccc;
}
</style>
