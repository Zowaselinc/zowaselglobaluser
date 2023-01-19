<template>
  <div class="crop-wanted-section d-flex flex-row gap-4">
    <div class="form">
      <!-- input -->
      <div class="w-100 mb-3">
        <label for="exampleInputEmail1" class="form-label mb-0"
          >Have you taken a loan before?</label
        >
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
            >Where did you get it?</label
          >
          <input
            type="text"
            class="form-control"
            required
            placeholder="Enter your answer"
          />
        </div>
        <!-- input -->
        <div class="w-100 mb-3">
          <label for="exampleInputEmail1" class="form-label mb-0"
            >What was the amount?</label
          >
          <input
            type="text"
            class="form-control"
            required
            placeholder="Enter your answer"
          />
        </div>
      </div>
      <!-- input -->
      <div class="w-100 mb-3">
        <label for="exampleInputEmail1" class="form-label mb-0"
          >How did you manage to pay back/reimburse?</label
        >
        <select class="form-select" aria-label="Default select example">
          <option selected>Select option</option>
          <option value="1">One</option>
        </select>
      </div>
      <!-- input -->
      <div class="w-100 mb-3">
        <label for="exampleInputEmail1" class="form-label mb-0"
          >Would you be ready to pay any interest if given a loan?</label
        >
        <select class="form-select" aria-label="Default select example">
          <option selected>Select option</option>
          <option value="1">One</option>
        </select>
      </div>

      <!-- input -->
      <div class="w-100 mb-3">
        <label for="exampleInputEmail1" class="form-label mb-0"
          >Would you be ready and able, to provide any collateral?</label
        >
        <select class="form-select" aria-label="Default select example">
          <option selected>Select option</option>
          <option value="1">One</option>
        </select>
      </div>
      <!-- input -->
      <div class="w-100 mb-3">
        <label for="exampleInputEmail1" class="form-label mb-0"
          >If not, why?</label
        >
        <input
          type="text"
          class="form-control"
          required
          placeholder="Enter your answer"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CreditHistory",
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
