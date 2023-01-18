<template>
  <DefaultNav>
    <div class="big-container">
      <div class="big-content">
        <!-- header -->
        <div class="header_wrapper">
          <!-- top level header -->
          <div class="d-flex flex-row top_level_header">
            <div class="left_header d-flex flex-row gap-4">
              <a class="left_arrow">
                <img
                  src="@/assets/images/vectors/arrowleft.png"
                  alt="left-arrow"
                  class="img-fluid"
                />
              </a>
              <h1>Add new farmer</h1>
            </div>
            <!-- button -->
            <button
              type="submit"
              :class="['btn', 'btn-primary', 'my-4']"
              @click="saveData()"
            >
              save
            </button>
          </div>
          <!-- lower level header -->

          <div class="lower_level-header d-flex gap-2">
            <button
              type="submit"
              :class="['btn', 'btn-primary', 'my-4', 'col', 'first']"
            >
              Farmer Details
            </button>
            <span class="horizontal_line"></span>
            <button
              type="submit"
              :class="['btn', 'btn-primary', 'my-4', 'col', 'second']"
            >
              Company Details
            </button>
            <span id="secon_line" class="horizontal_line second"></span>
            <button
              type="submit"
              :class="['btn', 'btn-primary', 'my-4', 'col', 'third']"
            >
              Next of Kin
            </button>
          </div>
        </div>

        <!-- main form content -->

        <div class="crop-wanted-section d-flex flex-row gap-4">
          <div class="form">
            <div class="crop_details"></div>
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
                <label for="exampleInputEmail1" class="form-label mb-0"
                  >Gender</label
                >
                <select
                  class="form-select"
                  aria-label="Default select example"
                  required
                >
                  <option value="male" selected></option>
                  <option value="female" selected></option>
                </select>
              </div>
            </div>
            <div class="d-flex gap-3">
              <!-- input -->
              <div class="w-100 mb-3">
                <label for="exampleInputEmail1" class="form-label mb-0"
                  >Marital status</label
                >
                <select
                  class="form-select"
                  aria-label="Default select example"
                  required
                >
                  <option value="married" selected></option>
                  <option value="single" selected></option>
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
          </div>
        </div>
      </div>
    </div>
  </DefaultNav>
</template>

<script>
//   sidebar
import DefaultNav from "@/layouts/DefaultNav.vue";
export default {
  name: "Kyf",
  components: {
    DefaultNav,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";
.big-container {
  width: 100%;
  height: 100%;
  background: #f5f5f5;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;

  @include breakpoint-between(md, lg) {
    min-width: 60.5%;
  }

  @include breakpoint-between(lg, xl) {
    min-width: 69.5%;
  }

  @include breakpoint-between(xl, xxl) {
    min-width: 76%;
  }
}

.big-content {
  padding: 0px 2.5rem;
  background: #f5f5f5;
}
.header_wrapper {
}
.top_level_header {
  margin-block: 3rem 2rem;
  justify-content: space-between;
  align-items: center;
  .left_header {
    a.left_arrow {
      width: 22px;
    }
    h1 {
      @include textStyles(Poppins, 700, 24px, 120%);
      color: #4a4754;
      text-align: left;
    }
  }
  button {
    float: right;
    background: #05b050;
    border: 1px solid #ededee;
    box-shadow: 0px 2px 4px rgba(44, 39, 56, 0.0001),
      0px 4px 8px rgba(44, 39, 56, 0.08);
    border-radius: 4px;
    text-align: center;
    color: #e6f7ee;
    padding-inline: 3rem;
    @include textStyles("Maven Pro", 700, 16px, 24px);
  }
}
.lower_level-header {
  button {
    border: 1px solid rgba(0, 0, 0, 0.4);
    border-radius: 4px;
    @include textStyles("Maven Pro", 600, 12px, 16px);
    letter-spacing: 0.04em;
    color: #34323b;
  }
  button.first {
    background: #fab900;
    color: #ffffff;
    border-color: #fab900;
    padding-block: 10px;
  }
  .second,
  .third {
    background: #f1f1f1;
  }
  .horizontal_line {
    width: 20px;
    border: 2px solid #05b050;
    height: 0px;
    align-self: center;
  }
  #second_line {
    border-color: #b5b4b9;
  }
}

.crop-wanted-section {
  background: #ffffff;
  border-radius: 4px;
  padding: 4%;
}

.form {
  .crop_details {
    @include textStyles("Maven Pro", 700, 16px, 24px);
    letter-spacing: 0.01em;
    color: #4a4754;
    margin-bottom: 1rem;
  }

  .m_top {
    margin-top: 3.4rem;
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
