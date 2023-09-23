import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import menu from "./views/menu.vue";
import todo from "./views/todo.vue";
import form from "./components/Form.vue";

createApp(form).use(router).mount("#app");
