<template>
    <DefaultNav>
        <div class="big-container">
            <div class="welcome-text">
                <h2>Welcome, Carbury</h2>
                <p>Wallet Balance: <span>$5070</span></p>
            </div>
            <div class="row">
                <div class="col">
                    <div class="card carded ">
                        <p>Total</p>
                        <p>594,094</p>
                    </div>
                </div>
                <div class="col">
                    <div class="card carded">
                        <p>Input Sold</p>
                        <p>594,094</p>
                    </div>
                </div>
                <div class="col">
                    <div class="card carded">
                        <p>Crops Sold</p>
                        <p>594,094</p>
                    </div>
                </div>
                <div class="col">
                    <div class="card carded">
                        <p>Pending Offers</p>
                        <p>594,094</p>
                    </div>
                </div>
                <div class="col">
                    <div class="card carded">
                        <p>Pending Invoices</p>
                        <p>594,094</p>
                    </div>
                </div>
                    
                    
                    
                    
                
            </div>
            <div class="chart">
                <img src="@/assets/images/backgrounds/linechart.png" alt="">
            </div>

        <div class="table-area">
            <div class="col-8">
                <table class="table table-borderless">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        </tr>
                        <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        </tr>
                        <tr>
                        <th scope="row">3</th>
                        <td colspan="2">Larry the Bird</td>
                        <td>@twitter</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="col-4">
                <table class="table table-borderless">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        </tr>
                        <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        </tr>
                        <tr>
                        <th scope="row">3</th>
                        <td colspan="2">Larry the Bird</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        </div>
        
        
        
    </DefaultNav>
</template>

<script> 
    import DefaultNav from "@/layouts/DefaultNav.vue"
    export default {
        name: 'CorporateDashboard',
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
    padding:1% 5% 2% 5%;
}
    .welcome-text{
        display: flex;
        justify-content: space-between;
        margin-bottom: 45px;
    }
    .chart{
        width: 100%;
        padding-top: 50px;
        padding-bottom: 30px;
    }
    .chart img{
        width: 100%;
    }
    .carded{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        padding: 18px 20px 15px;
        gap: 10px;
    }
</style>