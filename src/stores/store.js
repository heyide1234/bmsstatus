import Vue from "vue";
import Vuex from "vuex";
import dataCfgModules from "./dataCfgModule";
import controlModules from "./controlModule";

Vue.use(Vuex);
const store = new Vuex.Store({
  state: { ifs: "123" },
  modules: {
    dataCfgModule: dataCfgModules,
    controlModule: controlModules,
  },
});
////this.$store.state.dataCfgModules.isShow
// this.$store.commit({
//   type:'dataCfgModules/changeIsShow',
//   params:true
// })
export default store;
