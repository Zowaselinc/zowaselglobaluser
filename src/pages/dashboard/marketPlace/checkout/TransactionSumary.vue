<template>
    <DefaultNav>
        <div class="big-container">
           
            <div class="page-header d-flex justify-content-center align-items-center">
                <h1 v-if="(step == 1)">Transaction Summary</h1>
                <!-- for waybill details -->
                <div :class="['waybills', 'w-100']" v-if="(step == 2)">
                    <a class="arrow-left-img " @click="previouStep()">
                        <img class="img-fluid" src="@/assets/images/vectors/ArrowLeft.svg">
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
                                <div>Soya Bean</div>
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
                                <div>500 MT</div>
                            </div>
                            <div class="table-rows">
                                <div>Delivery Window:</div>
                                <div>Dec 1 - Dec 31 2022</div>
                            </div>
                            <div class="table-rows">
                                <div>Buyers Details:</div>
                                <div>Albert Sam</div>
                            </div>
                            <div class="table-rows">
                                <div>Accepted Date:</div>
                                <div>Oct 22 2022</div>
                            </div>
                            <div class="table-rows">
                                <div>Sellers Details:</div>
                                <div>Okechukwu Mbe</div>
                            </div>
                            <div class="table-rows">
                                <div>Transaction ID:</div>
                                <div>2SCM88S</div>
                            </div>
                            <div id="tlast" class="table-rows tlast">
                                <div>Agreement ID:</div>
                                <div>MVWD83BC38L</div>
                            </div>
                        </div>
                        <div class="d-grid table-btn">
                            <button class="btn btn-purchase-order" type="button">View purchase order</button>
                            <button
                                :class="['btn', 'btn-procceed-waybil', (step == 2 ? 'active-display-none' : 'active-display-block')]"
                                type="button" @click="nextStep()">Proceed to waybill
                            </button>
                            <!-- for corporates view -->
                            <a href="/marketplace/payments"
                                :class="['btn', 'btn-procceed-waybil', (step == 2 ? 'active-display-none' : 'active-display-block')]"
                                type="button">Proceed to payment
                            </a>
                        </div>
                    </div>
                </div>
                <!-- right -->
                <div class="right-container">
                    <div class="left-container-wrapper">
                        <!-- header tabs -->
                        <div :class="['right-header', 'g-0', (step != 1 ? 'active-display-none' : 'active-display-block')]">
                            <div :class="['price-details', (activeTab == 'pricingdetails' ? 'active-Tab' : '')]"
                                @click="changeTab('pricingdetails')">Pricing Details</div>
                            <div :class="['full-spec', (activeTab == 'fullspec' ? 'active-Tab' : '')]"
                                @click="changeTab('fullspec')">Full specification</div>
                            <div :class="['purchase-order', (activeTab == 'purchaseorder' ? 'active-Tab' : '')]"
                                @click="changeTab('purchaseorder')">Purchase Order</div>
                        </div>
                        <!-- pricing Details -->
                        <PricingDetails v-if="(activeTab == 'pricingdetails' && step == 1)"></PricingDetails>
                        <FullSpecification v-if="(activeTab == 'fullspec' && step == 1)"></FullSpecification>
                        <PurchaseOrder v-if="(activeTab == 'purchaseorder' && step == 1)"></PurchaseOrder>
                        <WaybillDetails ref="wayBill" :updateStep="updateWaybill" v-if="(step == 2)"></WaybillDetails>
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
import WaybillDetails from '@/pages/dashboard/marketPlace/checkout/components/WaybillDetails.vue';
import DefaultNav from "@/layouts/DefaultNav.vue";

export default {
    name: 'CardDetails',
    data() {
        return {
            userData: this.$store.state.user
        }
    },
    components: {
        DefaultNav,
        PricingDetails,
        FullSpecification,
        PurchaseOrder,
        WaybillDetails
       
    },
     data() {
        return {
            activeTab: "pricingdetails",
            step: 1,
            wayBillStep : 1,
        };
    },
    computed : {
        wayBill(){
            return this.$refs.wayBill;
        }
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
        updateWaybill(step){
            this.wayBillStep = step;
        }

    }
}
</script>


<style lang="scss" scoped>
@import "@/assets/scss/main.scss";

.big-container {
    width: 100%;
    height: auto;
    background: #F5F5F5;
    display: flex;
    flex-direction: column;
   

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
.active-display-none {
    display: none !important;
}

.active-display-block {
    display: block;
}

.page-header {
    width: 100%;
    height: 87px;
    background: #262C3F;

    h1 {
        @include textStyles(Poppins, 700, 28.04px, 120%);
        color: #FFFFFF;

    }

    .waybills {
        margin-inline: 6.595% 4.58%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .arrow-left-img {
            width: 22px;
            height: 18px;

        }

        .pages {
            cursor: pointer;
            margin-right: 6%;
            text-transform: capitalize;
            color: #FFFFFF;
            @include textStyles(Poppins, 700, 20px, 28px);
        }
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

        div.transactin-details {
            div#tlast.table-rows {
                margin-bottom: 57px;
            }

            .table-rows {
                position: relative;
                display: flex;
                flex-direction: row;
                margin-bottom: 37px;

                >div {

                    &:last-child:not(.quality-spec) {
                        position: absolute;
                        right: 0;
                    }

                    &:nth-of-type(1) {
                        @include textStyles(Poppins, 800, 18px, 33px);
                        color: rgba(45, 55, 72, 0.6);
                    }

                    &:nth-of-type(2) {
                        @include textStyles(Poppins, 500, 18px, 29px);
                        color: #696671;
                    }
                }

            }
        }

        // button group
        .table-btn {
            gap: 25px;
            margin-bottom: 100px;

            button {
                padding: 15px 20px;
            }

            .btn-purchase-order {

                border: 1px solid #05B050;
                border-radius: 5px;
                background: #FFFFFF;
                @include textStyles(Inter, 600, 16px, 19px);
                color: #05B050;
            }

            .btn-procceed-waybil {
                background: #05B050;
                border-radius: 5px;
                @include textStyles(Inter, 600, 16px, 19px);
                color: #FFFFFF;
            }

            // toggle
            .active-display-none {
                display: none;
            }

            .active-display-block {
                display: block;
            }
        }
    }

    .right-container {
        background: #F5F5F5;
        width: 50%;

        .left-container-wrapper {
            margin-inline: 13.19% 9.16%;
            margin-top: 65px;


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
                    box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.12), 0px 3px 1px rgba(0, 0, 0, 0.04);
                    border-radius: 6.93px;
                    background: #262C3F;
                    color: #FFFFFF !important;
                }


                .price-details {
                    color: #262C3F;
                    @include textStyles(Inter, 600, 16px, 19px);

                }

                .full-spec {
                    color: #262C3F;
                    @include textStyles(Inter, 600, 16px, 19px);

                }

                .purchase-order {
                    color: #262C3F;
                    @include textStyles(Inter, 600, 16px, 19px);

                }
            }
        }
    }

}

</style>