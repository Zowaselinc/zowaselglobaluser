<template>
    <DefaultNav>
        <div class="big-container">
            <div class="welcome-text">
                <h2>Welcome, Ample Logistics</h2>
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
                            <th>STATUS</th>
                            <th>FROM</th>
                            <th>PICKUP</th>
                            <th>TO</th>
                            <th>DELIVERY</th>
                            <th>DATE</th>
                            <th></th>
                        </thead>
                    
                        <tbody>
                            <tr>
                                <td scope="row">
                                    <div class="colored-green">
                                        <div class="green-dot"></div>
                                        <p>Completed</p> 
                                    </div>                                    
                                </td>
                                <td>Naziri Farms</td>
                                <td>10 Adetokunmbo street,Umuahia, Abia.</td>
                                <td>Havillah flour processors</td>
                                <td>10 Adetokunmbo street,Umuahia, Abia.</td>
                                <td>21 Oct, 2022</td>
                                <td>...</td>
                            </tr>
                            <tr>
                                <td scope="row">
                                    <div class="colored-yellow">
                                        <div class="yellow-dot"></div>
                                        <p>Completed</p> 
                                    </div>
                                </td>
                                <td>Naziri Farms</td>
                                <td>10 Adetokunmbo street,Umuahia, Abia.</td>
                                <td>Havillah flour processors</td>
                                <td>10 Adetokunmbo street,Umuahia, Abia.</td>
                                <td>21 Oct, 2022</td>
                                <td>...</td>
                            </tr>
                            <tr>
                                <td scope="row">
                                    <div class="colored-yellow">
                                        <div class="yellow-dot"></div>
                                        <p>Completed</p> 
                                    </div>
                                </td>
                                <td>Naziri Farms</td>
                                <td>10 Adetokunmbo street,Umuahia, Abia.</td>
                                <td>Havillah flour processors</td>
                                <td>10 Adetokunmbo street,Umuahia, Abia.</td>
                                <td>21 Oct, 2022</td>
                                <td>...</td>
                            </tr>
                            <tr>
                                <td scope="row">
                                    <div class="colored-green">
                                        <div class="green-dot"></div>
                                        <p>Completed</p> 
                                    </div>                                    
                                </td>
                                <td>Naziri Farms</td>
                                <td>10 Adetokunmbo street,Umuahia, Abia.</td>
                                <td>Havillah flour processors</td>
                                <td>10 Adetokunmbo street,Umuahia, Abia.</td>
                                <td>21 Oct, 2022</td>
                                <td>...</td>
                            </tr>
                            <tr>
                                <td scope="row">
                                    <div class="colored-green">
                                        <div class="green-dot"></div>
                                        <p>Completed</p> 
                                    </div>                                    
                                </td>
                                <td>Naziri Farms</td>
                                <td>10 Adetokunmbo street,Umuahia, Abia.</td>
                                <td>Havillah flour processors</td>
                                <td>10 Adetokunmbo street,Umuahia, Abia.</td>
                                <td>21 Oct, 2022</td>
                                <td>...</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
            </div>

            <div class=" col-12 map-area">
                <div class="theading">
                    <h4>Map monitor - Track deliveries in transit</h4>
                    <p>See all Transactions</p>
                </div>

                <img src="@/assets/images/backgrounds/map.png" alt="">
            </div>

        </div>
        
        
        
    </DefaultNav>
</template>

<script> 
    import DefaultNav from "@/layouts/DefaultNav.vue";
    import Cards from "./components/Cards.vue";
    export default {
        name: 'LogisticsDashboard',
        components:{
            DefaultNav,
            Cards,
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
    padding:1% 5% 2% 5%;
}
    .welcome-text{
        display: flex;
        justify-content: space-between;
        margin-bottom: 45px;


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
            border-bottom: 0.7px solid #EDEDEE;
            padding: 20px 25px;
        }

        td{
            font-family: 'Maven Pro';
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            color: #696671;
            padding: 20px 25px;
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
        background-color: #FAB900;;
        border-radius: 50%;
    }

        p{
            color: #FAB900;
            margin-top: 15px;
            margin-left: 5px;
        }
    }


    .map-area{
        margin-top: 50px;
        margin-bottom: 50px;
        img{
            width: 100%;
        }
    }
</style>