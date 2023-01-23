<template>
  <DefaultNav>
    <div class="big-container">
      <div class="headings">
        <h2>Sustainability</h2>
        <div class="right-btns">
          <a href="/dashboard/foodsafety" class="green-link">Next</a>
        </div>
      </div>
      <div class="d-flex text-center small-font">
        <a href="/dashboard/sustainability" class="col green-link">Living</a>
        <span class="pt-2 mx-3">-</span>
        <a href="/dashboard/care" class="col green-link">Care</a>
        <span class="pt-2 mx-3">-</span>
        <div class="col yellow-link">Plant</div>
        <span class="pt-2 mx-3">-</span>
        <div class="col form-control small-font">Food safety and quality</div>
      </div>

      <form class="mt-4">
        <div class="mt-4">
          <label for="">Do you plan to expand your farm? </label>
          <select class="form-select" aria-label="Default select example">
            <option selected>Choose...</option>
            <option>...</option>
          </select>
        </div>
        <div class="mt-4">
          <label for="">What crop do you cultivate? </label>
          <select class="form-select" aria-label="Default select example">
            <option selected>Choose...</option>
            <option>...</option>
          </select>
        </div>
        <div class="row mt-4">
          <div class="col">
            <label for="">What Variety is your crop? </label>
            <input
              type="text"
              class="form-control"
              placeholder="Enter your answer"
            />
          </div>
          <div class="col">
            <label for="">Did you raise/buy it? </label>
            <select class="form-select" aria-label="Default select example">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
        </div>
        <div class="mt-4">
          <label for=""> If bought, Where do you buy it from? Name </label>
          <input
            type="text"
            class="form-control"
            placeholder="Enter your answer"
          />
        </div>
        <div class="mt-4">
          <label for=""> How much per seedling? </label>
          <input
            type="text"
            class="form-control"
            placeholder="Enter your answer"
          />
        </div>
        <div class="row mt-4">
          <div class="col">
            <label for="">What quantity did you buy? </label>
            <input
              type="text"
              class="form-control"
              placeholder="Enter your answer"
            />
          </div>
          <div class="col">
            <label for="">Do you have degraded land in your community?</label>
            <select class="form-select" aria-label="Default select example">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
        </div>
        <div class="row mb-3">
          <div class="col">
            <label for=""
              >Do you practice crop rotations to increase biodiversity?
            </label>
            <select class="form-select" aria-label="Default select example">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
          <div class="col">
            <label for=""
              >When is your planting season now compared to previous
              years?</label
            >
            <select class="form-select" aria-label="Default select example">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
        </div>
        <div class="row mb-3">
          <div class="col">
            <label for=""
              >Do you experience drought, floods, on your farmland?</label
            >
            <select class="form-select" aria-label="Default select example">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
          <div class="col">
            <label for="">Do you practice bush burning?</label>
            <select class="form-select" aria-label="Default select example">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
        </div>
        <div class="row mb-3">
          <div class="col">
            <label for="">Do you own a mill? </label>
            <select class="form-select" aria-label="Default select example">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
          <div class="col">
            <label for=""
              >At the mill, what is your energy source for milling your
              FFB?</label
            >
            <select class="form-select" aria-label="Default select example">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
        </div>
        <div class="row mb-3">
          <div class="col">
            <label for=""
              >How many crop trees have you replaced in the past 3 years?
            </label>
            <select class="form-select" aria-label="Default select example">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
          <div class="col">
            <label for="">How were they placed?</label>
            <select class="form-select" aria-label="Default select example">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
        </div>
        <div class="row mb-3">
          <div class="col">
            <label for="">What is the source of water for your farm? </label>
            <select class="form-select" aria-label="Default select example">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
          <div class="col">
            <label for="">Do you plant cover crops on your farmlands?</label>
            <select class="form-select" aria-label="Default select example">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
        </div>
        <div class="row mb-3">
          <div class="col">
            <label for="">Do you practice intercropping? </label>
            <select class="form-select" aria-label="Default select example">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
          <div class="col">
            <label for=""
              >If yes, what crop do you intercrop on your Oil palm or Cocoa
              farm?</label
            >
            <select class="form-select" aria-label="Default select example">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
        </div>
        <div class="row mb-3">
          <div class="col">
            <label for=""
              >Are you aware of good waste management practices?
            </label>
            <select class="form-select" aria-label="Default select example">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
          <div class="col">
            <label for="">How do you dispose of your agricultural waste?</label>
            <select class="form-select" aria-label="Default select example">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
        </div>
        <div class="row mb-3">
          <div class="col">
            <label for=""
              >Do you reuse or recycle agricultural waste from your farm?</label
            >
            <select class="form-select" aria-label="Default select example">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
          <div class="col">
            <label for=""
              >Has your farm suffered from drought, floods, etc.?</label
            >
            <select class="form-select" aria-label="Default select example">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
        </div>
        <div class="row mb-3">
          <div class="col">
            <label for="">If Yes, when?</label>
            <select class="form-select" aria-label="Default select example">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
          <div class="col">
            <label for=""
              >Does your farm generate grey water during agricultural
              activities?</label
            >
            <select class="form-select" aria-label="Default select example">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
        </div>
        <div class="mt-4">
          <label for=""> If Yes, do you recycle it?</label>
          <select class="form-select" aria-label="Default select example">
            <option selected>Choose...</option>
            <option>...</option>
          </select>
        </div>
        <div class="mt-4">
          <label for="">
            Is there any unpleasant odor or dust generated from your farming
            activities which affects the air quality of workers or your
            neighborhood?</label
          >
          <select class="form-select" aria-label="Default select example">
            <option selected>Choose...</option>
            <option>...</option>
          </select>
        </div>
        <div class="mt-4">
          <label for="">
            If Yes, how often in 12 Months do you generate this
            pollution?</label
          >
          <select class="form-select" aria-label="Default select example">
            <option selected>Choose...</option>
            <option>...</option>
          </select>
        </div>
        <div class="mt-4">
          <label for="">
            What measures are in place to address grievances and reduce impact?
          </label>
          <textarea
            class="form-control"
            rows="6"
            placeholder="Enter text"
          ></textarea>
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
