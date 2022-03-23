<template>
  <div class="modal fade" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">

        <div class="modal-header">
          <div id="sign-in-button" v-bind:class="{ 'selected-button': selected === 'Login' }"
               @click="changeLoginRegister">
            <p class="fw-bolder m-0">Login</p>
          </div>
          <div id="sign-up-button" v-bind:class="{ 'selected-button': selected === 'Register' }"
               @click="changeLoginRegister">
            <p class="fw-bolder m-0">Register</p>
          </div>
        </div>

        <form @submit="launchRequest">

          <div class="modal-body" v-if="selected === 'Login'">
            <label for="email-login" class="form-label">Email</label>
            <div class="input-group">
              <span class="input-group-text" id="email-login">
                <i class="bi bi-envelope-fill"></i>
              </span>
              <input type="text" class="form-control" placeholder="Your email" aria-describedby="email-login"
                     v-model="loginEmail" required>
            </div>

            <label for="password-login" class="form-label">Password</label>
            <div class="input-group">
              <span class="input-group-text" id="password-login">
                <i class="bi bi-key-fill"></i>
              </span>
              <input type="password" class="form-control" placeholder="Your password" aria-describedby="password-login"
                     v-model="loginPassword" required>
            </div>

            <div v-if="passwordIncorrect" class="alert alert-danger mt-3" role="alert">
              The password is incorrect
            </div>
            <div v-if="emailIncorrect" class="alert alert-danger mt-3" role="alert">
              The email is incorrect
            </div>
          </div>

          <div class="modal-body" v-else>
            <label for="email-register" class="form-label">Email</label>
            <div class="input-group">
              <span class="input-group-text" id="email-register">
                <i class="bi bi-envelope-fill"></i>
              </span>
              <input type="text" class="form-control" placeholder="Your email" aria-describedby="email-register"
                     v-model="registerEmail" required>
            </div>

            <label for="username-register" class="form-label">Username</label>
            <div class="input-group">
              <span class="input-group-text" id="username-register">
                <i class="bi bi-tag-fill"></i>
              </span>
              <input type="text" class="form-control" placeholder="Your username" aria-describedby="username-register"
                     v-model="registerUsername" required>
            </div>

            <label for="password-register" class="form-label">Password</label>
            <div class="input-group">
              <span class="input-group-text" id="password-register">
                <i class="bi bi-key-fill"></i>
              </span>
              <input type="password" class="form-control" placeholder="Your password"
                     aria-describedby="password-register" v-model="registerPassword" required>
            </div>
            <div v-if="isEmailUsed" class="mt-3 alert alert-danger" role="alert">
              This email is already used
            </div>
            <div v-if="!isEmailValid" class="mt-3 alert alert-danger" role="alert">
              This email format is not valid
            </div>
          </div>

          <div class="modal-footer">
            <button v-if="selected === 'Login'" type="submit" class="btn btn-outline-primary btn-sm btn-lg btn-block">
              Login
            </button>
            <button v-if="selected === 'Register'" type="submit"
                    class="btn btn-outline-primary btn-sm btn-lg btn-block">Register
            </button>
          </div>
        </form>

      </div>
    </div>
  </div>
</template>

<script>
const BASE_URL = "http://localhost:8081/";

export default {
  name: "ModalPage",
  data() {
    return {
      selected: "Login",
      loginPassword: "",
      loginEmail: "",
      registerUsername: "",
      registerPassword: "",
      registerEmail: "",
      isEmailUsed: false,
      isEmailValid: true,
      passwordIncorrect: false,
      emailIncorrect: false,
    }
  },
  methods: {
    changeLoginRegister() {
      if (this.selected === "Login")
        this.selected = "Register";
      else
        this.selected = "Login";
    },

    launchRequest(e) {
      if (this.selected === "Login")

        fetch(BASE_URL + "users/loginUser", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            email: this.loginEmail,
            password: this.loginPassword
          })
        })
            .then(res => res.json())
            .then(data => {
              if (data.error === "password incorrect")
                this.passwordIncorrect = true;
              else if (data.error === "email not found")
                this.emailIncorrect = true;
              else {
                this.$cookies.set("email", data.success);
                document.getElementsByClassName("fade")[0].click();
                e.target.reset();
                this.$emit("onLogin");
              }
            })

      else {

        if (!/\S+@\S+\.\S+/.test(this.registerEmail))
          this.isEmailValid = false;

        if (this.isEmailValid)
          fetch(BASE_URL + "users/checkEmailAlreadyUsed/" + this.registerEmail)
              .then(res => res.json())
              .then(res => {
                if (!res) {

                  fetch(BASE_URL + "users/registerUser", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                      email: this.registerEmail,
                      username: this.registerUsername,
                      password: this.registerPassword
                    })
                  })
                      .then(res => res.json())
                      .then(res => {
                        if (res.success) {
                          this.selected = "Login";
                          document.getElementsByClassName("fade")[0].click();
                          e.target.reset();
                        }
                      })
                      .catch(err => console.log(err));
                } else
                  this.isEmailUsed = true;
              })
      }
      e.preventDefault();
    }
  },
  watch: {
    registerEmail: function () {
      if (this.isEmailUsed)
        this.isEmailUsed = false;

      if (!this.isEmailValid)
        this.isEmailValid = true;
    },

    loginPassword: function () {
      if (this.passwordIncorrect)
        this.passwordIncorrect = false;
    },

    loginEmail: function () {
      if (this.emailIncorrect)
        this.emailIncorrect = false;
    }
  }
}
</script>

<style scoped>
.modal-content {
  border: 0;
  border-radius: 0;
  background-color: transparent;
  padding: 0;
  margin: 0;
}

.modal-header {
  margin-left: 2rem;
  margin-right: 2rem;
  padding: 0;
  border: 0;
  border-radius: 10px;
  z-index: 10;
  display: flex;
  flex-direction: row;
}

#sign-in-button, #sign-up-button {
  padding: 15px;
  background-color: #d0d0d0;
  width: 100%;
  transition: 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
}

#sign-in-button:hover, #sign-up-button:hover {
  background-color: #00b3ff !important;
  cursor: pointer;
  transition: 0.3s;
  color: white !important;
}

#sign-in-button {
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
}

#sign-up-button {
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
}

.selected-button {
  background-color: #3dc1ff !important;
  color: white !important;
}

.modal-body, .modal-footer {
  position: relative;
  top: -25px;
  background-color: white;
}

.modal-body {
  padding: 40px 30px 30px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.modal-footer {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}

button {
  width: 100%;
  border-radius: 50px;
}
</style>