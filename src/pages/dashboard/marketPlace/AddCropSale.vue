<template>
    <DefaultNav>
        <div class="big-container">
            <div class="big-content">
                <!-- header -->
                <h1>New Crop For Sale</h1>
                <!-- Crop Details Components -->
                <SellerCropDetails v-if="NextState == 'crop_details' || step == 1"></SellerCropDetails>
                <SellerQualityProduct v-if="NextState == 'quality_product' && step == 2"></SellerQualityProduct>
                <SellerSpecification v-if="step == 3"></SellerSpecification>
                <div id="btn-group" class="btn-group gap-3 my-4">
                    <button type="button" class="btn btn-primary active" aria-current="page" v-if="step != 1"
                        v-on:click="previouStep()">Back</button>
                    <button type="button" :id="['next_btn']" :class="['btn', 'btn-primary']"
                        v-on:click="changeTab('quality_product')" v-if="step != 3">Next
                    </button>
                    <button type="button" :class="['btn', 'btn-primary']" v-if="step == 3">save
                    </button>
                </div>
            </div>
        </div>
    </DefaultNav>
</template>

<script>
import DefaultNav from "@/layouts/DefaultNav.vue";
import SellerCropDetails from "@/pages/dashboard/marketPlace/components/SellerCropDetails.vue";
import SellerQualityProduct from "@/pages/dashboard/marketPlace/components/SellerQualityProduct.vue";
import SellerSpecification from "@/pages/dashboard/marketPlace/components/SellerSpecification.vue";

export default {
    name: 'AddCropSale',
    components: {
        DefaultNav,
        SellerCropDetails,
        SellerQualityProduct,
        SellerSpecification,
    },
    data() {
        return {
            NextState: 'crop_details',
            step: 1,
        }
    },
    methods: {
        changeTab(tab) {
            this.NextState = tab;
            this.step++;
        },

        previouStep() {
            this.step--;
        },
    }
}
</script>


<style lang="scss" scoped>
@import "@/assets/scss/main.scss";

.big-container {
    width: 100%;
    height: 100%;
    background: #F5F5F5;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;


    @include breakpoint-between(md, lg) {
        min-width: 60.5%;
    }

    @include breakpoint-between(lg, xl) {
        min-width: 69.5%;
    }

    @include breakpoint-between(xl, xxl) {
        min-width: 76%;
    }
}

.big-content {
    padding: 0px 4rem;
    background: #F5F5F5;

    h1 {
        @include textStyles(Poppins, 700, 24px, 120%);
        color: #4A4754;
        text-align: left;
        margin-block: 3rem;
    }
}



#btn-group {
    float: right;

    #next_btn {
        background: #05B050;
        color: #E6F7EE;
    }

    button {
        background: #FFFFFF;
        border: 1px solid #EDEDEE;
        box-shadow: 0px 2px 4px rgba(44, 39, 56, 0.0001), 0px 4px 8px rgba(44, 39, 56, 0.08);
        border-radius: 4px;
        text-align: center;
        color: #6ED19A;
        padding-inline: 3rem;
        @include textStyles('Maven Pro', 700, 16px, 24px);

        ~button {
            @extend #next_btn;
        }
    }

}
</style>