<template>
  <DefaultNav>
    <div class="big-container">
      <div class="top-text">
        <h1>Checkout</h1>
      </div>
      <div class="big-content">
        <div id="payment-container" />
      </div>
    </div>
  </DefaultNav>
</template>

<script>
import DefaultNav from "@/layouts/DefaultNav.vue";
import TransactionService from "@/services/transaction";

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
  mounted() {
    let vm = this;
    this.getCartItems(() => {
      vm.makePayment();
    });
  },
  methods: {
    makePayment() {
      var vm = this;
      var transactionRef = `TRX-${this.generateRandom(20).toUpperCase()}`;
      var amountToPay = eval(this.cartTotal);
      FlutterwaveCheckout({
        public_key: "FLWPUBK_TEST-a1b8a6d0b897f10b7332e3af9f902c70-X",
        tx_ref: transactionRef,
        amount: amountToPay,
        currency: "NGN",
        payment_options: "card, ussd, transfer",
        callback: function (payment) {
          // Send AJAX verification request to backend
          if (payment.status == "successful") {
            var txRef = payment.tx_ref;
            var txId = payment.transaction_id;

            TransactionService.verifyTransaction(
              {
                transaction_id: txId.toString(),
                transaction_ref: txRef,
                // order : vm.order.order_hash,
              },
              (response) => {
                if (!response.error) {
                  // vm.$router.push(`/dashboard/marketplace/confirmpayments/${vm.order.order_hash}`);
                }
              }
            );
          }
        },
        onclose: function (incomplete) {
          if (incomplete || window.verified === false) {
            console.log();
          } else {
            console.log();
            if (window.verified == true) {
              console.log();
            } else {
              console.log();
            }
          }
        },
        meta: {
          // order : this.order.hash
        },
        customer: {
          email: this.userData.user.email,
          phone_number: this.userData.user.phone,
          name: `${this.userData.user.first_name} ${this.userData.user.last_name}`,
        },
        customizations: {
          // title: this.order.products[0].title,
          description: "Payment for order",
          logo: "https://cdn.filestackcontent.com/SrotkZlqT6iXtiA20Q14",
        },
      });
      var detectWindow = setInterval(() => {
        var checkout = document.querySelector("iframe[name=checkout]");
        if (checkout) {
          document.querySelector("#payment-container").appendChild(checkout);
          checkout.style.display = "block";
          document.body.style.overflow = "scroll";
          clearInterval(detectWindow);
        }
      }, 1000);
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
  overflow-y: scroll;

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

  h1 {
    font-size: 24px;
  }
}
.big-content {
  padding: 50px 15%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f1f1f1;
  height: 100%;

  #payment-container {
    height: 100%;
  }

  form {
    width: 60%;
    padding: 100px 50px;
    background: #ffffff;
    border-radius: 4px;
    h2 {
      font-size: 20px;
    }
    hr {
      margin-bottom: 40px;
    }

    button {
      margin-top: 30px;
    }

    .check-area {
      display: flex;
      align-items: center;

      label {
        margin-left: 10px;
      }
    }
    .last-p {
      font-family: "Maven Pro";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 22px;
      color: #b5b4b9;
      margin-top: 23px;
    }
  }
}
</style>
