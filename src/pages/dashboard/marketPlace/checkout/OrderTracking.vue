<template>
    <DefaultNav>
        <div class="big-container">
           
              
             <!-- header for oder tracking  -->
        <div class="page-header d-flex justify-content-center align-items-center">
            <h1>Order Tracking</h1>
        </div>
        <!--body container -->
        <div class="transaction-sumary-container d-flex flex-row">
            <!-- left -->
            <div class="left-container">
                <div class="left-container-wrapper position-relative" v-if="order">
                    <h2>Order Number: #{{ order.order_hash }}</h2>
                    <!-- progress bar -->
                    <div class="progress-bar-wrapper d-flex flex-column w-100 position-relative" v-if="trackingDetails">
                        <div class="progress progress-outer">
                            <div class="progress progress-inner" :style="('width : ' + orderProgress + '%')"></div>
                        </div>
                        <div class="circle d-flex w-100 position-absolute">
                            <div class="circle-1 circle-main"><span></span></div>
                            <div 
                                class="circle-2 circle-main"
                                v-for="tracking,index in trackingDetails.transit"
                                :key="index"
                            ><span></span></div>
                            <div class="circle-4 circle-main"><span></span></div>
                        </div>
                        <!--levels-->
                        <div class="progress-level-container d-flex">
                            <!-- levels -->
                            <div class=" levels level-1">
                                <h3>Pickup location</h3>
                                <p>{{  trackingDetails.pickup_location }}</p>
                            </div>
                            <div 
                                class="levels level-2"
                                v-for="tracking,index in trackingDetails.transit"
                                :key="index"
                            >
                                <h3>{{ tracking.status }}</h3>
                                <p>{{ tracking.location }}</p>
                            </div>
                            <div class="levels level-3">
                                <h3>Delivered</h3>
                                <p>
                                    {{ trackingDetails.delivery_location }}
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- table -->
                    <h4>Tracking Details</h4>
                    <table class="table table-borderless" v-if="trackingDetails">
                        <thead>
                            <tr>
                                <th class="text-left">Date</th>
                                <th class="text-center">Location</th>
                                <th class="text-right">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr 
                                v-for="tracking,index in trackingDetails.transit"
                                :key="index"
                            >
                                <td class="text-left">{{ tracking.date }}</td>
                                <td class="text-center">{{ tracking.location }}</td>
                                <td class="text-right">{{ tracking.status }}</td>
                            </tr>
                        </tbody>
                    </table>
                    <template v-if="order">
                        <a class="btn payment-status" v-if="(orderProgress != 100)">Payment Status: {{ 
                            order.payment_status == "UNPAID" ? "Pending" :
                            (order.payment_status == "PARTIALLY_PAID" ? "Partial" : "Paid")
                             }}</a>
                        <a id="payment-state" class="btn payment-status" v-if="(orderProgress == 100)">Payment Status:
                            <strong>Completed</strong></a>
                        <a class="btn payment-status wallet d-inline-block position-absolute"
                            v-if="isSeller">Go to wallet</a>
                        <!-- for corporates view -->
                        <a class="btn payment-status d-block confirm-delivery" v-if="isBuyer && false" >Confirm Delivery</a>
                        <a class="btn payment-status wallet d-block w-100" @click="goodsReceipt()" v-if="isBuyer">Confirm Delivery</a>
                        <a class="btn payment-status wallet d-block w-100" @click="updateShipping()" v-if="isSeller">Update Tracking</a>

                    </template>
                </div>
            </div>
            <!-- right -->
            <div v-if="stage == 'confirm'" class="right-container">
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
                            <div class="form-wrapper" v-if="order">
                                <!-- grid -->
                                <div class="container text-center ">
                                    <div class="row">
                                        <div class="col row-item-1">DISPATCH SECTION</div>
                                    </div>
                                    <div class="row row-main">
                                        <div class="col col-item-1">FROM: {{ waybillDetails.dispatch_section.from }}</div>
                                        <div class="col-6 col-item-2">To: {{ waybillDetails.dispatch_section.to }}</div>
                                    </div>
                                    <div class="row row-main">
                                        <div class="col-4 col-item-1">DATE: {{ waybillDetails.dispatch_section.date }}</div>
                                        <div class="col-4 col-item-2">COSIGNEE: {{ waybillDetails.dispatch_section.cosignee }}</div>
                                        <div class="col-4 col-item-2">Truck No./Trailer No: {{ waybillDetails.dispatch_section.truck_number }}</div>
                                    </div>
                                    <div class="row">
                                        <div class="col-4 row-item-general">S/No.</div>
                                        <div class="col-4 row-item-general">DESCRIPTION</div>
                                        <div class="col-4 row-item-general">QUANTITY</div>

                                    </div>
                                    <div class="row" v-for="item,index in waybillDetails.dispatch_section.items" :key="index">
                                        <div class="col-4 row-item-general">{{ index + 1 }}</div>
                                        <div class="col-4 row-item-general"> {{ item.title  }}</div>
                                        <div class="col-4 row-item-general">{{ item.specification.qty }}</div>

                                    </div>
                                    <div class="row row-main">
                                        <div class="col col-item-1">REMARKS: {{ waybillDetails.dispatch_section.remarks }}</div>
                                    </div>
                                    <div class="row row-main">
                                        <div class="col col-item-1">Driver's Name: {{ waybillDetails.dispatch_section.drivers_data.drivers_name }}</div>
                                        <div class="col-6 col-item-2">Seller's Representative: {{ waybillDetails.dispatch_section.sellers_data.sellers_representative }}</div>
                                    </div>
                                    <div class="row">
                                        <div class="col-6 row-item-general">Driving License/Permit #: {{ waybillDetails.dispatch_section.drivers_data.driving_license }}</div>
                                        <div class="col-6 row-item-general">Title: {{ waybillDetails.dispatch_section.sellers_data.title }}</div>
                                    </div>
                                    <div class="row">
                                        <div class="col-6 row-item-general">Signature and Date: {{ 
                                                formatDate(waybillDetails.dispatch_section.drivers_data.date)
                                            }}</div>
                                        <div class="col-6 row-item-general">Signature and Date: {{ 
                                            formatDate(waybillDetails.dispatch_section.sellers_data.date)
                                        }}</div>
                                    </div>
                                    <div class="row">
                                        <div class="col row-item-1">RECEIPT SECTION</div>
                                    </div>
                                    <div class="row">
                                        <div class="col-4 row-item-general">S/No.</div>
                                        <div class="col-4 row-item-general">DESCRIPTION</div>
                                        <div class="col-4 row-item-general">QUANTITY</div>

                                    </div>
                                    <div class="row" v-for="item,index in waybillDetails.dispatch_section.items" :key="index">
                                        <div class="col-4 row-item-general">{{ index + 1 }}</div>
                                        <div class="col-4 row-item-general"> {{ item.title  }}</div>
                                        <div class="col-4 row-item-general">{{ item.specification.qty }}</div>

                                    </div>
                                    <div class="row row-main">
                                        <div class="col col-item-1">REMARKS: {{ waybillDetails.receipt_section.remarks }}</div>
                                    </div>
                                    <div class="row row-main">
                                        <div class="col-6 col-item-2">Seller's Representative: {{ waybillDetails.receipt_section.sellers_data.sellers_representative }}</div>
                                        <div class="col col-item-1">Received by:{{ waybillDetails.receipt_section.recipient_data.received_by }}</div>
                                    </div>
                                    <div class="row">
                                        <div class="col-6 row-item-general">Title: {{ waybillDetails.receipt_section.sellers_data.title }}</div>
                                        <div class="col-6 row-item-general">Title: {{ waybillDetails.receipt_section.recipient_data.title }}</div>
                                    </div>
                                    <div class="row">
                                        <div class="col-6 row-item-general">Signature and Date: {{ 
                                            formatDate(waybillDetails.receipt_section.sellers_data.date)
                                            }}</div>
                                        <div class="col-6 row-item-general">Signature and Date: {{ 
                                            formatDate(waybillDetails.receipt_section.recipient_data.date)
                                        }}</div>
                                    </div>
                                    <p class="way-bill mt-5 mb-4 container">
                                        The <strong>way bill</strong> puts the person in charge of the conveyance
                                        carrying the consignment of
                                        said amount of goods to the stated destination. It is a mandatory document that
                                        is generated from zowasel
                                        portal by registered sellers or transporters who undertake movement of
                                        commodities and must be presented at point
                                        of delivery in the corporate.
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

            <GoodsNotes v-if="stage == 'upload-receipt'" :saveGoodsReceipt="saveGoodsReceipt"/>
            <GoodsReceipt v-if="stage == 'receipt-uploaded'"/>
        </div>

            

        </div>



    </DefaultNav>
</template>

<script>
import DefaultNav from "@/layouts/DefaultNav.vue";
import MarketPlaceService from "@/services/marketplace";
import GoodsNotes from "@/pages/dashboard/marketPlace/checkout/components/GoodsNotes.vue";
import GoodsReceipt from "@/pages/dashboard/marketPlace/checkout/components/GoodReceipt.vue";
import OrderService from "@/services/order";

export default {
    name: 'OrderTracking',
    data() {
        return {
            userData: this.$store.state.user,
            orderProgress: 0,
            order : null,
            stage : "confirm"

        }
    },
    components: {
        DefaultNav,
        GoodsNotes,
        GoodsReceipt
    },
    computed: {
        waybillDetails(){
            return this.order ? JSON.parse(this.order.waybill_details) : null;
        },
        trackingDetails(){
            return this.order ? JSON.parse(this.order.tracking_details) : null;
        }
    },
    methods:{
        formatDate(date){
            var dateObject = (new Date(date));
            var date = dateObject.getDate() < 10 ? "0"+dateObject.getDate() : dateObject.getDate()
            var month = dateObject.getMonth()+1 < 10 ? "0"+(dateObject.getMonth()+1) : dateObject.getMonth()+1
            return `${date}/${month}/${dateObject.getFullYear()}`;
        },
        getOrder(order){
            let vm = this;
            MarketPlaceService.getOrder(order,(response)=>{
                var order = response.data;
                order.products = JSON.parse(order.products);
                this.order = order;
                setTimeout(()=>{
                    vm.calculateOrderProgress();
                },500);
            })
        },
        goodsReceipt(){
            this.stage = "upload-receipt"
        },
        calculateOrderProgress(){
            if(this.trackingDetails.delivered){
                this.orderProgress = 100;
                return 0;
            }
            var transitElements = document.querySelectorAll('.circle .circle-main');
            var lastTransitElement = transitElements[ transitElements.length - 2];
            var totalProgressLength = document.querySelector('.circle').offsetWidth;
            this.orderProgress = lastTransitElement.offsetLeft/totalProgressLength * 100;
        },
        saveGoodsReceipt(data){
            let vm = this;
            OrderService.saveGoodsReceiptNote({
                order : this.order.order_hash,
                goodsReceiptNote : data
            },(response)=>{
                if(!response.error){
                    vm.stage = "receipt-uploaded";
                }
            });
        },
        updateShipping(){
            this.$router.push({
                name : "UpdateShipping",
                params : {order : this.$route.params.order}
            });
        }
    },
    mounted() {
        // setInterval(() => {
        //     if (this.orderProgress < 100) {
        //         this.orderProgress++;
        //     }
        // }, 100);
        this.getOrder(this.$route.params.order);
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
        width: 55%;

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
                    // margin-left: 4%;
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
                    display: flex;
                    justify-content: space-between;

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

    // Right-container
    .right-container {
        background: #F5F5F5;
        width: 45%;

        .right-container-wrapper {
            margin-inline: 4%;
            margin-top: 65px;

            h1 {
                @include textStyles(Inter, 600, 20px, 28px);
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
                        width: 100px;
                        margin-left: 25px;
                        margin-bottom: 15px;
                    }

                    address {
                        margin-left: 25px;
                        margin-bottom: 15px;

                        p {
                            margin-bottom: 0px;
                            font-family: Poppins;
                            font-size: 12px;
                        }
                    }

                    .form-wrapper,

                    .row {
                        border: .5px solid rgba(0, 0, 0, 0.18);

                        p {
                            font-size: 13px;
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
                            font-size: 12px;
                        }

                        .row-item-general {
                            height: 30px;
                            font-size: 12.2px;
                            text-align: left;
                        }

                        .col-item-1,
                        .col-item-2 {
                            font-size: 12.2px;
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