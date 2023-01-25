<template>
  <div class="crop-wanted-section d-flex flex-row gap-4">
    <div class="form">
      <!-- input -->
      <div class="d-flex gap-3">
        <!-- input -->
        <div class="w-100 mb-3">
          <label for="exampleInputEmail1" class="form-label mb-0"
            >How long have you been farming?</label
          >
          <select class="form-select" aria-label="Default select example">
            <option selected>Select option</option>
            <option value="1">One</option>
          </select>
        </div>
        <!-- input -->
        <div class="w-100 mb-3">
          <label for="exampleInputEmail1" class="form-label mb-0"
            >Have you participated in any agricultural training?
          </label>
          <select class="form-select" aria-label="Default select example">
            <option selected>Select option</option>
            <option value="1">One</option>
          </select>
        </div>
      </div>
      <div class="w-100 mb-3">
        <label for="exampleInputEmail1" class="form-label mb-0"
          >What type of farming do you practice?
        </label>
        <select class="form-select" aria-label="Default select example">
          <option selected>Select option</option>
          <option value="1">One</option>
        </select>
      </div>
      <div class="w-100 mb-3">
        <label for="exampleInputEmail1" class="form-label mb-0"
          >Apart from crops do you keep animals?
        </label>
        <select class="form-select" aria-label="Default select example">
          <option selected>Select option</option>
          <option value="1">One</option>
        </select>
      </div>
      <div class="w-100 mb-3">
        <label for="exampleInputEmail1" class="form-label mb-0"
          >Are you a member of any group (farmers’ cooperative)?
        </label>
        <select class="form-select" aria-label="Default select example">
          <option selected>Select option</option>
          <option value="1">One</option>
        </select>
      </div>
      <!-- input -->
      <div class="w-100 mb-3">
        <label for="exampleInputEmail1" class="form-label mb-0"
          >If yes, name of the group</label
        >
        <input
          type="text"
          class="form-control"
          required
          placeholder="Enter your answer"
        />
      </div>
      <div class="w-100 mb-3">
        <label for="exampleInputEmail1" class="form-label mb-0"
          >Educational level of the farmer
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
  name: "FarmCapacity",
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
