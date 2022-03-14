<template>
  <div class="p-3">
    <div class="card bg-light border-light">
      <img class="card-img-top m-3" v-bind:src="url" alt="Product card image">
      <hr />
      <div class="card-body">
        <h5 class="card-title fw-bolder">{{ title }}</h5>
        <p class="card-text">{{ description }}</p>
      </div>
      <div class="card-footer text-muted d-flex flex-row justify-content-between">
        <p>${{ price }}</p>
        <p>In stock: {{ quantity }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardComponent",
  props: {
    title: String,
    description: String,
    url: String,
    price: Number,
    quantity: Number,
  }
}
</script>

<style scoped>
.card{
  box-shadow: 0 0 10px -1px rgba(0,0,0,0.15);
}

.card:hover{
  transform: scale(1.02);
  box-shadow: 0 0 20px -5px rgba(0,0,0,0.5);
}

.card {
  border-radius: 10px;
}

.card-img-top {
  width: auto;
  height: 200px;
  object-fit: contain;
}

hr {
  margin: 0 15px 0 15px;
  border: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

.card-footer p {
  margin: 0;
}
</style>