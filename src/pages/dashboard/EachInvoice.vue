<template>
    <DefaultNav>
        <div class="big-container">    
            <div class="headings">
                <h2>INV-001-123456</h2>
                <div class="right-btns">
                    <a href="" class="white-link">Print <img src="@/assets/images/vectors/print.svg" alt=""></a>
                    <a href="" class="green-link">Download</a>
                </div>
            </div>  
            

            <div class="active-subscriptions">              
                <h2>Date : 1st December, 2022</h2>
                <div class="details">
                    <div class="from">
                        <h3>From</h3>
                        <p class="green-text">Dangote Farms</p>
                        <p>4517 Washington Ave.</p>
                        <p>Manhester, Kentucky 39495</p>
                        <p>dangote.farms.co</p>
                    </div>
                    <div class="to">
                        <h3>to</h3>
                        <p class="green-text">Naziri Diary Incoporated</p>
                        <p>4140 Parker Rd. Allentown,</p>
                        <p>New Mexico 31134</p>
                        <p>diary@inc</p>
                    </div>
                    
                </div>
                
                <table class="table-borderless sub-history">
                    <hr>
                    <tr>
                        <td class="theader">Description</td>
                        <td class="theader text-center">Price</td>
                        <td class="theader text-center">Quantity</td>
                        <td class="theader go-right">Amount</td>
                    </tr>

                    <tbody class="scrollable">
                    <hr>
                        <a href="">
                            <tr>
                                <td >NPK Fertilizers</td>
                                <td class="text-center">NGN342,980</td>
                                <td class="text-center">2</td>
                                <td class="go-right">NGN767,564</td>
                                
                            </tr>
                        </a>
                     

                    </tbody>
                    <hr>
                
                </table>

               

                <div class="total-area">
                    <div class="left-side">
                        <div class="each-item">
                        <p>Subtotal</p>
                        <h4>NGN456,986</h4>
                        </div>
                        <div class="each-item">
                            <p>Tax</p>
                            <h4>2%</h4>
                        </div>
                        <div class="each-item">
                            <p>Total</p>
                            <h4>NGN576,097</h4>
                        </div>
                    </div>
                </div>

                <div class="payment-details">
                    <div class="each-detail">
                        <p class="faint">Payment Type</p>
                        <p class="faint">Due Date</p>
                    </div>
                    <div class="each-detail">
                        <p>Card Payment</p>
                        <p class="green-text">Saturday, October 24th, 2022</p>
                    </div>
                </div>

                
            </div>

        </div>
        
        
        
    </DefaultNav>
</template>

<script> 
    import DefaultNav from "@/layouts/DefaultNav.vue";
    export default {
        name: 'RenewalManager',
        components:{
            DefaultNav,
        }
    }
</script>


<style lang="scss" scoped>
.big-container{
    width: 100%;
    height: auto;
    background: #F5F5F5;
    display: flex;
    flex-direction: column;
    padding:2% 5% 2% 3%;
    overflow-y: scroll;
    h2{
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        color: #4A4754;
    }
}
.active-subscriptions{
    background-color: white;
    padding: 24px 65px;
    margin-top: 40px;

    h2{
        font-family: 'Maven Pro';
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 21px;
        color: #696671;
    }
    
}










/* The slider */

    
.sub-history{
    margin-top: 50px;
    width: 100%;
    margin-left: 10px;

    h2{
        margin-bottom: 40px;
    }
    .theader{
        font-family: 'Maven Pro';
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        color: #4A4754;
    }
  

}
.headings{
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;
    
    a{
        text-decoration: none;
    }
    .right-btns{
        display: flex;
        gap: 20px;
        
    }
    .green-link{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: white;
        width: 180px;
        height: 40px;
        background: #05B050;
        border-radius: 5px;
        font-weight: 700;
        font-size: 16px;
        letter-spacing: 0.02em;
    }
    .white-link{
        display: flex;
        flex-direction: row;
        gap: 10px;
        justify-content: center;
        align-items: center;
        width: 180px;
        height: 40px;
        background: #FFFFFF;
        border: 1.11212px solid #696671;
        border-radius: 5px;
        font-family: 'Maven Pro';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        letter-spacing: 0.02em;
        color: #696671;
    }

    
}



.details{
    margin-top: 60px;
    display: flex;
    justify-content: space-between;
    
    h3{
        font-family: 'Maven Pro';
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
    }
    .green-text{
        font-family: 'Maven Pro';
        font-style: normal;
        font-weight: 500;
        font-size: 17.2371px;
        color: #05B050;
    }
}
.sub-history{
    margin-top: 50px;
    width: 100%;

    h2{
        margin-bottom: 40px;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        color: #4A4754;

    }
    .theader{
        font-family: 'Maven Pro';
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 21px;
        color: #96949C;

    }
  
    tr{
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 20px 0px;
        gap: 129px;
        height: 66px;
        flex: 1;
        
    }
    td{
        flex: 1;
        font-family: 'Maven Pro';
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 21px;
        color: #4A4754;
    }
 
a{
    text-decoration: none;
}
}
.total-area{
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: 100px;
    margin-bottom: 100px;
    
    .left-side{
        width: 50%;
        display: flex;
        flex-direction: column;
        .each-item{
            display: flex;
            justify-content: space-between;
        }
    }
}

.go-right{
    text-align: right;
}
.each-detail{
    display: flex;
    justify-content: space-between;
}
.faint{
    font-family: 'Maven Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    color: #96949C;
}

.green-text{
    font-family: 'Maven Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    color: #05B050;

}
</style>