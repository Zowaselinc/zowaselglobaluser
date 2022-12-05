<template>
    <div class="big-container">
        <div class="content">
            <img src="@/assets/images/logos/zowasel-grey-logo.png" alt="">
            <div class="texts">
                <h1 class="text-center">Welcome</h1>
                <p class="text-center">You have successfully registered with Zowasel as Corporate. Proceed to your dashboard to add team members.</p>
            </div>
            <button>Go to dashboard</button>
        </div>
            
    </div>
</template>

<script>
    export default {
        name:'partnerWelcome'
    }
</script>

<style  scoped>
    .big-container{
        width: 100%;
        height: 100%;
        padding: 10%;
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;        
        background-image: url("@/assets/images/backgrounds/fruits.png");
        background-repeat: no-repeat;
        background-size: cover;
        
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
        margin-bottom: 25%;
    }
    .texts{
        margin-bottom: 25%;
    }

    
 
    button{
        background-color:  #008D40;
        width: 100%;
        color: white;
        margin-top: 40px;
        padding: 15px;
        border: none;
    }
 
    
    
</style>