<template>
  <div class="profile-body d-flex flex-row">
    <!-- profile avatar -->
    <div class="user-avatar d-flex flex-column">
      <div class="avatar-container position-relative">
        <!-- user avatar -->
        <img
          src="@/assets/images/backgrounds/Ellipse11.png"
          alt=""
          class="img-fluid"
        />
        <!-- display absolute at top right -->
        <div
          class="edit-icon-container position-absolute d-flex flex-row justify-content-center align-items-center"
        >
          <!-- edit icon -->
          <img
            src="@/assets/images/vectors/Edit.svg"
            alt=""
            class="img-fluid"
          />
        </div>
      </div>
      <!-- verification -->
      <div
        class="verification-container d-flex flex-row justify-content-center align-items-center"
      >
        <div class="check-mark-box">
          <img
            src="@/assets/images/vectors/verified.svg"
            alt=""
            class="img-fluid"
          />
        </div>
        <div class="verified">Verified</div>
      </div>
    </div>
    <!-- account details -->
    <div class="user-account-details d-flex flex-column">
      <!-- account setting -->
      <h1>Account Details</h1>
      <div class="form-wrapper d-flex flex-row">
        <!-- left hand  -->
        <form>
          <!-- row -->
          <div
            class="input-row-container d-flex flex-row justify-content-center align-items-center"
          >
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label"
                >First name</label
              >
              <input
                id="exampleInputEmail1"
                type="email"
                class="form-control"
                aria-describedby="emailHelp"
                placeholder="Mavin"
              />
            </div>

            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label"
                >Last name</label
              >
              <input
                id="exampleInputEmail1"
                type="email"
                class="form-control"
                aria-describedby="emailHelp"
                placeholder="Promise"
              />
            </div>
          </div>

          <div
            class="input-row-container d-flex flex-row justify-content-center align-items-center"
          >
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label"
                >Email address</label
              >
              <input
                id="exampleInputPassword1"
                type="password"
                class="form-control"
                placeholder="MavinPromise@gmail.com"
              />
            </div>

            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label"
                >Phone number</label
              >
              <input
                id="exampleInputPassword1"
                type="password"
                class="form-control"
                placeholder="02929209220902"
              />
            </div>
          </div>

          <div
            class="input-row-container d-flex flex-row justify-content-center align-items-center"
          >
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Country</label>
              <input
                id="exampleInputEmail1"
                type="email"
                class="form-control"
                aria-describedby="emailHelp"
                placeholder="Nigeria"
              />
            </div>

            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">State</label>
              <input
                id="exampleInputEmail1"
                type="email"
                class="form-control"
                aria-describedby="emailHelp"
                placeholder="Akwa-Ibom"
              />
            </div>
          </div>

          <div
            class="input-row-container d-flex flex-row justify-content-center align-items-center"
          >
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">City</label>
              <input
                id="exampleInputPassword1"
                type="password"
                class="form-control"
                placeholder="Uyo"
              />
            </div>

            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label"
                >Address</label
              >
              <input
                id="exampleInputPassword1"
                type="password"
                class="form-control"
                placeholder="No 10 Plazy Place Uyo"
              />
            </div>
          </div>
          <button type="button" class="btn upadte-btn w-100">
            Update Company Details
          </button>
        </form>
      </div>
    </div>
  </div>
  <!-- section-two -->
  <div class="profile-body d-flex flex-row">
    <!-- account details -->
    <div
      id="user-conatiner-2"
      class="user-account-details d-flex flex-column w-100"
    >
      <!-- account setting -->
      <h1>Company Details</h1>
      <div class="form-wrapper">
        <!-- left hand  -->
        <form class="company-form">
          <!-- column -->
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label"
              >Company name</label
            >
            <input
              id="exampleInputEmail1"
              type="email"
              class="form-control"
              aria-describedby="emailHelp"
              placeholder="KMovers INC."
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label"
              >Company address</label
            >
            <input
              id="exampleInputEmail1"
              type="email"
              class="form-control"
              aria-describedby="emailHelp"
              placeholder="No 33 Itammy Lane Uyo"
            />
          </div>
          <!-- row -->
          <div
            class="input-row-container d-flex flex-row justify-content-center align-items-center w-100"
          >
            <div class="w-100">
              <label for="select" class="form-label">State</label>
              <select
                class="form-select form-select-lg mb-3"
                aria-label=".form-select-lg example"
              >
                <option selected>Select state</option>
              </select>
            </div>

            <div class="mb-3 w-100">
              <label for="exampleInputPassword1" class="form-label"
                >RC Number</label
              >
              <input
                id="exampleInputPassword1"
                type="password"
                class="form-control"
                placeholder="Enter company RC number"
              />
            </div>
          </div>

          <div
            class="input-row-container d-flex flex-row justify-content-center align-items-center"
          >
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label"
                >Company email</label
              >
              <input
                id="exampleInputPassword1"
                type="password"
                class="form-control"
                placeholder="matthewpatel@gmaiil.com"
              />
            </div>

            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label"
                >Company email</label
              >
              <input
                id="exampleInputPassword1"
                type="password"
                class="form-control"
                placeholder="0905 - 739 - 2842"
              />
            </div>
          </div>
          <div class="input-row-container mt-3 mb-5 position-relative">
            <div class="text-coperate-level position-absolute">
              Corporate Level (Current)
            </div>

            <div class="blue-chip position-absolute">Blue chip</div>
          </div>
          <button type="button" class="btn upadte-btn w-100">
            Update Company Details
          </button>
          <button type="button" class="btn upadte-btn w-100 change-password">
            Change Password
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Profile",
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";

.profile-body {
  // same styling as notification-body
  padding-left: 44px;
  background: #ffffff;
  margin-top: 33px;
  padding-bottom: 42px;
  gap: 34px;
}

.user-avatar {
  margin-top: 40px;
  gap: 7.5px;

  .avatar-container {
    width: 124px;
    height: 124px;
    border-radius: 50%;

    .edit-icon-container {
      width: 37px;
      height: 37px;
      border-radius: 50%;
      background: #008d40;
      top: 0;
      right: 0;
    }
  }

  .verification-container {
    gap: 7.75px;

    div.verified {
      @include textStyles("Maven Pro", 400, 19.375px, 130%);
      letter-spacing: 0.04em;
      color: #4a4754;
    }
  }
}

#user-conatiner-2 {
  margin-left: 18.5%;
}

.user-account-details {
  h1 {
    margin-top: 22px;
    @include textStyles("Maven Pro", 700, 18px, 135%);
    letter-spacing: 0.01em;
    color: #4a4754;
  }

  form.company-form {
    width: 87%;
  }

  form {
    .input-row-container {
      gap: 40px;

      .text-coperate-level {
        letter-spacing: 0.01em;
        left: 0;
        @include textStyles(Poppins, 700, 18px, 135%);
      }

      .blue-chip {
        text-align: right;
        letter-spacing: 0.01em;
        font-feature-settings: "liga" off;
        right: 0;
        color: #0065ff;
        @include textStyles("Maven Pro", 700, 24px, 132%);
      }

      select.form-select {
        @include textStyles(Poppins, 300, 14px, 156.7%);
        color: rgba(45, 55, 72, 0.8) !important;

        > option {
          color: rgba(45, 55, 72, 0.8) !important;
        }
      }
    }

    button.upadte-btn {
      margin-top: 45px;
      background: #008d40;
      color: #ffffff;
      @include textStyles(Poppins, 300, 16px, 166.67%);
    }

    div.mb-3 label {
      margin-bottom: 0px;
      @include textStyles(Poppins, 300, 14px, 166.67%);
      color: rgba(45, 55, 72, 0.8);
    }

    input {
      &::placeholder {
        @include textStyles(Poppins, 300, 14px, 156.7%);
      }
    }

    button.btn.change-password {
      @include textStyles(Poppins, 300, 16px, 166.67%);
      background: #ffffff;
      border: 1px solid #96949c;
      color: #000000;
    }
  }
}
</style>
