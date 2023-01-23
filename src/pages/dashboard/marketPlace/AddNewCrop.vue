<template>
  <DefaultNav>
    <div class="big-container">
      <div class="big-content">
        <!-- header -->
        <h1>New Crop Wanted</h1>
        <form action="" @submit.prevent="step == 3 ? saveData() : changeTab()">
          <!-- Crop Details Components -->
          <CropDetails v-if="step == 1" ref="CD" />
          <QualityProduct v-if="step == 2" ref="QP" />
          <CropSpecification v-if="step == 3" ref="CS" />
          <div id="btn-group" class="btn-group gap-3 my-4">
            <button
              v-if="step != 1"
              type="button"
              class="btn btn-primary active"
              aria-current="page"
              @click="previouStep()"
            >
              Back
            </button>
            <button
              v-if="step != 3"
              :id="['next_btn']"
              :class="['btn', 'btn-primary']"
              type="submit"
            >
              Next
            </button>
            <button
              v-if="step == 3"
              type="submit"
              :class="['btn', 'btn-primary']"
            >
              save
            </button>
          </div>
        </form>
      </div>
    </div>
  </DefaultNav>
</template>

<script>
import DefaultNav from "@/layouts/DefaultNav.vue";
import CropDetails from "@/pages/dashboard/marketPlace/components/CropDetails.vue";
import QualityProduct from "@/pages/dashboard/marketPlace/components/QualityProduct.vue";
import CropSpecification from "@/pages/dashboard/marketPlace/components/CropSpecification.vue";
import Alert from "@/utilities/alert";
// importing the marketplace service
import MarketPlaceService from "@/services/marketplace";

export default {
  name: "AddNewcrop",
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
      crop_specification: {},
    };
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
        ...this.$refs.CS.cropSpecificationData,
      };
      var data = new FormData();
      var index = 0;
      while (addData.files[index]) {
        data.append(`image_${index}`, addData.files[index]);
        index++;
      }
      for (var field in addData) {
        if (field != "files") {
          if (typeof addData[field] == "object") {
            addData[field] = JSON.stringify(addData[field]);
          }
          data.append(field, addData[field]);
        }
      }
      // send data to the end-poit
      await MarketPlaceService.getNewCrops(data, (response) => {
        if (response && response.error == false) {
          Alert.success({
            message: "Crop added successfully",
          });
          setTimeout(() => {
            window.location.reload();
          }, 2000);
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";

.big-container {
  width: 100%;
  height: 100%;
  background: #f5f5f5;
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
  background: #f5f5f5;

  h1 {
    @include textStyles(Poppins, 700, 24px, 120%);
    color: #4a4754;
    text-align: left;
    margin-block: 3rem;
  }
}

#btn-group {
  float: right;

  #next_btn {
    background: #05b050;
    color: #e6f7ee;
  }

  button {
    background: #ffffff;
    border: 1px solid #ededee;
    box-shadow: 0px 2px 4px rgba(44, 39, 56, 0.0001),
      0px 4px 8px rgba(44, 39, 56, 0.08);
    border-radius: 4px;
    text-align: center;
    color: #6ed19a;
    padding-inline: 3rem;
    @include textStyles("Maven Pro", 700, 16px, 24px);

    ~ button {
      @extend #next_btn;
    }
  }
}
</style>
