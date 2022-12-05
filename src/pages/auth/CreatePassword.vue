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
                <input type="password" v-model="password" class="form-control" id="formGroupExampleInput" placeholder="Create Password">
            </div>
            <div class="form-group">
                <label for="">Confirm Password</label>
                <input type="password" v-model="confirmPassword" class="form-control" id="formGroupExampleInput2" placeholder="Confirm Password">
            </div>
            <div class="lines">
                <div :class="['line', strength > 2 ? 'strong' : strength > 0 ? 'weak' : '' ]"></div>
                <div :class="['line', strength > 2 ? 'strong' : strength > 1 ? 'weak' : '' ]"></div>
                <div :class="['line', strength > 2 ? 'strong' : '' ]"></div>
                <div :class="['line', strength > 3 ? 'strong' : '' ]"></div>
            </div>

            <div class="required">
                <div class="each-required">
                    <img v-if="hasNumbers" src="@/assets/images/vectors/tick-right.svg" alt="">
                    <img v-if="!hasNumbers" src="@/assets/images/vectors/tick-wrong.svg" alt="">
                    <p :class="hasNumbers ? 'right-text' : 'wrong-text' ">Contains numbers</p>
                </div>
                <div class="each-required">
                    <img v-if="hasSpecial" src="@/assets/images/vectors/tick-right.svg" alt="">
                    <img v-if="!hasSpecial" src="@/assets/images/vectors/tick-wrong.svg" alt="">
                    <p :class="hasSpecial ? 'right-text' : 'wrong-text' ">has at least one special character (@#$)</p>
                </div>
                <div class="each-required">
                    <img v-if="hasUppercase" src="@/assets/images/vectors/tick-right.svg" alt="">
                    <img v-if="!hasUppercase" src="@/assets/images/vectors/tick-wrong.svg" alt="">
                    <p :class="hasUppercase ? 'right-text' : 'wrong-text' ">have uppercase letters</p>
                </div>
                <div class="each-required">
                    <img v-if="characterMin" src="@/assets/images/vectors/tick-right.svg" alt="">
                    <img v-if="!characterMin" src="@/assets/images/vectors/tick-wrong.svg" alt="">
                    <p :class="characterMin ? 'right-text' : 'wrong-text' ">be greater than 8 characters</p>
                </div>
                <div class="each-required">
                    <img v-if="mustMatch" src="@/assets/images/vectors/tick-right.svg" alt="">
                    <img v-if="!mustMatch" src="@/assets/images/vectors/tick-wrong.svg" alt="">
                    <p :class="mustMatch ? 'right-text' : 'wrong-text' ">Must match</p>
                </div>
            </div>
            
           
            <div class="form-group">
                <button type="button" @click="submitForm()" class="btn green-btn btn-lg btn-block">Complete Registration</button>
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
import AuthService from "@/services/auth";

    export default {
        name:'CreatePassword',
        components: {
            AuthSharedLayout
        },
        computed : {
            hasNumbers(){
                return /[0-9]+/.test(this.password);
            },
            hasSpecial(){
                return /[!@~#$%^.,'"&*\(\)\/]+/.test(this.password);
            },
            hasUppercase(){
                return /[A-Z]+/.test(this.password);
            },
            characterMin(){
                return this.password.length >= 8;
            },
            mustMatch(){
                return (this.password == this.confirmPassword) && this.password;
            },
            strength(){
                var strength = 0 ;
                if(this.characterMin){
                    strength += 1;
                }
                if(this.hasNumbers){
                    strength += 1;
                }
                if(this.hasUppercase){
                    strength += 1;
                }
                if(this.hasSpecial){
                    strength += 1;
                }
                return strength;
            }
        },
        data(){
            return {
                type : this.$route.params.type,
                password : '',
                confirmPassword : "",
            };
        },
        methods : {
            submitForm(){
                let vm = this;
                var registerData = JSON.parse(window.localStorage.getItem('registerData'));
                if(this.hasNumbers && this.hasSpecial && this.hasUppercase && this.characterMin && this.mustMatch){
                    registerData = {
                        ...registerData,
                        ...{password : this.password, user_type : this.type}
                    };
                    AuthService.registerUser(registerData,(response)=>{
                        if(response.status){
                            window.localStorage.setItem('accessToken', response.token);
                            window.localStorage.setItem('userData', response.user);
                            window.localStorage.removeItem('registerData');
                            window.localStorage.removeItem('isVerifiedEmail');
                            vm.$router.push(`/${vm.type}/welcome`)
                        }
                    });
                }
            }
        },
        mounted(){
            var verifiedCheck = window.localStorage.getItem('isEmailVerified');
            if(!verifiedCheck){
                this.$router.replace(`/${this.type}/register`);
            }
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

    .right-text{
        color : #1D3557;
    }
    .wrong-text{
        color : #B0B0B0;
    }
    .weak{
        border-color: #FFBD00;
    }

    .strong{
        border-color: #22D66A;
    }
   
</style>