<template>
    <div class="bigger-container">
        <TopHeader>
        </TopHeader>
        <div class="big-container">
            <div class="left">
                <!-- <div class="top-section">
                <img src="@/assets/images/vectors/arrowleft.png" alt="">
                <h2>Messages</h2>
            </div>
            <div class="right">
                <div class="right-top-section">
                    <h1>{{ userData.user.first_name }}  Farms</h1>
                </div>

            </div> -->

                <h1>Irish Potato</h1>
                <p>NGN3,940,450/bag</p>
                <p>Naziri Farms</p>

                <p><img src="@/assets/images/vectors/verified.svg" alt=""><span>verified merchant</span></p>

                <h4>Product Specification</h4>

                <div class="actual-details">
                    <div class="left-line">
                        <div class="each-detail">
                            <h4>Product Category</h4>
                            <p>Grain</p>
                        </div>
                        <div class="each-detail">
                            <h4>Color</h4>
                            <p>Brown</p>
                        </div>
                        <div class="each-detail">
                            <h4>Moisture</h4>
                            <p>0%</p>
                        </div>
                        <div class="each-detail">
                            <h4>Foreign Matter (FM)</h4>
                            <p>3%</p>
                        </div>
                        <div class="each-detail">
                            <h4>Broken Grains</h4>
                            <p>6%</p>
                        </div>
                        <div class="each-detail">
                            <h4>Weevil</h4>
                            <p>0%</p>
                        </div>

                    </div>
                    <div class="right-line">
                        <div class="each-detail">
                            <h4>Test Weight</h4>
                            <p>MT</p>
                        </div>
                        <div class="each-detail">
                            <h4>Hardness</h4>
                            <p>Hard</p>
                        </div>
                        <div class="each-detail">
                            <h4>Split</h4>
                            <p>1%</p>
                        </div>
                        <div class="each-detail">
                            <h4>Oil Content</h4>
                            <p>0%</p>
                        </div>
                        <div class="each-detail">
                            <h4>Infestation</h4>
                            <p>5%</p>
                        </div>
                        <div class="each-detail">
                            <h4>Grain size</h4>
                            <p>Whole grain</p>
                        </div>
                    </div>



                    <div class="middle-line">
                        <div class="each-detail">
                            <h4>Test Weight</h4>
                            <p>MT</p>
                        </div>
                        <div class="each-detail">
                            <h4>Hardness</h4>
                            <p>Hard</p>
                        </div>
                        <div class="each-detail">
                            <h4>Split</h4>
                            <p>1%</p>
                        </div>
                        <div class="each-detail">
                            <h4>Oil Content</h4>
                            <p>0%</p>
                        </div>
                        <div class="each-detail">
                            <h4>Infestation</h4>
                            <p>5%</p>
                        </div>
                        <div class="each-detail">
                            <h4>Grain size</h4>
                            <p>Whole grain</p>
                        </div>
                    </div>



                </div>


            </div>
            <div class="right">
                <div class="right-top-section">
                    <h1>Naziri Farms</h1>
                </div>
                <div class="contents">
                    <!-- <div class="opened-message" id="chat-section">
                <p class="centered-text">Yesterday, 9:52pm</p>
                <div class="sent-message">
                    <div class="sent-content">
                        <p>I would buy for N3,8202,894</p>
                        <span class="sent-time">10:35pm</span>
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
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo sint dolor tenetur
                                veritatis ab aperiam optio quisquam, deleniti dolorem pariatur minima aliquid,
                                reiciendis perferendis! Incidunt cum quam deserunt error vero?
                            </p>
                            <span class="received-time">10:35pm</span>
                        </div>

                    </div>
                    <div class="incoming-message">
                        <div class="incoming-content">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo sint dolor tenetur
                                veritatis ab aperiam optio quisquam, deleniti dolorem pariatur minima aliquid,
                                reiciendis perferendis! Incidunt cum quam deserunt error vero?
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
                <form id="offer-form">
               <a href="#" class="close-form" v-on:click="closeForm()"> X </a>
              <div class="main-form" >
                  <div class="form-row">
                  <div class="form-group form-inputs">
                    <label for="formGroupExampleInput">Quantity</label>
                    <div class="quantity">
                     
                    </div>
                   
                    
                  </div>
                  <div class="form-group form-inputs">
                    <label for="formGroupExampleInput2">Price</label>
                    <input type="text" class="form-control amount " id="" placeholder="Enter Amount">
                  </div>
                  <div class="form-group form-inputs">
                    <label for="formGroupExampleInput2">Oil Content</label>
                    <input type="text" class="form-control percentage" id="" placeholder="%">
                  </div>
              </div>
              <div class="form-row">
                  <div class="form-group form-inputs">
                    <label for="formGroupExampleInput">Foreign Matter</label>
                    <input type="text" class="form-control percentage" id="formGroupExampleInput" placeholder="%">
                  </div>
                  <div class="form-group form-inputs">
                    <label for="formGroupExampleInput2">Infestation</label>
                    <input type="text" class="form-control percentage" id="formGroupExampleInput2" placeholder="%">
                  </div>
                  <div class="form-group form-inputs">
                    <label for="formGroupExampleInput2">Moisture</label>
                    <input type="text" class="form-control percentage" id="formGroupExampleInput2" placeholder="%">
                  </div>
              </div>
              <div class="form-row">
                  <div class="form-group form-inputs">
                    <label for="formGroupExampleInput">Weevil</label>
                    <input type="text" class="form-control percentage" id="formGroupExampleInput" placeholder="%">
                  </div>
                  <div class="form-group form-inputs">
                    <label for="formGroupExampleInput2">Hardness</label>
                    <input type="text" class="form-control percentage" id="formGroupExampleInput2" placeholder="%">
                  </div>
                  <div class="form-group form-inputs">
                    <label for="formGroupExampleInput2">Splits</label>
                    <input type="text" class="form-control percentage" id="formGroupExampleInput2" placeholder="%">
                  </div>
              </div>
              <div class="form-row">
                  <div class="form-group form-inputs">
                    <label for="formGroupExampleInput">Weevil</label>
                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="">
                  </div>
                  <div class="form-group form-inputs">
                    <label for="formGroupExampleInput2">Hardness</label>
                    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="">
                  </div>
                  <div class="form-group form-inputs">
                    <label for="formGroupExampleInput2">Splits</label>
                    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="">
                  </div>
              </div>
              </div>
              <div class="form-row">
                  <button class="form-send">Send</button>
              </div>
             
            
                </form> -->

                    <div class="chat-image">
                        <img src="@/assets/images/backgrounds/ChatsCircle.png" alt="">
                        <h1>Chat or send an offer to negotiate</h1>
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
    components: {
        TopHeader,
    },

    methods: {
        main: function () {
            var chat = document.getElementById('chat-section');
            var form = document.getElementById('offer-form');
            function offer() {

                if (chat.style.display = 'block') {
                    chat.style.display = "none";
                    form.style.display = "block"
                } else {
                    chat.style.display = "block";
                }
            }

            function closeForm() {
                chat.style.display = "block";
                form.style.display = "none"
            }
        }
    }
}

</script>


<style lang="scss" scoped>
.bigger-container {
    height: 100vh;
    overflow-y: hidden;
}

.big-container {
    width: 100%;
    height: auto;
    background: #F5F5F5;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

}

.left {
    width: 25%;
    padding-left: 60px;
    padding-top: 30px;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    height: 100%;
    overflow-y: hidden;

    .search {
        padding: 10px 25px;
        background: #FFFFFF;
        border-radius: 4px;
        border: none !important;
    }
}

.top-section {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 30px;

    img {
        width: 25px;
        height: 25px;
    }

    h2 {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        color: #4A4754;
        margin-left: 20px;
        margin-top: 10px;
    }
}

.messages {
    padding: 40px 20px 30px;
    background: #FFFFFF;
    border-radius: 4px;
    margin-top: 20px;
    height: 600px;
    overflow-y: scroll;


    .each-message {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid rgba(180, 171, 171, 0.66);
        padding-top: 20px;
    }

    .left-message h3 {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        color: #696671;
    }

    .right-message {
        position: relative;
    }

    .right-message p {
        font-family: 'Maven Pro';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        color: #7C7C7C;
    }

    .right-message img {
        position: absolute;
        right: 0px;
        bottom: 10px;
        width: 30px;
        height: 30px;
    }

    .right-message .red-p {
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

.right {
    width: 72%;
    background-color: white;
    position: relative;


    .right-top-section {
        height: 89px;
        width: 100%;
        background: #262C3F;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 20;
    }

    .centered-text {
        text-align: center;
        margin-top: 30px;
    }

    .opened-message {
        padding: 37px 58px 37px 57px;

        position: relative;
        display: flex;
        flex-direction: column;
        overflow-y: scroll;


        .centered {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 20px;

            .lines {
                border-bottom: 1px solid #D8D8D8;
                width: 40%;
            }

            .today {
                margin-left: 10px;
                margin-right: 10px;
            }
        }


        .sent-message {
            display: flex;
            justify-content: flex-end;
            margin-bottom: 10px;
            margin-top: 10px;
            width: 100%;

            .sent-content {
                max-width: 50%;
                text-align: right;
            }

            .sent-content p {
                padding: 16px 16px;
                height: auto;
                background: #F9F9F9;
                border-radius: 4px;
                text-align: left;
                margin: 0px;
            }
        }

        .incoming-message {
            max-width: 100%;
            display: flex;
            justify-content: flex-start;
            margin-top: 10px;
            margin-bottom: 10px;

        }

        .incoming-content {
            max-width: 50%;
            text-align: right;
        }

        .incoming-content p {
            padding: 16px 16px;
            height: auto;
            border-radius: 4px;
            background: #FFF8E6;
            text-align: left;
            margin: 0px;
        }



    }

}

.contents {
    width: 100%;
    height: 700px;
    overflow-y: scroll;
}

.typing-zone {
    width: 100%;
    padding: 0px 58px 0px 57px;


    .form-content {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;

    }

    .typing {
        width: 100%;
        text-align: right;
        margin-bottom: 0px;

        p {
            margin: 0px;
            font-family: 'Maven Pro';
            font-style: normal;
            font-weight: 400;
            font-size: 18px;
            color: #05B050;
        }

        .typing {
            width: 100%;
            text-align: right;
            margin-bottom: 0px;

            p {
                margin: 0px;
                font-family: 'Maven Pro';
                font-style: normal;
                font-weight: 400;
                font-size: 18px;
                color: #05B050;
            }
        }

        input {
            width: 70%;
            height: 60px;
            padding: 10px 25px;
            gap: 39px;
            background: rgba(249, 249, 249, 0.5);
            border: 1px solid #05B050 !important;
            border-radius: 4px;
        }

        button {
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



    #offer-form {
        margin-top: 200px;
        padding: 30px;
        width: 90%;
        margin-left: 3%;
        border: 1px solid rgba(48, 189, 110, 0.4);
        position: relative;

        .main-form {
            margin-top: 50px;
            height: 400px;
            overflow-y: scroll;
        }

        .form-row {
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            margin-top: 40px;
        }

        .form-inputs {
            width: 30%;
        }

        label {
            font-family: Maven Pro;
            font-style: Medium;
            font-size: 21.33px;
            color: #B5B4B9;
        }

        .form-send {
            border: 2px solid #6ED19A;
            width: 100%;
            height: 48px;
            background-color: white;
            font-family: Maven Pro;
            font-style: Bold;
            font-size: 16px;
            color: #6ED19A;
            font-weight: bold;
        }

        .close-form {
            position: absolute;
            right: 30px;
            background-color: #696671;
            color: white;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        select {
            height: 50px;
            border: 1px solid #dde6ef;
            margin-bottom: 10px;
            box-shadow: none;
            border-radius: 0;
            background: #fbfdff;
            font-size: 15px;
            color: #445461;
            font-weight: 400;
        }

        .quantity {
            display: flex;
        }

        .percentage::placeholder {
            text-align: right;
            font-family: "Maven Pro";
            font-style: "Regular";
            font-size: 21.33px;
            color: #696671;
        }

        .amount::placeholder {
            font-family: "Maven Pro";
            font-style: "Regular";
            font-size: 21.33px;
            color: #696671;
        }

        input {
            font-family: "Maven Pro";
            font-style: "Regular";
            font-size: 21.33px;
            color: #696671;
        }
    }

    input {
        width: 70%;
        height: 60px;
        padding: 10px 25px;
        gap: 39px;
        background: rgba(249, 249, 249, 0.5);
        border: 1px solid #05B050 !important;
        border-radius: 4px;
    }

    .actual-details {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        .each-detail {
            margin-top: 30px;

            h4 {
                font-family: 'Maven Pro';
                font-style: normal;
                font-weight: 700;
                font-size: 12px;
                color: #696671;
            }
        }
    }

    .chat-image {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        h1 {
            font-family: 'Maven Pro';
            font-style: normal;
            font-weight: 700;
            font-size: 34px;
            color: #4A4754;
        }
    }
}
</style>