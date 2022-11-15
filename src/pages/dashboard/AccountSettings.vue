<template>
    <DefaultNav>
        <div class="big-container">
           

         

        </div>
        
        
        
    </DefaultNav>
</template>

<script> 
    import DefaultNav from "@/layouts/DefaultNav.vue";
    export default {
        name: 'AccountSettings',
        components:{
            DefaultNav,
        }
    }
</script>


<style lang="scss" scoped>
.big-container{
    width: 100%;
    height: auto;
    background: #F5F5F5;
    display: flex;
    flex-direction: column;
    padding:1% 5% 2% 5%;
}



</style>