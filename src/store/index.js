import VuexPersist from 'vuex-persist';
import {
    createStore
} from 'vuex'

const vuexLocal = new VuexPersist({
    key: "Zowasel",
    storage: window.localStorage,
});


const store = createStore({
    namespaced: true,
    state() {
        return {
            user: null,
            authData: null
        }
    },
    mutations: {
        setUser(state, value) {
            state.user = value;
        },
        setAuth(state, value) {
            state.authData = value;
        }
    },
    actions: {
        setUser({
            commit
        }, payload) {
            commit("setUser", payload);
        },
        setAuth({
            commit
        }, payload) {
            commit("setAuth", payload);
        }
    },
    plugins: [vuexLocal.plugin]
})

export default store;