<template>
  <div class="crop-wanted-section d-flex flex-row gap-4">
    <div class="form">
      <div class="d-flex justify-content-end">
        <h5 class="lighter-green">3 of 6</h5>
      </div>
      <div class="mt-5 text-center">
        <h4>Do you save enough?</h4>
      </div>
      <div class="mt-5 col-lg-4 mx-auto text-center">
        <button class="option_button d-block selected">Yes</button>
      </div>
      <div class="mt-3 col-lg-4 mx-auto text-center">
        <button class="option_button d-block">No</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "SaveEnough",
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
  .font-4 {
    font-size: 4rem;
  }
  .lighter-green {
    color: #05b050;
  }
  .green-text {
    color: #047b38;
    font-weight: bold;
  }
  .crop_details {
    @include textStyles("Poppins", 700, 18px, 24px);
    letter-spacing: 0.01em;
    color: #4a4754;
    margin-bottom: 1rem;
  }

  .option_button {
    width: 100%;
    padding: 15px 0;
    border: none;
    border-radius: 5px;
    &.selected {
      background: #05b050;
      color: white;
    }
  }

  .m_top {
    margin-top: 3rem;
    margin-bottom: 2rem;
  }

  width: 100%;
  padding-bottom: 4rem;

  label {
    font-size: 14px;
    font-weight: 900;
    color: rgba(45, 55, 72, 0.8);
  }
}
</style>
