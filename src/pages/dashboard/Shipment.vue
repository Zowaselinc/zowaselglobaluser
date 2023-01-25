<template>
  <DefaultNav>
    <div class="big-container">
      <div class="headings">
        <h2>Crop Traceability</h2>
        <div class="right-btns">
          <a href="/dashboard/recommendation" class="green-link">Next</a>
        </div>
      </div>
      <div class="d-flex text-center small-font">
        <a href="/dashboard/croptraceability" class="col green-link">
          Crop Information
        </a>
        <span class="pt-2 mx-1">-</span>
        <a href="/dashboard/cropquality" class="col green-link">Crop quality</a>
        <span class="pt-2 mx-1">-</span>
        <a href="/dashboard/inputinformation" class="col green-link"
          >Input Information</a
        >
        <span class="pt-2 mx-1">-</span>
        <a href="/dashboard/warehouse" class="col green-link">Warehouse</a>
        <span class="pt-2 mx-1">-</span>
        <div class="col yellow-link">Shipment</div>
        <span class="pt-2 mx-1">-</span>
        <div class="col form-control small-font">Recommendation</div>
      </div>

      <form class="mt-4">
        <div>
          <label for="">Shipment location</label>
          <textarea
            class="form-control"
            rows="6"
            placeholder="Enter your answer"
          ></textarea>
        </div>
        <div class="row mt-4">
          <div class="col">
            <label for="">Loading date </label>
            <input
              type="date"
              class="form-control"
              placeholder="Enter your answer"
            />
          </div>
          <div class="col">
            <label for="">Number of people involved in loading</label>
            <input
              type="text"
              class="form-control"
              placeholder="Enter your answer"
            />
          </div>
        </div>
        <div class="mt-4">
          <label for="">Capacity of vehicle</label>
          <input
            type="text"
            class="form-control"
            placeholder="Enter your answer"
          />
        </div>
        <div class="row mt-4">
          <div class="col">
            <label for="">Type of vehicle & colour </label>
            <input
              type="text"
              class="form-control"
              placeholder="Enter your answer"
            />
          </div>
          <div class="col">
            <label for="">Plate number of vehicle</label>
            <input
              type="text"
              class="form-control"
              placeholder="Enter your answer"
            />
          </div>
        </div>
        <div class="row mt-4">
          <div class="col">
            <label for="">Driver's name </label>
            <input
              type="text"
              class="form-control"
              placeholder="Enter your answer"
            />
          </div>
          <div class="col">
            <label for="">Driver's phone number</label>
            <input
              type="text"
              class="form-control"
              placeholder="Enter your answer"
            />
          </div>
        </div>
        <div class="mt-4">
          <label for=""> Goods in Transit insurance </label>
          <input
            type="text"
            class="form-control"
            placeholder="Enter your answer"
          />
        </div>
        <div class="mt-4">
          <label for="">Estimated time to travel to delivery location </label>
          <select class="form-select" aria-label="Default select example">
            <option selected>Choose...</option>
            <option>...</option>
          </select>
        </div>
        <div class="row mt-4">
          <div class="col">
            <label for="">Delivery date </label>
            <input
              type="date"
              class="form-control"
              placeholder="Enter your answer"
            />
          </div>
          <div class="col">
            <label for="">Time of arrival</label>
            <input
              type="text"
              class="form-control"
              placeholder="Enter your answer"
            />
          </div>
        </div>
        <div class="mt-4">
          <label for=""
            >Estimated number of Police, Soldiers, Customs, VIO, NDLEA, and FRSC
            checkpoints encountered
          </label>
          <select class="form-select" aria-label="Default select example">
            <option selected>Choose...</option>
            <option>...</option>
          </select>
        </div>
        <div class="row mb-3">
          <div class="col">
            <label for="">Cost of Local Government Levy </label>
            <input
              type="text"
              class="form-control"
              placeholder="Enter your answer"
            />
          </div>
          <div class="col">
            <label for="">Cost of State Government Levy</label>
            <input
              type="text"
              class="form-control"
              placeholder="Enter your answer"
            />
          </div>
        </div>
        <div class="row mb-3">
          <div class="col">
            <label for="">Heavy truck levy </label>
            <input
              type="text"
              class="form-control"
              placeholder="Enter your answer"
            />
          </div>
          <div class="col">
            <label for="">Inter-state levy</label>
            <input
              type="text"
              class="form-control"
              placeholder="Enter your answer"
            />
          </div>
        </div>
        <div class="row mb-3">
          <div class="col">
            <label for="">Number of people involved in offloading </label>
            <input
              type="text"
              class="form-control"
              placeholder="Enter your answer"
            />
          </div>
          <div class="col">
            <label for="">Quality check</label>
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
