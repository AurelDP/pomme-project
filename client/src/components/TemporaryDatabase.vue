<template>
  <div></div>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        { title: "ePhone 13", description: "Your new superpower", url: require("../assets/13.png"), price: 949, quantity: 187 },
        { title: "ePhone 13 Pro", description: "Oh. So. Pro.", url: require("../assets/13Pro.png"), price: 1399, quantity: 153 },
        { title: "MocBook Air", description: "Power. It's in the Air.", url: require("../assets/MacAir.png"), price: 1299, quantity: 432 },
        { title: "MocBook Pro 13''", description: "Power to go.", url: require("../assets/Mac13.png"), price: 1699, quantity: 305 },
        { title: "PomPods 3rd gen", description: "All-new with spatial audio.", url: require("../assets/AirPds.png"), price: 239, quantity: 567 },
        { title: "ePad Air", description: "Powerful. Colourful. Wonderful.", url: require("../assets/iPad air.png"), price: 779, quantity: 298 },
      ]
    }
  }
}
</script>

<style scoped>

</style>