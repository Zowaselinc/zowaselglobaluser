<template>
    <MarketPlaceLayout>
        <div class="big-content">
            <div class="image-area">
                <div class="image-container">
                     <img src="@/assets/images/backgrounds/okro-2.png" alt="">
                     <div class="small-images">
                        <img src="@/assets/images/backgrounds/okro-2.png" alt="">
                        <img src="@/assets/images/backgrounds/okro-2.png" alt="">
                        <img src="@/assets/images/backgrounds/okro-2.png" alt="">
                        <img src="@/assets/images/backgrounds/okro-2.png" alt="">
                        <img src="@/assets/images/backgrounds/okro-2.png" alt="">
                        <img src="@/assets/images/backgrounds/okro-2.png" alt="">
                     </div>
                </div>
                <div class="text-area">
                   <h1>Coconut Fertilizer</h1>
                   <p class="price">NGN240,450</p>
                   <p class="farmer">Naziri Farms</p>
                   <p class="verified"><img src="@/assets/images/vectors/verified.svg" alt=""> Verified Merchant</p>
                   <div class="ratings">
                    <img src="@/assets/images/vectors/star.svg" alt="">
                    <img src="@/assets/images/vectors/star.svg" alt="">
                    <img src="@/assets/images/vectors/star.svg" alt="">
                    <img src="@/assets/images/vectors/star.svg" alt="">
                    <img src="@/assets/images/vectors/star.svg" alt="">
                    <span>4.2</span>
                   </div>
                   <div class="review">
                    <span>800 reviews</span>
                    <span class="order">  3800 orders</span>
                   </div>

                   <div class="quantity">
                        <p>Quantity</p>
                        <div class="quantity-btns">
                            <button>-</button>
                            <p>1</p>
                            <button>+</button>
                        </div>
                   </div>
                   <h3 class="ships">Shipping: <span>NGN3050.01</span></h3>
                   <h3 class="ships">Estimated Delivery <span>to Abeoukuta on</span> 23rd November</h3>
                   <div class="buttonss">
                        <button class="buy">Buy now</button>
                        <button class="cart">Add to Cart</button>
                   </div>
                   
                </div>
            </div>
            <hr>
            <h3>Description</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec sagittis nunc, imperdiet volutpat 
                magnis bibendum. Ultrices lorem amet pharetra interdum lorem ornare eu. Tellus semper aenean 
                mauris facilisi placerat sapien urna velit. Duis faucibus convallis posuere neque neque adipiscing 
                quis egestas nulla. Viverra senectus nisl quis urna, enim id dolor pulvinar. Aliquam mi, dui pellentesque ut. 
                Sit egestas arcu nunc lacus, ipsum odio montes, pellentesque eget. In ac est sapien orci magna nisi, volutpat et cras. 
                Fermentum egestas at volutpat donec faucibus et.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec sagittis nunc, 
                imperdiet volutpat magnis bibendum. Ultrices lorem amet pharetra interdum lorem ornare eu. Tellus semper aenean mauris facilisi 
                placerat sapien urna velit. Duis faucibus convallis posuere neque neque adipiscing quis egestas nulla. Viverra senectus nisl quis urna, 
                enim id dolor pulvinar. Aliquam mi, dui pellentesque ut.
                Sit egestas arcu nunc lacus, ipsum odio montes, pellentesque eget. 
                In ac est sapien orci magna nisi, volutpat et cras. Fermentum egestas at volutpat
                 donec faucibus et.Sit egestas arcu nunc lacus, ipsum odio montes, pellentesque eget. 
                 In ac est sapien orci magna nisi, volutpat et cras. Fermentum egestas at volutpat donec faucibus et. 
                 Sit egestas arcu nunc lacus, ipsum odio montes, pellentesque eget. In ac est sapien orci magna nisi, volutpat et cras.
                  Fermentum egestas at volutpat donec faucibus et. Sit egestas arcu nunc lacus, ipsum odio montes, pellentesque
            </p>
            <div class="guide">
                <a href="#">Input Application Guide.pdf</a>
                <button>Download</button>
            </div>
            <hr>
            <h3>Specification</h3>
            <div class="specification">
                <div class="left-detail">
                    <h4>Type: <span>NPK</span></h4>
                    <h4>Other Names: <span>Quick-acting compound fertilizer</span></h4>
                    <h4>Application: <span>Plant Food</span></h4>
                    <h4>Classification: <span>Compound Fertilizer</span></h4>
                    <h4>Weight: <span>10kg</span></h4>
                </div>
                <div class="right-detail">
                    <h4>State: <span>Granular</span></h4>
                    <h4>MF: <span>N-P2O5-K2O</span></h4>
                    <h4>Model Number: <span>Complex</span></h4>
                    <h4>EINECS No.: <span>215-236-1</span></h4>
                    <h4>CAS No.: <span>1314-56-3</span></h4>
                    
                </div>
            </div>
            <hr>
            <h3>Reviews</h3>
            <div class="reviews">
                <div class="left-reviews">
                    <div class="each-review">
                        <div class="head-review">
                            <div class="lefted">
                                <div class="img-contain">
                                <img src="@/assets/images/vectors/avatar.svg" alt="">
                            </div>
                            <div class="title">
                                <h4>Pamela Njoku</h4>
                                <p>05 Nov 2022</p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="right-reviews">

                </div>
            </div>
        </div>
    </MarketPlaceLayout>
</template>

<script>
    import  MarketPlaceLayout from "@/layouts/MarketPlaceLayout.vue"
    export default {
        name:'Products',
        components: {
            MarketPlaceLayout,
            },
            methods:{
              checked:function (){
                var box = document.getElementById('checkbox');
                var deColor =box.style.backgroundColor;
                if(deColor== "white"){
                    deColor= 'green';
                }
                
               }
            }
    }
</script>

<style lang="scss" scoped>
 
.big-content{
    width: 100%;
    padding: 90px;
    .image-area{
        width: 100%;
    display: flex;
    flex-direction: row;
    gap: 30px;

        .image-container{
            width: 50%;
            img{
                width: 100%;
            }
            .small-images{
                width: 100%;
                display: flex;
                flex-direction: row;
                gap: 20px;
                overflow-x: scroll;
                margin-top: 25px;
                img{
                    width: 150px;
                }
            }
        }
        .text-area{
            width: 50%;
            padding-left: 50px;
            h1{
                font-family: 'Poppins';
                font-style: normal;
                font-weight: 700;
                font-size: 48px;
                color: #4A4754;
                margin-bottom: 19px;
            }
            .price{
                font-family: 'Maven Pro';
                font-style: normal;
                font-weight: 400;
                font-size: 34px;
                color: #14110C;
            }
            .farmer{
                font-family: 'Maven Pro';
                font-style: normal;
                font-weight: 400;
                font-size: 24px;
                color: #14110C;
            }
            .verified{
                font-family: 'Maven Pro';
                font-style: normal;
                font-weight: 400;
                font-size: 19.375px;
                color: #4A4754;
            }
            .ratings{
                width: 250px;
                display: flex;
                flex-direction: row;
                gap: 10px;
            }
            .order{
                margin-left: 20px;
            }
            .quantity{
                display: flex;
                margin-top: 120px;
                font-family: 'Maven Pro';
                font-style: normal;
                font-weight: 400;
                font-size: 18px;
                gap: 20px;
                color: #000000;
                .quantity-btns{
                    display: flex;
                    gap: 10px;
                    button{
                        width: 20px;
                        height: 20px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        border-radius: 50%;
                        border: none ;
                    }
                }
            }
            .ships{
                font-family: 'Maven Pro';
                font-style: normal;
                font-weight: 700;
                font-size: 18px;
                text-transform: capitalize;
                color: #4A4754;
                margin-top: 20px;

                span{
                    font-family: 'Maven Pro';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 18px;
                    color: #4A4754;
                }
            }
            .buttonss{
                margin-top: 70px;
                display: flex;
                flex-direction: column;
                gap: 30px;

                .buy{
                    height: 55px;
                    border: none;
                    background: #05B050;
                    box-shadow: 0px 2px 4px rgba(44, 39, 56, 0.08), 0px 4px 8px rgba(44, 39, 56, 0.08);
                    border-radius: 4px;
                    font-family: 'Maven Pro';
                    font-style: normal;
                    font-weight: 700;
                    font-size: 16px;
                    line-height: 147%;
                    color: #E6F7EE;
                }
                .cart{
                        height: 55px;
                        border: none;
                        background: white;
                        box-shadow: 0px 2px 4px rgba(44, 39, 56, 0.08), 0px 4px 8px rgba(44, 39, 56, 0.08);
                        border-radius: 4px;
                        font-family: 'Maven Pro';
                        font-style: normal;
                        font-weight: 700;
                        font-size: 16px;
                        line-height: 147%;
                        color: #05B050;
                        border: 1px solid #05B050;
                    }
            }
            hr{
                margin-bottom: 50px;
                margin-top: 50px;
            }
        }
    }
    hr{
                margin-bottom: 50px;
                margin-top: 50px;
            }
            .guide{
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-top: 40px;
                margin-bottom: 40px;
                a{
                    color: #05B050;
                }
                button{
                    background: #F9E9E9;
                    border: 1.50427px solid #C32021;
                    border-radius: 6.01709px;
                    font-family: 'Maven Pro';
                    font-style: normal;
                    font-weight: 700;
                    font-size: 21.0598px;
                    color: #C32021;
                    height: 51px;
                    width: 200px;
                }
            }
            .specification{
                display: flex;
                width: 100%;

                .left-detail{
                    width: 50%;
                }
                .right-detail{
                        width: 50%;
                }
                h4{
                    font-family: 'Maven Pro';
                    font-style: normal;
                    font-weight: 600;
                    font-size: 16px;
                    line-height: 116%;
                    color: #696671;
                    margin-top: 20px;
                    span{
                        margin-left: 20px;
                        font-family: 'Maven Pro';
                        font-style: normal;
                        font-weight: 400;
                        font-size: 16px;
                        line-height: 116%;
                        color: #696671;
                    }
                }


            }

}
    

</style>