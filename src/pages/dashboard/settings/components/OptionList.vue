<template>
    <div class="notification-body d-flex flex-column">
        <!-- first item -->
        <div v-for="(option, index) in options" :key="index" class="notification-main d-flex flex-column">
            <div class="notification-setting d-flex flex-row">
                <div class="notification-item">{{ option.name }}</div>
                <!-- switch -->
                <div v-if="option.type == 'switch'" @click="switcher($event)" 
                    class="setting-btn d-flex flex-row justify-content-center align-items-center position-relative">
                    <span class="off position-absolute"></span>
                    <span class="on position-absolute"></span>
                </div>
                <!-- button  for Email Subscription-->
                <button 
                    id="email-unsubsribe" 
                    v-if="option.type == 'button'" 
                    type="button"
                    class="btn k-success"
                    :style="option.button.color ? `background-color : ${option.button.color};` : ''"
                    @click="option.button.action()"
                >
                    {{option.button.title}}
                </button>
            </div>
            <div v-if="option.subscript == 'email'" class="email-address d-flex flex-column justify-content-center ">
                {{ option.data.email}}
            </div>
            <!-- {{ JSON.stringify(option)}} -->
            <hr>
        </div>
    </div>
</template>

<script>
export default {
    name: "OptionList",
    props: {
        options: {
            type: Object,
        },
    },
    data() {
        return {};
    },
    methods: {
        switcher(event){
            if(!event.target.classList.contains('setting-btn')){
                event.target.parentElement.classList.toggle("active-setting");
                return;
            }
             event.target.classList.toggle("active-setting");

        }
        // switches() {
        //     let notificationSwitch = document.getElementsByClassName("setting-btn");
        //     for (let index = 0; index < notificationSwitch.length; index++) {
        //         const element = notificationSwitch[index];
        //         element.addEventListener("click", () => {
        //             console.log("uncle chris, how sre you!! your code is running ba!")
        //             element.classList.toggle("active-setting");
        //         });
        //     }
        // },
    },
    mounted() {
        // this.switches();
        // console.log("something is mounted")
    },
    // updated(){
    //     this.switches();
    // }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";

.notification-body {
    padding-left: 21px;
    background: #ffffff;
    margin-top: 33px;
    padding-bottom: 42px;
}

.notification-main {
    padding: 21px 24px 0px;

    hr {
        width: 100%;
        margin-bottom: 0px;
        margin-top: 42px;
    }

    hr:not([size]) {
        height: 2px;
    }

    .email-address {
        margin-top: 13px;
        width: 218px;
        @include textStyles(Poppins, 300, 14px, 166.67%);
        padding: 10px 15px;
        border: 1px solid #96949C;
        color: #2D3748;
    }
}

.notification-setting {
    width: 100%;
    justify-content: space-between;

    .notification-item {
        @include textStyles('Maven Pro', 400, 16px, 19px);
        color: #000022;
    }

    .setting-btn {
        width: 51.5px;
        height: 26px;
        background: #05b050;
        box-shadow: 0px 4px 8px rgba(44, 39, 56, 0.04);
        border-radius: 15px;
        transition: all 0.35s;
    }

    %switch {
        width: 21px;
        height: 21px;
        border-radius: 50%;
        background: #ffffff;
        border: 1px solid #ededee;
        box-shadow: 0px 4px 8px rgba(44, 39, 56, 0.2);
    }

    .active-setting {
        background: #ffffff;
        border: 1px solid #ededee;
        box-shadow: 0px 4px 8px rgba(44, 39, 56, 0.08);
        border-radius: 15px;
        transition: all 0.3s;

        span.off {
            display: block !important;
        }

        span.on {
            display: none !important;
        }
    }

    span.off {
        @extend %switch;
        left: 5px;
        display: none;
    }

    span.on {
        @extend %switch;
        right: 5px !important;
    }

    button.k-success {
        @include textStyles('Maven Pro', 700, 14px, 116%);
        text-align: center;
        color: #E6F7EE;
        background: #05B050;
        border-radius: 1.29167px;
    }
}
</style>
