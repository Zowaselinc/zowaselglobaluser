<template>
    <marketPlaceLayout>
        <div class="page-wrapper">
            <div class="main-container">

            </div>
        </div>
    </marketPlaceLayout>
</template>

<script>
import MarketPlaceLayout from "@/layouts/MarketPlaceLayout.vue"

export default {
    name: "TransactionSummary",
    components: {
        MarketPlaceLayout,
    },
    data() {
        return {
            
        };
    },
    computed : {
        
    },
    methods: {


    }

}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";
.page-wrapper{
    background: #F5F5F5;
}
.main-conatiner{
    background: #ffff;

}


</style>