<template>
  <NavBar />
  <HeroVideo title="Traveling has never been easier" />
</template>

<script>
import NavBar from './components/NavBar.vue'
import HeroVideo from './components/HeroVideo.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    HeroVideo,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
