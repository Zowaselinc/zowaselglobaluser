
import axios from 'axios';

import config from '@/config';

const SAVE_WAYBILL_DATA_PATH = (order) => `order/${order}/waybilldetails`


export default {
    saveWaybillDetails: function(data,callback) {
        axios.post (
            config.BASE_URL + SAVE_WAYBILL_DATA_PATH(data.order),
            {
                waybill_details : data.waybillDetails
            }
        ).then((response)=>{
            callback(response.data)
        }).catch((error)=>{
            callback(error);
        })
    }
};
// avoid dupliccate actions token