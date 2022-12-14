<template>
    <!-- Side Bar -->
    <nav id="sidebarMenu" class="collapse d-md-block">
        <div id="side-menu" class="list-group list-group-flush">
            <a href="/:type/register" class="nav-item" aria-current="true">
                <div id="home" class="ripple actives">
                    <img class="img-fluid" src="@/assets/images/vectors/house.svg" alt="house">
                    <span>Home</span>
                </div>
            </a>
            <a href="javascript:void(0)" class="nav-item">
                <div class="ripple accordion-header">
                    <img class="img-fluid" src="@/assets/images/vectors/Wallet.svg" alt="wallet">
                    <span>Wallet</span>
                    <img class="arrow-symbol carret-down" src="@/assets/images/vectors/arrowSymbol.svg"
                        alt="Arrow-Symbol">
                    <img class="arrow-symbol carretUp" src="@/assets/images/vectors/arrowupsymbol.svg"
                        alt="Arrow-Symbol">
                </div>
                <!-- drop menu -->
                <div class="drop-menu wallet-menu">
                    <!-- /dashboard/creditwallet -->
                    <div @click='changeDir("/dashboard/creditwallet")'>Credit wallet</div>
                    <!-- /dashboard/widthdrwal -->
                    <div @click='changeDir(" /dashboard/withdrawal")'>Withdrawal</div>
                </div>
            </a>
            <a href="/dashboard/messages" class="nav-item">
                <div class="ripple">
                    <img class="img-fluid" src="@/assets/images/vectors/ChatText.svg"
                        alt="ChatText"><span>Message</span>
                </div>
            </a>
            <a href="/dashboard/marketplace" class="nav-item">
                <div class="ripple">
                    <img class="img-fluid" src="@/assets/images/vectors/Storefront.svg"
                        alt="ChatText"><span>Marketplace</span>
                </div>
            </a>
            <a href="/dashboard/negotiations" class="nav-item">
                <div class="ripple">
                    <img class="img-fluid" src="@/assets/images/vectors/ChatText.svg"
                        alt="ChatText"><span>Negotiations</span>
                </div>
            </a>
            <a href="javascript:void(0)" class="nav-item">
                <div class="ripple accordion-header">
                    <img class=" side-bar-icon img-fluid" src="@/assets/images/vectors/marketPlace.svg"
                        alt="Credit Scoring"><span>Credit
                        Scoring</span>
                    <img class="arrow-symbol carret-down" src="@/assets/images/vectors/arrowSymbol.svg"
                        alt="Arrow-Symbol">
                    <img class="arrow-symbol carretUp" src="@/assets/images/vectors/arrowupsymbol.svg"
                        alt="Arrow-Symbol">
                </div>
                <!-- drop menu -->
                <div class="drop-menu scoring-menu">
                    <div @click='changeDir(" /dashboard/creditscoringpointsystem")'>Credit score point system</div>
                    <div @click='changeDir(" /dashboard/creditscoreanalysis")'>credit score analysis</div>
                    <div @click='changeDir(" /dashboard/loans")'>Loans</div>
                    <div @click='changeDir(" /dashboard/scoreanalysis")'>Score Analysis</div>
                </div>

            </a>
            <!-- no page available -->
            <a href="javascript:void(0)" class="nav-item">
                <div class="ripple">
                    <img class="img-fluid" src="@/assets/images/vectors/File.svg" alt="file"><span>Invoice</span>

                </div>
            </a>
            <a href="javascript:void(0)" class="nav-item">
                <div class="ripple accordion-header">
                    <img class="img-fluid" src="@/assets/images/vectors/Folder.svg" alt="folder"><span>API &
                        subscription</span>
                    <img class="arrow-symbol carret-down" src="@/assets/images/vectors/arrowSymbol.svg"
                        alt="Arrow-Symbol">
                    <img class="arrow-symbol carretUp" src="@/assets/images/vectors/arrowupsymbol.svg"
                        alt="Arrow-Symbol">
                </div>
                <!-- drop menu -->
                <div class="drop-menu api-menu ">
                    <div @click='changeDir(" /dashboard/subscription")'>service subscription</div>
                    <div @click='changeDir("/dashboard/renewalmanager")'>Renewal manager</div>
                    <div>Traffic & usage stats</div>
                    <div>Changelog notification</div>

                </div>
            </a>
            <a href="javascript:void(0)" class="nav-item">
                <div class="ripple accordion-header">
                    <img class="img-fluid" src="@/assets/images/vectors/Data.svg" alt="Data"><span>Data</span>
                    <img class="arrow-symbol carret-down" src="@/assets/images/vectors/arrowSymbol.svg"
                        alt="Arrow-Symbol">
                    <img class="arrow-symbol carretUp" src="@/assets/images/vectors/arrowupsymbol.svg"
                        alt="Arrow-Symbol">
                </div>

                <!-- drop menu -->
                <div class="drop-menu data-menu ">
                    <div>Farmer Data</div>
                    <div>Market report</div>
                    <div>Crop data stats</div>
                    <div>Seed data</div>

                </div>
            </a>
            <a href="javascript:void(0)" class="nav-item">
                <div class="ripple">
                    <img class="img-fluid" src="@/assets/images/vectors/Info.svg" alt="info"><span>Support</span>

                </div>
            </a>
            <a href="/dashboard/settings" class="nav-item">
                <div class="ripple">
                    <img class="img-fluid" src="@/assets/images/vectors/GearSixBold.svg"
                        alt="settings"><span>Settings</span>
                </div>

            </a>
            <a href="javascript:void(0)" class="nav-item">
                <div class="ripple">
                    <img class="img-fluid" src="@/assets/images/vectors/User.svg" alt="user"><span>My account</span>

                </div>
            </a>
            <a href="javascript:void(0)" class="nav-item" @click="logOut()">
                <div class="ripple">
                    <img class="img-fluid" src="@/assets/images/vectors/SignOut.svg" alt="SignOut"><span>Logout</span>

                </div>
            </a>
        </div>
    </nav>
</template>

<script>
import axios from 'axios';
export default {
    name: "SideBar",
    methods: {

        accordion() {
            let accordion = document.getElementsByClassName("accordion-header");
            for (let index = 0; index < accordion.length; index++) {
                const element = accordion[index];
                element.addEventListener("click", () => {
                    element.parentElement.classList.toggle('active');
                });

            }
        },
        changeDir(path) {
            window.location.assign(path);
        },
        logOut() {
            if (this.$store.state.authData.token) {
                this.$store.dispatch('setAuth',null);
                this.$router.push('/login');
            }
        }
    },
    mounted() {
        this.accordion();
    },
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/navigation";
#sidebarMenu {
  overflow-y: scroll;
  }
</style>