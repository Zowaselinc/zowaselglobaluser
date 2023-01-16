<template>
  <DefaultNav>
    <div class="big-container">
      <div class="top-text">
        <h1>Buy & Sell with Ease</h1>
        <p>Empowering growers from seed to market</p>
      </div>
      <div class="second-bar">
        <div class="input-area">
          <input type="text" placeholder="Search" />
          <div class="icon">
            <img src="@/assets/images/vectors/Search.svg" alt="" />
          </div>
        </div>
        <div class="button-area">
          <button>Crops for sale</button>
          <button>Crops Wanted</button>
          <button>Crop Auction</button>
          <button class="green-btns">Input Market</button>
          <button>All</button>
        </div>
      </div>

      <div class="main-content">
        <div class="left">
          <h3>Filter by</h3>

          <h3>Type</h3>
          <div class="each-type">
            <div class="left-type">
              <div id="checkbox" class="check">
                <input id="" type="checkbox" hidden name="" />
                <a href="#" @click="checked()"
                  ><img src="@/assets/images/vectors/tick-white.svg" alt=""
                /></a>
              </div>
              <p>Fertilizers</p>
            </div>
            <p class="green-text">56874</p>
          </div>
          <div class="each-type">
            <div class="left-type">
              <div id="checkbox" class="check">
                <input id="" type="checkbox" hidden name="" />
                <a href="#" @click="checked()"
                  ><img src="@/assets/images/vectors/tick-white.svg" alt=""
                /></a>
              </div>
              <p>Herbicides</p>
            </div>
            <p class="green-text">56874</p>
          </div>
          <div class="each-type">
            <div class="left-type">
              <div id="checkbox" class="check">
                <input id="" type="checkbox" hidden name="" />
                <a href="#" @click="checked()"
                  ><img src="@/assets/images/vectors/tick-white.svg" alt=""
                /></a>
              </div>
              <p>Fungicides</p>
            </div>
            <p class="green-text">56874</p>
          </div>
          <div class="each-type">
            <div class="left-type">
              <div id="checkbox" class="check">
                <input id="" type="checkbox" hidden name="" />
                <a href="#" @click="checked()"
                  ><img src="@/assets/images/vectors/tick-white.svg" alt=""
                /></a>
              </div>
              <p>Insecticides</p>
            </div>
            <p class="green-text">4874</p>
          </div>
          <div class="each-type">
            <div class="left-type">
              <div id="checkbox" class="check">
                <input id="" type="checkbox" hidden name="" />
                <a href="#" @click="checked()"
                  ><img src="@/assets/images/vectors/tick-white.svg" alt=""
                /></a>
              </div>
              <p>Seeds</p>
            </div>
            <p class="green-text">56874</p>
          </div>
          <h3>Payment Terms</h3>
          <div class="each-type">
            <div class="left-type">
              <div id="checkbox" class="check">
                <input id="" type="checkbox" hidden name="" />
                <a href="#" @click="checked()"
                  ><img src="@/assets/images/vectors/tick-white.svg" alt=""
                /></a>
              </div>
              <p>24 hours</p>
            </div>
          </div>
          <div class="each-type">
            <div class="left-type">
              <div id="checkbox" class="check">
                <input id="" type="checkbox" hidden name="" />
                <a href="#" @click="checked()"
                  ><img src="@/assets/images/vectors/tick-white.svg" alt=""
                /></a>
              </div>
              <p>30 days</p>
            </div>
          </div>
          <div class="each-type">
            <div class="left-type">
              <div id="checkbox" class="check">
                <input id="" type="checkbox" hidden name="" />
                <a href="#" @click="checked()"
                  ><img src="@/assets/images/vectors/tick-white.svg" alt=""
                /></a>
              </div>
              <p>60 days</p>
            </div>
          </div>
          <div class="each-type">
            <div class="left-type">
              <div id="checkbox" class="check">
                <input id="" type="checkbox" hidden name="" />
                <a href="#" @click="checked()"
                  ><img src="@/assets/images/vectors/tick-white.svg" alt=""
                /></a>
              </div>
              <p>BG</p>
            </div>
          </div>
          <h3>Seller type</h3>
          <div class="each-type">
            <div class="left-type">
              <div id="checkbox" class="check">
                <input id="" type="checkbox" hidden name="" />
                <a href="#" @click="checked()"
                  ><img src="@/assets/images/vectors/tick-white.svg" alt=""
                /></a>
              </div>
              <p>Blue chip</p>
            </div>
          </div>
          <div class="each-type">
            <div class="left-type">
              <div id="checkbox" class="check">
                <input id="" type="checkbox" hidden name="" />
                <a href="#" @click="checked()"
                  ><img src="@/assets/images/vectors/tick-white.svg" alt=""
                /></a>
              </div>
              <p>Brown chip</p>
            </div>
          </div>
          <div class="each-type">
            <div class="left-type">
              <div id="checkbox" class="check">
                <input id="" type="checkbox" hidden name="" />
                <a href="#" @click="checked()"
                  ><img src="@/assets/images/vectors/tick-white.svg" alt=""
                /></a>
              </div>
              <p>Red hot</p>
            </div>
          </div>
          <h3>Quantity</h3>
          <div class="quantity">
            <select id="" name="">
              <option value="">kilogram</option>
            </select>
            <input type="text" />
          </div>
          <h3>Shipping Method</h3>
          <div class="shipping">
            <div class="each-ship">
              <div id="checkbox" class="check">
                <input id="" type="checkbox" hidden name="" />
                <a href="#" @click="checked()"
                  ><img src="@/assets/images/vectors/tick-white.svg" alt=""
                /></a>
              </div>
              <p>Self transport</p>
            </div>
            <div class="each-ship">
              <div id="checkbox" class="check">
                <input id="" type="checkbox" hidden name="" />
                <a href="#" @click="checked()"
                  ><img src="@/assets/images/vectors/tick-white.svg" alt=""
                /></a>
              </div>
              <p>Zowasel</p>
            </div>
          </div>
          <select id="" name="" class="shop-center">
            <option value="">Select crop center</option>
          </select>
          <h3>Price</h3>
          <div class="range">
            <input type="range" />
          </div>
          <div class="min-max">
            <div class="min">
              <label for="">min</label>
              <input id="" type="text" placeholder="min" name="" />
            </div>
            <div class="min">
              <label for="">max</label>
              <input id="" type="text" placeholder="max" name="" />
            </div>
          </div>

          <div class="btns-down">
            <button class="apply">Apply filters</button>
            <button class="reset">Reset filters</button>
          </div>
        </div>
        <div class="right">
          <div class="top-texts">
            <h3>Newest</h3>
            <div class="top-text-right">
              <p>sort by</p>
              <select id="" name="">
                <option value="">Best net price</option>
              </select>
            </div>
          </div>
          <div class="big-contents">
            <div class="small-contents">
              <a
                href="/dashboard/marketplace/product-description"
                class="each-product"
              >
                <p class="badge">-36%</p>
                <img src="@/assets/images/backgrounds/seed.png" alt="" />
                <h3>Product Title</h3>
                <p>
                  Lorem ipsum dolor sit amet, <br />
                  consectetur adipiscing elit. Faucibus...
                </p>
                <h3>NGN103,373,281</h3>
              </a>
              <a
                href="/dashboard/marketplace/product-description"
                class="each-product"
              >
                <p class="badge">-36%</p>
                <img src="@/assets/images/backgrounds/seed.png" alt="" />
                <h3>Product Title</h3>
                <p>
                  Lorem ipsum dolor sit amet, <br />
                  consectetur adipiscing elit. Faucibus...
                </p>
                <h3>NGN103,373,281</h3>
              </a>
              <a
                href="/dashboard/marketplace/product-description"
                class="each-product"
              >
                <p class="badge">-36%</p>
                <img src="@/assets/images/backgrounds/seed.png" alt="" />
                <h3>Product Title</h3>
                <p>
                  Lorem ipsum dolor sit amet, <br />
                  consectetur adipiscing elit. Faucibus...
                </p>
                <h3>NGN103,373,281</h3>
              </a>
              <a
                href="/dashboard/marketplace/product-description"
                class="each-product"
              >
                <p class="badge">-36%</p>
                <img src="@/assets/images/backgrounds/seed.png" alt="" />
                <h3>Product Title</h3>
                <p>
                  Lorem ipsum dolor sit amet, <br />
                  consectetur adipiscing elit. Faucibus...
                </p>
                <h3>NGN103,373,281</h3>
              </a>
              <a
                href="/dashboard/marketplace/product-description"
                class="each-product"
              >
                <p class="badge">-36%</p>
                <img src="@/assets/images/backgrounds/seed.png" alt="" />
                <h3>Product Title</h3>
                <p>
                  Lorem ipsum dolor sit amet, <br />
                  consectetur adipiscing elit. Faucibus...
                </p>
                <h3>NGN103,373,281</h3>
              </a>
              <a
                href="/dashboard/marketplace/product-description"
                class="each-product"
              >
                <p class="badge">-36%</p>
                <img src="@/assets/images/backgrounds/seed.png" alt="" />
                <h3>Product Title</h3>
                <p>
                  Lorem ipsum dolor sit amet, <br />
                  consectetur adipiscing elit. Faucibus...
                </p>
                <h3>NGN103,373,281</h3>
              </a>
            </div>
            <h3 class="heading">Inputs</h3>
            <div class="small-contents">
              <a href="#" class="each-product">
                <p class="badge">-36%</p>
                <img src="@/assets/images/backgrounds/seed.png" alt="" />
                <h3>Product Title</h3>
                <p>
                  Lorem ipsum dolor sit amet, <br />
                  consectetur adipiscing elit. Faucibus...
                </p>
                <h3>NGN103,373,281</h3>
              </a>
              <div class="each-product">
                <p class="badge">-36%</p>
                <img src="@/assets/images/backgrounds/seed.png" alt="" />
                <h3>Product Title</h3>
                <p>
                  Lorem ipsum dolor sit amet, <br />
                  consectetur adipiscing elit. Faucibus...
                </p>
                <h3>NGN103,373,281</h3>
              </div>
              <div class="each-product">
                <p class="badge">-36%</p>
                <img src="@/assets/images/backgrounds/seed.png" alt="" />
                <h3>Product Title</h3>
                <p>
                  Lorem ipsum dolor sit amet, <br />
                  consectetur adipiscing elit. Faucibus...
                </p>
                <h3>NGN103,373,281</h3>
              </div>
              <div class="each-product">
                <p class="badge">-36%</p>
                <img src="@/assets/images/backgrounds/seed.png" alt="" />
                <h3>Product Title</h3>
                <p>
                  Lorem ipsum dolor sit amet, <br />
                  consectetur adipiscing elit. Faucibus...
                </p>
                <h3>NGN103,373,281</h3>
              </div>
            </div>
            <h3 class="heading">Auction</h3>
            <div class="small-contents">
              <div class="each-product">
                <p class="badge">-36%</p>
                <img src="@/assets/images/backgrounds/seed.png" alt="" />
                <h3>Product Title</h3>
                <p>
                  Lorem ipsum dolor sit amet, <br />
                  consectetur adipiscing elit. Faucibus...
                </p>
                <h3>NGN103,373,281</h3>
              </div>
              <div class="each-product">
                <p class="badge">-36%</p>
                <img src="@/assets/images/backgrounds/seed.png" alt="" />
                <h3>Product Title</h3>
                <p>
                  Lorem ipsum dolor sit amet, <br />
                  consectetur adipiscing elit. Faucibus...
                </p>
                <h3>NGN103,373,281</h3>
              </div>
              <div class="each-product">
                <p class="badge">-36%</p>
                <img src="@/assets/images/backgrounds/seed.png" alt="" />
                <h3>Product Title</h3>
                <p>
                  Lorem ipsum dolor sit amet, <br />
                  consectetur adipiscing elit. Faucibus...
                </p>
                <h3>NGN103,373,281</h3>
              </div>
              <div class="each-product">
                <p class="badge">-36%</p>
                <img src="@/assets/images/backgrounds/seed.png" alt="" />
                <h3>Product Title</h3>
                <p>
                  Lorem ipsum dolor sit amet, <br />
                  consectetur adipiscing elit. Faucibus...
                </p>
                <h3>NGN103,373,281</h3>
              </div>
            </div>
            <div class="tags">
              <h4>Related</h4>
              <p>cash Crops</p>
              <p>Seeds</p>
              <p>Cocoa</p>
              <p>Machinery</p>
              <p>grains</p>
              <p>Palm Oil</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </DefaultNav>
</template>

<script>
import DefaultNav from "@/layouts/DefaultNav.vue";

export default {
  name: "CardDetails",
  components: {
    DefaultNav,
  },
  data() {
    return {
      userData: this.$store.state.user,
    };
  },
  methods: {
    checked: function () {
      var box = document.getElementById("checkbox");
      var deColor = box.style.backgroundColor;
      if (deColor == "white") {
        deColor = "green";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";

.big-container {
  width: 100%;
  height: auto;
  background: #f5f5f5;
  display: flex;
  flex-direction: column;

  @include breakpoint-between(md, lg) {
    width: 60.5%;
  }

  @include breakpoint-between(lg, xl) {
    width: 69.5%;
  }

  @include breakpoint-between(xl, xxl) {
    width: 76%;
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
  padding: 50px 100px;

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
.right {
  width: 90%;
  padding: 100px;
  padding-right: 0px;
  display: flex;
  flex-direction: column;
}
.top-texts {
  display: flex;
  justify-content: space-between;

  .top-text-right {
    display: flex;
    align-items: center;

    p {
      margin-top: 5px;
    }
    select {
      margin-left: 10px;
      margin-top: 0px;
      background-color: white;
      border: 1px solid #05b050 !important;
      height: 50px;
      padding: 0px 0px 0px 20px;
    }
  }
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
.heading {
  margin-top: 40px;
}
.tags {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  align-items: center;
  h4 {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    color: #19191d;
  }

  p {
    padding: 10px 20px;
    background: #ededf0;
    border-radius: 99px;
    font-family: "Maven Pro";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #4a4b57;
  }
}
</style>
