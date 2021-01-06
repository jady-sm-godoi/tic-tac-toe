import { createApp } from "vue";
import App from "./App.vue";

import GridLine from "./components/GridLine.vue";

const app = createApp(App);

app.component("grid-line", GridLine);

app.mount("#app");
