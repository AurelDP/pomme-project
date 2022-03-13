<template>
  <div class="bg-secondary bg-opacity-25">
    <form class="container py-5">
      <h3 class="fw-bold mb-4">Your information</h3>
      <div class="mb-3">
        <label for="inputAddress" class="form-label fw-bolder">Address</label>
        <input type="text" class="form-control" id="inputAddress" aria-describedby="addressHelp" placeholder="Address" required>
        <div id="addressHelp" class="form-text">This address will be used so that we can send you your order</div>
      </div>
      <div class="mb-3 row">
        <div class="col-12 col-md-4 col-sm-6">
          <label for="inputCardName" class="form-label fw-bolder">Name on credit card</label>
          <input type="text" class="form-control" id="inputCardName" aria-describedby="nameHelp" placeholder="Full name" required>
          <div id="nameHelp" class="form-text">Be sure to use the same name as the one on your credit card</div>
        </div>
        <div class="col-12 col-md-4 col-sm-6">
          <label for="inputCardNumber" class="form-label fw-bolder">Credit card number</label>
          <input type="text" class="form-control" id="inputCardNumber" placeholder="Card number" required>
        </div>
        <div class="col-12 col-md-4 col-sm-6">
          <label for="inputCardExpiration" class="form-label fw-bolder">Card expiration date</label>
          <input type="month" class="form-control" id="inputCardExpiration" placeholder="Expiration date (YYYY-MM)" required>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "InfoSection"
}
</script>

<style scoped>
input {
  border-radius: 0;
  border-bottom: 3px solid gray;
}
</style>