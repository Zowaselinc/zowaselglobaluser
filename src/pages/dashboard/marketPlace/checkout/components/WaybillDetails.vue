<template>
    <DispatchSection v-if="(step==1)" :proceed="nextStep"/>
    <ReportSection v-if="(step==2)" :goBack="previousStep"/>
</template>

<script>
import DispatchSection from "@/pages/marketPlace/checkout/components/DispatchSection.vue";
import ReportSection from "@/pages/marketPlace/checkout/components/ReportSection.vue";

    export default {
        name:'WaybillDetails',
        props:{
            updateStep : Function
        },
        components: {
            DispatchSection,
            ReportSection
        },
        data(){
            return {
                step : 1
            };
        },
        methods: {
            nextStep(){
                this.step++;
                this.updateStep(this.step);
            },
            previousStep(){
                this.step--;
                this.updateStep(this.step);
            }
        }
        
    }
</script>

<style lang="scss" scoped>

</style>