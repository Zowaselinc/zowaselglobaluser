
import axios from 'axios';


import config from '@/config';

const GET_USER_PATH = (id) => `/users/${id}`


export default {
    getUser: function(id, callback) {
        axios.get (
            config.BASE_URL + GET_USER_PATH(id),
        ).then((response)=>{
        callback(response.data)
        })
    }
};
// avoid dupliccate actions token