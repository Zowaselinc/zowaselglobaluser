import axios from 'axios';
import config from '@/config';

const GET_CROP_CATEGORIES_PATH = () => "category/crop/getall";
const GET_INPUT_CATEGORIES_PATH = () => "category/input/getall";
const GET_CROPS_SALE_PATH = () => "crop/getbycropoffer";
const GET_CROPS_AUCTION_PATH = () => "crop/getbycropauction";
const GET_CROP_PATH = (id) => `crop/getbyid/${id}`;


const GET_CROP_NEGOTIATIONS_PATH = (cropId,userId) => `crop/${cropId}/negotiation/getbyuserid/${userId}`;
const GET_NEGOTIATIONS_BY_USER_PATH = (userId) =>  `crop/negotiation/${userId}`;
const SEND_NEGOTIATION_MESSAGE_PATH = () => 'crop/negotiation/add';
const SEND_NEGOTIATION_OFFER_PATH = () => "crop/negotiation/sendoffer";
const ACCEPT_NEGOTIATION_OFFER_PATH = () => "crop/negotiation/accept";
const DECLINE_NEGOTIATION_OFFER_PATH = () => "crop/negotiation/decline";

const GET_ORDER_PATH = (orderHash) => `order/${orderHash}`;

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
    getCropsForAuction : function(callback){
        axios.get(config.BASE_URL + GET_CROPS_AUCTION_PATH()).then((response)=>{
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
            callback(error.data);
        });
    },

    getCropNegotiationByUser : function(data,callback){
        axios.get(config.BASE_URL + GET_CROP_NEGOTIATIONS_PATH(data.cropId,data.userId)).then((response)=>{
            callback(response.data);
        }).catch((error)=>{
            callback(error.data);
        });
    },

    getNegotiationsByUser : function(data,callback){
        axios.get(config.BASE_URL + GET_NEGOTIATIONS_BY_USER_PATH(data.userId)).then((response)=>{
            callback(response.data);
        }).catch((error)=>{
            callback(error.data);
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
    },

    acceptNegotiationOffer : function(offerId,callback){
        axios.post(config.BASE_URL + ACCEPT_NEGOTIATION_OFFER_PATH(),{
            id : offerId
        }).then((response)=>{
            callback(response.data);
        }).catch((error)=>{
        });
    },

    declineNegotiationOffer : function(offerId,callback){
        axios.post(config.BASE_URL + DECLINE_NEGOTIATION_OFFER_PATH(),{
            id : offerId
        }).then((response)=>{
            callback(response.data);
        }).catch((error)=>{
        });
    },
    getOrder : function(hash, callback){
        axios.get(config.BASE_URL + GET_ORDER_PATH(hash)).then((response)=>{
            callback(response.data);
        }).catch((error)=>{
            callback(error.data);
        });
    }
};