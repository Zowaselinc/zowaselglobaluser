<template>
  <DefaultNav>
    <div class="big-container">
      <div class="top-section">
        <h1>Subscription Payment</h1>
      </div>
      <div class="contents">
        <div class="left">
          <form action="">
            <div class="form-group">
              <label for="">Card Number</label>
              <input
                id=""
                type="email"
                class="form-control"
                aria-describedby=""
                placeholder="1234 5678 9101 1121"
              />
            </div>
            <div class="row">
              <div class="form-group col-md-6">
                <label for="inputEmail4">Expiration Date</label>
                <input
                  id="inputEmail4"
                  type="email"
                  class="form-control"
                  placeholder="MM/YY"
                />
              </div>
              <div class="form-group col-md-6">
                <label for="inputEmail4">CCV</label>
                <input
                  id="inputEmail4"
                  type="email"
                  class="form-control"
                  placeholder="123"
                />
              </div>
            </div>
            <div class="row">
              <div class="form-group col-md-6">
                <label for="inputEmail4">Pin</label>
                <input
                  id="inputEmail4"
                  type="email"
                  class="form-control"
                  placeholder="Pin"
                />
              </div>
            </div>
            <div class="row">
              <button>Confirm Payment</button>
            </div>
          </form>
        </div>
        <div class="right">
          <div class="details">
            <h1>Subscription Summary</h1>
            <h3>Data Sharing</h3>
            <p class="underlined">NGN 10,000/month</p>
            <p>
              Suitable for DFI, MFIs, <br />
              Out-growers, and other <br />
              lenders seeking smallholder farmers data to make <br />
              potential loan decisions.
            </p>
            <h3>Features</h3>
            <ul>
              <li>Access to basic data points for potential loan decisions</li>
              <li>Data storage and privacy</li>
              <li>No data editing</li>
              <li>No analysis/recommendation</li>
            </ul>

            <div class="total-area">
              <div class="black-line" />
              <div class="total-texts">
                <h3>Amount Due</h3>
                <h3>NGN10,000</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </DefaultNav>
</template>

<script>
import DefaultNav from "@/layouts/DefaultNav.vue";
export default {
  name: "BalancePayment",
  components: {
    DefaultNav,
  },
};
</script>

<style lang="scss" scoped>
.top-section {
  height: 89px;
  background: #262c3f;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;

  h1 {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 700;
    font-size: 28.04px;
  }
}
.big-container {
  width: 100%;
  height: auto;
  background: #f5f5f5;
  display: flex;
  flex-direction: column;
  .contents {
    display: flex;
  }
  .left {
    padding-top: 100px;
    padding-bottom: 100px;
    width: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    form {
      width: 80%;

      button {
        height: 49px;
        background: #05b050;
        border-radius: 5px;
        width: 100%;
        border: none;
        margin-top: 30px;
        font-family: "Inter";
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 19px;
        color: white;
      }
    }
  }
}

.right {
  padding-top: 100px;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 200px;
}

.details {
  width: 60%;
  backdrop-filter: blur(21px);
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    color: #0a0d13;
  }

  p {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    text-align: center;
    color: #000000;
  }
  h3 {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    text-align: center;
    color: #000000;
    margin-top: 40px;
    margin-bottom: 20px;
  }

  .underlined {
    border-bottom: 0.5px solid black;
    margin-bottom: 40px;
  }

  h3 {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    letter-spacing: 0.01em;
    font-feature-settings: "liga" off;
    color: #4a4754;
  }

  ul {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

.total-area {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  .black-line {
    width: 80%;
    border-bottom: 1px solid black;
  }
  .total-texts {
    width: 80%;
    display: flex;
    justify-content: space-between;
    h3 {
      margin-top: 20px;
    }
  }
}
</style>
