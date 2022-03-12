<template>
  <NavBar />
  <HeroVideo title="Traveling has never been easier" />
  <Cards title="Products" />
  <About />
  <Footer txt="© 2022 Copyright: pomme.com" />
</template>

<script>
import NavBar from './NavBar.vue'
import HeroVideo from './HeroVideo.vue'
import Cards from './CardsSection.vue'
import About from './AboutUs.vue'
import Footer from './FooterSection.vue'

export default {
  name: "MainPage",
  components: {
    NavBar,
    HeroVideo,
    Cards,
    About,
    Footer,
  }
}
</script>

<style scoped>

</style>