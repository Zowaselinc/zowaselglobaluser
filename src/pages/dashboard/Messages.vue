<template>
    <TopHeader>              
    </TopHeader>
    <div class="big-container"></div>
</template>

<script> 
    import TopHeader from "@/layouts/partials/TopHeader.vue";
    export default {
        name: 'Messages',
        components:{
            TopHeader,
        }
    }
</script>


<style lang="scss" scoped>
.big-container{
    width: 100%;
    height: auto;
    background: #F5F5F5;
    display: flex;
    flex-direction: row;
    padding:1% 5% 2% 5%;
}



    


</style>