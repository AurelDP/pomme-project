<template>
  <NavBar/>
  <h1 class="container fw-bold text-danger text-center mt-5">Error 404: page not found</h1>
  <Footer class="fixed-bottom"/>
</template>

<script>
import NavBar from './NavBar.vue'
import Footer from './FooterSection.vue'

export default {
  components: {
    NavBar,
    Footer
  }
}
</script>

<style scoped>

</style>