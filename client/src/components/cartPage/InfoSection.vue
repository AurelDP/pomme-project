<template>
  <div class="bg-secondary bg-opacity-10">
    <form class="container py-5" @submit="updateUserInfo">
      <h3 class="fw-bold mb-4">Your information</h3>
      <div class="mb-3">
        <label class="form-label fw-bolder">Address</label>
        <input type="text" class="form-control" id="inputAddress" aria-describedby="addressHelp" placeholder="Address" v-model="address" required>
        <div id="addressHelp" class="form-text">This address will be used so that we can send you your order</div>
      </div>
      <div class="mb-3 row">
        <div class="col-12 col-md-4 col-sm-6 mb-3">
          <label class="form-label fw-bolder">Name on credit card</label>
          <input type="text" class="form-control" id="inputCardName" aria-describedby="nameHelp" placeholder="Full name" v-model="fullName" required>
          <div id="nameHelp" class="form-text">Be sure to use the same name as the one on your credit card</div>
        </div>
        <div class="col-12 col-md-4 col-sm-6 mb-3">
          <label class="form-label fw-bolder">Credit card number</label>
          <input type="text" class="form-control" id="inputCardNumber" placeholder="Card number" v-model="cardNumber" required>
        </div>
        <div class="col-12 col-md-4 col-sm-6 mb-3">
          <label class="form-label fw-bolder">Card expiration date</label>
          <input type="month" class="form-control" id="inputCardExpiration" placeholder="Expiration date (YYYY-MM)" v-model="expirationDate" required>
        </div>
      </div>
      <button type="submit" class="btn btn-primary btn-sm px-5">Save</button>
      <div v-if="errorUpdate" class="alert alert-danger mt-3">
        An error occured while updating your information. Please try again later.
      </div>
      <div v-if="successUpdate" class="alert alert-success mt-3">
        Your information has been updated
      </div>
    </form>
  </div>
</template>

<script>
const BASE_URL = "http://localhost:8081/";

export default {
  name: "InfoSection",
  data () {
    return {
      address: "",
      fullName: "",
      cardNumber: "",
      expirationDate: "",
      successUpdate: false,
      errorUpdate: false,
      email: this.$cookies.get("email")
    }
  },
  methods: {
    async getInfo() {
      fetch(BASE_URL + "users/getUserInfo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: this.email
        })
      })
      .then(response => response.json())
      .then(data => {
        if (data.result) {
          this.address = data.result.address;
          this.fullName = data.result.creditname;
          this.cardNumber = data.result.creditnumber;
          this.expirationDate = data.result.expirationdate;
        }
      })
    },

    updateUserInfo(e) {
      fetch(BASE_URL + "users/updateUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          address: this.address,
          creditname: this.fullName,
          creditnumber: this.cardNumber,
          expirationdate: this.expirationDate,
          email: this.email,
        })
      })
      .then(res => res.json())
      .then(res => {
        if (res.result === "success")
          this.successUpdate = true;
        else
          this.errorUpdate = true;
      })
      e.preventDefault();
    }
  },
  created() {
    this.getInfo();
  },
  watch: {
    address: function() {
      this.successUpdate = false;
      this.errorUpdate = false;
    },
    fullName: function() {
      this.successUpdate = false;
      this.errorUpdate = false;
    },
    cardNumber: function() {
      this.successUpdate = false;
      this.errorUpdate = false;
    },
    expirationDate: function() {
      this.successUpdate = false;
      this.errorUpdate = false;
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