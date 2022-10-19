import { createApp } from "vue";
import App from "./App.vue";
import MS from "./components/ms.vue";

createApp(App).mount("#app");
createApp(MS).mount("#ms");
createApp(MS).mount(".ms2");
