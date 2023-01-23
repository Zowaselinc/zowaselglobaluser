<template>
  <div class="crop-wanted-section d-flex flex-row gap-4">
    <div class="form">
      <!-- input -->
      <div class="w-100 mb-3">
        <label for="exampleInputEmail1" class="form-label mb-0"
          >What is the size of your farm?</label
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
            >The farmland you are cultivating is it rented?
          </label>
          <select class="form-select" aria-label="Default select example">
            <option selected>Select option</option>
            <option value="1">One</option>
          </select>
        </div>
        <!-- input -->
        <div class="w-100 mb-3">
          <label for="exampleInputEmail1" class="form-label mb-0"
            >If rented or lease for how many years?</label
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
          >Do you use machines (tractor, harvester, planter) on your
          farm?</label
        >
        <select class="form-select" aria-label="Default select example">
          <option selected>Select option</option>
          <option value="1">One</option>
        </select>
      </div>
      <!-- input -->
      <div class="w-100 mb-3">
        <label for="exampleInputEmail1" class="form-label mb-0"
          >Do you rotate crops?</label
        >
        <select class="form-select" aria-label="Default select example">
          <option selected>Select option</option>
          <option value="1">One</option>
        </select>
      </div>
      <div class="d-flex gap-3">
        <!-- input -->
        <div class="w-100 mb-3">
          <label for="exampleInputEmail1" class="form-label mb-0"
            >How many hectares can you cultivate/produce each year?
          </label>
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
            >How many times of fertilizer applications are in one cropping
            cycle?
          </label>
          <input
            type="text"
            class="form-control"
            required
            placeholder="Enter your answer"
          />
        </div>
      </div>
      <div class="d-flex gap-3">
        <!-- input -->
        <div class="w-100 mb-3">
          <label for="exampleInputEmail1" class="form-label mb-0"
            >What is the approximate fertilizer use?
          </label>
          <select class="form-select" aria-label="Default select example">
            <option selected>Select option</option>
            <option value="1">One</option>
          </select>
        </div>
        <!-- input -->
        <div class="w-100 mb-3">
          <label for="exampleInputEmail1" class="form-label mb-0"
            >How the decision for spraying is made for pest/disease?
          </label>
          <input
            type="text"
            class="form-control"
            required
            placeholder="Enter your answer"
          />
        </div>
      </div>
      <div class="w-100 mb-3">
        <label for="exampleInputEmail1" class="form-label mb-0"
          >What method of weed control do you practice?</label
        >
        <select class="form-select" aria-label="Default select example">
          <option selected>Select option</option>
          <option value="1">One</option>
        </select>
      </div>
      <div class="w-100 mb-3">
        <label for="exampleInputEmail1" class="form-label mb-0"
          >What is your estimated income per crop in harvest per season?</label
        >
        <select class="form-select" aria-label="Default select example">
          <option selected>Select option</option>
          <option value="1">One</option>
        </select>
      </div>
      <div class="w-100 mb-3">
        <label for="exampleInputEmail1" class="form-label mb-0"
          >Which crop can be well sold if production increases?</label
        >
        <select class="form-select" aria-label="Default select example">
          <option selected>Select option</option>
          <option value="1">One</option>
        </select>
      </div>
      <div class="d-flex gap-3">
        <!-- input -->
        <div class="w-100 mb-3">
          <label for="exampleInputEmail1" class="form-label mb-0"
            >Do you have a plan or a project for your farm?
          </label>
          <select class="form-select" aria-label="Default select example">
            <option selected>Select option</option>
            <option value="1">One</option>
          </select>
        </div>
        <!-- input -->
        <div class="w-100 mb-3">
          <label for="exampleInputEmail1" class="form-label mb-0">
            If yes, which project
          </label>
          <input
            type="text"
            class="form-control"
            required
            placeholder="Enter your answer"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "FarmPractice",
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
