<template>
  <div class="main-content">
    <div class="right">
      <div class="top-texts">
        <h3>Newest</h3>
        <div class="top-text-right">
          <p class="mb-0">sort by</p>
          <select id="" name="">
            <option value="">Best net price</option>
          </select>
        </div>
      </div>
      <template v-if="view == 'cropwanted'">
        <a
          v-for="(crop, index) in wanted.rows"
          :key="index"
          href="#"
          class="each-item"
          @click="
            $router.push({ name: 'CropDetails', params: { id: crop.id } })
          "
        >
          <p>{{ crop.title }}</p>
          <p>
            <b>{{ crop.category.name }}</b>
          </p>
          <p>
            {{ crop.currency }} {{ crop.specification.price }}/{{
              crop.packaging
            }}
          </p>
          <p>{{ crop.user.first_name }}</p>
        </a>
      </template>

      <template v-if="view == 'inputs'">
        <div class="big-contents">
          <div class="small-contents">
            <a
              v-for="(input, index) in inputs"
              :key="index"
              :href="'/dashboard/marketplace/product/' + input.id"
              class="each-product"
            >
              <p class="badge">-36%</p>
              <img :src="input.images[0]" alt="" />
              <h3>{{ input.title }}</h3>
              <p>{{ input.description }}</p>
              <h3>{{ input.currency }}{{ input.price }}</h3>
            </a>
          </div>
        </div>
        <!-- <a href="#" @click="$router.push({ name: 'CropDetails', params: { id: crop.id } })"
                    v-for="crop, index in auctions.rows" :key="index" class="each-item">
                    <p>{{ crop.title }}</p>
                    <p><b>{{ crop.category.name }}</b></p>
                    <p>{{ crop.currency }} {{ crop.specification.price }}/{{ crop.packaging }}</p>
                    <p>{{ crop.user.first_name }}</p>
                </a> -->
      </template>

      <div class="tags mb-2">
        <h4 class="mb-0">Related</h4>
        <a href="#">cash Crops</a>
        <a href="#">Seeds</a>
        <a href="#">Cocoa</a>
        <a href="#">Machinery</a>
        <a href="#">grains</a>
        <a href="#">aalm Oil</a>
      </div>
      <!-- pagination -->
      <nav
        aria-label="Page navigation example"
        class="d-flex justify-content-center my-4"
      >
        <ul class="pagination">
          <li class="page-item">
            <a
              id="carret-icon"
              class="page-link"
              href="#"
              aria-label="Previous"
            >
              <span aria-hidden="true">&lt;</span>
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">1</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">2</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">3</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">4</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">5</a>
          </li>
          <li id="carret-icon" class="page-item">
            <a id="carret-icon" class="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&gt;</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import MarketplaceService from "@/services/marketplace";
export default {
  name: "MerchantMarket",
  components: {},
  props: {
    view: String,
  },
  data() {
    return {
      categories: [],
      wanted: {},
      inputs: {},
      filters: {
        type: "",
        kg: "",
      },
    };
  },
  mounted() {
    this.getCropCategories();
    this.getCropsWanted();
    this.getInputs();
  },
  methods: {
    checked() {
      var box = document.getElementById("checkbox");
      var deColor = box.style.backgroundColor;
      if (deColor == "white") {
        deColor = "green";
      }
    },
    getCropCategories() {
      MarketplaceService.getCropCategories((response) => {
        this.categories = response.data;
      });
    },
    getCropsWanted() {
      MarketplaceService.getCropsWanted((response) => {
        this.wanted = response.data;
      });
    },
    getInputs() {
      MarketplaceService.getInputs((response) => {
        for (var i = 0; i < response.data.length; i++) {
          response.data[i].images = JSON.parse(response.data[i].images);
        }
        this.inputs = response.data;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.top-texts {
  h3 {
    font-size: 20px;
  }

  select {
    font-size: 14px;
  }

  p {
    font-size: 14px;
  }
}

.top-text {
  width: 100%;
  background: #262c3f;
  color: white;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 700;
    font-size: 68px;
  }
}

.second-bar {
  width: 100%;
  background-color: white;
  padding-top: 50px;
  padding-bottom: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.input-area {
  width: 60%;
  display: flex;
  align-items: center;

  input {
    width: 95%;
    height: 60px;
    margin-top: 0px;
    border: 1px solid #05b050 !important;
    border-radius: 5px;
  }

  .icon {
    width: 54px;
    height: 60px;
    background-color: #05b050;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.button-area {
  margin-top: 35px;
  display: flex;
  gap: 16px;
  width: 60%;
  justify-content: space-between;

  button {
    background-color: white;
    height: 40px;
    padding: 0px 35px;
    border: 1px solid #696671;
    border-radius: 55px;
    font-family: "Maven Pro";
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    color: #696671;
  }

  .green-btns {
    border: none;
    color: white;
    background: #05b050;
  }
}

.main-content {
  background: #f1f1f1;
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 50px 20px;
  justify-content: center;

  .left {
    width: 25%;
    background-color: white;
    padding: 40px 20px;

    h3 {
      margin-top: 30px;
      margin-bottom: 20px;
    }
  }

  .check {
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;

    input {
      width: 100%;
      height: 100%;
    }
  }

  #checkbox {
    background-color: white;
  }
}

.each-type {
  display: flex;
  justify-content: space-between;

  .left-type {
    display: flex;

    p {
      margin-left: 10px;
    }
  }

  .green-text {
    padding: 5px;
    background: #ededee;
    border-radius: 4px;
    font-family: "Maven Pro";
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    color: #05b050;
  }
}

.quantity {
  width: 100%;

  select {
    background: #f7f7f7;
    border: 1px solid #ededee;
    border-radius: 4px;
    padding: 10px 15px;
    width: 35%;
  }

  input {
    background: #f7f7f7;
    border: 1px solid #ededee;
    border-radius: 4px;
    width: 65%;
  }
}

.shipping {
  display: flex;
  justify-content: space-around;
}

.each-ship {
  display: flex;

  p {
    margin-left: 10px;
  }
}

.shop-center {
  width: 100%;
  background: #f7f7f7;
  border: 1px solid #ededee;
  border-radius: 4px;
  padding: 10px 15px;
}

.range input {
  width: 100%;
}

.min-max {
  display: flex;
}

.min {
  display: flex;
  flex-direction: column;

  input {
    width: 80%;
  }
}

.apply {
  width: 100%;
  background-color: #05b050;
  color: white;
  height: 50px;
  border: none;
  box-shadow: 0px 2px 4px rgba(44, 39, 56, 0.08),
    0px 4px 8px rgba(44, 39, 56, 0.08);
  border-radius: 4px;
}

.reset {
  width: 100%;
  background-color: white;
  color: #05b050;
  height: 50px;
  margin-top: 20px;
  border: 1px solid #05b050;
  box-shadow: 0px 2px 4px rgba(44, 39, 56, 0.08),
    0px 4px 8px rgba(44, 39, 56, 0.08);
  border-radius: 4px;
}

.btns-down {
  margin-top: 100px;
}
.big-contents {
  margin-top: 30px;
}
.small-contents {
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  gap: 32px;
  flex-wrap: wrap;

  .each-product {
    background-color: white;
    padding: 10px;
    width: 260px;
    position: relative;
    text-decoration: none;

    h3 {
      margin-top: 16px;
      font-family: "Poppins";
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      color: #4a4754;
    }
    p {
      font-family: "Maven Pro";
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      color: #4a4754;
    }
    .badge {
      position: absolute;
      top: 24px;
      left: 22px;
      background: #fab900;
      border-radius: 4px;
      color: white;
      font-family: "Maven Pro";
      font-style: normal;
      font-weight: 700;
      font-size: 12px;
      line-height: 130%;
    }
  }
}
.right {
  width: 90%;
  justify-self: center;
  display: flex;
  flex-direction: column;
}

.top-texts {
  display: flex;
  justify-content: space-between;

  .top-text-right {
    display: flex;
    align-items: baseline;

    p {
      margin-top: 5px;
    }

    select {
      margin-left: 10px;
      margin-top: 0px;
      background-color: white;
      border: 1px solid #05b050 !important;
      // height: 50px;
      padding: 0px 0px 0px 20px;
    }
  }
}

.each-item {
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
  padding: 10px 25px;
  text-decoration: none;
  font-family: "Maven Pro";
  font-style: normal;
  font-weight: 400;
  text-transform: capitalize;

  p {
    margin: 0px;
    flex: 1;
  }

  color: #4a4754;
}

.tags {
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-top: 50px;
  align-items: baseline;

  h4 {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    color: #19191d;
  }

  a {
    padding: 10px 20px;
    background: #ededf0;
    border-radius: 99px;
    font-family: "Maven Pro";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #4a4b57;
    text-decoration: none;
  }
}

ul.pagination {
  li {
    a.page-link {
      border: 0px !important;
      color: #4a4754;

      &:not(#carret-icon):hover,
      :active {
        color: #ffffff;
        background: #05b050;
      }

      &:focus {
        box-shadow: 0px 0px !important;
      }

      span {
        color: #05b050;
      }
    }
  }
}

a > p:hover {
  text-decoration: underline;
  text-decoration-color: #05b050;
}
</style>
