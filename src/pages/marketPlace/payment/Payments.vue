<template>
    <marketPlaceLayout>
        <!-- header -->
        <div class="page-header d-flex justify-content-center align-items-center">
            <h1>Payment</h1>
        </div>
        <!--body container -->
        <div class="transaction-sumary-container d-flex flex-row">
            <!-- left -->
            <div class="left-container">
                <div class="left-container-wrapper">
                    <!--card transactions details -->
                    <div class="row mb-3">
                        <div class="col">
                            <label for="exampleInputEmail1" class="form-label margin-btm-sm mt-0">Card Number</label>
                            <input type="number" class="form-control mt-0" id="exampleInputEmail1"
                                aria-describedby="emailHelp" placeholder="1234  5678  9101  1121">
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-6">
                            <label for="exampleInputEmail1" class="form-label margin-btm-sm mt-0">Expiration
                                Date</label>
                            <input type="date" class="form-control mt-0" id="exampleInputEmail1"
                                aria-describedby="emailHelp" placeholder="MM/YY">
                        </div>
                        <div class="col-6">
                            <label for="exampleInputEmail1" class="form-label margin-btm-sm mt-0">CVV</label>
                            <input type="number" class="form-control mt-0" id="exampleInputEmail1"
                                aria-describedby="emailHelp" placeholder="123">
                        </div>
                    </div>
                    <div class="row mb-5">
                        <div class="col-6">
                            <label for="exampleInputEmail1" class="form-label margin-btm-sm mt-0">Pin</label>
                            <input type="text" class="form-control mt-0" id="exampleInputEmail1"
                                aria-describedby="emailHelp" placeholder="Pin">
                        </div>
                    </div>
                    <div class="d-grid table-btn mt-4">
                        <!-- for buyers view -->
                        <a
                            :class="['btn', 'btn-procceed-waybil']"
                            type="button" @click="changeTab('balancepayment')" v-if="activeTab == 'ordersummary'">Confim Payment
                        </a>
                        <a href="/marketplace/confirmpayments"
                            :class="['btn', 'btn-procceed-waybil']"
                            type="button" v-if="activeTab == 'balancepayment'" >Confim Payment
                        </a>
                    </div>
                </div>
            </div>
            <!-- right -->
            <OrderSummary v-if="(activeTab == 'ordersummary')"></OrderSummary>
            <BalancePayment v-if="(activeTab == 'balancepayment')"></BalancePayment>
        </div>
    </marketPlaceLayout>
</template>

<script>
import MarketPlaceLayout from "@/layouts/MarketPlaceLayout.vue"
import OrderSummary from "./components/OrderSummary.vue";
import BalancePayment from "./components/BalancePayment.vue";

export default {
    name: "Payments",
    components: {
        MarketPlaceLayout,
        OrderSummary,
        BalancePayment
    },
    data() {
        return {
            activeTab: "balancepayment",
            step: 1,
        };
    },
    computed: {
    },
    changeTab(tab) {
            this.activeTab = tab;
    },
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";

.page-header {
    width: 100%;
    height: 87px;
    background: #262C3F;

    h1 {
        @include textStyles(Poppins, 700, 28.04px, 120%);
        color: #FFFFFF;

    }
}

input[type='date'],
label {
    @include textStyles(Poppins, 300, 14px, 23px);
    color: #C8C8C8;
}

input {

    &::placeholder {
        color: #C8C8C8;
        @include textStyles(Poppins, 700, 28.04px, 120%);
    }

}

.transaction-sumary-container {
    width: 100%;

    .left-container {
        background: #FFFFFF;
        width: 50%;

        .left-container-wrapper {
            margin-inline: 13.19% 9.16%;
            margin-top: 65px;
        }


        // button group
        .table-btn {
            margin-bottom: 100px;

            a {
                padding: 15px 20px;
            }

            .btn-procceed-waybil {
                background: #05B050;
                border-radius: 5px;
                @include textStyles(Inter, 600, 16px, 19px);
                color: #FFFFFF;
            }
        }
    }

}
</style>