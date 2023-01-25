<template>
  <DefaultNav>
    <div class="big-container">
      <div class="headings">
        <h2>Sustainability</h2>
        <div class="right-btns">
          <a href="" class="green-link">Save</a>
        </div>
      </div>
      <div class="d-flex text-center small-font">
        <a href="/dashboard/sustainability" class="col green-link">Living</a>
        <span class="pt-2 mx-3">-</span>
        <a href="/dashboard/care" class="col green-link">Care</a>
        <span class="pt-2 mx-3">-</span>
        <a href="plant" class="col green-link">Plant</a>
        <span class="pt-2 mx-3">-</span>
        <div class="col yellow-link">Food safety and quality</div>
      </div>

      <form class="mt-4">
        <div class="mt-4">
          <label for="">Do you ferment your Cocoa Beans?</label>
          <select class="form-select" aria-label="Default select example">
            <option selected>Choose...</option>
            <option>...</option>
          </select>
        </div>
        <div class="mt-4">
          <label for="">If yes, how many days? </label>
          <input
            type="text"
            class="form-control"
            placeholder="Enter your answer"
          />
        </div>
        <div class="row mt-4">
          <div class="col">
            <label for="">If No, why? </label>
            <input
              type="text"
              class="form-control"
              placeholder="Enter your answer"
            />
          </div>
          <div class="col">
            <label for=""
              >What quantity of broken cocoa beans do you get after harvest?
            </label>
            <select class="form-select" aria-label="Default select example">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
        </div>
        <div class="mt-4">
          <label for=""> What do you do with them?</label>
          <select class="form-select" aria-label="Default select example">
            <option selected>Choose...</option>
            <option>...</option>
          </select>
        </div>
        <div class="row mt-4">
          <div class="col">
            <label for=""
              >What quanity of unripe/rotten oil palm FFB do you get after
              haverst?
            </label>
            <select class="form-select" aria-label="Default select example">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
          <div class="col">
            <label for="">What do you do with them?</label>
            <select class="form-select" aria-label="Default select example">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
        </div>
        <div class="row mb-3">
          <div class="col">
            <label for="">Where do you store your cocoa after harvest? </label>
            <select class="form-select" aria-label="Default select example">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
          <div class="col">
            <label for="">Where do you store your FFB after harvest?</label>
            <select class="form-select" aria-label="Default select example">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
        </div>
        <div class="mt-4">
          <label for="">
            What pre-emergence and post emergence herbicide do you use in your
            farmland? Name:
          </label>
          <textarea
            class="form-control"
            rows="6"
            placeholder="Enter text"
          ></textarea>
        </div>
        <div class="mt-4">
          <label for=""
            >Where do you store your fertilizers, pesticides, fungicides and
            herbicides?</label
          >
          <select class="form-select" aria-label="Default select example">
            <option selected>Choose...</option>
            <option>...</option>
          </select>
        </div>
        <div class="row mb-3">
          <div class="col">
            <label for="">Where do you buy your agro chemicals from?</label>
            <select class="form-select" aria-label="Default select example">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
          <div class="col">
            <label for=""
              >What do you use to harvest your Oil Palm bunches?</label
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
              >What do you wear when applying agro chemicals?
            </label>
            <select class="form-select" aria-label="Default select example">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
          <div class="col">
            <label for=""
              >How do you dispose off the chemical containers?</label
            >
            <select class="form-select" aria-label="Default select example">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
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
