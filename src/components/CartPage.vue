<template>
  <NavBar />
  <Info />
  <Footer txt="© 2022 Copyright: pomme.com" />
</template>

<script>
import NavBar from './NavBar.vue'
import Footer from './FooterSection.vue'
import Info from './InfoSection.vue'

export default {
  name: "CartPage",
  components: {
    NavBar,
    Footer,
    Info,
  }
}
</script>

<style scoped>

</style>