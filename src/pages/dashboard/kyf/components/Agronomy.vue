<template>
  <div class="crop-wanted-section d-flex flex-row gap-4">
    <div class="form">
      <!-- input -->
      <div class="w-100 mb-3">
        <label for="exampleInputEmail1" class="form-label mb-0"
          >Do you now know agricultural processes to apply in order to attain
          better agricultural products
        </label>
        <select class="form-select" aria-label="Default select example">
          <option selected>Select option</option>
          <option value="1">One</option>
        </select>
      </div>
      <!-- input -->
      <div class="d-flex gap-3">
        <!-- input -->
        <div class="w-100 mb-3">
          <label for="exampleInputEmail1" class="form-label mb-0"
            >Which of our agronomist trained you?</label
          >
          <select class="form-select" aria-label="Default select example">
            <option selected>Select option</option>
            <option value="1">One</option>
          </select>
        </div>
        <!-- input -->
        <div class="w-100 mb-3">
          <label for="exampleInputEmail1" class="form-label mb-0"
            >Can you farm and manage ecosystems to develop better land and soil
            texture?
          </label>
          <select class="form-select" aria-label="Default select example">
            <option selected>Select option</option>
            <option value="1">One</option>
          </select>
        </div>
      </div>
      <div class="w-100 mb-3">
        <label for="exampleInputEmail1" class="form-label mb-0"
          >If Yes, how?</label
        >
        <select class="form-select" aria-label="Default select example">
          <option selected>Select option</option>
          <option value="1">One</option>
        </select>
      </div>
      <div class="w-100 mb-3">
        <label for="exampleInputEmail1" class="form-label mb-0"
          >Has several trainning from Zowasel being beneficial to you on the use
          of fertilizers, and pesticides on your crop(s)?</label
        >
        <select class="form-select" aria-label="Default select example">
          <option selected>Select option</option>
          <option value="1">One</option>
        </select>
      </div>
      <div class="w-100 mb-3">
        <label for="exampleInputEmail1" class="form-label mb-0"
          >What crop(s) do you cultivate?</label
        >
        <textarea
          class="form-control"
          rows="5"
          placeholder="Enter your answer"
        ></textarea>
      </div>
      <div class="w-100 mb-3">
        <label for="exampleInputEmail1" class="form-label mb-0"
          >Has provision and usage of crop calender to track dates and frequency
          of weeding being of benerits to you?</label
        >
        <select class="form-select" aria-label="Default select example">
          <option selected>Select option</option>
          <option value="1">One</option>
        </select>
      </div>
      <div class="w-100 mb-3">
        <label for="exampleInputEmail1" class="form-label mb-0"
          >If yes, how?</label
        >
        <textarea
          class="form-control"
          rows="5"
          placeholder="Enter your answer"
        ></textarea>
      </div>
      <div class="w-100 mb-3">
        <label for="exampleInputEmail1" class="form-label mb-0"
          >State the benefits of having farm record book and keeping farm
          record.</label
        >
        <textarea
          class="form-control"
          rows="5"
          placeholder="Enter your answer"
        ></textarea>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Agronomy",
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
    @include textStyles("Poppins", 700, 18px, 24px);
    letter-spacing: 0.01em;
    color: #4a4754;
    margin-bottom: 1rem;
  }

  .m_top {
    margin-top: 3rem;
    margin-bottom: 2rem;
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
</style>
