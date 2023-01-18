<template>
  <AuthSharedLayout>
    <div class="big-container">
      <img
        class="mobile-logo"
        src="@/assets/images/logos/zowasel-logo.png"
        alt=""
      />
      <div class="left-content">
        <h1 class="text-center">Company Details</h1>
        <p id="emailHelp" class="form-text text-muted text-center">
          Enter your company Details
        </p>
        <div class="lines">
          <div class="line" />
          <p>OR</p>
          <div class="line" />
        </div>
        <form>
          <div class="form-group">
            <label for="">Company Name</label>
            <input
              id="formGroupExampleInput"
              type="text"
              class="form-control"
              placeholder="Enter your company name"
            />
          </div>
          <div class="form-group">
            <label for="">Company Details</label>
            <input
              id="formGroupExampleInput2"
              type="text"
              class="form-control"
              placeholder="Enter your company details"
            />
          </div>
          <div class="form-group">
            <div class="row">
              <div class="col">
                <label for="">State</label>
                <select class="form-control form-control-lg">
                  <option>Select State</option>
                </select>
              </div>
              <div class="col">
                <label for="">RC Number</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter company RC number"
                />
              </div>
            </div>
          </div>
          <div class="form-group">
            <div class="row">
              <div class="col">
                <label for="">Company Email</label>
                <input
                  type="email"
                  class="form-control"
                  placeholder="Enter company email"
                />
              </div>
              <div class="col">
                <label for="">Company Phone Number</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter company phone number"
                />
              </div>
            </div>
          </div>
          <div class="buttons">
            <div class="form-group">
              <router-link
                to="/partner/verifyaccount"
                class="btn green-btn btn-lg btn-block"
              >
                Continue
              </router-link>
            </div>
          </div>
        </form>
      </div>
      <div class="right-content">
        <img
          class="background-img"
          src="@/assets/images/backgrounds/partner-background2.png"
          alt=""
        />
        <img class="logo" src="@/assets/images/logos/zowasel-logo.png" alt="" />
      </div>
    </div>
  </AuthSharedLayout>
</template>

<script>
import AuthSharedLayout from "@/layouts/shared/AuthSharedLayout.vue";
export default {
  name: "PartnerCompanyDetails",
  components: {
    AuthSharedLayout,
  },
};
</script>

<style scoped>
.checking {
  display: flex;
  margin-top: 60px;
}
.buttons {
  margin-top: 50px;
}

.skip {
  background: #2d3748;
}

.check-p {
  margin-top: -5px;
  margin-left: 10px;
}
</style>
