import axios from 'axios';
import config from '@/config';

const GET_CROP_CATEGORIES_PATH = () => "category/crop/getall";
const GET_INPUT_CATEGORIES_PATH = () => "category/input/getall";
const GET_CROPS_SALE_PATH = () => "crop/getbycropoffer";
const GET_CROP_PATH = (id) => `crop/getbyid/${id}`;
const GET_CROP_NEGOTIATIONS_PATH = (cropId,userId) => `crop/${cropId}/negotiation/getbyuserid/${userId}`;
const SEND_NEGOTIATION_MESSAGE_PATH = () => 'crop/negotiation/add';
const SEND_NEGOTIATION_OFFER_PATH = () => "crop/negotiation/sendoffer";

export default {
    getCropCategories : function(callback){
        axios.get(config.BASE_URL + GET_CROP_CATEGORIES_PATH()).then((response)=>{
            callback(response.data);
        }).catch((error)=>{
        });
    },

    getInputCategories : function(callback){
        axios.get(config.BASE_URL + GET_INPUT_CATEGORIES_PATH()).then((response)=>{
            callback(response.data);
        }).catch((error)=>{
        });
    },
    getCropsForSale : function(callback){
        axios.get(config.BASE_URL + GET_CROPS_SALE_PATH()).then((response)=>{
            callback(response.data);
        }).catch((error)=>{
        });
    },
    getCropById : function(id,callback){
        axios.get(config.BASE_URL + GET_CROP_PATH(id)).then((response)=>{
            callback(response.data);
        }).catch((error)=>{
        });
    },
    getCropNegotiations : function(data,callback){
        axios.get(config.BASE_URL + GET_CROP_NEGOTIATIONS_PATH(data.cropId,data.userId)).then((response)=>{
            callback(response.data);
        }).catch((error)=>{
        });
    },


    sendNegotiationMessage : function(data,callback){
        axios.post(config.BASE_URL + SEND_NEGOTIATION_MESSAGE_PATH(),{
            ...data
        }).then((response)=>{
            callback(response.data);
        }).catch((error)=>{
        });
    },

    sendNegotiationOffer : function(data,callback){
        axios.post(config.BASE_URL + SEND_NEGOTIATION_OFFER_PATH(),{
            ...data
        }).then((response)=>{
            callback(response.data);
        }).catch((error)=>{
        });
    }
};