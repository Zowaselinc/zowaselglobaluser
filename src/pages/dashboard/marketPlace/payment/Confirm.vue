<template>
    <DefaultNav>
        <div class="main-container d-flex position-relative justify-content-center">
            <div
                class="order-confirm d-flex flex-column position-relative container w-50 align-items-center justify-content-center">
                <div class="zowasel-logo position-relative">
                    <img class="img-fluid" src="@/assets/images/logos/zowasel-grey-logo.png" alt="" srcset="">
                </div>
                <div class="text-container w-75 mb-5 text-center">
                    <h1>Order Confirmed</h1>
                    <p class="text-justify">You have successfully registered with Zowasel as a {{type}}. Proceed to your
                        dashboard to set up account.
                    </p>
                </div>
                <div class="d-grid w-75">
                    <a href="/dashboard/marketplace/:market" :class="['btn', 'btn-goto-marketplace', 'mb-3 ']"
                        type="button">Go to
                        market place
                    </a>
                    <a href="/marketplace/ordertracking" :class="['btn', 'btn-track', 'mt-2 mb-4']" type="button">Track
                        order
                    </a>
                    <!-- for buyers view -->
                    <a href="/marketplace/ordertracking" :class="['btn', 'btn-track', 'mt-2 mb-1']" type="button">Print
                        reciept
                    </a>
                </div>
            </div>
            <div class="dot bottom position-absolute">
                <img src="@/assets/images/vectors/dot.svg">
            </div>
            <div class="dot top position-absolute">
                <img src="@/assets/images/vectors/dot.svg">
            </div>
        </div>
       
    </DefaultNav>
</template>

<script>
import DefaultNav from "@/layouts/DefaultNav.vue";

export default {
    name:  "Confirm",
    data() {
        return {
            userData: this.$store.state.user
        }
    },
    components: {
        DefaultNav,
       
    },
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";

#dot-group {
    width: 40px;
    height: 50px;
    background: red;
}

.main-container {
    background-image: url("@/assets/images/backgrounds/userViews.png");
    width: 100%;
    height: 100vh;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;

    &::after {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        content: "";
        background: #FFFFFF;
        opacity: 0.95;

    }

    >div {
        z-index: 99;
    }

    .bottom {
        bottom: 100px;
        left: -25px;
    }

    .top {
        top: 100px;
        right: -25px;
    }
}

.zowasel-logo {
    width: 236px;
    bottom: 60px;

}

.order-confirm {
    .text-container {
        h1 {
            text-transform: capitalize;
            @include textStyles(Poppins, 700, 30px, 76px);
            color: #1D1D1D;

        }

        p {
            color: rgba(45, 55, 72, 0.6);
            @include textStyles(Poppins, 400, 15.5px, 22px);

        }
    }

}

// button group
.d-grid {
    a {
        padding: 10px;
        border-radius: 5px;
        @include textStyles(Inter, 600, 16px, 19px);
    }

    a.btn-goto-marketplace {
        background: #05B050;
        color: #FFFFFF;

    }

    a.btn-track {
        border: 1px solid #040308;
        color: #040308;
    }
}
</style>






