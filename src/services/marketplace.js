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
const GET_ADD_NEW_CROP__PATH = () => "crop/wanted/add";
const GET_ORDERS_PATH = (id) => `users/${id}/orders`;
const GET_SALES_PATH = (id) => `users/${id}/sales`;
const ADD_CROP_INPUT_PATH = () => `input/add/`;

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
  getNewCrops: function (NewCropData, callback) {
    axios
      .post(config.BASE_URL + GET_ADD_NEW_CROP__PATH(), NewCropData)
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
  saveDeliveryAddress: function (callback) {
    axios
      .post(config.BASE_URL + ADD_DELIVERY_ADDRESS())
      .then((response) => {
        callback(response.data);
      })
      .catch((error) => {
        callback(error.data);
      });
  },

  ...NegotiationService,
};
