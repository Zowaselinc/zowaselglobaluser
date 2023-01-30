<template>
  <DefaultNav>
    <div class="big-container">
      <div class="headings">
        <h2>Sustainability</h2>
        <div class="right-btns">
          <a href="/dashboard/care" class="green-link">Next</a>
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

      <form class="mt-4">
        <div>
          <label for=""
            >What is the ownership status of the house that you live in?</label
          >
          <select class="form-select" aria-label="Default select example">
            <option selected>Choose...</option>
            <option>...</option>
          </select>
        </div>
        <div class="mt-4">
          <label for=""
            >do you or your family own any other houses other than this that you
            are living in?</label
          >
          <select class="form-select" aria-label="Default select example">
            <option selected>Choose...</option>
            <option>...</option>
          </select>
        </div>
        <div class="mt-4">
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
        <div class="row mt-4">
          <div class="col">
            <label for=""
              >How many people are currently living in your household eats from
              the same pot?
            </label>
            <select class="form-select" aria-label="Default select example">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
          <div class="col">
            <label for="">How many adult males in your household?</label>
            <select class="form-select" aria-label="Default select example">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
        </div>
        <div class="row mt-4">
          <div class="col">
            <label for=""
              >How many children above the age of 16 live in your household?
            </label>
            <select class="form-select" aria-label="Default select example">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
          <div class="col">
            <label for="">How many adult females in your household?</label>
            <select class="form-select" aria-label="Default select example">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
        </div>
        <div class="row mt-4">
          <label for=""
            >Which of the following people, if any, currently live with you in
            your household?</label
          >
          <div class="col-md-4">
            <input type="checkbox" class="me-3" />
            <label for=""> My partner/spouse</label>
          </div>
          <div class="col-md-4">
            <input type="checkbox" class="me-3" />
            <label for=""> My parents</label>
          </div>
          <div class="col-md-4">
            <input type="checkbox" class="me-3" />
            <label for=""> My neices/nephews</label>
          </div>
          <div class="col-md-4">
            <input type="checkbox" class="me-3" />
            <label for=""> My children</label>
          </div>
          <div class="col-md-4">
            <input type="checkbox" class="me-3" />
            <label for=""> My grandchildren</label>
          </div>
        </div>
        <div class="mt-4">
          <label for=""
            >Compared to the general standard of living in Nigeria, how would
            you describe your standard of living?</label
          >
          <textarea
            class="form-control"
            rows="6"
            placeholder="Enter text"
          ></textarea>
        </div>
        <div class="row mb-3">
          <div class="col">
            <label for="">What is your main cooking method at home? </label>
            <select class="form-select" aria-label="Default select example">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
          <div class="col">
            <label for="">What is your main cooking method at home?</label>
            <select class="form-select" aria-label="Default select example">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
        </div>
        <div class="row mb-3">
          <div class="col">
            <label for="">Do you have electricity where you live? </label>
            <select class="form-select" aria-label="Default select example">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
          <div class="col">
            <label for="">What type of toilet do you have in your home?</label>
            <select class="form-select" aria-label="Default select example">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
        </div>
        <div class="mt-4">
          <label for=""
            >How do you pay for your Government power line usage?</label
          >
          <select class="form-select" aria-label="Default select example">
            <option selected>Choose...</option>
            <option>...</option>
          </select>
        </div>
        <div class="row mb-3">
          <div class="col">
            <label for="">Are you a member of any cooperative? </label>
            <select class="form-select" aria-label="Default select example">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
          <div class="col">
            <label for=""
              >Name of Cooperative Society, Association, or Cluster</label
            >
            <select class="form-select" aria-label="Default select example">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
        </div>
        <div class="row mb-3">
          <div class="col">
            <label for="">Position in cooperative society. </label>
            <select class="form-select" aria-label="Default select example">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
          <div class="col">
            <label for=""
              >Have you accessed any input/loan from the cooperative?</label
            >
            <select class="form-select" aria-label="Default select example">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
        </div>
        <div class="mt-4">
          <label for="">If yes, what input?</label>
          <input
            type="text"
            class="form-control"
            placeholder="Enter your answer"
          />
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
