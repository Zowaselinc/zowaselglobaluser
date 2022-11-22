<template>
    <OptionList :options="notificationOptions"/>
</template>

<script>
import OptionList from './components/OptionList.vue';
export default {
    name: "NotificationSettings",
    components : {
        OptionList
    },
    data(){
        return {
            notificationOptions : [
                { name : "Market Report Notification" , type : "switch" },
            ]
        };
    },
    methods: {
        
    },
    mounted() {
    }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";
</style>