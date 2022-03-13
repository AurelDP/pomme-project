<template>
  <form class="container py-5">
    <h3 class="fw-bold mb-4">Select your product</h3>
    <div class="mb-3 row">
      <div class="col-12 col-md-4 col-sm-6 mb-3 d-flex flex-column">
        <label class="form-label fw-bolder">Product</label>
        <select class="form-select" @change="onSelectChange($event)" required>
          <option value="" hidden>Select your product</option>
          <option v-for="c in cards" :key="c" v-bind:value="c.title">{{ c.title }}</option>
        </select>
      </div>
      <div class="col-12 col-md-4 col-sm-6 mb-3">
        <label v-if="selectedProduct" class="form-label fw-bolder">Quantity (max: {{ selectedProduct.quantity }})</label>
        <label v-else class="form-label fw-bolder">Quantity</label>
        <input v-if="selectedProduct" type="number" class="form-control" placeholder="Product quantity" min="1" v-bind:max="selectedProduct.quantity" @change="onQuantityChange($event)" required>
        <input v-else type="number" class="form-control" placeholder="Product quantity (choose a product)" required disabled>
      </div>
      <div class="col-12 col-md-4 col-sm-6 mb-3 px-5 py-3 bg-secondary bg-opacity-25 d-flex justify-content-between align-items-center">
        <label class="form-label fw-bolder m-0">Price</label>
        <p v-if="quantity !== 0 && selectedProduct" class="m-0">$ {{ selectedProduct.price * quantity }}</p>
        <p v-else class="m-0">$ 0</p>
      </div>
    </div>
    <button type="submit" class="btn btn-primary btn-sm px-5">Add this product</button>
  </form>
</template>

<script>
import TemporaryDatabase from './TemporaryDatabase.vue'

export default {
  name: "SelectionSection",
  data() {
    return {
      cards: TemporaryDatabase.data().cards,
      selectedProduct: null,
      quantity: 0
    }
  },
  methods: {
    onSelectChange(event) {
      this.selectedProduct = this.cards.find(element => element.title === event.target.value);
    },

    onQuantityChange(event) {
      this.quantity = event.target.value;
    }
  }
}
</script>

<style scoped>
.py-5 {
  padding-top: 5rem !important;
  padding-bottom: 5rem !important;
}

input {
  border: 0;
  border-radius: 0;
  border-bottom: 3px solid gray;
}

.btn-primary {
  background-color: rgba(13, 110, 253, 0.85);
  border: 0;
}

.btn-primary:hover {
  background-color: #0b5ed7;
}

.form-select {
  border: 0;
  border-radius: 0;
  border-bottom: 3px solid gray;
}
</style>