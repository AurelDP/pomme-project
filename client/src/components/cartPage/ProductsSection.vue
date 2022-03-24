<template>
  <div class="container py-5">
    <h3 class="fw-bold mb-4">Your products</h3>
    <div v-for="card in userProducts" :key="card" class="bg-secondary bg-opacity-10 p-4 mb-3 d-flex justify-content-between">
      <b class="m-0">{{ card.title }}</b>
      <p class="m-0"><b>Quantity:</b> {{ card.quantity }}</p>
    </div>
    <button type="button" class="btn btn-primary btn-sm px-5 mt-3" @click="buyProducts">Place the order</button>
  </div>
</template>

<script>
const BASE_URL = 'http://localhost:8081/';
export default {
  name: "ProductsSection",
  props: {
    userProducts: Object,
  },
  methods: {
    async buyProducts() {
      fetch(BASE_URL + 'buyhistory/addProducts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: this.$cookies.get('email'),
          userProducts: this.userProducts,
        }),
      })
        .then(response => response.json())
        .then(data => {
          if (data.status === 'success') {
            this.$emit('resetUserProducts');
          }
        });
    },
  },
}
</script>

<style scoped>
.py-5 {
  padding-top: 5rem !important;
  padding-bottom: 5rem !important;
}

.bg-secondary {
  border-bottom: 2px solid gray;
}

.btn-primary {
  background-color: rgba(13, 110, 253, 0.85);
  border: 0;
}

.btn-primary:hover {
  background-color: #0b5ed7;
}
</style>