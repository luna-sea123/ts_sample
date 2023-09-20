import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./App.vue";
// import menu from "./views/menu.vue";

createApp(App).use(router).mount("#app");
