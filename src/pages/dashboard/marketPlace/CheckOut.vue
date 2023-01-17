<template>
  <DefaultNav>
    <div class="big-container">
      <div class="top-text">
        <h1>Checkout</h1>
      </div>
      <div class="big-content">
        <div class="left-side">
          <div class="address">
            <div class="top-address">
              <img src="@/assets/images/vectors/ticked.png" alt="" />
              <h3>Delivery Address</h3>
            </div>
            <hr />
            <div class="main-address" v-if="show_address">
              <div class="names">
                <h4>Sampolaen Farms</h4>
                <p>{{newAddress.house }} <span>{{newAddress.city}},</span>  {{newAddress.zipCode}} {{newAddress.state }} {{newAddress.country}} </p>
              </div>
            </div>

            <div class="change-form" v-else id="change-address-form">
              <form action="">
                <div class="top-form">
                  <input type="text" placeholder="House Address" v-model="newAddress.house" />
                  <select class="form-select" name="" id="" v-model="newAddress.country">
                    <option value="">Select country</option>
                    <option
                      :value="country.country"
                      v-for="(country, index) in countries"
                      :key="index"
                    >
                      {{ country.country }}
                    </option>
                  </select>
                  <select name="" id="" v-model="newAddress.state">
                    <option value="">Select state</option>
                    <option
                      v-for="(state, index) in selectStateByCountry"
                      :key="index"
                    >
                      {{ state }}
                    </option>
                  </select>
                </div>

                <div class="bottom-form">
                  <input type="text" placeholder="City" v-model="newAddress.city" />
                  <input type="text" placeholder="Zip code" v-model="newAddress.zipCode" />
                  
                </div>
              </form>
            </div>
            <button class="toggle-btn" id="toggle-button" @click="toggle_btn()">
              Change Address
            </button>
          </div>

          <div class="delivery-method" v-if="false">
            <div class="top-address">
              <img src="@/assets/images/vectors/ticked.png" alt="" />
              <h3>Delivery Method</h3>
            </div>
            <hr />
            <div class="methods">
              <div class="farm">
                <div class="each-line">
                  <img src="@/assets/images/vectors/point.svg" alt="" />
                  <h4>Farm Delivery</h4>
                </div>
                <div class="each-line">
                  <img src="@/assets/images/vectors/Truck.svg" alt="" />
                  <p>
                    Will be delivered between 20 August, 2022 to 28 August, 2022
                  </p>
                </div>
                <div class="each-line">
                  <img src="@/assets/images/vectors/Money.svg" alt="" />
                  <p>Delivery charge of NGN3,564</p>
                </div>
              </div>
              <div class="pickup">
                <div class="each-line">
                  <img src="@/assets/images/vectors/pickup.svg" alt="" />
                  <h4>Pick-up Station</h4>
                </div>
                <div class="each-line">
                  <img src="@/assets/images/vectors/Package.svg" alt="" />
                  <p>
                    Will be delivered between 20 August, 2022 to 28 August, 2022
                  </p>
                </div>
                <select name="" id="">
                  <option value="">Select Pick up station</option>
                </select>
              </div>
            </div>
          </div>
          <div class="payment-method" v-if="false">
            <div class="each-line">
              <img src="@/assets/images/vectors/ticked.png" alt="" />
              <h4>Payment Method</h4>
            </div>
            <hr />
            <div class="input-line">
              <div class="each-input">
                <input type="radio" name="payment" />
                <label for="">Credit or Debit Card</label>
              </div>
              <div class="each-input">
                <input type="radio" name="payment" />
                <label for="">Bank Transfer</label>
              </div>
            </div>
          </div>

            <button class="proceed" type="button" @click="proceedToPay()">Proceed to Payment</button>

        </div>
        <div class="right-side">
          <h3>Order Summary</h3>
          <div class="line"></div>
          <div class="summaries" v-if="cart.length>0">
          <div class="contain" v-for="item,index in cart" :key="index">
            <div class="each-item">
               <img :src="parse(item.input.images)[0]" alt="">
              <div class="each-detail">
                <h4>{{ item.input.title }}</h4>
                <!-- <p>Seller- <span>Naziri Farms</span></p> -->
                <div class="qty">
                  <h4>Qty</h4>
                  <div class="btnss">
                    <a href="javascript:void(0)" class="p-btn" @click="decrement(index)">-</a>
                    <p>{{ item.quantity }}</p>
                    <a href="javascript:void(0)" class="p-btn" @click="increment(index)">+</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
            
          </div>
          <div class="red-side">
            <div class="items">
              <p>Cart Sub-total</p>
              <h4>NGN {{ cartTotal.toLocaleString() }}</h4>
            </div>
            <div class="items">
              <!-- <p>Delivery Fee</p>
              <h4>NGN3,400</h4> -->
            </div>
            <div class="items">
              <p>Total</p>
              <h4>NGN {{ cartTotal.toLocaleString() }}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </DefaultNav>
</template>

<script>
import DefaultNav from "@/layouts/DefaultNav.vue";
import MarketplaceService from "@/services/marketplace";
import countriesObject from "@/data/countries";

export default {
  name: "CheckOut",
  data() {
    return {
      userData: this.$store.state.user,
      show_address: true,
      newAddress: {
        state: "",
        country: "",
        house:"",
      },
      cart:[],

     
      countries: countriesObject.countries,
    };
  },
  components: {
    DefaultNav,
  },
  methods: {
    toggle_btn() {
      this.show_address = !this.show_address;
      const button_text = document.getElementById("toggle-button");
      if (this.show_address == false) {
        button_text.innerHTML = "Save";
      } else {
        button_text.innerHTML = "Change Address";
      }
    },
    proceedToPay(){
            this.$router.push({ name : "CheckoutPayment"});
    },

    increment(index){
            var item = this.cart[index];
            if(eval(item.input.stock) > eval(item.quantity)){
                this.cart[index].quantity = eval(this.cart[index].quantity) + 1;
                MarketplaceService.addToCart({
                    input_id : item.input_id,
                    user_id : item.user_id,
                    quantity : eval(item.quantity)
                },(response)=>{
                });

                console.log(this.cart)
            }

        },
        decrement(index){
            var item = this.cart[index];
            if(eval(item.quantity) > 1){
                this.cart[index].quantity = eval(this.cart[index].quantity) - 1;
                MarketplaceService.addToCart({
                    input_id : item.input_id,
                    user_id : item.user_id,
                    quantity : eval(item.quantity)
                },(response)=>{
                });
            }
        },
        parse(data){
            return JSON.parse(data);
        }
  },
  computed: {
    selectStateByCountry: function () {
      return this.countries && this.newAddress.country != ""
        ? this.countries.filter(
            (item) => item.country == this.newAddress.country
          )[0].states
        : [];
    },
  },
  mounted(){
        this.getCartItems();
    }
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
  overflow-y: scroll;

  @include breakpoint-between(md, lg) {
    min-width: 60.5%;
  }

  @include breakpoint-between(lg, xl) {
    min-width: 69.5%;
  }

  @include breakpoint-between(xl, xxl) {
    min-width: 76%;
  }
}

.top-text {
  padding: 14px 30px;
  width: 100%;
  background: #262c3f;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  margin-bottom: 50px;

  h1 {
    font-size: 24px;
  }
}

.big-content {
  width: 100%;
  padding: 50px 35px;
  background: #f1f1f1;
  display: flex;
  flex-direction: row;
  gap: 20px;

  .left-side {
    width: 60%;

    .address {
      width: 100%;
      background-color: white;
      padding: 38px;
    }

    .delivery-method {
      width: 100%;
      background-color: white;
      padding: 38px;
      margin-top: 50px;
    }

    .payment-method {
      width: 100%;
      background-color: white;
      padding: 38px;
      margin-top: 50px;
    }
  }

  .top-address {
    display: flex;
    align-items: center;
    gap: 12px;

    img {
      width: 20px;
      height: 20px;
    }

    h3 {
      margin-top: 5px;
      font-size: 16px;
    }
  }

  .main-address {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 40px;

    h4 {
      font-size: 16px;
    }

    p {
      font-size: 14px;
    }
  }

  .methods {
    display: flex;
    width: 100%;
    gap: 30px;

    .farm {
      width: 50%;
      background: #fff8e6;
      border: 1px solid #ededee;
      padding: 20px;
    }

    .pickup {
      width: 50%;
      border: 1px solid #ededee;
      padding: 20px;

      select {
        width: 100%;
        background: #f8f8f8;
        border: 1px solid #ededee;
        border-radius: 4px;
        height: 40px;
      }
    }
  }

  .each-line {
    display: flex;
    align-items: center;
    align-items: center;
    gap: 15px;

    img {
      width: 20px;
      height: 20px;
    }

    h4 {
      margin-top: 5px;
      font-size: 16px;
    }

    p {
      margin-top: 15px;
      font-size: 14px;
    }
  }

  select {
    font-size: 13px;
  }

  .input-line {
    display: flex;
    align-items: center;
    align-items: center;
    gap: 150px;
  }

  .each-input {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  input[type="radio"] {
    width: 20px;
    height: 20px;
  }

  .right-side {
    width: 40%;
    background-color: white;
    height: 700px;
    display: flex;
    flex-direction: column;
    padding: 30px;
    gap: 21px;
    border-radius: 4px;

    h3 {
      font-family: "Poppins";
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      line-height: 18px;
      color: #4a4754;
      text-align: center;
    }

    .each-summary {
      display: flex;
      justify-content: space-between;
      width: 100%;

      p {
        font-family: "Maven Pro";
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 166.67%;
        color: rgba(45, 55, 72, 0.6);
      }

      .total {
        font-family: "Poppins";
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 166.67%;
        color: #96949c;
      }

      .price {
        font-family: "Maven Pro";
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 147%;
        color: #4a4754;
      }
    }

    .line {
      border: 1px solid #ededee;
      width: 100% !important;
    }

    button {
      background: #05b050;
      box-shadow: 0px 2px 4px rgba(44, 39, 56, 0.08),
        0px 4px 8px rgba(44, 39, 56, 0.08);
      border-radius: 4px;
      height: 55px;
      width: 100%;
      border: none;
      color: white;
      font-family: "Maven Pro";
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      color: #e6f7ee;
    }
  }

  .summaries {
    height: 400px;

    .each-item {
      display: flex;
      gap: 20px;
      margin-top: 25px;

      img {
        width: 120px;
        height: 120px;
      }
    }
  }

  .each-detail {
    h4 {
      font-size: 16px;
    }

    p {
      font-size: 14px;
    }

    .btnss {
      font-size: 14px;
    }
  }

  .qty {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .btnss {
    display: flex;
    gap: 10px;
    height: 35px;
  }

  .p-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    width: 20px;
    height: 20px;
    background: #ededee;
    border-radius: 50%;
    color: black;
    text-decoration: none;
  }
}

.red-side {
  background: #cd4647;
  padding: 20px;
  color: white;

  .items {
    display: flex;
    justify-content: space-between;

    p {
      font-family: "Maven Pro";
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 19px;
    }

    h4 {
      font-family: "Poppins";
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      line-height: 24px;
    }
  }
}
.proceed {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 45px;
  background: #05b050;
  box-shadow: 0px 2px 4px rgba(44, 39, 56, 0.08),
    0px 4px 8px rgba(44, 39, 56, 0.08);
  border-radius: 4px;
  border: none;
  height: 55px;
  font-family: "Maven Pro";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 147%;
  color: #e6f7ee;
}
.top-form {
  width: 60%;
  display: flex;
  flex-direction: column;
  gap: 10px;

  select {
    width: 100%;
    background-color: white;
  }
}
.bottom-form {
  width: 60%;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  input {
    width: 45%;
  }
}
.toggle-btn {
  background: #05b050;
  box-shadow: 0px 1.47598px 2.95197px rgba(44, 39, 56, 0.08),
    0px 2.95197px 5.90393px rgba(44, 39, 56, 0.08);
  border-radius: 2.95197px;
  height: 40px;
  width: 160px;
  font-family: "Maven Pro";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  color: #e6f7ee;
  border: none;
  margin-top: 50px;
}

select,
input {
  font-size: 14px;
  color: #000000;

  &:hover,
  &:active,
  &:focus,
  &:focus-visible {
    border-color: #05b050 !important;
    box-shadow: 0 0 !important;
  }

  &::placeholder {
    @include textStyles("Maven Pro", 700, 14px, 24px);
    color: #000000;
  }
}
option{
    color: #D9D9D9;
}

</style>