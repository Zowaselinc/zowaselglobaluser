<template>
    <DispatchSection v-if="(step==1)" :proceed="saveDispatch"/>
    <ReportSection :proceed="saveReceipt" v-if="(step==2)" :goBack="previousStep"/>
</template>

<script>
import DispatchSection from "@/pages/dashboard/marketPlace/checkout/components/DispatchSection.vue";
import ReportSection from "@/pages/dashboard/marketPlace/checkout/components/ReportSection.vue";

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
                step : 1,
                dispatchData : {},
                receiptData : {}
            };
        },
        methods: {
            saveDispatch(dispatch){
                this.dispatchData = dispatch;
                this.nextStep();
            },
            saveReceipt(receipt){
                this.receiptData = receipt;
                this.nextStep();
            },
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