<!-- Filter header on temporary  components -->
<template>
  <div class="filter-header px-2">
    <div id="filter-wrapper" class="filter-content-wrapper container">
      <!--  filter header -->
      <div
        class="filter-header-content d-flex position-relative align-items-center"
      >
        <h2 class="filter-header-text-h1">Filter by</h2>
        <div
          id="carret-icon"
          class="filter-header-icon d-flex justify-content-center align-items-center"
          @click="toggleFilter"
        >
          <span>&#94;</span>
        </div>
      </div>
      <hr />

      <!-- main Content -->

      <div
        v-if="filter"
        id="main-filter-content"
        class="filter-main-container d-flex pe-5"
      >
        <!-- row 1 -->
        <div class="filter-item d-flex flex-column row-1">
          <!-- type -->
          <div class="rowz d-flex align-items-center mb-3">
            <h2>Product Type</h2>
          </div>
          <div
            v-for="category in categories"
            :key="category.id"
            class="rowz category-option d-flex align-items-center mb-2 position-relative"
          >
            <div class="filter-words d-flex">
              <!-- checkbox component -->
              <Checkbox @click="filterCategory(category.name, $event)" />
              <div class="ms-3 check-words">{{ category.name }}</div>
            </div>
            <div v-if="false" class="number-identifier">
              <span>54688</span>
            </div>
          </div>

          <!-- price -->
          <div class="rowz d-flex align-items-center mb-2 mt-3">
            <div class="ms-3 check-words-price">Price</div>
          </div>
          <!-- range -->
          <div
            class="customRange-conatiner d-flex flex-row justify-content-center align-items-center position-relative"
          >
            <input
              v-model="min"
              type="range"
              class="form-range min"
              min="0"
              max="50000"
              @input="handleMinRange($event)"
              @change="endRangeMove('min')"
            />
            <input
              v-model="max"
              type="range"
              class="form-range max"
              min="0"
              max="50000"
              @input="handleMaxRange($event)"
              @change="endRangeMove('max')"
            />
            <div
              class="range-thumb min-thumb"
              :style="'left:' + minPosition + '%;'"
              @mouseenter="focusRange('min')"
            ></div>
            <div
              class="range-thumb max-thumb"
              :style="'right:' + maxPosition + '%;'"
              @mouseenter="focusRange('max')"
            ></div>
          </div>

          <div
            class="mt-2 d-flex flex-row justify-content-between align-items-center"
          >
            <div class="form_control_container flex-grow-1">
              <div class="form_control_container__time">Min</div>
              <input
                id="fromInput"
                v-model="min"
                class="form_control_container__time__input"
                type="number"
                min="0"
                :max="max"
              />
            </div>
            <div class="form_control_container flex-grow-1">
              <div class="form_control_container__time">Max</div>
              <input
                id="toInput"
                v-model="max"
                class="form_control_container__time__input"
                type="number"
                :min="min"
                max="50000"
              />
            </div>
          </div>
        </div>
        <!-- row 2 -->
        <div class="filter-item d-flex flex-column row-2">
          <template v-if="marketType.includes('input')">
            <!-- type -->
            <div class="rowz d-flex align-items-center mb-4">
              <h2>Manufacturer</h2>
            </div>
            <div class="rowz d-flex align-items-center mb-3 position-relative">
              <div class="filter-words d-flex">
                <!-- checkbox component -->
                <Checkbox />
                <div class="ms-3 check-words">Dangote refinery</div>
              </div>
            </div>
            <div class="rowz d-flex align-items-center mb-3 position-relative">
              <div class="filter-words d-flex">
                <!-- checkbox component -->
                <Checkbox />
                <div class="ms-3 check-words">Nasco</div>
              </div>
            </div>
            <div class="rowz d-flex align-items-center mb-3 position-relative">
              <div class="filter-words d-flex">
                <!-- checkbox component -->
                <Checkbox />
                <div class="ms-3 check-words">60 Days</div>
              </div>
            </div>
            <div class="rowz d-flex align-items-center position-relative">
              <div class="filter-words d-flex">
                <!-- checkbox component -->
                <Checkbox />
                <div class="ms-3 check-words">Carbury</div>
              </div>
            </div>
          </template>

          <!-- price -->
          <div class="rowz d-flex align-items-center mb-3">
            <div class="ms-3 check-words-price seller-type">Quality</div>
          </div>
          <div class="rowz d-flex align-items-center mb-3 position-relative">
            <div class="filter-words d-flex">
              <!-- checkbox component -->
              <Checkbox />
              <div class="ms-3 check-words">Hybrid</div>
            </div>
          </div>
          <div class="rowz d-flex align-items-center mb-3 position-relative">
            <div class="filter-words d-flex">
              <!-- checkbox component -->
              <Checkbox />
              <div class="ms-3 check-words">Normal</div>
            </div>
          </div>
          <div class="rowz d-flex align-items-center mb-3 position-relative">
            <div class="filter-words d-flex">
              <!-- checkbox component -->
              <Checkbox />
              <div class="ms-3 check-words">Organic</div>
            </div>
          </div>
        </div>
        <!-- row 3 -->

        <div class="filter-item d-flex flex-column row-3">
          <!-- type -->
          <div class="rowz d-flex align-items-center mb-3">
            <h2>Shipping Method</h2>
          </div>
          <div class="rowz d-flex align-items-center mb-3 position-relative">
            <div class="filter-words d-flex">
              <!-- checkbox component -->
              <Checkbox />
              <div class="ms-3 check-words">Zowasel</div>
            </div>
            <div class="filter-words d-flex ms-4">
              <!-- checkbox component -->
              <Checkbox />
              <div class="ms-3 check-words">Self Transport</div>
            </div>
          </div>
          <div v-if="false" class="mb-4 rowz">
            <select class="form-select" aria-label="Default select example">
              <option>
                Select crop center <span>&blacktriangledown;</span>
              </option>
            </select>
          </div>
          <div v-if="false" class="rowz d-flex align-items-center mb-4">
            <h2>Quality</h2>
          </div>
          <div v-if="false" class="d-flex mb-4 selct-input">
            <select
              id="kilogram"
              class="form-select"
              aria-label="Default select example"
            >
              <option>Kilogram</option>
            </select>
            <input
              id="one"
              type="text"
              class="form-control"
              placeholder="1"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
          </div>
          <button
            type="button"
            class="btn btn-lg mb-4 btn-1"
            @click="apply(filters)"
          >
            Apply filters
          </button>
          <button type="button" class="btn btn-lg mb-4" @click="reset()">
            Reset filters
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Checkbox from "@/components/Checkbox.vue";
import MarketplaceService from "@/services/marketplace";
export default {
  components: {
    Checkbox,
  },
  props: {
    marketType: {
      type: String,
      default: "",
    },
    apply: Function,
    reset: Function,
  },
  data() {
    return {
      filter: true,
      min: 0,
      max: 50000,
      categories: [],
      filters: {
        category: "",
        price: {
          min: 0,
          max: 50000,
        },
      },
    };
  },
  computed: {
    minPosition() {
      var percentChange = (this.min / 50000) * 100;
      return percentChange - percentChange * 0.1;
    },
    maxPosition() {
      var percentChange = ((50000 - this.max) / 50000) * 100;
      return percentChange - percentChange * 0.1;
    },
  },
  mounted() {
    if (this.marketType.includes("crop")) {
      this.loadCropCategories();
    } else {
      this.loadInputCategories();
    }
  },
  methods: {
    toggleFilter() {
      this.filter = !this.filter;
    },
    filterCategory(category, event) {
      this.filters.category = category;
      Array.from(
        document.querySelectorAll(".category-option .checkbox-input")
      ).forEach((input) => {
        input.checked = false;
      });
      if (event.target.className == "checkbox-input") {
        event.target.checked = true;
      } else {
        event.target.previousElementSibling.checked = true;
      }
    },
    handleMinRange(event) {
      if (event.target.value > this.max - 5000) {
        event.target.value = this.max - 5000;
        this.min = this.max - 5000;
      }
      this.min = event.target.value;
      this.filters.price.min = this.min;
    },
    handleMaxRange(event) {
      if (event.target.value < this.min + 3000) {
        event.target.value = this.min + 3000;
      }
      this.max = event.target.value;
      this.filters.price.max = this.max;
    },
    focusRange(type) {
      if (type == "min") {
        document.querySelector(`.form-range.${type}`).style.zIndex = 3;
        document.querySelector(`.${type}-thumb`).style.pointerEvents = "none";
        document.querySelector(`.max-thumb`).style.pointerEvents = "auto";
        document.querySelector(`.form-range.max`).style.zIndex = 2;
      } else {
        document.querySelector(`.form-range.${type}`).style.zIndex = 3;
        document.querySelector(`.${type}-thumb`).style.pointerEvents = "none";
        document.querySelector(`.min-thumb`).style.pointerEvents = "auto";
        document.querySelector(`.form-range.min`).style.zIndex = 2;
      }
    },
    endRangeMove(type) {
      document.querySelector(`.${type}-thumb`).style.pointerEvents = "auto";
    },
    loadCropCategories() {
      MarketplaceService.getCropCategories((response) => {
        this.categories = response.data;
      });
    },
    loadInputCategories() {
      MarketplaceService.getInputCategories((response) => {
        this.categories = response.data;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";

.filter-header {
  width: 90%;
  background: #ffffff;
}

.active {
  #carret-icon span {
    transform: rotate(360deg);
    cursor: default;
  }

  #main-filter-content {
    display: none !important;
  }

  hr {
    display: none !important;
  }
}

.filter-content-wrapper {
  padding: 5px;

  .filter-header-content {
    padding: 10px 0px;
    display: flex;
    align-items: center;
  }

  h2 {
    @include textStyles(Poppins, 700, 16px, 24px);
    letter-spacing: 0.01em;
    color: #4a4754;
    margin-bottom: 0px;
  }

  .filter-header-icon {
    width: 20px;
    height: 20px;
    background: #05b050;
    border-radius: 50%;
    position: absolute;
    right: 5px;

    span {
      color: #ffffff;
      transform: rotate(180deg);
      padding-top: 4px;
      font-size: 25px;
      cursor: default;
    }
  }

  .filter-main-container {
    margin-left: 15px;
    gap: 8%;

    .row-1 {
      width: 35%;
    }

    .row-2 {
      width: 25%;
    }

    .row-3 {
      width: 40%;
    }

    .filter-item {
      h2 {
        letter-spacing: 0.01em;
        color: #4a4754;
        @include textStyles(Poppins, 600, 14px, 22px);
      }

      .rowz {
        display: flex !important;

        .filter-words {
          align-items: center;
        }

        .check-words {
          @include textStyles("Maven Pro", 400, 14px, 24px);
          color: #4a4754;
        }

        .check-words-price {
          @include textStyles(Poppins, 600, 14px, 22px);
          letter-spacing: 0.01em;
          color: #4a4754;
        }

        .number-identifier {
          background: #ededee;
          border-radius: 4px;
          padding: 0px 8px;
          width: 70px;
          position: absolute;
          right: 0%;

          span {
            font-size: 14px;
            color: #05b050;
            letter-spacing: 0.04em;
          }
        }

        .form-select {
          background: #f9f9f9 !important;
          border: 1px solid #ededee;
          border-radius: 4px;
          font-family: "Open Sans";
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          line-height: 19px;

          color: #4a4754;
        }
      }

      .selct-input {
        border: 1px solid hsl(240, 3%, 93%);
        border-radius: 4px;
        align-items: center;
        padding: 5px 7px;
        gap: 3px;

        select#kilogram {
          width: 45%;
          font-size: 10px;
          border: 0px !important;
          border-radius: 0px !important;
        }

        #one {
          width: 55%;
          border-width: 0px !important;
          border-left-width: 1px !important;
          border-radius: 0px !important;
          margin-top: 0px;
          height: 20px;
        }
      }

      button {
        background: #05b050;
        box-shadow: 0px 2px 4px rgba(44, 39, 56, 0.08),
          0px 4px 8px rgba(44, 39, 56, 0.08);
        border-radius: 4px;
        color: #ffffff;
        font-size: 14px;
      }

      // #minus-sign {
      //     align-self: center;
      //     flex-grow: 0;
      //     padding: 12px;
      //     transform: translateY(15px);
      // }
    }
  }

  .form-range.fromSlider::-moz-range-track {
    height: 0rem;
  }

  .form_control_container__time,
  input[type="number"] {
    font-size: 14px;
    color: #8a8383;
  }

  input[type="number"].form_control_container__time__input {
    width: 90%;
    height: 30px;
    border: none;
  }

  .form-range {
    width: 100%;
    margin: 0px;
  }

  input[type="range"] {
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    position: absolute;
    border: none !important;
    padding: 0 !important;
    opacity: 1;
  }

  .range-thumb {
    height: 23px;
    width: 23px;
    border-radius: 15px;
    background-color: #05b050;
    position: absolute;
    border: 1px solid #fff;
    z-index: 3;
  }

  .range-thumb.min-thumb {
    left: 0;
  }

  .range-thumb.max-thumb {
    right: 0;
  }
  //
}
</style>
