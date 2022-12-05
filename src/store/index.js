import VuexPersist from 'vuex-persist';
import { createStore } from 'vuex'

const vuexLocal = new VuexPersist({
    key: "Zowasel",
    storage: window.localStorage,
});
  

const store = createStore({
    namespaced:true,
    state () {
      return {
        user : null
      }
    },
    mutations: {
        setUser(state, value){
            state.user = value;
        }
    },
    actions : {
        setUser({commit}, payload){
            commit("setUser", payload);
        }
    },
    plugins : [vuexLocal.plugin]
})

export default store;