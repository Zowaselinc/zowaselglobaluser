<template>
  <DefaultNav>
    <div class="big-container">
      <div class="top-text">
        <h1>Order Tracking</h1>
      </div>
      <div class="big-content">
        <h3>Order Number: #3324652</h3>
        <div class="left-container">
          <div class="left-container-wrapper">
            <!-- progress bar -->
            <div
              class="progress-bar-wrapper d-flex flex-column position-relative"
            >
              <div class="progress progress-outer">
                <div
                  class="progress progress-inner"
                  :style="'width : ' + orderProgress + '%'"
                />
              </div>
              <div class="circle d-flex w-100 position-absolute">
                <div class="circle-1 circle-main">
                  <span />
                </div>
                <div class="circle-2 circle-main">
                  <span />
                </div>
                <div class="circle-3 circle-main">
                  <span />
                </div>
                <div class="circle-4 circle-main">
                  <span />
                </div>
              </div>
            </div>

            <!-- table -->
            <div class="dark-area">
              <h4>Tracking Details</h4>
              <table class="table table-borderless">
                <thead>
                  <tr>
                    <th class="text-center">Date</th>
                    <th class="text-center">Location</th>
                    <th class="text-center">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="text-center">23 october 2022</td>
                    <td class="text-center">--</td>
                    <td class="text-center">Ordered</td>
                  </tr>
                  <tr>
                    <td class="text-center">23 october 2022</td>
                    <td class="text-center">--</td>
                    <td class="text-center">Order Confirmed</td>
                  </tr>
                  <tr>
                    <td class="text-center">23 october 2022</td>
                    <td class="text-center">Zandi Village Plateau</td>
                    <td class="text-center">Shipped</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <a class="btn payment-status">Confirm Delivery</a>
          </div>
        </div>
      </div>
    </div>
  </DefaultNav>
</template>

<script>
import DefaultNav from "@/layouts/DefaultNav.vue";

export default {
  name: "TrackingOrder",
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
.top-text {
  padding: 14px 30px;
  width: 100%;
  background: #262c3f;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  h1 {
    font-size: 24px;
  }
}
.big-content {
  padding: 100px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f1f1f1;

  .left-container {
    width: 100%;

    .left-container-wrapper {
      margin-top: 65px;
      display: flex;
      flex-direction: column;
      align-items: center;

      .progress-bar-wrapper {
        gap: 15px;
        width: 80%;
        .progress {
          height: 0.8rem;
        }
        .progress-outer {
          background: #b5b4b9;

          .progress-inner {
            width: 100%;
            background: #05b050;
          }
        }

        .circle {
          justify-content: space-around;
          margin-left: 4%;
          top: -8px;

          .circle-main {
            width: 27px;
            height: 27px;
            background: #e6f7ee;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;

            span {
              width: 19.29px;
              height: 19.29px;
              background: #05b050;
              border-radius: 50%;
            }
          }
        }

        .progress-level-container {
          .levels {
            h3 {
              @include textStyles(Poppins, 800, 16px, 27px);
              color: rgba(45, 55, 72, 0.6);
              text-align: center;
            }

            p {
              @include textStyles("Maven Pro", 400, 14px, 24px);
              text-align: center;
              color: rgba(45, 55, 72, 0.6);
            }
          }
        }
      }

      h4 {
        @include textStyles("Maven Pro", 800, 24px, 32px);
        text-align: center;
        color: #000000;
        margin: 0px auto 0;
        padding: 7px 10px;
        border-bottom: 2px solid;
        width: 205px;
        height: 49px;
      }
      .dark-area {
        width: 100%;
        margin-top: 50px;
        padding-top: 25px;
        background: #fffbef;
        padding-bottom: 60px;
      }

      table.table-borderless {
        margin-top: 49px;
        width: 100%;

        tr {
          height: 50px;
        }

        th {
          @include textStyles("Maven Pro", 800, 20px, 29px);
          color: #696671;
        }

        td {
          @include textStyles("Maven Pro", 600, 16px, 24px);
          color: #696671;
        }
      }

      a.payment-status {
        width: 30%;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 7px;
        margin-top: 100px;
        background: #e6f7ee;
        letter-spacing: 0.01em;
        font-feature-settings: "liga" off;
        color: #34323b;
        text-align: center;
        @include textStyles("Maven Pro", 600, 18px, 24px);
        mix-blend-mode: normal;
        background: #e6f7ee;
        border: 1px solid #ededee;
        box-shadow: 0px 4px 8px rgba(44, 39, 56, 0.08);
        border-radius: 4px;
      }
      a.wallet {
        color: #ffffff;
        background: #05b050;
        right: 0;
        width: 45%;
      }
      #payment-state {
        background: #e6f7ee;
      }
    }

    // button group
    .table-btn {
      gap: 25px;
      margin-bottom: 233px;

      button {
        padding: 15px 20px;
      }

      .btn-purchase-order {
        border: 1px solid #05b050;
        border-radius: 5px;
        background: #ffffff;
        @include textStyles(Inter, 600, 16px, 19px);
        color: #05b050;
      }

      .btn-procceed-waybil {
        background: #05b050;
        border-radius: 5px;
        @include textStyles(Inter, 600, 16px, 19px);
        color: #ffffff;
      }
    }
  }
}
</style>
