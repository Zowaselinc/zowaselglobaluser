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
                    <div v-for="input,index in codeInputs" :key="index" class="col">
                        <input type="password"  v-model="codeInputs[index]" maxlength="1" @keyup="moveToNext($event)"  class="form-control code-input" placeholder="">
                    </div>
                    
                </div>
            </div>
            <div class="last-text">
                <p id="emailHelp" class="form-text text-muted text-center">Didn't get the code in your mail? <a href="#" class="login-text">Resend Code</a></p>
            </div>
            
           
            <div class="form-group">
                <button @click="verifyCode()" type="button" class="btn green-btn btn-lg btn-block">Continue</button>
            </div>
            
        </form>
       
        </div>
        <div class="right-content">
            <img   class="background-img" v-if="type == 'merchant' || type=='corporate'" src="@/assets/images/backgrounds/merchant-background2.png" alt="">
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
        name:'VerifyAccount',
        components: {
            AuthSharedLayout
        },
        data(){
            return {
                type : this.$route.params.type,
                codeInputs : ["","","","","",""]
            };
        },
        methods:{
            moveToNext(e){
                if(e.key == "Backspace"){
                    var previousChildTree = e.target.parentElement.previousElementSibling?.children;
                    if(previousChildTree){
                        previousChildTree[0].focus();
                    }
                }else{
                    var nextChildTree = e.target.parentElement.nextElementSibling?.children;
                    if(nextChildTree){
                        nextChildTree[0].focus();
                    }
                }
                

            },
            sendVerification(){
                var registerData = JSON.parse(window.localStorage.getItem('registerData'));

                AuthService.sendVerification(registerData.email);
            },
            verifyCode(){
                let vm = this;
                var registerData = JSON.parse(window.localStorage.getItem('registerData'));

                AuthService.confirmVerification(registerData.email, this.codeInputs.join(''),(response)=>{
                    if(response.status){
                        window.localStorage.setItem("isEmailVerified","true");
                        vm.$router.push(`/${vm.type}/createpassword`);
                    }
                })
            }
        },
        created(){
            this.sendVerification();
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

    .code-input{
        font-size : 25px;
        text-align: center;
        margin-left: auto;
        margin-right: auto;
    }
    .login-text{
        color: green;
        text-decoration: none;
    }
</style>