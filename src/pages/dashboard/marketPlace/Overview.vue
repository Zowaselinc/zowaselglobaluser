<template>
    <DefaultNav>
        <div class="big-container">

                <div class="top-text">
            <h1>Buy & Sell with Ease</h1>
            <p>Empowering growers from seed to market</p>
        </div>
        <div class="second-bar">
            <div class="input-area">
                <input type="text" placeholder="Search">
                <div class="icon">
                    <img src="@/assets/images/vectors/Search.svg" alt="">
                </div>
            </div>
            <div class="button-area">
                <a href="#">Crops for sale</a>
                <a href="#" class="green-btns">Crops Wanted</a>
                <a href="#">Crop Auction</a>
                <a href="/marketplace/inputmarket">Input Market</a>
                <a href="#">All</a>
            </div>
        </div>

        <div class="main-content">
            <div class="left">
                <h3>Filter by</h3>

                <h3>Type</h3>
                <div class="each-type">
                    <div class="left-type">
                         <div class="check" id="checkbox">
                            <input type="checkbox" hidden name="" id="">
                            <a href="#" v-on:click="checked()"><img src="@/assets/images/vectors/tick-white.svg" alt=""></a>
                        </div>
                        <p>Fertilizers</p>
                    </div>
                    <p class="green-text">56874</p>
                   
                </div>
                <div class="each-type">
                    <div class="left-type">
                         <div class="check" id="checkbox">
                            <input type="checkbox" hidden name="" id="">
                            <a href="#" v-on:click="checked()"><img src="@/assets/images/vectors/tick-white.svg" alt=""></a>
                        </div>
                        <p>Herbicides</p>
                    </div>
                    <p class="green-text">56874</p>
                   
                </div>
                <div class="each-type">
                    <div class="left-type">
                         <div class="check" id="checkbox">
                            <input type="checkbox" hidden name="" id="">
                            <a href="#" v-on:click="checked()"><img src="@/assets/images/vectors/tick-white.svg" alt=""></a>
                        </div>
                        <p>Fungicides</p>
                    </div>
                    <p class="green-text">56874</p>
                   
                </div>
                <div class="each-type">
                    <div class="left-type">
                         <div class="check" id="checkbox">
                            <input type="checkbox" hidden name="" id="">
                            <a href="#" v-on:click="checked()"><img src="@/assets/images/vectors/tick-white.svg" alt=""></a>
                        </div>
                        <p>Insecticides</p>
                    </div>
                    <p class="green-text">4874</p>
                   
                </div>
                <div class="each-type">
                    <div class="left-type">
                         <div class="check" id="checkbox">
                            <input type="checkbox" hidden name="" id="">
                            <a href="#" v-on:click="checked()"><img src="@/assets/images/vectors/tick-white.svg" alt=""></a>
                        </div>
                        <p>Seeds</p>
                    </div>
                    <p class="green-text">56874</p>
                   
                </div>
                <h3>Payment Terms</h3>
                <div class="each-type">
                    <div class="left-type">
                         <div class="check" id="checkbox">
                            <input type="checkbox" hidden name="" id="">
                            <a href="#" v-on:click="checked()"><img src="@/assets/images/vectors/tick-white.svg" alt=""></a>
                        </div>
                        <p>24 hours</p>
                    </div>
                   
                </div>
                <div class="each-type">
                    <div class="left-type">
                         <div class="check" id="checkbox">
                            <input type="checkbox" hidden name="" id="">
                            <a href="#" v-on:click="checked()"><img src="@/assets/images/vectors/tick-white.svg" alt=""></a>
                        </div>
                        <p>30 days</p>
                    </div>
                   
                </div>
                <div class="each-type">
                    <div class="left-type">
                         <div class="check" id="checkbox">
                            <input type="checkbox" hidden name="" id="">
                            <a href="#" v-on:click="checked()"><img src="@/assets/images/vectors/tick-white.svg" alt=""></a>
                        </div>
                        <p>60 days</p>
                    </div>
                   
                </div>
                <div class="each-type">
                    <div class="left-type">
                         <div class="check" id="checkbox">
                            <input type="checkbox" hidden name="" id="">
                            <a href="#" v-on:click="checked()"><img src="@/assets/images/vectors/tick-white.svg" alt=""></a>
                        </div>
                        <p>BG</p>
                    </div>
                   
                </div>
                <h3>Seller type</h3>
                <div class="each-type">
                    <div class="left-type">
                         <div class="check" id="checkbox">
                            <input type="checkbox" hidden name="" id="">
                            <a href="#" v-on:click="checked()"><img src="@/assets/images/vectors/tick-white.svg" alt=""></a>
                        </div>
                        <p>Blue chip</p>
                    </div>
                   
                </div>
                <div class="each-type">
                    <div class="left-type">
                         <div class="check" id="checkbox">
                            <input type="checkbox" hidden name="" id="">
                            <a href="#" v-on:click="checked()"><img src="@/assets/images/vectors/tick-white.svg" alt=""></a>
                        </div>
                        <p>Brown chip</p>
                    </div>
                   
                </div>
                <div class="each-type">
                    <div class="left-type">
                         <div class="check" id="checkbox">
                            <input type="checkbox" hidden name="" id="">
                            <a href="#" v-on:click="checked()"><img src="@/assets/images/vectors/tick-white.svg" alt=""></a>
                        </div>
                        <p>Red hot</p>
                    </div>
                   
                </div>
                <h3>Quantity</h3>
                <div class="quantity">
                    <select name="" id="">
                        <option value="">kilogram</option>
                    </select>
                    <input type="text">
                </div>
                <h3>Shipping Method</h3>
                <div class="shipping">
                    <div class="each-ship">
                        <div class="check" id="checkbox">
                            <input type="checkbox" hidden name="" id="">
                            <a href="#" v-on:click="checked()"><img src="@/assets/images/vectors/tick-white.svg" alt=""></a>
                        </div>
                        <p>Self transport</p>
                    </div>
                    <div class="each-ship">
                        <div class="check" id="checkbox">
                            <input type="checkbox" hidden name="" id="">
                            <a href="#" v-on:click="checked()"><img src="@/assets/images/vectors/tick-white.svg" alt=""></a>
                        </div>
                        <p>Zowasel</p>
                    </div>                    
                </div>
                <select name="" id="" class="shop-center">
                        <option value="">Select crop center</option>
                </select>
                <h3>Price</h3>
                <div class="range">
                    <input type="range">
                </div>
                <div class="min-max">
                    <div class="min">
                        <label for="">min</label>
                        <input type="text" placeholder="min" name="" id="">
                    </div>
                    <div class="min">
                        <label for="">max</label>
                        <input type="text" placeholder="max" name="" id="">
                    </div>
                     
                </div>

                <div class="btns-down">
                    <button class="apply">Apply filters</button>
                    <button class="reset">Reset filters</button>
                </div>
                
                

            </div>
            <div class="right">
                <div class="top-texts">
                    <h3>Newest</h3>
                    <div class="top-text-right">
                        <p>sort by </p>
                        <select name="" id="">
                            <option value="">Best net price</option>
                        </select>
                    </div>
                </div>
                <a href="/marketplace/product" class="each-item">
                    <p>Corn - No. 2 Yellow</p>
                    <p>Feb 1, 2020 -Feb 29,2022</p>
                    <p>NGN, 23,980/bag</p>
                     <p>cal-maine foods, inc., feed division - union city,
                         OH 013953 (facility) - 100 miles</p>
                </a>
                <a href="/marketplace/product" class="each-item">
                    <p>Corn - No. 2 Yellow</p>
                    <p>Feb 1, 2020 -Feb 29,2022</p>
                    <p>NGN, 23,980/bag</p>
                     <p>cal-maine foods, inc., feed division - union city,
                         OH 013953 (facility) - 100 miles</p>
                </a>
                <a href="/marketplace/product" class="each-item">
                    <p>Corn - No. 2 Yellow</p>
                    <p>Feb 1, 2020 -Feb 29,2022</p>
                    <p>NGN, 23,980/bag</p>
                     <p>cal-maine foods, inc., feed division - union city,
                         OH 013953 (facility) - 100 miles</p>
                </a>
                <a href="/marketplace/product" class="each-item">
                    <p>Corn - No. 2 Yellow</p>
                    <p>Feb 1, 2020 -Feb 29,2022</p>
                    <p>NGN, 23,980/bag</p>
                     <p>cal-maine foods, inc., feed division - union city,
                         OH 013953 (facility) - 100 miles</p>
                </a>
                <a href="/marketplace/product" class="each-item">
                    <p>Corn - No. 2 Yellow</p>
                    <p>Feb 1, 2020 -Feb 29,2022</p>
                    <p>NGN, 23,980/bag</p>
                     <p>cal-maine foods, inc., feed division - union city,
                         OH 013953 (facility) - 100 miles</p>
                </a>
                <a href="/marketplace/product" class="each-item">
                    <p>Corn - No. 2 Yellow</p>
                    <p>Feb 1, 2020 -Feb 29,2022</p>
                    <p>NGN, 23,980/bag</p>
                     <p>cal-maine foods, inc., feed division - union city,
                         OH 013953 (facility) - 100 miles</p>
                </a>
                <a href="/marketplace/product" class="each-item">
                    <p>Corn - No. 2 Yellow</p>
                    <p>Feb 1, 2020 -Feb 29,2022</p>
                    <p>NGN, 23,980/bag</p>
                     <p>cal-maine foods, inc., feed division - union city,
                         OH 013953 (facility) - 100 miles</p>
                </a>
                <a href="/marketplace/product" class="each-item">
                    <p>Corn - No. 2 Yellow</p>
                    <p>Feb 1, 2020 -Feb 29,2022</p>
                    <p>NGN, 23,980/bag</p>
                     <p>cal-maine foods, inc., feed division - union city,
                         OH 013953 (facility) - 100 miles</p>
                </a>
                <a href="/marketplace/product" class="each-item">
                    <p>Corn - No. 2 Yellow</p>
                    <p>Feb 1, 2020 -Feb 29,2022</p>
                    <p>NGN, 23,980/bag</p>
                     <p>cal-maine foods, inc., feed division - union city,
                         OH 013953 (facility) - 100 miles</p>
                </a>
                <div class="tags">
                    <h4>Related</h4>
                    <a href="#">cash Crops</a>
                    <a href="#">Seeds</a>
                    <a href="#">Cocoa</a>
                    <a href="#">Machinery</a>
                    <a href="#">grains</a>
                    <a href="#">aalm Oil</a>
                </div>
            </div>
        </div>   

        </div>



    </DefaultNav>
</template>

<script>
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

.top-text{
        width: 100%;
        background: #262C3F;
        color: white;
        padding: 30px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        
        h1{
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 700;
            font-size: 68px;
        }
    }
    .second-bar{
         width: 100%;
        background-color: white;
        padding-top: 50px;
        padding-bottom: 50px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .input-area{
       width: 60%;
       display: flex;
       align-items: center;

       input{
        width: 95%;
        height: 60px;
        margin-top: 0px;
        border: 1px solid #05B050 !important;
        border-radius: 5px;
       }
       .icon{
        width: 54px;
        height: 60px;
        background-color: #05B050;
        display: flex;
        justify-content: center;
        align-items: center;
       }
    }.button-area{
        margin-top: 35px;
        display: flex;
        gap: 16px;
        width: 60%;
        justify-content: space-between;

        a{
            background-color: white;
            padding:10px 35px;
            border: 1px solid #696671;
            border-radius: 55px;
            font-family: 'Maven Pro';
            font-style: normal;
            font-weight: 700;
            font-size: 15px;
            color: #696671;
            display: flex;
            justify-content: center;
            align-items: center;
            text-decoration: none;

           
        }
         .green-btns{
                border: none;
                color: white;
                background: #05B050;
                
            }
    }
    .main-content{
        background: #F1F1F1;
        width: 100%;
        display: flex;
        flex-direction: row;
        padding: 50px 100px;

        .left{
            width: 25%;
            background-color: white;
            padding: 40px 20px;

            h3{
                margin-top: 30px;
                margin-bottom: 20px;
            }
        }

        .check{
            width: 24px;
            height: 24px;
            display: flex;
            justify-content: center;
            align-items: center;
            border: 1px solid black;
            

            input{
                width: 100%;
                height: 100%;
            }
        }
        #checkbox{
            background-color: white;
        }
    }
    .each-type{
        display: flex;
        justify-content: space-between;

        .left-type{
            display: flex;
            p{
                margin-left: 10px;
            }
        }
        .green-text{
            padding: 5px;
            background: #EDEDEE;
            border-radius: 4px;
            font-family: 'Maven Pro';
            font-style: normal;
            font-weight: 700;
            font-size: 12px;
            color: #05B050;
        }
    }
    .quantity{
        width: 100%;
        select{
            background: #F7F7F7;
            border: 1px solid #EDEDEE;
            border-radius: 4px;
            padding: 10px 15px;
            width: 35%;
        }
        input{
            background: #F7F7F7;
            border: 1px solid #EDEDEE;
            border-radius: 4px;
            width: 65%;
    }
    }
    .shipping{
        display: flex;
        justify-content: space-around;
    }
    .each-ship{
        display: flex;
        p{
            margin-left: 10px;
        }
    }
    .shop-center{
        width: 100%;
          background: #F7F7F7;
            border: 1px solid #EDEDEE;
            border-radius: 4px;
            padding: 10px 15px;
    }
    .range input{
        width: 100%;
    }
    .min-max{
        display: flex;
    }
    .min{
        display: flex;
        flex-direction: column;
        input{
            width: 80%;
        }
    }
    .apply{
        width: 100%;
        background-color: #05B050;
        color: white;
        height: 50px;
        border: none;
        box-shadow: 0px 2px 4px rgba(44, 39, 56, 0.08), 0px 4px 8px rgba(44, 39, 56, 0.08);
        border-radius: 4px;
    }
    .reset{
         width: 100%;
        background-color: white;
        color: #05B050;
        height: 50px;
        margin-top: 20px;
        border: 1px solid #05B050;
        box-shadow: 0px 2px 4px rgba(44, 39, 56, 0.08), 0px 4px 8px rgba(44, 39, 56, 0.08);
        border-radius: 4px;
    }
    .btns-down{
        margin-top: 100px;
    }
    .right{
        width: 90%;
        padding: 100px;
        padding-right: 0px;
        display: flex;
        flex-direction: column;
    }
    .top-texts{
        display: flex;
        justify-content: space-between;

        .top-text-right{
            display: flex;
            align-items: center;

            p{
                margin-top: 5px;
            }
            select{
                margin-left: 10px;
                margin-top: 0px;
                background-color: white;
                border: 1px solid #05B050 !important;
                height: 50px;
                padding: 0px 0px 0px 20px;
            }
        }
    }
    .each-item{
        width: 100%;
        background-color: white;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 50px;
        padding: 10px 25px;
        text-decoration: none;
        font-family: 'Maven Pro';
        font-style: normal;
        font-weight: 400;
        text-transform: capitalize;
        p{
            margin: 0px;
        }


color: #4A4754;
    }
    .tags{
        width: 100%;
        display: flex;
        justify-content: space-around;
        margin-top: 50px;
        align-items: center;
        h4{
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 700;
            font-size: 14px;
            color: #19191D;
        }

        a{
            padding: 10px 20px;
            background: #EDEDF0;
            border-radius: 99px;
            font-family: 'Maven Pro';
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            color: #4A4B57;
            text-decoration: none;
        }
    }
    


</style>