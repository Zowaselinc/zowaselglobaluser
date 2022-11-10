<template>
    <Navigation>
        <div class="welcome-text">
            <h2>Welcome, Carbury</h2>
            <p>Wallet Balance: <span>$5070</span></p>
        </div>
        <div class="row">
            <div class="col">
                <div class="card">
                    <p>594,094</p>
                </div>
                <div class="card">
                    <p>Input Sold</p>
                    <p>594,094</p>
                </div>
                <div class="card">
                    <p>Crops Sold</p>
                    <p>594,094</p>
                </div>
                <div class="card">
                    <p>Pending Offers</p>
                    <p>594,094</p>
                </div>
                <div class="card">
                    <p>Pending Invoices</p>
                    <p>594,094</p>
                </div>
            </div>
        </div>
        <div class="chart">
            <img src="" alt="">
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
    </Navigation>
</template>

<script> 
    import Navigation from "@/layouts/partials/Navigation.vue"
    export default {
        name: 'CorporateDashboard',
        components:{
            Navigation,
        }
    }
</script>

<style lang="scss" scoped>
    .welcome-text{
        display: flex;
        justify-content: space-between;
    }
</style>