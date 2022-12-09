<template>
    <MarketPlaceLayout>
        <div class="big-content">
            <div class="image-area">
                <img  class="big-img" src="@/assets/images/backgrounds/okro.png" alt="">
                <div class="small-images">
                    <img src="@/assets/images/backgrounds/okro-small.png" alt="">
                    <img src="@/assets/images/backgrounds/okro-small.png" alt="">
                    <img src="@/assets/images/backgrounds/okro-small.png" alt="">
                    <img src="@/assets/images/backgrounds/okro-small.png" alt="">
                    <img src="@/assets/images/backgrounds/okro-small.png" alt="">
                </div>
            </div>

            <div class="topic">
                <div class="left">
                    <h1>Irish Potato</h1>
                    <p class="price">NGN39,097,450/bag</p>
                    <p class="farmer">Naziri Farms <span> <img src="@/assets/images/vectors/verified.svg" alt=""> Verified merchant</span></p>
                </div>
                <div class="right">
                    <a href="/marketplace/transactionsumary" class="fulfil">Fulfil/Accept Offer</a>
                    <a href="/dashboard/messages" class="negotiate">Negotiate</a>
                </div>
            </div>
            <div class="description">
                <h3>Description</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec sagittis nunc, imperdiet volutpat magnis bibendum. Ultrices lorem
                     amet pharetra interdum lorem ornare eu. Tellus semper aenean mauris facilisi placerat sapien urna velit. Duis faucibus convallis 
                     posuere neque neque adipiscing quis egestas nulla. Viverra senectus nisl quis urna, enim id dolor pulvinar. Aliquam mi, dui pellentesque ut. 
                     Sit egestas arcu nunc lacus, ipsum odio montes, pellentesque eget. In ac est sapien orci magna nisi, volutpat et cras. Fermentum egestas at volutpat
                      donec faucibus et.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec sagittis nunc, imperdiet volutpat magnis bibendum. Ultrices lorem amet 
                      pharetra interdum lorem ornare eu. Tellus semper aenean mauris facilisi placerat sapien urna velit. Duis faucibus convallis posuere neque neque
                       adipiscing quis egestas nulla. Viverra senectus nisl quis urna, enim id dolor pulvinar. Aliquam mi, dui pellentesque ut.
                       Sit egestas arcu nunc lacus, ipsum odio montes, pellentesque eget. In ac est sapien orci magna nisi, volutpat et cras. 
                       Fermentum egestas at volutpat donec faucibus et.
                </p>
            </div>
            <hr>
            <div class="details">
                <div class="actual-details">
                    <div class="left-line">
                        <div class="each-detail">
                            <h4>Product Category</h4>
                            <p>Grain</p>
                        </div>
                        <div class="each-detail">
                            <h4>Color</h4>
                            <p>Brown</p>
                        </div>
                        <div class="each-detail">
                            <h4>Moisture</h4>
                            <p>0%</p>
                        </div>
                        <div class="each-detail">
                            <h4>Foreign Matter (FM)</h4>
                            <p>3%</p>
                        </div>
                        <div class="each-detail">
                            <h4>Broken Grains</h4>
                            <p>6%</p>
                        </div>
                        <div class="each-detail">
                            <h4>Weevil</h4>
                            <p>0%</p>
                        </div>
                        <div class="each-detail">
                            <h4>Damaged kernel</h4>
                            <p>2%</p>
                        </div>
                        <div class="each-detail">
                            <h4>Rotten Shriveled</h4>
                            <p>6%</p>
                        </div>
                    </div>
                    <div class="right-line">
                        <div class="each-detail">
                            <h4>Test Weight</h4>
                            <p>MT</p>
                        </div>
                        <div class="each-detail">
                            <h4>Hardness</h4>
                            <p>Hard</p>
                        </div>
                        <div class="each-detail">
                            <h4>Split</h4>
                            <p>1%</p>
                        </div>
                        <div class="each-detail">
                            <h4>Oil Content</h4>
                            <p>0%</p>
                        </div>
                        <div class="each-detail">
                            <h4>Infestation</h4>
                            <p>5%</p>
                        </div>
                        <div class="each-detail">
                            <h4>Grain size</h4>
                            <p>Whole grain</p>
                        </div>
                    </div>
                   
                  
                   
                </div>
                <div class="map">
                    <h2>Merchant Location</h2>
                    <!--Google map-->
                    <div id="map-container-google-2" class="z-depth-1-half map-container">
                    <iframe class="main-map" src="https://maps.google.com/maps?q=chicago&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0"
                        style="border:0" allowfullscreen></iframe>
                    </div>

                    <!--Google Maps-->
                </div>
            </div>
        </div>
        


       
    </MarketPlaceLayout>
</template>

<script>
    import  MarketPlaceLayout from "@/layouts/MarketPlaceLayout.vue"
    export default {
        name:'product',
        components: {
            MarketPlaceLayout,
            },
    }
</script>

<style lang="scss" scoped>
.big-content{
    
        width: 100%;
        padding: 100px;
}
    .image-area{
        width: 100%;
        .big-img{
            width: 80%;
            margin-left: 10%;
        }
        .small-images{
            margin-top: 40px;
            width: 100%;
            display: flex;
            flex-direction: row;
            gap:10px;
            overflow-x: scroll;
            img{
                
                width: 350px;
                height: 350px;
            }
        }
    }
    .topic{
        margin-top: 50px;
        display: flex;
        justify-content: space-between;

        .left{
            h1{
                font-family: 'Poppins';
                font-style: normal;
                font-weight: 700;
                font-size: 48px;
                color: #4A4754;
            }
            .price{
                font-family: 'Maven Pro';
                font-style: normal;
                font-weight: 400;
                font-size: 34px;
                color: #14110C;
                margin-top: 12px;
            }
            .farmer{
                font-family: 'Maven Pro';
                font-style: normal;
                font-weight: 400;
                font-size: 24px;
                letter-spacing: 0.01em;
                color: #14110C;
                margin-top: 20px;

                span{
                    font-family: 'Maven Pro';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 19px;
                    color: #4A4754;
                }
            }
        }
        .right{
            padding-top: 50px;
            display: flex;
            flex-direction:column;
            gap: 10px;

            .fulfil{
                background: #05B050;
                box-shadow: 0px 2px 4px rgba(44, 39, 56, 0.08), 0px 4px 8px rgba(44, 39, 56, 0.08);
                border-radius: 4px;
                height: 50px;
                width:250px;
                border: none;
                font-family: 'Maven Pro';
                font-style: normal;
                font-weight: 700;
                font-size: 16px;
                color: #E6F7EE;
                display: flex;
                justify-content: center;
                align-items: center;
                text-decoration: none;
                
            }
            .negotiate{
                background: white;
                box-shadow: 0px 2px 4px rgba(44, 39, 56, 0.08), 0px 4px 8px rgba(44, 39, 56, 0.08);
                border-radius: 4px;
                height: 50px;
                width:250px;
                border: none;
                font-family: 'Maven Pro';
                font-style: normal;
                font-weight: 700;
                font-size: 16px;
                color: #05B050;
                border: 1px solid #05B050;
                display: flex;
                justify-content: center;
                align-items: center;
                text-decoration: none;
            }
           
        }
        
    }
     .description{
                margin-top: 40px;
            }
            .details{
                width: 100%;
                margin-top: 40px;
                display: flex;
            }

        .actual-details{
            width: 30%;
            display: flex;
            flex-direction: row;
            justify-content: space-between;

            .each-detail{
                margin-top: 30px;
            }
        }
        .map{
            padding-left: 100px;
            margin-top: 30px;
            width: 70%;
        }
        .map-container-2{
  overflow:hidden;
  padding-bottom:56.25%;
  position:relative;
  height:0;
}
.map-container-2 iframe{
  left:0;
  top:0;
  height:100%;
  width:100%;
  position:absolute;
}
.main-map{
    width: 100%;
    height: 1000px;
}
   


</style>