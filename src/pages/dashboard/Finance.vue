<template>
    <DefaultNav>
        <div class="big-container">
            <div class="welcome-text">
                <h2>Welcome,  {{userData.user.first_name}}</h2>
                <p>Wallet Balance: <span>$5070</span></p>
            </div>
            <Cards></Cards>
            

            <div class="row table-area">
                <div class="col-12 big-table">
                    <div class="theading">
                        <h4>Delivery History</h4>
                        <p>See all Transactions</p>
                    </div>
                    <table class="table table-borderless">
                        <thead>
                            <th>NAME</th>
                            <th>INVOICE</th>
                            <th>AMOUNT</th>
                            <th>ISSUED DATE</th>
                            <th>DUE DATE</th>
                            <th>STATUS</th>
                            <th></th>
                        </thead>
                    
                        <tbody>
                            <tr>
                                <td>Ann Peterson</td>
                                <td>564543</td>
                                <td>N303,483.00</td>
                                <td>21 Oct, 2022</td>
                                <td>24 Nov, 2022</td>
                                <td>
                                    <div class="colored-green">
                                        <div class="green-dot"></div>
                                        <p>Paid</p> 
                                    </div>                                    
                                </td>
                                <td><img src="@/assets/images/vectors/verticalDots.svg"></td>

                            </tr>
                            <tr>
                                <td>Ann Peterson</td>
                                <td>564543</td>
                                <td>N303,483.00</td>
                                <td>21 Oct, 2022</td>
                                <td>24 Nov, 2022</td>
                                <td>
                                    <div class="colored-yellow">
                                        <div class="yellow-dot"></div>
                                        <p>Due</p> 
                                    </div>
                                </td>
                                <td><img src="@/assets/images/vectors/verticalDots.svg"></td>

                            </tr>
                            <tr>
                                <td>Ann Peterson</td>
                                <td>564543</td>
                                <td>N303,483.00</td>
                                <td>21 Oct, 2022</td>
                                <td>24 Nov, 2022</td>
                                <td>
                                    <div class="colored-green">
                                        <div class="green-dot"></div>
                                        <p>Paid</p> 
                                    </div>                                    
                                </td>
                                <td><img src="@/assets/images/vectors/verticalDots.svg"></td>

                            </tr>
                            <tr>
                                <td>Ann Peterson</td>
                                <td>564543</td>
                                <td>N303,483.00</td>
                                <td>21 Oct, 2022</td>
                                <td>24 Nov, 2022</td>
                                <td>
                                    <div class="colored-red">
                                        <div class="red-dot"></div>
                                        <p>Past Due</p> 
                                    </div>
                                </td>
                                <td><img src="@/assets/images/vectors/verticalDots.svg"></td>

                            </tr>
                            <tr>
                                <td>Ann Peterson</td>
                                <td>564543</td>
                                <td>N303,483.00</td>
                                <td>21 Oct, 2022</td>
                                <td>24 Nov, 2022</td>
                                <td>
                                    <div class="colored-green">
                                        <div class="green-dot"></div>
                                        <p>Paid</p> 
                                    </div>                                    
                                </td>
                                <td><img src="@/assets/images/vectors/verticalDots.svg"></td>

                            </tr>
                            <tr>
                                <td>Ann Peterson</td>
                                <td>564543</td>
                                <td>N303,483.00</td>
                                <td>21 Oct, 2022</td>
                                <td>24 Nov, 2022</td>
                                <td>
                                    <div class="colored-yellow">
                                        <div class="yellow-dot"></div>
                                        <p>Due</p> 
                                    </div>
                                </td>
                                <td><img src="@/assets/images/vectors/verticalDots.svg"></td>

                            </tr>
                            <tr>
                                <td>Ann Peterson</td>
                                <td>564543</td>
                                <td>N303,483.00</td>
                                <td>21 Oct, 2022</td>
                                <td>24 Nov, 2022</td>
                                <td>
                                    <div class="colored-green">
                                        <div class="green-dot"></div>
                                        <p>Paid</p> 
                                    </div>                                    
                                </td>
                                <td><img src="@/assets/images/vectors/verticalDots.svg"></td>

                            </tr>
                            <tr>
                                <td>Ann Peterson</td>
                                <td>564543</td>
                                <td>N303,483.00</td>
                                <td>21 Oct, 2022</td>
                                <td>24 Nov, 2022</td>
                                <td>
                                    <div class="colored-red">
                                        <div class="red-dot"></div>
                                        <p>Past Due</p> 
                                    </div>
                                </td>
                                <td><img src="@/assets/images/vectors/verticalDots.svg"></td>

                            </tr>
                            <tr>
                                <td>Ann Peterson</td>
                                <td>564543</td>
                                <td>N303,483.00</td>
                                <td>21 Oct, 2022</td>
                                <td>24 Nov, 2022</td>
                                <td>
                                    <div class="colored-red">
                                        <div class="red-dot"></div>
                                        <p>Past Due</p> 
                                    </div>                                    
                                </td>
                                <td><img src="@/assets/images/vectors/verticalDots.svg"></td>

                            </tr>
                            <tr>
                                <td>Ann Peterson</td>
                                <td>564543</td>
                                <td>N303,483.00</td>
                                <td>21 Oct, 2022</td>
                                <td>24 Nov, 2022</td>
                                <td>
                                    <div class="colored-yellow">
                                        <div class="yellow-dot"></div>
                                        <p>Due</p> 
                                    </div>
                                </td>
                                <td><img src="@/assets/images/vectors/verticalDots.svg"></td>

                            </tr>
                        </tbody>
                    </table>
                </div>
                
            </div>

            

        </div>
        
        
        
    </DefaultNav>
</template>

<script> 
    import DefaultNav from "@/layouts/DefaultNav.vue";
    import Cards from "./components/Cards.vue";
    export default {
        name: 'FinanceDashboard',
        data() {
        return {
            userData: this.$store.state.user
        }
    },
        components:{
            DefaultNav,
            Cards
        }
    }
</script>


<style lang="scss" scoped>
@import "@/assets/scss/main.scss";
.big-container{
    width: 100%;
    height: auto;
    background: #F5F5F5;
    display: flex;
    flex-direction: column;
    padding:1% 5% 2% 5%;
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
    .welcome-text{
        display: flex;
        justify-content: space-between;
        margin-bottom: 47px;
        padding-top: 30px;


        h2{
            font-family: 'Maven Pro';
            font-style: normal;
            font-weight: 700;
            font-size: 32px;
            color: #4A4754;
        }
        p{
            font-family: 'Maven Pro';
            font-style: normal;
            font-weight: 400;
            font-size: 20px;color: #4A4754;
        }
        span{
            font-family: 'Maven Pro';
            font-style: normal;
            font-weight: 700;
            font-size: 30px;color: #05B050;
        }
    }

    
    
    
    .table-area{
        margin-top: 50px;
        display: flex;
        justify-content: space-around;
    }
    .big-table{
        background-color: white;
        padding: 30px;

        th{
            font-family: 'Maven Pro';
            font-style: normal;
            font-weight: 700;
            font-size: 16px;
            color: #4A4754;
        }

        td{
            font-family: 'Maven Pro';
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            color: #696671;
        }
    }
 
    .theading{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-bottom: 20px;

        h4{
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 700;
            font-size: 18px;
            color: #4A4754;
        }
    }

  
    .colored-green{
        display: flex;
        height: 35px;
        width: 120px;
        align-items: center;
        justify-content: center;
        background: #E6F7EE;
        border-radius: 40px;

        .green-dot{
        width: 10px;
        height: 10px;
        background-color: #05B050;
        border-radius: 50%;
    }
        p{
            color: #05B050;
            margin-top: 15px;
            margin-left: 5px;
        }
    }
    
    .colored-yellow{
        display: flex;
        height: 35px;
        width: 120px;
        justify-content: center;
        align-items: center;
        background: #FFF8E6;
        border-radius: 40px;

        .yellow-dot{
        width: 10px;
        height: 10px;
        background-color: #FAB900;
        border-radius: 50%;
    }

        p{
            color: #FAB900;
            margin-top: 15px;
            margin-left: 5px;
        }
    }
    .colored-red{
        display: flex;
        height: 35px;
        width: 120px;
        justify-content: center;
        align-items: center;
        background: #F9E9E9;
        border-radius: 40px;

        .red-dot{
        width: 10px;
        height: 10px;
        background-color: #C32021;
        border-radius: 50%;
    }

        p{
            color: #C32021;
            margin-top: 15px;
            margin-left: 5px;
        }
    }


</style>