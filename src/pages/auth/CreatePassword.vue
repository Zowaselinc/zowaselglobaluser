<template>
<AuthSharedLayout>
    <div class="big-container">
        <img class="mobile-logo" src="@/assets/images/logos/zowasel-logo.png" alt="">
        <div class="left-content">
        <h1 class="text-center">Create Password</h1>
         <p id="emailHelp" class="form-text text-muted text-center">Set-up a unique password to login to your account with</p>
        
         <form>
            
            
            
            <div class="form-group">
                <label for="">Password</label>
                <input type="password" class="form-control" id="formGroupExampleInput" placeholder="Create Password">
            </div>
            <div class="form-group">
                <label for="">Confirm Password</label>
                <input type="password" class="form-control" id="formGroupExampleInput2" placeholder="Confirm Password">
            </div>
            <div class="lines">
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
            </div>

            <div class="required">
                <div class="each-required">
                    <img src="@/assets/images/vectors/tick-right.svg" alt="">
                    <p>contains numbers</p>
                </div>
                <div class="each-required">
                    <img src="@/assets/images/vectors/tick-wrong.svg" alt="">
                    <p>contains numbers</p>
                </div>
                <div class="each-required">
                    <img src="@/assets/images/vectors/tick-right.svg" alt="">
                    <p>contains numbers</p>
                </div>
                <div class="each-required">
                    <img src="@/assets/images/vectors/tick-wrong.svg" alt="">
                    <p>contains numbers</p>
                </div>
                <div class="each-required">
                    <img src="@/assets/images/vectors/tick-wrong.svg" alt="">
                    <p>contains numbers</p>
                </div>
            </div>
            
           
            <div class="form-group">
                <router-link type="button" to="/merchant/welcome" class="btn green-btn btn-lg btn-block">Complete Registration</router-link>
            </div>
            
        </form>
       
        </div>
        <div class="right-content">
            <img   class="background-img" v-if="type == 'merchant' || type=='buyer'" src="@/assets/images/backgrounds/merchant-background2.png" alt="">
                <img   class="background-img" v-if="type=='partner' || type=='agent'" src="@/assets/images/backgrounds/partner-background2.png" alt="">
            <img class="logo" src="@/assets/images/logos/zowasel-logo.png" alt="">
        </div>
    </div>
    </AuthSharedLayout>
</template>

<script>
import AuthSharedLayout from "@/layouts/shared/AuthSharedLayout.vue";
    export default {
        name:'CreatePassword',
        components: {
            AuthSharedLayout
        },
        data(){
            return {
                type : this.$route.params.type
            };
        }
    }
 
</script>

<style  scoped>

    .required{
        margin-bottom: 20px;
    }
    .each-required{
        margin-top: 10px;

    }
    .each-required p{
        display: inline;
        margin-left: 10px;
      
    }
 

 
   
  

    .check-p{
        margin-top: -5px;
        margin-left: 10px;
    }
   
</style>