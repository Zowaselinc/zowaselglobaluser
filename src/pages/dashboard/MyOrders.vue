<template>
  <DefaultNav>
    <div class="big-container">
      <div class="row table-area">
        <div class="col-12 big-table">
          <div class="theading">
            <h4>My Orders</h4>
          </div>
          <table class="table table-borderless">
            <thead>
              <th>Date</th>
              <th>Order ID</th>
              <th>Amount</th>
              <th>Payment Status</th>
              <th>Shipping Status</th>
              <th>Action</th>
            </thead>

            <tbody>
              <tr v-for="order in orders" :key="order.id">
                <td>{{ order.created_at }}</td>
                <td>{{ order.order_hash }}</td>
                <td>{{ order.total }}</td>
                <td>{{ order.payment_status }}</td>
                <td v-if="decodeTrackingData(order).delivered" scope="row">
                  <div class="colored-green">
                    <div class="green-dot" />
                    <p>Delivered</p>
                  </div>
                </td>
                <td v-else scope="row">
                  <div class="colored-yellow">
                    <div class="yellow-dot" />
                    <p>In transit</p>
                  </div>
                </td>
                <td>
                  <a
                    href="javascript:void(0)"
                    class="view"
                    @click="openOrder(order)"
                    >View</a
                  >
                </td>
              </tr>

              <!-- <tr>
                                 <td>23, Jan, 2023</td>
                                <td>#34427633</td>
                                <td>Green Peas</td>
                                <td>NGN32,765</td>
                                <td>Half payment</td>
                                
                                <td><a href="" class="view">View</a></td>
                            </tr> -->
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </DefaultNav>
</template>

<script>
import DefaultNav from "@/layouts/DefaultNav.vue";
import MarketPlaceService from "@/services/marketplace";

export default {
  name: "MyOrders",

  components: {
    DefaultNav,
  },
  data() {
    return {
      userData: this.$store.state.user,
      orders: [],
    };
  },
  mounted() {
    this.getOrder();
  },

  methods: {
    getOrder(order) {
      MarketPlaceService.getOrders(this.userData.user_id, (response) => {
        if (response && response.error == false) {
          this.orders = response.data;
          // console.log(JSON.parse(this.orders[0].products))
        }
      });
    },
    decodeTrackingData(order) {
      return order.tracking_details ? JSON.parse(order.tracking_details) : {};
    },
    openOrder(order) {
      this.$router.push({
        name: "OrderSummary",
        params: { order: order.order_hash },
      });
    },
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
.view {
  border: none;
  padding: 5px 10px;
  background: white;
  box-shadow: 0px 2px 4px rgba(44, 39, 56, 0.08),
    0px 4px 8px rgba(44, 39, 56, 0.08);
  border-radius: 4px;
  font-family: "Maven Pro";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 147%;
  color: #05b050;
  border: 1px solid #05b050;
}
</style>
