<template>
  <DefaultNav>
    <div class="big-container">
      <div class="row big-contents">
        <div class="col">
          <div class="card carded">
            <h2>Gender</h2>
            <div class="texts">
              <p>Weight: 4</p>
              <p>14.8/100</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card carded">
            <h2>Age</h2>
            <div class="texts">
              <p>Weight: 4</p>
              <p>14.8/100</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card carded">
            <h2>Gender</h2>
            <div class="texts">
              <p>Weight: 4</p>
              <p>14.8/100</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card carded">
            <h2>Gender</h2>
            <div class="texts">
              <p>Weight: 4</p>
              <p>14.8/100</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card carded">
            <h2>Gender</h2>
            <div class="texts">
              <p>Weight: 4</p>
              <p>14.8/100</p>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card carded">
            <h2>Gender</h2>
            <div class="texts">
              <p>Weight: 4</p>
              <p>14.8/100</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card carded">
            <h2>Gender</h2>
            <div class="texts">
              <p>Weight: 4</p>
              <p>14.8/100</p>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card carded">
            <h2>Gender</h2>
            <div class="texts">
              <p>Weight: 4</p>
              <p>14.8/100</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card carded">
            <h2>Gender</h2>
            <div class="texts">
              <p>Weight: 4</p>
              <p>14.8/100</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card carded">
            <h2>Gender</h2>
            <div class="texts">
              <p>Weight: 4</p>
              <p>14.8/100</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card carded">
            <h2>Gender</h2>
            <div class="texts">
              <p>Weight: 4</p>
              <p>14.8/100</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card carded">
            <h2>Gender</h2>
            <div class="texts">
              <p>Weight: 4</p>
              <p>14.8/100</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </DefaultNav>
</template>

<script>
import DefaultNav from "@/layouts/DefaultNav.vue";

export default {
  name: "CreditScoring",
  components: {
    DefaultNav,
  },
  data() {
    return {
      userData: this.$store.state.user,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";

.big-container {
  width: 100%;
  height: auto;
  background: #f5f5f5;
  display: flex;
  flex-direction: column;
  padding: 1% 5% 2% 5%;
  overflow-y: scroll;

  // @include breakpoint-between(md, lg) {
  //     width: 60.5%;
  // }

  // @include breakpoint-between(lg, xl) {
  //     width: 69.5%;
  // }

  // @include breakpoint-between(xl, xxl) {
  //     width: 76%;
  // }
}

.carded {
  width: 235px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 18px 20px 15px;
  margin-top: 20px;
  border-left: 1px solid #05b050;

  p {
    font-family: "Maven Pro";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #96949c;
  }

  .total-p {
    font-family: "Maven Pro";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    color: #4a4754;
  }

  .input-p {
    font-family: "Maven Pro";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    color: #05b050;
  }

  .sold-p {
    font-family: "Maven Pro";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    color: #3498db;
  }

  .offers-p {
    font-family: "Maven Pro";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    color: #cd4647;
  }

  .invoices-p {
    font-family: "Maven Pro";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    color: #fbc52b;
  }
}
.texts {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.big-contents {
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  align-items: left;
}
</style>
