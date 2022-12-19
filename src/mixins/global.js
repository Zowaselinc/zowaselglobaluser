
export default {
    data(){
        return {
            userData: this.$store.state.user
        };
    },
    computed:{
        isMerchant(){
            return this.userData.user.type == "merchant";
        },
        isCorporate(){
            return this.userData.user.type == "corporate";
        }
    },
    methods:{
        // goTo(path){
        //     this.$router.push(path);
        // },
        logOut() {
            if (this.$store.state.authData.token) {
                this.$store.dispatch('setAuth', null);
                this.$store.dispatch('setUser', null);
                this.$router.push('/login');
            }
        }
    },
    mounted(){
    }
}