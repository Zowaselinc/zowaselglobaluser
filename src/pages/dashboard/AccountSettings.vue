<template>
    <DefaultNav>
        <div class="big-container">
           <div class="top-section">
                <img src="@/assets/images/vectors/arrowleft.png" alt="">
                <h2>Account Settings</h2>
           </div>
           <div class="button-section">
                <button class="gren-btn">Company Details</button>
                <div class="dash"></div>
                <button class="yelo-btn">Company Details</button>
                <div class="dash"></div>
                <button>Company Details</button>
                <div class="dash"></div>
                <button>Documents</button>
                <div class="dash"></div>
                <button>Terms and Conditions</button>
           </div>

           <form action="">
                <div class="form-group">
                    <label for="exampleInputEmail1">Label</label>
                    <input type="text" class="form-control"  aria-describedby="emailHelp" placeholder="Placeholder">
                    
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Label</label>
                    <input type="text" class="form-control"  placeholder="Placeholder">
                </div>

               
                <div class="row">
                    <div class="col">
                        <label for="">label</label>
                    <input type="text" class="form-control" placeholder="placeholder">
                    </div>
                    <div class="col">
                        <label for="">Label</label>
                    <input type="text" class="form-control" placeholder="placeholder">
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <label for="">Label</label>
                    <input type="text" class="form-control" placeholder="placeholder">
                    </div>
                    <div class="col">
                        <label for="">Label</label>
                        <input type="text" class="form-control" placeholder="placeholder">
                    </div>
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Label</label>
                    <input type="email" class="form-control"   placeholder="placeholder">
                    
                </div>
                <div class="row">
                    <div class="col">
                        <label for="">Label</label>
                    <input type="text" class="form-control" placeholder="placeholder">
                    </div>
                    <div class="col">
                        <label for="">Label</label>
                        <input type="text" class="form-control" placeholder="placeholder">
                    </div>
                </div>

                <div class="form-btns row">
                    <div class="col-6">
                        <button class="save-btn">Save and go to next page</button>
                    </div>
                </div>
                <div class="row">
                    <div class="col-6 lil-btns">
                        <div class="col">
                            <button class="save-exit">Save and Exit</button>
                        </div>
                        <div class="col">
                            <button class="back-btn">Back</button>
                        </div>
                        
                    </div>
                </div>
           </form>

         

        </div>
        
        
        
    </DefaultNav>
</template>

<script> 
    import DefaultNav from "@/layouts/DefaultNav.vue";
    export default {
        name: 'AccountSettings',
        components:{
            DefaultNav,
        }
    }
</script>


<style lang="scss" scoped>
.big-container{
    width: 100%;
    height: auto;
    background: #F5F5F5;
    display: flex;
    flex-direction: column;
    padding:1% 5% 2% 5%;
    overflow-y: scroll;
}

.top-section{
    display: flex;
    align-items: center;
    margin-top: 20px;

    img{
        width: 30px;
        height: 30px;
    }

    h2{
        margin-left: 20px;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        color: #4A4754;
    }
}
.button-section{
    margin-top: 50px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 50px;

    .dash{
        width: 23px;
        border-bottom: 2px solid #B5B4B9;
    }
    button{
        padding: 10px 30px;
        border: 1px solid #696671;
        border-radius: 50px;

    }
    .gren-btn{
        background: #05B050;
        border: none;
        color: white;

    }
    .yelo-btn{
        border: none;
        color: white;
        background: #FAB900;
    }
   
}
label{
    font-family: 'Maven Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: #696671;
    margin-top: 30px;
    }
 input{
        background: #FFFFFF;
        border: 1px solid #B5B4B9;
        box-shadow: 0px 2px 8px rgba(44, 39, 56, 0.02);
        border-radius: 4px;
    }
    .form-btns{
        margin-top: 50px;
    }
    .save-btn{
        width: 100%;
        height: 47px;
        background: #05B050;
        border: none;
        color: white;
    }
    .lil-btns{
        margin-top: 20px;
        display: flex;
        width: 50%;
        justify-content: space-between;

        .save-exit{
            width: 98%;
            height: 47px;
            background: #2D3748;
            border: none;
            color: white;
        }
        .back-btn{
             width: 100%;
            height: 47px;
            border: 2px solid #05B050;
            color: white;
            font-family: 'Poppins';
            font-weight: 600;
            font-size: 16px;
            color: #2D3748;
        }


    }



</style>