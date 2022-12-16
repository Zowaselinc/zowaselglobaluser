<template>
    <DefaultNav>
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

                <table class="actual-details table container">
                    <tr>
                        <th>Product Category</th>
                        <th>Broken grains</th>
                        <th>Test weight</th>
                    </tr>
                    <tr>
                        <td>{{ product.category.name }}</td>
                        <td>{{ product.specification.broken_grains }}%</td>
                        <td>{{ product.specification.test_weight }}%</td>
                    </tr>
                    <tr>
                        <th>Color</th>
                        <th>Weevil</th>
                        <th>Hardness</th>
                    </tr>
                    <tr>
                        <td>{{ product.specification.color }}</td>
                        <td>{{ product.specification.weevil }}%</td>
                        <td>{{ product.specification.hardness }}</td>
                    </tr>
                    <tr>
                        <th>Moisture</th>
                        <th>Damaged kernel</th>
                        <th>Splits</th>
                    </tr>
                    <tr>
                        <td>{{ product.specification.moisture }}</td>
                        <td>{{ product.specification.dk }}%</td>
                        <td>{{ product.specification.splits }}%</td>
                    </tr>
                    <tr>
                        <th>Grain Size</th>
                        <th>Rotten shriveled</th>
                        <th>Oil content</th>
                    </tr>
                    <tr>
                        <td>{{ product.specification.grain_size }}</td>
                        <td>{{ product.specification.dk }}%</td>
                        <td>{{ product.specification.oil_content }}%</td>
                    </tr>
                    <tr>
                        <th>Infestation</th>
                        <th>Foreign matter (FM)</th>
                        <th>Grain size</th>
                    </tr>
                    <tr>
                        <td>{{ product.specification.infestation }}%</td>
                        <td>{{ product.specification.foreign_matter }}%</td>
                        <td>{{ product.specification.grain_size }}</td>
                    </tr>

                </table>
            </div>
            <div class="right" v-if="product">
                <ChatView 
                    :sender="userData.user" 
                    :recepient="product.user"
                    :title="product.user.id != userData.user_id 
                        ? product.user.first_name+' '+product.user.last_name
                        : participant(conversationData).first_name + '' + participant(conversationData).last_name
                    "
                    :messages="conversationData.negotiations"
                    :loadMessages="getNegotiation"
                    :onSendMessage="sendNegotiationMessage"
                    :onSendOffer="sendNegotiationOffer"
                />
                <div class="right-top-section">
                    <h1 v-if="product.user.id != userData.user_id">{{ product.user.first_name + " " + product.user.last_name }}</h1>
                    <h1 v-else>{{ participant(conversationData).first_name + " " + participant(conversationData).last_name }}</h1>
                </div>
=
            </div>
        </div>
    </DefaultNav>
    
    </template>
    
    <script> 
        import DefaultNav from "@/layouts/DefaultNav.vue";
        import MarketPlaceService from "@/services/marketplace";
        import ChatView from "./marketPlace/components/ChatView.vue";
        import DateUtils from "@/utilities/date";

        export default {
            name: 'Negotiations',
            components:{
                DefaultNav,
                ChatView
            },
            data(){
                return {
                    product: null,
                    userData: this.$store.state.user,
                    negotiations: [],
                    conversations : [],
                    conversationData : {},
                }
            },
            methods:{
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
                        if(response){
                            this.conversationData.negotiations = response.data;
                        }
                    })
                },
                getConversations(){
                    MarketPlaceService.getNegotiationsByUser({ userId : this.userData.user_id},(response)=>{
                        this.conversations = response.data;
                    })
                },
                sendNegotiationMessage(message,callback){
                    MarketPlaceService.sendNegotiationMessage({
                        sender_id : this.userData.user.id,
                        receiver_id : this.participant(this.conversationData).id,
                        crop_id : this.product.id,
                        type : this.userData.user.type,
                        message : message
                    },(response)=>{
                        this.getNegotiation();
                        callback();
                    });
                },
                sendNegotiationOffer(offer,callback){
                    MarketPlaceService.sendNegotiationOffer({
                        sender_id : this.userData.user.user_id,
                        receiver_id : this.participant(this.conversationData).id,
                        crop_id : this.product.id,
                        type : this.userData.user.type,
                        message : "offer",
                        ...offer
                    },(response)=>{
                        this.getNegotiation();
                        callback();
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
                },5000);
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
        height : auto;
        background: #F5F5F5;
        display: flex;
        flex: 1;
        min-height: 0;
        flex-direction: row;
        justify-content: space-between;

    }
    
    .left {
    width: 45%;
    padding-left: 35px;
    padding-top: 30px;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    height: 100%;
    overflow-y: hidden;

    h1,
    h4 {
        font-size: 18px;
    }

    p {
        font-size: 14px;
    }

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
        width: 55%;
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
    // display: flex;
    // flex-direction: row;
    // justify-content: space-between;


    >tr:nth-of-type(1) {
        margin-top: 30px;
    }

    tr {


        th {
            font-family: 'Maven Pro';
            font-style: normal;
            font-weight: 700;
            font-size: 14px;
            color: #696671;
        }

        td {
            font-size: 12px;
            padding-bottom: 1rem;
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
        gap: 10px;
        
        border-radius: 4px;
        .colored{
            background: #F9E9E9;
            padding: 16px;
        gap: 10px;
        }

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
            margin-bottom: 45px;
        }
    }
    .bottom-container{
        width: 100%;
        display: flex;
        align-items: center;

        .check-buttons{
        background-color: white;
        display: flex;
        width: 50%;
        justify-content: space-evenly;
        align-items: center;
        input{
            width: 20px;
            height: 20px;
        }
    }
    .timed{
        display: flex;
        justify-content: flex-end;
        width: 50%;
        align-items: center;
    }
    }
    
    </style>