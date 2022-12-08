<template>
    <div class="top-nav">
        <div class="logo-area">
           <a href="#"><img src="@/assets/images/logos/zowasel-grey-logo.png" alt=""></a> 
        </div>
        <div class="links">
            <div class="each-link">
                
                <a href="#"><img src="@/assets/images/vectors/home.svg" alt=""> Home</a>
            </div>
            <div class="each-link">
                
                <a href="#"><img src="@/assets/images/vectors/Storefront-grey.svg" alt=""> Marketplace</a>
            </div>
            <div class="each-link">
                
                <a href="#"><img src="@/assets/images/vectors/cart.svg" alt=""> Cart</a>
            </div>
            <div class="each-link">
                
                <a href="#"><img src="@/assets/images/vectors/message.svg" alt=""> Messages</a>
            </div>
            <div class="each-link">
                
                <a href="#"><img src="@/assets/images/vectors/bell-icon.svg" alt=""> Notifications</a>
            </div>
            <div class="each-link">
                
                <a href="#"><img src="@/assets/images/vectors/profile.svg" alt=""> Profile</a>
            </div>
            
        </div>
        <div class="right-btns">
            <button class="logistic">Logistics</button>
            <button class="login">Login</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'MarketPlaceTopNav'
    }
</script>

<style lang="scss" scoped>
    .top-nav{
        width: 100%;
        background: #F1F1F1;
        display: flex;
        height: 125px;
        align-items: center;
        padding: 0px 100px;
    }
    .logo-area{
        width: 170px;
        height: 23px;

        img{
            width: 100%;
            height: 100%;
        }
    }
    .links{
        display: flex;
        flex-direction: row;
        width: 55%;
        justify-content: space-around;
        margin-left: 80px;
        
        a{
            text-decoration: none;
            font-family: 'Maven Pro';
            font-style: normal;
            font-weight: 700;
            font-size: 14px;
            margin-left: 10px;
            color: #4A4754;
        }
    }
    .right-btns{
        margin-left: 100px;
        display: flex;
        justify-content: space-around;
        width: 15%;
        gap: 10px;
        margin-left: 150px;

        .logistic{
            background: transparent;
            border: 2px solid #05B050;
            width:130px;
            height: 45px;
            color: #05B050;
            box-shadow: 0px 1.88889px 3.77778px rgba(44, 39, 56, 0.08), 0px 3.77778px 7.55556px rgba(44, 39, 56, 0.08);
            border-radius: 3.77778px;
        }
        .login{
            width: 130px;
            height: 45px;
            background-color: #05B050;
            color: white;
            border: none;
        }
    }

  
</style>