<template>
  <DefaultNav>
    <div class="big-container">
      <div class="headings">
        <h2>Sustainability</h2>
        <div class="right-btns">
          <a href="" class="green-link">Next</a>
        </div>
      </div>
      <div class="d-flex text-center small-font">
        <div class="col yellow-link">Living</div>
        <span class="pt-2 mx-3">-</span>
        <div class="col form-control small-font">Care</div>
        <span class="pt-2 mx-3">-</span>
        <div class="col form-control small-font">Plant</div>
        <span class="pt-2 mx-3">-</span>
        <div class="col form-control small-font">Food safety and quality</div>
      </div>

      <form class="mt-3">
        <div>
          <label for=""
            >What is the ownership status of the house that you live in?</label
          >
          <select id="inputState" class="form-control">
            <option selected>Choose...</option>
            <option>...</option>
          </select>
        </div>
        <div>
          <label for=""
            >do you or your family own any other houses other than this that you
            are living in?</label
          >
          <select id="inputState" class="form-control">
            <option selected>Choose...</option>
            <option>...</option>
          </select>
        </div>
        <div>
          <label for="">
            If a caretaker or inherited, what is your relationship with the
            owner?
          </label>
          <input
            type="text"
            class="form-control"
            placeholder="Enter your answer"
          />
        </div>
        <div class="row">
          <div class="col">
            <label for=""
              >How many people are currently living in your household eats from
              the same pot?
            </label>
            <select id="inputState" class="form-control">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
          <div class="col">
            <label for="">How many adult males in your household?</label>
            <select id="inputState" class="form-control">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <label for=""
              >How many children above the age of 16 live in your household?
            </label>
            <select id="inputState" class="form-control">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
          <div class="col">
            <label for="">How many adult females in your household?</label>
            <select id="inputState" class="form-control">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
        </div>
        <div>
          <label for=""> Number of female farmers to men </label>
          <input
            type="text"
            class="form-control"
            placeholder="Enter your answer"
          />
        </div>
        <div class="row">
          <div class="col">
            <label for="">Corporative name</label>
            <input
              type="text"
              class="form-control"
              placeholder="Enter your answer"
            />
          </div>
          <div class="col">
            <label for="">Number of farmer group</label>
            <input
              type="text"
              class="form-control"
              placeholder="Enter your answer"
            />
          </div>
        </div>
        <div class="row">
          <div class="col">
            <label for="">Farmer name</label>
            <input
              type="text"
              class="form-control"
              placeholder="Enter your answer"
            />
          </div>
          <div class="col">
            <label for="">Gender</label>
            <select id="inputState" class="form-control">
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
form {
  overflow-y: auto;
  overflow-x: hidden;
}
.big-container {
  width: 100%;
  height: auto;
  background: #f5f5f5;
  display: flex;
  flex-direction: column;
  padding: 2% 5% 2% 3%;
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
    width: 180px;
    height: 40px;
    background: #05b050;
    border-radius: 5px;
    font-weight: 700;
    font-size: 16px;
    letter-spacing: 0.02em;
  }
}
.yellow-link {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;
  color: white;
  width: 180px;
  height: 40px;
  background: #fab900 !important;
  border-radius: 5px;
  letter-spacing: 0.02em;
}
.small-font {
  font-size: 11px !important;
}
</style>
