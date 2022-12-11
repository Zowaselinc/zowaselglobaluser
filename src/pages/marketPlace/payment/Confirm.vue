<!-- <template>
    <div class="main-container d-flex position-relative justify-content-center">
        <div
            class="order-confirm d-flex flex-column position-relative container w-50 align-items-center justify-content-center">
            <div class="zowasel-logo position-relative">
                <img class="img-fluid" src="@/assets/images/logos/zowasel-grey-logo.png" alt="" srcset="">
            </div>
            <div class="text-container w-75 mb-5 text-center">
                <h1>Order Confirmed</h1>
                <p class="text-justify">You have successfully registered with Zowasel as a partner. Proceed to your
                    dashboard to set up account.
                </p>
            </div>
            <div class="d-grid w-75">
                <a href="/marketplace" :class="['btn', 'btn-goto-marketplace', 'mb-3 ']"
                    type="button">Go to
                    market place
                </a>
                <a href="/marketplace/ordertracking" :class="['btn', 'btn-track', 'mt-2 mb-1']" type="button">Track
                    order
                </a>
            </div>
        </div>
        <div class="dot bottom position-absolute">
            <img src="@/assets/images/vectors/dot.svg">
        </div>
        <div class="dot top position-absolute">
            <img src="@/assets/images/vectors/dot.svg">
        </div>
    </div>
</template>

<script>
export default {
    name: "Confirm",
    components: {

    },
    data() {
        return {

        };
    },
    methods: {
    
    },
    mounted() {
        
    },
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";

#dot-group {
    width: 40px;
    height: 50px;
    background: red;
}

.main-container {
    background-image: url("@/assets/images/backgrounds/userViews.png");
    width: 100%;
    height: 100vh;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;

    &::after {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        content: "";
        background: #FFFFFF;
        opacity: 0.95;

    }

    >div {
        z-index: 99;
    }

    .bottom{
        bottom: 100px;
        left: -25px;
    }
    .top{
        top: 100px;
        right: -25px;
    }
}

.zowasel-logo {
    width: 236px;
    bottom: 60px;

}

.order-confirm {
    .text-container {
        h1 {
            text-transform: capitalize;
            @include textStyles(Poppins, 700, 54px, 76px);
            color: #1D1D1D;

        }

        p {
            color: rgba(45, 55, 72, 0.6);
            @include textStyles(Poppins, 400, 16px, 22px);

        }
    }

}

// button group
.d-grid {
    a {
        padding: 10px;
        border-radius: 5px;
        @include textStyles(Inter, 600, 16px, 19px);
    }

    a.btn-goto-marketplace {
        background: #05B050;
        color: #FFFFFF;

    }

    a.btn-track {
        border: 1px solid #040308;
        color: #040308;
    }
}
</style> -->






<!-- Filter header on temporary  components -->
<template>
    <div class="filter-header">
        <div class="filter-content-wrapper container">
            <!--  filter header -->
            <div class="filter-header-content d-flex position-relative align-items-center">
                <h2 class="filter-header-text-h1">Filter by</h2>
                <div class="filter-header-icon d-flex justify-content-center align-items-center">
                    <img src="@/assets/images/vectors/arrowupsymbol.svg" alt="arrow-icon">
                </div>
            </div>
            <hr>

            <!-- main Content -->

            <div class="filter-main-container d-flex">
                <!-- row 1 -->
                <div class="filter-item d-flex flex-column col ">
                    <!-- type -->
                    <div class="rowz d-flex align-items-center mb-4">
                        <h2>Type</h2>
                    </div>
                    <div class="rowz d-flex align-items-center mb-3 position-relative">
                        <div class="filter-words d-flex">
                            <div class="checkbox  d-flex justify-content-center align-content-center">
                                <img src="@/assets/images/vectors/tick-white.svg">
                            </div>
                            <div class="ms-3 check-words">Fertilizers</div>
                        </div>
                        <div class="number-identifier "><span>54688</span></div>
                    </div>
                    <div class="rowz d-flex align-items-center mb-3 position-relative">
                        <div class="filter-words d-flex">
                            <div class="checkbox active d-flex justify-content-center align-content-center">
                                <img src="@/assets/images/vectors/tick-white.svg">
                            </div>
                            <div class="ms-3 check-words">Herbicides</div>
                        </div>
                        <div class="number-identifier "><span>345890</span></div>
                    </div>
                    <div class="rowz d-flex align-items-center mb-3 position-relative">
                        <div class="filter-words d-flex">
                            <div class="checkbox active d-flex justify-content-center align-content-center">
                                <img src="@/assets/images/vectors/tick-white.svg">
                            </div>
                            <div class="ms-3 check-words">Fungicides</div>
                        </div>
                        <div class="number-identifier "><span>47953</span></div>
                    </div>
                    <div class="rowz d-flex align-items-center mb-3 position-relative">
                        <div class="filter-words d-flex">
                            <div class="checkbox d-flex justify-content-center align-content-center">
                                <img src="@/assets/images/vectors/tick-white.svg">
                            </div>
                            <div class="ms-3 check-words">Insectides</div>
                        </div>
                        <div class="number-identifier "><span>56780</span></div>
                    </div>
                    <div class="rowz d-flex align-items-center mb-3 position-relative">
                        <div class="filter-words d-flex">
                            <div class="checkbox active d-flex justify-content-center align-content-center">
                                <img src="@/assets/images/vectors/tick-white.svg">
                            </div>
                            <div class="ms-3 check-words">Seeds</div>
                        </div>
                        <div class="number-identifier "><span>234789</span></div>
                    </div>

                    <!-- price -->
                    <div class="rowz d-flex align-items-center mb-3 mt-4">
                        <div class="ms-3 check-words-price">Price</div>
                    </div>
                    <!-- progress bar -->
                    <div class="position-relative">
                        <div class="ms-3 progress-bar mt-3 position-relative">
                            <div class="progress"></div>
                        </div>
                        <div id="circle-1" class="circlee  circle-1 position-absolute"><span></span></div>
                        <div id="circle-2" class="circlee   circle-2 position-absolute"><span></span></div>
                    </div>
                    <div class="row mt-3">
                        <div class="col">
                            <label for="exampleInputEmail1" class="form-label margin-btm-sm mt-0">min</label>
                            <input type="text" class="form-control mt-0" id="exampleInputEmail1"
                                aria-describedby="emailHelp" placeholder="0" min="0">
                        </div>
                        <div class="col">
                            <label for="exampleInputEmail1" class="form-label margin-btm-sm mt-0">Max</label>
                            <input type="text" class="form-control mt-0" id="exampleInputEmail1"
                                aria-describedby="emailHelp" placeholder="10 000">
                        </div>
                    </div>
                </div>
                <!-- row 2 -->
                <div class="filter-item d-flex flex-column col-2 ">
                    <!-- type -->
                    <div class="rowz d-flex align-items-center mb-4">
                        <h2>Type</h2>
                    </div>
                    <div class="rowz d-flex align-items-center mb-3 position-relative">
                        <div class="filter-words d-flex">
                            <div class="checkbox  d-flex justify-content-center align-content-center">
                                <img src="@/assets/images/vectors/tick-white.svg">
                            </div>
                            <div class="ms-3 check-words">24 hours</div>
                        </div>

                    </div>
                    <div class="rowz d-flex align-items-center mb-3 position-relative">
                        <div class="filter-words d-flex">
                            <div class="checkbox active d-flex justify-content-center align-content-center">
                                <img src="@/assets/images/vectors/tick-white.svg">
                            </div>
                            <div class="ms-3 check-words">30</div>
                        </div>

                    </div>
                    <div class="rowz d-flex align-items-center mb-3 position-relative">
                        <div class="filter-words d-flex">
                            <div class="checkbox active d-flex justify-content-center align-content-center">
                                <img src="@/assets/images/vectors/tick-white.svg">
                            </div>
                            <div class="ms-3 check-words">60 Days</div>
                        </div>
                    </div>
                    <div class="rowz d-flex align-items-center mb-3 position-relative ">
                        <div class="filter-words d-flex">
                            <div class="checkbox d-flex justify-content-center align-content-center">
                                <img src="@/assets/images/vectors/tick-white.svg">
                            </div>
                            <div class="ms-3 check-words">BG</div>
                        </div>
                    </div>

                    <!-- price -->
                    <div class="rowz d-flex align-items-center mb-3 mt-4">
                        <div class="ms-3 check-words-price seller-type">Seller Type</div>
                    </div>
                    <div class="rowz d-flex align-items-center mb-3 position-relative">
                        <div class="filter-words d-flex">
                            <div class="checkbox d-flex justify-content-center align-content-center">
                                <img src="@/assets/images/vectors/tick-white.svg">
                            </div>
                            <div class="ms-3 check-words">Blue Chip</div>
                        </div>

                    </div>
                    <div class="rowz d-flex align-items-center mb-3 position-relative">
                        <div class="filter-words d-flex">
                            <div class="checkbox active d-flex justify-content-center align-content-center">
                                <img src="@/assets/images/vectors/tick-white.svg">
                            </div>
                            <div class="ms-3 check-words">Brown Chip</div>
                        </div>
                        
                    </div>
                    <div class="rowz d-flex align-items-center mb-3 position-relative">
                        <div class="filter-words d-flex">
                            <div class="checkbox active d-flex justify-content-center align-content-center">
                                <img src="@/assets/images/vectors/tick-white.svg">
                            </div>
                            <div class="ms-3 check-words">Red Hot</div>
                        </div>
                        
                    </div>
                </div>
                <!-- row 3 -->
                          <!-- row 1 -->
                          <div class="filter-item d-flex flex-column col ">
                    <!-- type -->
                    <div class="rowz d-flex align-items-center mb-4">
                        <h2>Type</h2>
                    </div>
                    <div class="rowz d-flex align-items-center mb-3 position-relative">
                        <div class="filter-words d-flex">
                            <div class="checkbox  d-flex justify-content-center align-content-center">
                                <img src="@/assets/images/vectors/tick-white.svg">
                            </div>
                            <div class="ms-3 check-words">Fertilizers</div>
                        </div>
                        <div class="filter-words d-flex ms-4">
                            <div class="checkbox  active d-flex justify-content-center align-content-center">
                                <img src="@/assets/images/vectors/tick-white.svg">
                            </div>
                            <div class="ms-3 check-words">Fertilizers</div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    </div>

</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";

.filter-header {
    width: 71%;
    background: #FFFFFF;
}

.filter-content-wrapper {
    h2 {
        @include textStyles(Poppins, 700, 18px, 24px);
        letter-spacing: 0.01em;
        color: #4A4754;
    }

    .filter-header-icon {
        width: 22px;
        height: 22px;
        background: #05B050;
        border-radius: 50%;
        position: absolute;
        right: 0;

        img {
            transform: rotate(360deg);
            width: 70%;
        }
    }

    .filter-main-container {
        margin-left: 15px;
        gap: 8%;

        .filter-item {
            h2 {
                letter-spacing: 0.01em;
                color: #4A4754;
                @include textStyles(Poppins, 600, 16px, 22px);
            }

            .rowz {
                display: flex !important;

                .checkbox {
                    border: 2px solid #D1D1D1;
                    width: 24px;
                    height: 24px;

                    img {
                        display: none;
                    }
                }

                // toggle
                .active {
                    background: #05B050;
                    border: 1.5px solid #047B38;

                    img {
                        display: block !important;
                    }
                }

                .check-words {
                    @include textStyles('Maven Pro', 400, 16px, 24px);
                    color: #4A4754;
                }

                .check-words-price {
                    @include textStyles(Poppins, 600, 16px, 22px);
                    letter-spacing: 0.01em;
                    color: #4A4754;
                }
                .seller-type{
                    margin-top: 40px;
                }

                .number-identifier {
                    background: #EDEDEE;
                    border-radius: 4px;
                    padding: 0px 8px;
                    width: 70px;
                    position: absolute;
                    right: 0;

                    span {
                        color: #05B050;
                        letter-spacing: 0.04em;

                    }
                }
            }
        }

        .progress-bar {
            background: #EDEDEE;
            border-radius: 5.34111px;
            height: 2.67px;

            .progress {
                background: #05B050;
                border-radius: 5.34111px;
                width: 60%;
                margin-left: 20%;
            }

        }

        .circlee {
            width: 18.69px;
            height: 18.69px;
            background: #E6F7EE;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;

            span {
                width: 13.35px;
                height: 13.35px;
                border-radius: 50%;
                background: #05B050 !important;
            }
        }

        #circle-1 {
            left: 22%;
            top: 8px;
        }

        #circle-2 {
            right: 18%;
            top: 7px;
        }
    }
}
</style>