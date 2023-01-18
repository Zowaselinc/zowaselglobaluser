<template>
  <div class="crop-wanted-section d-flex flex-row gap-4">
    <div class="form">
      <div class="crop_details">Company details</div>

      <div class="d-flex gap-3">
        <!-- input -->
        <div class="w-100 mb-3">
          <label for="exampleInputEmail1" class="form-label mb-0"
            >Are you in a farmer group/Cooperative?</label
          >
          <select class="form-select" aria-label="Default select example">
            <option selected>Select option</option>
            <option value="1">One</option>
          </select>
        </div>
        <!-- input -->
        <div class="w-100 mb-3">
          <label for="exampleInputEmail1" class="form-label mb-0"
            >If No, why?</label
          >
          <input
            type="text"
            class="form-control"
            required
            placeholder="Enter reason"
          />
        </div>
      </div>
      <!-- input -->
      <div class="w-100 mb-3">
        <label for="exampleInputEmail1" class="form-label mb-0"
          >Name of farmer group/Cooperative?</label
        >
        <input
          type="text"
          class="form-control"
          required
          placeholder="Enter Name of farmer group/Cooperative?"
        />
      </div>
      <!-- input -->
      <div class="w-100 mb-3">
        <label for="exampleInputEmail1" class="form-label mb-0"
          >How many members are there in your farmer group/cooperative?</label
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
            >Means of identification</label
          >
          <select class="form-select" aria-label="Default select example">
            <option selected>Select option</option>
            <option value="1">One</option>
          </select>
        </div>
        <!-- input -->
        <div class="w-100 mb-3">
          <label for="exampleInputEmail1" class="form-label mb-0"
            >Identification number (NIN, International passport, TIN,
            etc)</label
          >
          <input
            type="text"
            class="form-control"
            required
            placeholder="Enter Identification number"
          />
        </div>
      </div>
      <div class="d-flex gap-3">
        <!-- input -->
        <div class="w-100 mb-3">
          <label for="exampleInputEmail1" class="form-label mb-0"
            >Issue date</label
          >
          <input type="date" class="form-control" required />
        </div>
        <!-- input -->
        <div class="w-100 mb-3">
          <label for="exampleInputEmail1" class="form-label mb-0"
            >IExpiry date</label
          >
          <input type="date" class="form-control" required />
        </div>
      </div>
      <!-- input -->
      <div class="w-100 mb-3">
        <label for="exampleInputEmail1" class="form-label mb-0"
          >Permanent address</label
        >
        <input
          type="text"
          class="form-control"
          required
          placeholder="Enter your permanent address"
        />
      </div>
      <!-- input -->
      <div class="w-100 mb-3">
        <label for="exampleInputEmail1" class="form-label mb-0"
          >Nearest market or church/mosque townhall</label
        >
        <input
          type="text"
          class="form-control"
          required
          placeholder="Enter your permanent address"
        />
      </div>

      <!-- Farmer Details Sections -->
      <div class="crop_details m_top">Bank details</div>
      <!-- input -->
      <div class="w-100 mb-3">
        <label for="exampleInputEmail1" class="form-label mb-0"
          >Bank name</label
        >
        <input
          type="text"
          class="form-control"
          required
          placeholder="Enter Bank name"
        />
      </div>
      <!-- input -->
      <div class="w-100 mb-3">
        <label for="exampleInputEmail1" class="form-label mb-0"
          >Account name</label
        >
        <input
          type="text"
          class="form-control"
          required
          placeholder="Enter Account name"
        />
      </div>
      <!-- input -->
      <div class="d-flex gap-3">
        <!-- input -->

        <div class="w-100 mb-3">
          <label for="exampleInputEmail1" class="form-label mb-0"
            >Account number</label
          >
          <input
            type="tel"
            class="form-control"
            required
            placeholder="Enter your Account number"
          />
        </div>
        <!-- input -->
        <div class="w-100 mb-3">
          <label for="exampleInputEmail1" class="form-label mb-0">BVN</label>
          <input
            type="text"
            class="form-control"
            required
            placeholder="Enter your BVN"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CompanyDetails",
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
