import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import AOS from "aos";
import "./index.css";
import "aos/dist/aos.css";

const myV3App = createApp(App);
myV3App.use(router);
myV3App.use(AOS.init());
myV3App.mount("#app");
