<template>
  <DefaultNav>
    <div class="big-container">
      <div class="top-text">
        <h1>Buy & Sell with Ease</h1>
        <p>Empowering growers from seed to market</p>
      </div>
      <div class="second-bar">
        <Filter
          :apply="applyFilters"
          :reset="resetFilters"
          :market-type="activeView"
        />
        <div v-if="false" class="input-area">
          <input type="text" placeholder="Search" />
          <div class="icon">
            <img src="@/assets/images/vectors/Search.svg" alt="" />
          </div>
        </div>
      </div>

      <!-- MAIN CONTENT GOES HERE -->
      <CorporateMarket
        v-if="userData.user.type == 'corporate'"
        ref="corporateMarket"
        :view="activeView"
      />
      <MerchantMarket
        v-if="userData.user.type == 'merchant'"
        ref="merchantMarket"
        :view="activeView"
      />
    </div>
  </DefaultNav>
</template>

<script>
import DefaultNav from "@/layouts/DefaultNav.vue";
import MarketplaceService from "@/services/marketplace";
import CorporateMarket from "@/pages/dashboard/marketPlace/CorporateMarket.vue";
import Filter from "@/pages/dashboard/marketPlace/components/Filter.vue";
import MerchantMarket from "@/pages/dashboard/marketPlace/MerchantMarket.vue";

export default {
  name: "Market",
  components: {
    DefaultNav,
    CorporateMarket,
    MerchantMarket,
    Filter,
  },
  data() {
    return {
      userData: this.$store.state.user,
      activeView: "",
    };
  },
  created() {
    this.activeView = this.$route.params.market;
  },
  methods: {
    changeTab(tab) {
      this.activeView = tab;
    },
    checked() {
      var box = document.getElementById("checkbox");
      var deColor = box.style.backgroundColor;
      if (deColor == "white") {
        deColor = "green";
      }
    },
    applyFilters(filters) {
      this.$refs.corporateMarket.applyFilters(filters);
    },
    resetFilters() {
      this.filters = {
        category: "",
        price: {
          min: 0,
          max: 50000,
        },
      };
      this.$refs.corporateMarket.resetFilters();
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

.top-text {
  width: 100%;
  background: #262c3f;
  color: white;
  padding: 14px 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    margin-bottom: 0px;
    font-size: 14px;
  }

  h1 {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
  }
}
.second-bar {
  width: 100%;
  padding: 25px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.input-area {
  width: 60%;
  display: flex;
  align-items: center;

  input {
    width: 95%;
    height: 60px;
    margin-top: 0px;
    border: 1px solid #05b050 !important;
    border-radius: 5px;
  }
  .icon {
    width: 54px;
    height: 60px;
    background-color: #05b050;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
.button-area {
  display: flex;
  gap: 16px;
  width: 60%;
  justify-content: center;

  a {
    background-color: white;
    padding: 10px 35px;
    border: 1px solid #696671;
    border-radius: 55px;
    font-family: "Maven Pro";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    color: #696671;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
  }
  a:not(.green-btns):hover {
    background: #e1f6ea90;
  }
  .green-btns {
    border: none;
    color: white;
    background: #05b050;
  }
}

.tags {
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-top: 50px;
  align-items: center;
  h4 {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    color: #19191d;
  }

  a {
    padding: 10px 20px;
    background: #ededf0;
    border-radius: 99px;
    font-family: "Maven Pro";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #4a4b57;
    text-decoration: none;
  }
}
</style>
