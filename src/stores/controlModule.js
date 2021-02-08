const controlModules = {
  state: {
    isShow: false,
    controls: {
      OverVoltage: {
        TotalError: "1",
        TotalErrorDelay: "",
        CellError: [3650, 120],
        CellAlarm: [3550, 120],
      },
      UnerdVolatge: {
        TotalError: "",
        TotalErrorDelay: "",
        TotalAlarm: "",
        TotalAlarmDelay: "",
        TotalWarning: "",
        TotalWarningDelay: "",
        CellError: [1, 120], //SOC 1%, 延时 s
        CelllAlarm: [5, 120], //SOC 5%, 延时 s
        CellWarning: [10, 120], //SOC 10%, 延时 s
      },
      OverTemperature: {
        //过温门限
        Alarm: [], //[报警门限值,报警滤波延时 单位s]
        Error: [], //[错误门限值,错误滤波延时 单位s]
      },
      UnderTemperature: {
        //低温门限
        Alarm: [], //[报警门限值,报警滤波延时 单位s]
        Error: [], //[错误门限值,错误滤波延时 单位s]
      },
      CellVoltageDifference: {
        //单体压差门限
        Alarm: [], //[报警门限值,报警滤波延时 单位s]
        Error: [], //[错误门限值,错误滤波延时 单位s]
      },
      SubpackVoltageDifference: {
        //模块压差门限
        Alarm: [], //[报警门限值,报警滤波延时 单位s]
        Error: [], //[错误门限值,错误滤波延时 单位s]
      },
      TemperatureDifference: {
        //温度差门限;
        ModuleAlarm: [], //模组温差报警
        PackAlarm: [], //电池包温差报警
      },
      DischargeCurrentT: {
        //放电电流门限，等值定时
        Alarm: [], //[报警门限值,报警滤波延时 单位s]
        Error: [], //[错误门限值,错误滤波延时 单位s]
      },
      DischargeCurrentV: {
        //放电电流门限，等时定值
        Alarm: [], //[报警门限值,报警滤波延时 单位s]
        Error: [], //[错误门限值,错误滤波延时 单位s]
      },
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
export default controlModules;
