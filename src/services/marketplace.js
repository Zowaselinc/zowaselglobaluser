import axios from 'axios';
import config from '@/config';

import NegotiationService from "@/services/negotiation";

const GET_CROP_CATEGORIES_PATH = () => "category/crop/getall";
const GET_INPUT_CATEGORIES_PATH = () => "category/input/getall";
const GET_CROPS_SALE_PATH = () => "crop/getbycropoffer";
const GET_CROPS_WANTED_PATH = () => "crop/getbycropwanted";
const GET_INPUTS_PATH = () => "input/getall";
const GET_CROPS_AUCTION_PATH = () => "crop/getbycropauction";
const GET_CROP_PATH = (id) => `crop/getbyid/${id}`;

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
    getCropsWanted : function(callback){
        axios.get(config.BASE_URL + GET_CROPS_WANTED_PATH()).then((response)=>{
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
    getInputs : function(callback){
        axios.get(config.BASE_URL + GET_INPUTS_PATH()).then((response)=>{
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
    },

    ...NegotiationService
};