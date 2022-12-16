<template>
    <DefaultNav>
        <div class="big-container">    
            <div class="headings">
                <h2>Invoice</h2>
                <div class="right-btns">
                    <a href="" class="green-link">Received Invoice</a>
                    <a href="" class="white-link">Sent Invoice</a>
                </div>
            </div>  

            <input type="text" placeholder="search">

            <div class="row date-region">
                <div class="col">
                    <input type="date" class="form-control" placeholder="Date Paid">
                </div>
                <div class="col">
                    <select id="inputState" class="form-control">
                        <option selected>Choose...</option>
                        <option>...</option>
                    </select>
                </div>
            </div>
            

            <div class="active-subscriptions">              

            <table class="table-borderless sub-history">
                 <tr>
                        <td class="theader">INVOICE</td>
                        <td class="theader">BILLER</td>
                        <td class="theader">DESCRIPTION</td>
                        <td class="theader">AMOUNT</td>
                        <td class="theader">DATE PAID</td>
                        <td class="theader">STATUS</td>
                    </tr>

                <tbody class="scrollable">
                   
                    <a href="/dashboard/each-invoice">
                        <tr>
                            <td >INV-001-123456</td>
                            <td>Naziri Farms</td>
                            <td>500 units of dish washers</td>
                            <td>NGN76,564</td>
                            <td>09 SEP 2022</td>
                            <td>
                                <div class="active">
                                    <div class="active-dot"> 
                                    </div>
                                    <p>Active</p>
                                </div>
                            </td>
                        </tr>
                    </a>

                    <a href="">
                        <tr>
                            <td >INV-001-123456</td>
                            <td>Naziri Farms</td>
                            <td>500 units of dish washers</td>
                            <td>NGN76,564</td>
                            <td>09 SEP 2022</td>
                            <td>
                                <div class="active">
                                    <div class="active-dot"> 
                                    </div>
                                    <p>Active</p>
                                </div>
                            </td>
                        </tr>
                    </a>
                    <a href="">
                        <tr>
                            <td >INV-001-123456</td>
                            <td>Naziri Farms</td>
                            <td>500 units of dish washers</td>
                            <td>NGN76,564</td>
                            <td>09 SEP 2022</td>
                            <td>
                                <div class="active">
                                    <div class="active-dot"> 
                                    </div>
                                    <p>Active</p>
                                </div>
                            </td>
                        </tr>
                    </a>
                     <a href="#">
                        <tr>
                            <td >INV-001-123456</td>
                            <td>Naziri Farms</td>
                            <td>500 units of dish washers</td>
                            <td>NGN76,564</td>
                            <td>09 SEP 2022</td>
                            <td>
                                <div class="expired">
                                    <div class="expired-dot"> 
                                    </div>
                                    <p>Pending</p>
                                </div>
                            </td>
                        </tr>
                     </a>
                     
                    
                    <a href="">
                        <tr>
                            <td >INV-001-123456</td>
                            <td>Naziri Farms</td>
                            <td>500 units of dish washers</td>
                            <td>NGN76,564</td>
                            <td>09 SEP 2022</td>
                            <td>
                                <div class="expired">
                                    <div class="expired-dot"> 
                                    </div>
                                    <p>Expired</p>
                                </div>
                            </td>
                        </tr>
                    </a>
                    <a href="">
                        <tr>
                            <td >INV-001-123456</td>
                            <td>Naziri Farms</td>
                            <td>500 units of dish washers</td>
                            <td>NGN76,564</td>
                            <td>09 SEP 2022</td>
                            <td>
                                <div class="active">
                                    <div class="active-dot"> 
                                    </div>
                                    <p>Active</p>
                                </div>
                            </td>
                        </tr>
                    </a>
                    
                    
                     <a href="">
                        <tr>
                            <td >INV-001-123456</td>
                            <td>Naziri Farms</td>
                            <td>500 units of dish washers</td>
                            <td>NGN76,564</td>
                            <td>09 SEP 2022</td>
                            <td>
                                <div class="expired">
                                    <div class="expired-dot"> 
                                    </div>
                                    <p>Expired</p>
                                </div>
                            </td>
                        </tr>
                     </a>
                </tbody>
                
            </table>
                
            </div>

        </div>
        
        
        
    </DefaultNav>
</template>

<script> 
    import DefaultNav from "@/layouts/DefaultNav.vue";
    export default {
        name: 'Invoice',
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
    h2{
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        color: #4A4754;
    }
}
.active-subscriptions{
    background-color: white;
    padding: 24px 35px;
    margin-top: 40px;
    
}











/* The slider */

    
.sub-history{
    margin-top: 50px;
    width: 100%;
    margin-left: 10px;

    h2{
        margin-bottom: 40px;
    }
    .theader{
        font-family: 'Maven Pro';
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        color: #4A4754;
    }
  
    tr{
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 20px 9px;
        gap: 129px;
        height: 66px;
        
    }
    td{
        flex: 1;
        font-family: 'Maven Pro';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        color: #4A4754;
    }
    .active{
        width: 100px;
        height: 26px;
        background: #DCFCE7;
        border-radius: 40px;
        display: flex;
        justify-content: center;
        align-items: center;

        .active-dot{
            width: 7.52px;
            height: 8px;
            background: #047B38;
            border-radius: 50%;
        }
        p{
            margin-top: 15px;
            margin-left: 8px;
            font-family: 'Maven Pro';
            font-style: normal;
            font-weight: 600;
            font-size: 12px;
            color:  #047B38
        }
    }
    .expired{
        width: 100px;
        height: 26px;
        background: #FFF8E6;
        border-radius: 40px;
        display: flex;
        justify-content: center;
        align-items: center;

        .expired-dot{
            width: 7.52px;
            height: 8px;
            background: #FAB900;
            border-radius: 50%;
        }
        p{
            margin-top: 15px;
            margin-left: 8px;
            font-family: 'Maven Pro';
            font-style: normal;
            font-weight: 600;
            font-size: 12px;
            color: #FAB900;
        }
    }
    .cancelled{
        width: 100px;
        height: 26px;
        background: rgba(252, 220, 220, 0.93);
        border-radius: 40px;
        display: flex;
        justify-content: center;
        align-items: center;

        .cancelled-dot{
            width: 7.52px;
            height: 8px;
            background: #C52222;
            border-radius: 50%;
        }
        p{
            margin-top: 15px;
            margin-left: 8px;
            font-family: 'Maven Pro';
            font-style: normal;
            font-weight: 600;
            font-size: 12px;
            color: #6B0303;
        }
    }
a{
    text-decoration: none;
}
}
.headings{
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;
    
    a{
        text-decoration: none;
    }
    .right-btns{
        display: flex;
        gap: 20px;
        
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
        border-radius: 55px;
        font-weight: 700;
        font-size: 16px;
        letter-spacing: 0.02em;
    }
    .white-link{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 180px;
        height: 40px;
        background: #FFFFFF;
        border: 1.11212px solid #696671;
        border-radius: 55px;
        font-family: 'Maven Pro';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        letter-spacing: 0.02em;
        color: #696671;
    }

    
}
.date-region{
        margin-top: 30px;
    }

</style>