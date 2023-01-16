<template>
  <div class="user-type-main d-flex flex-row">
    <!-- right -->
    <div
      class="user-type-left d-flex justify-content-center align-items-center"
    >
      <div class="login-views d-flex flex-column">
        <div class="Iam">I am a:</div>
        <div class="login-views-1 d-flex flex-row">
          <div class="merchant">
            <span class="d-block">Merchant</span>
            <button
              type="button"
              class="btn d-block"
              @click="beginRegistration('merchant')"
            >
              Select
            </button>
          </div>
          <div class="corporate">
            <span class="d-block">Buyer</span>
            <button
              type="button"
              class="btn d-block"
              @click="beginRegistration('corporate')"
            >
              Select
            </button>
          </div>
        </div>
        <div class="login-views-1 d-flex flex-row">
          <div class="partner">
            <span class="d-block">Partner</span>
            <button
              type="button"
              class="btn d-block"
              @click="beginRegistration('partner')"
            >
              Select
            </button>
          </div>
          <div class="agent">
            <span class="d-block">Agent</span>
            <button
              type="button"
              class="btn d-block"
              @click="beginRegistration('agent')"
            >
              Select
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- left -->
    <div class="about-user-type">
      <div class="logo-container">
        <img
          class="img-fluid"
          src="@/assets/images/logos/zowasel-grey-logo.png"
          alt="logo"
        />
      </div>

      <!-- user select type content -->

      <!-- merchant -->
      <div id="merchant" class="user-about user-select-content">
        <h1 class="about-merchant">About Merchants</h1>
        <p class="merchant-info">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus eget
          magna urna consectetur. Sem feugiat at nulla urna, pharetra tempor,
          pharetra. Consequat adipiscing turpis nisl quam gravida pellentesque
          eget pellentesque velit. Quis lorem dis sodales nisi. Interdum
          pretium, quis varius nunc diam. Purus
        </p>
        <div class="type-list">
          <h3>Type</h3>
          <ol>
            <li>Sollicitudin</li>
            <li>ac morb</li>
            <li>elementum</li>
            <li>enim egestas</li>
          </ol>
        </div>
      </div>

      <!-- corporate -->
      <div id="corporate" class="user-about user-select-content">
        <h1 class="about-corporate">About Buyer</h1>
        <p class="corporate-info">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus eget
          magna urna consectetur. Sem feugiat at nulla urna, pharetra tempor,
          pharetra. Consequat adipiscing turpis nisl quam gravida pellentesque
          eget pellentesque velit. Quis lorem dis sodales nisi. Interdum
          pretium, quis varius nunc diam. Purus
        </p>
      </div>

      <!-- Partner -->
      <div id="partner" class="user-about user-select-content">
        <h1 class="about-merchant">About Partner</h1>
        <p class="merchant-info">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus eget
          magna urna consectetur. Sem feugiat at nulla urna, pharetra tempor,
          pharetra. Consequat adipiscing turpis nisl quam gravida pellentesque
          eget pellentesque velit. Quis lorem dis sodales nisi. Interdum
          pretium, quis varius nunc diam. Purus
        </p>
        <div class="type-list">
          <h3>Type</h3>
          <ol>
            <li>Sollicitudin</li>
            <li>ac morb</li>
            <li>elementum</li>
            <li>enim egestas</li>
          </ol>
        </div>
      </div>

      <!-- Agent -->
      <div id="agent" class="user-about user-select-content">
        <h1 class="about-merchant">About Agent</h1>
        <p class="merchant-info">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus eget
          magna urna consectetur. Sem feugiat at nulla urna, pharetra tempor,
          pharetra. Consequat adipiscing turpis nisl quam gravida pellentesque
          eget pellentesque velit. Quis lorem dis sodales nisi. Interdum
          pretium, quis varius nunc diam. Purus
        </p>
        <div class="type-list">
          <h3>Type</h3>
          <ol>
            <li>Sollicitudin</li>
            <li>ac morb</li>
            <li>elementum</li>
            <li>enim egestas</li>
          </ol>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserType",
  mounted() {
    this.mouseEvent();
  },
  methods: {
    mouseEvent() {
      let userSelectElement = document.querySelectorAll(".login-views-1 > div");
      userSelectElement.forEach((elem) => {
        elem.addEventListener("mouseover", () => {
          document.querySelector(`#${elem.className}`).style.display = "block";
          elem.classList.add("classActive");
        });
        elem.addEventListener("mouseleave", () => {
          elem.classList.remove("classActive");
          document.querySelector(`#${elem.className}`).style.display = "none";
        });
      });
    },
    beginRegistration(type) {
      this.$router.push(`/${type}/register`);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";

// main container
.user-type-main {
  width: 100%;
  height: 100vh;

  // user type left-content
  .user-type-left {
    width: 73.47%;
    background: url("@/assets/images/backgrounds/userViews.png");
    @include background;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    position: relative;

    &::after {
      content: "";
      display: block;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.86);
      position: absolute;
      top: 0;
      left: 0;
      backdrop-filter: blur(6.5px);
    }
  }

  .about-user-type {
    width: 26.53%;
  }

  .login-views {
    width: 69.37%;
    gap: 55px;

    .Iam {
      @include textStyles(Poppins, 700, 36px, 140%);
      color: #ffffff;
      z-index: 999;
      text-align: center;
    }

    .login-views-1 {
      gap: 55px;

      div {
        width: 46%;
        height: 230px;
        border: 3px solid #ffffff;
        border-radius: 11px;
        z-index: 500;
        position: relative;
        @include background;
        @include textStyles(Poppins, 700, 35px, 140%);

        &::after {
          content: "";
          display: block;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.36);
          position: absolute;
          top: 0;
          left: 0;
        }

        span {
          text-align: center;
          color: #ffffff;
          z-index: 1000;
          width: 80%;
          margin: auto;
          margin-top: 48px;
          position: relative;
        }

        button {
          background: #05b050;
          box-shadow: 0px 2px 4px rgba(44, 39, 56, 0.08),
            0px 4px 8px rgba(44, 39, 56, 0.08);
          border-radius: 6px;
          @include textStyles("Maven Pro", 700, 24px, 147%);
          color: #e6f7ee;
          width: 80%;
          margin: auto;
          margin-top: 42px;
          position: relative;
          z-index: 1000;
        }
      }

      .merchant {
        background: url("@/assets/images/backgrounds/merchant.png");
      }

      .corporate {
        background: url("@/assets/images/backgrounds/corporate.png");
      }

      .partner {
        background: url("@/assets/images/backgrounds/partner.png");
      }

      .agent {
        background: url("@/assets/images/backgrounds/agent.png");
      }
    }
  }

  // user-type-right
  .logo-container {
    width: 172.84px;
    height: 23.66px;
    margin: auto;
    margin-top: 64px;
  }

  // for seleect type: Merchant, corporate
  #merchant,
  #corporate,
  #partner,
  #agent {
    margin-top: 61px;
  }

  .user-select-content {
    padding-inline: 31px;

    .about-merchant {
      margin-top: 35px;
      @include textStyles(Poppins, 700, 33.6px, 140%);
      text-align: center;
      color: #4a4754;
    }

    .about-corporate {
      @extend .about-merchant;
      @include textStyles(Poppins, 700, 24px, 140%);
    }

    .merchant-info {
      color: #000000;
      @include textStyles(Poppins, 400, 16px, 140%);
    }

    .corporate-info {
      margin-top: 35px;
      color: #000000;
      @include textStyles(Poppins, 400, 16px, 140%);
    }

    .type-list {
      color: #000000;
      @include textStyles(Poppins, 400, 16px, 140%);
      margin-top: 31px;
    }
  }

  .user-about {
    display: none;
  }

  .classActive {
    display: block !important;

    &::after {
      background: rgba(0, 0, 0, 0.7) !important;
    }
  }
}
</style>
