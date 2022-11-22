<template>
    <div class="notification-body d-flex flex-column">
        <!-- first item -->
        <div v-for="option,index in options" :key="index" class="notification-main d-flex flex-column">
            <div class="notification-setting d-flex flex-row">

                <div class="notification-item">{{ option.name }}</div>

                <div v-if="option.type == 'switch'" class="setting-btn d-flex flex-row justify-content-center align-items-center position-relative">
                    <span class="off position-absolute"></span>
                    <span class="on position-absolute"></span>
                </div>

            </div>
            <hr>
        </div>
    </div>
</template>

<script>


export default {
    name: "OptionList",
    props : {
        options : {
            type : Object
        }
    },
    data(){
        return {
            
        };
    },
    methods: {
        switches(){
            let notificationSwitch = document.getElementsByClassName("setting-btn");
            for(let index = 0; index <notificationSwitch.length; index++){
                const element = notificationSwitch[index];
                element.addEventListener("click", () => {
                    element.classList.toggle("active-setting");
                })
            }
        },
        
    },
    mounted() {
        this.switches();
    }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";
.notification-body {
    padding-left: 21px;
    background: #FFFFFF;
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
}

.notification-setting {
    width: 100%;
    justify-content: space-between;

    .notification-item {
        @include textStyles(Poppins, 400, 24px, 28px);
        color: #000022;
    }

    .setting-btn {
        width: 54.5px;
        height: 28px;
        background: #05B050;
        box-shadow: 0px 4px 8px rgba(44, 39, 56, 0.04);
        border-radius: 15px;
        transition: all .35s;
    }

    %switch {
        width: 24px;
        height: 24px;
        border-radius: 50%;
        background: #FFFFFF;
        border: 1px solid #EDEDEE;
        box-shadow: 0px 4px 8px rgba(44, 39, 56, 0.2);
    }

    .active-setting {
        background: #FFFFFF;
        border: 1px solid #EDEDEE;
        box-shadow: 0px 4px 8px rgba(44, 39, 56, 0.08);
        border-radius: 15px;
        transition: all .3s;

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
}
</style>