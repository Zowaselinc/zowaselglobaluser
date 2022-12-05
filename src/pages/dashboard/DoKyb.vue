<template>
    <DefaultNav>
        <div class="big-container">
            <div class="welcome-text">
                <h2>Welcome, Pamela Cocoa</h2>
                <p>Wallet Balance: <span>NGN0.00</span></p>
            </div>

            <div class="big-notification">
                <p>You are required to provide some details about your company. <a href="#">Click here to proceed</a></p>
            </div>
           
           <Cards></Cards>
            <div class="chart">
                <div class="chart-text">
                    <h2>Sales Analytics</h2>
                    <div class="filter">Filter By | Last 12months</div>
                </div>
                <img src="@/assets/images/backgrounds/emptychart.png" alt="">
                <div class="dots">
                    <div class="green-dot"></div>
                    <p class="green-text">Sales</p>
                    <div class="red-dot"></div>
                    <p class="red-text">Revenue</p>
                </div>
            </div>

            <div class="row table-area">
                <div class="col-8 big-table">
                    <div class="theading">
                        <h4>Transactions</h4>
                        <p>See all Transactions</p>
                    </div>
                    <div class="empty-img">
                        <img src="@/assets/images/backgrounds/empty-box.png" alt="">
                        <p>No information available yet</p>
                    </div>
                </div>
                <div class="col-3 small-table">
                    <h4>Orders in Transit</h4>
                 
                    <div class="empty-img">
                        <img src="@/assets/images/backgrounds/empty-box.png" alt="">
                        <p class="small-text">No information available yet</p>
                    </div>
                </div>
            </div>

        </div>
        
        
        
    </DefaultNav>
</template>

<script> 
    import DefaultNav from "@/layouts/DefaultNav.vue";
    import Cards from "./components/Cards.vue";
    export default {
        name: 'DoKyb',
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

    .big-notification{
        width: 100%;
        height: 60px;
        color: white;
        background: #CD4647;
        box-shadow: 0px 12px 24px rgba(44, 39, 56, 0.04), 0px 24px 48px rgba(44, 39, 56, 0.08);
        border-radius: 4px;
        margin-bottom: 30px;
        padding: 0px 24px;
        display: flex;
        align-items: center;

        p{
            margin: 0px;
            padding: 0px;
        }
        a{
            color: white;
        }
    }

    .chart{
        width: 100%;
        margin-top: 50px;
        padding: 30px;
        background: white;

        .chart-text{
            display: flex;
            justify-content: space-between;
            margin-bottom: 20px;

            h2{
                font-family: 'Poppins';
                font-style: normal;
                font-weight: 700;
                font-size: 18px;
                color: #4A4754;
            }
            .filter{
                background-color: #05B050;
                padding: 8px 14px;
                color: white;
            }
        }
    }
    .chart img{
        width: 100%;
    }
    .table-area{
        margin-top: 50px;
        display: flex;
        justify-content: space-around;
    }
    .big-table{
        background-color: white;
        padding: 30px;
    }
    .small-table{
        background-color: white;
        padding: 30px;
        margin-left: 50px;
        
    }
    .theading{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .dots{
        margin-top: 20px;
        width: 100%;
        display: flex;
        justify-content: center;

        .green-dot{
            width: 20px;
            height: 20px;
            background-color: #05B050;
            border-radius: 50%;
        }

        .red-dot{
            width: 20px;
            height: 20px;
            background-color: #CD4647;
            border-radius: 50%;
            margin-left: 20px;
        }
        .green-text{
            color: #05B050;
            margin-left: 10px;
        }
        .red-text{
            color: #CD4647;
            margin-left: 10px;
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
    .spaced{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .green-p{
        font-family: 'Maven Pro';
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        color: #05B050;
    }
    .red-p{
        font-family: 'Maven Pro';
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        color: #C32021;
    }
    .empty-img{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 70px;
    }
    .empty-img img{
        width: 200px;
        height: 200px;
    }
    .small-text{
        font-size: 12px;
    }


</style>