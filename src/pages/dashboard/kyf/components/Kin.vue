<template>
  <div class="crop-wanted-section d-flex flex-row gap-4">
    <div class="form">
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
            >Relationship with next of kin</label
          >
          <input
            type="text"
            class="form-control"
            required
            placeholder="Enter realtionship"
          />
        </div>
      </div>
      <!-- input -->
      <div class="w-100 mb-3">
        <label for="exampleInputEmail1" class="form-label mb-0"
          >Occupation</label
        >
        <input
          type="text"
          class="form-control"
          required
          placeholder="Enter your next of kin’s occupation"
        />
      </div>
      <div class="d-flex gap-3">
        <!-- input -->
        <div class="w-100 mb-3">
          <label for="exampleInputEmail1" class="form-label mb-0">Age</label>
          <input
            type="text"
            class="form-control"
            required
            placeholder="Enter your next of kin’s age"
          />
        </div>
        <!-- input -->
        <div class="w-100 mb-3">
          <label for="exampleInputEmail1" class="form-label mb-0"
            >Telephone</label
          >
          <input
            type="tel"
            class="form-control"
            required
            placeholder="Enter your next of kin’s phone number"
          />
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
    </div>
  </div>
</template>
<script>
export default {
  name: "Kin",
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
