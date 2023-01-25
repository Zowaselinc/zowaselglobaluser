<template>
  <DefaultNav>
    <div class="big-container">
      <div class="headings">
        <div class="left-side">
          <a href="/dashboard/each-loan"
            ><img src="@/assets/images/vectors/arrowleft.png" alt=""
          /></a>
          <h2>Loan History</h2>
        </div>
      </div>

      <div class="row date-region">
        <div class="col">
          <select class="form-select">
            <option value="">Loan Type</option>
            <option></option>
          </select>
        </div>
        <div class="col">
          <select class="form-select">
            <option value="">Status</option>
            <option></option>
          </select>
        </div>
        <div class="col">
          <input type="date" class="form-control" />
        </div>
      </div>

      <div class="active-subscriptions">
        <table class="table-borderless sub-history">
          <tbody class="scrollable">
            <tr>
              <td class="theader">LOAN TYPE</td>
              <td class="theader">AMOUNT</td>
              <td class="theader">ISSUED DATE</td>
              <td class="theader">DUE DATE</td>
              <td class="theader">STATUS</td>
              <td class="theader">ACTION</td>
            </tr>
            <tr>
              <td>Specta SME</td>
              <td>NGN, 63,560</td>
              <td>12 Jan, 2023</td>
              <td>12 Oct, 2023</td>
              <td scope="row">
                <div class="colored-green">
                  <div class="green-dot" />
                  <p>Paid</p>
                </div>
              </td>
              <td><a href="/dashboard/loandetails">View Details</a></td>
            </tr>
            <tr>
              <td>Specta SME</td>
              <td>NGN, 63,560</td>
              <td>12 Jan, 2023</td>
              <td>12 Oct, 2023</td>
              <td scope="row">
                <div class="colored-green">
                  <div class="green-dot" />
                  <p>Paid</p>
                </div>
              </td>
              <td><a href="/dashboard/loandetails">View Details</a></td>
            </tr>
            <tr>
              <td>Specta SME</td>
              <td>NGN, 63,560</td>
              <td>12 Jan, 2023</td>
              <td>12 Oct, 2023</td>
              <td scope="row">
                <div class="colored-green">
                  <div class="green-dot" />
                  <p>Paid</p>
                </div>
              </td>
              <td><a href="/dashboard/loandetails">View Details</a></td>
            </tr>
            <tr>
              <td>Specta SME</td>
              <td>NGN, 63,560</td>
              <td>12 Jan, 2023</td>
              <td>12 Oct, 2023</td>
              <td scope="row">
                <div class="colored-yellow">
                  <div class="yellow-dot" />
                  <p>Active</p>
                </div>
              </td>
              <td><a href="/dashboard/loandetails">View Details</a></td>
            </tr>
            <tr>
              <td>Specta SME</td>
              <td>NGN, 63,560</td>
              <td>12 Jan, 2023</td>
              <td>12 Oct, 2023</td>
              <td scope="row">
                <div class="colored-green">
                  <div class="green-dot" />
                  <p>Paid</p>
                </div>
              </td>
              <td><a href="/dashboard/loandetails">View Details</a></td>
            </tr>
            <tr>
              <td>Specta SME</td>
              <td>NGN, 63,560</td>
              <td>12 Jan, 2023</td>
              <td>12 Oct, 2023</td>
              <td scope="row">
                <div class="colored-yellow">
                  <div class="yellow-dot" />
                  <p>Active</p>
                </div>
              </td>
              <td><a href="/dashboard/loandetails">View Details</a></td>
            </tr>
            <tr>
              <td>Specta SME</td>
              <td>NGN, 63,560</td>
              <td>12 Jan, 2023</td>
              <td>12 Oct, 2023</td>
              <td scope="row">
                <div class="colored-yellow">
                  <div class="yellow-dot" />
                  <p>Active</p>
                </div>
              </td>
              <td><a href="/dashboard/loandetails">View Details</a></td>
            </tr>
            <tr>
              <td>Specta SME</td>
              <td>NGN, 63,560</td>
              <td>12 Jan, 2023</td>
              <td>12 Oct, 2023</td>
              <td scope="row">
                <div class="colored-green">
                  <div class="green-dot" />
                  <p>Paid</p>
                </div>
              </td>
              <td><a href="">View Details</a></td>
            </tr>
            <tr>
              <td>Specta SME</td>
              <td>NGN, 63,560</td>
              <td>12 Jan, 2023</td>
              <td>12 Oct, 2023</td>
              <td scope="row">
                <div class="colored-yellow">
                  <div class="yellow-dot" />
                  <p>Active</p>
                </div>
              </td>
              <td><a href="/dashboard/loandetails">View Details</a></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </DefaultNav>
</template>

<script>
import DefaultNav from "@/layouts/DefaultNav.vue";
export default {
  name: "LoanHistory",
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
  h2 {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    color: #4a4754;
  }
}
.active-subscriptions {
  background-color: white;
  padding: 24px 35px;
}

/* The slider */

.sub-history {
  margin-top: 50px;
  width: 100%;
  margin-left: 10px;

  h2 {
    margin-bottom: 40px;
  }
  .theader {
    font-family: "Maven Pro";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    color: #4a4754;
  }

  tr {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 20px 9px;
    height: 66px;
  }
  td {
    flex: 1;
    font-family: "Maven Pro";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #4a4754;

    a {
      color: #fab900;
      text-decoration: underline;
    }
  }
  .active {
    width: 100px;
    height: 26px;
    background: #dcfce7;
    border-radius: 40px;
    display: flex;
    justify-content: center;
    align-items: center;

    .active-dot {
      width: 7.52px;
      height: 8px;
      background: #047b38;
      border-radius: 50%;
    }
    p {
      margin-top: 15px;
      margin-left: 8px;
      font-family: "Maven Pro";
      font-style: normal;
      font-weight: 600;
      font-size: 12px;
      color: #047b38;
    }
  }

  a {
    text-decoration: none;
  }
  a:hover td {
    color: #05b050 !important;
  }
}
.headings {
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;

  a {
    text-decoration: none;
  }
  .right-btns {
    display: flex;
    gap: 20px;
  }
  .green-link {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    width: 180px;
    height: 40px;
    background: #05b050;
    font-weight: 700;
    font-size: 16px;
    letter-spacing: 0.02em;
    border-radius: 4px;
  }
  .white-link {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 180px;
    height: 40px;
    background: #ffffff;
    font-family: "Maven Pro";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    letter-spacing: 0.02em;
    color: #05b050;
    border: 2px solid #05b050;
    border-radius: 4px;
  }
  .red-link {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    width: 180px;
    height: 40px;
    background: #cd4647;
    box-shadow: 0px 2px 4px rgba(44, 39, 56, 0.08),
      0px 4px 8px rgba(44, 39, 56, 0.08);
    border-radius: 4px;
    font-weight: 700;
    font-size: 16px;
    letter-spacing: 0.02em;
    border-radius: 4px;
  }
}
.date-region {
  margin-top: 30px;
  margin-bottom: 30px;
}
.red-text {
  font-family: "Maven Pro";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  color: #cd4647;
}
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
.colored-green {
  display: flex;
  height: 35px;
  width: 120px;
  align-items: center;
  justify-content: center;
  background: #e6f7ee;
  border-radius: 40px;

  .green-dot {
    width: 10px;
    height: 10px;
    background-color: #05b050;
    border-radius: 50%;
  }

  p {
    color: #05b050;
    margin-top: 15px;
    margin-left: 5px;
  }
}

.colored-yellow {
  display: flex;
  height: 35px;
  width: 120px;
  justify-content: center;
  align-items: center;
  background: #fff8e6;
  border-radius: 40px;

  .yellow-dot {
    width: 10px;
    height: 10px;
    background-color: #fab900;
    border-radius: 50%;
  }

  p {
    color: #fab900;
    margin-top: 15px;
    margin-left: 5px;
  }
}

.headings2 {
  display: flex;
  margin-top: 60px;
  justify-content: space-between;

  h3 {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    color: #4a4754;
  }

  a {
    font-family: "Maven Pro";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #05b050;
    text-decoration: none;
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
</style>
