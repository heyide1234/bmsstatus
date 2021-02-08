import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "element-ui/lib/theme-chalk/index.css";
import VueI18n from "vue-i18n";
//import getCookie from "common/cookie/cookie";
import myalert from "components/common/alert/index.js";
Vue.prototype.$myalert = myalert.install;
Vue.prototype.$EventBus = new Vue();

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: "en", // 语言标识
  //locale: getCookie("PLAY_LANG", "zh"), // 语言标识
  messages: {
    zh: require("common/lang/zh"),
    en: require("common/lang/en"),
  },
});

new Vue({
  router,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
