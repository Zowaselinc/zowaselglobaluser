
import axios from 'axios';

import config from '@/config';

const REGISTER_USER_PATH = (type) => type ? `register/${type}` : "register";
const LOGIN_USER_PATH = () => "login";
const SEND_VERIFICATION_PATH = () => "register/verify";
const VERIFY_CODE_PATH = () => "register/confirm";


export default {

    loginUser : function(loginData){
        axios.post( 
            config.BASE_URL + LOGIN_USER_PATH(type) , 
            loginData
        ).then((response)=>{
            console.log(response);
        }).catch((error)=>{

        });
    },

    registerUser : function(registerData,callback){
        axios.post( 
            config.BASE_URL + REGISTER_USER_PATH(registerData.type) , 
            registerData
        ).then((response)=>{
            callback(response.data)
        }).catch((error)=>{

        });
    },

    sendVerification : function(email){
        axios.post( 
            config.BASE_URL + SEND_VERIFICATION_PATH() , 
            { email : email }
        ).then((response)=>{
            console.log(response);
        }).catch((error)=>{

        });
    },

    confirmVerification : function(email,code,callback){
        axios.post( 
            config.BASE_URL + VERIFY_CODE_PATH() , 
            { email : email, code : code }
        ).then((response)=>{
            callback(response.data);
        }).catch((error)=>{

        });
    },
};