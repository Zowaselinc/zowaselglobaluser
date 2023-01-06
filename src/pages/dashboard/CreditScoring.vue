<template>
    <DefaultNav>
        <div class="big-container">
           
            <div class="row">
                <div class="col">
                    <div class="card carded ">
                        <p>Gender</p>
                        <p class="total-p">594,094</p>
                    </div>
                </div>
                <div class="col">
                    <div class="card carded">
                        <p>Age</p>/
                        <p class="input-p">594,094</p>
                    </div>
                </div>
                <div class="col">
                    <div class="card carded">
                        <p>Crops Sold</p>
                        <p class="sold-p">594,094</p>
                    </div>
                </div>
                <div class="col">
                    <div class="card carded">
                        <p>Pending Offers</p>
                        <p class="offers-p">594,094</p>
                    </div>
                </div>
                <div class="col">
                    <div class="card carded">
                        <p>Pending Invoices</p>
                        <p class="invoices-p">594,094</p>
                    </div>
                </div>
            </div>

        
            

        </div>



    </DefaultNav>
</template>

<script>
import DefaultNav from "@/layouts/DefaultNav.vue";

export default {
    name: 'CreditScoring',
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

.carded {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding: 18px 20px 15px;
    gap: 10px;
    border: none;

    p {
        font-family: 'Maven Pro';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        color: #96949C;
    }

    .total-p {
        font-family: 'Maven Pro';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        color: #4A4754;
    }

    .input-p {
        font-family: 'Maven Pro';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        color: #05B050;
    }

    .sold-p {
        font-family: 'Maven Pro';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        color: #3498DB;
    }

    .offers-p {
        font-family: 'Maven Pro';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        color: #CD4647;
    }

    .invoices-p {
        font-family: 'Maven Pro';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        color: #FBC52B;
    }
}

</style>