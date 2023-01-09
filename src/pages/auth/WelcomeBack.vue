<template>
    <section class="ftco-section">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-12 col-lg-10">
                    <div class="wrap d-md-flex">
                        <div class="img"></div>
                        <div class="login-wrap p-4 p-md-5">
                            <div class="d-flex top-container">
                                <div class="w-100">
                                    <h3 class="mb-4">Sign In</h3>
                                </div>
                            </div>
                            <form action="#" class="signin-form">
                                <div class="form-group mb-3">
                                    <label class="label" for="name">Email</label>
                                    <input type="text" v-model="email" class="form-control" placeholder="Email"
                                        required>
                                </div>
                                <div class="form-group mb-3">
                                    <label class="label" for="password">Password</label>
                                    <input type="password" v-model="password" class="form-control"
                                        placeholder="Password" required>
                                </div>
                                <div class="form-group">
                                    <button type="button" class="form-control btn btn-primary-green rounded submit px-3"
                                        @click="loginAccount()">Login
                                    </button>
                                </div>
                                <div class="form-group d-md-flex forget-remember">
                                    <div id="main" class="w-50 text-left position-relative">
                                        <label class="checkbox-wrap checkbox-primary mb-0 ">Remember Me
                                            <input type="checkbox" checked>
                                            <span class="checkmark"></span>
                                        </label>
                                    </div>
                                    <div class="w-50 text-md-right">
                                        <a class=" sign-up" href="#">Forgot Password</a>
                                    </div>
                                </div>
                            </form>
                            <p class="text-center mt-4">Don’t have an account?
                                <a class="sign-up" data-toggle="tab" href="#signup">Sign Up</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import AuthService from "@/services/auth";
import Alert from "@/utilities/alert"
export default {
    name: 'WelcomeBack',
    components: {

    },
    data() {
        return {
            email: "",
            password: ""
        };
    },
    methods: {
        loginAccount() {
            let vm = this;
            AuthService.loginUser({
                email: vm.email,
                password: vm.password
            }, (response) => {
                if (!response.error) {
                    this.$store.dispatch('setAuth', {
                        token: response.token,
                        key: response.user.user_id,
                    })
                    this.$store.dispatch('setUser',response.user)

                    window.localStorage.setItem('authToken', response.token);
                    vm.$router.push('/dashboard');
                }else{
                    console.log(response.message);
                    Alert.error({
                        message : response.message
                    })
                }
            })
        }
    },
    created() {
        if (this.$store.state.authData) {
            this.$router.replace('/dashboard');
        }
    }
}
</script>

<style lang="scss"  scoped>
.ftco-section {
    padding: 7em 0;
}

.wrap {
    width: 100%;
    overflow: hidden;
    background: #fff;
    border-radius: 5px;
    -webkit-box-shadow: 0px 10px 34px -15px rgba(0, 0, 0, 0.24);
    -moz-box-shadow: 0px 10px 34px -15px rgba(0, 0, 0, 0.24);
    box-shadow: 0px 10px 34px -15px rgba(0, 0, 0, 0.24);
}

.login-wrap {
    position: relative;
    width: 100%;


}
    input[type="text"],
    input[type="password"] {

        &:hover,
        &:active,
        &:focus,
        &:focus-visible {
            border-color: #05b050 !important;
            box-shadow: 0 0 !important;
        }
    }

    a:hover {
        text-decoration-line: underline;
        text-decoration-color: #05b050;
    }

    input[type="checkbox"] {
        visibility: hidden;
    }

    /* Creating a custom checkbox
        based on demand */
    .checkmark {
        position: absolute;
        bottom: 3.5px;
        left: 105px;
        height: 15px;
        width: 15px;
        background-color: #05b050;
    }

    /* Specify the background color to be
        shown when hovering over checkbox */
    #main:hover input~.checkmark {
        background-color: green;
    }

    /* Specify the background color to be
        shown when checkbox is active */
    #main input:active~.checkmark {
        background-color: green;
    }

    /* Specify the background color to be
        shown when checkbox is checked */
    #main input:checked~.checkmark {
        background-color: #05b050;
    }

    /* Checkmark to be shown in checkbox */
    /* It is not be shown when not checked */
    .checkmark:after {
        content: "";
        position: absolute;
        display: none;
    }

    /* Display checkmark when checked */
    #main input:checked~.checkmark:after {
        display: block;
    }

    /* Styling the checkmark using webkit */
    /* Rotated the rectangle by 45 degree and 
        showing only two border to make it look
        like a tickmark */
    #main .checkmark:after {
        left: 5px;
        bottom: 2px;
        width: 7px;
        height: 12px;
        border: solid white;
        border-width: 0 4px 4px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
    }

    .forget-remember {
        align-items: baseline !important;
    }

    a {
        text-decoration: none;
    }

    .btn.btn-primary-green {
        background: #008D40 !important;
        border: 1px solid #008D40 !important;
        color: #fff !important;
    }

    .sign-up {
        color: #008D40 !important;
    }

    @media (min-width: 768px) {
        .d-md-flex {
            display: -webkit-box !important;
            display: -ms-flexbox !important;
            display: flex !important;
        }

        .p-md-5 {
            padding: 3rem !important;
        }
    }

    @media (max-width: 991.98px) {

        .img,
        .login-wrap {
            width: 100%;
        }
    }


    .img {
        width: 100%;
        background-image: url("@/assets/images/backgrounds/partner-background.png");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
    }

</style>