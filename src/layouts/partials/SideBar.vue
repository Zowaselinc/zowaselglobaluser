<template>
    <!-- Side Bar -->
    <nav id="sidebarMenu" class="collapse d-md-block">
        <div id="side-menu" class="list-group list-group-flush">
            <a href="/dashboard/corporate" class="nav-item" aria-current="true">
                <div class="ripple active">
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
                    <div @click='changeDir(" /dashboard/widthdrwal")'>Withdrawal</div>
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
                    <div>Input market</div>
                    <div>Crop market</div>
                    <!-- /dashboard/logistics -->
                    <div @click='changeDir("/dashboard/logistics")'>Logistics</div>
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
                    <div>Credit score point system</div>
                    <div>credit scor analysis</div>
                    <div>Loans</div>
                    <div>Score Analysis</div>
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
                    <img class="img-fluid" src="@/assets/images/vectors/Folder.svg" alt="folder"><span>API & subscription</span>
                    <img class="arrow-symbol carret-down" src="@/assets/images/vectors/arrowSymbol.svg"
                        alt="Arrow-Symbol">
                    <img class="arrow-symbol carretUp" src="@/assets/images/vectors/arrowupsymbol.svg"
                        alt="Arrow-Symbol">
                </div>
                <!-- drop menu -->
                <div class="drop-menu api-menu ">
                    <!-- /dashboard/subscription -->
                    <div @click='changeDir(" /dashboard/subscription")'>service subscription</div>
                    <!-- /dashboard/renewalmanager -->
                    <div>Renewal manager</div>
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
            <a href="javascript:void(0)" class="nav-item">
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
            <a href="javascript:void(0)" class="nav-item">
                <div class="ripple">
                    <img class="img-fluid" src="@/assets/images/vectors/SignOut.svg" alt="SignOut"><span>Logout</span>

                </div>
            </a>
        </div>
    </nav>
</template>

<script>
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
        changeDir(path){
            window.location.assign(path);
        }

    },
    mounted() {
        this.accordion();
    },
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/navigation";
</style>