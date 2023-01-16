<template>
  <DispatchSection v-if="step == 1" :proceed="saveDispatch" />
  <ReportSection
    v-if="step == 2"
    :proceed="saveReceipt"
    :go-back="previousStep"
  />
</template>

<script>
import DispatchSection from "@/pages/dashboard/marketPlace/checkout/components/DispatchSection.vue";
import ReportSection from "@/pages/dashboard/marketPlace/checkout/components/ReportSection.vue";
import OrderService from "@/services/order";

export default {
  name: "WaybillDetails",
  components: {
    DispatchSection,
    ReportSection,
  },
  props: {
    updateStep: Function,
    order: Object,
  },
  data() {
    return {
      step: 1,
      dispatchData: {},
      receiptData: {},
    };
  },
  mounted() {},
  methods: {
    saveDispatch(dispatch) {
      this.dispatchData = dispatch;
      this.nextStep();
    },
    saveReceipt(receipt) {
      let vm = this;
      this.receiptData = receipt;
      receipt.items = this.order.products;
      this.dispatchData.items = this.order.products;
      OrderService.saveWaybillDetails(
        {
          order: this.$route.params.order,
          waybillDetails: {
            dispatch_section: this.dispatchData,
            receipt_section: receipt,
          },
        },
        (response) => {
          vm.$router.push({ name: "OrderTracking" });
        }
      );
      this.nextStep();
    },
    nextStep() {
      this.step++;
      this.updateStep(this.step);
    },
    previousStep() {
      this.step--;
      this.updateStep(this.step);
    },
  },
};
</script>

<style lang="scss" scoped></style>
