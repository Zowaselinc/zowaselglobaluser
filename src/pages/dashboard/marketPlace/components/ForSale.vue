<template>
  <!-- <div v-for="product in products" :key="product.id" class="contents">
          <a href="#" class="each-product">
            <div>
              <h3>{{ product.rows.title }}</h3>
              <p>Date: <span>2022-11-16 7:58pm</span></p>
              <p>Delivery Window: <span>2022-11-16 -- 2022-12-02</span></p>
              <p>Status <span>Active</span></p>
            </div>
            <div class="main-address">
              <div class="right">
                <h4>Amount: <span>NGN2,550</span></h4>
                <div class="product-btns">
                  <button class="edit">Edit</button>
                  <button class="delete">Delete</button>
                  <button class="view">View</button>
                </div>
              </div>
            </div>
          </a>
        </div> -->
  <div class="contents">
    <a href="#" class="each-product">
      <div class="top-address">
        <h3>Maize-200-brown</h3>
        <p>Date: <span>2022-11-16 7:58pm</span></p>
        <p>Delivery Window: <span>2022-11-16 -- 2022-12-02</span></p>
        <p>Status <span>Active</span></p>
      </div>
      <div class="main-address">
        <div class="right">
          <h4>Amount: <span>NGN2,550</span></h4>
          <div class="product-btns">
            <button class="edit">Edit</button>
            <button class="delete">Delete</button>
            <button class="view">View</button>
          </div>
        </div>
      </div>
    </a>
    <a href="#" class="each-product">
      <div class="top-address">
        <h3>Maize-200-brown</h3>
        <p>Date: <span>2022-11-16 7:58pm</span></p>
        <p>Delivery Window: <span>2022-11-16 -- 2022-12-02</span></p>
        <p>Status <span>Active</span></p>
      </div>
      <div class="main-address">
        <div class="right">
          <h4>Amount: <span>NGN2,550</span></h4>
          <div class="product-btns">
            <button class="edit">Edit</button>
            <button class="delete">Delete</button>
            <button class="view">View</button>
          </div>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
import MarketPlaceService from "@/services/marketplace";

export default {
  name: "MyProductDetails",
  components: {},
  data() {
    return {
      userData: this.$store.state.user,
      products: [],
    };
  },
  mounted() {
    this.getProducts();
  },
  methods: {
    getProducts(product) {
      MarketPlaceService.getProducts(this.userData.user_id, (response) => {
        if (response && response.error == false) {
          this.products = response.data;
          console.log(this.products[0].rows.title);
        }
      });
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
