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
              <h1>Capacity</h1>
            </div>
            <div>
              <!--save button -->
              <!--next button -->
              <button type="submit" :class="['btn', 'btn-primary', 'my-4']">
                Next
              </button>
            </div>
          </div>
          <!-- lower level header -->

          <div class="lower_level-header d-flex gap-2">
            <button
              :class="[
                'btn',
                'btn-primary',
                'my-4',
                'col',
                'first',
                activeTab == 'farm_capacity' ? 'tab_color' : '',
              ]"
              type="button"
            >
              Farm capacity
            </button>
            <span class="horizontal_line"></span>
            <button
              :class="[
                'btn',
                'btn-primary',
                'my-4',
                'col',
                'second',
                activeTab == 'farm_practice' ? 'tab_color' : '',
              ]"
              type="button"
            >
              Farm practice
            </button>
            <span id="secon_line" class="horizontal_line second"></span>
            <button
              :class="[
                'btn',
                'btn-primary',
                'my-4',
                'col',
                'third',
                activeTab == 'mechanization' ? 'tab_color' : '',
              ]"
            >
              Mechanization
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
                activeTab == 'cultivation' ? 'tab_color' : '',
              ]"
            >
              Cultivation
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
                activeTab == 'harvest' ? 'tab_color' : '',
              ]"
            >
              Harvest
            </button>
          </div>
        </div>

        <!-- main form content -->
        <!-- farm capacity -->
        <FarmCapacity v-if="activeTab == 'farm_capacity'"></FarmCapacity>
        <!-- farm practice -->
        <FarmPractice v-if="activeTab == 'farm_practice'"></FarmPractice>
        <!-- Mechanization -->
        <Mechanization v-if="activeTab == 'mechanization'"></Mechanization>
      </div>
    </div>
  </DefaultNav>
</template>

<script>
//   sidebar
import DefaultNav from "@/layouts/DefaultNav.vue";
// import Credit history component
import FarmCapacity from "./components/FarmCapacity.vue";
import FarmPractice from "./components/FarmPractice.vue";
import Mechanization from "./components/Mechanization.vue";

export default {
  name: "Character",
  components: {
    DefaultNav,
    FarmCapacity,
    FarmPractice,
    Mechanization,
  },
  data() {
    return {
      activeTab: "mechanization",
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
