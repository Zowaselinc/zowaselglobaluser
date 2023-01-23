<template>
  <DefaultNav>
    <div class="big-container">
      <div class="headings">
        <h2>Crop Traceability</h2>
        <div class="right-btns">
          <a href="/dashboard/warehouse" class="green-link">Next</a>
        </div>
      </div>
      <div class="d-flex text-center small-font">
        <a href="/dashboard/croptraceability" class="col green-link">
          Crop Information
        </a>
        <span class="pt-2 mx-1">-</span>
        <a href="/dashboard/cropquality" class="col green-link">Crop quality</a>
        <span class="pt-2 mx-1">-</span>
        <div class="col yellow-link">Input Information</div>
        <span class="pt-2 mx-1">-</span>
        <div class="col form-control small-font">Warehouse</div>
        <span class="pt-2 mx-1">-</span>
        <div class="col form-control small-font">Shipment</div>
        <span class="pt-2 mx-1">-</span>
        <div class="col form-control small-font">Recommendation</div>
      </div>

      <form class="mt-3">
        <div>
          <label for="">Fertilizers</label>
          <select id="inputState" class="form-control">
            <option selected>Choose...</option>
            <option>...</option>
          </select>
        </div>
        <div>
          <label for="">Herbicides</label>
          <select id="inputState" class="form-control">
            <option selected>Choose...</option>
            <option>...</option>
          </select>
        </div>
        <div>
          <label for="">Fungicides</label>
          <select id="inputState" class="form-control">
            <option selected>Choose...</option>
            <option>...</option>
          </select>
        </div>
        <div>
          <label for="">Insecticides</label>
          <select id="inputState" class="form-control">
            <option selected>Choose...</option>
            <option>...</option>
          </select>
        </div>
        <div>
          <label for="">Seeds</label>
          <select id="inputState" class="form-control">
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
  name: "Croptraceability",
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
