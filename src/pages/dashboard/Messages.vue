<template>
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
                        <p>I would buy for N3,8202,894 lo</p>
                        <span class="sent-time">10:35pm</span>
                    </div>
                    
                </div>
                <div class="incoming-message">
                    <div class="incoming-content">
                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Dolorum totam quasi, minus nulla officiis vel ad ipsam,
                             maxime fugit facere rerum explicabo tenetur voluptatum labore neque.
                              Similique doloribus corrupti repellat.
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                              Earum dignissimos vero similique vitae? Eum, iure autem soluta delectus 
                              perspiciatis sequi. Ut illo mollitia, iste voluptate labore modi! Repudiandae, 
                              assumenda repellat?</p>
                        <span class="sent-time">10:35pm</span>
                    </div>
                   
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
    }
    .opened-message{
        padding: 37px 58px 37px 57px;
        position: relative;
        display: flex;
        flex-direction: column;

        .centered-text{
            text-align: center;
        }

        .sent-message{
            position: absolute;
            right: 57px;
            text-align: right;
            bottom: 20px;
            max-width: 50%;

        .sent-content p{
            padding: 16px 16px;
            height: auto;
            background: #F9F9F9;
            border-radius: 4px;
        }
        }
        .incoming-message{
            margin-top: 80px;
            margin-bottom: 80px;
            max-width: 50%;
        }
     
        .incoming-content p{
            padding: 16px 16px;
            height: auto;
            border-radius: 4px;
            background: #FFF8E6;
        }
    }
}


    


</style>