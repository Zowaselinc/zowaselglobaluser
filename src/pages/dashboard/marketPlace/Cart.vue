<template>
    <DefaultNav>
        <div class="big-container">
           
           <div class="top-text">
            <h1>Cart</h1> 
        </div>
        <div class="big-content">
            <div v-if="cart.length > 0" class="left-side">
                <template v-for="item,index in cart" :key="index">
                    <div class="each-item">
                            <div class="image">
                                <img :src="parse(item.input.images)[0]" alt="">
                            </div>
                            <div class="first">
                                <h4>Item:</h4>
                                <h4>Seller: </h4>
                                <h4>Unit Cost:</h4>
                            </div>
                            <div class="second">
                                <p>{{ item.input.title }}</p>
                                <p>Naziri Farms</p>
                                <p>{{ item.input.currency }} {{ (item.input.price).toLocaleString() }}</p>
                            </div>
                            <div class="third">
                                <h4>Quantity</h4>
                                <h4>Sub Total:</h4>
                            </div>
                            <div class="fourth">
                                <div class="btnss">
                                    <p class="p-btn" @click="decrement(index)">-</p>
                                    <p>{{ item.quantity }}</p>
                                    <p class="p-btn" @click="increment(index)">+</p>
                                </div>
                                <p>{{ item.input.currency }} {{ (item.quantity * item.price).toLocaleString() }}</p>
                                <button class="remove-btn" @click="removeCartItem(item)">Remove</button>
                            </div>
                    </div>
                    <hr>
                </template>
            </div>
            <div v-else class="left-side">
                <h5> No items in your cart</h5>
            </div>
            <div class="right-side">

                <h3>Order Summary</h3>
                <div class="line"></div>
                <div class="each-summary">
    
                    <p>Items in Cart</p>
                    <p>{{ cart.length }}</p>
                </div>
                <div class="line"></div>
                <div class="each-summary">
    
                    <p class="total">Total</p>
                    <p class="price"> NGN {{ cartTotal.toLocaleString() }}</p>
                </div>
                <button :disabled="cart.length > 0 ? null : ''" @click="this.$router.push('/dashboard/marketplace/checkout')">Proceed to Checkout</button>
            </div>

        </div>
          
            

            

        </div>



    </DefaultNav>
</template>

<script>
import DefaultNav from "@/layouts/DefaultNav.vue";
import Alert from "@/utilities/alert";

export default {
    name: 'CardPayment',
    data() {
        return {
            userData: this.$store.state.user,
            cart : []
        }
    },
    computed:{
    },
    methods:{
        increment(index){
            var item = this.cart[index];
            if(eval(item.input.stock) > eval(item.quantity)){
                this.cart[index].quantity = eval(this.cart[index].quantity) + 1;
                MarketplaceService.addToCart({
                    input_id : item.input_id,
                    user_id : item.user_id,
                    quantity : eval(item.quantity)
                },(response)=>{
                });
            }

        },
        decrement(index){
            var item = this.cart[index];
            if(eval(item.quantity) > 1){
                this.cart[index].quantity = eval(this.cart[index].quantity) - 1;
                MarketplaceService.addToCart({
                    input_id : item.input_id,
                    user_id : item.user_id,
                    quantity : eval(item.quantity)
                },(response)=>{
                });
            }
        },
        removeCartItem(item){
            MarketplaceService.deleteCartItem(item.id,(response)=>{
                if(response.error == false){
                    this.getCartItems();
                    Alert.success({
                        message : "Item Deleted Successfully"
                    });
                }
            })
        },
        parse(data){
            return JSON.parse(data);
        }
    },
    components: {
        DefaultNav,
       
    },
    mounted(){
        this.getCartItems();
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

.top-text{
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
    font-size: 24px;
    margin-bottom: 50px;
}
.big-content{
    width: 100%;
    padding: 50px 35px;
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
            gap: 13px;

              .image{
            width: 150px;
           
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
            font-size: 14px;
            color: #2D2B33;
            margin-bottom: 0px;
        }
        p{
            margin-top: 15px;
            font-family: 'Maven Pro';
            font-style: normal;
            font-weight: 500;
            font-size: 14px;
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
        padding-block: 30px;
        padding-inline: 10px;
        gap: 21px;
        border-radius: 4px;

        h3{
                font-family: 'Poppins';
                font-style: normal;
                font-weight: 700;
                font-size: 18px;
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
                font-size: 16px;
                line-height: 166.67%;
                color: rgba(45, 55, 72, 0.6);
            }
            .total{
                font-family: 'Poppins';
                font-style: normal;
                font-weight: 700;
                font-size: 16px;
                line-height: 166.67%;
                color: #96949C;
            }
            .price{
                font-family: 'Maven Pro';
                font-style: normal;
                font-weight: 700;
                font-size: 16px;
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

            button:disabled{
                background-color: #989898;
            }
    }

}



</style>