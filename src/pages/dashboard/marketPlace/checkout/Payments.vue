<template>
    <DefaultNav>
        <!-- header -->
        <div class="big-container">
            <div class="page-header d-flex justify-content-center align-items-center">
            <h1>{{ order ? order.payment_status == "UNPAID" ? "Payment" : "Balance Payment" : "" }} </h1>
        </div>
        <!--body container -->
        <div class="transaction-sumary-container d-flex flex-row">
            <!-- left -->
            <div class="left-container">
                <div class="left-container-wrapper" v-if="false">
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
                        <!-- for corporates view -->
                        <a
                            :class="['btn', 'btn-procceed-waybil']"
                            type="button" @click="changeTab('balancepayment')" v-if="activeTab == 'ordersummary'">Confim Payment
                        </a>
                        <a href="/dashboard/marketplace/confirmpayments"
                            :class="['btn', 'btn-procceed-waybil']"
                            type="button" v-if="activeTab == 'balancepayment' && false" >Confim Payment
                        </a>

                        <a href="#" 
                            :class="['btn', 'btn-procceed-waybil']"
                            type="button" @click="makePayment()" >Confim Payment
                        </a>

                    </div>
                </div>
            </div>
            <!-- right -->
            <OrderSummary :order="order" v-if="(activeTab == 'ordersummary')"></OrderSummary>
            <BalancePayment :order="order" v-if="(activeTab == 'balancepayment')"></BalancePayment>
        </div>
        </div>
        
    </DefaultNav>
</template>

<script>
import DefaultNav from "@/layouts/DefaultNav.vue"
import OrderSummary from "./components/OrderSummary.vue";
import BalancePayment from "./components/BalancePayment.vue";
import MarketPlaceService from "@/services/marketplace";
import TransactionService from "@/services/transaction"
import config from '@/config';

export default {
    name: "Payments",
    components: {
        DefaultNav,
        OrderSummary,
        BalancePayment
    },
    data() {
        return {
            activeTab: "ordersummary",
            step: 1,
            order : null
        };
    },
    computed: {
        paymentPercent(){
            return window.localStorage.paymentPercent && window.localStorage.paymentPercent!='null' ? eval(window.localStorage.paymentPercent) : null;
        }
    },
    methods : {
        changeTab(tab) {
            this.activeTab = tab;
        },
        makePayment(){
            var vm = this;
            var transactionRef = `TRX-${this.generateRandom(20).toUpperCase()}`;
            if(this.order.payment_status == "UNPAID" && this.paymentPercent){
                var amountToPay = this.order.total * eval(this.paymentPercent) / 100;
            }
            if(this.order.payment_status == "PARTIALLY_PAID"){
                var amountToPay = this.order.amount_due
            }
            FlutterwaveCheckout({
                public_key: "FLWPUBK_TEST-a1b8a6d0b897f10b7332e3af9f902c70-X",
                tx_ref: transactionRef,
                amount: amountToPay,
                currency: this.order.currency,
                payment_options: "card, ussd, transfer",
                callback: function(payment) {
                    // Send AJAX verification request to backend
                    if(payment.status == "successful"){
                        var txRef = payment.tx_ref;
                        var txId = payment.transaction_id;

                        TransactionService.verifyTransaction({
                            transaction_id : txId.toString(),
                            transaction_ref : txRef,
                            order : vm.order.order_hash,
                            ...(vm.paymentPercent || vm.order.payment_status == "PARTIALLY_PAID" ? {partial : true} : {})
                        },(response)=>{
                            if(!response.error){
                                vm.$router.push(`/dashboard/marketplace/confirmpayments/${vm.order.order_hash}`);
                            }
                        });
                    }
                },
                onclose: function(incomplete) {
                    if (incomplete || window.verified === false) {
                        console.log();
                    } else {
                        console.log();
                        if (window.verified == true) {
                            console.log();
                        } else {
                            console.log();
                        }
                    }
                },
                meta: {
                    order : this.order.hash
                },
                customer: {
                    email: this.userData.user.email,
                    phone_number: this.userData.user.phone,
                    name: `${this.userData.user.first_name} ${this.userData.user.last_name}`,
                },
                customizations: {
                    title: this.order.products[0].title,
                    description: "Payment for order",
                    logo : "https://cdn.filestackcontent.com/SrotkZlqT6iXtiA20Q14"
                },
            });
            var detectWindow = setInterval(()=>{
                var checkout = document.querySelector('iframe[name=checkout]');
                if(checkout){
                    document.querySelector('.transaction-sumary-container .left-container').appendChild(checkout);
                    checkout.style.display = "block";
                    document.body.style.overflow = "scroll";
                    clearInterval(detectWindow);
                }
            },1000)

        },
        getOrder(order){
            MarketPlaceService.getOrder(order,(response)=>{
                var order = response.data;
                order.products = JSON.parse(order.products);
                this.order = order;
                if(order.payment_status == "PARTIALLY_PAID"){
                    this.changeTab('balancepayment');
                }
                this.makePayment();
            })
        }
    },
    mounted(){
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
    overflow-y: scroll;
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

.page-header {
    width: 100%;
    padding: 14px 30px;
    background: #262C3F;

    h1 {
        @include textStyles(Poppins, 700, 24px, 120%);
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
        @include textStyles(Poppins, 700, 14px, 120%);
    }

}

.transaction-sumary-container {
    width: 100%;
    flex : 1;

    .left-container {
        background: #FFFFFF;
        width: 50%;

        .left-container-wrapper {
            margin-inline: 8%;
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

<style>

iframe[name=checkout]{
    width : 100%;
    height: 100%;
    position: relative !important;
    display: none;
}
</style>