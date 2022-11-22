<template>
    <DefaultNav>
        <div class="big-container">
            <h1>Settings</h1>
            <!-- buttons group -->
            <div class="bntn-group d-flex flex-row">
                <button type="button" class="btn btn-1">My Profile</button>
                <button id="notification-settings" type="button" class="btn btn-1">Notifications Settings</button>
                <button id="email-settings" type="button" class="btn btn-1">Email Subscriptions</button>
                <button id="my-profile" type="button" class="btn btn-1">My Profile</button>
            </div>
            <!-- notification body -->
            <div class="notification-body d-flex flex-column">
                <!-- first item -->
                <div class="notification-main d-flex flex-column">
                    <div class="notification-setting d-flex flex-row">
                        <div class="notification-item">Market Report Notification</div>
                        <div
                            class="setting-btn d-flex flex-row justify-content-center align-items-center position-relative">
                            <span class="off position-absolute"></span>
                            <span class="on position-absolute"></span>
                        </div>
                    </div>
                    <hr>
                </div>
                <!-- item -->
                <div class="notification-main d-flex flex-column">
                    <div class="notification-setting d-flex flex-row">
                        <div class="notification-item">Market Place Transaction Notification</div>
                        <div
                            class="setting-btn d-flex flex-row justify-content-center align-items-center position-relative active-setting">
                            <span class="off position-absolute"></span>
                            <span class="on position-absolute"></span>
                        </div>
                    </div>
                    <hr>
                </div>
                <!-- item -->
                <div class="notification-main d-flex flex-column">
                    <div class="notification-setting d-flex flex-row">
                        <div class="notification-item">API Change Notification</div>
                        <div
                            class="setting-btn d-flex flex-row justify-content-center align-items-center position-relative">
                            <span class="off position-absolute"></span>
                            <span class="on position-absolute"></span>
                        </div>
                    </div>
                    <hr>
                </div>
                <!-- item -->
                <div class="notification-main d-flex flex-column">
                    <div class="notification-setting d-flex flex-row">
                        <div class="notification-item">Subscription Notification</div>
                        <div
                            class="setting-btn d-flex flex-row justify-content-center align-items-center position-relative active-setting">
                            <span class="off position-absolute"></span>
                            <span class="on position-absolute"></span>
                        </div>
                    </div>
                    <hr>
                </div>
                <!-- item -->
                <div class="notification-main d-flex flex-column">
                    <div class="notification-setting d-flex flex-row">
                        <div class="notification-item">Payment Status Notification</div>
                        <div
                            class="setting-btn d-flex flex-row justify-content-center align-items-center position-relative">
                            <span class="off position-absolute"></span>
                            <span class="on position-absolute"></span>
                        </div>
                    </div>
                    <hr>
                </div>
                <!-- item -->
                <div class="notification-main d-flex flex-column">
                    <div class="notification-setting d-flex flex-row">
                        <div class="notification-item">Credit Score Point Notification</div>
                        <div
                            class="setting-btn d-flex flex-row justify-content-center align-items-center position-relative">
                            <span class="off position-absolute"></span>
                            <span class="on position-absolute"></span>
                        </div>
                    </div>
                    <hr>
                </div>
                <!-- item -->
                <div class="notification-main d-flex flex-column">
                    <div class="notification-setting d-flex flex-row">
                        <div class="notification-item">Delivery Notification</div>
                        <div
                            class="setting-btn d-flex flex-row justify-content-center align-items-center position-relative">
                            <span class="off position-absolute"></span>
                            <span class="on position-absolute"></span>
                        </div>
                    </div>
                    <hr>
                </div>
                <!-- item -->
                <div class="notification-main d-flex flex-column">
                    <div class="notification-setting d-flex flex-row">
                        <div class="notification-item">Market Report Notification</div>
                        <div
                            class="setting-btn d-flex flex-row justify-content-center align-items-center position-relative">
                            <span class="off position-absolute"></span>
                            <span class="on position-absolute"></span>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </DefaultNav>
</template>

<script>
import DefaultNav from "@/layouts/DefaultNav.vue";
export default {
    name: "NotificationSettings",
    components: {
        DefaultNav
    },
    methods: {
        switches(){
            let notificationSwitch = document.getElementsByClassName("setting-btn");
            for(let index = 0; index <notificationSwitch.length; index++){
                const element = notificationSwitch[index];
                element.addEventListener("click", () => {
                    element.classList.toggle("active-setting");
                })
            }
        },
        
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

.notification-body {
    padding-left: 21px;
    background: #FFFFFF;
    margin-top: 33px;
    padding-bottom: 42px;
}

.notification-main {
    padding: 21px 24px 0px;

    hr {
        width: 100%;
        margin-bottom: 0px;
        margin-top: 42px;
    }

    hr:not([size]) {
        height: 2px;
    }
}

.notification-setting {
    width: 100%;
    justify-content: space-between;

    .notification-item {
        @include textStyles(Poppins, 400, 24px, 28px);
        color: #000022;
    }

    .setting-btn {
        width: 54.5px;
        height: 28px;
        background: #05B050;
        box-shadow: 0px 4px 8px rgba(44, 39, 56, 0.04);
        border-radius: 15px;
        transition: all .35s;
    }

    %switch {
        width: 24px;
        height: 24px;
        border-radius: 50%;
        background: #FFFFFF;
        border: 1px solid #EDEDEE;
        box-shadow: 0px 4px 8px rgba(44, 39, 56, 0.2);
    }

    .active-setting {
        background: #FFFFFF;
        border: 1px solid #EDEDEE;
        box-shadow: 0px 4px 8px rgba(44, 39, 56, 0.08);
        border-radius: 15px;
        transition: all .3s;

        span.off {
            display: block !important;
    
        }


        span.on {
            display: none !important;
        }
    }

    span.off {
        @extend %switch;
        left: 5px;
        display: none;
    }

    span.on {
        @extend %switch;
        right: 5px !important;
    }
}
</style>