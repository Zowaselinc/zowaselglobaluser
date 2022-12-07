<template>
    <MarketPlaceTopNav></MarketPlaceTopNav>
    <slot></slot>
    <Footer></Footer>

</template>

<script>
import MarketPlaceTopNav from "@/layouts/partials/MarketplaceTopNav.vue"
import Footer from "@/layouts/partials/Footer.vue"
    export default {
        name:'MarketPlaceLayout',
        components:{
            MarketPlaceTopNav,
            Footer
        }
    }
</script>

<style lang="scss" scoped>

</style>