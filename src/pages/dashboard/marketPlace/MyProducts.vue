<template>
  <DefaultNav>
    <div class="big-container">
      <div class="welcome-text">
        <h2 v-if="userData.user.type == 'merchant'">My Crops</h2>
        <h2 v-if="userData.user.type == 'corporate'">My Crops/Inputs</h2>
      </div>

      <div class="contents">
        <div class="headings">
          <h2>My products</h2>
          <div class="right-btns">
            <template v-if="userData.user.type == 'merchant'">
              <a href="/marketplace/newsale" class="green-link"
                >Add Crop for Sale</a
              >
              <a href="/marketplace/newcrop" class="green-link"
                >Add Crop For Auction</a
              >
            </template>
            <template v-if="userData.user.type == 'corporate'">
              <a href="/marketplace/newcrop" class="green-link"
                >Add Crop Wanted</a
              >
              <a href="/marketplace/newcrop" class="green-link">Add Input</a>
            </template>
          </div>
        </div>
        <div v-if="userData.user.type == 'merchant'" class="content-tabs">
          <button
            :class="['normal-btn', activeTab == 'forSale' ? 'active-tab' : '']"
            type="button"
            @click="switchTab('forSale')"
          >
            For sale
          </button>
          <button
            :class="[
              'normal-btn',
              activeTab == 'forAuction' ? 'active-tab' : '',
            ]"
            type="button"
            @click="switchTab('forAuction')"
          >
            For Auction
          </button>
        </div>

        <div v-if="userData.user.type == 'corporate'" class="content-tabs">
          <button
            :class="[
              'normal-btn',
              activeTab == 'cropsWanted' ? 'active-tab' : '',
            ]"
            type="button"
            @click="switchTab('cropsWanted')"
          >
            My Crops
          </button>
          <button
            :class="['normal-btn', activeTab == 'input' ? 'active-tab' : '']"
            type="button"
            @click="switchTab('input')"
          >
            My Inputs
          </button>
        </div>

        <!-- component comes here -->
        <div v-if="userData.user.type == 'merchant'">
          <ForSale v-if="activeTab == 'forSale'" :list-data="cropsSale" />
          <ForAuction
            v-if="activeTab == 'forAuction'"
            :list-data="cropsAuction"
          />
        </div>
        <div v-if="userData.user.type == 'corporate'">
          <MyCrop v-if="activeTab == 'cropsWanted'" :list-data="cropsWanted" />
          <MyInput v-if="activeTab == 'input'" :list-data="inputs" />
        </div>
      </div>
    </div>
  </DefaultNav>
</template>

<script>
import DefaultNav from "@/layouts/DefaultNav.vue";
import ForSale from "@/pages/dashboard/marketPlace/components/ForSale.vue";
import ForAuction from "@/pages/dashboard/marketPlace/components/ForAuction.vue";
import MyCrop from "@/pages/dashboard/marketPlace/components/Crop.vue";
import MyInput from "@/pages/dashboard/marketPlace/components/Input.vue";
import MarketPlaceService from "@/services/marketplace";

export default {
  name: "MyProducts",
  components: {
    DefaultNav,
    ForSale,
    ForAuction,
    MyCrop,
    MyInput,
  },
  data() {
    return {
      userData: this.$store.state.user,
      cropsSale: [],
      cropsAuction: [],
      cropsWanted: [],
      inputs: [],
      activeTab: "forSale",
    };
  },
  mounted() {
    this.getCrops();
    this.getInputs();
  },
  methods: {
    getCrops() {
      MarketPlaceService.getUserCrops(this.userData.user_id, (response) => {
        if (response && response.error == false) {
          this.cropsSale = response.data.rows.filter(
            (crop) => crop.type == "offer"
          );
          this.cropsAuction = response.data.rows.filter(
            (crop) => crop.type == "auction"
          );
          this.cropsWanted = response.data.rows.filter(
            (crop) => crop.type == "wanted"
          );
        }
      });
    },
    getInputs() {
      MarketPlaceService.getUserInputs(this.userData.user_id, (response) => {
        if (response && response.error == false) {
          this.inputs = response.data.rows;
        }
        console.log(this.inputs);
      });
    },
    switchTab(tab) {
      this.activeTab = tab;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";

.big-container {
  width: 100%;
  height: auto;
  background: #f5f5f5;
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

.welcome-text {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #262c3f;
  color: white;
  padding: 14px 30px;
  width: 100%;

  h2 {
    font-family: "Maven Pro";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    color: white;
  }

  p {
    font-family: "Maven Pro";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #4a4754;
  }

  span {
    font-family: "Maven Pro";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    color: #05b050;
  }
}

.each-product {
  width: 100%;
  border: 1px solid #dce3e9;
  padding: 20px 50px;
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  text-decoration: none;
  color: black;

  .product-btns {
    display: flex;
    gap: 15px;

    .edit {
      background: #fff8e6;
      border: 1px solid #f59e0b;
      border-radius: 4px;
      padding: 5px 10px;
      font-family: "Maven Pro";
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      color: #f59e0b;
    }

    .delete {
      background: #f9e9e9;
      border: 1px solid #c32021;
      border-radius: 4px;
      padding: 5px 10px;
      font-family: "Maven Pro";
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      color: #c32021;
    }

    .view {
      border: none;
      padding: 5px 10px;
      background: white;
      box-shadow: 0px 2px 4px rgba(44, 39, 56, 0.08),
        0px 4px 8px rgba(44, 39, 56, 0.08);
      border-radius: 4px;
      font-family: "Maven Pro";
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      line-height: 147%;
      color: #05b050;
      border: 1px solid #05b050;
    }
  }
}

.contents {
  width: 100%;
  background-color: white;
  padding: 38px;
}
.content-tabs {
  display: flex;
  gap: 20px;

  .normal-btn {
    background: #ffffff;
    border: 1.11212px solid #696671;
    border-radius: 55.6062px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 700;
    font-size: 15.5697px;
    color: #696671;
    border-radius: 30px;
    padding: 11px 33px;
  }
}
.top-address {
  align-items: center;
  gap: 12px;

  img {
    width: 20px;
    height: 20px;
  }

  h3 {
    margin-top: 5px;
    color: #05b050;
    font-size: 18px;
  }

  p {
    font-size: 15px;
    span {
      font-size: 13.5px;
    }
  }
}

.main-address {
  display: flex;
  justify-content: space-between;
  align-items: center;

  h4 {
    font-size: 18px;
    span {
      font-size: 16px;
    }
  }
  button {
    font-size: 14px;
  }
}

.headings {
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;

  a {
    text-decoration: none;
  }
  .right-btns {
    display: flex;
    gap: 20px;
  }
  .green-link {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    width: 200px;
    height: 40px;
    background: #05b050;
    border-radius: 5px;
    font-weight: 700;
    font-size: 16px;
    letter-spacing: 0.02em;
    text-decoration: none;
  }
}
.active-tab {
  background: #05b050 !important;
  color: #ffffff !important;
  border: 0 !important;
}
</style>
