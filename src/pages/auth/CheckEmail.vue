<template>
    <AuthSharedLayout>
    <div class="big-container">
        <div class="left-content">
        <h1 class="text-center">Check Your Email</h1>
        <p id="emailHelp" class="form-text text-muted text-center">We have sent an email with password reset information to {{email}}.</p>
        
         <form>
            
            <p id="emailHelp" class="form-text text-muted text-center">Didn’t receive the email? Check spam or promotion folder</p>
                        
            <div class="buttons">
                <div class="form-group">
                    <button type="button" @click="resendEmail()" class="btn  btn-lg btn-block">Send</button>
                </div>
                
                <div class="form-group">
                    <button type="button" @click="$router.replace('/login')" class="btn skip btn-lg btn-block">Back to Login</button>
                </div>
            </div>
           
            
        </form>
       
        </div>
        <div class="right-content">
            <img class="background-img" src="@/assets/images/backgrounds/right-side.png" alt="">
            <img class="logo" v-if="false" src="@/assets/images/logos/zowasel-logo.png" alt="">
        </div>
    </div>
    </AuthSharedLayout>
</template>

<script>
    import AuthSharedLayout from "@/layouts/shared/AuthSharedLayout.vue";
    import AuthService from '@/services/auth'; 
    export default {
        name:'CheckEmail',
        data(){
            return {
                email : window.localStorage.getItem('resetEmail')
            };
        },
        components: {
            AuthSharedLayout
        },
        methods:{
            resendEmail(){
                AuthService.sendResetEmail(this.email,(response)=>{
                    if(response.status){
                        window.localStorage.setItem('resetEmail',vm.email);
                        vm.$router.push('/checkemail');
                    }
                });
            }
        }
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
    form{
        margin-top: 10%;
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
        margin-top: 30px;

    }
    .form-group{
        margin-bottom: 15px;
    }
  
    .right-content{
        width: 35%;
        height: 100%;
    }
    .right-content img{
        width: 100%;
        height: 100%;
    }
</style>