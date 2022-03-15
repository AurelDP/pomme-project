<template>
  <div class="container my-5">
    <div class="d-flex mb-2">
      <h3 class="fw-bold">{{ title }}</h3>
      <input type="search" class="form-control" placeholder="Search product" v-model="searchValue"/>
    </div>
    <div class="row">
      <Card
          v-for="c in cards"
          :key="c"
          class="col-12 col-lg-3 col-md-4 col-sm-6"
          :title="c.title"
          :description="c.description"
          :url="c.url"
          :price="c.price"
          :quantity="c.quantity"
      />
    </div>
  </div>
</template>

<script>
import Card from './CardComponent.vue'
import TemporaryDatabase from '../TemporaryDatabase.vue'

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
      cards: TemporaryDatabase.data().cards,
      searchValue: ""
    }
  },
  watch: {
    searchValue: function(val) {
      if (val === "")
        this.cards = TemporaryDatabase.data().cards
      else
        this.cards = this.cards.filter(c => c.title.toLowerCase().includes(val.toLowerCase()))
    }
  }
}
</script>

<style scoped>
.form-control {
  margin-left: 20px;
}
</style>