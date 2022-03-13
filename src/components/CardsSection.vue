<template>
  <div class="container my-5">
    <h3 class="fw-bold mb-2">{{ title }}</h3>
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
import TemporaryDatabase from './TemporaryDatabase.vue'

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
    }
  }
}
</script>

<style scoped>

</style>