<template>
    <DefaultNav>
        <div class="big-container">


            <div class="top-text">
                <h1>Checkout</h1>
            </div>
            <div class="big-content">
                <div class="left-side">
                    <div class="address">
                        <div class="top-address">
                            <img src="@/assets/images/vectors/ticked.png" alt="">
                            <h3>Delivery Address</h3>
                        </div>
                        <hr>
                        <div class="main-address">
                            <div class="names">
                                <h4>Sampolaen Farms</h4>
                                <p>4517 Washington Ave. Manchester, Kentucky 39495</p>
                            </div>
                            <button>Change Address</button>

                        </div>
                    </div>
                    <div class="delivery-method">
                        <div class="top-address">
                            <img src="@/assets/images/vectors/ticked.png" alt="">
                            <h3>Delivery Method</h3>
                        </div>
                        <hr>
                        <div class="methods">
                            <div class="farm">
                                <div class="each-line">
                                    <img src="@/assets/images/vectors/point.svg" alt="">
                                    <h4>Farm Delivery</h4>
                                </div>
                                <div class="each-line">
                                    <img src="@/assets/images/vectors/Truck.svg" alt="">
                                    <p>Will be delivered between 20 August, 2022 to 28 August, 2022</p>
                                </div>
                                <div class="each-line">
                                    <img src="@/assets/images/vectors/Money.svg" alt="">
                                    <p>Delivery charge of NGN3,564</p>
                                </div>
                            </div>
                            <div class="pickup">
                                <div class="each-line">
                                    <img src="@/assets/images/vectors/pickup.svg" alt="">
                                    <h4>Pick-up Station</h4>
                                </div>
                                <div class="each-line">
                                    <img src="@/assets/images/vectors/Package.svg" alt="">
                                    <p>Will be delivered between 20 August, 2022 to 28 August, 2022</p>
                                </div>
                                <select name="" id="">
                                    <option value="">Select Pick up station</option>
                                </select>
                            </div>

                        </div>

                    </div>
                    <div class="payment-method">
                        <div class="each-line">
                            <img src="@/assets/images/vectors/ticked.png" alt="">
                            <h4>Pick-up Station</h4>
                        </div>
                        <hr>
                        <div class="input-line">
                            <div class="each-input">
                                <input type="radio" name="payment">
                                <label for="">Credit or Debit Card</label>
                            </div>
                            <div class="each-input">
                                <input type="radio" name="payment">
                                <label for="">Bank Transfer</label>
                            </div>

                        </div>
                    </div>

                    <button class="proceed">Proceed to Payment</button>


                </div>
                <div class="right-side">

                    <h3>Order Summary</h3>
                    <div class="line"></div>
                    <div class="summaries">
                        <div class="each-item">
                            <img src="@/assets/images/backgrounds/okro-small.png" alt="">
                            <div class="each-detail">
                                <h4>Coconut Fertilizer</h4>
                                <p>Seller- <span>Naziri Farms</span></p>
                                <div class="qty">
                                    <h4>Qty</h4>
                                    <div class="btnss">
                                        <p class="p-btn">-</p>
                                        <p>3</p>
                                        <p class="p-btn">+</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="each-item">
                            <img src="@/assets/images/backgrounds/okro-small.png" alt="">
                            <div class="each-detail">
                                <h4>Coconut Fertilizer</h4>
                                <p>Seller- <span>Naziri Farms</span></p>
                                <div class="qty">
                                    <h4>Qty</h4>
                                    <div class="btnss">
                                        <p class="p-btn">-</p>
                                        <p>3</p>
                                        <p class="p-btn">+</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="each-item">
                            <img src="@/assets/images/backgrounds/okro-small.png" alt="">
                            <div class="each-detail">
                                <h4>Coconut Fertilizer</h4>
                                <p>Seller- <span>Naziri Farms</span></p>
                                <div class="qty">
                                    <h4>Qty</h4>
                                    <div class="btnss">
                                        <p class="p-btn">-</p>
                                        <p>3</p>
                                        <p class="p-btn">+</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="red-side">
                        <div class="items">
                            <p>Cart Sub-total</p>
                            <h4>NGN410,000</h4>
                        </div>
                        <div class="items">
                            <p>Delivery Fee</p>
                            <h4>NGN3,400</h4>
                        </div>
                        <div class="items">
                            <p>Total</p>
                            <h4>NGN413,400</h4>
                        </div>


                    </div>


                </div>

            </div>




        </div>



    </DefaultNav>
</template>

<script>
import DefaultNav from "@/layouts/DefaultNav.vue";

export default {
    name: 'CheckOut',
    data() {
        return {
            userData: this.$store.state.user
        }
    },
    components: {
        DefaultNav,

    },
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

.top-text {
    padding: 14px 30px;
    width: 100%;
    background: #262C3F;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    margin-bottom: 50px;

    h1 {
        font-size: 24px;
    }
}

.big-content {
    width: 100%;
    padding: 50px 35px;
    background: #F1F1F1;
    display: flex;
    flex-direction: row;
    gap: 20px;

    .left-side {
        width: 60%;

        .address {
            width: 100%;
            background-color: white;
            padding: 38px;
        }

        .delivery-method {
            width: 100%;
            background-color: white;
            padding: 38px;
            margin-top: 50px;
        }

        .payment-method {
            width: 100%;
            background-color: white;
            padding: 38px;
            margin-top: 50px;
        }

    }

    .top-address {
        display: flex;
        align-items: center;
        gap: 12px;

        img {
            width: 20px;
            height: 20px;
        }

        h3 {
            margin-top: 5px;
            font-size: 16px
        }

    }

    .main-address {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 40px;

        button {
            background: #05B050;
            box-shadow: 0px 1.47598px 2.95197px rgba(44, 39, 56, 0.08), 0px 2.95197px 5.90393px rgba(44, 39, 56, 0.08);
            border-radius: 2.95197px;
            height: 40px;
            width: 160px;
            font-family: 'Maven Pro';
            font-style: normal;
            font-weight: 700;
            font-size: 12px;
            color: #E6F7EE;
            border: none;
        }

        h4 {
            font-size: 16px;
        }

        p {
            font-size: 14px;
        }

    }

    .methods {
        display: flex;
        width: 100%;
        gap: 30px;

        .farm {
            width: 50%;
            background: #FFF8E6;
            border: 1px solid #EDEDEE;
            padding: 20px;

        }

        .pickup {
            width: 50%;
            border: 1px solid #EDEDEE;
            padding: 20px;

            select {
                width: 100%;
                background: #F8F8F8;
                border: 1px solid #EDEDEE;
                border-radius: 4px;
                height: 40px;
            }
        }
    }

    .each-line {
        display: flex;
        align-items: center;
        align-items: center;
        gap: 15px;

        img {
            width: 20px;
            height: 20px;
        }

        h4 {
            margin-top: 5px;
            font-size: 16px;
        }

        p {
            margin-top: 15px;
            font-size: 14px;
        }

    }

    select {
        font-size: 13px;
    }

    .input-line {
        display: flex;
        align-items: center;
        align-items: center;
        gap: 150px;
    }

    .each-input {
        display: flex;
        align-items: center;
        gap: 20px;
    }

    input[type='radio'] {
        width: 20px;
        height: 20px;
    }

    .right-side {
        width: 40%;
        background-color: white;
        height: 700px;
        display: flex;
        flex-direction: column;
        padding: 30px;
        gap: 21px;
        border-radius: 4px;

        h3 {
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 700;
            font-size: 20px;
            line-height: 18px;
            color: #4A4754;
            text-align: center;
        }

        .each-summary {
            display: flex;
            justify-content: space-between;
            width: 100%;

            p {
                font-family: 'Maven Pro';
                font-style: normal;
                font-weight: 500;
                font-size: 20px;
                line-height: 166.67%;
                color: rgba(45, 55, 72, 0.6);
            }

            .total {
                font-family: 'Poppins';
                font-style: normal;
                font-weight: 700;
                font-size: 20px;
                line-height: 166.67%;
                color: #96949C;
            }

            .price {
                font-family: 'Maven Pro';
                font-style: normal;
                font-weight: 700;
                font-size: 20px;
                line-height: 147%;
                color: #4A4754;
            }



        }

        .line {
            border: 1px solid #EDEDEE;
            width: 100% !important;
        }

        button {
            background: #05B050;
            box-shadow: 0px 2px 4px rgba(44, 39, 56, 0.08), 0px 4px 8px rgba(44, 39, 56, 0.08);
            border-radius: 4px;
            height: 55px;
            width: 100%;
            border: none;
            color: white;
            font-family: 'Maven Pro';
            font-style: normal;
            font-weight: 700;
            font-size: 16px;
            color: #E6F7EE;
        }
    }

    .proceed {
        width: 100%;
        margin-top: 45px;
        background: #05B050;
        box-shadow: 0px 2px 4px rgba(44, 39, 56, 0.08), 0px 4px 8px rgba(44, 39, 56, 0.08);
        border-radius: 4px;
        border: none;
        height: 55px;
        font-family: 'Maven Pro';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 147%;
        color: #E6F7EE;

    }

    .summaries {
        height: 400px;

        .each-item {
            display: flex;
            gap: 20px;
            margin-top: 25px;

            img {
                width: 120px;
                height: 120px;
            }
        }
    }

    .each-detail {
        h4 {
            font-size: 16px;
        }

        p {
            font-size: 14px;
        }

        .btnss {
            font-size: 14px;
        }
    }

    .qty {
        display: flex;
        align-items: center;
        gap: 20px;
    }

    .btnss {
        display: flex;
        gap: 10px;
        height: 35px;
    }

    .p-btn {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px;
        width: 20px;
        height: 20px;
        background: #EDEDEE;
        border-radius: 50%;
    }
}

.red-side {
    background: #CD4647;
    padding: 20px;
    color: white;

    .items {
        display: flex;
        justify-content: space-between;

        p {
            font-family: 'Maven Pro';
            font-style: normal;
            font-weight: 500;
            font-size: 14px;
            line-height: 19px;
        }

        h4 {
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 700;
            font-size: 14px;
            line-height: 24px;
        }
    }
}
</style>