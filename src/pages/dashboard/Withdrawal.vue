<template>
    <DefaultNav>
        <div class="big-container">
           
          
            
        <div class="big-content">
             <h1>Withdraw Wallet</h1>
           <form>
                
               
                <div class="form-group">
                    <label for="">Amount</label>
                    <input type="text" class="form-control" name="company-name" required id="formGroupExampleInput" placeholder="300,000">
                </div>
                <div class="form-group">
                    <label for="">Card Number</label>
                    <input type="text" class="form-control" name="company-name" required id="formGroupExampleInput" placeholder="1234 5443 5544 6543">
                </div>
                
                <div class="form-group">
                    
                        <label for="">Bank</label>
                       <select name="" id="" class="form-control">
                            <option value="">Select Bank</option>
                            <option value="">UBA</option>
                            <option value="">UBA</option>
                       </select>
                 
                </div>


                
                <!-- <div class="form-group check-area">
                    <input type="checkbox"   required>
                    <label for="">Save Card Details</label>
                </div> -->
               
                <div class="buttons">
                    <div class="form-group">
                        <button type="submit" class="btn  btn-lg green-btn btn-block">Fund Wallet</button>
                    </div>
                   
                </div>
                <!-- <p class="last-p">Your personal data will be used to process your order, support your experience throughout
                     this website, and for other purposes described in our privacy policy.</p> -->
            
                
            </form>

        </div>
          
            

            

        </div>



    </DefaultNav>
</template>

<script>
import DefaultNav from "@/layouts/DefaultNav.vue";

export default {
    name: 'WithdrawWallet',
    data() {
        return {
            userData: this.$store.state.user
        }
    },
    components: {
        DefaultNav,
       
    },
}
</script>


<style lang="scss" scoped>
@import "@/assets/scss/main.scss";

.big-container {
    width: 100%;
    height: auto;
    background: #F5F5F5;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
   

    @include breakpoint-between(md, lg) {
        width: 60.5%;
    }

    @include breakpoint-between(lg, xl) {
        width: 69.5%;
    }

    @include breakpoint-between(xl, xxl) {
        width: 76%;
    }
}

.big-content{
   padding: 100px 15%;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   background: #F1F1F1;

   h1{
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 132%;
    margin-bottom: 30px;
    color: #4A4754
   }
   
   form{
        width: 60%;
        padding:35px 50px;
        background: #FFFFFF;
        border-radius: 4px;

        hr{
            margin-bottom: 40px;
        }

        button{
            margin-top: 30px;
            
        }

        .check-area{
            display: flex;
            align-items: center;

            label{
                margin-left: 10px;
            }
        }
        .last-p{
            font-family: 'Maven Pro';
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 22px;
            color: #B5B4B9;
            margin-top: 23px;
        }
   }


.payment-type{
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 50px;
}
.each-radio{
    display: flex;
    gap: 10px;
    align-items: center;
    
}


}

</style>