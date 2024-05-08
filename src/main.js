import { createApp } from "vue";
import App from "./App.vue";
import router from "@/router";
import Popup from "@/components/Popup.vue";

const app = createApp(App);

app.component("Popup", Popup);

app.use(router).provide("showPopup", Popup.setup().showPopup).mount("#app");
