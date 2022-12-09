
<template>
    <TopHeader />
    <div class="big-content">
        <SideBar />
        <slot></slot>
    </div>
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
        Footer
    },
    created(){
        if(!this.$store.state.authData){
            window.location.replace('/login');
        }
    },
    mounted() {

    },
}
</script>

<style lang="scss" scoped>
.big-content{
    display: flex;
    flex-direction: row;
}
</style>