<template>
  <div class="main_container">
    <!-- new crop  wanted form-->
    <div class="crop-wanted-section d-flex flex-row gap-4">
      <form>
        <div class="crop_details">Quantity and Pricing</div>
        <div class="w-100 mb-3">
          <label for="formGroupExampleInput" class="form-label mb-0"
            >Crop quantity</label
          >
          <input
            id="formGroupExampleInput"
            v-model="newCropData.qty"
            type="text"
            class="form-control"
            placeholder="Type your answer"
          />
        </div>
        <div class="w-100 mb-3">
          <label for="formGroupExampleInput" class="form-label mb-0"
            >Amount/offer</label
          >
          <input
            id="formGroupExampleInput"
            v-model="newCropData.price"
            type="text"
            class="form-control"
            placeholder="Type your answer"
          />
        </div>
        <div class="crop_details mb-3 mt-5">Delivery Details</div>

        <div class="w-100 mb-3">
          <label for="formGroupExampleInput" class="form-label mb-0"
            >Delivery window</label
          >
          <div class="form-row">
            <div class="col">
              <input
                id="formGroupExampleInput"
                v-model="newCropData.delivery_window.from"
                type="date"
                class="form-control"
                placeholder="Type your answer"
              />
            </div>

            <div class="col">
              <input
                id="formGroupExampleInput"
                v-model="newCropData.delivery_window.to"
                type="date"
                class="form-control"
                placeholder="Type your answer"
              />
            </div>
          </div>
        </div>
        <div class="w-100 mb-3">
          <label for="exampleInputEmail1" class="form-label mb-0"
            >Country</label
          >
          <select
            v-model="newCropData.country"
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
          <label for="exampleInputEmail1" class="form-label mb-0">State</label>
          <select
            v-model="newCropData.state"
            class="form-select"
            aria-label="Default select example"
            required
          >
            <option v-for="(state, index) in selectStateByCountry" :key="index">
              {{ state }}
            </option>
          </select>
        </div>
        <div class="w-100 mb-3">
          <label for="formGroupExampleInput" class="form-label mb-0"
            >Delivery Address</label
          >
          <input
            v-model="newCropData.address"
            type="text"
            class="form-control"
            placeholder=""
          />
        </div>
      </form>
      <div class="vertical-line" />
      <!-- form two -->
      <form>
        <div class="crop_details">Product image</div>
        <div class="dropzone_conatiner my-4">
          <div id="my-dropzone" class="dropzone">
            <img src="@/assets/images/vectors/Image.svg" alt="image" />
            <div id="file-input">
              <input
                id="hidden_input"
                ref="input"
                type="file"
                multiple
                @change="uploadFile"
              />
              <span @click="openFileDialog()">click to browse</span>
            </div>
          </div>
        </div>
        <div class="w-100">
          <label for="formGroupExampleInput" class="form-label mb-0"
            >Enter video URL</label
          >
          <input
            id="formGroupExampleInput"
            v-model="newCropData.video"
            type="text"
            class="form-control"
            placeholder="Type your answer"
          />
        </div>
        <div class="w-100 mb-3">
          <label for="exampleInputEmail1" class="form-label mb-0"
            >Zip code/postal</label
          >
          <input
            id="formGroupExampleInput"
            v-model="newCropData.zip"
            type="text"
            class="form-control"
            placeholder="Type your answer"
          />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
// import MarketPlaceService from "@/services/marketplace";
import countriesObject from "@/data/countries";

export default {
  name: "QualityProduct",
  data() {
    return {
      newCropData: {
        quantity: "10",
        price: "30",
        delivery_window: { from: "", to: "" },
        address: "sdfdsf",
        state: "",
        files: "",
        video: "sdf",
        country: "",
        zip: "232",
      },
      countries: countriesObject.countries,
    };
  },
  computed: {
    selectStateByCountry: function () {
      // console.log(this.countries)
      return this.countries && this.newCropData.country != ""
        ? this.countries.filter(
            (item) => item.country == this.newCropData.country
          )[0].states
        : [];
    },
  },
  methods: {
    openFileDialog() {
      document.getElementById("hidden_input").click();
    },
    addNewCrop() {
      MarketPlaceService.getNewCrops(this.newCropData, (response) => {
        console.log(response);
      });
    },
    uploadFile() {
      let input = document.querySelector("#hidden_input");
      let file = input.files;
      // let formData = new FormData()
      // formData.append('file', file)
      this.newCropData.files = file;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";

#hidden_input {
  display: none;
}

.crop-wanted-section {
  background: #ffffff;
  border-radius: 4px;
  padding: 4%;
}

form {
  .crop_details {
    @include textStyles(inherit, 700, 16px, 24px);
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

    &::placeholder {
      @include textStyles("Maven Pro", 700, 14px, 24px);
      color: #000000;
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

// using drop-zone
.dropzone {
  width: 100%;
  height: 300px;
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
  padding-inline: 10px;

  span {
    font-weight: 700;
    color: #05b050;
    cursor: pointer;
  }
}

.zone {
  height: 150px;
  font-size: 12px;
}

#hidden_input {
  display: none;
}
</style>
