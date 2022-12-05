<template>
    <AuthSharedLayout>
    <div class="big-container">
        <img class="mobile-logo" src="@/assets/images/logos/zowasel-logo.png" alt="">
        <div class="left-content">
        <h1 class="text-center">Verify Account</h1>
         <p id="emailHelp" class="form-text text-muted text-center">Enter 6-digit code sent to your mail to verify your account</p>
        <div class="lines">
            <div class="line"></div>
            <p>OR</p>
            <div class="line"></div>
        </div>
         <form>
            
            
            
         
            <div class="form-group">
                <div class="row">
                    <div class="col">
                        <input type="password" class="form-control" placeholder="">
                    </div>
                    <div class="col">
                        
                        <input type="password" class="form-control" placeholder="">
                    </div>
                     <div class="col">
                        
                        <input type="password" class="form-control" placeholder="">
                    </div>
                     <div class="col">
                        
                        <input type="password" class="form-control" placeholder="">
                    </div>
                     <div class="col">
                        
                        <input type="password" class="form-control" placeholder="">
                    </div>
                     <div class="col">
                        
                        <input type="password" class="form-control" placeholder="">
                    </div>
                    
                
                </div>
            </div>
            <div class="last-text">
                <p id="emailHelp" class="form-text text-muted text-center">Didn't get the code in your mail?</p>
            </div>
            
           
            <div class="form-group">
                <router-link to="/merchant/createpassword" type="button" class="btn green-btn btn-lg btn-block">Continue</router-link>
            </div>
            
        </form>
       
        </div>
        <div class="right-content">
            <img class="background-img" src="@/assets/images/backgrounds/partner-background2.png" alt="">
            <img class="logo" src="@/assets/images/logos/zowasel-logo.png" alt="">
        </div>
    </div>
    </AuthSharedLayout>
</template>

<script>
    import AuthSharedLayout from "@/layouts/shared/AuthSharedLayout.vue";
    export default {
        name:'PartnerVerifyAccount',
        components: {
            AuthSharedLayout
        }
    }
</script>

<style lang="scss" scoped>
    
    
    .checking{
        display: flex;
        margin-top: 60px;
     
    }
    
    .check-p{
        margin-top: -5px;
        margin-left: 10px;
    }

</style>