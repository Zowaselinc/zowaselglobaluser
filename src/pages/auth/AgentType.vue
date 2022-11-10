<template>
    <AuthSharedLayout>
    <div class="big-container">
        <img class="mobile-logo" src="@/assets/images/logos/zowasel-logo.png" alt="">
        <div class="left-content">
        <h1 class="text-center">Agent Type</h1>

        <div class="lines">
            <div class="line"></div>
            <p>OR</p>
            <div class="line"></div>
        </div>
         <form>
            
            
            
         
            <div class="form-group">
                <div class="row">
                    <select name="" placeholder="Select Agent Type" id="">
                        <option value=""></option>
                    </select>
                    
                
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

            
            
           
            <div class="form-group">
                <button  type="button" class="btn green-btn btn-lg btn-block">Continue</button>
            </div>
            
        </form>
       
        </div>
        <div class="right-content">
                <img   class="background-img"  src="@/assets/images/backgrounds/partner-background2.png" alt="">
            <img class="logo" src="@/assets/images/logos/zowasel-logo.png" alt="">
        </div>
    </div>
    </AuthSharedLayout>
</template>

<script>
    import AuthSharedLayout from "@/layouts/shared/AuthSharedLayout.vue";
    export default {
        name:'AgentType',
        components: {
            AuthSharedLayout
        },
     
    }
</script>

<style lang="scss" scoped>
    @import "@/assets/scss/main.scss";

    .left-content{
        display: flex;
        flex-direction: column;
        padding: 0px 10%;
        justify-content: center;
    }
     .radios-container{
        margin-top: 20px;
        margin-bottom: 50px;
    }   
    .radios label{
        margin-left: 10px;
    } 

    select{
        background-color: white;
    }

</style>