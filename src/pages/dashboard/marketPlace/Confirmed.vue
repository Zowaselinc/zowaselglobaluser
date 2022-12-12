<template>
    <DefaultNav>
        <div class="big-container">
           
       
           <div class="content">
            <img src="@/assets/images/logos/zowasel-grey-logo.png" alt="">
            <div class="texts">
                <h1 class="text-center">Order Confirmed</h1>
                <p class="text-center">You have successfully registered with Zowasel as {{type}}. Proceed to your dashboard to add team members.</p>
            </div>
            <a href="/marketplace" class="market-btn">Go to market place</a>
            <a href="/marketplace/trackingorder" class="track-btn">Track Order</a>
        </div>
            

            

        </div>



    </DefaultNav>
</template>

<script>
import DefaultNav from "@/layouts/DefaultNav.vue";

export default {
    name: 'Confirmed',
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
    height: 100vh;
    padding: 10%;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;        
    background-image: url("@/assets/images/backgrounds/fruits.png");
    background-repeat: no-repeat;
    background-size: cover;
   

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
   .content{
        width: 40%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    h1{
        font-size: 54px;
        font-weight: bold;
    }
    p{
        color: #2D374899;
        font-size: 16px;
    }
    img{
        width: 50%;
        margin-bottom: 155px;
    }
    .texts{
        margin-bottom: 55px
    }

    
 
    .market-btn{
        background-color:  #008D40;
        width: 100%;
        color: white;
        height: 50px;
        margin-top: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: none;
        text-decoration: none;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 166.67%;
        color: white;
        border-radius: 5px;
    }
    .track-btn{
        border: 1px solid #040308;
        border-radius: 5px;
        width: 100%;
        color: #040308;
        height: 50px;
        margin-top: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 166.67%;
        
    }
 



</style>