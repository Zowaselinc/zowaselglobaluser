<template>
    <DefaultNav>
        <div class="big-container">
            <div class="left">
                <div class="top-section">
                    <h1>API and Service Subscription</h1>
                </div>
                <div class="main-content">
                    <p class="mt">Credit Score Rating Plans</p>
                    <div class="data">
                        <div class="data-box">
                            <h3>Data Sharing</h3>
                            <p>Access to basic data points for potential loan decisions</p>
                            <div class="bottom-section">
                                <p>NGN 2,000/month</p>
                                <button>View Details</button>
                            </div>
                        </div>
                        <div class="data-box">
                            <h3>Data Aggregation</h3>
                            <p>Access to centralized data points, connecting parties, and exploring ways to connect disparate data sets.</p>
                            <div class="bottom-section">
                                <p>NGN 5,000/month</p>
                                <button>View Details</button>
                            </div>
                        </div>
                        <div class="data-box">
                            <h3>Data Analysis</h3>
                            <p>Access to advanced data editing and analytics</p>
                            <div class="bottom-section">
                                <p>NGN 2,000/month</p>
                                <button>View Details</button>
                            </div>
                        </div>
                    </div>
                    
                    <p class="mt">Traceability Subscription Fee</p>
                    <div class="data">
                        <div class="data-box">
                            <h3>Traceability</h3>
                            <p>Access to sustainable crop sourcing from farm</p>
                            <div class="bottom-section">
                                <p>NGN 2,000/month</p>
                                <button>View Details</button>
                            </div>
                        </div>
                        <div class="data-box">
                            <h3>Footprint/Impact tracking</h3>
                            <p>Access to advanced footprint and impact tacking across the community, people, and the planet.</p>
                            <div class="bottom-section">
                                <p>NGN 2,000/month</p>
                                <button>View Details</button>
                            </div>
                        </div>
                        
                    </div>
                    <p class="mt">Marketplace Transaction Fee</p>
                    <div class="data">
                        <div class="data-box">
                            <h3>Marketplace</h3>
                            <p>Access to standard Marketplace commodity sourcing across the supply chain</p>
                            <div class="bottom-section">
                                <p>NGN 2,000/month</p>
                                <button>View Details</button>
                            </div>
                        </div>
                    </div>
                    <p class="mt">Commodity Market Report Subcription Model</p>
                    <div class="data">
                        <div class="data-box">
                            <h3>Commodity Market Report </h3>
                            <p>Access to basic data points for potential loan decisions</p>
                            <div class="bottom-section">
                                <p>NGN 7,000/month</p>
                                <button>View Details</button>
                            </div>
                        </div>
                        <div class="data-box">
                            <h3>Commodity Market Report </h3>
                            <p>Access to basic data points for potential loan decisions</p>
                            <div class="bottom-section">
                                <p>NGN 2,000/month</p>
                                <button>View Details</button>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div class="right">
                <h2>Details</h2>
                <div class="right-data-box">
                    <div class="details">
                        <h3>Data Sharing</h3>
                        <p class="underlined">NGN 10,000/month</p>
                        <p>Suitable for DFI, MFIs, 
                            Out-growers, and other
                            lenders seeking smallholder farmers data to make
                            potential loan decisions.
                        </p>
                        <h3>Features</h3>
                        <ul>
                            <li>Access to basic data points for potential loan decisions</li>
                            <li>Data storage and privacy</li>
                            <li>No data editing</li>
                            <li>No analysis/recommendation</li>
                        </ul>
                        <button>Proceed to Checkout</button>
                    </div>
                </div>
            </div>
        </div>



    </DefaultNav>
</template>

<script>
import DefaultNav from "@/layouts/DefaultNav.vue";
export default {
    name: 'Subscription',
    components: {
        DefaultNav,
      
    }
}
</script>


<style lang="scss" scoped>
@import "@/assets/scss/main.scss";

.big-container {
    width: 100%;
    height: auto;
    background: #F5F5F5;
    display: flex;
    flex-direction: row;

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
.left{
    width: 70%;
    height: auto;
    background-color: white;

    .top-section{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 66px;
        background: #262C3F;
        color: white;
    }
    .main-content{
        padding: 0px 72px 60px 46px;
        .mt{
            margin-top: 50px;
            margin-bottom: 0px;
        }
        .data{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            flex-wrap: wrap;
        }

        .data-box{
            background: linear-gradient(116.78deg, #FFFFFF 0.51%, rgba(255, 255, 255, 0) 66.77%);
            backdrop-filter: blur(21px);
            border-radius: 7px;
            padding: 20px 20px 10px 20px;
            width: 48%;
            margin-top: 25px;
            border: 1px solid rgba(0, 0, 0, 0.2);
            position: relative;
            h3{
                font-family: 'Inter';
                font-style: normal;
                font-weight: 700;
                font-size: 16px;
                color: #0E0E0E;

            }
            p{
                font-family: 'Poppins';
                font-style: normal;
                font-weight: 300;
                font-size: 12px;
                color: #000000;
            }

            .bottom-section{
                display: flex;
                justify-content: space-between;
                margin-top: 30px;
                p{
                    font-family: 'Inter';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 17px;
                    color: #0E0E0E;
                    opacity: 0.96;
                }

                button{
                    padding: 8px 15px;
                    background: #FFFFFF;
                    border: 1px solid rgba(0, 0, 0, 0.2);
                    border-radius: 7px;
                    font-family: 'Inter';
                    font-style: normal;
                    font-weight: 700;
                    font-size: 14px;
                    text-align: center;
                    color: #05B050;
                }
            }
        }
    }
}

.right{
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px 30px 0px 30px;
    height: auto;
}

.details{
    border: 1px solid rgba(0, 0, 0, 0.2);
    background: linear-gradient(116.78deg, #FFFFFF 0.51%, rgba(255, 255, 255, 0) 66.77%);
    backdrop-filter: blur(21px);
    border-radius: 7px;
    padding: 0px 20px 30px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;

    p{
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 300;
        font-size: 14px;
        text-align: center;
        color: #000000;
    }
    h3{
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        text-align: center;
        color: #000000;
        margin-top: 40px;
        margin-bottom: 20px;
    }

    .underlined{
        border-bottom: 0.5px solid black;
        margin-bottom: 40px;
    }

    h3{
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        letter-spacing: 0.01em;
        font-feature-settings: 'liga' off;
        color: #4A4754;
    }
    button{
        padding: 10px 27px;
        gap: 10px;
        background: #05B050;
        border-radius: 7px;
        color: white;
        border: none;
    }
    ul{
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
}



</style>
