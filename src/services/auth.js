import axios from "axios";

import config from "@/config";

const REGISTER_USER_PATH = (type) => (type ? `register/${type}` : "register");
const LOGIN_USER_PATH = () => "login";
const SEND_VERIFICATION_PATH = () => "register/verify";
const VERIFY_CODE_PATH = () => "register/confirm";
const SEND_RESET_EMAIL_PATH = () => "password/email";
const VERIFY_RESET_TOKEN_PATH = () => "password/verify";
const RESET_PASSWORD_PATH = () => "password/reset";

export default {
  loginUser: function (loginData, callback) {
    axios
      .post(config.BASE_URL + LOGIN_USER_PATH(), loginData)
      .then((response) => {
        callback(response.data);
      })
      .catch((error) => {
        callback(error.response.data);
      });
  },

  registerUser: function (registerData, callback) {
    axios
      .post(
        config.BASE_URL + REGISTER_USER_PATH(registerData.type),
        registerData
      )
      .then((response) => {
        callback(response.data);
      })
      .catch((error) => {});
  },

  sendVerification: function (email) {
    axios
      .post(config.BASE_URL + SEND_VERIFICATION_PATH(), { email: email })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {});
  },

  confirmVerification: function (email, code, callback) {
    axios
      .post(config.BASE_URL + VERIFY_CODE_PATH(), { email: email, code: code })
      .then((response) => {
        callback(response.data);
      })
      .catch((error) => {});
  },

  sendResetEmail: function (email, callback) {
    axios
      .post(config.BASE_URL + SEND_RESET_EMAIL_PATH(), { email: email })
      .then((response) => {
        callback(response.data);
      })
      .catch((error) => {});
  },

  resetPassword: function (data, callback) {
    axios
      .post(config.BASE_URL + RESET_PASSWORD_PATH(), data)
      .then((response) => {
        callback(response.data);
      })
      .catch((error) => {});
  },

  verifyResetToken: function (token, callback) {
    axios
      .post(config.BASE_URL + VERIFY_RESET_TOKEN_PATH(), { token: token })
      .then((response) => {
        callback(response.data);
      })
      .catch((error) => {});
  },
};
