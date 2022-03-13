<template>
  <NavBar />
  <Info />
  <hr class="mx-5 my-0">
  <Selection />
  <hr class="mx-5 my-0">
  <Footer txt="© 2022 Copyright: pomme.com" />
</template>

<script>
import NavBar from './NavBar.vue'
import Footer from './FooterSection.vue'
import Info from './InfoSection.vue'
import Selection from './SelectionSection.vue'

export default {
  name: "CartPage",
  components: {
    NavBar,
    Footer,
    Info,
    Selection,
  }
}
</script>

<style scoped>
hr {
  height: 3px;
  background-color: #2c3e50;
  opacity: 1;
}
</style>