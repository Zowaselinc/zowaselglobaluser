import axios from "axios";

import config from "@/config";

const SAVE_WAYBILL_DATA_PATH = (order) => `order/${order}/waybilldetails`;
const SAVE_GOODS_RECEIPT_PATH = (order) => `order/${order}/goodsreceiptnote`;
const SAVE_TRACKING_DETAILS_PATH = (order) => `order/${order}/trackingdetails`;

export default {
  saveWaybillDetails: function (data, callback) {
    axios
      .post(config.BASE_URL + SAVE_WAYBILL_DATA_PATH(data.order), {
        waybill_details: data.waybillDetails,
      })
      .then((response) => {
        callback(response.data);
      })
      .catch((error) => {
        callback(error);
      });
  },
  saveGoodsReceiptNote: function (data, callback) {
    axios
      .post(config.BASE_URL + SAVE_GOODS_RECEIPT_PATH(data.order), {
        good_receipt_note: data.goodsReceiptNote,
      })
      .then((response) => {
        callback(response.data);
      })
      .catch((error) => {
        callback(error);
      });
  },
  saveTrackingDetails: function (data, callback) {
    axios
      .post(config.BASE_URL + SAVE_TRACKING_DETAILS_PATH(data.order), {
        tracking_details: data.trackingDetails,
      })
      .then((response) => {
        callback(response.data);
      })
      .catch((error) => {
        callback(error);
      });
  },
};
// avoid dupliccate actions token
