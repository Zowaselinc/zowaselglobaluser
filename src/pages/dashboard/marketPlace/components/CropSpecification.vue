<template>
  <div class="main_container">
    <!-- new crop  wanted form-->
    <div class="crop-wanted-section d-flex flex-row gap-4">
      <div class="form">
        <div class="crop_details">Crop Specification</div>

        <div class="w-100 mb-3">
          <label for="exampleInputEmail1" class="form-label mb-0"
            >Broken grains</label
          >
          <span id="required">-optional</span>

          <select
            v-model="cropSpecificationData.broken_grains"
            class="form-select"
          >
            <option v-for="item in 100" :key="item" :value="item">
              {{ item }}%
            </option>
          </select>
        </div>
        <div class="w-100 mb-3">
          <label for="exampleInputEmail1" class="form-label mb-0">Weevil</label>
          <span id="required">-optional</span>
          <select v-model="cropSpecificationData.weevil" class="form-select">
            <option v-for="item in 100" :key="item" :value="item">
              {{ item }}%
            </option>
          </select>
        </div>
        <div class="w-100 mb-3">
          <label for="exampleInputEmail1" class="form-label mb-0"
            >Hardness</label
          >
          <span id="required">-optional</span>
          <select v-model="cropSpecificationData.hardness" class="form-select">
            <option v-for="item in 100" :key="item" :value="item">
              {{ item }}%
            </option>
          </select>
        </div>
        <div class="w-100 mb-3">
          <label for="exampleInputEmail1" class="form-label mb-0"
            >Oil Content</label
          >
          <span id="required">-optional</span>
          <select
            v-model="cropSpecificationData.oil_content"
            class="form-select"
          >
            <option v-for="item in 100" :key="item" :value="item">
              {{ item }}%
            </option>
          </select>
        </div>
        <div class="w-100 mb-3">
          <label for="exampleInputEmail1" class="form-label mb-0"
            >Grain Size</label
          >
          <span id="required">-optional</span>
          <select
            v-model="cropSpecificationData.grain_size"
            class="form-select"
          >
            <option v-for="item in 100" :key="item" :value="item">
              {{ item }}%
            </option>
          </select>
        </div>
        <div class="w-100 mb-3">
          <label for="exampleInputEmail1" class="form-label mb-0"
            >Total Defects</label
          >
          <span id="required">-optional</span>
          <select
            v-model="cropSpecificationData.total_defects"
            class="form-select"
          >
            <option v-for="item in 100" :key="item" :value="item">
              {{ item }}%
            </option>
          </select>
        </div>
        <div class="w-100 mb-3">
          <label for="exampleInputEmail1" class="form-label mb-0"
            >Ash Content</label
          >
          <span id="required">-optional</span>
          <select
            v-model="cropSpecificationData.ash_content"
            class="form-select"
          >
            <option v-for="item in 100" :key="item" :value="item">
              {{ item }}%
            </option>
          </select>
        </div>
        <div class="w-100 mb-3">
          <label for="exampleInputEmail1" class="form-label mb-0"
            >Volatile</label
          >
          <span id="required">-optional</span>
          <select v-model="cropSpecificationData.volatile" class="form-select">
            <option v-for="item in 100" :key="item" :value="item">
              {{ item }}%
            </option>
          </select>
        </div>
        <div class="w-100 mb-3">
          <label for="exampleInputEmail1" class="form-label mb-0"
            >Drying Process</label
          >
          <span id="required">-optional</span>
          <select
            v-model="cropSpecificationData.drying_process"
            class="form-select"
          >
            <option v-for="item in 100" :key="item" :value="item">
              {{ item }}%
            </option>
          </select>
        </div>
        <div class="w-100 mb-3">
          <label for="exampleInputEmail1" class="form-label mb-0"
            >Curcumin Content</label
          >
          <span id="required">-optional</span>
          <select
            v-model="cropSpecificationData.curcumin_content"
            class="form-select"
          >
            <option v-for="item in 100" :key="item" :value="item">
              {{ item }}%
            </option>
          </select>
        </div>
        <div class="w-100 mb-3">
          <label for="exampleInputEmail1" class="form-label mb-0"
            >Dockage</label
          >
          <span id="required">-optional</span>
          <select v-model="cropSpecificationData.dockage" class="form-select">
            <option v-for="item in 100" :key="item" :value="item">
              {{ item }}%
            </option>
          </select>
        </div>
        <div class="w-100 mb-3">
          <label for="exampleInputEmail1" class="form-label mb-0"
            >Moisture</label
          >
          <span id="required">-optional</span>
          <select v-model="cropSpecificationData.moisture" class="form-select">
            <option v-for="item in 100" :key="item" :value="item">
              {{ item }}%
            </option>
          </select>
        </div>
      </div>

      <div class="vertical-line" />
      <!-- form two -->
      <div class="form">
        <div class="w-100 mb-3 m_top">
          <label for="exampleInputEmail1" class="form-label mb-0"
            >Rotten/Shriveled</label
          >
          <span id="required">-optional</span>
          <select
            v-model="cropSpecificationData.rotten_shriveled"
            class="form-select"
          >
            <option v-for="item in 100" :key="item" :value="item">
              {{ item }}%
            </option>
          </select>
        </div>
        <div class="w-100 mb-3">
          <label for="exampleInputEmail1" class="form-label mb-0"
            >Damaged kernel(DK)</label
          >
          <span id="required">-optional</span>
          <select v-model="cropSpecificationData.dk" class="form-select">
            <option v-for="item in 100" :key="item" :value="item">
              {{ item }}%
            </option>
          </select>
        </div>
        <div class="w-100 mb-3">
          <label for="exampleInputEmail1" class="form-label mb-0">Splits</label>
          <span id="required">-optional</span>
          <select v-model="cropSpecificationData.splits" class="form-select">
            <option v-for="item in 100" :key="item" :value="item">
              {{ item }}%
            </option>
          </select>
        </div>
        <div class="w-100 mb-3">
          <label for="exampleInputEmail1" class="form-label mb-0"
            >Infestation</label
          >
          <span id="required">-optional</span>
          <select
            v-model="cropSpecificationData.infestation"
            class="form-select"
          >
            <option v-for="item in 100" :key="item" :value="item">
              {{ item }}%
            </option>
          </select>
        </div>
        <div class="w-100 mb-3">
          <label for="exampleInputEmail1" class="form-label mb-0"
            >Hectolter Teat Weight</label
          >
          <span id="required">-optional</span>
          <select
            v-model="cropSpecificationData.hectoliter"
            class="form-select"
          >
            <option v-for="item in 100" :key="item" :value="item">
              {{ item }}%
            </option>
          </select>
        </div>
        <div class="w-100 mb-3">
          <label for="exampleInputEmail1" class="form-label mb-0"
            >Acid Insoluable Ash</label
          >
          <span id="required">-optional</span>
          <select v-model="cropSpecificationData.acid_ash" class="form-select">
            <option v-for="item in 100" :key="item" :value="item">
              {{ item }}%
            </option>
          </select>
        </div>
        <div class="w-100 mb-3">
          <label for="exampleInputEmail1" class="form-label mb-0"
            >Mold % By Weight</label
          >
          <span id="required">-optional</span>
          <select v-model="cropSpecificationData.mold" class="form-select">
            <option v-for="item in 100" :key="item" :value="item">
              {{ item }}%
            </option>
          </select>
        </div>
        <div class="w-100 mb-3">
          <label for="exampleInputEmail1" class="form-label mb-0"
            >Whole Dead Insects</label
          >
          <span id="required">-optional</span>
          <select
            v-model="cropSpecificationData.dead_insect"
            class="form-select"
          >
            <option v-for="item in 100" :key="item" :value="item">
              {{ item }}%
            </option>
          </select>
        </div>
        <div class="w-100 mb-3">
          <label for="exampleInputEmail1" class="form-label mb-0"
            >Insect Defiled/Infested, By Weight</label
          >
          <span id="required">-optional</span>
          <select
            v-model="cropSpecificationData.infested_by_weight"
            class="form-select"
          >
            <option v-for="item in 100" :key="item" :value="item">
              {{ item }}%
            </option>
          </select>
        </div>
        <div class="w-100 mb-3">
          <label for="exampleInputEmail1" class="form-label mb-0"
            >Extraneous, % By Weight</label
          >
          <span id="required">-optional</span>
          <select
            v-model="cropSpecificationData.extraneous"
            class="form-select"
          >
            <option v-for="item in 100" :key="item" :value="item">
              {{ item }}%
            </option>
          </select>
        </div>
        <div class="w-100 mb-3">
          <label for="exampleInputEmail1" class="form-label mb-0"
            >Mammalian</label
          >
          <span id="required">-optional</span>
          <select v-model="cropSpecificationData.mammalian" class="form-select">
            <option v-for="item in 100" :key="item" :value="item">
              {{ item }}%
            </option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CropSpecification",
  data() {
    return {
      cropSpecificationData: {
        broken_grains: "",
        weevil: "",
        hardness: "",
        oil_content: "",
        grain_size: "",
        total_defects: "",
        ash_content: "",
        volatile: "",
        drying_process: "",
        curcumin_content: "",
        rotten_shriveled: "",
        dk: "",
        splits: "",
        infestation: "",
        hectoliter: "",
        acid_ash: "",
        mold: "",
        dead_insect: "",
        mammalian: "",
        infested_by_weight: "",
        extraneous: "",
        dockage: "",
        moisture: "",
      },
    };
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
    margin-top: 2.6rem;
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
}
#required[data-v-269124fd] {
  font-family: "Maven Pro";
  font-weight: bolder;
  font-size: 14px;
  color: rgba(113, 117, 125, 0.83);
  font-style: italic;
}
div.vertical-line {
  width: 2px;
  padding: 1px;
  background: #f5f5f5;
}
</style>
