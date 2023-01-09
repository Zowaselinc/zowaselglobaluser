<template>
    <DefaultNav>
        <div class="big-container">
            <div class="big-content">
                <!-- header -->
                <h1>New Crop Wanted</h1>
                <!-- Crop Details Components -->
                <CropDetails v-if="NextState == 'crop_details'"></CropDetails>
                <QualityProduct v-if="NextState == 'quality_product'"></QualityProduct>
                <CropSpecification v-if="NextState == 'crop_specification'"></CropSpecification>
                <div id="btn-group" class="btn-group gap-3 my-4">
                    <button type="button" class="btn btn-primary active" aria-current="page"
                        v-if="NextState != 'crop_details'">Back</button>
                    <button type="button" :class="['btn', 'btn-primary']" v-on:click="changeTab('quality_product')"
                        v-if="NextState != 'crop_specification'">Next
                    </button>
                    <button type="button" :class="['btn', 'btn-primary']" v-if="NextState == 'crop_specification'">save
                    </button>
                </div>
            </div>
        </div>
    </DefaultNav>
</template>

<script>
import DefaultNav from "@/layouts/DefaultNav.vue";
import CropDetails from "@/pages/dashboard/marketPlace/components/CropDetails.vue";
import QualityProduct from "@/pages/dashboard/marketPlace/components/QualityProduct.vue";
import CropSpecification from "@/pages/dashboard/marketPlace/components/CropSpecification.vue";

export default {
    name: 'AddNewcrop',
    components: {
        DefaultNav,
        CropDetails,
        QualityProduct,
        CropSpecification,
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
        width: 60.5%;
    }

    @include breakpoint-between(lg, xl) {
        width: 69.5%;
    }

    @include breakpoint-between(xl, xxl) {
        width: 76%;
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
            background: #05B050;
            color: #E6F7EE;


        }
    }
}
</style>