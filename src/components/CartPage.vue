<template>
  <NavBar />
  <Info />
  <Selection />
  <!--<hr v-if="userCart.length > 0" class="mx-5 my-0">
  <Products v-if="userCart.length > 0" />-->
  <hr class="mx-5 my-0">
  <Products />
  <Footer txt="© 2022 Copyright: pomme.com" />
</template>

<script>
import NavBar from './NavBar.vue'
import Footer from './FooterSection.vue'
import Info from './InfoSection.vue'
import Selection from './SelectionSection.vue'
import Products from './ProductsSection.vue'

export default {
  name: "CartPage",
  components: {
    NavBar,
    Footer,
    Info,
    Selection,
    Products,
  },
  data() {
    return {
      userCart: Selection.data().userCart,
    }
  }
}
</script>

<style scoped>
hr {
  height: 2px;
  background-color: #2c3e50;
  opacity: 1;
}
</style>