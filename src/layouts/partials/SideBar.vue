<template>
            <!-- Side Bar -->
            <nav id="sidebarMenu" class="collapse d-lg-block">
            <div id="side-menu" class="list-group list-group-flush mx-3 mt-4">
                <a href="#" class="py-2 sidebar-active" aria-current="true">
                    <img class="img-fluid" src="@/assets/images/vectors/house.svg" alt="house"><span>Home</span>
                </a>
                <a href="#" class=" py-3 ripple">
                    <img class="img-fluid" src="@/assets/images/vectors/Wallet.svg" alt="wallet"><span>Wallet</span>
                </a>
                <a href="#" class="py-3 ripple">
                    <img class="img-fluid" src="@/assets/images/vectors/ChatText.svg"
                        alt="ChatText"><span>Message</span>

                </a>
                <a href="#" class="py-3 ripple">
                    <img class="img-fluid" src="@/assets/images/vectors/File.svg" alt="file"><span>Invoice</span>

                </a>
                <a href="#" class=" py-3 ripple">
                    <img class="img-fluid" src="@/assets/images/vectors/Folder.svg" alt="folder"><span>API and
                        subscription</span>

                </a>
                <a href="#" class=" py-3 ripple">
                    <img class="img-fluid" src="@/assets/images/vectors/Info.svg" alt="info"><span>Support</span>

                </a>
                <a href="#" class=" py-3 ripple">
                    <img class="img-fluid" src="@/assets/images/vectors/GearSixBold.svg"
                        alt="settings"><span>Settings</span>

                </a>
                <a href="#" class=" py-3 ripple">
                    <img class="img-fluid" src="@/assets/images/vectors/User.svg" alt="user"><span>My account</span>

                </a>
                <a href="#" class=" py-3 ripple">
                    <img class="img-fluid" src="@/assets/images/vectors/SignOut.svg" alt="SignOut"><span>Logout</span>

                </a>
            </div>
        </nav>
</template>

<script>
    export default {
        name: "SideBar"
    }
</script>

<style lang="scss" scoped>
@import "@/assets/scss/navigation";

</style>