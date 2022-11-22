<template>
    <DefaultNav>
        <div class="big-container">
            <h1>Settings</h1>
            <!-- buttons group -->
            <div class="bntn-group d-flex flex-row">
                <button type="button" class="btn btn-1">My Profile</button>
                <button id="notification-settings" type="button" @click="switchTab('notification')" class="btn btn-1">Notifications Settings</button>
                <button id="email-settings" type="button" class="btn btn-1">Email Subscriptions</button>
                <button id="my-profile" type="button" class="btn btn-1">My Profile</button>
            </div>
            <!-- notification body -->

            <NotificationSettings v-if="activeTab == 'notification'"/>

        </div>
    </DefaultNav>
</template>

<script>
import DefaultNav from "@/layouts/DefaultNav.vue";
import NotificationSettings from "@/pages/dashboard/settings/NotificationSettings.vue";

export default {
    name: "Settings",
    components: {
        DefaultNav,
        NotificationSettings
    },
    data(){
        return {
            activeTab : "notification"
        };
    },
    methods: {
        switchTab(tab){
            this.activeTab = tab;
        }
    },
    mounted() {
            this.switches();
        }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";

.big-container {
    @include big-container-all;

    h1 {
        @include textStyles(Poppins, 700, 24px, 132%);
        letter-spacing: 0.01em;
        font-feature-settings: 'liga' off;
        color: #4A4754;
    }
}

.bntn-group {
    gap: 11px;

    button.btn-1 {
        @include textStyles(Poppins, 700, 15.5697px, 112%);
        padding: 11.1212px 33.3637px;
        align-items: center;
        background: #FFFFFF;
        border: 1.11212px solid #696671;
        border-radius: 55.6062px;
        letter-spacing: 0.02em;
        font-feature-settings: 'salt' on, 'liga' off;
        color: #696671;
    }

    #notification-settings {
        padding: 11.1212px 33.3637px;
        background: #05B050;
        color: #FFFFFF;
        border: 0;

    }

    #email-settings {
        padding: 11.1212px 33.3637px;
        background: #FFFFFF;
    }

    #my-profile {
        padding: 11.1212px 33.3637px;
        background: #FFFFFF;
    }
}

</style>