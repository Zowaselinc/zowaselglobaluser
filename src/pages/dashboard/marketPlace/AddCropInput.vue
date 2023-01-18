<template>
  <DefaultNav>
    <div class="big-container">
      <div class="big-content">
        <!-- header -->
        <h1>Add new input</h1>
        <form>
          <div class="crop-wanted-section d-flex flex-row gap-4">
            <div class="form">
              <div class="crop_details">Input Details</div>

              <!-- input -->
              <div class="w-100 mb-3">
                <label for="exampleInputEmail1" class="form-label mb-0"
                  >Input category</label
                >
                <input
                  type="text"
                  class="form-control"
                  required
                  placeholder="type your answer"
                  v-model="inputData.category_id"
                />
              </div>
              <!-- input -->
              <div class="w-100 mb-3">
                <label for="exampleInputEmail1" class="form-label mb-0"
                  >Price</label
                >
                <input
                  type="number"
                  class="form-control"
                  required
                  placeholder="type your answer"
                  v-model="inputData.price"
                />
              </div>
              <!-- input -->
              <div class="w-100 mb-3">
                <label for="exampleInputEmail1" class="form-label mb-0"
                  >Title</label
                >
                <input
                  type="number"
                  class="form-control"
                  required
                  placeholder="type your answer"
                  v-model="inputData.title"
                />
              </div>
              <!-- input -->
              <div class="w-100 mb-3">
                <label for="exampleInputEmail1" class="form-label mb-0"
                  >Crop Focus</label
                >
                <input
                  type="text"
                  class="form-control"
                  required
                  placeholder="type your answer"
                  v-model="inputData.crop_focus"
                />
              </div>
              <!-- input -->
              <div class="w-100 mb-3">
                <label for="exampleInputEmail1" class="form-label mb-0"
                  >KG(5-50)</label
                >
                <input
                  type="number"
                  class="form-control"
                  required
                  placeholder="type your answer"
                  v-model="inputData.kg"
                />
              </div>
              <!-- input -->

              <div class="w-100 mb-3">
                <label for="formGroupExampleInput" class="form-label mb-0"
                  >Delivery window</label
                >
                <div class="form-row">
                  <div class="col">
                    <input
                      id="formGroupExampleInput"
                      type="date"
                      class="form-control"
                      required
                      v-model="inputData.delivery_window.from"
                    />
                  </div>

                  <div class="col">
                    <input
                      id="formGroupExampleInput"
                      type="date"
                      class="form-control"
                      v-model="inputData.delivery_window.to"
                      required
                    />
                  </div>
                </div>
              </div>

              <!-- input -->
              <div class="w-100 mb-3 m_top">
                <label for="exampleInputEmail1" class="form-label mb-0"
                  >Input Application</label
                >
                <textarea
                  type="text"
                  class="form-control"
                  required
                  placeholder="type your answer"
                  v-model="inputData.usage_instruction"
                ></textarea>
              </div>
              <!-- input -->
              <div class="w-100 mb-3">
                <label for="exampleInputEmail1" class="form-label mb-0"
                  >Video URL</label
                >
                <input
                  type="text"
                  class="form-control"
                  required
                  placeholder="type your answer"
                  v-model="inputData.video_url"
                />
              </div>
            </div>
            <div class="vertical-line" />
            <!-- form two -->
            <div class="form">
              <!-- input -->
              <div class="w-100 mb-3 m_top">
                <label for="exampleInputEmail1" class="form-label mb-0"
                  >Input sub-category</label
                >
                <input
                  type="text"
                  class="form-control"
                  required
                  placeholder="type your answer"
                  v-model="inputData.subcategory_id"
                />
              </div>
              <!-- input -->
              <div class="w-100 mb-3">
                <label for="exampleInputEmail1" class="form-label mb-0"
                  >Packaging</label
                >
                <input
                  type="text"
                  class="form-control"
                  required
                  placeholder="type your answer"
                  v-model="inputData.packaging"
                />
              </div>
              <!-- input -->
              <div class="w-100 mb-3">
                <label for="exampleInputEmail1" class="form-label mb-0"
                  >Liters(1-50)</label
                >
                <input
                  type="number"
                  class="form-control"
                  required
                  placeholder="type your answer"
                  v-model="inputData.litres"
                />
              </div>
              <!-- Editor -->
              <div class="crop_details">Product description</div>
              <div class="d-flex flex-row mb-3 gap-4 m_top">
                <div class="w-100 editor-wrapper">
                  <!-- using quill editor tool-->
                  <div ref="editor" @text-change="handleContentChange" />
                </div>
              </div>
              <!-- editor ends -->
              <div class="w-100 mb-3">
                <label for="exampleInputEmail1" class="form-label mb-0"
                  >Currency</label
                >
                <select
                  v-model="inputData.currency"
                  class="form-select"
                  aria-label="Default select example"
                  required
                >
                  <option
                    v-for="currency in currencies"
                    :key="currency"
                    :value="currency"
                  >
                    {{ currency }}
                  </option>
                </select>
              </div>
              <!-- input -->
              <div class="w-100 mb-3">
                <label for="exampleInputEmail1" class="form-label mb-0"
                  >Manufacturer Name</label
                >
                <input
                  type="text"
                  class="form-control"
                  required
                  placeholder="type your answer"
                  v-model="inputData.manufacturer_name"
                />
              </div>
              <!-- input -->
              <div class="w-100 mb-3">
                <label for="exampleInputEmail1" class="form-label mb-0"
                  >Manufacture Date</label
                >
                <input
                  type="data"
                  class="form-control"
                  required
                  placeholder="type your answer"
                  v-model="inputData.manufacturer_date"
                />
              </div>
              <!-- input -->
              <div class="w-100 mb-3">
                <label for="exampleInputEmail1" class="form-label mb-0"
                  >Delivery Method</label
                >
                <input
                  type="text"
                  class="form-control"
                  required
                  placeholder="type your answer"
                  v-model="inputData.delivery_method"
                />
              </div>
              <!-- input -->
              <div class="w-100 mb-3">
                <label for="exampleInputEmail1" class="form-label mb-0"
                  >Expiry Date</label
                >
                <input
                  type="date"
                  class="form-control"
                  required
                  placeholder="type your answer"
                  v-model="inputData.expiry_date"
                />
              </div>
            </div>
          </div>
          <button
            type="submit"
            :class="['btn', 'btn-primary', 'my-4']"
            @click="saveData()"
          >
            save
          </button>
        </form>
      </div>
    </div>
  </DefaultNav>
</template>
<script>
//   sidebar
import DefaultNav from "@/layouts/DefaultNav.vue";
// Alert box
import Alert from "@/utilities/alert";
// // importing the marketplace service
import MarketPlaceService from "@/services/marketplace";
// quill editor
import Quill from "quill";
import "quill/dist/quill.core.css";
import "quill/dist/quill.bubble.css";
import "quill/dist/quill.snow.css";
// import the country-state object
import countriesObject from "@/data/countries";

export default {
  name: "AddCropInput",
  props: {
    modelValue: {
      type: String,
      default: "",
    },
  },
  components: {
    DefaultNav,
  },
  data() {
    return {
      inputData: {
        category_id: "",
        price: "",
        title: "",
        crop_focus: "",
        kg: "",
        delivery_window: { from: "", to: "" },
        usage_instruction: "",
        subcategory_id: "",
        packaging: "",
        litres: "",
        description: "",
        currency: "",
        manufacturer_name: "",
        manufacturer_date: "",
        delivery_method: "",
        expiry_date: "",
        state: "",
        country: "",
        video_url: "",
      },
      currencies: ["USD", "EUR", "GBP", "NGN"],
      countries: countriesObject.countries,
    };
  },
  mounted() {
    var _this = this;

    this.editor = new Quill(this.$refs.editor, {
      modules: {
        toolbar: [
          [
            {
              header: [1, 2, 3, 4, false],
            },
          ],
          ["bold", "italic", "underline", "link"],
        ],
      },
      //theme: 'bubble',
      theme: "snow",
      formats: ["bold", "underline", "header", "italic", "link"],
      placeholder: "Type description!",
    });
    this.editor.root.innerHTML = this.modelValue;
    this.editor.on("text-change", function () {
      _this.handleContentChange();
      return _this.update();
    });
    this.getCategory();
    this.getSubCategory();
  },
  computed: {
    selectStateByCountry: function () {
      // console.log(this.countries)
      return this.countries && this.inputData.country != ""
        ? this.countries.filter(
            (item) => item.country == this.inputData.country
          )[0].states
        : [];
    },
  },
  methods: {
    update: function update() {
      this.$emit(
        "update:modelValue",
        this.editor.getText() ? this.editor.root.innerHTML : ""
      );
    },
    handleContentChange() {
      this.inputData.description = this.editor.root.innerHTML;
    },

    async saveData() {
      // send data to the end-poit
      await MarketPlaceService.getNewInput(this.inputData, (response) => {
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

.crop-wanted-section {
  background: #ffffff;
  border-radius: 4px;
  padding: 4%;
}

.form {
  .crop_details {
    @include textStyles("Maven Pro", 700, 16px, 24px);
    letter-spacing: 0.01em;
    color: #4a4754;
    margin-bottom: 1rem;
  }

  .m_top {
    margin-top: 2.5rem;
  }

  width: 100%;
  padding-bottom: 2rem;

  select,
  input,
  textarea {
    font-size: 14px;
    color: #000000;

    &:hover,
    &:active,
    &:focus,
    &:focus-visible {
      border-color: #05b050 !important;
      box-shadow: 0 0 !important;
    }
  }

  label {
    font-size: 14px;
    font-weight: 900;
    color: rgba(45, 55, 72, 0.8);
  }
}

div.vertical-line {
  width: 2px;
  padding: 1px;
  background: #f5f5f5;
}

.editor-wrapper {
  padding-bottom: 50px;

  .ql-container {
    min-height: 35vh;
  }
}
</style>
