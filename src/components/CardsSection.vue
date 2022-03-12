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
      cards: [
        { title: "iPhone 13", description: "Your new superpower", url: require("../assets/13.png"), price: 949, quantity: 187 },
        { title: "iPhone 13 Pro", description: "Oh. So. Pro.", url: require("../assets/13Pro.png"), price: 1399, quantity: 153 },
        { title: "MacBook Air", description: "Power. It's in the Air.", url: require("../assets/MacAir.png"), price: 1299, quantity: 432 },
        { title: "MacBook Pro 13''", description: "Power to go.", url: require("../assets/Mac13.png"), price: 1699, quantity: 305 },
        { title: "AirPods 3rd gen", description: "All-new with spatial audio.", url: require("../assets/AirPds.png"), price: 239, quantity: 567 },
        { title: "iPad Air", description: "Powerful. Colourful. Wonderful.", url: require("../assets/iPad air.png"), price: 779, quantity: 298 },
      ]
    }
  }
}
</script>

<style scoped>

</style>