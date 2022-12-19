<template>
    <DefaultNav>
        <div class="big-container">
           
             <div class="top-text">
            <h1>Checkout</h1> 
        </div>
        <div class="big-content">
           <form>
                
                <h2>Payment</h2>
                <hr>
                <div class="form-group">
                    <label for="">Card Number</label>
                    <input type="text" class="form-control" name="company-name" required id="formGroupExampleInput" placeholder="1234 5443 5544 6543">
                </div>
                
                <div class="form-group">
                    <div class="row">
                        <div class="col">
                            <label for="">Expiration Date</label>
                           <input type="text" class="form-control" required id="formGroupExampleInput" placeholder="MM/YY">
                        </div>
                        <div class="col">
                            <label for="">CVV</label>
                            <input type="text" class="form-control" name="rc-number" required placeholder="123">
                        </div>
                    </div>
                </div>
                <div class="form-group check-area">
                    <input type="checkbox"   required>
                    <label for="">Save Card Details</label>
                </div>
               
                <div class="buttons">
                    <div class="form-group">
                        <button type="submit" class="btn  btn-lg green-btn btn-block">Make Payment</button>
                    </div>
                   
                </div>
                <p class="last-p">Your personal data will be used to process your order, support your experience throughout
                     this website, and for other purposes described in our privacy policy.</p>
            
                
            </form>

        </div>
          
            

            

        </div>



    </DefaultNav>
</template>

<script>
import DefaultNav from "@/layouts/DefaultNav.vue";

export default {
    name: 'CardDetails',
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
.top-text{
    padding: 14px 30px;
    width: 100%;
    background: #262C3F;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    
    h1{
        font-size: 24px;
    }
}
.big-content{
   padding: 100px 15%;
   display: flex;
   justify-content: center;
   align-items: center;
   background: #F1F1F1;
   
   form{
        width: 60%;
        padding:100px 50px;
        background: #FFFFFF;
        border-radius: 4px;
    h2{
        font-size: 20px;
    }
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



}

</style>