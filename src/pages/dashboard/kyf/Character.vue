<template>
  <DefaultNav>
    <div class="big-container">
      <div class="big-content">
        <!-- header -->
        <div class="header_wrapper">
          <!-- top level header -->
          <div class="d-flex flex-row top_level_header">
            <div class="left_header d-flex flex-row gap-4 my-4">
              <a class="left_arrow">
                <img
                  src="@/assets/images/vectors/arrowleft.png"
                  alt="left-arrow"
                  class="img-fluid"
                />
              </a>
              <h1>Character</h1>
            </div>
            <!--next button -->
            <button type="submit" :class="['btn', 'btn-primary', 'my-4']">
              Next
            </button>
            <!--save button -->
            <button type="submit" :class="['btn', 'btn-primary', 'my-4']">
              save
            </button>
          </div>
          <!-- lower level header -->

          <div class="lower_level-header d-flex gap-2">
            <button
              type="submit"
              :class="[
                'btn',
                'btn-primary',
                'my-4',
                'col',
                'first',
                activeTab == 'farmer_details' ? 'tab_color' : '',
              ]"
            >
              Credit history
            </button>
            <span class="horizontal_line"></span>
            <button
              type="submit"
              :class="[
                'btn',
                'btn-primary',
                'my-4',
                'col',
                'second',
                activeTab == 'company_details' ? 'tab_color' : '',
              ]"
            >
              Productivity viability
            </button>
            <span id="secon_line" class="horizontal_line second"></span>
            <button
              type="submit"
              :class="[
                'btn',
                'btn-primary',
                'my-4',
                'col',
                'third',
                activeTab == 'kin' ? 'tab_color' : '',
              ]"
            >
              Agronomy
            </button>
            <span id="secon_line" class="horizontal_line second"></span>
            <button
              type="submit"
              :class="[
                'btn',
                'btn-primary',
                'my-4',
                'col',
                'third',
                activeTab == 'kin' ? 'tab_color' : '',
              ]"
            >
              Psychometrics
            </button>
          </div>
        </div>

        <!-- main form content -->
        <!-- CreditHistory -->
        <CreditHistory v-if="activeTab == 'credit_history'"></CreditHistory>
        <!-- compony details components -->
        <!-- <CompanyDetails v-if="activeTab == 'company_details'"></CompanyDetails> -->
        <!-- compony Next of kin components -->
        <!-- <Kin v-if="activeTab == 'kin'"></Kin> -->
      </div>
    </div>
  </DefaultNav>
</template>

<script>
//   sidebar
import DefaultNav from "@/layouts/DefaultNav.vue";
// import Credit history component
import CreditHistory from "./components/CreditHistory.vue";
// import CompanyDetails component
// import CompanyDetails from "./components/CompanyDetails.vue";
// import Next of Kin component
// import Kin from "./components/Kin.vue";

export default {
  name: "Character",
  components: {
    DefaultNav,
    CreditHistory,
    // CompanyDetails,
    // Kin,
  },
  data() {
    return {
      activeTab: "credit_history",
    };
  },
  methods: {
    changeTab(tab) {
      this.activeTab = tab;
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
  padding: 0px 2.5rem;
  background: #f5f5f5;
}
// reset button state
button:focus {
  box-shadow: 0 0 0;
}
.top_level_header {
  margin-block: 3rem 2rem;
  justify-content: space-between;
  align-items: center;
  .left_header {
    a.left_arrow {
      width: 22px;
    }
    h1 {
      @include textStyles(Poppins, 700, 24px, 120%);
      color: #4a4754;
      text-align: left;
    }
  }
  button {
    float: right;
    background: #05b050;
    border: 1px solid #ededee;
    box-shadow: 0px 2px 4px rgba(44, 39, 56, 0.0001),
      0px 4px 8px rgba(44, 39, 56, 0.08);
    border-radius: 4px;
    text-align: center;
    color: #e6f7ee;
    padding-inline: 3rem;
    @include textStyles("Maven Pro", 700, 16px, 24px);
  }
}
.lower_level-header {
  button {
    border: 1px solid rgba(0, 0, 0, 0.4);
    border-radius: 4px;
    @include textStyles("Maven Pro", 600, 12px, 16px);
    letter-spacing: 0.04em;
    color: #34323b;
    background: #f1f1f1;
    padding-block: 10px;
  }
  button.tab_color {
    background: #fab900;
    color: #ffffff;
    border-color: #fab900;
  }
  .horizontal_line {
    width: 20px;
    border: 2px solid #05b050;
    height: 0px;
    align-self: center;
  }
  #second_line {
    border-color: #b5b4b9;
  }
}
</style>
