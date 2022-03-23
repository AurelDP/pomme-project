<template>
  <div class="container my-5">
    <div class="d-flex mb-2">
      <h3 class="fw-bold">{{ title }}</h3>
      <input type="search" class="form-control" placeholder="Search product" v-model="searchValue"/>
    </div>
    <div class="row" v-if="cards.length > 0">
      <Card
          v-for="c in cards"
          :key="c"
          class="col-12 col-lg-3 col-md-4 col-sm-6"
          :title="c.title"
          :description="c.description"
          :url="require('../../assets/' + c.imagename)"
          :price="c.price"
          :quantity="c.quantity"
      />
    </div>
  </div>
</template>

<script>
import Card from './CardComponent.vue'

const BASE_URL = "http://localhost:8081/";

export default {
  name: "CardsSection",
  props: {
    title: String,
  },
  components: {
    Card,
  },
  data() {
    return {
      cards: [],
      searchValue: "",
    }
  },
  watch: {
    searchValue: function (val) {
      this.fetchCards().then(() => {
        if (val !== "") {
          this.cards = this.cards.filter(card => card.name.toLowerCase().includes(val.toLowerCase()));
        }
      });
    }
  },
  methods: {
    async fetchCards() {
      const response = await fetch(BASE_URL + "products/getAllProducts");
      this.cards = await response.json();
    }
  },
  created() {
    this.fetchCards();
  }
}
</script>

<style scoped>
.form-control {
  margin-left: 20px;
}
</style>