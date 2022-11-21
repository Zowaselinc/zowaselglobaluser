<template>
    <DefaultNav>
        <div class="big-container">      
            <h2>Renewal Manager</h2>

            <div class="active-subscriptions">
                <h2>Active subscriptions :4</h2>
                <div class="right-data-box">
                    <div class="details">
                        <h3>Data Sharing</h3>
                        <p class="underlined">NGN 10,000/month</p>
                        <p>Suitable for DFI, MFIs, 
                            Out-growers, and other
                            lenders seeking smallholder farmers data to make
                            potential loan decisions.
                        </p>
                        <h3>Features</h3>
                        <ul>
                            <li>Access to basic data points for potential loan decisions</li>
                            <li>Data storage and privacy</li>
                            <li>No data editing</li>
                            <li>No analysis/recommendation</li>
                        </ul>
                        <div class="auto-renew">
                            <h2>Auto Renew</h2>
                            <label class="switch">
                                <input type="checkbox">
                                <span class="slider round"></span>
                            </label>
                        </div>

                         

                        <div class="down-btns">
                            <button class="red-btn">Cancel</button>
                            <button class="gren-btn">Renew</button>
                        </div>
                    </div>
                

             
                    <div class="details">
                        <h3>Data Sharing</h3>
                        <p class="underlined">NGN 10,000/month</p>
                        <p>Suitable for DFI, MFIs, 
                            Out-growers, and other
                            lenders seeking smallholder farmers data to make
                            potential loan decisions.
                        </p>
                        <h3>Features</h3>
                        <ul>
                            <li>Access to basic data points for potential loan decisions</li>
                            <li>Data storage and privacy</li>
                            <li>No data editing</li>
                            <li>No analysis/recommendation</li>
                        </ul>

                         <div class="auto-renew">
                            <h2>Auto Renew</h2>
                            <label class="switch">
                                <input type="checkbox">
                                <span class="slider round"></span>
                            </label>
                        </div>

                        <div class="down-btns">
                            <button class="red-btn">Cancel</button>
                            <button class="gren-btn">Renew</button>
                        </div>
                    </div>
                

                    <div class="details">
                        <h3>Data Sharing</h3>
                        <p class="underlined">NGN 10,000/month</p>
                        <p>Suitable for DFI, MFIs, 
                            Out-growers, and other
                            lenders seeking smallholder farmers data to make
                            potential loan decisions.
                        </p>
                        <h3>Features</h3>
                        <ul>
                            <li>Access to basic data points for potential loan decisions</li>
                            <li>Data storage and privacy</li>
                            <li>No data editing</li>
                            <li>No analysis/recommendation</li>
                        </ul>

                        <div class="auto-renew">
                            <h2>Auto Renew</h2>
                            <label class="switch">
                                <input type="checkbox">
                                <span class="slider round"></span>
                            </label>
                        </div>


                        <div class="down-btns">
                            <button class="red-btn">Cancel</button>
                            <button class="gren-btn">Renew</button>
                        </div>
                        
                    </div>
                </div>

            <table class="table-borderless sub-history">
                <h2>Subscription History</h2>

                 <tr>
                        <td class="theader">Data Aggregation</td>
                        <td class="theader">Date</td>
                        <td class="theader">Amount</td>
                        <td class="theader">Status</td>
                    </tr>

                <tbody class="scrollable">
                   
                    <tr>
                        <td >Traceability</td>
                        <td>21 Oct, 2022</td>
                        <td>NGN10,000</td>
                        <td>
                            <div class="active">
                                <div class="active-dot"> 
                                </div>
                                <p>Active</p>
                            </div>
                        </td>
                    </tr>
                     <tr>
                        <td>Data Sharing</td>
                        <td>21 Oct, 2022</td>
                        <td>NGN10,000</td>
                        <td>
                            <div class="expired">
                                <div class="expired-dot"> 
                                </div>
                                <p>Expired</p>
                            </div>
                        </td>
                    </tr>
                     <tr>
                        <td>Traceability</td>
                        <td>21 Oct, 2022</td>
                        <td>NGN10,000</td>
                        <td>
                            <div class="cancelled">
                                <div class="cancelled-dot"> 
                                </div>
                                <p>Cancelled</p>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Traceability</td>
                        <td>21 Oct, 2022</td>
                        <td>NGN10,000</td>
                        <td>
                            <div class="cancelled">
                                <div class="cancelled-dot"> 
                                </div>
                                <p>Cancelled</p>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Data Sharing</td>
                        <td>21 Oct, 2022</td>
                        <td>NGN10,000</td>
                        <td>
                            <div class="expired">
                                <div class="expired-dot"> 
                                </div>
                                <p>Expired</p>
                            </div>
                        </td>
                    </tr>
                </tbody>
                
            </table>
                
            </div>

        </div>
        
        
        
    </DefaultNav>
</template>

<script> 
    import DefaultNav from "@/layouts/DefaultNav.vue";
    export default {
        name: 'RenewalManager',
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

.right-data-box{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 30px;
}

.details{
    border: 1px solid rgba(0, 0, 0, 0.2);
    width: 32%;
    background: linear-gradient(116.78deg, #FFFFFF 0.51%, rgba(255, 255, 255, 0) 66.77%);
    backdrop-filter: blur(21px);
    border-radius: 7px;
    padding: 0px 20px 30px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;

    p{
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 300;
        font-size: 14px;
        text-align: center;
        color: #000000;
    }
    h3{
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        text-align: center;
        color: #000000;
        margin-top: 40px;
        margin-bottom: 20px;
    }

    .underlined{
        border-bottom: 0.5px solid rgb(173, 171, 171);
        margin-bottom: 40px;
    }

    h3{
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        letter-spacing: 0.01em;
        font-feature-settings: 'liga' off;
        color: #4A4754;
    }

    .down-btns{
        width: 100%;
        margin-top: 30px;
        display: flex;
        justify-content: space-around;
    }
    .red-btn{
        padding: 10px 27px;
        gap: 10px;
        background: #C32021;
        border: none;
        border-radius: 7px;
        color: white;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
    }

    .gren-btn{
        padding: 10px 27px;
        gap: 10px;
        background: #05B050;
        border-radius: 7px;
        color: white;
        border: none;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
    }
    ul{
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
}


.auto-renew{
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    h2{
        margin-top: 10px;
    }
}

.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #05B050;
}

input:focus + .slider {
  box-shadow: 0 0 1px #05B050;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
    
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
        background: rgba(221, 252, 220, 0.93);
        border-radius: 40px;
        display: flex;
        justify-content: center;
        align-items: center;

        .active-dot{
            width: 7.52px;
            height: 8px;
            background: #27CD24;
            border-radius: 50%;
        }
        p{
            margin-top: 15px;
            margin-left: 8px;
            font-family: 'Maven Pro';
            font-style: normal;
            font-weight: 600;
            font-size: 12px;
            color: #056B03;
        }
    }
    .expired{
        width: 100px;
        height: 26px;
        background: rgba(252, 237, 220, 0.93);
        border-radius: 40px;
        display: flex;
        justify-content: center;
        align-items: center;

        .expired-dot{
            width: 7.52px;
            height: 8px;
            background: #CD7524;
            border-radius: 50%;
        }
        p{
            margin-top: 15px;
            margin-left: 8px;
            font-family: 'Maven Pro';
            font-style: normal;
            font-weight: 600;
            font-size: 12px;
            color: #6B4103;
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

}


</style>