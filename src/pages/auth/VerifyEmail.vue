<template>
    <div class="big-container">
        <div class="left-content">
        <h1 class="text-center">Verify Email</h1>
         <p id="emailHelp" class="form-text text-muted text-center">We have sent a verification email to </p>
     
         <form>            
           <p id="emailHelp" class="form-text text-muted text-center">Didn’t receive the email? Check spam or promotion folder</p>
            <div class="form-group">
                <button type="button" class="btn  btn-lg btn-block">Resend Email</button>
            </div>
            
        </form>
       
        </div>
        <div class="right-content">
            <img src="@/assets/images/backgrounds/right-side.png" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        name:'VerifyEmail'
    }
</script>

<style  scoped>
    .big-container{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
    }
    .left-content{
        width: 65%;
        height: 100%;
        padding: 15% 12% 0% 12%;
        box-sizing: border-box;
        
    }
    h2{
        font-size: 54px;
        font-weight: bolder;
    }
 
   form{
    margin-top: 15%;
   }
 
    button{
        background-color:  #008D40;
        width: 100%;
        color: white;
        margin-top: 30px;
    }

  
    .right-content{
        width: 35%;
        height: 100vh;
    }
    .right-content img{
        width: 100%;
        height: 100%;
    }

</style>