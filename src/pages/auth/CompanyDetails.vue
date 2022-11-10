<template>
<AuthSharedLayout>
    <div class="big-container">
        <img class="mobile-logo" src="@/assets/images/logos/zowasel-logo.png" alt="">
        <div class="left-content">
            <h1 class="text-center">Company Details</h1>
            <p id="emailHelp" class="form-text text-muted text-center">Enter your company Details</p>
            <div class="lines">
                <div class="line"></div>
                <p>OR</p>
                <div class="line"></div>
            </div>
            <form id="register-form" action="javascript:void()" @submit="submitForm($event)">
                
                <div v-if="type == 'agent' || type == 'partner'" class="form-group">
                    <label for="">Type of {{type}}</label>

                    <select v-if="type == 'partner'" class="form-control" name="subtype" required>
                        <option value=""> Select Type</option>
                        <option value="logistics"> Logistics partner </option>
                        <option value="financial"> Financial partner </option>
                    </select>

                    <select v-if="type == 'agent'" class="form-control" name="subtype" required>
                        <option value=""> Select Type</option>
                        <option value="inspectors">Inspector</option>
                        <option value="field">Field agent</option>
                        <option value="data-collector">Data collector</option>
                    </select>

                </div>
                
                <div class="form-group">
                    <label for="">Company Name</label>
                    <input type="text" class="form-control" name="company-name" required id="formGroupExampleInput" placeholder="Enter your company name">
                </div>
                <div class="form-group">
                    <label for="">Company Address</label>
                    <input type="text" class="form-control" name="company-address" required id="formGroupExampleInput2" placeholder="Enter your company address">
                </div>
                <div class="form-group">
                    <div class="row">
                        <div class="col">
                            <label for="">State</label>
                            <select class="form-control" name="state" required>
                                <option value="" selected>Select State</option>
                                <option v-for="state in states" :key="state" value="state">{{state}}</option>
                            </select>
                        </div>
                        <div class="col">
                            <label for="">RC Number</label>
                            <input type="text" class="form-control" name="rc-number" required placeholder="Enter company RC number">
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <div class="row">
                        <div class="col">
                            <label for="">Company Email</label>
                            <input type="email" name="company-email" required class="form-control" placeholder="Enter company email">
                        </div>
                        <div class="col">
                            <label for="">Company Phone Number</label>
                            <input type="text" name="company-phone" required class="form-control" placeholder="Enter company phone number">
                        </div>
                        
                    
                    </div>
                </div>
                <div class="buttons">
                    <div class="form-group">
                        <button type="submit" class="btn  btn-lg green-btn btn-block">Continue</button>
                    </div>
                    <div class="form-group" v-if="false">
                        <router-link to="/merchant/verifyaccount" class="btn skip btn-lg btn-block">Skip this step</router-link>
                    </div>
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
import states from "@/data/states";
    export default {
        name:'MerchantCompanyDetails',
        components: {
            AuthSharedLayout
        },
        data(){
            return {
                type : this.$route.params.type,
                states : states
            };
        },
        methods:{
            submitForm(e){

                var form = new FormData(document.querySelector('#register-form'));

                var registerData = {
                    has_company : true,
                    company_name : form.get('company-name'),
                    company_address : form.get('company-address'),
                    company_email : form.get('company-email'),
                    company_state : form.get('state'),
                    rc_number : form.get('rc-number'),
                    company_phone : form.get('company-phone'),
                };

                //Check for subtype
                var subtype = form.get('subtype');

                if(subtype){
                    if(this.type == "agent"){
                        registerData['agent_type'] = subtype;
                    }
                    if(this.type == "partner"){
                        registerData['partnership_type'] = subtype;
                    }
                }

                var previousData = JSON.parse(window.localStorage.getItem('registerData'));

                window.localStorage.setItem('registerData',JSON.stringify({
                    ...previousData,
                    ...registerData
                }));

                this.$router.push(`/${this.type}/verifyaccount`);
                
            }
        }
    }
  
</script>

<style lang="scss"  scoped>
    
    .checking{
        display: flex;
        margin-top: 60px;
     
    }
    .buttons{
        margin-top: 50px;
    }
 
    .skip{
        background: #2D3748;
        width: 100%;
        color: white;

    }
       
    .check-p{
        margin-top: -5px;
        margin-left: 10px;
    }
    .last-text{
        margin-top: 50px;
    }
</style>