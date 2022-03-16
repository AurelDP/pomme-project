<template>
  <NavBar/>
  <HeroVideo title="Traveling has never been easier"/>
  <Cards title="Products" id="products"/>
  <About id="aboutus"/>
  <Footer/>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import HeroVideo from '../components/mainPage/HeroVideo.vue'
import Cards from '../components/mainPage/CardsSection.vue'
import About from '../components/mainPage/AboutUs.vue'
import Footer from '../components/FooterSection.vue'

export default {
  name: "MainPage",
  components: {
    NavBar,
    HeroVideo,
    Cards,
    About,
    Footer,
  },
}
</script>

<style scoped>

</style>