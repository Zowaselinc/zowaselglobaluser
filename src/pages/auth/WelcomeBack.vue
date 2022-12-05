<template>
<AuthSharedLayout>
    <div class="big-container">
        <img class="mobile-logo" src="@/assets/images/logos/zowasel-logo.png" alt="">
        <div class="left-content">
        <h1 class="text-center">Welcome Back</h1>
        
        
         <form>
            
            
            
            <div class="form-group">
                <label for="">Email</label>
                <input type="email" v-model="email" class="form-control" id="formGroupExampleInput" placeholder="Enter your email">
            </div>
            <div class="form-group">
                <label for="">Password</label>
                <input type="password" v-model="password" class="form-control" id="formGroupExampleInput2" placeholder="Enter your password">
            </div>
            
            
            <div class="buttons">
                <div class="form-group">
                    <button type="button" @click="loginAccount()" class="btn  btn-lg btn-block">Login</button>
                </div>
                <div class="lines">
                    <div class="line"></div>
                    <p>OR</p>
                    <div class="line"></div>
                </div>
                <div class="form-group">
                    <button type="button" class="btn skip btn-lg btn-block">Continue with Google</button>
                </div>
                <div class="last-text">
                    <p id="emailHelp" class="form-text text-muted text-center">Don't have an account? <a href="/register">Sign Up</a></p>
                </div>
                
            </div>
           
            
        </form>
       
        </div>
         <div class="right-content">
            <img class="background-img" src="@/assets/images/backgrounds/right-side2.png" alt="">
            <img class="logo" src="@/assets/images/logos/zowasel-logo.png" alt="">
        </div>
    </div>
    </AuthSharedLayout>
</template>

<script>
    import AuthSharedLayout from "@/layouts/shared/AuthSharedLayout.vue";
    import AuthService from "@/services/auth";
    export default {
        name:'WelcomeBack',
        components: {
            AuthSharedLayout
        },
        data(){
            return {
                email : "",
                password : ""
            };
        },
        methods: {
            loginAccount(){
                let vm = this;
                AuthService.loginUser({
                    email : vm.email,
                    password : vm.password
                },(response)=>{
                    if(!response.error){
                        vm.$router.push('/dashboard/corporate');
                    }
                })
            }
        }
    }
</script>

<style lang="scss"  scoped>
  
   
  
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
    .last-text a{
        text-decoration: none;
        color: #008D40;
    }
   
  
</style>