<template>
  <DefaultNav>
    <div class="big-container">
      <div class="welcome-text">
        <h2>Welcome, {{ userData.user.first_name }} Logistics</h2>
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
              <th>STATUS</th>
              <th>FROM</th>
              <th>PICKUP</th>
              <th>TO</th>
              <th>DELIVERY</th>
              <th>DATE</th>
              <th />
            </thead>

            <tbody>
              <tr>
                <td scope="row">
                  <div class="colored-green">
                    <div class="green-dot" />
                    <p>Completed</p>
                  </div>
                </td>
                <td>Naziri Farms</td>
                <td>10 Adetokunmbo street,Umuahia, Abia.</td>
                <td>Havillah flour processors</td>
                <td>10 Adetokunmbo street,Umuahia, Abia.</td>
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
                <td>Naziri Farms</td>
                <td>10 Adetokunmbo street,Umuahia, Abia.</td>
                <td>Havillah flour processors</td>
                <td>10 Adetokunmbo street,Umuahia, Abia.</td>
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
                <td>Naziri Farms</td>
                <td>10 Adetokunmbo street,Umuahia, Abia.</td>
                <td>Havillah flour processors</td>
                <td>10 Adetokunmbo street,Umuahia, Abia.</td>
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
                <td>Naziri Farms</td>
                <td>10 Adetokunmbo street,Umuahia, Abia.</td>
                <td>Havillah flour processors</td>
                <td>10 Adetokunmbo street,Umuahia, Abia.</td>
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
                <td>Naziri Farms</td>
                <td>10 Adetokunmbo street,Umuahia, Abia.</td>
                <td>Havillah flour processors</td>
                <td>10 Adetokunmbo street,Umuahia, Abia.</td>
                <td>21 Oct, 2022</td>
                <td><img src="@/assets/images/vectors/verticalDots.svg" /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="row w-100">
        <div class="col-lg-12 my-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115681.29592731265!2d-77.47713270775661!3d25.0326996781907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x892f7c99b981dbc9%3A0x2aef01d3485e50d2!2sNassau%2C%20Bahamy!5e0!3m2!1spl!2spl!4v1624445118063!5m2!1spl!2spl"
            class="w-100"
            height="400"
            allowfullscreen=""
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </DefaultNav>
</template>

<script>
import DefaultNav from "@/layouts/DefaultNav.vue";
import Cards from "./components/Cards.vue";
export default {
  name: "LogisticsDashboard",
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

// .map-area {
//     margin-top: 50px;
//     margin-bottom: 50px;

//     img {
//         width: 100%;
//     }
// }
</style>
