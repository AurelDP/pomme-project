<template>
  <nav class="navbar fixed-top navbar-dark bg-dark">
    <div class="container">
      <div class="nav">
        <a href="#" class="navbar-brand">
          <img class="mb-1" src="../assets/white.png" width="25" height="25" alt="">
          Pomme
        </a>
        <ul class="nav">
          <li class="nav-item">
            <a class="nav-link" href="#">Products</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About us</a>
          </li>
        </ul>
      </div>
      <div class="navbar-right">
        <button type="button" class="btn btn-light btn-sm mx-2 px-4 btn-circle">Sign in</button>
        <button type="button" class="btn btn-dark btn-sm btn-circle">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart"
               viewBox="0 0 16 16">
            <path
                d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
          </svg>
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar"
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