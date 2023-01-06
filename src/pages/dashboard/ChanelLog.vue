<template>
    <DefaultNav>
        <div class="big-container">
            <h1>Changelog Notifications</h1>
            <div class="big-white-container">
                <div class="inner-white-container container">
                    <!-- change log containers -->
                    <div class="changelog d-flex flex-row">
                        <!-- version info -->
                        <div class="version">
                            Version 2.6
                        </div>
                        <!-- notification -->
                        <div class="change-log-notification d-flex flex-column">
                            <div class="change-log-notification-headers d-flex flex-row position-relative">
                                <!-- headers -->
                                <h3 class="api-update">Api Updated To allow blah</h3>
                                <h3 class="version-date position-absolute">23/NOV/2022</h3>
                            </div>
                            <!-- notication body -->
                            <div class="change-log-notification-body">
                                <ul>
                                    <li>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur.
                                    </li>
                                    <li>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
                                        modi temporibus! Numquam ipsa assumenda illum.
                                    </li>
                                    <li>
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla fugiat, deleniti
                                        facilis ipsam nisi,
                                        iste ea reprehenderit, odit adipisci et quo quidem magnam possimus doloribus.
                                    </li>
                                    <li>
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                     <!-- change log containers -->
                     <div class="changelog change-log-spacing d-flex flex-row">
                        <!-- version info -->
                        <div class="version">
                            Version 2.5
                        </div>
                        <!-- notification -->
                        <div class="change-log-notification d-flex flex-column">
                            <div class="change-log-notification-headers d-flex flex-row position-relative">
                                <!-- headers -->
                                <h3 class="api-update">Api Updated To allow blah</h3>
                                <h3 class="version-date position-absolute">22/NOV/2022</h3>
                            </div>
                            <!-- notication body -->
                            <div class="change-log-notification-body">
                                <ul>
                                    <li>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur.
                                    </li>
                                    <li>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
                                        modi temporibus! Numquam ipsa assumenda illum.
                                    </li>
                                    <li>
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla fugiat, deleniti
                                        facilis ipsam nisi,
                                        iste ea reprehenderit, odit adipisci et quo quidem magnam possimus doloribus.
                                    </li>
                                    <li>
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                     <!-- change log containers -->
                     <div id="change-log-3" class="changelog change-log-spacing  d-flex flex-row">
                        <!-- version info -->
                        <div class="version">
                            Version 2.4
                        </div>
                        <!-- notification -->
                        <div class="change-log-notification d-flex flex-column">
                            <div class="change-log-notification-headers d-flex flex-row position-relative">
                                <!-- headers -->
                                <h3 class="api-update">Api Updated To allow blah</h3>
                                <h3 class="version-date position-absolute">19/NOV/2022</h3>
                            </div>
                            <!-- notication body -->
                            <div class="change-log-notification-body">
                                <ul>
                                    <li>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur.
                                    </li>
                                    <li>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
                                        modi temporibus! Numquam ipsa assumenda illum.
                                    </li>
                                    <li>
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla fugiat, deleniti
                                        facilis ipsam nisi,
                                        iste ea reprehenderit, odit adipisci et quo quidem magnam possimus doloribus.
                                    </li>
                                    <li>
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam.
                                    </li>
                                </ul>
                            </div>
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
    name: 'ChanelLog',
    components: {
        DefaultNav,
    }
}
</script>


<style lang="scss" scoped>
@import "@/assets/scss/main.scss";

.big-container {
    width: 100%;
    height: auto;
    background: #F5F5F5;
    display: flex;
    flex-direction: column;
    padding: 2% 5% 2% 3%;
    overflow-y: scroll;

    @include breakpoint-between(md, lg) {
        width: 60.5%;
    }

    @include breakpoint-between(lg, xl) {
        width: 69.5%;
    }

    @include breakpoint-between(xl, xxl) {
        width: 76%;
    }

    h1 {
        @include textStyles(Poppins, 700, 24px, 132%);
        letter-spacing: 0.01em;
        font-feature-settings: 'liga' off;
        color: #4A4754;
    }
}

.big-white-container {
    background: #FFFFFF;
    border-radius: 4px;
    margin-top: 42px;
    width: 100%;
}

.inner-white-container {
    padding: 34px 45px 31px 27px;
}

.change-log-spacing {
    margin-top: 2.5rem;
}
#change-log-3{
    border-bottom: unset;
}
.changelog {
    gap: 38.5px;
    border-bottom: 1px solid  #cccccc;


    .version {
        @include textStyles(Poppins, 700, 18px, 135%);
        letter-spacing: 0.01em;
        color: #3C3C3C;
        width: 30%;
    }

    .change-log-notification {
        gap: 18px;
        .change-log-notification-headers {
            >h3 {
                @extend .version;
                width: inherit;;
                color: #00863B;

                &:last-child {
                    right: 0;
                }
            }
        }

        .change-log-notification-body ul {
            margin-left: -15px;
            margin-bottom: 2.5rem;
            li {
                @include textStyles('Maven Pro', 400, 18px, 135%);
                letter-spacing: 0.01em;
                font-feature-settings: 'liga' off;
                color: #34323B;
                mix-blend-mode: normal;
                opacity: 0.86;
            }
        }
    }
}
</style>