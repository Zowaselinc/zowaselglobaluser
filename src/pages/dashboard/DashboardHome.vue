<template>
  <DefaultNav>
    <div class="big-container">
      <div class="welcome-text">
        <h2 v-if="userData">Welcome, {{ userData.user.first_name }}</h2>
        <p>Wallet Balance: <span>$5070</span></p>
      </div>
      <!-- imported the card components -->
      <Cards />
      <div class="chart">
        <div class="chart-text">
          <h2>Sales Analytics</h2>
          <div class="filter">Filter By | Last 12months</div>
        </div>
        <img src="@/assets/images/backgrounds/linechartmain.png" alt="" />
        <div class="dots">
          <div class="green-dot" />
          <p>Sales</p>
          <div class="red-dot" />
          <p>Revenue</p>
        </div>
      </div>

      <div class="row table-area">
        <div class="big-table">
          <div class="theading">
            <h4>Transactions</h4>
            <p>See all Transactions</p>
          </div>
          <table class="table table-borderless">
            <tbody>
              <tr>
                <td scope="row">
                  <div class="colored-green">
                    <div class="green-dot" />
                    <p>Completed</p>
                  </div>
                </td>
                <td>20 bags of Dangote Fertilizer</td>
                <td>N303,909.99</td>
                <td>21 Oct, 2022</td>
                <td><img src="@/assets/images/vectors/verticalDots.svg" /></td>
              </tr>
              <tr>
                <td scope="row">
                  <div class="colored-yellow">
                    <div class="yellow-dot" />
                    <p>Completed</p>
                  </div>
                </td>
                <td>20 bags of Dangote Fertilizer</td>
                <td>N303,909.99</td>
                <td>21 Oct, 2022</td>
                <td><img src="@/assets/images/vectors/verticalDots.svg" /></td>
              </tr>
              <tr>
                <td scope="row">
                  <div class="colored-yellow">
                    <div class="yellow-dot" />
                    <p>Completed</p>
                  </div>
                </td>
                <td>20 bags of Dangote Fertilizer</td>
                <td>N303,909.99</td>
                <td>21 Oct, 2022</td>
                <td><img src="@/assets/images/vectors/verticalDots.svg" /></td>
              </tr>
              <tr>
                <td scope="row">
                  <div class="colored-green">
                    <div class="green-dot" />
                    <p>Completed</p>
                  </div>
                </td>
                <td>20 bags of Dangote Fertilizer</td>
                <td>N303,909.99</td>
                <td>21 Oct, 2022</td>
                <td><img src="@/assets/images/vectors/verticalDots.svg" /></td>
              </tr>
              <tr>
                <td scope="row">
                  <div class="colored-green">
                    <div class="green-dot" />
                    <p>Completed</p>
                  </div>
                </td>
                <td>20 bags of Dangote Fertilizer</td>
                <td>N303,909.99</td>
                <td>21 Oct, 2022</td>
                <td><img src="@/assets/images/vectors/verticalDots.svg" /></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="small-table">
          <h4>Orders in Transit</h4>
          <div class="spaced">
            <p><span class="green-p">FROM </span> <br />Naziri Farms</p>
            <p scope="col">10,000tons of cocoa</p>
          </div>
          <div class="spaced">
            <p><span class="green-p">From </span> <br />Naziri Farms</p>
            <p>10,000tons of cocoa</p>
          </div>
          <div class="spaced">
            <p><span class="red-p">TO </span> <br />Naziri Farms</p>
            <p>10,000tons of cocoa</p>
          </div>
          <div class="spaced">
            <p><span class="green-p">From </span> <br />Naziri Farms</p>
            <p>10,000tons of cocoa</p>
          </div>
          <div class="spaced">
            <p><span class="red-p">TO </span> <br />Naziri Farms</p>
            <p>10,000tons of cocoa</p>
          </div>
          <div class="spaced">
            <p><span class="green-p">From </span> <br />Naziri Farms</p>
            <p>10,000tons of cocoa</p>
          </div>
        </div>
      </div>
    </div>
  </DefaultNav>
</template>

<script>
import DefaultNav from "@/layouts/DefaultNav.vue";
import Cards from "./components/Cards.vue";
export default {
  name: "CorporateDashboard",
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
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 47px;
  padding-top: 30px;

  h2 {
    font-family: "Maven Pro";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    color: #4a4754;
  }

  p {
    font-family: "Maven Pro";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: #4a4754;
  }

  span {
    font-family: "Maven Pro";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    color: #05b050;
  }
}

.chart {
  width: 100%;
  margin-top: 50px;
  padding: 30px;
  background: white;

  .chart-text {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;

    h2 {
      font-family: "Poppins";
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      color: #4a4754;
    }

    .filter {
      background-color: #05b050;
      padding: 8px 14px;
      color: white;
    }
  }
}

.chart img {
  width: 100%;
}

.table-area {
  width: 100%;
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 5px 0px 0px;
  gap: 8px;
}

.big-table {
  background-color: white;
  padding: 30px;
  box-sizing: border-box;
  width: 64%;

  td {
    font-family: "Maven Pro";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #4a4754;
  }
}

.small-table {
  background-color: white;
  padding: 30px;
  box-sizing: border-box;
  width: 35%;

  p {
    font-family: "Maven Pro";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #4a4754;
  }

  h4 {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    color: #4a4754;
  }
}

.theading {
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  h4 {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    color: #4a4754;
  }

  p {
    font-family: "Maven Pro";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #96949c;
  }
}

.dots {
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .green-dot {
    width: 12px;
    height: 12px;
    background-color: #05b050;
    border-radius: 50%;
  }

  .red-dot {
    width: 12px;
    height: 12px;
    background-color: #cd4647;
    border-radius: 50%;
    margin-left: 20px;
  }

  p {
    margin-left: 10px;
    margin-top: 12px;
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

.spaced {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.green-p {
  font-family: "Maven Pro";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  color: #05b050;
}

.red-p {
  font-family: "Maven Pro";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  color: #c32021;
}
</style>
