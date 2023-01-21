<template>
  <DefaultNav>
    <div class="big-container">
      <div class="big-content">
        <!-- header -->
        <h1>Add new input</h1>
        <form @submit.prevent="saveData()">
          <div class="crop-wanted-section d-flex flex-row gap-4">
            <div class="form">
              <div class="crop_details">Input Details</div>

              <!-- input -->
              <div class="w-100 mb-3">
                <label for="exampleInputEmail1" class="form-label mb-0"
                  >Input category</label
                >
                <span id="required">*</span>
                <input
                  v-model="inputData.category_id"
                  type="text"
                  class="form-control"
                  required
                  placeholder="type your answer"
                />
              </div>
              <!-- input -->
              <div class="w-100 mb-3">
                <label for="exampleInputEmail1" class="form-label mb-0"
                  >Price</label
                >
                <span id="required">*</span>
                <input
                  v-model="inputData.price"
                  type="number"
                  class="form-control"
                  required
                  placeholder="type your answer"
                />
              </div>
              <!-- input -->
              <div class="w-100 mb-3">
                <label for="exampleInputEmail1" class="form-label mb-0"
                  >Title</label
                >
                <span id="required">*</span>
                <input
                  v-model="inputData.title"
                  type="text"
                  class="form-control"
                  required
                  placeholder="type your answer"
                />
              </div>
              <!-- input -->
              <div class="w-100 mb-3">
                <label for="exampleInputEmail1" class="form-label mb-0"
                  >Crop Focus</label
                >
                <span id="required">*</span>
                <input
                  v-model="inputData.crop_focus"
                  type="text"
                  class="form-control"
                  required
                  placeholder="type your answer"
                />
              </div>
              <!-- input -->
              <div class="w-100 mb-3">
                <label for="exampleInputEmail1" class="form-label mb-0"
                  >KG(5-50)</label
                >
                <span id="required">*</span>
                <input
                  v-model="inputData.kg"
                  type="number"
                  class="form-control"
                  required
                  placeholder="type your answer"
                />
              </div>
              <!-- input -->

              <div class="w-100 mb-3">
                <label for="formGroupExampleInput" class="form-label mb-0"
                  >Delivery window</label
                >
                <span id="required">*</span>
                <div class="form-row">
                  <div class="col">
                    <input
                      id="formGroupExampleInput"
                      v-model="inputData.delivery_window.from"
                      type="date"
                      class="form-control"
                      required
                    />
                  </div>

                  <div class="col">
                    <input
                      id="formGroupExampleInput"
                      v-model="inputData.delivery_window.to"
                      type="date"
                      class="form-control"
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
                <span id="required">*</span>
                <textarea
                  v-model="inputData.usage_instruction"
                  type="text"
                  class="form-control"
                  required
                  placeholder="type your answer"
                ></textarea>
              </div>
              <!-- input -->
              <div class="w-100 mb-3">
                <label for="exampleInputEmail1" class="form-label mb-0"
                  >Video</label
                >
                <span id="required">*</span>
                <input
                  v-model="inputData.video"
                  type="text"
                  class="form-control"
                  required
                  placeholder="type your answer"
                />
              </div>
              <!-- input -->
              <div class="w-100 mb-3">
                <label for="exampleInputEmail1" class="form-label mb-0"
                  >Manufacture Date</label
                >
                <span id="required">*</span>
                <input
                  v-model="inputData.manufacture_date"
                  type="date"
                  class="form-control"
                  required
                  placeholder="type your answer"
                />
              </div>
              <!-- input -->
              <div class="w-100 mb-3">
                <label for="exampleInputEmail1" class="form-label mb-0"
                  >Manufacture Name</label
                >
                <span id="required">*</span>
                <input
                  v-model="inputData.manufacture_name"
                  type="text"
                  class="form-control"
                  required
                  placeholder="type your answer"
                />
              </div>
              <!-- input -->
              <div class="w-100 mb-3">
                <label for="exampleInputEmail1" class="form-label mb-0"
                  >Expiry Date</label
                >
                <span id="required">*</span>
                <input
                  v-model="inputData.expiry_date"
                  type="date"
                  class="form-control"
                  required
                  placeholder="type your answer"
                />
              </div>
              <!-- input -->

              <div class="w-100 mb-3">
                <label for="exampleInputEmail1" class="form-label mb-0"
                  >Manufacture country</label
                >
                <span id="required">*</span>
                <select
                  v-model="inputData.manufacture_country"
                  class="form-select"
                  aria-label="Default select example"
                  required
                >
                  <option
                    v-for="(country, index) in countries"
                    :key="index"
                    :value="country.country"
                  >
                    {{ country.country }}
                  </option>
                </select>
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
                <span id="required">*</span>
                <input
                  v-model="inputData.subcategory_id"
                  type="text"
                  class="form-control"
                  required
                  placeholder="type your answer"
                />
              </div>
              <!-- input -->
              <div class="w-100 mb-3">
                <label for="exampleInputEmail1" class="form-label mb-0"
                  >Packaging</label
                >
                <span id="required">*</span>
                <input
                  v-model="inputData.packaging"
                  type="text"
                  class="form-control"
                  required
                  placeholder="type your answer"
                />
              </div>
              <!-- input -->
              <div class="w-100 mb-3">
                <label for="exampleInputEmail1" class="form-label mb-0"
                  >Delivery Method</label
                >
                <span id="required">*</span>
                <input
                  v-model="inputData.delivery_method"
                  type="text"
                  class="form-control"
                  required
                  placeholder="type your answer"
                />
              </div>
              <!-- input -->
              <div class="w-100 mb-3">
                <label for="exampleInputEmail1" class="form-label mb-0"
                  >Liters(1-50)</label
                >
                <span id="required">*</span>
                <input
                  v-model="inputData.liters"
                  type="number"
                  class="form-control"
                  required
                  placeholder="type your answer"
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
                <span id="required">*</span>
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
                  >Country</label
                >
                <span id="required">*</span>
                <select
                  v-model="inputData.country"
                  class="form-select"
                  aria-label="Default select example"
                  required
                >
                  <option
                    v-for="(country, index) in countries"
                    :key="index"
                    :value="country.country"
                  >
                    {{ country.country }}
                  </option>
                </select>
              </div>
              <div class="w-100 mb-3">
                <label for="exampleInputEmail1" class="form-label mb-0"
                  >State</label
                >
                <span id="required">*</span>
                <select
                  v-model="inputData.state"
                  class="form-select"
                  aria-label="Default select example"
                  required
                >
                  <option
                    v-for="(state, index) in selectStateByCountry"
                    :key="index"
                  >
                    {{ state }}
                  </option>
                </select>
              </div>
              <div class="crop_details">Product image</div>
              <div class="dropzone_conatiner my-4">
                <div id="my-dropzone" class="dropzone">
                  <img id="preview-selected-image" class="img-fluid mb-2" />
                  <img
                    src="@/assets/images/vectors/Image.svg"
                    alt="image"
                    id="image_icon"
                  />
                  <div id="file-input">
                    <input
                      id="hidden_input"
                      ref="input"
                      type="file"
                      multiple
                      accept="image/*"
                      @change="uploadFile"
                      required
                    />

                    <span
                      id="file_name"
                      v-if="fileName == ''"
                      @click="openFileDialog()"
                      >click to browse</span
                    >

                    <span v-else>{{ fileName }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button :class="['btn', 'btn-primary', 'my-4']">save</button>
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
  components: {
    DefaultNav,
  },
  props: {
    modelValue: {
      type: String,
      default: "",
    },
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
        liters: "",
        description: "",
        currency: "",
        manufacture_name: "",
        manufacture_date: "",
        delivery_method: "",
        expiry_date: "",
        state: "",
        country: "",
        video: "",
        manufacture_country: "",
      },
      currencies: ["USD", "EUR", "GBP", "NGN"],
      countries: countriesObject.countries,
    };
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
    openFileDialog() {
      document.getElementById("hidden_input").click();
    },
    async saveData() {
      // send data to the end-poit
      await MarketPlaceService.saveInput(this.inputData, (response) => {
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
    uploadFile() {
      const input = document.querySelector("#hidden_input");
      const file = input.files;
      this.newCropData.files = file;

      // get the file name
      this.fileName = file[0].name;

      // preview the image

      // if at least one image is selected proceed to display the image
      if (file[0]) {
        // get the image path
        const imageSrc = URL.createObjectURL(file[0]);
        // select the image preview element
        const imagePreviewElement = document.querySelector(
          "#preview-selected-image"
        );
        // assign the path to the image preview element
        imagePreviewElement.src = imageSrc;
        imagePreviewElement.style.display = "block";
        // hide sibling img element
        document.getElementById("image_icon").style.display = "none";
      }
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

// using drop-zone
.dropzone {
  width: 100%;
  min-height: 250px;
  border: 2px dashed #ccc;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Maven Pro";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 147%;
  color: #4a4754;
  padding: 10px 10px 15px 10px;

  span {
    font-weight: 700;
    color: #05b050;
    cursor: pointer;

    + span {
      font-size: 14px;
    }
  }
}

#required {
  color: red;
  font-family: "Maven Pro";
  font-weight: bolder;
  font-size: 20px;
}

.zone {
  height: 150px;
  font-size: 12px;
}

#hidden_input {
  display: none;
}
</style>
