<template>
  <DefaultNav>
    <div v-if="order" class="big-container">
      <div class="page-header d-flex justify-content-center align-items-center">
        <h1 v-if="step == 1">Order Summary</h1>
        <!-- for waybill details -->
        <div v-if="step == 2" :class="['waybills', 'w-100']">
          <a class="arrow-left-img" @click="previouStep()">
            <img
              class="img-fluid"
              src="@/assets/images/vectors/ArrowLeft.svg"
            />
          </a>
          <h1>Waybill Details</h1>
          <div v-if="wayBillStep" class="pages">{{ wayBillStep }} of 2</div>
        </div>
      </div>
      <!--body container -->
      <div class="transaction-sumary-container d-flex flex-row">
        <!-- left -->
        <div class="left-container">
          <div class="left-container-wrapper">
            <!-- table for transactions details -->
            <div class="transactin-details d-flex flex-column">
              <div class="table-rows table-row-first">
                <div>Crop Type:</div>
                <div>{{ order.products[0].subcategory.name }}</div>
              </div>
              <div class="table-rows">
                <div class="quality-spec">Quality Specs</div>
              </div>
              <div class="table-rows">
                <div>Offer Type:</div>
                <div>Basis</div>
              </div>
              <div class="table-rows">
                <div>Crop Quantity:</div>
                <div>{{ specification.qty }} MT</div>
              </div>
              <div class="table-rows">
                <div>Delivery Window:</div>
                <div>Dec 1 - Dec 31 2022</div>
              </div>
              <div class="table-rows">
                <div>Buyer Details:</div>
                <div>
                  {{ order.buyer.first_name + " " + order.buyer.last_name }}
                </div>
              </div>
              <div class="table-rows">
                <div>Accepted Date:</div>
                <div>{{ orderDate.toDateString() }}</div>
              </div>
              <div class="table-rows">
                <div>Seller Details:</div>
                <div>
                  {{
                    order.products[0].user.first_name +
                    " " +
                    order.products[0].user.last_name
                  }}
                </div>
              </div>
              <div v-if="false" class="table-rows">
                <div>Transaction ID:</div>
                <div>2SCM88S</div>
              </div>
              <div v-if="false" id="tlast" class="table-rows tlast">
                <div>Agreement ID:</div>
                <div>MVWD83BC38L</div>
              </div>
            </div>
            <div class="d-grid table-btn">
              <button v-if="false" class="btn btn-purchase-order" type="button">
                View purchase order
              </button>
              <!-- transaction flow buyers view -->
              <button
                v-if="false"
                :class="['btn', 'btn-procceed-waybil']"
                type="button"
                @click="nextStep()"
              >
                Click to proceed
              </button>

              <!-- end -->
              <button
                v-if="isSeller && !order.waybill_details"
                :class="[
                  'btn',
                  'btn-procceed-waybil',
                  'mb-5',
                  step == 2 ? 'active-display-none' : 'active-display-block',
                ]"
                type="button"
                @click="nextStep()"
              >
                Proceed to waybill
              </button>
              <button
                v-if="isSeller && order.waybill_details"
                :class="[
                  'btn',
                  'btn-procceed-waybil',
                  'mb-5',
                  step == 2 ? 'active-display-none' : 'active-display-block',
                ]"
                type="button"
                @click="
                  $router.push({
                    name: 'OrderTracking',
                    params: { order: order.order_hash },
                  })
                "
              >
                View waybill details
              </button>
              <!-- for corporates view -->
              <a
                v-if="
                  isBuyer &&
                  order.payment_status == 'UNPAID' &&
                  payment != 'after_delivery'
                "
                :href="'/dashboard/marketplace/payments/' + $route.params.order"
                :class="[
                  'btn',
                  'coperate-btn',
                  'btn-procceed-waybil',
                  step == 2 ? 'active-display-none' : 'active-display-block',
                ]"
                type="button"
                >Proceed to payment
              </a>

              <a
                v-if="
                  isBuyer &&
                  order.payment_status == 'UNPAID' &&
                  payment == 'after_delivery'
                "
                :href="
                  '/dashboard/marketplace/' + $route.params.order + '/tracking'
                "
                :class="[
                  'btn',
                  'coperate-btn',
                  'btn-procceed-waybil',
                  step == 2 ? 'active-display-none' : 'active-display-block',
                ]"
                type="button"
                >Proceed
              </a>
              <a
                v-if="
                  isBuyer &&
                  order.payment_status != 'UNPAID' &&
                  order.waybill_details
                "
                href="javascript:void(0)"
                :class="[
                  'btn',
                  'coperate-btn',
                  'btn-procceed-waybil',
                  'mb-4',
                  step == 2 ? 'active-display-none' : 'active-display-block',
                ]"
                type="button"
                @click="
                  $router.push({
                    name: 'OrderTracking',
                    params: { order: order.order_hash },
                  })
                "
                >Track Order
              </a>
              <a
                v-if="isBuyer && order.amount_due && order.amount_due != 0"
                :href="'/dashboard/marketplace/payments/' + $route.params.order"
                :class="[
                  'btn',
                  'coperate-btn',
                  'btn-procceed-waybil',
                  step == 2 ? 'active-display-none' : 'active-display-block',
                ]"
                type="button"
              >
                Complete Payment
              </a>
            </div>
          </div>
        </div>
        <!-- right -->
        <div class="right-container d-flex justify-content-center">
          <div class="left-container-wrapper">
            <!-- header tabs -->
            <div
              :class="[
                'right-header',
                'g-0',
                step != 1 ? 'active-display-none' : 'active-display-block',
              ]"
            >
              <div
                :class="[
                  'price-details',
                  activeTab == 'pricingdetails' ? 'active-Tab' : '',
                ]"
                @click="changeTab('pricingdetails')"
              >
                Pricing Details
              </div>
              <div
                :class="[
                  'full-spec',
                  activeTab == 'fullspec' ? 'active-Tab' : '',
                ]"
                @click="changeTab('fullspec')"
              >
                Full specification
              </div>
              <div
                :class="[
                  'purchase-order',
                  activeTab == 'purchaseorder' ? 'active-Tab' : '',
                ]"
                @click="changeTab('purchaseorder')"
              >
                Purchase Order
              </div>
            </div>
            <!-- pricing Details -->
            <PricingDetails
              v-if="activeTab == 'pricingdetails' && step == 1"
              :order="order"
              :set-payment-mode="setPayment"
              :set-payment-percent="setPaymentPercent"
            />
            <FullSpecification
              v-if="activeTab == 'fullspec' && step == 1"
              :order="order"
            />
            <PurchaseOrder
              v-if="activeTab == 'purchaseorder' && step == 1"
              :order="order"
            />
            <WaybillDetails
              v-if="step == 2 && isMerchant"
              ref="wayBill"
              :order="order"
              :update-step="updateWaybill"
            />
          </div>
        </div>
      </div>
    </div>
  </DefaultNav>
</template>

<script>
import PricingDetails from "@/pages/dashboard/marketPlace/checkout/components/PricingDetails.vue";
import FullSpecification from "@/pages/dashboard/marketPlace/checkout/components/FullSpecification.vue";
import PurchaseOrder from "@/pages/dashboard/marketPlace/checkout/components/PurchaseOrder.vue";
import WaybillDetails from "@/pages/dashboard/marketPlace/checkout/components/WaybillDetails.vue";
import DefaultNav from "@/layouts/DefaultNav.vue";
import MarketPlaceService from "@/services/marketplace";
import { windowWhen } from "rxjs";

export default {
  name: "CardDetails",
  components: {
    DefaultNav,
    PricingDetails,
    FullSpecification,
    PurchaseOrder,
    WaybillDetails,
  },
  data() {
    return {};
  },
  data() {
    return {
      activeTab: "pricingdetails",
      step: 1,
      wayBillStep: 1,
      order: null,
      payment: "full",
      paymentPercent: null,
    };
  },
  computed: {
    wayBill() {
      return this.$refs.wayBill;
    },
    specification() {
      return this.order.negotiation
        ? this.order.negotiation.specification
        : this.order.products[0].specification;
    },
    orderDate() {
      return new Date(this.order.created_at);
    },
  },
  mounted() {
    this.getOrder(this.$route.params.order);
    window.localStorage.setItem("paymentPercent", "null");
  },
  methods: {
    changeTab(tab) {
      this.activeTab = tab;
    },
    nextStep() {
      this.step++;
    },
    previouStep() {
      if (this.step == 2) {
        if (this.$refs.wayBill.step == 2) {
          this.$refs.wayBill.previousStep();
          return;
        }
      }
      this.step--;
    },
    updateWaybill(step) {
      this.wayBillStep = step;
    },
    setPayment(type) {
      this.payment = type;
      if (this.payment != "advance") {
        this.paymentPercent = null;
        window.localStorage.setItem("paymentPercent", "null");
      } else {
        this.paymentPercent = 50;
        window.localStorage.setItem("paymentPercent", 50);
      }
    },
    setPaymentPercent(percent) {
      this.paymentPercent = percent;
      window.localStorage.setItem("paymentPercent", percent);
    },
    getOrder(order) {
      MarketPlaceService.getOrder(order, (response) => {
        var order = response.data;
        order.products = JSON.parse(order.products);
        this.order = order;
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
  overflow-y: scroll;
  @include breakpoint-between(md, lg) {
    min-width: 60.5%;
  }

  @include breakpoint-between(lg, xl) {
    min-width: 69.5%;
  }

  @include breakpoint-between(xl, xxl) {
    min-width: 76%;
  }
}

.active-display-none {
  display: none !important;
}

.active-display-block {
  display: block;
}

.page-header {
  width: 100%;
  padding: 14px 30px;
  background: #262c3f;

  h1 {
    @include textStyles(Poppins, 700, 24px, 120%);
    color: #ffffff;
  }

  .waybills {
    margin-inline: 6.595% 4.58%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1 {
      font-size: 18px;
    }
    .arrow-left-img {
      width: 22px;
      height: 18px;
    }

    .pages {
      cursor: pointer;
      margin-right: 6%;
      text-transform: capitalize;
      color: #ffffff;
      @include textStyles(Poppins, 700, 18px, 28px);
    }
  }
}

.transaction-sumary-container {
  width: 100%;

  .left-container {
    background: #ffffff;
    width: 50%;

    .left-container-wrapper {
      margin-inline: 8%;
      margin-top: 65px;
    }

    div.transactin-details {
      div#tlast.table-rows {
        margin-bottom: 57px;
      }

      .table-rows {
        position: relative;
        display: flex;
        flex-direction: row;
        margin-bottom: 20px;

        > div {
          &:last-child:not(.quality-spec) {
            position: absolute;
            right: 0;
          }

          &:nth-of-type(1) {
            @include textStyles(Poppins, 800, 14px, 33px);
            color: rgba(45, 55, 72, 0.6);
          }

          &:nth-of-type(2) {
            @include textStyles(Poppins, 500, 14px, 29px);
            color: #696671;
          }
        }
      }
    }

    // button group
    .table-btn {
      gap: 25px;
      // margin-bottom: 100px;

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

      // toggle
      .active-display-none {
        display: none;
      }

      .active-display-block {
        display: block;
      }

      .coperate-btn {
        padding: 15px 20px;
      }
    }
  }

  .right-container {
    background: #f5f5f5;
    width: 50%;

    .left-container-wrapper {
      margin-inline: 8%;
      margin-top: 65px;
      width: 80%;

      .right-header {
        display: flex;
        border-radius: 8.91px;
        background: rgba(118, 118, 128, 0.17);
        padding: 1.5px;

        div {
          @include flexed-Container;
          width: 33.3%;
          height: 44px;
          cursor: pointer !important;
        }

        // toggle
        .active-Tab {
          border: 0.5px solid rgba(0, 0, 0, 0.04);
          box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.12),
            0px 3px 1px rgba(0, 0, 0, 0.04);
          border-radius: 6.93px;
          background: #262c3f;
          color: #ffffff !important;
        }

        .price-details {
          color: #262c3f;
          @include textStyles(Inter, 600, 14.5px, 19px);
        }

        .full-spec {
          color: #262c3f;
          @include textStyles(Inter, 600, 14.5px, 19px);
        }

        .purchase-order {
          color: #262c3f;
          @include textStyles(Inter, 600, 14.5px, 19px);
        }
      }
    }
  }
}
</style>
