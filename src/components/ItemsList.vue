<template>
  <div class="vacancies-block">
    <Item
      v-for="(item, index) of items"
      :key="item.id"
      :item="item"
      :idx="index"
      @del="delItem"
      @pin="pinItem"
    />
  </div>
</template>

<script>
import Item from "@components/Item.vue";
import { mapGetters } from "vuex";

export default {
  name: "ItemsList",
  components: { Item },
  data() {
    return {
      key: 0,
    };
  },
  async mounted() {},
  methods: {
    async delItem(id) {
      try {
        await this.$store.dispatch("delVacancy", id);
      } catch (err) {
        console.log(err);
      }
    },
    async pinItem(id, pinned) {
      try {
        await this.$store.dispatch("pinVacancy", { id, pinned });
      } catch (err) {
        console.log(err);
      }
    },
  },
  computed: {
    ...mapGetters({ userLogin: "userLogin_getter" }),
    ...mapGetters({ items: "vacancies_getter" }),
  },
};
</script>

<style >
</style>
