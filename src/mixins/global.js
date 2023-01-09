
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
        },
        isSeller(){
            // Assuming that order data is available
            return this.order.products[0].user_id == this.userData.user_id;
        },
        isBuyer(){
            return this.order.buyer_id == this.userData.user_id;
        }
    },
    methods:{
        // goTo(path){
        //     this.$router.push(path);
        // },
        generateRandom(length) {
            var result           = '';
            var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for ( var i = 0; i < length; i++ ) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            return result;
        },
        placeString(string, defaultValue, data={}){
            let extra = {
                prefix : "",
                suffix : "",
                ...data
            };
            return (string && string != "") ? `${extra.prefix}${string}${extra.suffix}` : defaultValue;
        },
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