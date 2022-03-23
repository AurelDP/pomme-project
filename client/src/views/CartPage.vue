<template>
  <NavBar/>
  <div v-if="!this.$cookies.get('email')">
    <div class="container">
      <div class="alert alert-danger text-center mt-5">
        <strong>You are not logged in</strong>
      </div>
    </div>
  </div>
  <div v-else>
    <Info/>
    <Selection @newUserProduct="addNewUserProduct" v-bind:userProducts="cartUser"/>
    <hr v-if="cartUser.length > 0" class="mx-5 my-0">
    <Products v-if="cartUser.length > 0" v-bind:userProducts="cartUser"/>
  </div>
  <Footer class="fixed-bottom"/>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import Footer from '../components/FooterSection.vue'
import Info from '../components/cartPage/InfoSection.vue'
import Selection from '../components/cartPage/SelectionSection.vue'
import Products from '../components/cartPage/ProductsSection.vue'

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