<template>
  <div class="crop-wanted-section d-flex flex-row gap-4">
    <div class="form">
      <div class="d-flex justify-content-end">
        <h5 class="lighter-green">1 of 6</h5>
      </div>
      <div class="mt-5 text-center">
        <h4>Remember this number for 5 seconds</h4>
      </div>
      <div class="mt-5 text-center">
        <h1 class="green-text font-4">59703333</h1>
      </div>
      <div class="mt-5 d-flex justify-content-end me-5">
        <h4><span class="green-text">5</span> Seconds</h4>
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

  .m_top {
    margin-top: 3rem;
    margin-bottom: 2rem;
  }

  width: 100%;
  padding-bottom: 2rem;

  label {
    font-size: 14px;
    font-weight: 900;
    color: rgba(45, 55, 72, 0.8);
  }
}
</style>
