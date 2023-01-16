<template>
  <OptionList :options="notificationOptions" />
</template>

<script>
import OptionList from "./components/OptionList.vue";
export default {
  name: "NotificationSettings",
  components: {
    OptionList,
  },
  data() {
    return {
      notificationOptions: [
        { name: "Market Report Notification", type: "switch" },
        { name: "Market Place Transaction Notification", type: "switch" },
        { name: "API Change Notification", type: "switch" },
        { name: "Subscription Notification", type: "switch" },
        { name: "Payment Status Notification", type: "switch" },
        { name: "Credit Score Point Notification", type: "switch" },
        { name: "Delivery Notification", type: "switch" },
        { name: "Market Report Notification", type: "switch" },
      ],
    };
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";
</style>
