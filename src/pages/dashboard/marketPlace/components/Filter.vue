<!-- Filter header on temporary  components -->
<template>
    <div class="filter-header px-2">
        <div id="filter-wrapper" class="filter-content-wrapper container">
            <!--  filter header -->
            <div class="filter-header-content d-flex position-relative align-items-center">
                <h2 class="filter-header-text-h1">Filter by</h2>
                <div id="carret-icon" class="filter-header-icon d-flex justify-content-center align-items-center"
                    v-on:click="toggleFilter">
                    <span>&#94;</span>
                </div>
            </div>
            <hr>

            <!-- main Content -->

            <div id="main-filter-content" class="filter-main-container d-flex pe-5" v-if="filter">
                <!-- row 1 -->
                <div class="filter-item d-flex flex-column row-1 ">
                    <!-- type -->
                    <div class="rowz d-flex align-items-center mb-3">
                        <h2>Product Type</h2>
                    </div>
                    <div class="rowz d-flex align-items-center mb-2 position-relative">
                        <div class="filter-words d-flex">
                            <!-- checkbox component -->
                            <Checkbox></Checkbox>
                            <div class="ms-3 check-words">Fertilizers</div>
                        </div>
                        <div class="number-identifier "><span>54688</span></div>
                    </div>
                    <div class="rowz d-flex align-items-center mb-2 position-relative">
                        <div class="filter-words d-flex">
                            <!-- checkbox component -->
                            <Checkbox></Checkbox>
                            <div class="ms-3 check-words">Herbicides</div>
                        </div>
                        <div class="number-identifier "><span>345890</span></div>
                    </div>
                    <div class="rowz d-flex align-items-center mb-2 position-relative">
                        <div class="filter-words d-flex">
                            <!-- checkbox component -->
                            <Checkbox></Checkbox>
                            <div class="ms-3 check-words">Fungicides</div>
                        </div>
                        <div class="number-identifier "><span>47953</span></div>
                    </div>
                    <div class="rowz d-flex align-items-center mb-2 position-relative">
                        <div class="filter-words d-flex">
                            <!-- checkbox component -->
                            <Checkbox></Checkbox>
                            <div class="ms-3 check-words">Insectides</div>
                        </div>
                        <div class="number-identifier "><span>56780</span></div>
                    </div>
                    <div class="rowz d-flex align-items-center mb-2 position-relative">
                        <div class="filter-words d-flex">
                            <!-- checkbox component -->
                            <Checkbox></Checkbox>
                            <div class="ms-3 check-words">Seeds</div>
                        </div>
                        <div class="number-identifier "><span>234789</span></div>
                    </div>

                    <!-- price -->
                    <div class="rowz d-flex align-items-center mb-2 mt-3">
                        <div class="ms-3 check-words-price">Price</div>
                    </div>
                    <!-- range -->
                    <div
                        class="customRange-conatiner d-flex flex-row justify-content-center align-items-center position-relative">
                        <input type="range" class="form-range fromSlider" id="customRange1" v-model="min" min="0"
                            :max="max">
                        <input type="range" class="form-range toSlider" id="customRange2" v-model="max" :min="min" max="100000">
                    </div>

                    <div class="mt-2 d-flex flex-row justify-content-between align-items-center">
                        <div class="form_control_container">
                            <div class="form_control_container__time">Min</div>
                            <input class="form_control_container__time__input" type="number" id="fromInput" value="10"
                                min="0" max="100" />
                        </div>
                        <div class="form_control_container">
                            <div class="form_control_container__time">Max</div>
                            <input class="form_control_container__time__input" type="number" id="toInput" value="40"
                                min="0" max="100" />
                        </div>
                    </div>
                </div>
                <!-- row 2 -->
                <div class="filter-item d-flex flex-column row-2 ">
                    <!-- type -->
                    <div class="rowz d-flex align-items-center mb-4">
                        <h2>Manufacturer</h2>
                    </div>
                    <div class="rowz d-flex align-items-center mb-3 position-relative">
                        <div class="filter-words d-flex">
                            <!-- checkbox component -->
                            <Checkbox></Checkbox>
                            <div class="ms-3 check-words">Dangote refinery</div>
                        </div>

                    </div>
                    <div class="rowz d-flex align-items-center mb-3 position-relative">
                        <div class="filter-words d-flex">
                            <!-- checkbox component -->
                            <Checkbox></Checkbox>
                            <div class="ms-3 check-words">Nasco </div>
                        </div>

                    </div>
                    <div class="rowz d-flex align-items-center mb-3 position-relative">
                        <div class="filter-words d-flex">
                            <!-- checkbox component -->
                            <Checkbox></Checkbox>
                            <div class="ms-3 check-words">60 Days</div>
                        </div>
                    </div>
                    <div class="rowz d-flex align-items-center  position-relative ">
                        <div class="filter-words d-flex">
                            <!-- checkbox component -->
                            <Checkbox></Checkbox>
                            <div class="ms-3 check-words">Carbury</div>
                        </div>
                    </div>

                    <!-- price -->
                    <div class="rowz d-flex align-items-center mb-3">
                        <div class="ms-3 check-words-price seller-type">Quality</div>
                    </div>
                    <div class="rowz d-flex align-items-center mb-3 position-relative">
                        <div class="filter-words d-flex">
                            <!-- checkbox component -->
                            <Checkbox></Checkbox>
                            <div class="ms-3 check-words">Hybrid</div>
                        </div>

                    </div>
                    <div class="rowz d-flex align-items-center mb-3 position-relative">
                        <div class="filter-words d-flex">
                            <!-- checkbox component -->
                            <Checkbox></Checkbox>
                            <div class="ms-3 check-words">Normal</div>
                        </div>

                    </div>
                    <div class="rowz d-flex align-items-center mb-3 position-relative">
                        <div class="filter-words d-flex">
                            <!-- checkbox component -->
                            <Checkbox></Checkbox>
                            <div class="ms-3 check-words">Organic</div>
                        </div>

                    </div>
                </div>
                <!-- row 3 -->

                <div class="filter-item d-flex flex-column row-3 ">
                    <!-- type -->
                    <div class="rowz d-flex align-items-center mb-3">
                        <h2>Shipping Method</h2>
                    </div>
                    <div class="rowz d-flex align-items-center mb-3 position-relative">
                        <div class="filter-words d-flex">
                            <!-- checkbox component -->
                            <Checkbox></Checkbox>
                            <div class="ms-3 check-words">Zowasel</div>
                        </div>
                        <div class="filter-words d-flex ms-4">
                            <!-- checkbox component -->
                            <Checkbox></Checkbox>
                            <div class="ms-3 check-words">Self Transport</div>
                        </div>

                    </div>
                    <div class=" mb-4 rowz">
                        <select class="form-select" aria-label="Default select example">
                            <option>Select crop center <span>&blacktriangledown;</span>
                            </option>
                        </select>
                    </div>
                    <div class="rowz d-flex align-items-center mb-4">
                        <h2>Quality</h2>
                    </div>
                    <div class="d-flex mb-4 selct-input">
                        <select id="kilogram" class="form-select" aria-label="Default select example">
                            <option>Kilogram
                            </option>
                        </select>
                        <input id="one" type="text" class="form-control" placeholder="1"
                            aria-label="Recipient's username" aria-describedby="basic-addon2">
                    </div>
                    <button type="button" class="btn  btn-lg mb-4 btn-1">Apply filters</button>
                    <button type="button" class="btn  btn-lg mb-4">Reset filters</button>

                </div>
            </div>


        </div>
    </div>

</template>

<script>
import Checkbox from "@/components/Checkbox.vue";
export default {
    data() {
        return {
            filter: true,
            min : 0,
            max : 100000
        }
    },
    methods: {
        toggleFilter() {
            this.filter = !this.filter;
        }
    },
    components: {
        Checkbox
    },
}

</script>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";

.filter-header {
    width: 90%;
    background: #FFFFFF;
}

.active {
    #carret-icon span {
        transform: rotate(360deg);
        cursor: default;
    }

    #main-filter-content {
        display: none !important;
    }

    hr {
        display: none !important;
    }
}

.filter-content-wrapper {
    padding: 5px;

    .filter-header-content {
        padding: 10px 0px;
        display: flex;
        align-items: center;
    }

    h2 {
        @include textStyles(Poppins, 700, 16px, 24px);
        letter-spacing: 0.01em;
        color: #4A4754;
        margin-bottom: 0px;
    }

    .filter-header-icon {
        width: 20px;
        height: 20px;
        background: #05B050;
        border-radius: 50%;
        position: absolute;
        right: 5px;

        span {
            color: #ffffff;
            transform: rotate(180deg);
            padding-top: 4px;
            font-size: 25px;
            cursor: default;
        }
    }

    .filter-main-container {
        margin-left: 15px;
        gap: 8%;

        .row-1 {
            width: 35%;
        }

        .row-2 {
            width: 25%;
        }

        .row-3 {
            width: 40%;
        }

        .filter-item {

            h2 {
                letter-spacing: 0.01em;
                color: #4A4754;
                @include textStyles(Poppins, 600, 14px, 22px);
            }

            .rowz {
                display: flex !important;

                .filter-words {
                    align-items: center;
                }

                .check-words {
                    @include textStyles('Maven Pro', 400, 14px, 24px);
                    color: #4A4754;
                }



                .check-words-price {
                    @include textStyles(Poppins, 600, 14px, 22px);
                    letter-spacing: 0.01em;
                    color: #4A4754;
                }

                .seller-type {
                    margin-top: 30px;
                }

                .number-identifier {
                    background: #EDEDEE;
                    border-radius: 4px;
                    padding: 0px 8px;
                    width: 70px;
                    position: absolute;
                    right: 0%;

                    span {
                        font-size: 14px;
                        color: #05B050;
                        letter-spacing: 0.04em;

                    }
                }

                .form-select {
                    background: #F9F9F9 !important;
                    border: 1px solid #EDEDEE;
                    border-radius: 4px;
                    font-family: 'Open Sans';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 14px;
                    line-height: 19px;

                    color: #4A4754;

                }


            }

            .selct-input {
                border: 1px solid hsl(240, 3%, 93%);
                border-radius: 4px;
                align-items: center;
                padding: 5px 7px;
                gap: 3px;

                select#kilogram {
                    width: 45%;
                    font-size: 10px;
                    border: 0px !important;
                    border-radius: 0px !important;
                }

                #one {
                    width: 55%;
                    border-width: 0px !important;
                    border-left-width: 1px !important;
                    border-radius: 0px !important;
                    margin-top: 0px;
                    height: 20px;
                }

            }

            button {
                background: #05B050;
                box-shadow: 0px 2px 4px rgba(44, 39, 56, 0.08), 0px 4px 8px rgba(44, 39, 56, 0.08);
                border-radius: 4px;
                color: #FFFFFF;
                font-size: 14px;
            }

            // #minus-sign {
            //     align-self: center;
            //     flex-grow: 0;
            //     padding: 12px;
            //     transform: translateY(15px);
            // }
        }

    }

    #customRange1,
    #customRange2 {
        border: none !important;
        padding: 0 !important;
        -webkit-appearance: none;
        appearance: none;

    }

    .form-range::-moz-range-thumb {
        background-color: #05B050;

    }

    .form-range::-webkit-range-thumb {
        background-color: #05B050;

    }

    .form-range.fromSlider::-moz-range-track {
        height: 0rem;
    }

    .form_control_container__time,
    input[type="number"] {
        font-size: 14px;
        color: #8a8383;
    }

    input[type="number"].form_control_container__time__input {
        width: 70px;
        height: 30px;
        border: none;
    }

    .form-range {
        width: 100%;
    }

    .fromSlider {
        height: 0;
        z-index: 1;
    }

    .fromSlider::-webkit-slider-thumb:hover,
    .toSlider::-webkit-slider-thumb:hover{
        z-index : 1;
    }
    input[type="range"]{
        -moz-appearance: none;
        -webkit-appearance: none;
        appearance: none;
        position: absolute;     
    }
    // 
}
</style>