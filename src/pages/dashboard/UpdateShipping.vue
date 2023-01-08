<template>
    <DefaultNav>
        <div class="big-container">    
            <div class="headings">
                <div class="left-btns">
                    <a href="/dashboard/sales"><img src="@/assets/images/vectors/arrowleft.png" alt=""></a>
                    <h2>Update Shipping</h2>
                </div>
                
            </div>  


              <div class="row table-area">
                <div class="col-12 big-table">
                    <div class="theading">
                        <h4>My Sales</h4>
                    </div>
                    <table class="table table-borderless">
                        <thead>
                            <th>Date</th>
                            <th>Order ID</th>
                            <th>Product</th>
                            <th>Location</th>
                            <th>Shipping Status</th>
                           
                            <th></th>
                        </thead>

                        <tbody>
                            <tr>
                                 <td>23, Jan, 2023</td>
                                <td>#34427633</td>
                                <td>Green Peas</td>
                                <td>Owerri</td>
                                <td scope="row">
                                    <div class="colored-green">
                                        <div class="green-dot"></div>
                                        <p>Delivered</p>
                                    </div>
                                </td>
                                
                            </tr>
                       
                            
                           
                         
                          
                          
                        </tbody>
                    </table>
                </div>

            </div>
            
            
            <form action="">
                <h4 class="up-date">Update Shipping Information</h4>
                <input type="date" placeholder="date">
                <input type="text" value="" placeholder="location">
                <select name="" id="">
                    <option value="">Update Status</option>
                    <option value="">Ordered</option>
                    <option value="">Pending</option>
                </select>
                <!-- <textarea name="" id="" cols="50" rows="10"></textarea> -->
                <div class="form-btns">
                    <!-- <div class="attach">
                        <input type="file" hidden>
                        <button class="attach-btn">Attach a File <img src="@/assets/images/vectors/Paperclip.svg" alt=""></button>
                    </div> -->
                    <button class="green-link">Update</button>
                    
                </div>
            </form>

          
            

            

        </div>
        
        
        
    </DefaultNav>
</template>

<script> 
    import DefaultNav from "@/layouts/DefaultNav.vue";
    export default {
        name: 'UpdateShipping',
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
    padding:2% 5% 2% 3%;
    overflow-y: scroll;
    h2{
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        color: #4A4754;
    }
}






.headings{
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;
    
    .left-btns{
        display: flex;
        gap: 10px;

        img{
            width: 22px;
            height: 18px;
        }
    }
    .right-btns{
        display: flex;
        gap: 20px;
        
    }
    

    
}
.green-link{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: white;
        width: 180px;
        height: 40px;
        background: #05B050;
        border-radius: 5px;
        font-weight: 700;
        font-size: 16px;
        letter-spacing: 0.02em;
        text-decoration: none;
        border: none;
    }
    
.date-region{
        margin-top: 30px;
    }
    form{
        width: 100%;
        margin-top: 65px;

        input{
            width: 100%;
            margin-top: 20px;
        }
         select{
            width: 100%;
            background-color: white;
            margin-top: 20px;
        }
    }
    .form-btns{
        display: flex;
        gap: 20px;
        margin-top: 30px;
        justify-content: flex-end;
    }

 .table-area {
    margin-top: 50px;
    display: flex;
    justify-content: space-around;
}

.big-table {
    background-color: white;
    padding: 30px;

    th {
        font-family: 'Maven Pro';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        color: #4A4754;
        border-bottom: 0.7px solid #EDEDEE;
        padding: 20px 25px;
    }

    td {
        font-family: 'Maven Pro';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        color: #696671;
        padding: 20px 25px;
    }
}

.theading {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 20px;

    h4 {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        color: #4A4754;
    }
}


.colored-green {
    display: flex;
    height: 35px;
    width: 120px;
    align-items: center;
    justify-content: center;
    background: #E6F7EE;
    border-radius: 40px;

    .green-dot {
        width: 10px;
        height: 10px;
        background-color: #05B050;
        border-radius: 50%;
    }

    p {
        color: #05B050;
        margin-top: 15px;
        margin-left: 5px;
    }
}

.colored-yellow {
    display: flex;
    height: 35px;
    width: 120px;
    justify-content: center;
    align-items: center;
    background: #FFF8E6;
    border-radius: 40px;

    .yellow-dot {
        width: 10px;
        height: 10px;
        background-color: #FAB900;
        ;
        border-radius: 50%;
    }

    p {
        color: #FAB900;
        margin-top: 15px;
        margin-left: 5px;
    }
}   

.up-date{
    margin-top: 40px;
}
</style>