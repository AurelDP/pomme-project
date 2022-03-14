<template>
  <div class="bg-secondary bg-opacity-10">
    <form class="container py-5">
      <h3 class="fw-bold mb-4">Your information</h3>
      <div class="mb-3">
        <label class="form-label fw-bolder">Address</label>
        <input type="text" class="form-control" id="inputAddress" aria-describedby="addressHelp" placeholder="Address" required>
        <div id="addressHelp" class="form-text">This address will be used so that we can send you your order</div>
      </div>
      <div class="mb-3 row">
        <div class="col-12 col-md-4 col-sm-6 mb-3">
          <label class="form-label fw-bolder">Name on credit card</label>
          <input type="text" class="form-control" id="inputCardName" aria-describedby="nameHelp" placeholder="Full name" required>
          <div id="nameHelp" class="form-text">Be sure to use the same name as the one on your credit card</div>
        </div>
        <div class="col-12 col-md-4 col-sm-6 mb-3">
          <label class="form-label fw-bolder">Credit card number</label>
          <input type="text" class="form-control" id="inputCardNumber" placeholder="Card number" required>
        </div>
        <div class="col-12 col-md-4 col-sm-6 mb-3">
          <label class="form-label fw-bolder">Card expiration date</label>
          <input type="month" class="form-control" id="inputCardExpiration" placeholder="Expiration date (YYYY-MM)" required>
        </div>
      </div>
      <button type="submit" class="btn btn-primary btn-sm px-5">Save</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "InfoSection"
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