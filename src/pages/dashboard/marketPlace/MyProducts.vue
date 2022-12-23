<template>
    <DefaultNav>


        <div class="big-container">
            <div class="welcome-text">
                <h2>My Crops/Inputs</h2>

            </div>
            <div class="contents">
                <a href="#" class="each-product">
                    <div class="top-address">
                        <h3>Maize-200-brown</h3>
                        <p>Date: <span>2022-11-16 7:58pm</span></p>
                        <p>Delivery Window: <span>2022-11-16 -- 2022-12-02</span></p>
                        <p>Status <span>Active</span></p>

                    </div>
                    <div class="main-address">
                        <div class="right">
                            <h4>Amount: <span>NGN2,550</span> </h4>
                            <div class="product-btns">
                                <button class="edit">Edit</button>
                                <button class="delete">Delete</button>
                                <button class="view">View</button>
                            </div>

                        </div>
                    </div>
                </a>
                <a href="#" class="each-product">
                    <div class="top-address">
                        <h3>Maize-200-brown</h3>
                        <p>Date: <span>2022-11-16 7:58pm</span></p>
                        <p>Delivery Window: <span>2022-11-16 -- 2022-12-02</span></p>
                        <p>Status <span>Active</span></p>

                    </div>
                    <div class="main-address">
                        <div class="right">
                            <h4>Amount: <span>NGN2,550</span> </h4>
                            <div class="product-btns">
                                <button class="edit">Edit</button>
                                <button class="delete">Delete</button>
                                <button class="view">View</button>
                            </div>

                        </div>
                    </div>
                </a>
                <a href="#" class="each-product">
                    <div class="top-address">
                        <h3>Maize-200-brown</h3>
                        <p>Date: <span>2022-11-16 7:58pm</span></p>
                        <p>Delivery Window: <span>2022-11-16 -- 2022-12-02</span></p>
                        <p>Status <span>Active</span></p>

                    </div>
                    <div class="main-address">
                        <div class="right">
                            <h4>Amount: <span>NGN2,550</span> </h4>
                            <div class="product-btns">
                                <button class="edit">Edit</button>
                                <button class="delete">Delete</button>
                                <button class="view">View</button>
                            </div>

                        </div>
                    </div>
                </a>
            </div>



        </div>




    </DefaultNav>
</template>

<script>
import DefaultNav from "@/layouts/DefaultNav.vue";

export default {
    name: 'MyProducts',
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

.welcome-text {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #262C3F;
    color: white;
    padding: 14px 30px;
    width: 100%;


    h2 {
        font-family: 'Maven Pro';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        color: white;
    }

    p {
        font-family: 'Maven Pro';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        color: #4A4754;
    }

    span {
        font-family: 'Maven Pro';
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        color: #05B050;
    }
}

.each-product {
    width: 100%;
    border: 1px solid #dce3e9;
    padding: 20px 50px;
    display: flex;
    justify-content: space-between;
    margin-top: 40px;
    text-decoration: none;
    color: black;

    .product-btns {
        display: flex;
        gap: 15px;

        .edit {
            background: #FFF8E6;
            border: 1px solid #F59E0B;
            border-radius: 4px;
            padding: 5px 10px;
            font-family: 'Maven Pro';
            font-style: normal;
            font-weight: 700;
            font-size: 14px;
            color: #F59E0B;
        }

        .delete {
            background: #F9E9E9;
            border: 1px solid #C32021;
            border-radius: 4px;
            padding: 5px 10px;
            font-family: 'Maven Pro';
            font-style: normal;
            font-weight: 700;
            font-size: 14px;
            color: #C32021;
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
    }
}



.contents {
    width: 100%;
    background-color: white;
    padding: 38px;
}

.top-address {
    align-items: center;
    gap: 12px;

    img {
        width: 20px;
        height: 20px;
    }

    h3 {
        margin-top: 5px;
        color: #05B050;
        font-size: 18px;
    }

    p {
        font-size: 15px ;
        span {
            font-size: 13.5px;
        }
    }

}

.main-address {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h4{
        font-size: 18px;
        span{
            font-size: 16px;
        }
    }
    button{
        font-size: 14px;
    }

}
</style>