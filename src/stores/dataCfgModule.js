const dataCfgModules = {
  state: {
    isShow: false,
    dataCfgs: {
      RecordIntervalTime: 10, //数据记间隔时间：s
      FastRecord: true, //时间，SOC，总电压，电流。输出能量，输入能量，修正偏执
      FastRecordExt: "Status",
    },
  },
  mutations: {
    changeIsShow(state, n) {
      state.isShow = n;
    },
    systemsData(state, n) {
      state.systems = n;
    },
  },
};
export default dataCfgModules;
