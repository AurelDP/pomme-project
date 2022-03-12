<template>
  <header class="hero-container d-flex align-items-center">
    <div class="black-opacity"></div>
    <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop" poster="../assets/poster.png">
      <source v-bind:src="video" type="video/mp4" />
    </video>
    <div class="text-white">
      <h1 class="display-3 fw-bolder container">{{ title }}</h1>
    </div>
  </header>
</template>

<script>
import video from '../assets/large.mp4'
export default {
  name: "HeroVideo",
  data() {
    return {
      video: video
    }
  },
  props: {
    title: String,
  }
}
</script>

<style scoped>
.hero-container {
  position: relative;
  background-color: black;
  height: 100vh;
  overflow: hidden;
}

.hero-container .black-opacity {
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: black;
  opacity: 0.5;
  z-index: 1;
}

.hero-container video {
  width: auto;
  height: auto;
  min-width: 100%;
  min-height: 100%;
  object-fit: cover;
  z-index: 0;
}

.hero-container .text-white {
  position: absolute;
  text-align: center;
  width: 100%;
  z-index: 2;
}
</style>