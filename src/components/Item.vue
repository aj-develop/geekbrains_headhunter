<template>
  <div class="vacancy" :class="{ pinned: item.pinned }">
    <div class="vacancy-block-logo">
      <img
        class="vacancy-logo"
        :src="`${item.logo_url ? item.logo_url : ''}`"
        alt=""
      />
    </div>
    <div class="vacancy-block-text">
      <div class="vacancy-name">{{ item.name }}</div>
      <div class="vacancy-salary">
        {{ salary }} <span>{{ currency }}</span>
      </div>
    </div>
    <div class="vacancy-block-icon">
      <font-awesome-icon
        :icon="delIcon"
        class="vacancy-icon"
        @click.prevent="$emit('del', item.origin_id)"
      />
      <font-awesome-icon
        :icon="pinIcon"
        class="vacancy-icon"
        @click.prevent="$emit('pin', item.origin_id, !item.pinned)"
      />
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faThumbtack, faTimesCircle } from "@fortawesome/free-solid-svg-icons";

export default {
  name: "Item",
  data() {
    return {
      pinIcon: faThumbtack,
      delIcon: faTimesCircle
    };
  },
  components: { FontAwesomeIcon },
  props: {
    item: { type: Object, default: () => ({}) },
    idx: { type: Number }
  },
  computed: {
    salary: function() {
      let str = "-";
      if (this.item.salary) {
        let arr = this.item.salary
          .substring(1, this.item.salary.length - 1)
          .split(",");
        str = arr[0] ? arr[0] : "";
        str += arr[0] && arr[1] ? "-" : "";
        str += arr[1] ? arr[1] : "";
      }
      return str;
    },
    currency: function() {
      let str = "";
      str += this.item.currency ? ` ${this.item.currency}` : "";
      return str;
    }
  }
};
</script>

<style >
</style>
