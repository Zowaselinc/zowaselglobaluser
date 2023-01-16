<template>
  <div class="big-container">
    <div class="left-content">
      <h1 class="text-center">Forgot Password</h1>
      <p id="emailHelp" class="form-text text-muted text-center">
        Enter the email you used to create your account so we can send you
        instructions on how to reset your password.
      </p>

      <form>
        <div class="form-group">
          <label for="">Email</label>
          <input
            id="formGroupExampleInput"
            v-model="email"
            type="email"
            class="form-control"
            placeholder="Enter your email"
          />
        </div>

        <div class="buttons">
          <div class="form-group">
            <button
              type="button"
              class="btn btn-lg btn-block"
              @click="sendMail()"
            >
              Send
            </button>
          </div>

          <div class="form-group">
            <button
              type="button"
              class="btn skip btn-lg btn-block"
              @click="$router.replace('/login')"
            >
              Back to Login
            </button>
          </div>
        </div>
      </form>
    </div>
    <div class="right-content">
      <img src="@/assets/images/backgrounds/right-side.png" alt="" />
    </div>
  </div>
</template>

<script>
import AuthService from "@/services/auth";
export default {
  name: "ForgotPassword",
  data() {
    return {
      email: "",
    };
  },
  methods: {
    sendMail() {
      let vm = this;
      if (this.email) {
        AuthService.sendResetEmail(this.email, (response) => {
          if (response.status) {
            window.localStorage.setItem("resetEmail", vm.email);
            vm.$router.push("/checkemail");
          }
        });
      }
    },
  },
};
</script>

<style scoped>
.big-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
}
.left-content {
  width: 65%;
  height: 100%;
  padding: 10% 12% 0% 12%;

  box-sizing: border-box;
}
form {
  margin-top: 10%;
}
input {
  padding: 10px;
}

.buttons {
  margin-top: 50px;
}
button {
  background-color: #008d40;
  width: 100%;
  color: white;
}
.skip {
  background: #2d3748;
  margin-top: 30px;
}
.form-group {
  margin-bottom: 15px;
}

.right-content {
  width: 35%;
  height: 100vh;
}
.right-content img {
  width: 100%;
  height: 100%;
}
</style>
