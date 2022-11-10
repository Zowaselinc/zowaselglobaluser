
<template>
    <TopHeader />
    <SideBar />
    <slot></slot>
    <Footer />
</template>

<script>
import TopHeader from "@/layouts/partials/TopHeader.vue";
import SideBar from  "@/layouts/partials/SideBar.vue";
import Footer from  "@/layouts/partials/Footer.vue";
export default {
    name: "DefaultNav",
    components: {
        TopHeader,
        SideBar,
        Footer,
    },

}
</script>

<style lang="scss" scoped>
</style>