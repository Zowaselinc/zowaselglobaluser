<template>
  <div class="crop-wanted-section d-flex flex-row gap-4">
    <div class="form">
      <!-- input -->
      <div class="w-100 mb-3">
        <label for="exampleInputEmail1" class="form-label mb-0"
          >What crop(s) do you cultivate?</label
        >
        <input
          type="text"
          class="form-control"
          required
          placeholder="Enter your answer"
        />
      </div>
      <!-- input -->
      <div class="d-flex gap-3">
        <!-- input -->
        <div class="w-100 mb-3">
          <label for="exampleInputEmail1" class="form-label mb-0"
            >What is the cost of cultivating your crop(s)?</label
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
            >Do you grow or raise your crop?
          </label>
          <select class="form-select" aria-label="Default select example">
            <option selected>Select option</option>
            <option value="1">One</option>
          </select>
        </div>
      </div>
      <div class="d-flex gap-3">
        <!-- input -->
        <div class="w-100 mb-3">
          <label for="exampleInputEmail1" class="form-label mb-0"
            >What Type of fertilizers do you use for your oil palm?
          </label>
          <select class="form-select" aria-label="Default select example">
            <option selected>Select option</option>
            <option value="1">One</option>
          </select>
        </div>
        <!-- input -->
        <div class="w-100 mb-3">
          <label for="exampleInputEmail1" class="form-label mb-0"
            >What type of fertilizers do you use for your cocoa?
          </label>
          <select class="form-select" aria-label="Default select example">
            <option selected>Select option</option>
            <option value="1">One</option>
          </select>
        </div>
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
      <div class="d-flex gap-3">
        <!-- input -->
        <div class="w-100 mb-3">
          <label for="exampleInputEmail1" class="form-label mb-0"
            >What do you use for pests, fungi and disease management?
          </label>
          <select class="form-select" aria-label="Default select example">
            <option selected>Select option</option>
            <option value="1">One</option>
          </select>
        </div>
        <!-- input -->
        <div class="w-100 mb-3">
          <label for="exampleInputEmail1" class="form-label mb-0">
            Name of Pesticide/Brand, Name of Fungicide/Brand, Name of
            Herbicide/Brand
          </label>
          <select class="form-select" aria-label="Default select example">
            <option selected>Select option</option>
            <option value="1">One</option>
          </select>
        </div>
      </div>
      <!-- input -->
      <div class="w-100 mb-3">
        <label for="exampleInputEmail1" class="form-label mb-0"
          >At what stages from cultivation to Harverst do you apply
          agrochemicals in 12 months on your farmland?</label
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
          >How many drums of oil do you get from your farm both season and off
          season from your oil palm farm? (March - June)
        </label>
        <input
          type="text"
          class="form-control"
          required
          placeholder="Enter your answer"
        />
      </div>
      <div class="w-100 mb-3">
        <label for="exampleInputEmail1" class="form-label mb-0"
          >How many drums of oil do you get from your farm both season and off
          season from your oil palm farm? (August - December)
        </label>
        <input
          type="text"
          class="form-control"
          required
          placeholder="Enter your answer"
        />
      </div>
      <div class="w-100 mb-3">
        <label for="exampleInputEmail1" class="form-label mb-0"
          >How many bags of Sesame crops do you get from your farm both in
          season and off season?
        </label>
        <input
          type="text"
          class="form-control"
          required
          placeholder="Enter your answer"
        />
      </div>
      <div class="w-100 mb-3">
        <label for="exampleInputEmail1" class="form-label mb-0"
          >How many bags of Soya beans crops do you get from your farm both in
          season and off season?
        </label>
        <input
          type="text"
          class="form-control"
          required
          placeholder="Enter your answer"
        />
      </div>
      <div class="w-100 mb-3">
        <label for="exampleInputEmail1" class="form-label mb-0"
          >How many bags of Maize crops do you get from your farm both in season
          and off season?
        </label>
        <input
          type="text"
          class="form-control"
          required
          placeholder="Enter your answer"
        />
      </div>
      <div class="w-100 mb-3">
        <label for="exampleInputEmail1" class="form-label mb-0"
          >How many bags of Sorghum crops do you get from your farm both in
          season and off season?
        </label>
        <input
          type="text"
          class="form-control"
          required
          placeholder="Enter your answer"
        />
      </div>
      <div class="w-100 mb-3">
        <label for="exampleInputEmail1" class="form-label mb-0"
          >How many bags of cocoa beans do you get from your farm both season
          and off season from your cocoa farm? (September - December)
        </label>
        <input
          type="text"
          class="form-control"
          required
          placeholder="Enter your answer"
        />
      </div>
      <div class="w-100 mb-3">
        <label for="exampleInputEmail1" class="form-label mb-0"
          >How many bags of cocoa beans do you get from your farm both season
          and off season from your cocoa farm? (January - February)
        </label>
        <input
          type="text"
          class="form-control"
          required
          placeholder="Enter your answer"
        />
      </div>
      <div class="w-100 mb-3">
        <label for="exampleInputEmail1" class="form-label mb-0"
          >How many bags of cocoa beans do you get from your farm both season
          and off season from your cocoa farm? (April - October)
        </label>
        <input
          type="text"
          class="form-control"
          required
          placeholder="Enter your answer"
        />
      </div>
      <div class="w-100 mb-3">
        <label for="exampleInputEmail1" class="form-label mb-0"
          >For which crop have you been trained best management practice?
        </label>
        <input
          type="text"
          class="form-control"
          required
          placeholder="Enter your answer"
        />
      </div>
      <div class="d-flex gap-3">
        <!-- input -->
        <div class="w-100 mb-3">
          <label for="exampleInputEmail1" class="form-label mb-0"
            >If any, when, where and by whom?
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
          <label for="exampleInputEmail1" class="form-label mb-0">
            How many times in 12 months?
          </label>
          <select class="form-select" aria-label="Default select example">
            <option selected>Select option</option>
            <option value="1">One</option>
          </select>
        </div>
      </div>
      <div class="w-100 mb-3">
        <label for="exampleInputEmail1" class="form-label mb-0"
          >How many times do you prune your crop in 12 Month?
        </label>
        <select class="form-select" aria-label="Default select example">
          <option selected>Select option</option>
          <option value="1">One</option>
        </select>
      </div>
      <div class="w-100 mb-3">
        <label for="exampleInputEmail1" class="form-label mb-0"
          >In connection with your crop(s), what are the problems you have had
          in the past 12months?</label
        >
        <textarea
          class="form-control"
          rows="5"
          placeholder="Enter your answer"
        ></textarea>
      </div>
      <div class="d-flex gap-3">
        <!-- input -->
        <div class="w-100 mb-3">
          <label for="exampleInputEmail1" class="form-label mb-0"
            >Do you have any crop too young to produce?
          </label>
          <select class="form-select" aria-label="Default select example">
            <option selected>Select option</option>
            <option value="1">One</option>
          </select>
        </div>
        <!-- input -->
        <div class="w-100 mb-3">
          <label for="exampleInputEmail1" class="form-label mb-0">
            If Yes, what crop and what is their stage now?
          </label>
          <select class="form-select" aria-label="Default select example">
            <option selected>Select option</option>
            <option value="1">One</option>
          </select>
        </div>
      </div>
      <div class="d-flex gap-3">
        <!-- input -->
        <div class="w-100 mb-3">
          <label for="exampleInputEmail1" class="form-label mb-0"
            >When did you start cultivating this crop?
          </label>
          <select class="form-select" aria-label="Default select example">
            <option selected>Select option</option>
            <option value="1">One</option>
          </select>
        </div>
        <!-- input -->
        <div class="w-100 mb-3">
          <label for="exampleInputEmail1" class="form-label mb-0">
            Do you practice intensive farming?
          </label>
          <select class="form-select" aria-label="Default select example">
            <option selected>Select option</option>
            <option value="1">One</option>
          </select>
        </div>
      </div>
      <div class="w-100 mb-3">
        <label for="exampleInputEmail1" class="form-label mb-0"
          >What economy activity can you point out in your community as a result
          of your farming activities?
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
  name: "ProductivityViability",
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
