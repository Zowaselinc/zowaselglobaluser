<template>
  <DefaultNav>
    <div class="big-container">
      <div class="headings">
        <div class="left-side">
          <a href="/dashboard/each-loan"
            ><img src="@/assets/images/vectors/arrowleft.png" alt=""
          /></a>
          <h2 class="loan-detail">Loan Details</h2>
        </div>
      </div>

      <div class="long-card">
        <div class="each-card">
          <p>Amount</p>
          <h2 class="green-text">NGN 5,765,986</h2>
        </div>
        <div class="each-card">
          <p>Date of Issuance</p>
          <h2 class="blue-text">23rd Oct, 2022</h2>
        </div>
        <div class="each-card">
          <p>Due Date</p>
          <h2 class="red-text">13th Feb, 2023</h2>
        </div>
        <div class="each-card">
          <p>Status</p>
          <h2 class="yellow-text">Active</h2>
        </div>
      </div>

      <div class="loan-details">
        <div class="left-details">
          <div class="each-detail">
            <h4>First Name</h4>
            <p>Sarah</p>
          </div>
          <div class="each-detail">
            <h4>Surname</h4>
            <p>Okon</p>
          </div>
          <div class="each-detail">
            <h4>Middle Name</h4>
            <p>Oliver</p>
          </div>
          <div class="each-detail">
            <h4>Telephone</h4>
            <p>08077248826</p>
          </div>
          <div class="each-detail">
            <h4>Age</h4>
            <p>26</p>
          </div>
          <div class="each-detail">
            <h4>Gender</h4>
            <p>Female</p>
          </div>
          <div class="each-detail">
            <h4>Language</h4>
            <p>Yoruba</p>
          </div>
          <div class="each-detail">
            <h4>Marital Status</h4>
            <p>Single</p>
          </div>
          <div class="each-detail">
            <h4>Bank Name</h4>
            <p>Access</p>
          </div>
          <div class="each-detail">
            <h4>Account Number</h4>
            <p>0176654222</p>
          </div>
          <div class="each-detail">
            <h4>BVN</h4>
            <p>9388393033393</p>
          </div>
          <div class="each-detail">
            <h4>Means of Identification</h4>
            <p>National ID card</p>
          </div>
          <div class="each-detail">
            <h4>Issue Date</h4>
            <p>2nd May 2022</p>
          </div>
          <div class="each-detail">
            <h4>Expiry Date</h4>
            <p>23 Dec 2025</p>
          </div>
          <div class="each-detail">
            <h4>NIN</h4>
            <p>2233220176654222</p>
          </div>
          <div class="each-detail">
            <h4>Permanent Address</h4>
            <p>No 29 Goya street Taraba</p>
          </div>
          <div class="each-detail">
            <h4>Nearest Land Mark</h4>
            <p>Shuna LLC</p>
          </div>
        </div>
        <div class="right-details">
          <div class="each-detail">
            <h4>State of origin</h4>
            <p>Akwa Ibom</p>
          </div>
          <div class="each-detail">
            <h4>In a Farmers group?</h4>
            <p>Yes</p>
          </div>
          <div class="each-detail">
            <h4>Reason for not being in one</h4>
            <p>None</p>
          </div>
          <div class="each-detail">
            <h4>Farmer Group/ Cooperative Name</h4>
            <p>Lalaloops Inc</p>
          </div>
          <div class="each-detail">
            <h4>Number of Members</h4>
            <p>84</p>
          </div>
          <h3>Next of Kin</h3>
          <div class="each-detail">
            <h4>First Name</h4>
            <p>Salisu</p>
          </div>
          <div class="each-detail">
            <h4>Surname</h4>
            <p>Gibbs</p>
          </div>
          <div class="each-detail">
            <h4>Middle Name</h4>
            <p>Rambo</p>
          </div>
          <div class="each-detail">
            <h4>Relationship with Next of kin</h4>
            <p>Cousin</p>
          </div>
          <div class="each-detail">
            <h4>Occupation</h4>
            <p>Farmer</p>
          </div>
          <div class="each-detail">
            <h4>Telephone</h4>
            <p>08123876635</p>
          </div>
          <div class="each-detail">
            <h4>Permanent Address</h4>
            <p>No 29 Gada Biu</p>
          </div>
          <div class="each-detail">
            <h4>Nearest Land Mark</h4>
            <p>A town Hall, Different</p>
          </div>
          <div class="each-detail">
            <h4>NIN</h4>
            <p>2233220176654222</p>
          </div>
          <div class="each-detail">
            <h4>Permanent Address</h4>
            <p>No 29 Goya street Taraba</p>
          </div>
        </div>
      </div>
    </div>
  </DefaultNav>
</template>

<script>
import DefaultNav from "@/layouts/DefaultNav.vue";
export default {
  name: "LoanDetails",
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
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;

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
.blue-text {
  font-family: "Maven Pro";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  color: #2b7fff;
}
.red-text {
  font-family: "Maven Pro";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  color: #cd4647;
}
.yellow-text {
  font-family: "Maven Pro";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  color: #fab900;
}
</style>
