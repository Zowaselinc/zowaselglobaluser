<template>
  <DefaultNav>
    <div class="big-container">
      <div class="headings">
        <h2>Score Point System</h2>
        <!-- <div class="right-btns">
          <a href="" class="white-link">Add a Farmer</a>
          <a href="" class="green-link">Batch Upload</a>
          <a href="" class="red-link">Sent Invoice</a>
        </div> -->
      </div>
      <div class="row big-contents">
        <div class="col">
          <div class="card carded green-card">
            <h2>Gender</h2>
            <div class="texts">
              <p>Weight: 4</p>
              <p>14.8/100</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card carded blue-card">
            <h2>Age</h2>
            <div class="texts">
              <p>Weight: 1</p>
              <p>3.7/100</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card carded red-card">
            <h2>Owns a bank account</h2>
            <div class="texts">
              <p>Weight: 4</p>
              <p>14.8/100</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card carded yellow-card">
            <h2>Number of Farm Lands</h2>
            <div class="texts">
              <p>Weight: 4</p>
              <p>14.8/100</p>
            </div>
          </div>
        </div>
      </div>

      <div class="row big-contents">
        <div class="col">
          <div class="card carded blue-card">
            <h2>Number of Employees</h2>
            <div class="texts">
              <p>Weight: 4</p>
              <p>14.8/100</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card carded red-card">
            <h2>Farm Size</h2>
            <div class="texts">
              <p>Weight: 4</p>
              <p>14.8/100</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card carded yellow-card">
            <h2>Farm Address</h2>
            <div class="texts">
              <p>Weight: 4</p>
              <p>14.8/100</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card carded green-card">
            <h2>Age ofarm</h2>
            <div class="texts">
              <p>Weight: 4</p>
              <p>14.8/100</p>
            </div>
          </div>
        </div>
      </div>

      <div class="big-contents row">
        <div class="col">
          <div class="card carded red-card">
            <h2>Crop Type</h2>
            <div class="texts">
              <p>Weight: 4</p>
              <p>14.8/100</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card carded yellow-card">
            <h2>Farm ownership status</h2>
            <div class="texts">
              <p>Weight: 4</p>
              <p>14.8/100</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card carded blue-card">
            <h2>Number of crops grown</h2>
            <div class="texts">
              <p>Weight: 4</p>
              <p>14.8/100</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card carded yellow-card">
            <h2>Cropping Practice</h2>
            <div class="texts">
              <p>Weight: 4</p>
              <p>14.8/100</p>
            </div>
          </div>
        </div>
      </div>
      <div class="big-contents row">
        <div class="col">
          <div class="card carded green-card">
            <h2>Machinery Status</h2>
            <div class="texts">
              <p>Weight: 4</p>
              <p>14.8/100</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card carded blue-card">
            <h2>Monthly Revenue</h2>
            <div class="texts">
              <p>Weight: 1</p>
              <p>14.8/100</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card carded red-card">
            <h2>Cooporate Membership</h2>
            <div class="texts">
              <p>Weight: 4</p>
              <p>14.8/100</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card carded red-card">
            <h2>Inspection Status</h2>
            <div class="texts">
              <p>Weight: 4</p>
              <p>14.8/100</p>
            </div>
          </div>
        </div>
      </div>

      <!-- <div class="rating-section">
        <h3>Credit Score Rating</h3>
        <hr />

        <div class="first-row">
          <div class="score">
            <div class="top-text">
              <div class="left-text">
                <div class="dot"></div>
                <h2>Score A</h2>
              </div>
              <p>70%</p>
            </div>
            <input
              type="range"
              max="70"
              min="70"
              disabled
              class="green-range"
            />
          </div>

          <div class="score">
            <div class="top-text">
              <div class="left-text">
                <div class="dot"></div>
                <h2>Score B</h2>
              </div>
              <p>60%</p>
            </div>
            <input type="range" max="6" value="6" class="yellow-range" />
          </div>
        </div>

        <div class="second-row">
          <div class="score">
            <div class="top-text">
              <div class="left-text">
                <div class="dot"></div>
                <h2>Score C</h2>
              </div>
              <p>50%</p>
            </div>
            <input type="range" max="50" min="40" disabled class="blue-range" />
          </div>

          <div class="score">
            <div class="top-text">
              <div class="left-text">
                <div class="dot"></div>
                <h2>Score D</h2>
              </div>
              <p>40%</p>
            </div>
            <input type="range" max="40" disabled class="red-range" />
          </div>
        </div>
      </div> -->
    </div>
  </DefaultNav>
</template>

<script>
import DefaultNav from "@/layouts/DefaultNav.vue";

export default {
  name: "CreditScoring",
  components: {
    DefaultNav,
  },
  data() {
    return {
      userData: this.$store.state.user,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";

.big-container {
  width: 100%;
  height: auto;
  background: #f5f5f5;
  display: flex;
  flex-direction: column;
  padding: 1% 5% 2% 5%;
  overflow-y: scroll;

  // @include breakpoint-between(md, lg) {
  //     width: 60.5%;
  // }

  // @include breakpoint-between(lg, xl) {
  //     width: 69.5%;
  // }

  // @include breakpoint-between(xl, xxl) {
  //     width: 76%;
  // }
}

.carded {
  width: 100%;
  display: flex;
  height: 120px;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 18px 20px 15px;
  margin-top: 28px;

  p {
    font-family: "Maven Pro";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #96949c;
  }

  h2 {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 147%;
    text-transform: capitalize;
    color: #4a4754;
  }
}
.yellow-card {
  border-left: 2px solid #fde296;
}
.green-card {
  border-left: 2px solid #99dfb7;
}
.blue-card {
  border-left: 2px solid #96c0ff;
}
.red-card {
  border-left: 2px solid #e6a4a4;
}
.texts {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.big-contents {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: left;
  gap: 30px;
}
.rating-section {
  padding: 30px 62px;
  background-color: white;
  margin-top: 50px;
  width: 100%;
}
.headings {
  margin-top: 40px;
}

.first-row {
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;

  .score {
    width: 50%;
    display: flex;
    flex-direction: column;

    .top-text {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }

    h2 {
      font-family: "Maven Pro";
      font-style: normal;
      font-weight: 700;
      font-size: 12px;
      display: flex;
      align-items: center;
      letter-spacing: 0.04em;
      color: #151522;
    }

    p {
      font-family: "Maven Pro";
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 130%;
      align-items: center;
      text-align: right;
      color: #151522;
    }
  }
}

.second-row {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 50px;
  margin-top: 40px;

  .score {
    width: 50%;
    display: flex;
    flex-direction: column;

    .top-text {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }

    h2 {
      font-family: "Maven Pro";
      font-style: normal;
      font-weight: 700;
      font-size: 12px;
      display: flex;
      align-items: center;
      letter-spacing: 0.04em;
      color: #151522;
    }

    p {
      font-family: "Maven Pro";
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 130%;
      align-items: center;
      text-align: right;
      color: #151522;
    }
  }
}
</style>
