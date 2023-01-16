<template>
  <DefaultNav>
    <div class="big-container">
      <div class="big-content">
        <!-- header -->
        <h1>New Crop For Sale</h1>
        <!-- Crop Details Components -->
        <AuctionDetails v-if="NextState == 'crop_details' || step == 1" />
        <AuctionProduct v-if="NextState == 'quality_product' && step == 2" />
        <AuctionSpecification v-if="step == 3" />
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
            type="button"
            :class="['btn', 'btn-primary']"
            @click="changeTab('quality_product')"
          >
            Next
          </button>
          <button
            v-if="step == 3"
            type="button"
            :class="['btn', 'btn-primary']"
          >
            save
          </button>
        </div>
      </div>
    </div>
  </DefaultNav>
</template>

<script>
import DefaultNav from "@/layouts/DefaultNav.vue";
import AuctionDetails from "@/pages/dashboard/marketPlace/components/AuctionDetails.vue";
import AuctionProduct from "@/pages/dashboard/marketPlace/components/AuctionProduct.vue";
import AuctionSpecification from "@/pages/dashboard/marketPlace/components/AuctionSpecification.vue";

export default {
  name: "CropAuction",
  components: {
    DefaultNav,
    AuctionDetails,
    AuctionProduct,
    AuctionSpecification,
  },
  data() {
    return {
      NextState: "crop_details",
      step: 1,
    };
  },
  methods: {
    changeTab(tab) {
      this.NextState = tab;
      this.step++;
    },

    previouStep() {
      this.step--;
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
