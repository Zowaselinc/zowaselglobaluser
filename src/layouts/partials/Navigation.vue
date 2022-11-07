<template>
    <!-- main navigation -->
    <header>
        <!-- top navigation -->
        <nav class="navbar bg-white">
            <div id="nav-container" class="container-fluid">
                <a id="zowasel-nav-brand" class="navbar-brand" href="#">
                    <div class="logo-background"></div>
                </a>
                <div class="search-bar d-flex flex-row justify-content-center align-items-center">
                    <div id="search-icon">
                        <img class=" img-fluid" src="@/assets/images/vectors/search.svg">
                    </div>
                    <input type="search" id="seachID" class="form-control" aria-describedby="passwordHelpBlock"
                        placeholder="Type to search">
                </div>

                <div class="navbar-icons d-flex flex-row justify-content-center align-items-center">
                    <div class="bell">
                        <img class="img-fluid" src="@/assets/images/vectors/Bell.svg" alt="bell">
                    </div>
                    <div class="gear">
                        <img class="img-fluid" src="@/assets/images/vectors/GearSix.svg" alt="gear">
                    </div>
                    <div>
                        <img class="img-fluid" src="@/assets/images/vectors/Avater.svg" alt="Avater">
                    </div>

                </div>
            </div>
        </nav>
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
                        <img class="img-fluid" src="@/assets/images/vectors/ChatText.svg" alt="ChatText"><span>Message</span>

                    </a>
                    <a href="#" class="py-3 ripple">
                        <img class="img-fluid" src="@/assets/images/vectors/File.svg" alt="file"><span>Invoice</span>

                    </a>
                    <a href="#" class=" py-3 ripple">
                        <img class="img-fluid" src="@/assets/images/vectors/Folder.svg" alt="folder"><span>API and subscription</span>

                    </a>
                    <a href="#" class=" py-3 ripple">
                        <img class="img-fluid" src="@/assets/images/vectors/Info.svg" alt="info"><span>Support</span>

                    </a>
                    <a href="#" class=" py-3 ripple">
                        <img class="img-fluid" src="@/assets/images/vectors/GearSixBold.svg" alt="settings"><span>Settings</span>

                    </a>
                    <a href="#" class=" py-3 ripple">
                        <img class="img-fluid" src="@/assets/images/vectors/User.svg" alt="user"><span>My account</span>

                    </a>
                    <a href="#" class=" py-3 ripple">
                        <img class="img-fluid" src="@/assets/images/vectors/SignOut.svg" alt="SignOut"><span>Logout</span>

                    </a>
                </div>
        </nav>
    </header>
</template>

<script>
export default {
    name: "Navigation"
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";

// top navigation
nav {
    width: 100%;
    height: 83px;
    padding: 19px 100px 19px 50px;

    .logo-background {
        width: 172.84px;
        height: 23.66px;
        background-image: url("@/assets/images/logos/zowasel-grey-logo.png");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }

    #nav-container {
        a#zowasel-nav-brand {
            margin-right: 8.1%;
        }

        .search-bar {
            flex: 1;
            border: 1px solid #EDEDEE;
            border-radius: 4px;
            background: #FFFFFF;
            padding: 5px 16px;
            gap: 10px;

            #search-icon {
                width: 18px;
            }

            input#seachID {
                border: none;
                box-shadow: 0 0;

                &::placeholder {
                    @include textStyles(Poppins, 500, 12px, 20px);
                    color: #96949C;
                }
            }
        }

        .navbar-icons {
            margin-left: 8.1%;
            gap: 40px;
        }
    }
}

// Side Bar
#sidebarMenu{
    padding: 60px 16px 4px;
    position: fixed;
    top: 86px !important;
    inset: 0;
    height: 801px;
    width: 18%;
    z-index: 600;
    color: #FFFFFF;
    background: linear-gradient(180deg, #29333F 0%, #1C2131 100%);

    #side-menu {
        a span {
            margin-left: 20.28px;
            @include textStyles("Maven Pro", 400, 14px, 116%);
            
        }
    }

    .sidebar-active{
        background: #05B050;
        border-radius: 4px;
        padding-inline: 16px;
    }
}


@media (max-width: 991.98px) {
    .sidebar {
        width: 100%;
    }
}

.sidebar .active {
    border-radius: 5px;
    // box-shadow: 0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%);
}

</style>