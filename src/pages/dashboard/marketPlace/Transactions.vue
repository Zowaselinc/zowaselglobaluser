<template>
  <DefaultNav>
    <div class="big-container">
      <div class="row table-area">
        <div class="col-12 big-table">
          <div class="theading">
            <h4>Transactions</h4>
            <p>See all Transactions</p>
          </div>
          <table class="table table-borderless">
            <thead>
              <th>Transaction ID</th>
              <th>Amount</th>
              <th>Method</th>
              <th>Type</th>
              <th>Status</th>
              <th>DATE</th>
              <th />
            </thead>

            <tbody>
              <tr>
                <td>#546262645621</td>
                <td>NGN23,990</td>
                <td>Flutterwave</td>
                <td>Product</td>
                <td scope="row">
                  <div class="colored-green">
                    <div class="green-dot" />
                    <p>Completed</p>
                  </div>
                </td>
                <td>21 Oct, 2022</td>
                <td><img src="@/assets/images/vectors/verticalDots.svg" /></td>
              </tr>
              <tr>
                <td>#546262645621</td>
                <td>NGN23,990</td>
                <td>Flutterwave</td>
                <td>Product</td>
                <td scope="row">
                  <div class="colored-green">
                    <div class="green-dot" />
                    <p>Completed</p>
                  </div>
                </td>
                <td>21 Oct, 2022</td>
                <td><img src="@/assets/images/vectors/verticalDots.svg" /></td>
              </tr>
              <tr>
                <td>#546262645621</td>
                <td>NGN23,990</td>
                <td>Flutterwave</td>
                <td>Product</td>
                <td scope="row">
                  <div class="colored-yellow">
                    <div class="yellow-dot" />
                    <p>Pending</p>
                  </div>
                </td>
                <td>21 Oct, 2022</td>
                <td><img src="@/assets/images/vectors/verticalDots.svg" /></td>
              </tr>
              <tr>
                <td>#546262645621</td>
                <td>NGN23,990</td>
                <td>Flutterwave</td>
                <td>Product</td>
                <td scope="row">
                  <div class="colored-green">
                    <div class="green-dot" />
                    <p>Completed</p>
                  </div>
                </td>
                <td>21 Oct, 2022</td>
                <td><img src="@/assets/images/vectors/verticalDots.svg" /></td>
              </tr>
              <tr>
                <td>#546262645621</td>
                <td>NGN23,990</td>
                <td>Bank Payment</td>
                <td>Product</td>
                <td scope="row">
                  <div class="colored-green">
                    <div class="green-dot" />
                    <p>Completed</p>
                  </div>
                </td>
                <td>21 Oct, 2022</td>
                <td><img src="@/assets/images/vectors/verticalDots.svg" /></td>
              </tr>
              <tr>
                <td>#546262645621</td>
                <td>NGN23,990</td>
                <td>Flutterwave</td>
                <td>Product</td>
                <td scope="row">
                  <div class="colored-yellow">
                    <div class="yellow-dot" />
                    <p>Pending</p>
                  </div>
                </td>
                <td>21 Oct, 2022</td>
                <td><img src="@/assets/images/vectors/verticalDots.svg" /></td>
              </tr>
              <tr>
                <td>#546262645621</td>
                <td>NGN23,990</td>
                <td>Flutterwave</td>
                <td>Product</td>
                <td scope="row">
                  <div class="colored-yellow">
                    <div class="yellow-dot" />
                    <p>Pending</p>
                  </div>
                </td>
                <td>21 Oct, 2022</td>
                <td><img src="@/assets/images/vectors/verticalDots.svg" /></td>
              </tr>
              <tr>
                <td>#546262645621</td>
                <td>NGN23,990</td>
                <td>Bank Payment</td>
                <td>Product</td>
                <td scope="row">
                  <div class="colored-yellow">
                    <div class="yellow-dot" />
                    <p>Pending</p>
                  </div>
                </td>
                <td>21 Oct, 2022</td>
                <td><img src="@/assets/images/vectors/verticalDots.svg" /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </DefaultNav>
</template>

<script>
import DefaultNav from "@/layouts/DefaultNav.vue";

export default {
  name: "Transactions",
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
.welcome-text {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #262c3f;
  color: white;
  height: 90px;

  h2 {
    font-family: "Maven Pro";
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    color: white;
  }
}

.table-area {
  margin-top: 50px;
  display: flex;
  justify-content: space-around;
}

.big-table {
  background-color: white;
  padding: 30px;

  th {
    font-family: "Maven Pro";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    color: #4a4754;
    border-bottom: 0.7px solid #ededee;
    padding: 20px 25px;
  }

  td {
    font-family: "Maven Pro";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #696671;
    padding: 20px 25px;
  }
}

.theading {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;

  h4 {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    color: #4a4754;
  }
}

.colored-green {
  display: flex;
  height: 35px;
  width: 120px;
  align-items: center;
  justify-content: center;
  background: #e6f7ee;
  border-radius: 40px;

  .green-dot {
    width: 10px;
    height: 10px;
    background-color: #05b050;
    border-radius: 50%;
  }

  p {
    color: #05b050;
    margin-top: 15px;
    margin-left: 5px;
  }
}

.colored-yellow {
  display: flex;
  height: 35px;
  width: 120px;
  justify-content: center;
  align-items: center;
  background: #fff8e6;
  border-radius: 40px;

  .yellow-dot {
    width: 10px;
    height: 10px;
    background-color: #fab900;
    border-radius: 50%;
  }

  p {
    color: #fab900;
    margin-top: 15px;
    margin-left: 5px;
  }
}
</style>
