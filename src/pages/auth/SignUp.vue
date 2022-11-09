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
                <form id="register-form" action="javascript:void()" @submit="submitForm($event)">
                    
                    <div class="form-group">
                        <label for="">First Name</label>
                        <input type="text" class="form-control" required name="first-name" placeholder="Enter your first name">
                    </div>
                    <div class="form-group">
                        <label for="">Last Name</label>
                        <input type="text" class="form-control" required name="last-name" placeholder="Enter your last name">
                    </div>
                    <div class="form-group">
                    <div class="row ">
                        <div class="col">
                            <label for="">Email Address</label>
                            <input type="text" class="form-control" required name="email" placeholder="Enter email address">
                        </div>
                        <div class="col">
                            <label for="">Phone Number</label>
                            <input type="text" class="form-control" required name="phone" placeholder="Enter phone number">
                        </div>
                    
                    </div>
                    <div v-if="type != 'partner'" class="row radios-container">
                        <div class="col-3 radios">
                            <input type="radio" name="account-type" value="individual">
                            <label for="">Individual Account</label>
                        </div>
                        <div class="col-3 radios">
                            <input type="radio" name="account-type" value="company">
                            <label for="">Company Account</label>
                        </div>
                    
                    </div>
                    </div>
                    <div class="form-group checking">
                        <input type="checkbox" name="accept" required>
                        <p class="check-p">I confirm that I have read and accepted the privacy policy</p>
                    </div>
                    <div class="form-group">
                        <button type="submit" class="btn  btn-lg btn-block green-btn">Continue</button>
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
        },
        methods:{
            submitForm(e){

                var form = new FormData(document.querySelector('#register-form'));

                var registerData = {
                    first_name : form.get('first-name'),
                    last_name : form.get('last-name'),
                    email : form.get('email'),
                    phone : form.get('phone'),
                };

                window.localStorage.setItem('registerData',JSON.stringify(registerData));

                var accountType = form.get('account-type');

                if(this.type == "partner"){
                    accountType = "conpany";
                }

                accountType == "individual" ? this.$router.push(`/${this.type}/verifyaccount`) : this.$router.push(`/${this.type}/companydetails`);

            }
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