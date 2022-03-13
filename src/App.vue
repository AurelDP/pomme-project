<template>
  <!--<MainPage />-->
  <CartPage />
</template>

<script>
//import MainPage from './components/MainPage.vue'
import CartPage from './components/CartPage.vue'

export default {
  name: 'App',
  components: {
    //MainPage,
    CartPage,
  }
}
</script>

<style>
#app {
  font-family: Geneva, Verdana, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
