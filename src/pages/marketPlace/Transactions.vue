<template>
    <MarketPlaceLayout>
        <div class="welcome-text">
            <h2>Transactions</h2>
            
        </div>

        <div class="big-container">
            

            <div class="row table-area">
                <div class="col-12 big-table">
                    <div class="theading">
                        <h4>Transactions</h4>
                        <p>See all Transactions</p>
                    </div>
                    <table class="table table-borderless">
                        <thead>
                            <th>TRANSACTION ID</th>
                            <th>AMOUNT</th>
                            <th>METHOD</th>
                            <th>TYPE</th>
                            <th>STATUS</th>
                            <th>DATE</th>
                            <th></th>
                        </thead>

                        <tbody>
                            <tr>
                                <td>1265455</td>
                                <td>NGN109,755</td>
                                <td>Flutterwave</td>
                                <td>Product</td>
                                <td scope="row">
                                    <div class="colored-green">
                                        <div class="green-dot"></div>
                                        <p>Completed</p>
                                    </div>
                                </td>
                                <td>21 Oct, 2022</td>
                                <td><img src="@/assets/images/vectors/verticalDots.svg"></td>
                            </tr>
                            <tr>
                                <td>1265455</td>
                                <td>NGN109,755</td>
                                <td>Flutterwave</td>
                                <td>Product</td>
                                <td scope="row">
                                    <div class="colored-green">
                                        <div class="green-dot"></div>
                                        <p>Completed</p>
                                    </div>
                                </td>
                                <td>21 Oct, 2022</td>
                                <td><img src="@/assets/images/vectors/verticalDots.svg"></td>
                            </tr>

                            <tr>
                                <td>65458893</td>
                                <td>NGN122,986</td>
                                <td>Flutterwave</td>
                                <td>Product</td>
                                <td scope="row">
                                    <div class="colored-yellow">
                                        <div class="yellow-dot"></div>
                                        <p>Pending</p>
                                    </div>
                                </td>
                                <td>21 Oct, 2022</td>
                                <td><img src="@/assets/images/vectors/verticalDots.svg"></td>
                            </tr>
                            <tr>
                                <td>65458893</td>
                                <td>NGN122,986</td>
                                <td>Flutterwave</td>
                                <td>Product</td>
                                <td scope="row">
                                    <div class="colored-yellow">
                                        <div class="yellow-dot"></div>
                                        <p>Pending</p>
                                    </div>
                                </td>
                                <td>21 Oct, 2022</td>
                                <td><img src="@/assets/images/vectors/verticalDots.svg"></td>
                            </tr>
                            <tr>
                                <td>1265455</td>
                                <td>NGN109,755</td>
                                <td>Flutterwave</td>
                                <td>Product</td>
                                <td scope="row">
                                    <div class="colored-green">
                                        <div class="green-dot"></div>
                                        <p>Completed</p>
                                    </div>
                                </td>
                                <td>21 Oct, 2022</td>
                                <td><img src="@/assets/images/vectors/verticalDots.svg"></td>
                            </tr>
                            <tr>
                                <td>1265455</td>
                                <td>NGN109,755</td>
                                <td>Flutterwave</td>
                                <td>Product</td>
                                <td scope="row">
                                    <div class="colored-green">
                                        <div class="green-dot"></div>
                                        <p>Completed</p>
                                    </div>
                                </td>
                                <td>21 Oct, 2022</td>
                                <td><img src="@/assets/images/vectors/verticalDots.svg"></td>
                            </tr>
                            <tr>
                                <td>1265455</td>
                                <td>NGN109,755</td>
                                <td>Flutterwave</td>
                                <td>Product</td>
                                <td scope="row">
                                    <div class="colored-green">
                                        <div class="green-dot"></div>
                                        <p>Completed</p>
                                    </div>
                                </td>
                                <td>21 Oct, 2022</td>
                                <td><img src="@/assets/images/vectors/verticalDots.svg"></td>
                            </tr>
                           
                        </tbody>
                    </table>
                </div>

            </div>
            
        </div>



    </MarketPlaceLayout>
</template>

<script>
import  MarketPlaceLayout from "@/layouts/MarketPlaceLayout.vue"
    export default {
        name:'Transactions',
        components: {
            MarketPlaceLayout,
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
    padding: 1% 5% 2% 5%;

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

.welcome-text {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #262C3F;
    color:white ;
    height: 90px;


    h2 {
        font-family: 'Maven Pro';
        font-style: normal;
        font-weight: 700;
        font-size: 32px;
        color: white;
    }



  
}











// .map-area {
//     margin-top: 50px;
//     margin-bottom: 50px;

//     img {
//         width: 100%;
//     }
// }
</style>