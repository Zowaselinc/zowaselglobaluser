<template>
  <div v-for="product in listData" :key="product.id" class="contents">
    <a href="#" class="each-product">
      <div>
        <h3>
          {{ product.subcategory.name }}
        </h3>
        <p>
          Date: <span>{{ product.created_at }}</span>
        </p>
        <!-- <p>Delivery Window: <span>2022-11-16 -- 2022-12-02</span></p> -->
        <p>
          Status <span>{{ product.active == 1 ? "Active" : "Inactive" }}</span>
        </p>
      </div>
      <div class="main-address">
        <div class="right">
          <h4>
            Amount: <span>{{ product.price }}</span>
          </h4>
          <div class="product-btns">
            <button class="delete">Delete</button>
            <button class="view" @click="removeCropWanted(product)">
              View
            </button>
          </div>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
import MarketPlaceService from "@/services/marketplace";
import Alert from "@/utilities/alert";
export default {
  name: "MyInput",
  components: {},
  props: {
    listData: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      userData: this.$store.state.user,
      products: [],
    };
  },
  mounted() {},
  methods: {
    removeInput(item) {
      MarketPlaceService.removeInput(item.id, (response) => {
        if (response.error == false) {
          this.getCrops();
          Alert.success({
            message: "Item Deleted Successfully",
          });
        }
      });
    },
    parseDeliveryWindow(product) {
      return JSON.parse(product.crop_request.delivery_window);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";

.each-product {
  width: 100%;
  border: 1px solid #dce3e9;
  padding: 20px 50px;
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  text-decoration: none;
  color: black;

  .product-btns {
    display: flex;
    gap: 15px;

    .edit {
      background: #fff8e6;
      border: 1px solid #f59e0b;
      border-radius: 4px;
      padding: 5px 10px;
      font-family: "Maven Pro";
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      color: #f59e0b;
    }

    .delete {
      background: #f9e9e9;
      border: 1px solid #c32021;
      border-radius: 4px;
      padding: 5px 10px;
      font-family: "Maven Pro";
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      color: #c32021;
    }

    .view {
      border: none;
      padding: 5px 10px;
      background: white;
      box-shadow: 0px 2px 4px rgba(44, 39, 56, 0.08),
        0px 4px 8px rgba(44, 39, 56, 0.08);
      border-radius: 4px;
      font-family: "Maven Pro";
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      line-height: 147%;
      color: #05b050;
      border: 1px solid #05b050;
    }
  }
}

.contents {
  width: 100%;
  background-color: white;
  padding: 38px;
}

.top-address {
  align-items: center;
  gap: 12px;

  img {
    width: 20px;
    height: 20px;
  }

  h3 {
    margin-top: 5px;
    color: #05b050;
    font-size: 18px;
  }

  p {
    font-size: 15px;
    span {
      font-size: 13.5px;
    }
  }
}

.main-address {
  display: flex;
  justify-content: space-between;
  align-items: center;

  h4 {
    font-size: 18px;
    span {
      font-size: 16px;
    }
  }
  button {
    font-size: 14px;
  }
}
</style>
