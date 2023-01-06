import { createApp } from 'vue';
import App from './App.vue';
import router from "@/router";
import store from "@/store";
import mitt from 'mitt';
import GlobalMixin from "@/mixins/global";

// Initialize Global Event Bus
window.appBus = mitt();
// --------------------------

const app = createApp(App);

app.config.devtools = true;

app.mixin(GlobalMixin).use(router).use(store).mount('#app');




