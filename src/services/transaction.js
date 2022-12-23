
import axios from 'axios';

import config from '@/config';

const VERIFY_TRANSACTION_PATH = () => `transaction/verify`


export default {
    verifyTransaction: function(data,callback) {
        axios.post (
            config.BASE_URL + VERIFY_TRANSACTION_PATH(),
            data
        ).then((response)=>{
            callback(response.data)
        }).catch((error)=>{
            callback(error);
        })
    }
};
// avoid dupliccate actions token