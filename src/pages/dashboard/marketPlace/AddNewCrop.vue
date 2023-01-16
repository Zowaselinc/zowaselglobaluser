<template>
    <DefaultNav>
        <div class="big-container">
            <div class="big-content">
                <!-- header -->
                <h1>New Crop Wanted</h1>
                <!-- Crop Details Components -->
                <CropDetails ref="CD" v-if="step == 1"></CropDetails>
                <QualityProduct ref="QP" v-if="step == 2"></QualityProduct>
                <CropSpecification ref="CS" v-if="step == 3"></CropSpecification>
                <div id="btn-group" class="btn-group gap-3 my-4">
                    <button type="button" class="btn btn-primary active" aria-current="page" v-if="step != 1"
                        v-on:click="previouStep()">Back</button>
                    <button type="button" :id="['next_btn']" :class="['btn', 'btn-primary']" v-on:click="changeTab()"
                        v-if="step != 3">Next
                    </button>
                    <button type="button" :class="['btn', 'btn-primary']" v-if="step == 3" @click="saveData()">save
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
import MarketPlaceService from "@/services/marketplace";


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
            step: 1,
            crop_details: {},
            quality_product: {},
            crop_specification: {}
        }
    },
    methods: {
        changeTab() {
            if (this.step == 1) {
                this.crop_details = this.$refs.CD.cropData;
            }
            if (this.step == 2) {
                this.quality_product = this.$refs.QP.newCropData;
            }
            this.step++;
        },

        previouStep() {
            this.step--;
        },
        async saveData() {
            // combine data from child components
            const addData = {
                ...this.crop_details,
                ...this.quality_product,
                ...this.$refs.CS.cropSpecificationData
            }
            // send data to the endpoint
            try {
                MarketPlaceService.getNewCrops(addData, response => {
                    if (response.status === 201) {
                        this.$router.push('/marketplace/newcrop');
                    } else {
                        console.log(response.statusText);
                    }
                });
            } catch (error) {
                console.error(error);
            }
        }


        // async saveData() {
        //     // combine data from child components
        //     const addData = {
        //         ...this.crop_details,
        //         ...this.quality_product,
        //         ...this.$refs.CS.cropSpecificationData
        //     }
        //     // send data to the end-poit
        //     MarketPlaceService.getNewCrops(addData, (response) => {
        //         console.log(response);
        //         if(response.error == false){
        //             this.$router.push('/marketplace/newcrop')

        //         }
        //     })
        // },

    },
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