
const axios = require('axios');

const REGISTER_USER_PATH = (type) => type ? `/api/register/${type}` : "/api/register";
const LOGIN_USER_PATH = () => "/api/login";


module.exports = {
    
    loginUser : function(loginData){
        axios.post( 
            LOGIN_USER_PATH(type) , 
            loginData
        ).then((response)=>{
            console.log(response);
        }).catch((error)=>{

        });
    },

    registerUser : function(type,registerData){
        axios.post( 
            REGISTER_USER_PATH(type) , 
            registerData
        ).then((response)=>{
            console.log(response);
        }).catch((error)=>{

        });
    }
};