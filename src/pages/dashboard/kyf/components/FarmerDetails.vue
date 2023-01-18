<template>
  <div class="crop-wanted-section d-flex flex-row gap-4">
    <div class="form">
      <div class="crop_details">Farmer details</div>
      <div class="d-flex gap-3">
        <!-- input -->
        <div class="w-100 mb-3">
          <label for="exampleInputEmail1" class="form-label mb-0"
            >First Name</label
          >
          <input
            type="text"
            class="form-control"
            required
            placeholder="Enter your first name"
          />
        </div>
        <!-- input -->
        <div class="w-100 mb-3">
          <label for="exampleInputEmail1" class="form-label mb-0"
            >Surname</label
          >
          <input
            type="text"
            class="form-control"
            required
            placeholder="Enter your first surname"
          />
        </div>
      </div>
      <div class="d-flex gap-3">
        <!-- input -->
        <div class="w-100 mb-3">
          <label for="exampleInputEmail1" class="form-label mb-0"
            >Middle Name</label
          >
          <input
            type="text"
            class="form-control"
            required
            placeholder="Enter your Middle name"
          />
        </div>
        <!-- input -->
        <div class="w-100 mb-3">
          <label for="exampleInputEmail1" class="form-label mb-0"
            >Date of birth</label
          >
          <input
            type="date"
            class="form-control"
            required
            placeholder="Enter your first surname"
          />
        </div>
      </div>
      <div class="d-flex gap-3">
        <!-- input -->
        <div class="w-100 mb-3">
          <label for="exampleInputEmail1" class="form-label mb-0"
            >Telephone</label
          >
          <input
            type="tel"
            class="form-control"
            required
            placeholder="Enter your Phone number"
          />
        </div>
        <!-- input -->
        <div class="w-100 mb-3">
          <label for="exampleInputEmail1" class="form-label mb-0"
            >Email address</label
          >
          <input
            type="email"
            class="form-control"
            required
            placeholder="Enter your email address"
          />
        </div>
        <!-- input -->

        <div class="w-100 mb-3">
          <label for="exampleInputEmail1" class="form-label mb-0">Gender</label>
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
            >Marital status</label
          >
          <select class="form-select" aria-label="Default select example">
            <option selected>Select option</option>
            <option value="1">One</option>
          </select>
        </div>
        <!-- input -->
        <div class="w-100 mb-3">
          <label for="exampleInputEmail1" class="form-label mb-0"
            >language</label
          >
          <input
            type="text"
            class="form-control"
            required
            placeholder="Enter your language"
          />
        </div>
      </div>
      <!-- Farmer Address Sections -->
      <div class="crop_details m_top">Farmer Address</div>
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
      <!-- input -->
      <div class="d-flex gap-3">
        <!-- input -->
        <div class="w-100 mb-3">
          <label for="exampleInputEmail1" class="form-label mb-0">Gender</label>
          <select class="form-select" aria-label="Default select example">
            <option selected>Open this select menu</option>
            <option value="1">One</option>
          </select>
        </div>
        <!-- input -->
        <div class="w-100 mb-3">
          <label for="exampleInputEmail1" class="form-label mb-0"
            >State of origin</label
          >
          <select class="form-select" aria-label="Default select example">
            <option selected>Select state</option>
            <option value="1">One</option>
          </select>
        </div>
        <!-- input -->
        <div class="w-100 mb-3">
          <label for="exampleInputEmail1" class="form-label mb-0"
            >Local government area</label
          >
          <select class="form-select" aria-label="Default select example">
            <option selected>Select LGA</option>
            <option value="1">One</option>
          </select>
        </div>
        <!-- input -->
        <div class="w-100 mb-3">
          <label for="exampleInputEmail1" class="form-label mb-0"
            >Hometown</label
          >
          <input
            type="tel"
            class="form-control"
            required
            placeholder="Enter your Hometown"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FarmerDetails",
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
