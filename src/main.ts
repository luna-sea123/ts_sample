import { createApp } from "vue";
import "./style.css";
//import App from "./App.vue";
import router from "./router";
import menu from "./views/menu.vue";

createApp(menu).use(router).mount("#app");
