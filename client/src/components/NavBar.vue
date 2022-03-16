<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <router-link to="/" class="navbar-brand">
        <img class="mb-1" src="../assets/white.png" width="25" height="25" alt="">
        Pomme
      </router-link>
      <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <div class="navbar-nav">
          <router-link class="nav-link" :to="{path: 'main', hash: '#products'}">Products</router-link>
          <router-link class="nav-link" :to="{path: 'main', hash: '#aboutus'}">About us</router-link>
        </div>
        <div class="navbar-nav ms-auto">
          <button v-if="currentRoutePath !== '/cart'" type="button" class="btn btn-light btn-sm mx-2 px-4 btn-circle" data-bs-toggle="modal" data-bs-target="#signModal">Sign in</button>
          <router-link v-else to="/">
            <button type="button" class="btn btn-light btn-sm mx-2 px-4 btn-circle">Log out</button>
          </router-link>
          <router-link to='/cart' v-if="currentRoutePath !== '/cart'">
            <button type="button" class="btn btn-dark btn-sm btn-circle">
              <i class="bi bi-cart-fill"></i>
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </nav>
  <ModalPage id="signModal"/>
</template>

<script>
import ModalPage from '../views/ModalPage.vue'
export default {
  name: "NavBar",
  components: {
    ModalPage,
  },
  methods: {
    open() {
      console.log("ok")
    }
  },
  computed: {
    currentRoutePath() {
      return this.$route.path
    }
  }
}
</script>

<style scoped>
nav {
  z-index: 10;
}

.btn-circle {
  border-radius: 50px;
}

.nav-link {
  color: white;
}

.nav-link:hover {
  color: gray;
}

.btn-light:hover {
  background-color: lightgray;
}
</style>