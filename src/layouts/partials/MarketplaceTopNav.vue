<template>
    <div class="top-nav">
        <div class="logo-area">
            <img src="@/assets/images/logos/zowasel-grey-logo.png" alt="">
        </div>
        <div class="links">
            <div class="each-link">
                <img src="@/assets/images/vectors/home.svg" alt="">
                <a href="#">Home</a>
            </div>
            <div class="each-link">
                <img src="@/assets/images/vectors/Storefront-grey.svg" alt="">
                <a href="#">Marketplace</a>
            </div>
            <div class="each-link">
                <img src="@/assets/images/vectors/cart.svg" alt="">
                <a href="#">Cart</a>
            </div>
            <div class="each-link">
                <img src="@/assets/images/vectors/message.svg" alt="">
                <a href="#">Messages</a>
            </div>
            <div class="each-link">
                <img src="@/assets/images/vectors/bell.svg" alt="">
                <a href="#">Notifications</a>
            </div>
            <div class="each-link">
                <img src="@/assets/images/vectors/profile.svg" alt="">
                <a href="#">Profile</a>
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
    }
    .logo-area{
        width: 170px;
        height: 23px;
        margin-left:100px;

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