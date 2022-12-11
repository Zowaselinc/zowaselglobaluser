<template>
    <marketPlaceLayout>
        <!-- header for oder tracking  -->
        <div class="page-header d-flex justify-content-center align-items-center">
            <h1>Order Tracking</h1>
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
                    <!-- for buyers view -->
                    <a class="btn payment-status d-block confirm-delivery" v-if="(orderProgress == 100)">Confirm Delivery</a>
                    <a class="btn payment-status wallet d-block w-100"
                        v-if="(orderProgress == 100)">Confirm Delivery</a>

                </div>
            </div>
            <!-- right -->
            <div class="right-container">
                <div class="right-container-wrapper">
                    <h1>Waybill details</h1>
                    <hr>
                    <div class="zowasel-receipt">
                        <div class="receipt-wrapper">
                            <!-- logo -->
                            <div class="logo-wrapper">
                                <img class="img-fluid" src="@/assets/images/logos/zowasel-grey-logo.png"
                                    alt="zowasel-logo">
                            </div>
                            <!-- address -->
                            <address>
                                <p>69A, Abba Johnson, Adeniyi Jones Av</p>
                                <p>Ikeja, Lagos, NIGERIA</p>
                                <p>Waybil Number:</p>
                            </address>
                            <div class="form-wrapper">
                                <!-- grid -->
                                <div class="container text-center ">
                                    <div class="row">
                                        <div class="col row-item-1">DISPATCH SECTION</div>
                                    </div>
                                    <div class="row row-main">
                                        <div class="col col-item-1">FROM:</div>
                                        <div class="col-6 col-item-2">To:</div>
                                    </div>
                                    <div class="row row-main">
                                        <div class="col-4 col-item-1">DATE:</div>
                                        <div class="col-4 col-item-2">COSIGNEE:</div>
                                        <div class="col-4 col-item-2">Truck No./Trailer No:</div>
                                    </div>
                                    <div class="row">
                                        <div class="col-4 row-item-general">S/No.</div>
                                        <div class="col-4 row-item-general">DESCRIPTION</div>
                                        <div class="col-4 row-item-general">QUANTITY</div>

                                    </div>
                                    <div class="row">
                                        <div class="col-4 row-item-general"></div>
                                        <div class="col-4 row-item-general"></div>
                                        <div class="col-4 row-item-general"></div>

                                    </div>
                                    <div class="row">
                                        <div class="col-4 row-item-general"></div>
                                        <div class="col-4 row-item-general"></div>
                                        <div class="col-4 row-item-general"></div>

                                    </div>
                                    <div class="row">
                                        <div class="col-4 row-item-general"></div>
                                        <div class="col-4 row-item-general"></div>
                                        <div class="col-4 row-item-general"></div>

                                    </div>
                                    <div class="row row-main">
                                        <div class="col col-item-1">REMARKS:</div>
                                    </div>
                                    <div class="row row-main">
                                        <div class="col col-item-1">Driver's Name:</div>
                                        <div class="col-6 col-item-2">Seller's Representative:</div>
                                    </div>
                                    <div class="row">
                                        <div class="col-6 row-item-general">Driving License/Permit #:</div>
                                        <div class="col-6 row-item-general">Title:</div>
                                    </div>
                                    <div class="row">
                                        <div class="col-6 row-item-general">Signature and Date:</div>
                                        <div class="col-6 row-item-general">Signature and Date:</div>
                                    </div>
                                    <div class="row">
                                        <div class="col row-item-1">DISPATCH SECTION</div>
                                    </div>
                                    <div class="row">
                                        <div class="col-4 row-item-general">S/No.</div>
                                        <div class="col-4 row-item-general">DESCRIPTION</div>
                                        <div class="col-4 row-item-general">QUANTITY</div>

                                    </div>
                                    <div class="row">
                                        <div class="col-4 row-item-general"></div>
                                        <div class="col-4 row-item-general"></div>
                                        <div class="col-4 row-item-general"></div>

                                    </div>
                                    <div class="row">
                                        <div class="col-4 row-item-general"></div>
                                        <div class="col-4 row-item-general"></div>
                                        <div class="col-4 row-item-general"></div>

                                    </div>
                                    <div class="row">
                                        <div class="col-4 row-item-general"></div>
                                        <div class="col-4 row-item-general"></div>
                                        <div class="col-4 row-item-general"></div>

                                    </div>
                                    <div class="row row-main">
                                        <div class="col col-item-1">REMARKS:</div>
                                    </div>
                                    <div class="row row-main">
                                        <div class="col-6 col-item-2">Seller's Representative:</div>
                                        <div class="col col-item-1">Received by:</div>
                                    </div>
                                    <div class="row">
                                        <div class="col-6 row-item-general">Title:</div>
                                        <div class="col-6 row-item-general">Title:</div>
                                    </div>
                                    <div class="row">
                                        <div class="col-6 row-item-general">Signature and Date:</div>
                                        <div class="col-6 row-item-general">Signature and Date:</div>
                                    </div>
                                    <p class="way-bill mt-5 mb-4 container">
                                        The <strong>way bill</strong> puts the person in charge of the conveyance
                                        carrying the consignment of
                                        said amount of goods to the stated destination. It is a mandatory document that
                                        is generated from zowasel
                                        portal by registered sellers or transporters who undertake movement of
                                        commodities and must be presented at point
                                        of delivery in the buyer.
                                    </p>

                                </div>

                            </div>
                            <button :class="['btn', 'table-btn', 'w-100', 'btn-1']" type="button">
                                Download document
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </marketPlaceLayout>
</template>

<script>
import MarketPlaceLayout from "@/layouts/MarketPlaceLayout.vue"

export default {
    name: "OrderTracking",
    components: {
        MarketPlaceLayout,
    },
    data() {
        return {
            orderProgress: 0
        };
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


.page-header {
    width: 100%;
    height: 87px;
    background: #262C3F;

    h1 {
        @include textStyles(Poppins, 700, 28.04px, 120%);
        color: #FFFFFF;
    }

}

.transaction-sumary-container {
    width: 100%;

    .left-container {
        background: #FFFFFF;
        width: 53%;

        .left-container-wrapper {
            margin-inline: 8% 9.16%;
            margin-top: 65px;

            h2 {
                @include textStyles(Poppins, 800, 24px, 32px);
                letter-spacing: 0.01em;
                font-feature-settings: 'liga' off;
                color: #0A0D13;
                margin-bottom: 96px;
            }

            .progress-bar-wrapper {
                gap: 15px;

                .progress {
                    height: .5rem;
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
                    top: -10px;

                    .circle-main {
                        width: 27px;
                        height: 27px;
                        background: #E6F7EE;
                        border-radius: 50%;
                        display: flex;
                        justify-content: center;
                        align-items: center;

                        span {
                            width: 19.29px;
                            height: 19.29px;
                            background: #05B050;
                            border-radius: 50%;

                        }
                    }
                }

                .progress-level-container {
                    gap: 15px;

                    .levels {
                        h3 {
                            @include textStyles(Poppins, 800, 16px, 27px);
                            color: rgba(45, 55, 72, 0.6);
                            text-align: center;
                        }

                        p {
                            @include textStyles('Maven Pro', 400, 16px, 24px);
                            text-align: center;
                            color: rgba(45, 55, 72, 0.6);
                        }
                    }
                }
            }

            h4 {
                @include textStyles('Maven Pro', 800, 24px, 32px);
                text-align: center;
                color: #000000;
                margin: 80px auto 0;
                padding: 7px 10px;
                border-bottom: 2px solid;
                width: 205px;
                height: 49px;
            }

            table.table-borderless {
                margin-top: 49px;

                tr {
                    height: 50px;
                }

                th {
                    vertical-align: top;
                    @include textStyles('Maven Pro', 800, 20px, 29px);
                    color: #696671;
                }

                td {
                    @include textStyles('Maven Pro', 600, 16px, 24px);
                    color: #696671;
                }
            }

            a.payment-status {
                padding: 12px 17px;
                height: 48px;
                border-radius: 7px;
                margin-top: 100px;
                background: #FDE296;
                letter-spacing: 0.01em;
                font-feature-settings: 'liga' off;
                color: #0A0D13;
                text-align: center;
                @include textStyles('Maven Pro', 600, 18px, 24px);
            }

            a.wallet {
                color: #FFFFFF;
                background: #05B050;
                right: 0;
                width: 45%;
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

    // Right-container
    .right-container {
        background: #F5F5F5;
        width: 47%;

        .right-container-wrapper {
            margin-inline: 5% 7%;
            margin-top: 65px;

            h1 {
                @include textStyles(Inter, 600, 24px, 28px);
                letter-spacing: -0.02em;
                color: #0A0D13;
                margin-bottom: 17px;
                text-align: center;
            }

            hr {
                border: 1px solid rgba(0, 0, 0, 0.18);
                margin-bottom: 23px;
            }

            .zowasel-receipt {
                background: #FFFFFF;
                padding: 30px;

                .receipt-wrapper {
                    color: rgba(0, 0, 0, 0.849);

                    .logo-wrapper {
                        width: 165px;
                        margin-left: 25px;
                        margin-bottom: 20px;
                    }

                    address {
                        margin-left: 25px;
                        margin-bottom: 20px;

                        p {
                            margin-bottom: 0px;
                            font-family: Poppins;
                            font-size: 13px;
                        }
                    }

                    .form-wrapper,

                    .row {
                        border: .5px solid rgba(0, 0, 0, 0.18);

                        p {
                            font-size: 14px;
                        }
                    }

                    .row {
                        div {
                            border: .6px solid rgba(0, 0, 0, 0.18);
                            height: 50px;
                        }

                        .row-item-1 {
                            height: 25px;
                            font-weight: bold;
                        }

                        .row-item-general {
                            height: 30px;
                            font-size: 15px;
                            text-align: left;
                        }

                        .col-item-1,
                        .col-item-2 {
                            font-size: 15px;
                            text-align: left;
                        }
                    }

                    button.table-btn {
                        margin-top: 33px;
                        padding: 15px 20px;
                        background: #262C3F;
                        border-radius: 5px;
                        @include textStyles(Inter, 600, 16px, 19px);
                        color: #FFFFFF;
                    }
                }
            }
        }
    }

}
</style>