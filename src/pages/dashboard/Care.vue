<template>
  <DefaultNav>
    <div class="big-container">
      <div class="headings">
        <h2>Sustainability</h2>
        <div class="right-btns">
          <a href="/dashboard/plant" class="green-link">Next</a>
        </div>
      </div>
      <div class="d-flex text-center small-font">
        <a href="sustainability" class="col green-link">Living</a>
        <span class="pt-2 mx-3">-</span>
        <div class="col yellow-link">Care</div>
        <span class="pt-2 mx-3">-</span>
        <div class="col form-control small-font">Plant</div>
        <span class="pt-2 mx-3">-</span>
        <div class="col form-control small-font">Food safety and quality</div>
      </div>

      <form class="mt-4">
        <div>
          <label for="">Where is the health centare located?</label>
          <textarea
            class="form-control"
            rows="6"
            placeholder="Enter text"
          ></textarea>
        </div>
        <div class="mt-4">
          <label for=""
            >How many healthcare centres are in the community?</label
          >
          <select class="form-select" aria-label="Default select example">
            <option selected>Choose...</option>
            <option>...</option>
          </select>
        </div>
        <div class="row mt-4">
          <div class="col">
            <label for=""
              >What is the distance from your house to the community health
              center?
            </label>
            <input
              type="text"
              class="form-control"
              placeholder="Enter your answer"
            />
          </div>
          <div class="col">
            <label for="">Are they functional?</label>
            <input
              type="text"
              class="form-control"
              placeholder="Enter your answer"
            />
          </div>
        </div>
        <div class="row mt-4">
          <div class="col">
            <label for=""
              >Can you afford medical care for members of your household?
            </label>
            <input
              type="text"
              class="form-control"
              placeholder="Enter your answer"
            />
          </div>
          <div class="col">
            <label for=""
              >What is the distance from your farm to the health center?
              Specify</label
            >
            <select class="form-select" aria-label="Default select example">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
        </div>
        <div class="mt-4">
          <label for="">
            In the event of Injuries at the farm, what do you do?
          </label>
          <textarea
            class="form-control"
            rows="6"
            placeholder="Enter text"
          ></textarea>
        </div>
        <div class="row mb-3">
          <div class="col">
            <label for="">Do you have access to a First aid box? </label>
            <select class="form-select" aria-label="Default select example">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
          <div class="col">
            <label for="">Are they functional?</label>
            <select class="form-select" aria-label="Default select example">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
        </div>
        <div class="mt-4">
          <label for=""
            >When was the last time you checked your blood pressure and blood
            sugar level?</label
          >
          <select class="form-select" aria-label="Default select example">
            <option selected>Choose...</option>
            <option>...</option>
          </select>
        </div>
        <div class="mt-4">
          <label for=""
            >How many children from 5-18years in your household are in
            school?</label
          >
          <select class="form-select" aria-label="Default select example">
            <option selected>Choose...</option>
            <option>...</option>
          </select>
        </div>
        <div class="mt-4">
          <label for="">What level of education are they?</label>
          <select class="form-select" aria-label="Default select example">
            <option selected>Choose...</option>
            <option>...</option>
          </select>
        </div>
        <div class="row mb-3">
          <div class="col">
            <label for="">How many schools are there in the community?</label>
            <select class="form-select" aria-label="Default select example">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
          <div class="col">
            <label for="">Are they functional?</label>
            <select class="form-select" aria-label="Default select example">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
        </div>
        <div class="row mb-3">
          <div class="col">
            <label for="">What is your highest level of education </label>
            <select class="form-select" aria-label="Default select example">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
          <div class="col">
            <label for=""
              >If studying presently, are you studying full-time or
              part-time?</label
            >
            <select class="form-select" aria-label="Default select example">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
        </div>
        <div class="mt-4">
          <label for="">Where did you study?</label>
          <input
            type="text"
            class="form-control"
            placeholder="Enter your answer"
          />
        </div>
        <div class="mt-4">
          <label for="">Do you have alternative sources of income?</label>
          <select class="form-select" aria-label="Default select example">
            <option selected>Choose...</option>
            <option>...</option>
          </select>
        </div>
      </form>
    </div>
  </DefaultNav>
</template>

<script>
import DefaultNav from "@/layouts/DefaultNav.vue";
export default {
  name: "Sustainability",
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
  padding: 24px 65px;
  margin-top: 40px;

  h2 {
    font-family: "Maven Pro";
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 21px;
    color: #696671;
  }
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
    width: 145px;
    height: 40px;
    background: #05b050;
    border-radius: 5px;
    font-weight: 700;
    font-size: 16px;
    letter-spacing: 0.02em;
  }
}
.green-link {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  width: 145px;
  height: 40px;
  background: #05b050;
  border-radius: 5px;
  letter-spacing: 0.02em;
}
.yellow-link {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;
  color: white;
  width: 145px;
  height: 40px;
  background: #fab900 !important;
  border-radius: 5px;
  letter-spacing: 0.02em;
}
a {
  text-decoration: none;
}
.small-font {
  font-size: 11px !important;
}
</style>
