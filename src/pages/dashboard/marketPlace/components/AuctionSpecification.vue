<template>
  <div class="main_container">
    <!-- new crop  wanted form-->
    <div class="crop-wanted-section d-flex flex-row gap-4">
      <form>
        <div class="crop_details">Crop Specification</div>

        <div class="w-100 mb-3">
          <label for="exampleInputEmail1" class="form-label mb-0"
            >Broken grains</label
          >
          <select
            class="form-select"
            aria-label="Default select example"
            required
          >
            <option selected>Select</option>
          </select>
        </div>
        <div class="w-100 mb-3">
          <label for="exampleInputEmail1" class="form-label mb-0">Weevil</label>
          <select
            class="form-select"
            aria-label="Default select example"
            required
          >
            <option selected>Select</option>
          </select>
        </div>
        <div class="w-100 mb-3">
          <label for="exampleInputEmail1" class="form-label mb-0"
            >Hardness</label
          >
          <select
            class="form-select"
            aria-label="Default select example"
            required
          >
            <option selected>Select</option>
          </select>
        </div>
        <div class="w-100 mb-3">
          <label for="exampleInputEmail1" class="form-label mb-0"
            >Oil Content</label
          >
          <select
            class="form-select"
            aria-label="Default select example"
            required
          >
            <option selected>Select</option>
          </select>
        </div>
        <div class="w-100 mb-3">
          <label for="exampleInputEmail1" class="form-label mb-0"
            >Grain Size</label
          >
          <select
            class="form-select"
            aria-label="Default select example"
            required
          >
            <option selected>Select</option>
          </select>
        </div>
        <div class="w-100 mb-3">
          <label for="exampleInputEmail1" class="form-label mb-0"
            >Total Defects</label
          >
          <select
            class="form-select"
            aria-label="Default select example"
            required
          >
            <option selected>Select</option>
          </select>
        </div>
        <div class="w-100 mb-3">
          <label for="exampleInputEmail1" class="form-label mb-0"
            >Ash Content</label
          >
          <select
            class="form-select"
            aria-label="Default select example"
            required
          >
            <option selected>Select</option>
          </select>
        </div>
        <div class="w-100 mb-3">
          <label for="exampleInputEmail1" class="form-label mb-0"
            >volatile</label
          >
          <select
            class="form-select"
            aria-label="Default select example"
            required
          >
            <option selected>Select</option>
          </select>
        </div>
        <div class="w-100 mb-3">
          <label for="exampleInputEmail1" class="form-label mb-0"
            >Drying Process</label
          >
          <select
            class="form-select"
            aria-label="Default select example"
            required
          >
            <option selected>Select</option>
          </select>
        </div>
        <div class="w-100 mb-3">
          <label for="exampleInputEmail1" class="form-label mb-0"
            >Curcumin Content</label
          >
          <select
            class="form-select"
            aria-label="Default select example"
            required
          >
            <option selected>Select</option>
          </select>
        </div>
      </form>

      <div class="vertical-line" />
      <!-- form two -->
      <form>
        <div class="w-100 mb-3 m_top">
          <label for="exampleInputEmail1" class="form-label mb-0"
            >Rotten/Shriveled</label
          >
          <select
            class="form-select"
            aria-label="Default select example"
            required
          >
            <option selected>Select</option>
          </select>
        </div>
        <div class="w-100 mb-3">
          <label for="exampleInputEmail1" class="form-label mb-0"
            >Damaged kernel(DK)</label
          >
          <select
            class="form-select"
            aria-label="Default select example"
            required
          >
            <option selected>Select</option>
          </select>
        </div>
        <div class="w-100 mb-3">
          <label for="exampleInputEmail1" class="form-label mb-0">Splits</label>
          <select
            class="form-select"
            aria-label="Default select example"
            required
          >
            <option selected>Select</option>
          </select>
        </div>
        <div class="w-100 mb-3">
          <label for="exampleInputEmail1" class="form-label mb-0"
            >Infestation</label
          >
          <select
            class="form-select"
            aria-label="Default select example"
            required
          >
            <option selected>Select</option>
          </select>
        </div>
        <div class="w-100 mb-3">
          <label for="exampleInputEmail1" class="form-label mb-0"
            >Hectolter Teat Weight</label
          >
          <select
            class="form-select"
            aria-label="Default select example"
            required
          >
            <option selected>Select</option>
          </select>
        </div>
        <div class="w-100 mb-3">
          <label for="exampleInputEmail1" class="form-label mb-0"
            >Acid Insoluable Ash</label
          >
          <select
            class="form-select"
            aria-label="Default select example"
            required
          >
            <option selected>Select</option>
          </select>
        </div>
        <div class="w-100 mb-3">
          <label for="exampleInputEmail1" class="form-label mb-0"
            >Mold % By Weight</label
          >
          <select
            class="form-select"
            aria-label="Default select example"
            required
          >
            <option selected>Select</option>
          </select>
        </div>
        <div class="w-100 mb-3">
          <label for="exampleInputEmail1" class="form-label mb-0"
            >Whole Dead Insects</label
          >
          <select
            class="form-select"
            aria-label="Default select example"
            required
          >
            <option selected>Select</option>
          </select>
        </div>
        <div class="w-100 mb-3">
          <label for="exampleInputEmail1" class="form-label mb-0"
            >Insect Defiled/Infested, By Weight</label
          >
          <select
            class="form-select"
            aria-label="Default select example"
            required
          >
            <option selected>Select</option>
          </select>
        </div>
        <div class="w-100 mb-3">
          <label for="exampleInputEmail1" class="form-label mb-0"
            >Extraneous, % By Weight</label
          >
          <select
            class="form-select"
            aria-label="Default select example"
            required
          >
            <option selected>Select</option>
          </select>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "AuctionSpecification",
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";

.crop-wanted-section {
  background: #ffffff;
  border-radius: 4px;
  padding: 4%;
}

form {
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

  select {
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
</style>
