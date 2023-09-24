import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import menu from "./views/menu.vue";
import todo from "./views/todo.vue";
import form from "./components/Form.vue";
import form1 from "./components/Form1.vue";

createApp(form1).use(router).mount("#app");
