import config from "@/config";
import axios from "axios";

import NegotiationService from "@/services/negotiation";

const GET_CROP_CATEGORIES_PATH = () => "category/crop/getall";
const GET_INPUT_CATEGORIES_PATH = () => "category/input/getall";
const GET_CROPS_SALE_PATH = () => "crop/getbycropoffer";
const GET_CROPS_WANTED_PATH = () => "crop/getbycropwanted";
const GET_INPUTS_PATH = () => "input";
const GET_INPUT_PATH = (id) => `input/${id}`;
const GET_CROPS_AUCTION_PATH = () => "crop/getbycropauction";
const GET_CROP_PATH = (id) => `crop/getbyid/${id}`;
const CREATE_CROP_WANTED_PATH = () => `testpost`;
const ADD_DELIVERY_ADDRESS = () => `order/cart/create`;
const GET_ORDER_PATH = (orderHash) => `order/${orderHash}`;
const ADD_TO_CART_PATH = () => `input/cart/add`;
const GET_CART_ITEMS_PATH = (id) => `input/cart/${id}`;
const DELTE_CART_ITEM_PATH = (id) => `input/cart/delete/${id}`;
const GET_SUB_CATEGORIES_PATH = () => "subcategory/getall";
const ADD_NEW_CROP_PATH = (type) => `crop/${type}/add`;
const GET_ORDERS_PATH = (id) => `users/${id}/orders`;
const GET_SALES_PATH = (id) => `users/${id}/sales`;
const ADD_CROP_INPUT_PATH = () => `input/add/`;
const GET_CROPS_BY_USER_PATH = (id) => `users/${id}/crops`;
const GET_INPUTS_BY_USER_PATH = (id) => `users/${id}/inputs`;
const GENERATE_FULFIL_CROP_OFFER_PATH = (id) => `crop/${id}/fulfil`;

export default {
  getCropCategories: function (callback) {
    axios
      .get(config.BASE_URL + GET_CROP_CATEGORIES_PATH())
      .then((response) => {
        callback(response.data);
      })
      .catch((error) => {});
  },

  getInputCategories: function (callback) {
    axios
      .get(config.BASE_URL + GET_INPUT_CATEGORIES_PATH())
      .then((response) => {
        callback(response.data);
      })
      .catch((error) => {});
  },
  getCropsForSale: function (callback) {
    axios
      .get(config.BASE_URL + GET_CROPS_SALE_PATH())
      .then((response) => {
        callback(response.data);
      })
      .catch((error) => {});
  },
  getCropsWanted: function (callback) {
    axios
      .get(config.BASE_URL + GET_CROPS_WANTED_PATH())
      .then((response) => {
        callback(response.data);
      })
      .catch((error) => {});
  },
  getCropsForAuction: function (callback) {
    axios
      .get(config.BASE_URL + GET_CROPS_AUCTION_PATH())
      .then((response) => {
        callback(response.data);
      })
      .catch((error) => {});
  },
  getCropById: function (id, callback) {
    axios
      .get(config.BASE_URL + GET_CROP_PATH(id))
      .then((response) => {
        callback(response.data);
      })
      .catch((error) => {});
  },
  getInputs: function (callback) {
    axios
      .get(config.BASE_URL + GET_INPUTS_PATH())
      .then((response) => {
        callback(response.data);
      })
      .catch((error) => {});
  },
  getInputById: function (id, callback) {
    axios
      .get(config.BASE_URL + GET_INPUT_PATH(id))
      .then((response) => {
        callback(response.data);
      })
      .catch((error) => {});
  },
  getOrder: function (hash, callback) {
    axios
      .get(config.BASE_URL + GET_ORDER_PATH(hash))
      .then((response) => {
        callback(response.data);
      })
      .catch((error) => {
        callback(error.data);
      });
  },
  createCropWanted: function (cropData, callback) {
    axios
      .post(config.BASE_URL + CREATE_CROP_WANTED_PATH(), cropData)
      .then((response) => {
        callback(response.data);
      })
      .catch((error) => {
        callback(error.data);
      });
  },

  addToCart: function (data, callback) {
    axios
      .post(config.BASE_URL + ADD_TO_CART_PATH(), data)
      .then((response) => {
        callback(response.data);
      })
      .catch((error) => {
        callback(error.data);
      });
  },

  getCartItems: function (id, callback) {
    axios
      .get(config.BASE_URL + GET_CART_ITEMS_PATH(id))
      .then((response) => {
        callback(response.data);
      })
      .catch((error) => {
        callback(error.data);
      });
  },
  deleteCartItem: function (id, callback) {
    axios
      .delete(config.BASE_URL + DELTE_CART_ITEM_PATH(id))
      .then((response) => {
        callback(response.data);
      })
      .catch((error) => {
        callback(error.data);
      });
  },
  getSubCategories: function (callback) {
    axios
      .get(config.BASE_URL + GET_SUB_CATEGORIES_PATH())
      .then((response) => {
        callback(response.data);
      })
      .catch((error) => {});
  },
  addCropWanted: function (NewCropData, callback) {
    axios
      .post(config.BASE_URL + ADD_NEW_CROP_PATH("wanted"), NewCropData)
      .then((response) => {
        callback(response.data);
      })
      .catch((error) => {
        callback(error.data);
      });
  },
  addCropForSale: function (NewCropData, callback) {
    axios
      .post(config.BASE_URL + ADD_NEW_CROP_PATH("sale"), NewCropData)
      .then((response) => {
        callback(response.data);
      })
      .catch((error) => {
        callback(error.data);
      });
  },
  getOrders: function (id, callback) {
    axios
      .get(config.BASE_URL + GET_ORDERS_PATH(id))
      .then((response) => {
        callback(response.data);
      })
      .catch((error) => {
        callback(error.data);
      });
  },
  getSales: function (id, callback) {
    axios
      .get(config.BASE_URL + GET_SALES_PATH(id))
      .then((response) => {
        callback(response.data);
      })
      .catch((error) => {
        callback(error.data);
      });
  },
  saveInput: function (NewInputData, callback) {
    axios
      .post(config.BASE_URL + ADD_CROP_INPUT_PATH(), NewInputData)
      .then((response) => {
        callback(response.data);
      })
      .catch((error) => {
        callback(error.data);
      });
  },
  saveDeliveryAddress: function (delivery_details, callback) {
    axios
      .post(config.BASE_URL + ADD_DELIVERY_ADDRESS(), {
        delivery_details: delivery_details,
      })
      .then((response) => {
        callback(response.data);
      })
      .catch((error) => {
        callback(error.data);
      });
  },
  getUserCrops: function (id, callback) {
    axios
      .get(config.BASE_URL + GET_CROPS_BY_USER_PATH(id))
      .then((response) => {
        callback(response.data);
      })
      .catch((error) => {
        callback(error.data);
      });
  },

  getUserInputs: function (id, callback) {
    axios
      .get(config.BASE_URL + GET_INPUTS_BY_USER_PATH(id))
      .then((response) => {
        callback(response.data);
      })
      .catch((error) => {
        callback(error.data);
      });
  },
  generate_fulfil_crop_offer: function (crop_id, quantity, callback) {
    axios
      .post(config.BASE_URL + GENERATE_FULFIL_CROP_OFFER_PATH(id), { crop_id, quantity })
      .then((response) => {
        callback(response.data);
      })
      .catch((error) => {
        callback(error.response.data);
      });
  },
  ...NegotiationService,
};
