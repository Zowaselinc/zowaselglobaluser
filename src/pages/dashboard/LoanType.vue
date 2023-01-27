<template>
  <DefaultNav>
    <div class="big-container">
      <div class="headings">
        <div class="left-side">
          <a href="/dashboard/each-loan"
            ><img src="@/assets/images/vectors/arrowleft.png" alt=""
          /></a>
          <h2 class="loan-detail">Loan Types</h2>
        </div>
        <a class="add-loan" href="">Add New Loan Type</a>
      </div>

      <div class="long-card">
        <div class="each-card">
          <div class="top-section">
            <h5>Loan Type</h5>
            <h2 class="green-text">Machinery Loan</h2>
          </div>
        </div>
        <div class="middle-card">
          <div class="each-card">
            <div class="top-section">
              <h5>Amount Available</h5>
              <p>NGN 3,334,760</p>
            </div>
            <div class="bottom-section">
              <h5>Installation Type</h5>
              <p>Colateral</p>
            </div>
          </div>
          <div class="each-card">
            <div class="top-section">
              <h5>Payment Type</h5>
              <p>Monthly</p>
            </div>
            <div class="bottom-section">
              <h5>Use</h5>
              <p>For Machinery</p>
            </div>
          </div>
          <div class="each-card">
            <div class="top-section">
              <h5>Loan duration</h5>
              <p>5 months</p>
            </div>
          </div>
        </div>

        <div class="last-btns">
          <a href="" class="edit-button">Edit</a>
          <a href="" class="delete-button">Delete</a>
        </div>
      </div>
      <div class="long-card">
        <div class="each-card">
          <div class="top-section">
            <h5>Loan Type</h5>
            <h2 class="green-text">Machinery Loan</h2>
          </div>
        </div>
        <div class="middle-card">
          <div class="each-card">
            <div class="top-section">
              <h5>Amount Available</h5>
              <p>NGN 3,334,760</p>
            </div>
            <div class="bottom-section">
              <h5>Installation Type</h5>
              <p>Colateral</p>
            </div>
          </div>
          <div class="each-card">
            <div class="top-section">
              <h5>Payment Type</h5>
              <p>Monthly</p>
            </div>
            <div class="bottom-section">
              <h5>Use</h5>
              <p>For Machinery</p>
            </div>
          </div>
          <div class="each-card">
            <div class="top-section">
              <h5>Loan duration</h5>
              <p>5 months</p>
            </div>
          </div>
        </div>

        <div class="last-btns">
          <a href="" class="edit-button">Edit</a>
          <a href="" class="delete-button">Delete</a>
        </div>
      </div>
      <div class="long-card">
        <div class="each-card">
          <div class="top-section">
            <h5>Loan Type</h5>
            <h2 class="green-text">Machinery Loan</h2>
          </div>
        </div>
        <div class="middle-card">
          <div class="each-card">
            <div class="top-section">
              <h5>Amount Available</h5>
              <p>NGN 3,334,760</p>
            </div>
            <div class="bottom-section">
              <h5>Installation Type</h5>
              <p>Colateral</p>
            </div>
          </div>
          <div class="each-card">
            <div class="top-section">
              <h5>Payment Type</h5>
              <p>Monthly</p>
            </div>
            <div class="bottom-section">
              <h5>Use</h5>
              <p>For Machinery</p>
            </div>
          </div>
          <div class="each-card">
            <div class="top-section">
              <h5>Loan duration</h5>
              <p>5 months</p>
            </div>
          </div>
        </div>

        <div class="last-btns">
          <a href="" class="edit-button">Edit</a>
          <a href="" class="delete-button">Delete</a>
        </div>
      </div>
      <div class="long-card">
        <div class="each-card">
          <div class="top-section">
            <h5>Loan Type</h5>
            <h2 class="green-text">Machinery Loan</h2>
          </div>
        </div>
        <div class="middle-card">
          <div class="each-card">
            <div class="top-section">
              <h5>Amount Available</h5>
              <p>NGN 3,334,760</p>
            </div>
            <div class="bottom-section">
              <h5>Installation Type</h5>
              <p>Colateral</p>
            </div>
          </div>
          <div class="each-card">
            <div class="top-section">
              <h5>Payment Type</h5>
              <p>Monthly</p>
            </div>
            <div class="bottom-section">
              <h5>Use</h5>
              <p>For Machinery</p>
            </div>
          </div>
          <div class="each-card">
            <div class="top-section">
              <h5>Loan duration</h5>
              <p>5 months</p>
            </div>
          </div>
        </div>

        <div class="last-btns">
          <a href="" class="edit-button">Edit</a>
          <a href="" class="delete-button">Delete</a>
        </div>
      </div>
    </div>
  </DefaultNav>
</template>

<script>
import DefaultNav from "@/layouts/DefaultNav.vue";
export default {
  name: "LoanType",
  components: {
    DefaultNav,
  },
};
</script>

<style lang="scss" scoped>
.big-container {
  width: 100%;
  height: auto;
  background: #f5f5f5;
  display: flex;
  flex-direction: column;
  padding: 2% 5% 2% 3%;
  overflow-y: scroll;

  .loan-detail {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    color: #4a4754;
  }
}
.headings {
  display: flex;
  justify-content: space-between;

  .add-loan {
    background: #05b050;
    box-shadow: 0px 2px 4px rgba(44, 39, 56, 0.08),
      0px 4px 8px rgba(44, 39, 56, 0.08);
    border-radius: 4px;
    width: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    font-family: "Maven Pro";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    color: #e6f7ee;
  }
}

/* The slider */

.loan-details {
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: space-between;
  padding: 35px;
}
.left-details {
  width: 50%;
  border-right: 1px solid #4a4754;
  padding-right: 50px;

  .each-detail {
    display: flex;
    justify-content: space-between;

    h4 {
      font-family: "Maven Pro";
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      color: #4a4754;
    }
    p {
      font-family: "Maven Pro";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      color: #4a4754;
    }
  }
}
.right-details {
  width: 50%;
  padding-left: 50px;

  h3 {
    font-family: "Maven Pro";
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    color: #05b050;
    margin-top: 40px;
    margin-bottom: 15px;
  }

  .each-detail {
    display: flex;
    justify-content: space-between;

    h4 {
      font-family: "Maven Pro";
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      color: #4a4754;
    }
    p {
      font-family: "Maven Pro";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      color: #4a4754;
    }
  }
}

.left-side {
  display: flex;
  gap: 10px;

  img {
    width: 22px;
    height: 18px;
  }
}
.long-card {
  width: 100%;
  background-color: white;
  padding: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 30px;
  margin-top: 30px;

  h5 {
    font-family: "Maven Pro";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    color: #4a4754;
  }

  .middle-card {
    width: 60%;
    display: flex;
    justify-content: space-around;
  }

  p {
    font-family: "Maven Pro";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #96949c;
  }
}
.green-text {
  font-family: "Maven Pro";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  color: #05b050;
}
.last-btns {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.edit-button {
  background: #96949c;
  box-shadow: 0px 2px 4px rgba(44, 39, 56, 0.08),
    0px 4px 8px rgba(44, 39, 56, 0.08);
  border-radius: 4px;
  width: 100px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  font-family: "Maven Pro";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  color: #e6f7ee;
}
.delete-button {
  background: white;
  border: 1px solid #cd4647;
  box-shadow: 0px 2px 4px rgba(44, 39, 56, 0.08),
    0px 4px 8px rgba(44, 39, 56, 0.08);
  border-radius: 4px;
  width: 100px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  font-family: "Maven Pro";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  color: #cd4647;
}
</style>
