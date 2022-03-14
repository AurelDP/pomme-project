<template>
  <NavBar />
  <Info />
  <Selection @newUserProduct="addNewUserProduct" v-bind:userProducts="cartUser" />
  <hr v-if="cartUser.length > 0" class="mx-5 my-0">
  <Products v-if="cartUser.length > 0" v-bind:userProducts="cartUser" />
  <Footer />
</template>

<script>
import NavBar from '../NavBar.vue'
import Footer from '../FooterSection.vue'
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
      cartUser: []
    }
  },
  methods: {
    addNewUserProduct(product) {
      this.cartUser.push(product)
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