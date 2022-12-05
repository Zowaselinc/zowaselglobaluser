<template>
    <div class="big-container">
        <div class="content">
            <img src="@/assets/images/logos/zowasel-grey-logo.png" alt="">
            <img src="@/assets/images/vectors/tick-circle.png" alt="">
           
                
                <h5 class="text-center">Passport Reset Successfully</h5>
            
            <button @click="$router.replace('/login')">Login</button>
        </div>
            
    </div>
</template>

<script>
    export default {
        name:'ResetSuccess'
    }
</script>

<style  scoped>
    .big-container{
        width: 100%;
        height: 100%;
        padding: 15%;
        display: flex;
        justify-content:center;
        box-sizing: border-box;
        background-image: url("@/assets/images/backgrounds/white-back.png");
        background-repeat: no-repeat;
        background-size: 100%;
        
    }
    .content{
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    img{
        margin-bottom: 10%;
    }
    h1{
        font-size: 54px;
        font-weight: bold;
    }
    p{
        
        font-size: 16px;
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