<template>
  <div class="crop-wanted-section d-flex flex-row gap-4">
    <div class="form">
      <!-- input -->
      <div class="w-100 mb-3">
        <label for="exampleInputEmail1" class="form-label mb-0"
          >Which of these machines are you using on your farm land before</label
        >
        <select class="form-select" aria-label="Default select example">
          <option selected>Select option</option>
          <option value="1">One</option>
        </select>
      </div>
      <!-- input -->
      <div class="w-100 mb-3">
        <label for="exampleInputEmail1" class="form-label mb-0"
          >Has the machine been of advantage to you this planting season
          compared to last season?
        </label>
        <select class="form-select" aria-label="Default select example">
          <option selected>Select option</option>
          <option value="1">One</option>
        </select>
      </div>
      <!-- input -->
      <div class="w-100 mb-3">
        <label for="exampleInputEmail1" class="form-label mb-0"
          >Would you advise other farmers to use machines instead of hired
          labour?
        </label>
        <select class="form-select" aria-label="Default select example">
          <option selected>Select option</option>
          <option value="1">One</option>
        </select>
      </div>
      <div class="w-100 mb-3">
        <label for="exampleInputEmail1" class="form-label mb-0"
          >What other machines would you find needful apart from the ones you
          have access to presently?
        </label>
        <select class="form-select" aria-label="Default select example">
          <option selected>Select option</option>
          <option value="1">One</option>
        </select>
      </div>
      <div class="w-100 mb-3">
        <label for="exampleInputEmail1" class="form-label mb-0"
          >With the use of machines are you encourage to acquire more farm lands
          for farming?
        </label>
        <select class="form-select" aria-label="Default select example">
          <option selected>Select option</option>
          <option value="1">One</option>
        </select>
      </div>
      <div class="w-100 mb-3">
        <label for="exampleInputEmail1" class="form-label mb-0"
          >What is the percentage of cost saved from labour with the use of
          machine?
        </label>
        <select class="form-select" aria-label="Default select example">
          <option selected>Select option</option>
          <option value="1">One</option>
        </select>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Mechanization",
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
