<template>
    <MarketPlaceLayout>
        <div class="top-text">
            <h1>Cart</h1> 
        </div>
        <div class="big-content">
            <div class="left-side">
               <div class="each-item">
                    <div class="image">
                        <img src="@/assets/images/backgrounds/okro-small.png" alt="">
                    </div>
                    <div class="first">
                        <h4>Item:</h4>
                        <h4>Seller: </h4>
                        <h4>Unit Cost:</h4>
                    </div>
                    <div class="second">
                        <p>Coconut Fertilizer</p>
                        <p>Naziri Farms</p>
                        <p>NGN240,450</p>
                    </div>
                    <div class="third">
                        <h4>Quantity</h4>
                        <h4>Sub Total:</h4>
                    </div>
                    <div class="fourth">
                        <div class="btnss">
                            <p class="p-btn">-</p>
                            <p>3</p>
                            <p class="p-btn">+</p>
                        </div>
                        <p>NGN743,875</p>
                        <button class="remove-btn">Remove</button>
                    </div>
               </div>
               <hr>
                <div class="each-item">
                    <div class="image">
                        <img src="@/assets/images/backgrounds/okro-small.png" alt="">
                    </div>
                    <div class="first">
                        <h4>Item:</h4>
                        <h4>Seller: </h4>
                        <h4>Unit Cost:</h4>
                    </div>
                    <div class="second">
                        <p>Coconut Fertilizer</p>
                        <p>Naziri Farms</p>
                        <p>NGN240,450</p>
                    </div>
                    <div class="third">
                        <h4>Quantity</h4>
                        <h4>Sub Total:</h4>
                    </div>
                    <div class="fourth">
                        <div class="btnss">
                            <p class="p-btn">-</p>
                            <p>3</p>
                            <p class="p-btn">+</p>
                        </div>
                        <p>NGN743,875</p>
                        <button class="remove-btn">Remove</button>
                    </div>
               </div>
               <hr>
                <div class="each-item">
                    <div class="image">
                        <img src="@/assets/images/backgrounds/okro-small.png" alt="">
                    </div>
                    <div class="first">
                        <h4>Item:</h4>
                        <h4>Seller: </h4>
                        <h4>Unit Cost:</h4>
                    </div>
                    <div class="second">
                        <p>Coconut Fertilizer</p>
                        <p>Naziri Farms</p>
                        <p>NGN240,450</p>
                    </div>
                    <div class="third">
                        <h4>Quantity</h4>
                        <h4>Sub Total:</h4>
                    </div>
                    <div class="fourth">
                        <div class="btnss">
                            <p class="p-btn">-</p>
                            <p>3</p>
                            <p class="p-btn">+</p>
                        </div>
                        <p>NGN743,875</p>
                        <button class="remove-btn">Remove</button>
                    </div>
               </div>
               
                
            </div>
            <div class="right-side">

                <h3>Order Summary</h3>
                <div class="line"></div>
                <div class="each-summary">
    
                    <p>Items in Cart</p>
                    <p>3</p>
                </div>
                <div class="line"></div>
                <div class="each-summary">
    
                    <p class="total">Total</p>
                    <p class="price">NGN2,156,875</p>
                </div>
                <button>Proceed to Checkout</button>
            </div>

        </div>
      
    </MarketPlaceLayout>
</template>

<script>
    import  MarketPlaceLayout from "@/layouts/MarketPlaceLayout.vue"
    export default {
        name:'CardPayment',
        components: {
            MarketPlaceLayout,
            },
            
    }
</script>

<style lang="scss" scoped>

.top-text{
    height: 89px;
    width: 100%;
    background: #262C3F;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    margin-bottom: 50px;
}
.big-content{
    width: 100%;
    padding: 50px 95px;
    background: #F1F1F1;
    display: flex;
    flex-direction: row;
    gap: 20px;

    .left-side{
        width: 70%;
        background-color: white;
        padding: 38px;
        
      
        .each-item{
            display: flex;
            justify-content: space-between;

              .image{
            width: 200px;
            height: 200px;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .btnss{
            display: flex;
            gap: 10px;
            height: 35px;
        }
        h4{
            margin-top: 20px;
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 800;
            font-size: 16px;
            color: #2D2B33;
            margin-bottom: 0px;
        }
        p{
            margin-top: 15px;
            font-family: 'Maven Pro';
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            color: rgba(45, 55, 72, 0.6);
        }
        }
        .p-btn{
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 10px;
            width: 20px;
            height: 20px;
            background: #EDEDEE;
            border-radius:50%;
        }
        .remove-btn{
            background: #F9E9E9;
            border: 1px solid #C32021;
            border-radius: 4px;
            height: 35px;
            width: 115px;
            font-family: 'Maven Pro';
            font-style: normal;
            font-weight: 700;
            font-size: 14px;
            color: #C32021;
        }
    }
    .right-side{
        width: 30%;
        background-color: white;
        height:350px ;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 30px;
        gap: 21px;
        border-radius: 4px;

        h3{
                font-family: 'Poppins';
                font-style: normal;
                font-weight: 700;
                font-size: 20px;
                line-height: 18px;
                color: #4A4754;
            }

        .each-summary{
            display: flex;
            justify-content: space-between;
            width: 100%;
            p{
                font-family: 'Maven Pro';
                font-style: normal;
                font-weight: 500;
                font-size: 20px;
                line-height: 166.67%;
                color: rgba(45, 55, 72, 0.6);
            }
            .total{
                font-family: 'Poppins';
                font-style: normal;
                font-weight: 700;
                font-size: 20px;
                line-height: 166.67%;
                color: #96949C;
            }
            .price{
                font-family: 'Maven Pro';
                font-style: normal;
                font-weight: 700;
                font-size: 20px;
                line-height: 147%;
                color: #4A4754;
            }

            
            
        }
        .line{
                border: 1px solid #EDEDEE;
                width: 100% !important;
            }
            button{
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

}

</style>