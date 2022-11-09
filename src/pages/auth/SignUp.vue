<template>
    <AuthSharedLayout>
        <div class="big-container">
            <img class="mobile-logo" src="@/assets/images/logos/zowasel-logo.png" alt="">
            <div class="left-content">
                
                <h1 class="text-center">Create an Account</h1>
                <p id="emailHelp" class="form-text text-center">Get connected with your network of vetted growers</p>
                <div class="lines">
                    <div class="line"></div>
                    <p>OR</p>
                    <div class="line"></div>
                </div>
                <form>
                    
                    
                    
                    <div class="form-group">
                        <label for="">First Name</label>
                        <input type="text" class="form-control"  placeholder="Enter your first name">
                    </div>
                    <div class="form-group">
                        <label for="">Last Name</label>
                        <input type="text" class="form-control"  placeholder="Enter your last name">
                    </div>
                    <div class="form-group">
                    <div class="row ">
                        <div class="col">
                            <label for="">Email Address</label>
                            <input type="text" class="form-control" placeholder="Enter email address">
                        </div>
                        <div class="col">
                            <label for="">Phone Number</label>
                            <input type="text" class="form-control" placeholder="Enter phone number">
                        </div>
                    
                    </div>
                    <div class="row radios-container">
                        <div class="col-3 radios">
                            <input type="radio" name="account-type">
                            <label for="">Individual Account</label>
                        </div>
                        <div class="col-3 radios">
                            <input type="radio" name="account-type">
                            <label for="">Company Address</label>
                        </div>
                    
                    </div>
                    </div>
                    <div class="form-group checking">
                        <input type="checkbox">
                        <p class="check-p">I confirm that I have read and accepted the privacy policy</p>
                    </div>
                    <div class="form-group">
                        <router-link to="/merchant/companydetails" type="button" class="btn  btn-lg btn-block green-btn">Continue</router-link>
                    </div>
                </form>
                <div class="last-text">
                    <p id="emailHelp" class="form-text text-center">Do you already have an account?</p> <router-link class="link" to="/welcomeback">Login</router-link>
                </div>
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
        name:'MerchantSignUp',
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

<style lang="scss" scoped>  
    @import "@/assets/scss/main.scss";

    .radios-container{
        margin-top: 20px;
    }   
    .radios label{
        margin-left: 10px;
    } 

</style>