<template>
  <NavBar/>
  <div v-if="!this.$cookies.get('email')">
    <div class="container">
      <div class="alert alert-danger text-center mt-5">
        <strong>You are not logged in</strong>
      </div>
    </div>
    <Footer class="fixed-bottom"/>
  </div>
  <div v-else>
    <Info/>
    <Selection @newUserProduct="addNewUserProduct" v-bind:userProducts="cartUser"/>
    <hr v-if="cartUser.length > 0" class="mx-5 my-0">
    <Products v-if="cartUser.length > 0" v-bind:userProducts="cartUser" @resetUserProducts="resetCartUser"/>
    <hr v-if="havePastOrders" class="mx-5 my-0">
    <BuyhistorySection v-if="havePastOrders" v-bind:pastOrders="userPastOrders"/>
    <Footer/>
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import Footer from '../components/FooterSection.vue'
import Info from '../components/cartPage/InfoSection.vue'
import Selection from '../components/cartPage/SelectionSection.vue'
import Products from '../components/cartPage/ProductsSection.vue'
import BuyhistorySection from '../components/cartPage/BuyhistorySection.vue'

const BASE_URL = 'http://localhost:8081/';

export default {
  name: "CartPage",
  components: {
    NavBar,
    Footer,
    Info,
    Selection,
    Products,
    BuyhistorySection,
  },
  data() {
    return {
      cartUser: [],
      userPastOrders: [],
      havePastOrders: false,
    }
  },
  methods: {
    addNewUserProduct(product) {
      this.cartUser.push(product)
    },

    resetCartUser() {
      this.cartUser = [];
      this.getProducts();
    },

    async getProducts() {
      fetch(BASE_URL + 'buyhistory/getProducts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: this.$cookies.get('email'),
        }),
      })
          .then(response => response.json())
          .then(data => {
            if (data.result.length > 0) {
              this.havePastOrders = true;
              this.userPastOrders = data.result;
            }
          });
    },
  },
  created() {
    this.getProducts();
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