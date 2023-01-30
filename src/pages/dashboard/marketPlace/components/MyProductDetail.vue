<template>
  <DefaultNav>
    <div class="big-container">
      <div class="headings">
        <h2>Credit Scoring</h2>
        <div class="right-btns">
          <a href="/dashboard/new-ticket" class="green-link">Score Farmers</a>
          <a href="/dashboard/new-ticket" class="white-link"
            >View Credit Scoring History</a
          >
        </div>
      </div>

      <input type="text" placeholder="search" />

      <div class="row date-region">
        <div class="col">
          <select class="form-control">
            <option>Location</option>
            <option>...</option>
          </select>
        </div>
        <div class="col">
          <select class="form-control">
            <option>Amount</option>
            <option>...</option>
          </select>
        </div>
        <div class="col">
          <select class="form-control">
            <option>Crop Type</option>
            <option>...</option>
          </select>
        </div>

        <div class="col">
          <input
            type="date"
            class="form-control"
            placeholder="Submission Date"
          />
        </div>
      </div>

      <div class="active-subscriptions">
        <table class="table-borderless sub-history">
          <tbody class="scrollable">
            <tr>
              <td class="theader">NAME</td>
              <td class="theader">LOCATION</td>
              <td class="theader">AMOUNT</td>
              <td class="theader">CROP TYPE</td>
              <td class="theader">DATE</td>
              <td class="theader">CONTACT</td>
              <td class="theader">ACTION</td>
            </tr>
            <tr>
              <td>Sayed Farms Ltd</td>
              <td class="">Ondo, Nigeria</td>
              <td>NGN, 63,560</td>
              <td>Cash Crop</td>
              <td>12 Oct, 2022</td>
              <td>09055346625</td>
              <td><a href="">Score Farmer</a></td>
            </tr>

            <tr>
              <td>Sayed Farms Ltd</td>
              <td class="">Ondo, Nigeria</td>
              <td>NGN, 63,560</td>
              <td>Cash Crop</td>
              <td>12 Oct, 2022</td>
              <td>09055346625</td>
              <td><a href="">Score Farmer</a></td>
            </tr>
            <tr>
              <td>Sayed Farms Ltd</td>
              <td class="">Ondo, Nigeria</td>
              <td>NGN, 63,560</td>
              <td>Cash Crop</td>
              <td>12 Oct, 2022</td>
              <td>09055346625</td>
              <td><a href="">Score Farmer</a></td>
            </tr>

            <tr>
              <td>Sayed Farms Ltd</td>
              <td class="">Ondo, Nigeria</td>
              <td>NGN, 63,560</td>
              <td>Cash Crop</td>
              <td>12 Oct, 2022</td>
              <td>09055346625</td>
              <td><a href="">Score Farmer</a></td>
            </tr>
            <tr>
              <td>Sayed Farms Ltd</td>
              <td class="">Ondo, Nigeria</td>
              <td>NGN, 63,560</td>
              <td>Cash Crop</td>
              <td>12 Oct, 2022</td>
              <td>09055346625</td>
              <td><a href="">Score Farmer</a></td>
            </tr>
            <tr>
              <td>Sayed Farms Ltd</td>
              <td class="">Ondo, Nigeria</td>
              <td>NGN, 63,560</td>
              <td>Cash Crop</td>
              <td>12 Oct, 2022</td>
              <td>09055346625</td>
              <td><a href="">Score Farmer</a></td>
            </tr>
            <tr>
              <td>Sayed Farms Ltd</td>
              <td class="">Ondo, Nigeria</td>
              <td>NGN, 63,560</td>
              <td>Cash Crop</td>
              <td>12 Oct, 2022</td>
              <td>09055346625</td>
              <td><a href="">Score Farmer</a></td>
            </tr>
            <tr>
              <td>Sayed Farms Ltd</td>
              <td class="">Ondo, Nigeria</td>
              <td>NGN, 63,560</td>
              <td>Cash Crop</td>
              <td>12 Oct, 2022</td>
              <td>09055346625</td>
              <td><a href="">Score Farmer</a></td>
            </tr>
            <tr>
              <td>Sayed Farms Ltd</td>
              <td class="">Ondo, Nigeria</td>
              <td>NGN, 63,560</td>
              <td>Cash Crop</td>
              <td>12 Oct, 2022</td>
              <td>09055346625</td>
              <td><a href="">Score Farmer</a></td>
            </tr>
            <tr>
              <td>Sayed Farms Ltd</td>
              <td class="">Ondo, Nigeria</td>
              <td>NGN, 63,560</td>
              <td>Cash Crop</td>
              <td>12 Oct, 2022</td>
              <td>09055346625</td>
              <td><a href="">Score Farmer</a></td>
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
  name: "Tickets",
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
  margin-top: 40px;
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
    padding: 20px 9px;
    height: 66px;
  }
  .go-big {
    flex: 2;
  }
  td {
    flex: 1;
    font-family: "Maven Pro";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #4a4754;
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
  .expired {
    width: 100px;
    height: 26px;
    background: #fff8e6;
    border-radius: 40px;
    display: flex;
    justify-content: center;
    align-items: center;

    .expired-dot {
      width: 7.52px;
      height: 8px;
      background: #fab900;
      border-radius: 50%;
    }
    p {
      margin-top: 15px;
      margin-left: 8px;
      font-family: "Maven Pro";
      font-style: normal;
      font-weight: 600;
      font-size: 12px;
      color: #fab900;
    }
  }

  .cancelled {
    width: 100px;
    height: 26px;
    background: rgba(252, 220, 220, 0.93);
    border-radius: 40px;
    display: flex;
    justify-content: center;
    align-items: center;

    .cancelled-dot {
      width: 7.52px;
      height: 8px;
      background: #c52222;
      border-radius: 50%;
    }
    p {
      margin-top: 15px;
      margin-left: 8px;
      font-family: "Maven Pro";
      font-style: normal;
      font-weight: 600;
      font-size: 12px;
      color: #6b0303;
    }
  }
  a {
    color: #fab900;
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
    border-radius: 5px;
    font-weight: 700;
    font-size: 16px;
    letter-spacing: 0.02em;
    text-decoration: none;
  }
}
.date-region {
  margin-top: 30px;
}
.white-link {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 230px;
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
</style>
