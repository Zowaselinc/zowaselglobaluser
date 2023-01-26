<template>
  <div class="main_container">
    <!-- new crop  wanted form-->
    <div class="crop-wanted-section d-flex flex-row gap-4">
      <div class="form">
        <div class="crop_details">Crop Details</div>
        <div class="w-100 mb-3">
          <label for="exampleInputEmail1" class="form-label mb-0"
            >Crop Category</label
          >
          <span id="required">*</span>
          <select
            v-model="cropData.category_id"
            class="form-select"
            aria-label="Default seglect example"
            required
          >
            <option
              v-for="category in categories"
              :key="category.id"
              :value="category.id"
            >
              {{ category.name }}
            </option>
          </select>
        </div>
        <div class="w-100 mb-3">
          <label for="exampleInputEmail1" class="form-label mb-0"
            >Product sub category</label
          >
          <span id="required">*</span>
          <select
            v-model="cropData.subcategory_id"
            class="form-select"
            aria-label="Default select example"
            required
          >
            <option
              v-for="subCategory in subCategoryByCategory"
              :key="subCategory.id"
              :value="subCategory.id"
            >
              {{ subCategory.name }}
            </option>
          </select>
        </div>
        <div class="w-100 mb-3">
          <label for="exampleInputEmail1" class="form-label mb-0"
            >Product Color</label
          >
          <span id="required">*</span>
          <select
            v-model="cropData.color"
            class="form-select"
            aria-label="Default select example"
            required
          >
            <option v-for="color in colors" :key="color" :value="color">
              {{ color }}
            </option>
          </select>
        </div>
        <div class="w-100 mb-3">
          <label for="exampleInputEmail1" class="form-label mb-0"
            >Moisture content (MC)</label
          >
          <span id="required">*</span>
          <select
            v-model="cropData.moisture_content"
            class="form-select"
            aria-label="Default select example"
            required
          >
            <option v-for="item in 100" :key="item" :value="item">
              {{ item }}%
            </option>
          </select>
        </div>
        <div class="w-100 mb-3">
          <label for="exampleInputEmail1" class="form-label mb-0"
            >Forieign Matter (FM)</label
          >
          <span id="required">*</span>
          <select
            v-model="cropData.foreign_matter"
            class="form-select"
            aria-label="Default select example"
            required
          >
            <option v-for="item in 100" :key="item" :value="item">
              {{ item }}%
            </option>
          </select>
        </div>
        <div class="w-100 mb-3">
          <label for="exampleInputEmail1" class="form-label mb-0"
            >Test weight</label
          >
          <span id="required">*</span>
          <select
            v-model="cropData.test_weight"
            class="form-select"
            aria-label="Default select example"
            required
          >
            <option value="kg">KG</option>
            <option value="mt">MT</option>
          </select>
        </div>
        <div class="w-100 mb-3">
          <label for="exampleInputEmail1" class="form-label mb-0"
            >Negotiable</label
          >
          <span id="required">*</span>
          <select
            v-model="cropData.is_negotiable"
            class="form-select"
            aria-label="Default select example"
            required
          >
            <option value="1">Yes</option>
            <option value="0">No</option>
          </select>
        </div>
      </div>
      <div class="vertical-line" />
      <!-- form two -->
      <div class="form">
        <!-- Editor -->
        <div class="crop_details">Quality description</div>
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
            v-model="cropData.currency"
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
      </div>
    </div>
  </div>
</template>

<script>
import Quill from "quill";
import "quill/dist/quill.core.css";
import "quill/dist/quill.bubble.css";
import "quill/dist/quill.snow.css";
import MarketPlaceService from "@/services/marketplace";

export default {
  name: "CropDetails",
  props: {
    modelValue: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      editor: null,
      categories: [],
      subCategories: [],
      cropData: {
        category_id: "",
        subcategory_id: "",
        color: "",
        foreign_matter: "",
        moisture_content: "",
        test_weight: "",
        is_negotiable: "",
        currency: "",
        description: "",
      },
      colors: ["red", "green", "blue"],
      currencies: ["NGN"],
    };
  },
  computed: {
    subCategoryByCategory() {
      return this.subCategories.filter(
        (item) => item.category_id == this.cropData.category_id
      );
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
    this.getCategory();
    this.getSubCategory();
  },
  methods: {
    update: function update() {
      this.$emit(
        "update:modelValue",
        this.editor.getText() ? this.editor.root.innerHTML : ""
      );
    },
    getCategory() {
      MarketPlaceService.getCropCategories((response) => {
        console.log(response);
        this.categories = response.data;
      });
    },
    getSubCategory() {
      MarketPlaceService.getSubCategories((response) => {
        console.log(response);
        this.subCategories = response.data;
      });
    },

    handleContentChange() {
      this.cropData.description = this.editor.root.innerHTML;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";

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
    margin-top: 3.4rem;
  }

  width: 100%;
  padding-bottom: 2rem;

  select,
  input {
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
  #required {
    color: red;
    font-family: "Maven Pro";
    font-weight: bolder;
    font-size: 20px;
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
    min-height: 50vh;
  }
}
</style>
