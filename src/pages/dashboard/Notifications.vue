<template>
  <DefaultNav>
    <div class="big-container">
      <div class="top-section">
        <h2>Notifications</h2>
      </div>
      <div class="button-section">
        <button class="gren-btn">Offer</button>
        <button class="">Auction</button>
        <button class="">request</button>
      </div>

      <div class="notice">
        <div class="left-notice">
          <p>Kakaki Inc. sent you an offer on Irish potato</p>
          <small>Jan 5 09:45</small>
        </div>
        <div class="right-notice">
          <a href="#">View</a>
        </div>
      </div>
      <div class="notice">
        <div class="left-notice">
          <p>Kakaki Inc. sent you an offer on Irish potato</p>
          <small>Jan 5 09:45</small>
        </div>
        <div class="right-notice">
          <a href="#">View</a>
        </div>
      </div>
      <div class="notice">
        <div class="left-notice">
          <p>Kakaki Inc. sent you an offer on Irish potato</p>
          <small>Jan 5 09:45</small>
        </div>
        <div class="right-notice">
          <a href="#">View</a>
        </div>
      </div>
      <div class="notice">
        <div class="left-notice">
          <p>Kakaki Inc. sent you an offer on Irish potato</p>
          <small>Jan 5 09:45</small>
        </div>
        <div class="right-notice">
          <a href="#">View</a>
        </div>
      </div>
      <div class="notice">
        <div class="left-notice">
          <p>Kakaki Inc. sent you an offer on Irish potato</p>
          <small>Jan 5 09:45</small>
        </div>
        <div class="right-notice">
          <a href="#">View</a>
        </div>
      </div>
      <div class="notice">
        <div class="left-notice">
          <p>Kakaki Inc. sent you an offer on Irish potato</p>
          <small>Jan 5 09:45</small>
        </div>
        <div class="right-notice">
          <a href="#">View</a>
        </div>
      </div>
    </div>
  </DefaultNav>
</template>

<script>
import DefaultNav from "@/layouts/DefaultNav.vue";
export default {
  name: "Notifications",
  components: {
    DefaultNav,
  },
};
</script>

<style lang="scss" scoped>
.big-container {
  width: 100%;
  height: auto;
  background: #f5f5f5;
  display: flex;
  flex-direction: column;
  padding: 1% 5% 2% 5%;
}

.top-section {
  display: flex;
  align-items: center;
  margin-top: 20px;

  img {
    width: 30px;
    height: 30px;
  }

  h2 {
    margin-left: 20px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    color: #4a4754;
  }
}
.button-section {
  margin-top: 50px;
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;

  .dash {
    width: 23px;
    border-bottom: 2px solid #b5b4b9;
  }
  button {
    padding: 14.4715px 43.4146px;
    border: 1px solid #696671;
    border-radius: 50px;
  }
  .gren-btn {
    background: #05b050;
    border: none;
    color: white;
  }
}

.notice {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 83px;
  background: #ffffff;
  padding: 15px 50px 15px 30px;
  border-radius: 4px;
  margin-bottom: 15px;

  p {
    font-family: "Maven Pro";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    color: #34323b;
    mix-blend-mode: normal;
    opacity: 0.86;
    margin: 0px;
  }
  small {
    font-family: "Lato";
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    color: #b5b4b9;
  }
  a {
    text-decoration: none;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    color: #05b050;
    mix-blend-mode: normal;
    opacity: 0.86;
  }
}
</style>
