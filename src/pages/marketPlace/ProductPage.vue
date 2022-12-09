<template>
    <MarketPlaceLayout>
        <div class="big-content" v-if="product">
            <div v-if="product && product.images.length" class="image-area">
                <img :src="product.images[0]" alt="">
                <div v-if="(product.images.length > 1)" class="small-images">
                    <img v-for="image,index in product.images.slice(1)" :key="index" :src="image" alt="">
                </div>
            </div>

            <div class="topic" v-if="product">
                <div class="left">
                    <h1>{{ product.title }}</h1>
                    <p class="price">{{ product.currency }}{{product.specification.price }}/{{ product.packaging}}</p>
                    <p class="farmer">{{ product.user.first_name +" "+product.user.last_name }} <span> <img src="@/assets/images/vectors/verified.svg" alt=""> Verified merchant</span></p>
                </div>
                <div class="right">
                    <a href="#" class="fulfil">Fulfil/Accept Offer</a>
                    <a href="#" class="negotiate" @click="$router.push({ name : 'CropNegotiation', params : {id : product.id}})">Negotiate</a>
                </div>
            </div>
            <div class="description">
                <h3>Description</h3>
                <p>{{ product.description }}
                </p>
            </div>
            <hr>
            <div class="details">
                <div class="actual-details">
                    <div class="left-line">
                        <div class="each-detail">
                            <h4>Product Category</h4>
                            <p>{{ product.crop_category.name}}</p>
                        </div>
                        <div class="each-detail">
                            <h4>Color</h4>
                            <p>{{ product.specification.color}}</p>
                        </div>
                        <div class="each-detail">
                            <h4>Moisture</h4>
                            <p>{{ product.specification.moisture}}%</p>
                        </div>
                        <div class="each-detail">
                            <h4>Foreign Matter (FM)</h4>
                            <p>{{ product.specification.foreign_matter}}%</p>
                        </div>
                        <div class="each-detail">
                            <h4>Broken Grains</h4>
                            <p>{{ product.specification.broken_grains}}%</p>
                        </div>
                        <div class="each-detail">
                            <h4>Weevil</h4>
                            <p>{{ product.specification.weevil}}%</p>
                        </div>
                        <div class="each-detail">
                            <h4>Damaged kernel</h4>
                            <p>{{ product.specification.dk}}%</p>
                        </div>
                        <div class="each-detail">
                            <h4>Rotten Shriveled</h4>
                            <p>{{ product.specification.rotten_shriveled}}%</p>
                        </div>
                    </div>
                    <div class="right-line">
                        <div class="each-detail">
                            <h4>Test Weight</h4>
                            <p>{{ product.specification.test_weight}}</p>
                        </div>
                        <div class="each-detail">
                            <h4>Hardness</h4>
                            <p>{{ product.specification.hardness}}</p>
                        </div>
                        <div class="each-detail">
                            <h4>Split</h4>
                            <p>{{ product.specification.splits}}%</p>
                        </div>
                        <div class="each-detail">
                            <h4>Oil Content</h4>
                            <p>{{ product.specification.oil_content}}%</p>
                        </div>
                        <div class="each-detail">
                            <h4>Infestation</h4>
                            <p>{{ product.specification.infestation}}%</p>
                        </div>
                        <div class="each-detail">
                            <h4>Grain size</h4>
                            <p>{{ product.specification.grain_size}}</p>
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
    import  MarketPlaceLayout from "@/layouts/MarketPlaceLayout.vue";
    import MarketPlaceService from "@/services/marketplace";
    export default {
        name:'product',
        components: {
            MarketPlaceLayout,
        },
        data(){
            return {
                product : null
            }
        },
        methods : {
            getProduct(){
                MarketPlaceService.getCropById(this.$route.params.id,(response)=>{
                    this.product = response.data;
                    this.product.images = JSON.parse(this.product.images);
                })
            }
        },
        mounted(){
            this.getProduct();
        }

    }
</script>

<style lang="scss" scoped>
.big-content{
    
        width: 100%;
        padding: 100px;
}
    .image-area{
        width: 100%;
        img{
            width: 100%;
            height: 100%;
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