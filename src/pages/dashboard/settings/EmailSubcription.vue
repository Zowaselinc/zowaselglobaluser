<template>
  <OptionList :options="emailNotificationOptions" />
</template>

<script>
import OptionList from "./components/OptionList.vue";
export default {
  name: "EmailSubcription",
  components: {
    OptionList,
  },

  data() {
    return {
      isSubscribed: true,
      emailNotificationOptions: [],
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.emailNotificationOptions = [
        {
          name: "Market Report Notification",
          subscript: "email",
          type: "button",
          button: {
            title: this.isSubscribed ? "Unsubscribe" : "Subscribe",
            color: this.isSubscribed ? "#C32021" : "",
            action: this.changeSubscription,
          },
          data: { email: "matthewpatel@gmail.com" },
        },
        { name: "Market Place Transaction Notification", type: "switch" },
        { name: "API Change Notification", type: "switch" },
        { name: "Subscription Notification", type: "switch" },
        { name: "Payment Status Notification", type: "switch" },
        { name: "Credit Score Point Notification", type: "switch" },
        { name: "Delivery Notification", type: "switch" },
        { name: "Market Report Notification", type: "switch" },
      ];
    },
    changeSubscription() {
      this.isSubscribed = !this.isSubscribed;
      this.init();
    },
  },
};
</script>

<style lang="scss" scoped></style>
