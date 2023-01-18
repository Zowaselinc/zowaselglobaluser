<template>
  <div class="big-container">
    <div class="content">
      <img src="@/assets/images/logos/zowasel-grey-logo.png" alt="" />
      <div class="texts">
        <h1 class="text-center">Welcome</h1>
        <p class="text-center">
          You have successfully registered with Zowasel as {{ type }}. Proceed
          to your dashboard to add team members.
        </p>
      </div>
      <button @click="openDashboard()">Go to dashboard</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "MerchantWelcome",
  data() {
    return {
      type: this.$route.params.type,
    };
  },
  methods: {
    goTo(path) {
      this.$router.push(path);
    },
    openDashboard() {
      // if(this.type == "corporate"){
      //     this.goTo('/dashboard/corporate');
      //     return 0;
      // }
      // if(this.type == "partner"){
      //     this.goTo('/dashboard/logistics');
      //     return 0;
      // }
      this.goTo("/dashboard");
    },
  },
};
</script>

<style scoped>
.big-container {
  width: 100%;
  height: 100vh;
  padding: 10%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("@/assets/images/backgrounds/fruits.png");
  background-repeat: no-repeat;
  background-size: cover;
}
.content {
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
h1 {
  font-size: 54px;
  font-weight: bold;
}
p {
  color: #2d374899;
  font-size: 16px;
}
img {
  width: 50%;
  margin-bottom: 150px;
}
.texts {
  margin-bottom: 55px;
}

button {
  background-color: #008d40;
  width: 100%;
  color: white;
  margin-top: 40px;
  padding: 15px;
  border: none;
}
</style>
