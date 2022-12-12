<template>
    <div class="bigger-container">
        <TopHeader>              
        </TopHeader>
        <div class="big-container">
            <div class="left" v-if="!product">
                <div class="top-section">
                    <a href="javascript:void(0)" @click="$router.back()">
                        <img src="@/assets/images/vectors/arrowleft.png" alt="">
                    </a>
                    <h2>Negotiations</h2>
                </div>
                <input type="text" class="search" placeholder="Search messages">
                <div class="messages">
                    <a @click="openConversation(conversation)" v-for="conversation,index in conversations" :key="index" href="javascript:void(0)" class="each-message">
                        <div class="left-message">
                            <h3>{{( participant(conversation).first_name +" "+ participant(conversation).last_name)}}</h3>
                            <p>{{ conversation.crop.title }}</p>
                        </div>
                        <div class="right-message">
                            <p>{{ lastMessageData(conversation).dateString }}, {{ lastMessageData(conversation).time }}</p>
                            <img src="@/assets/images/vectors/checks.png" alt="">
                        </div>
                    </a>
                </div>
            </div>
            <div class="left" v-if="product">
                <div class="top-section">
                    <a href="javascript:void(0)" @click="openNegotiations()">
                        <img src="@/assets/images/vectors/arrowleft.png" alt="">
                    </a>
                    <h2>Back To Negotiations</h2>
                </div>
                <h1>{{ product.title }}</h1>
                <p>{{ product.currency }}{{ product.specification.price }}/{{ product.packaging }}</p>
                <p>{{ product.user.first_name + " " + product.user.last_name }}</p>

                <p><img src="@/assets/images/vectors/verified.svg" alt=""><span> verified merchant</span></p>

                <h4>Product Specification</h4>

                <div class="actual-details">
                    <div class="left-line">
                        <div class="each-detail">
                            <h4>Product Category</h4>
                            <p>{{ product.crop_category.name }}</p>
                        </div>
                        <div class="each-detail">
                            <h4>Color</h4>
                            <p>{{ product.specification.color }}</p>
                        </div>
                        <div class="each-detail">
                            <h4>Moisture</h4>
                            <p>{{ product.specification.moisture }}%</p>
                        </div>
                        <div class="each-detail">
                            <h4>Grain size</h4>
                            <p>{{ product.specification.grain_size }}</p>
                        </div>
                        <div class="each-detail">
                            <h4>Infestation</h4>
                            <p>{{ product.specification.infestation }}%</p>
                        </div>

                    </div>
                    <div class="right-line">
                        <div class="each-detail">
                            <h4>Test Weight</h4>
                            <p>{{ product.specification.test_weight }}</p>
                        </div>
                        <div class="each-detail">
                            <h4>Hardness</h4>
                            <p>{{ product.specification.hardness }}</p>
                        </div>
                        <div class="each-detail">
                            <h4>Split</h4>
                            <p>{{ product.specification.splits }}%</p>
                        </div>
                        <div class="each-detail">
                            <h4>Oil Content</h4>
                            <p>{{ product.specification.oil_content }}%</p>
                        </div>
                    </div>



                    <div class="middle-line">

                        <div class="each-detail">
                            <h4>Broken Grains</h4>
                            <p>{{ product.specification.broken_grains }}%</p>
                        </div>
                        <div class="each-detail">
                            <h4>Weevil</h4>
                            <p>{{ product.specification.weevil }}%</p>
                        </div>
                        <div class="each-detail">
                            <h4>Damaged kernel</h4>
                            <p>{{ product.specification.dk }}%</p>
                        </div>
                        <div class="each-detail">
                            <h4>Rotten Shriveled</h4>
                            <p>{{ product.specification.rotten_shriveled }}%</p>
                        </div>
                        <div class="each-detail">
                            <h4>Foreign Matter (FM)</h4>
                            <p>{{ product.specification.foreign_matter }}%</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="right" v-if="product">
                <div class="right-top-section">
                    <h1 v-if="product.user.id != userData.user_id">{{ product.user.first_name + " " + product.user.last_name }}</h1>
                    <h1 v-else>{{ participant(conversationData).first_name + " " + participant(conversationData).last_name }}</h1>
                </div>
                <div class="contents">
                    <div class="opened-message" v-if="conversationData.negotiations.length" id="chat-section">
                        <div v-for="group,index in groupMessages" :key="index">
                            <p class="centered-text">{{ group.date }}</p>
                            <template v-for="message,index in group.messages" :key="index">
                                <div v-if="((message.sender_id == userData.user.id) && message.messagetype == 'text')" class="sent-message">
                                    <div class="sent-content">
                                        <p>{{ message.message }}</p>
                                        <span class="sent-time">{{ message.time }}</span>
                                    </div>
                                </div>
                                <div v-if="((message.receiver_id == userData.user.id) && message.messagetype == 'text')" class="incoming-message">
                                    <div class="incoming-content">
                                        <p>{{ message.message}}
                                        </p>
                                        <span class="received-time">{{ message.time }}</span>
                                    </div>
                                </div>
                                <div v-if="message.messagetype == 'offer'" :class="(message.receiver_id == userData.user.id) ? 'offer-left' : 'offer-right'">
                                    <div class="offered">
                                        <h3>Offer</h3>
                                        <hr>
                                        <div class="white-line"></div>
                                        <div class="each-item">
                                            <p>Required Item</p>
                                            <h4>10,000kg</h4>
                                        </div>
                                        <div class="each-item">
                                            <p>Offer Price</p>
                                            <h4>2%</h4>
                                        </div>
                                        <div class="each-item">
                                            <p>Oil content</p>
                                            <h4>2%</h4>
                                        </div>
                                        <div class="each-item">
                                            <p>Foreign matter</p>
                                            <h4>2%</h4>
                                        </div>
                                        <div class="each-item">
                                            <p>Infestation</p>
                                            <h4>2%</h4>
                                        </div>
                                        <div class="each-item">
                                            <p>Infestation</p>
                                            <h4>2%</h4>
                                        </div>
                                        <div class="each-item">
                                            <p>Infestation</p>
                                            <h4>2%</h4>
                                        </div>
                                        <div class="each-item">
                                            <p>Splits</p>
                                            <h4>2%</h4>
                                        </div>
                                        <button>View Full Specification</button>
                                    </div>
                                </div>
                            </template>
                        </div>
                    </div>

                    
                    <form id="offer-form" v-if="offerFormVisible">
                        <a href="#" class="close-form" v-on:click="closeForm()"> X </a>
                        <div class="main-form">
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
                                    <input type="text" class="form-control percentage" id="formGroupExampleInput"
                                        placeholder="%">
                                </div>
                                <div class="form-group form-inputs">
                                    <label for="formGroupExampleInput2">Infestation</label>
                                    <input type="text" class="form-control percentage" id="formGroupExampleInput2"
                                        placeholder="%">
                                </div>
                                <div class="form-group form-inputs">
                                    <label for="formGroupExampleInput2">Moisture</label>
                                    <input type="text" class="form-control percentage" id="formGroupExampleInput2"
                                        placeholder="%">
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group form-inputs">
                                    <label for="formGroupExampleInput">Weevil</label>
                                    <input type="text" class="form-control percentage" id="formGroupExampleInput"
                                        placeholder="%">
                                </div>
                                <div class="form-group form-inputs">
                                    <label for="formGroupExampleInput2">Hardness</label>
                                    <input type="text" class="form-control percentage" id="formGroupExampleInput2"
                                        placeholder="%">
                                </div>
                                <div class="form-group form-inputs">
                                    <label for="formGroupExampleInput2">Splits</label>
                                    <input type="text" class="form-control percentage" id="formGroupExampleInput2"
                                        placeholder="%">
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


                    </form>

                    <div class="chat-image" v-if="!conversationData.negotiations.length">
                        <img src="@/assets/images/backgrounds/ChatsCircle.png" alt="">
                        <h1>Chat or send an offer to negotiate</h1>
                    </div> 

                </div>
                <div class="typing-zone">
                    <p class="typing" v-if="false">Zowasel is typing</p>
                    <div class="form-content">                        
                        <div class="input-session">
                            <input class="no-border" v-model="message" type="text" placeholder="Type your message here">
                            <div class="icons">
                                <a href=""><img src="@/assets/images/vectors/attach.svg" alt=""></a>
                                <a href=""><img src="@/assets/images/vectors/emoji.svg" alt=""></a>
                                <a href="javascript:void(0)" @click="sendNegotiationMessage()"><img src="@/assets/images/vectors/PaperPlaneTilt.svg" alt=""></a>
                            </div>
                        </div>
                        <button @click="offer()">Send Offer <img src="@/assets/images/vectors/arrow-down.svg"></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    </template>
    
    <script> 
        import TopHeader from "@/layouts/partials/TopHeader.vue";
        import MarketPlaceService from "@/services/marketplace";
        import DateUtils from "@/utilities/date";
        export default {
            name: 'Negotiations',
            components:{
                TopHeader,
            },
            data(){
                return {
                    offerFormVisible:false,
                    product: null,
                    userData: this.$store.state.user,
                    negotiations: [],
                    message : "",
                    conversations : [],
                    conversationData : {},
                    offerData : {
                        qty: "",
                        price: "",
                        color: "",
                        moisture: "",
                        foreign_matter: "",
                        broken_grains: "",
                        weevil: "",
                        dk: "",
                        rotten_shriveled: "",
                        test_weight: "",
                        hectoliter: "",
                        hardness: "",
                        splits: "",
                        oil_content: "",
                        infestation: "",
                        grain_size: "",
                        total_defects: "",
                        dockage: "",
                        ash_content: "",
                        acid_ash: "",
                        volatile: "",
                        mold: "",
                        drying_process: "",
                        dead_insect: "",
                        mammalian: "",
                        infested_by_weight: "",
                        curcumin_content: "",
                        extraneous: "",
                        unit: "",
                        liters: ""
                    }
                }
            },
            computed : {
                groupMessages(){
                    var groups = {};
                    this.conversationData.negotiations.forEach((item)=>{
                        var timestamp = DateUtils.formatDateFromApi(item.created_at);
                        var timeString;
                        var today= new Date();
                        var yesterday = new Date();
                        yesterday.setDate((new Date()).getDate - 1);
                        var messageDate = new Date(item.created_at);
                        item.time = timestamp.time;
                        item.utcTime = messageDate.getTime();
                        if (today.toDateString() === messageDate.toDateString()) {
                            timeString = `Today`
                        }else if (yesterday.toDateString() === messageDate.toDateString()) {
                            timeString = `Yesterday`
                        }else{
                            timeString = `${timestamp.date}`
                        } 

                        groups[timestamp.date] = groups[timestamp.date] ? {
                            date : timeString,
                            messages : [ ...groups[timestamp.date].messages , item ]
                        } : { 
                            date : timeString,
                            messages : [item]
                        };

                        groups[timestamp.date].messages.sort((a,b) => a.utcTime - b.utcTime);
                    });
                    return Object.values(groups);
                }
            },
            methods:{
                offer() {
                    this.offerFormVisible =true
                },
                closeForm() {
                    this.offerFormVisible=false
                },
                participant(conversation){
                    return conversation.initiator.id == this.userData.user_id ? conversation.participant : conversation.initiator;
                },
                lastMessageData(conversation){
                    var lastMessage = conversation.negotiations[0];
                    var timestamp = DateUtils.formatDateFromApi(lastMessage.created_at);
                    var timeString;
                    var today= new Date();
                    var yesterday = new Date();
                    yesterday.setDate((new Date()).getDate - 1);
                    var messageDate = new Date(lastMessage.created_at);
                    if (today.toDateString() === messageDate.toDateString()) {
                        timeString = `Today`
                    }else if (yesterday.toDateString() === messageDate.toDateString()) {
                        timeString = `Yesterday`
                    }else{
                        timeString = `${timestamp.date}`
                    } 
                    return {dateString : timeString, time : timestamp.time};
                },
                openConversation(conversation){
                    this.product = conversation.crop;
                    this.conversationData = conversation;
                },
                openNegotiations(){
                    this.product = null;
                    this.conversationData = {};
                },
                getProduct() {
                    MarketPlaceService.getCropById(this.$route.params.id, (response) => {
                        this.product = response.data;
                        this.product.images = JSON.parse(this.product.images);
                        this.getNegotiation();
                    })
                },
                getNegotiation() {
                    MarketPlaceService.getCropNegotiations({
                        cropId: this.product.id,
                        userId: this.participant(this.conversationData).id
                    }, (response) => {   
                        this.negotiations = response.data;
                        document.getElementById('chat-section').scrollTop = document.getElementById('chat-section').scrollHeight;
                    })
                },
                getConversations(){
                    MarketPlaceService.getNegotiationsByUser({ userId : this.userData.user_id},(response)=>{
                        this.conversations = response.data;
                    })
                },
                sendNegotiationMessage(){
                    MarketPlaceService.sendNegotiationMessage({
                        sender_id : this.userData.user.id,
                        receiver_id : this.product.user.id,
                        crop_id : this.product.id,
                        type : this.userData.user.type,
                        message : this.message
                    },(response)=>{
                        this.getNegotiation();
                        this.message = "";
                    });
                },
                sendNegotiationOffer(){
                    MarketPlaceService.sendNegotiationOffer({
                        sender_id : this.userData.user.user_id,
                        receiver_id : this.product.user.id,
                        crop_id : this.product.id,
                        type : this.userData.user.type,
                        message : "offer",
                        ...this.offer
                    },(response)=>{
                        console.log(response);
                    });
                },
                acceptNegotiationOffer(id){
                    MarketPlaceService.acceptNegotiationOffer(id,(response)=>{

                    });
                },
                declineNegotiationOffer(id){
                    MarketPlaceService.declineNegotiationOffer(id,(response)=>{
                        
                    });
                },
            },
            mounted() {
                let vm = this;
                this.getConversations();
                setInterval(()=>{
                    if(vm.product){
                        vm.getNegotiation();
                    }
                },8000);
            }
        }
    </script>
    
    
    <style lang="scss" scoped>
    .bigger-container {
        height: 100vh;
        overflow-y: hidden;
        display: flex;
        flex-direction: column;
    }

    .big-container {
        width: 100%;
        background: #F5F5F5;
        display: flex;
        flex: 1;
        min-height: 0;
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
        margin-bottom: 15px;
    
        img {
            width: 25px;
            height: 25px;
        }
    
        h2 {
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 700;
            font-size: 20px;
            color: #4A4754;
            margin-left: 20px;
            margin-top: 10px;
        }
    }
    
    .messages {
        padding: 0px 0px 30px;
        background: #FFFFFF;
        border-radius: 4px;
        margin-top: 20px;
        height: 600px;
        overflow-y: scroll;
    
    
        .each-message {
            display: flex;
            justify-content: space-between;
            border-bottom: 1px solid rgba(180, 171, 171, 0.66);
            padding: 20px 15px 0px;
            text-decoration: none;

            &:hover{
                background-color: #f2f2f2;
            }
        }


    
        .left-message h3 {
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 700;
            font-size: 16px;
            color: #696671;
            text-decoration: none;
        }
        .left-message p{
            color: black;
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
            text-decoration: none;
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
        height: 100%;
        display: flex;
        flex-direction: column;
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
            height:100%;
            position: relative;
            display: flex;
            flex-direction: column-reverse;
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
        flex: 1;
        position: relative;
        min-height: 0px;
        padding-bottom: 20px;
    }

    .typing-zone {
        width: 100%;
        padding: 0px 58px 20px 57px;
        .typing{
            font-family: 'Maven Pro';
            font-style: normal;
            font-weight: 400;
            font-size: 18px;
            line-height: 135%;
            color: #05B050;
        }


        .form-content {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 10px;

            .input-session{
                width: 80%;
                height: 60px;
                background: rgba(249, 249, 249, 0.5);
                border: 1px solid #05B050 !important;
                border-radius: 4px;
                display: flex;
                align-items: center;
                flex-direction: row;

                .no-border{
                    width: 85%;
                    height: 100%;
                    margin: 0;
                    border: none !important;
                }
                .no-border:focus,
                .no-border:active,
                .no-border:focus-visible{
                    border: none !important;
                    outline: none;
                }

                .icons{
                    width: 15%;
                    display: flex;
                    justify-content: space-around;
                }
            }
            button{
                width: 20%;
                background: #05B050;
                box-shadow: 0px 2.58333px 5.16667px rgba(44, 39, 56, 0.08), 0px 5.16667px 10.3333px rgba(44, 39, 56, 0.08);
                border-radius: 6px;
                height: 60px;
                border: none;
                color: white;
            }
        }

        .typing {
            width: 100%;
            text-align: right;
            margin-bottom: 0px;
        }

    }



    #offer-form {
        padding: 30px;
        width: 90%;
        margin-left: 5%;
        border: 1px solid rgba(48, 189, 110, 0.4);
        position: absolute;
        bottom: 20px;
        background-color: white;

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

    .offer-left{
        width : 100%;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
    }
    .offer-right{
        width : 100%;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
    }
    .offered{
        width: 50%;
        padding: 16px;
        gap: 10px;
        background: #F9E9E9;
        border-radius: 4px;

        h3{
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 700;
            font-size: 16px;
            line-height: 147%;
            color: #4A4754;
            margin-bottom: 0px;
        }
        hr{
            color: white;
            height: 3px;
        }
        .each-item{
            display: flex;
            justify-content: space-between;

            p{
                font-family: 'Maven Pro';
                font-style: normal;
                font-weight: 400;
                font-size: 16px;
                line-height: 147%;
                color: #4A4754;
            }
            h4{
                font-family: 'Maven Pro';
                font-style: normal;
                font-weight: 700;
                font-size: 16px;
                line-height: 147%;
                color: #4A4754;
            }
        }
        button{
            width: 100%;
            height: 30px;
            background: #696671;
            color: white;
            border: none;
        }
    }
    
    </style>