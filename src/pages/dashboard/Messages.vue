<template>
<div class="bigger-container">
    <TopHeader>              
    </TopHeader>
    <div class="big-container">
        <div class="left">
            <div class="top-section">
                <img src="@/assets/images/vectors/arrowleft.png" alt="">
                <h2>Messages</h2>
            </div>
            <input type="text" class="search" placeholder="search messages">
            <div class="messages">
                <div class="each-message">
                    <div class="left-message">
                        <h3>Nagari Farms</h3>
                        <p>Lorem ipsum dolor</p>
                    </div>
                    <div class="right-message">
                        <p>today, 9:52pm</p>
                        <img src="@/assets/images/vectors/checks.png" alt="">
                    </div>
                </div>
                <div class="each-message">
                    <div class="left-message">
                        <h3>Nagari Farms</h3>
                        <p>Lorem ipsum dolor</p>
                    </div>
                    <div class="right-message">
                        <p>today, 9:52pm</p>
                        <img src="@/assets/images/vectors/checks.png" alt="">
                    </div>
                </div>
                <div class="each-message">
                    <div class="left-message">
                        <h3>Nagari Farms</h3>
                        <p>Lorem ipsum dolor</p>
                    </div>
                    <div class="right-message">
                        <p>today, 9:52pm</p>
                        <p class="red-p">1</p>
                    </div>
                </div>
                <div class="each-message">
                    <div class="left-message">
                        <h3>Nagari Farms</h3>
                        <p>Lorem ipsum dolor</p>
                    </div>
                    <div class="right-message">
                        <p>today, 9:52pm</p>
                        <p class="red-p">1</p>
                    </div>
                </div>
                <div class="each-message">
                    <div class="left-message">
                        <h3>Nagari Farms</h3>
                        <p>Lorem ipsum dolor</p>
                    </div>
                    <div class="right-message">
                        <p>today, 9:52pm</p>
                        <img src="@/assets/images/vectors/checks.png" alt="">
                    </div>
                </div>
                <div class="each-message">
                    <div class="left-message">
                        <h3>Nagari Farms</h3>
                        <p>Lorem ipsum dolor</p>
                    </div>
                    <div class="right-message">
                        <p>today, 9:52pm</p>
                        <img src="@/assets/images/vectors/checks.png" alt="">
                    </div>
                </div>
                <div class="each-message">
                    <div class="left-message">
                        <h3>Nagari Farms</h3>
                        <p>Lorem ipsum dolor</p>
                    </div>
                    <div class="right-message">
                        <p>today, 9:52pm</p>
                        <p class="red-p">1</p>
                    </div>
                </div>
                <div class="each-message">
                    <div class="left-message">
                        <h3>Nagari Farms</h3>
                        <p>Lorem ipsum dolor</p>
                    </div>
                    <div class="right-message">
                        <p>today, 9:52pm</p>
                        <img src="@/assets/images/vectors/checks.png" alt="">
                    </div>
                </div>

            </div>
        </div>
        <div class="right">
            <div class="right-top-section">
                <h1>Naziri Farms</h1>
            </div>
            
            <div class="opened-message">
                <p class="centered-text">Yesterday, 9:52pm</p>
                <div class="sent-message">
                    <div class="sent-content">
                        <p>I would buy for N3,8202,894</p>
                        <span class="sent-time">10:35pm</span>
                    </div>
                    
                </div>
                <div class="incoming-message">
                    <div class="incoming-content">
                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Nemo sint dolor tenetur veritatis ab aperiam optio quisquam, 
                            deleniti dolorem pariatur minima aliquid, reiciendis perferendis!
                             Incidunt cum quam deserunt error vero?
                         </p>
                        <span class="received-time">10:35pm</span>
                    </div>
                   
                </div>

                <div class="centered">
                    <div class="lines"></div>
                    <p class="today">Today</p>
                    <div class="lines"></div>
                </div>

                

                <div class="sent-message">
                    <div class="sent-content">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                            Doloribus eos earum blanditiis vitae quibusdam quod voluptatum 
                            quos laboriosam officiis magni asperiores nisi repellat eum dolores, et, 
                            reiciendis recusandae quia rem.
                            </p>
                        <span class="sent-time">10:35pm</span>
                    </div>
                    
                </div>
                <div class="incoming-message">
                    <div class="incoming-content">
                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo sint dolor tenetur veritatis ab aperiam optio quisquam, deleniti dolorem pariatur minima aliquid, reiciendis perferendis! Incidunt cum quam deserunt error vero?
                         </p>
                        <span class="received-time">10:35pm</span>
                    </div>
                   
                </div>
                <div class="incoming-message">
                    <div class="incoming-content">
                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo sint dolor tenetur veritatis ab aperiam optio quisquam, deleniti dolorem pariatur minima aliquid, reiciendis perferendis! Incidunt cum quam deserunt error vero?
                         </p>
                        <span class="received-time">10:35pm</span>
                    </div>
                   
                </div>


                
                
            </div>

            <div class="typing-zone">
            
                <form action="">
                    <div class="typing">
                        <p>Zowasel is typing...</p> 
                    </div>
                    <div class="form-content">
                    <input type="text">
                    <button>Send Offer</button>
                    </div>
                    
                </form>
            </div>

            
        </div>
    </div>
</div>
    
</template>

<script> 
    import TopHeader from "@/layouts/partials/TopHeader.vue";
    export default {
        name: 'Messages',
        components:{
            TopHeader,
        }
    }
</script>


<style lang="scss" scoped>
.bigger-container{
    height: 100vh;
    overflow-y: hidden;
}
.big-container{
    width: 100%;
    height: auto;
    background: #F5F5F5;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
}

.left{
    width: 25%;
    padding-left: 60px;
    padding-top: 30px;
    display: flex;
    flex-direction:column;
    box-sizing: border-box;
    height: 100%;
    overflow-y: hidden;

     .search{
        padding: 10px 25px;
        background: #FFFFFF;
        border-radius: 4px;
        border: none !important;
    }
}

.top-section{
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 30px;

    img{
        width: 25px;
        height: 25px;
    }
    h2{
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        color: #4A4754;
        margin-left: 20px;
        margin-top: 10px;
    }
}
.messages{
    padding: 40px 20px 30px;
    background: #FFFFFF;
    border-radius: 4px;
    margin-top: 20px;
    height: 600px;
    overflow-y: scroll;

   
    .each-message{
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid rgba(180, 171, 171, 0.66);
        padding-top: 20px;
    }

    .left-message h3{
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        color: #696671;
    }
    .right-message{
        position: relative;
    }
    .right-message p{
        font-family: 'Maven Pro';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        color: #7C7C7C;
    }
    .right-message img{
        position: absolute;
        right: 0px;
        bottom: 10px;
        width: 30px;
        height: 30px;
    }
    .right-message .red-p{
        position: absolute;
        right: 0px;
        bottom: 5px;
        width: 20px;
        height: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        background-color: #F24E1E;
        border-radius: 50%;
    }
}

.right{
    width: 72%;
    background-color: white;
    position: relative;
    

    .right-top-section{
        height: 89px;
        width: 100%;
        background: #262C3F;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 20;
    }
      .centered-text{
            text-align: center;
            margin-top: 30px;
        }
    .opened-message{
        padding: 37px 58px 37px 57px;
        width: 100%;
        height: 700px;
        overflow-y: scroll;
        position: relative;
        display: flex;
        flex-direction: column;
        overflow-y: scroll;


        .centered{
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 20px;

            .lines{
                border-bottom: 1px solid #D8D8D8;
                width: 40%;
            }
            .today{
                margin-left: 10px;
                margin-right: 10px;
            }
        }
      

        .sent-message{
            display: flex;
            justify-content: flex-end;
            margin-bottom: 10px;
            margin-top: 10px;
            width: 100%;
            .sent-content{
                max-width: 50%;
                text-align: right;
            }

        .sent-content p{
            padding: 16px 16px;
            height: auto;
            background: #F9F9F9;
            border-radius: 4px;
            text-align: left;
            margin: 0px;
        }
        }
        .incoming-message{
            max-width: 100%;
            display: flex;
            justify-content: flex-start;
            margin-top: 10px;
            margin-bottom: 10px;
            
        }
        .incoming-content{
            max-width: 50%;
            text-align: right;
        }
     
        .incoming-content p{
            padding: 16px 16px;
            height: auto;
            border-radius: 4px;
            background: #FFF8E6;
            text-align: left;
            margin: 0px;
        }


        
    }

}
.typing-zone{
            width: 100%;
            padding: 0px 58px 0px 57px;


        .form-content{
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;

        }
        .typing{
            width: 100%;
            text-align: right;
            margin-bottom: 0px;
            
            p{
                margin: 0px;
                font-family: 'Maven Pro';
                font-style: normal;
                font-weight: 400;
                font-size: 18px;
                color: #05B050;
            }
        }

            input{
                width: 70%;
                height: 60px;
                padding: 10px 25px;
                gap: 39px;
                background: rgba(249, 249, 249, 0.5);
                border: 1px solid #05B050 !important;
                border-radius: 4px;
            }
            button{
                width: 28%;
                color: white;
                height: 60px;
                background: #05B050;
                box-shadow: 0px 2.58333px 5.16667px rgba(44, 39, 56, 0.08), 0px 5.16667px 10.3333px rgba(44, 39, 56, 0.08);
                border-radius: 5.16667px;
                border: none;
                font-family: 'Maven Pro';
                font-style: normal;
                font-weight: 700;
                font-size: 20.6667px;
                margin-top: 5px;
            }
        }


    


</style>