<template>
    <DispatchSection v-if="(step==1)" :proceed="saveDispatch"/>
    <ReportSection :proceed="saveReceipt" v-if="(step==2)" :goBack="previousStep"/>
</template>

<script>
import DispatchSection from "@/pages/dashboard/marketPlace/checkout/components/DispatchSection.vue";
import ReportSection from "@/pages/dashboard/marketPlace/checkout/components/ReportSection.vue";
import OrderService from "@/services/order";

    export default {
        name:'WaybillDetails',
        props:{
            updateStep : Function,
            order : Object
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
                let vm = this;
                this.receiptData = receipt;
                receipt.items = this.order.products;
                this.dispatchData.items = this.order.products;
                OrderService.saveWaybillDetails({
                    order : this.$route.params.order,
                    waybillDetails : {
                        dispatch_section : this.dispatchData,
                        receipt_section : receipt
                    }
                },(response)=>{
                    vm.$router.push({name : "OrderTracking"});
                });
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
        },
        mounted(){

        }
        
    }
</script>

<style lang="scss" scoped>

</style>