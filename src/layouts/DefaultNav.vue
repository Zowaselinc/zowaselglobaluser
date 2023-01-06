
<template>
    <div class="view">
        <TopHeader />
        <div class="big-content">
            <SideBar />
            <slot></slot>
        </div>
    </div>

    <Footer />
    <AlertBox />
</template>

<script>
import TopHeader from "@/layouts/partials/TopHeader.vue";
import SideBar from "@/layouts/partials/SideBar.vue";
import Footer from "@/layouts/partials/Footer.vue";
import AlertBox from "@/components/AlertBox.vue";

export default {
    name: "DefaultNav",
    components: {
        TopHeader,
        SideBar,
        Footer,
        AlertBox
    },
    created() {
        if (!this.$store.state.authData) {
            window.location.replace('/login');
        }
    },
    mounted() {

    },
}
</script>

<style lang="scss" scoped>
.big-content {
    display: flex;
    flex-direction: row;
    flex: 1;
    min-height: 0;
}

.view {
    height: 100vh;
    display: flex;
    flex-direction: column;

}
</style>