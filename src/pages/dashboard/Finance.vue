<template>
  <DefaultNav>
    <div class="big-container">
      <div class="welcome-text">
        <h2>Welcome, {{ userData.user.first_name }}</h2>
        <p>Wallet Balance: <span>$5070</span></p>
      </div>
      <Cards />

      <div class="row table-area">
        <div class="col-12 big-table">
          <div class="theading">
            <h4>Delivery History</h4>
            <p>See all Transactions</p>
          </div>
          <table class="table table-borderless">
            <thead>
              <th>NAME</th>
              <th>INVOICE</th>
              <th>AMOUNT</th>
              <th>ISSUED DATE</th>
              <th>DUE DATE</th>
              <th>STATUS</th>
              <th />
            </thead>

            <tbody>
              <tr>
                <td>Ann Peterson</td>
                <td>564543</td>
                <td>N303,483.00</td>
                <td>21 Oct, 2022</td>
                <td>24 Nov, 2022</td>
                <td>
                  <div class="colored-green">
                    <div class="green-dot" />
                    <p>Paid</p>
                  </div>
                </td>
                <td><img src="@/assets/images/vectors/verticalDots.svg" /></td>
              </tr>
              <tr>
                <td>Ann Peterson</td>
                <td>564543</td>
                <td>N303,483.00</td>
                <td>21 Oct, 2022</td>
                <td>24 Nov, 2022</td>
                <td>
                  <div class="colored-yellow">
                    <div class="yellow-dot" />
                    <p>Due</p>
                  </div>
                </td>
                <td><img src="@/assets/images/vectors/verticalDots.svg" /></td>
              </tr>
              <tr>
                <td>Ann Peterson</td>
                <td>564543</td>
                <td>N303,483.00</td>
                <td>21 Oct, 2022</td>
                <td>24 Nov, 2022</td>
                <td>
                  <div class="colored-green">
                    <div class="green-dot" />
                    <p>Paid</p>
                  </div>
                </td>
                <td><img src="@/assets/images/vectors/verticalDots.svg" /></td>
              </tr>
              <tr>
                <td>Ann Peterson</td>
                <td>564543</td>
                <td>N303,483.00</td>
                <td>21 Oct, 2022</td>
                <td>24 Nov, 2022</td>
                <td>
                  <div class="colored-red">
                    <div class="red-dot" />
                    <p>Past Due</p>
                  </div>
                </td>
                <td><img src="@/assets/images/vectors/verticalDots.svg" /></td>
              </tr>
              <tr>
                <td>Ann Peterson</td>
                <td>564543</td>
                <td>N303,483.00</td>
                <td>21 Oct, 2022</td>
                <td>24 Nov, 2022</td>
                <td>
                  <div class="colored-green">
                    <div class="green-dot" />
                    <p>Paid</p>
                  </div>
                </td>
                <td><img src="@/assets/images/vectors/verticalDots.svg" /></td>
              </tr>
              <tr>
                <td>Ann Peterson</td>
                <td>564543</td>
                <td>N303,483.00</td>
                <td>21 Oct, 2022</td>
                <td>24 Nov, 2022</td>
                <td>
                  <div class="colored-yellow">
                    <div class="yellow-dot" />
                    <p>Due</p>
                  </div>
                </td>
                <td><img src="@/assets/images/vectors/verticalDots.svg" /></td>
              </tr>
              <tr>
                <td>Ann Peterson</td>
                <td>564543</td>
                <td>N303,483.00</td>
                <td>21 Oct, 2022</td>
                <td>24 Nov, 2022</td>
                <td>
                  <div class="colored-green">
                    <div class="green-dot" />
                    <p>Paid</p>
                  </div>
                </td>
                <td><img src="@/assets/images/vectors/verticalDots.svg" /></td>
              </tr>
              <tr>
                <td>Ann Peterson</td>
                <td>564543</td>
                <td>N303,483.00</td>
                <td>21 Oct, 2022</td>
                <td>24 Nov, 2022</td>
                <td>
                  <div class="colored-red">
                    <div class="red-dot" />
                    <p>Past Due</p>
                  </div>
                </td>
                <td><img src="@/assets/images/vectors/verticalDots.svg" /></td>
              </tr>
              <tr>
                <td>Ann Peterson</td>
                <td>564543</td>
                <td>N303,483.00</td>
                <td>21 Oct, 2022</td>
                <td>24 Nov, 2022</td>
                <td>
                  <div class="colored-red">
                    <div class="red-dot" />
                    <p>Past Due</p>
                  </div>
                </td>
                <td><img src="@/assets/images/vectors/verticalDots.svg" /></td>
              </tr>
              <tr>
                <td>Ann Peterson</td>
                <td>564543</td>
                <td>N303,483.00</td>
                <td>21 Oct, 2022</td>
                <td>24 Nov, 2022</td>
                <td>
                  <div class="colored-yellow">
                    <div class="yellow-dot" />
                    <p>Due</p>
                  </div>
                </td>
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
import Cards from "./components/Cards.vue";
export default {
  name: "FinanceDashboard",
  components: {
    DefaultNav,
    Cards,
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

  @include breakpoint-between(md, lg) {
    width: 60.5%;
  }

  @include breakpoint-between(lg, xl) {
    width: 69.5%;
  }

  @include breakpoint-between(xl, xxl) {
    width: 76%;
  }
}
.welcome-text {
  display: flex;
  justify-content: space-between;
  margin-bottom: 47px;
  padding-top: 30px;

  h2 {
    font-family: "Maven Pro";
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    color: #4a4754;
  }
  p {
    font-family: "Maven Pro";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    color: #4a4754;
  }
  span {
    font-family: "Maven Pro";
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    color: #05b050;
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
  }

  td {
    font-family: "Maven Pro";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #696671;
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
.colored-red {
  display: flex;
  height: 35px;
  width: 120px;
  justify-content: center;
  align-items: center;
  background: #f9e9e9;
  border-radius: 40px;

  .red-dot {
    width: 10px;
    height: 10px;
    background-color: #c32021;
    border-radius: 50%;
  }

  p {
    color: #c32021;
    margin-top: 15px;
    margin-left: 5px;
  }
}
</style>
