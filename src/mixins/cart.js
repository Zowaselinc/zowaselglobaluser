import MarketplaceService from "@/services/marketplace";
export default {
  data() {
    return {
      cart: {},
    };
  },
  computed: {
    cartTotal() {
      var total = 0;
      this.cart.forEach((item) => {
        total += eval(item.price) * eval(item.quantity);
      });
      return total;
    },
  },
  methods: {
    getCartItems(callback) {
      MarketplaceService.getCartItems(this.userData.user_id, (response) => {
        if (response) {
          this.cart = response.data;
          if (callback) {
            callback();
          }
        }
      });
    },
  },
  mounted() {},
};
