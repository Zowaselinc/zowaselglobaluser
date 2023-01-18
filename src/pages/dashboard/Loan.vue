<template>
  <DefaultNav>
    <div class="big-container">
      <div class="headings">
        <h2>Loan Application Form</h2>
        <div class="right-btns">
          <a href="" class="green-link">Apply</a>
        </div>
      </div>

      <form>
        <div class="row">
          <div class="col">
            <label for="">Gender</label>
            <input type="text" class="form-control" placeholder="First name" />
          </div>
          <div class="col">
            <label for="">Age</label>
            <select id="inputState" class="form-control">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <label for="">Gender</label>
            <input type="text" class="form-control" placeholder="First name" />
          </div>
          <div class="col">
            <label for="">Age</label>
            <select id="inputState" class="form-control">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <label for="">Gender</label>
            <input type="text" class="form-control" placeholder="First name" />
          </div>
          <div class="col">
            <label for="">Age</label>
            <select id="inputState" class="form-control">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <label for="">Gender</label>
            <input type="text" class="form-control" placeholder="First name" />
          </div>
          <div class="col">
            <label for="">Age</label>
            <select id="inputState" class="form-control">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <label for="">Gender</label>
            <input type="text" class="form-control" placeholder="First name" />
          </div>
          <div class="col">
            <label for="">Age</label>
            <select id="inputState" class="form-control">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <label for="">Gender</label>
            <input type="text" class="form-control" placeholder="First name" />
          </div>
          <div class="col">
            <label for="">Age</label>
            <select id="inputState" class="form-control">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <label for="">Gender</label>
            <input type="text" class="form-control" placeholder="First name" />
          </div>
          <div class="col">
            <label for="">Age</label>
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
  name: "Loan",
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
</style>
