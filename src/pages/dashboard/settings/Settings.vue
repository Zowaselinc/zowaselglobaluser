<template>
  <DefaultNav>
    <div class="big-container">
      <h1>Settings</h1>
      <!-- buttons group -->
      <div class="bntn-group d-flex flex-row">
        <button
          :class="['btn btn-1', activeTab == 'profile' ? 'active-tab' : '']"
          type="button"
          @click="switchTab('profile')"
        >
          My Profile
        </button>
        <button
          :class="[
            'btn btn-1',
            activeTab == 'notification' ? 'active-tab' : '',
          ]"
          type="button"
          @click="switchTab('notification')"
        >
          Notifications Settings
        </button>
        <button
          :class="[
            'btn btn-1',
            activeTab == 'emailSubcription' ? 'active-tab' : '',
          ]"
          type="button"
          @click="switchTab('emailSubcription')"
        >
          Email Subscriptions
        </button>
      </div>
      <!-- Profile -->
      <Profile v-if="activeTab == 'profile'" />
      <!-- notification body -->
      <NotificationSettings v-if="activeTab == 'notification'" />
      <!-- email notification -->
      <EmailSubcription v-if="activeTab == 'emailSubcription'" />
    </div>
  </DefaultNav>
</template>

<script>
import DefaultNav from "@/layouts/DefaultNav.vue";
import Profile from "@/pages/dashboard/settings/Profile.vue";
import NotificationSettings from "@/pages/dashboard/settings/NotificationSettings.vue";
import EmailSubcription from "@/pages/dashboard/settings/EmailSubcription.vue";

export default {
  name: "Settings",
  components: {
    DefaultNav,
    NotificationSettings,
    EmailSubcription,
    Profile,
  },
  data() {
    return {
      activeTab: "notification",
    };
  },
  mounted() {},
  methods: {
    switchTab(tab) {
      this.activeTab = tab;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";

.big-container {
  @include big-container-all;
  overflow-y: scroll;

  h1 {
    @include textStyles(Poppins, 700, 24px, 132%);
    letter-spacing: 0.01em;
    font-feature-settings: "liga" off;
    color: #4a4754;
    padding-block: 38px 51px;
  }
}

.bntn-group {
  gap: 11px;

  button.btn-1 {
    @include textStyles(Poppins, 700, 15.5697px, 112%);
    padding: 11.1212px 33.3637px;
    align-items: center;
    background: #ffffff;
    border: 1.11212px solid #696671;
    border-radius: 55.6062px;
    letter-spacing: 0.02em;
    font-feature-settings: "salt" on, "liga" off;
    color: #696671;
  }

  button.btn-1.active-tab {
    background: #05b050;
    color: #ffffff;
    border: 0;
    padding: 11.1212px 33.3637px;
  }
}
</style>
