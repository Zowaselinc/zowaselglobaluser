<template>
    <DefaultNav>
        <div class="big-container">

            <div class="page-header d-flex justify-content-left align-items-center">
                <h1 class="mx-auto" v-if="(step == 1)">Order Tracking</h1>
                <!-- for Goods Reciept Note-->
                <div :class="['waybills', 'w-75']" v-if="(step == 2)">
                    <a class="arrow-left-img " @click="previouStep()">
                        <img class="img-fluid" src="@/assets/images/vectors/ArrowLeft.svg">
                    </a>
                    <h1>Goods Reciept Note</h1>

                </div>
            </div>

            <!--body container -->
            <div class="transaction-sumary-container d-flex flex-row">
                <!-- left -->
                <div class="left-container">
                    <div class="left-container-wrapper position-relative">
                        <h2>Order Number: #2233202</h2>
                        <!-- progress bar -->
                        <div class="progress-bar-wrapper d-flex flex-column w-100 position-relative">
                            <div class="progress progress-outer">
                                <div class="progress progress-inner" :style="('width : ' + orderProgress + '%')"></div>
                            </div>
                            <div class="circle d-flex w-100 position-absolute">
                                <div class="circle-1 circle-main"><span></span></div>
                                <div class="circle-2 circle-main"><span></span></div>
                                <div class="circle-3 circle-main"><span></span></div>
                                <div class="circle-4 circle-main"><span></span></div>
                            </div>
                            <!--levels-->
                            <div class="progress-level-container d-flex">
                                <!-- levels -->
                                <div class=" levels level-1">
                                    <h3>Pickup location</h3>
                                    <p>Naziri farms
                                        6 Abeokuta street,
                                        Nassarawa state
                                    </p>
                                </div>
                                <div class="levels level-2">
                                    <h3>Confirmed</h3>
                                    <p>
                                        Naziri farms
                                        6 Abeokuta street,
                                        Nassarawa state
                                    </p>
                                </div>
                                <div class="levels level-3">
                                    <h3>Shipped </h3>
                                    <p>
                                        Naziri farms
                                        6 Abeokuta street,
                                        Nassarawa state
                                    </p>
                                </div>
                                <div class="levels level-2">
                                    <h3>Delivered</h3>
                                    <p>
                                        Albert Sam 23, Plazy Uyo, Nigeria
                                    </p>
                                </div>
                            </div>
                        </div>

                        <!-- table -->
                        <h4>Tracking Details</h4>
                        <table class="table table-borderless">
                            <thead>
                                <tr>
                                    <th class="text-left">Date</th>
                                    <th class="text-center">Location</th>
                                    <th class="text-right">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="text-left">23 october 2022</td>
                                    <td class="text-center">--</td>
                                    <td class="text-right">Ordered</td>
                                </tr>
                                <tr>
                                    <td class="text-left">23 october 2022</td>
                                    <td class="text-center">--</td>
                                    <td class="text-right">Order Confirmed</td>
                                </tr>
                                <tr>
                                    <td class="text-left">23 october 2022</td>
                                    <td class="text-center">Zandi Village Plateau</td>
                                    <td class="text-right">Shipped</td>
                                </tr>
                            </tbody>
                        </table>
                        <a class="btn payment-status" v-if="(orderProgress != 100)">Payment Status: Pending</a>
                        <a id="payment-state" class="btn payment-status" v-if="(orderProgress == 100)">Payment Status:
                            <strong>Completed</strong></a>
                        <a class="btn payment-status wallet d-inline-block position-absolute"
                            v-if="(orderProgress == 100)">Go to wallet</a>
                        <!-- for corporates view -->
                        <a class="btn payment-status d-block confirm-delivery" v-if="(orderProgress == 100)">Confirm
                            Delivery</a>
                        <a class="btn payment-status wallet d-block w-100 mb-5" v-if="(orderProgress == 100)">Confirm
                            Delivery</a>

                    </div>
                </div>
                <!-- right side -->
                <div class="right-container">
                    <Waybills v-if="(activeTab == 'waybills' && step == 1)"></Waybills>
                    <GoodsNotes v-if="(activeTab == 'goodsnotes' && step == 2)"></GoodsNotes>
                    <GoodReceipt v-if="(activeTab == 'receipt' && step == 3)"></GoodReceipt>
                </div>
            </div>
        </div>
    </DefaultNav>
</template>

<script>
import DefaultNav from "@/layouts/DefaultNav.vue";
import Waybills from "@/pages/dashboard/marketPlace/checkout/components/Waybills.vue";
import GoodsNotes from "@/pages/dashboard/marketPlace/checkout/components/GoodsNotes.vue";
import GoodReceipt from "@/pages/dashboard/marketPlace/checkout/components/GoodReceipt.vue";



export default {
    name: 'OrderTracking',
    data() {
        return {
            userData: this.$store.state.user,
            orderProgress: 0,
            activeTab: "receipt",
            step: 3,

        }
    },
    components: {
        DefaultNav,
        Waybills,
        GoodsNotes,
        GoodReceipt,
    },
    methods: {

        changeTab(tab) {
            this.activeTab = tab;
        },
        nextStep() {
            this.step++;
        },
        previouStep() {
            this.step--;
        },
    },
    computed: {

    },
    mounted() {
        setInterval(() => {
            if (this.orderProgress < 100) {
                this.orderProgress++;
            }
        }, 100);
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


.waybills {
    display: flex;
    justify-content: space-around;
    h1 {
        font-size: 18px;
    }

    .arrow-left-img {
        width: 22px;
        height: 18px;

    }
}

.page-header {
    width: 100%;
    padding: 14px 30px;
    background: #262C3F;

    h1 {
        @include textStyles(Poppins, 700, 24px, 120%);
        color: #FFFFFF;
    }

}

.transaction-sumary-container {
    width: 100%;

    .left-container {
        background: #FFFFFF;
        width: 52%;

        .left-container-wrapper {
            margin-inline: 8%;
            margin-top: 65px;

            h2 {
                @include textStyles(Poppins, 800, 20px, 32px);
                letter-spacing: 0.01em;
                font-feature-settings: 'liga' off;
                color: #0A0D13;
                margin-bottom: 60px;
            }

            .progress-bar-wrapper {
                gap: 15px;

                .progress {
                    height: .4rem;
                }

                .progress-outer {
                    background: #B5B4B9;

                    .progress-inner {
                        width: 100%;
                        background: #05B050;
                    }
                }

                .circle {
                    justify-content: space-around;
                    margin-left: 4%;
                    top: -8px;

                    .circle-main {
                        width: 20px;
                        height: 20px;
                        background: #E6F7EE;
                        border-radius: 50%;
                        display: flex;
                        justify-content: center;
                        align-items: center;

                        span {
                            width: 70%;
                            height: 70%;
                            background: #05B050;
                            border-radius: 50%;

                        }
                    }
                }

                .progress-level-container {
                    gap: 15px;

                    .levels {
                        h3 {
                            @include textStyles(Poppins, 800, 14.5px, 27px);
                            color: rgba(45, 55, 72, 0.6);
                            text-align: center;
                        }

                        p {
                            @include textStyles('Maven Pro', 400, 14px, 24px);
                            text-align: center;
                            color: rgba(45, 55, 72, 0.6);
                        }
                    }
                }
            }

            h4 {
                @include textStyles('Maven Pro', 800, 18px, 32px);
                text-align: center;
                color: #000000;
                margin: 50px auto 0;
                padding: 7px 10px;
                border-bottom: 2px solid;
                width: 205px;
                height: 49px;
            }

            table.table-borderless {
                margin-top: 30px;

                tr {
                    height: 50px;
                }

                th {
                    vertical-align: top;
                    @include textStyles('Maven Pro', 800, 15.5px, 29px);
                    color: #696671;
                }

                td {
                    @include textStyles('Maven Pro', 600, 14.3px, 24px);
                    color: #696671;
                }
            }

            a.payment-status {
                padding: 12px 17px;
                height: 48px;
                border-radius: 7px;
                margin-top: 50px;
                background: #FDE296;
                letter-spacing: 0.01em;
                font-feature-settings: 'liga' off;
                color: #0A0D13;
                text-align: center;
                @include textStyles('Maven Pro', 600, 16px, 24px);
            }

            a.wallet {
                color: #FFFFFF;
                background: #05B050;
                right: 0;
                width: 40%;
            }

            a.confirm-delivery {
                color: #34323B;
                text-align: center;

                background: #E6F7EE;

                /* Black/Light */
                border: 1px solid #EDEDEE;
                box-shadow: 0px 4px 8px rgba(44, 39, 56, 0.08);
                border-radius: 4px;
                mix-blend-mode: normal;
                opacity: 0.24;
            }

            #payment-state {
                background: #E6F7EE;
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
        }
    }

}

// Right-container
.right-container {
    background: #F5F5F5;
    width: 48%;


}
</style>