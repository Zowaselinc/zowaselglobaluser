<template>
    <!-- Side Bar -->
    <nav id="sidebarMenu" class="collapse d-md-block">
        <div id="side-menu" class="list-group list-group-flush">
            <a href="#" class="nav-item" aria-current="true">
                <div class="ripple">
                    <img class="img-fluid" src="@/assets/images/vectors/house.svg" alt="house">
                    <span>Home</span>
                </div>
            </a>
            <a href="#" class="nav-item">
                <div class="ripple accordion-header">
                    <img class="img-fluid" src="@/assets/images/vectors/Wallet.svg" alt="wallet">
                    <span>Wallet</span>
                    <img class="arrow-symbol" src="@/assets/images/vectors/arrowSymbol.svg" alt="Arrow-Symbol">
                    <img class="arrow-symbol carretUp" src="@/assets/images/vectors/arrowupsymbol.svg"
                        alt="Arrow-Symbol">
                </div>
                <!-- drop menu -->
                <div class="drop-menu wallet-menu accordion-body">
                    <div>Credit wallet</div>
                    <div>Withdrawal</div>
                </div>
            </a>
            <a href="#" class="nav-item">
                <div class="ripple">
                    <img class="img-fluid" src="@/assets/images/vectors/ChatText.svg"
                        alt="ChatText"><span>Message</span>
                </div>
            </a>
            <a href="#" class="nav-item">
                <div class="ripple accordion-header">
                    <img class="img-fluid" src="@/assets/images/vectors/Storefront.svg"
                        alt="marketplace"><span>Marketplace</span>
                    <img class="arrow-symbol" src="@/assets/images/vectors/arrowSymbol.svg" alt="Arrow-Symbol">
                    <img class="arrow-symbol carretUp" src="@/assets/images/vectors/arrowupsymbol.svg"
                        alt="Arrow-Symbol">
                </div>
                <!-- drop menu -->
                <div class="drop-menu marketplace-menu accordion-body">
                    <div>Input market</div>
                    <div>Crop market</div>
                    <div>Logistics</div>
                </div>
            </a>
            <a href="#" class="nav-item">
                <div class="ripple accordion-header">
                    <img class="img-fluid" src="@/assets/images/vectors/marketPlace.svg"
                        alt="Credit Scoring"><span>Credit
                        Scoring</span>
                    <img class="arrow-symbol" src="@/assets/images/vectors/arrowSymbol.svg" alt="Arrow-Symbol">
                    <img class="arrow-symbol carretUp" src="@/assets/images/vectors/arrowupsymbol.svg"
                        alt="Arrow-Symbol">
                </div>
                <!-- drop menu -->
                <div class="drop-menu scoring-menu accordion-body">
                    <div>Credit score point system</div>
                    <div>credit scor analysis</div>
                    <div>Loans</div>
                    <div>Score Analysis</div>
                </div>

            </a>
            <a href="#" class="nav-item">
                <div class="ripple">
                    <img class="img-fluid" src="@/assets/images/vectors/File.svg" alt="file"><span>Invoice</span>

                </div>
            </a>
            <a href="#" class="nav-item">
                <div class="ripple accordion-header">
                    <img class="img-fluid" src="@/assets/images/vectors/Folder.svg" alt="folder"><span>API and
                        subscription</span>
                </div>
                <!-- drop menu -->
                <div class="drop-menu api-menu  accordion-body">
                    <div>service subscription</div>
                    <div>Renewal manager</div>
                    <div>Traffic & usage stats</div>
                    <div>Changelog notification</div>
                    
                </div>
            </a>
            <a href="#" class="nav-item">
                <div class="ripple accordion-header">
                    <img class="img-fluid" src="@/assets/images/vectors/Data.svg" alt="Data"><span>Data</span>
                    <img class="arrow-symbol " src="@/assets/images/vectors/arrowSymbol.svg" alt="Arrow-Symbol">
                    <img class="arrow-symbol carretUp" src="@/assets/images/vectors/arrowupsymbol.svg"
                        alt="Arrow-Symbol">
                </div>

                <!-- drop menu -->
                <div class="drop-menu data-menu  accordion-body">
                    <div>Farmer Data</div>
                    <div>Market report</div>
                    <div>Crop data stats</div>
                    <div>Seed data</div>

                </div>
            </a>
            <a href="#" class="nav-item">
                <div class="ripple">
                    <img class="img-fluid" src="@/assets/images/vectors/Info.svg" alt="info"><span>Support</span>

                </div>
            </a>
            <a href="#" class="nav-item">
                <div class="ripple">
                    <img class="img-fluid" src="@/assets/images/vectors/GearSixBold.svg"
                        alt="settings"><span>Settings</span>
                </div>

            </a>
            <a href="#" class="nav-item">
                <div class="ripple">
                    <img class="img-fluid" src="@/assets/images/vectors/User.svg" alt="user"><span>My account</span>

                </div>
            </a>
            <a href="#" class="nav-item">
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
        // active = none
        accordion() {
            let accordion = document.getElementsByClassName("accordion-header");
                let accordionIcon = document.getElementsByClassName("accordion-body");
                
    
        }
    },
    // mounted() {
    //     this.accordion();
    // },
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/navigation";
</style>