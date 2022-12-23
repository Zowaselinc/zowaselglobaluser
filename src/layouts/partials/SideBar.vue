<template>
    <!-- Side Bar -->
    <nav id="sidebarMenu" class="collapse d-md-block collapsed-menu">
        <div id="side-menu" class="list-group list-group-flush">
            <a href="/dashboard" class="nav-item" aria-current="true">
                <div id="home" class="ripple actives">
                    <img class="img-fluid" src="@/assets/images/vectors/house.svg" alt="house">
                    <span>Home</span>
                </div>
            </a>
             
            <a href="/dashboard/wallet" class="nav-item">
                <div class="ripple">
                    <img class="img-fluid" src="@/assets/images/vectors/Wallet.svg" alt="wallet">
                    <span>Wallet</span>
                </div>
            </a>
            <a href="/dashboard/messages" class="nav-item">
                <div class="ripple">
                    <img class="img-fluid" src="@/assets/images/vectors/ChatText.svg"
                        alt="ChatText"><span>Message</span>
                </div>
            </a>
            <a href="javascript:void(0)" class="nav-item">
                <div class="ripple accordion-header">
                    <img class="img-fluid" src="@/assets/images/vectors/Storefront.svg"
                        alt="marketplace"><span>Marketplace</span>
                    <img class="arrow-symbol carret-down" src="@/assets/images/vectors/arrowSymbol.svg"
                        alt="Arrow-Symbol">
                    <img class="arrow-symbol carretUp" src="@/assets/images/vectors/arrowupsymbol.svg"
                        alt="Arrow-Symbol">
                </div>
                <!-- drop menu -->
                <div class="drop-menu marketplace-menu">
                    <template v-if="userData.user.type == 'corporate'">
                        <div @click='changeDir("/dashboard/marketplace/cropsale")'>Crops for Sale</div>
                        <div @click='changeDir("/dashboard/marketplace/cropauction")'>Crops for auction</div>
                    </template>
                    <template v-if="userData.user.type == 'merchant'">
                        <div @click='changeDir("/dashboard/marketplace/cropwanted")'>Crops Wanted</div>
                        <div @click='changeDir("/dashboard/marketplace/inputs")'>Input Market</div>
                    </template>
                    <!-- /dashboard/logistics -->
                    <!-- <div @click='changeDir("/dashboard/logistics")'>Logistics</div> -->
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
                    <div @click='changeDir(" /dashboard/loan")'>Loans</div>
                    <div @click='changeDir(" /dashboard/scoreanalysis")'>Score Analysis</div>
                </div>

            </a>
            <!-- no page available -->
            <a href="/dashboard/invoice" class="nav-item">
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
            <a href="/dashboard/tickets" class="nav-item">
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
    data(){
        return {
            userData : this.$store.state.user
        };
    },
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
// .collapsed-menu{
//     width: 8% !important;
//     #side-menu {
//         align-items: center;
//         .ripple{
//             padding: 5px 20px;
//             span, .carret-down{
//                 display: none;
//             }
//         }
//     }
// }

</style>