<template>
  <Modal
    title="Success"
    :modal-key="modalKey"
    :custom-styles="customStyles"
    :has-primary-button="hasButton || alert?.primary"
    primary-button-title="Continue"
    :primary-button-action="alert?.onProceed ?? closeModal"
    button-layout-type="2"
  >
    <template v-if="alert" #modal-body>
      <template v-if="alert.type == 'success'">
        <img
          class="success-icon"
          src="@/assets/images/vectors/green-tick.svg"
        />
        <p class="success-text">
          {{ alert.message }}
        </p>
      </template>

      <template v-if="alert.type == 'error'">
        <img class="success-icon" src="@/assets/images/vectors/danger.svg" />
        <p class="success-text">
          {{ alert.message }}
        </p>
      </template>
    </template>
  </Modal>
</template>
<script>
import Modal from "@/components/Modal.vue";
export default {
  name: "AlertBox",
  components: {
    Modal,
  },
  props: {
    hasButton: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      modalKey: "alertBox",
      alert: null,
      customStyles: `
                width:40%;
            `,
    };
  },
  mounted() {
    window.appBus.on("openAlertBox", (data) => {
      this.alert = data;
      this.openModal();
    });
    window.appBus.on("closeAlertBox", () => {
      this.closeModal();
    });
  },
  methods: Modal.methods,
};
</script>
<style scoped>
.success-icon {
  height: 60px;
  margin: 10px auto;
}

.success-text {
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
  text-align: center;
  color: #000000;
}
</style>
