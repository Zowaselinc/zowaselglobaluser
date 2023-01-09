<template>
    <DefaultNav>
        <div class="big-container">
           
             <div class="row table-area">
                <div class="col-12 big-table">
                    <div class="theading">
                        <h4>My Sales</h4>
                        <p>See all Orders</p>
                    </div>
                    <table class="table table-borderless">
                        <thead>
                            <th>Date</th>
                            <th>Order ID</th>
                            <th>Products</th>
                            <th>Amount</th>
                            <th>Payment Status</th>
                            <th>Shipping Status</th>
                            <th>Action</th>
                           
                            <th></th>
                        </thead>

                        <tbody>
                            <tr>
                                 <td>23, Jan, 2023</td>
                                <td>#34427633</td>
                                <td>Green Peas</td>
                                <td>NGN32,765</td>
                                <td>Paid full</td>
                                <td scope="row">
                                    <div class="colored-green">
                                        <div class="green-dot"></div>
                                        <p>Delivered</p>
                                    </div>
                                </td>
                                <td><a href="/dashboard/marketplace/updateshipping" class="view">View</a></td>
                            </tr>
                            <tr>
                                 <td>23, Jan, 2023</td>
                                <td>#34427633</td>
                                <td>Green Peas</td>
                                <td>NGN32,765</td>
                                <td>Paid full</td>
                                <td scope="row">
                                    <div class="colored-green">
                                        <div class="green-dot"></div>
                                        <p>Delivered</p>
                                    </div>
                                </td>
                                <td><a href="/dashboard/marketplace/updateshipping" class="view">View</a></td>
                            </tr>
                            <tr>
                                 <td>23, Jan, 2023</td>
                                <td>#34427633</td>
                                <td>Green Peas</td>
                                <td>NGN32,765</td>
                                <td>Paid full</td>
                                <td scope="row">
                                    <div class="colored-green">
                                        <div class="green-dot"></div>
                                        <p>Delivered</p>
                                    </div>
                                </td>
                                <td><a href="/dashboard/marketplace/updateshipping" class="view">View</a></td>
                            </tr>
                            
                            <tr>
                                 <td>23, Jan, 2023</td>
                                <td>#34427633</td>
                                <td>Green Peas</td>
                                <td>NGN32,765</td>
                                <td>Half payment</td>
                                <td scope="row">
                                    <div class="colored-yellow">
                                        <div class="yellow-dot"></div>
                                        <p>In transit</p>
                                    </div>
                                </td>
                                <td><a href="/dashboard/marketplace/updateshipping" class="view">View</a></td>
                            </tr>
                            <tr>
                                 <td>23, Jan, 2023</td>
                                <td>#34427633</td>
                                <td>Green Peas</td>
                                <td>NGN32,765</td>
                                <td>Half payment</td>
                                <td scope="row">
                                    <div class="colored-yellow">
                                        <div class="yellow-dot"></div>
                                        <p>In transit</p>
                                    </div>
                                </td>
                                <td><a href="/dashboard/marketplace/updateshipping" class="view">View</a></td>
                            </tr>
                            <tr>
                                 <td>23, Jan, 2023</td>
                                <td>#34427633</td>
                                <td>Green Peas</td>
                                <td>NGN32,765</td>
                                <td>Paid full</td>
                                <td scope="row">
                                    <div class="colored-green">
                                        <div class="green-dot"></div>
                                        <p>Delivered</p>
                                    </div>
                                </td>
                                <td><a href="/dashboard/marketplace/updateshipping" class="view">View</a></td>
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

export default {
    name: 'Sales',
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
    padding: 1% 5% 2% 5%;
    overflow-y: scroll;
   

    // @include breakpoint-between(md, lg) {
    //     width: 60.5%;
    // }

    // @include breakpoint-between(lg, xl) {
    //     width: 69.5%;
    // }

    // @include breakpoint-between(xl, xxl) {
    //     width: 76%;
    // }
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

.table-area {
    margin-top: 50px;
    display: flex;
    justify-content: space-around;
}

.big-table {
    background-color: white;
    padding: 30px;

    th {
        font-family: 'Maven Pro';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        color: #4A4754;
        border-bottom: 0.7px solid #EDEDEE;
        padding: 20px 25px;
    }

    td {
        font-family: 'Maven Pro';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        color: #696671;
        padding: 20px 25px;
    }
}

.theading {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 20px;

    h4 {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        color: #4A4754;
    }
}


.colored-green {
    display: flex;
    height: 35px;
    width: 120px;
    align-items: center;
    justify-content: center;
    background: #E6F7EE;
    border-radius: 40px;

    .green-dot {
        width: 10px;
        height: 10px;
        background-color: #05B050;
        border-radius: 50%;
    }

    p {
        color: #05B050;
        margin-top: 15px;
        margin-left: 5px;
    }
}

.colored-yellow {
    display: flex;
    height: 35px;
    width: 120px;
    justify-content: center;
    align-items: center;
    background: #FFF8E6;
    border-radius: 40px;

    .yellow-dot {
        width: 10px;
        height: 10px;
        background-color: #FAB900;
        ;
        border-radius: 50%;
    }

    p {
        color: #FAB900;
        margin-top: 15px;
        margin-left: 5px;
    }
}

.view {
            border: none;
            padding: 5px 10px;
            background: white;
            box-shadow: 0px 2px 4px rgba(44, 39, 56, 0.08), 0px 4px 8px rgba(44, 39, 56, 0.08);
            border-radius: 4px;
            font-family: 'Maven Pro';
            font-style: normal;
            font-weight: 700;
            font-size: 14px;
            line-height: 147%;
            color: #05B050;
            border: 1px solid #05B050;
        }

</style>