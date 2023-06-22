import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

import ElementPlus from "el-plus-sp";
import "el-plus-sp/dist/index.css";

const app = createApp(App);
app.use(ElementPlus);
app.mount("#app");
