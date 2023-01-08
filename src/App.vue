<template>
  <router-view />
  <AlertBox />
</template>

<script>

import UserService from "@/services/user";
import axios from 'axios';
import AlertBox from "@/components/AlertBox.vue";

export default {
  name: 'App',
  components:{
    AlertBox
  },
  data() {
    return {
      userData: null
    }
  },
  mounted() {
    var tokenValue = this.$store.state.authData;
    if (tokenValue && tokenValue != null) {
      axios.defaults.headers.common = {
        authorization: tokenValue.token,
      }
    } else {
      axios.defaults.headers.common = {};
    }
    if(this.$store.state.authData){
      UserService.getUser(this.$store.state.authData.key, (response) => {
      if (!response.error) {
        this.$store.dispatch('setUser', response.data)
        this.userData = this.$store.state.user;
      }else{
        this.logOut();
      }
    })
    }
  },
}
</script>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
