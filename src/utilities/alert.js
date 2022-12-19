const Alert = {

    success : (data)=>{
        window.appBus.emit('closeAlertBox',{});
        window.appBus.emit('openAlertBox', {
            type : "success",
            ...data
        });
    },

    error : (data)=>{
        window.appBus.emit('closeAlertBox',{});
        window.appBus.emit('openAlertBox', {
            type : "error",
            ...data
        });
    }



};

export default Alert;