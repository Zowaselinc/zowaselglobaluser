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
                                    <input type="text" v-model="email" class="form-control" placeholder="Email" required>
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
                                    <div class="w-50 text-left">
                                        <label class="checkbox-wrap checkbox-primary mb-0">Remember Me
                                            <input type="checkbox" checked>
                                            <span class="checkmark"></span>
                                        </label>
                                    </div>
                                    <div class="w-50 text-md-right">
                                        <a class=" sign-up" href="#">Forgot Password</a>
                                    </div>
                                </div>
                            </form>
                            <p class="text-center mt-4">Don’t have an account? <a class="sign-up" data-toggle="tab"
                                    href="#signup">Sign Up</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import AuthService from "@/services/auth";
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
                        key: response.user.id,
                    })
                    this.$store.dispatch('setUser',{
                        user : response.user
                    })

                    window.localStorage.setItem('authToken', response.token);
                    vm.$router.push('/dashboard');
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