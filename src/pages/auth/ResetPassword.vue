<template>
  <div class="big-container">
    <div class="left-content">
      <h1 class="text-center">Reset Password</h1>
      <p id="emailHelp" class="form-text text-muted text-center">
        Choose a new password for your account
      </p>

      <form>
        <div class="form-group">
          <label for="">New Password</label>
          <input
            id="formGroupExampleInput"
            v-model="password"
            type="password"
            class="form-control"
            placeholder="Enter new password"
          />
        </div>
        <div class="form-group">
          <label for="">Password</label>
          <input
            id="formGroupExampleInput2"
            v-model="confirmPassword"
            type="password"
            class="form-control"
            placeholder="Confirm your new password"
          />
        </div>

        <div class="buttons">
          <div class="form-group">
            <button
              type="button"
              class="btn btn-lg btn-block"
              @click="resetPassword()"
            >
              Reset Password
            </button>
          </div>

          <div class="form-group">
            <button
              type="button"
              class="btn skip btn-lg btn-block"
              @click="$router.replace('/login')"
            >
              Back to login
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
  name: "ResetPassword",
  data() {
    return {
      password: "",
      confirmPassword: "",
      token: this.$route.params.token,
    };
  },
  computed: {
    hasNumbers() {
      return /[0-9]+/.test(this.password);
    },
    hasSpecial() {
      return /[!@~#$%^.,'"&*\(\)\/]+/.test(this.password);
    },
    hasUppercase() {
      return /[A-Z]+/.test(this.password);
    },
    characterMin() {
      return this.password.length >= 8;
    },
    mustMatch() {
      return this.password == this.confirmPassword && this.password;
    },
    strength() {
      var strength = 0;
      if (this.characterMin) {
        strength += 1;
      }
      if (this.hasNumbers) {
        strength += 1;
      }
      if (this.hasUppercase) {
        strength += 1;
      }
      if (this.hasSpecial) {
        strength += 1;
      }
      return strength;
    },
  },
  mounted() {
    let vm = this;
    AuthService.verifyResetToken(this.token, (response) => {
      if (!response.status) {
        vm.$router.replace("/login");
      }
    });
  },
  methods: {
    resetPassword() {
      let vm = this;
      if (this.password == this.confirmPassword) {
        AuthService.resetPassword(
          {
            token: vm.token,
            password: vm.password,
          },
          (response) => {
            if (response.status) {
              vm.$router.push("/resetsuccess");
            }
          }
        );
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
  padding: 10% 15% 0% 15%;

  box-sizing: border-box;
}
.lines {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 20px 0px 20px 0px;
}
.line {
  border: 1px solid #b0b0b0;
  width: 30%;
  margin: -15px 10px 0px 5px;
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

.last-text {
  margin-top: 70px;
}
</style>
