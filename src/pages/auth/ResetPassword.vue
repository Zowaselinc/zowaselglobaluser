<template>
    <div class="big-container">
        <div class="left-content">
        <h1 class="text-center">Reset Password</h1>
        <p id="emailHelp" class="form-text text-muted text-center">Choose a new password for your account</p>
        
         <form>         
            
            <div class="form-group">
                <label for="">New Password</label>
                <input type="password" class="form-control" id="formGroupExampleInput" placeholder="Enter new password">
            </div>
            <div class="form-group">
                <label for="">Password</label>
                <input type="password" class="form-control" id="formGroupExampleInput2" placeholder="Confirm your new password">
            </div>
            
            
            <div class="buttons">
                <div class="form-group">
                    <button type="button" class="btn  btn-lg btn-block">Login</button>
                </div>
              
                <div class="form-group">
                    <button type="button" class="btn skip btn-lg btn-block">Reset Password</button>
                </div>
                
                
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
        name:'ResetPassword'
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
        padding: 10% 15% 0% 15%;
       
        box-sizing: border-box;
    }
    .lines{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin: 20px 0px 20px 0px;
    }
    .line{
        border: 1px solid #B0B0B0;
        width: 30%;
        margin: -15px 10px 0px 5px;
    }
    input{
        padding: 10px;
    }
  
    .buttons{
        margin-top: 50px;
    }
    button{
        background-color:  #008D40;
        width: 100%;
        color: white;
    }
    .skip{
        background: #2D3748;

    }
    .form-group{
        margin-bottom: 15px;
    }
  
    .right-content{
        width: 35%;
        height: 100vh;
    }
    .right-content img{
        width: 100%;
        height: 100%;
    }

    .last-text{
        margin-top: 70px;
    }
</style>