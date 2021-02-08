<template>
  <div>
    <div class="cards">
      <el-card class="card" @click.native="loadMenu('Time')">
        <div class="top">
          <span class="lfont">menu</span>
          <h1 class="tfont">Time</h1>
        </div>
      </el-card>
      <el-card class="card" @click.native="loadMenu('IO Test cmd')">
        <div class="top">
          <span class="lfont">menu</span>
          <h1 class="tfont">IO Test cmd</h1>
        </div>
      </el-card>
      <el-card class="card" @click.native="loadMenu('System cmd')">
        <div class="top">
          <span class="lfont">menu</span>
          <h1 class="tfont">System cmd</h1>
        </div>
      </el-card>
      <el-card class="card" @click.native="loadMenu('Calibration')">
        <div class="top">
          <span class="lfont">menu</span>
          <h1 class="tfont">Calibration</h1>
        </div>
      </el-card>
      <el-card class="card" @click.native="loadMenu('Factory cmd')">
        <div class="top">
          <span class="lfont">menu</span>
          <h1 class="tfont">Factory cmd</h1>
        </div>
      </el-card>
      <el-card class="card" @click.native="loadMenu('System info')">
        <div class="top">
          <span class="lfont">menu</span>
          <h1 class="tfont">System info</h1>
        </div>
      </el-card>
      <el-card class="card" @click.native="loadMenu('Firmeware Release')">
        <div class="top">
          <span class="lfont">menu</span>
          <h1 class="tfont">Firmeware Release</h1>
        </div>
      </el-card>
    </div>
    <el-card class="cardMain">
      <div v-show="currentmenu == 'Time'">
        <button @click="cmds('corrective')">Corrective</button>
        <button @click="cmds('gettime')">Get Time</button>
        <el-button type="primary" @click="openFullScreen2">
          服务方式
        </el-button>
      </div>
      <div v-show="currentmenu == 'IO Test cmd'">
        <button @click="cmds('onboardio')">On Board IO</button>
        <button @click="cmds('extboardio')">Ext Board IO</button>
      </div>
      <div v-show="currentmenu == 'System cmd'">
        <button @click="cmds('sysupdate')">SYS-UPDATE</button>
        <button @click="cmds('bootupdate')">Boot-UPDATE</button>
        <button @click="cmds('scuupdate')">SCU-UPDATE</button>
        <br />
        <br />
        <button @click="cmds('bmidinit')">BMID-INIT</button>
        <br />
        <br />
        <button @click="cmds('getversion')">Get Version</button>
      </div>
      <div v-show="currentmenu == 'Calibration'">
        Shunt in PDU
        <select v-model="value" class="calibration">
          <option value>请选择</option>
          <option
            v-for="item in options"
            :key="item.value"
            :value="item.value"
            >{{ item.value }}</option
          > </select
        >&nbsp;
        <button @click="cmdselect('loadvalue')">Load Value</button>
        <button @click="cmdselect('savevalue')">Save Value</button>
      </div>
      <div v-show="currentmenu == 'Factory cmd'">
        <button @click="cmds('formatstorage')">Format Storage</button>
        <button @click="cmds('resetstatistic')">Reset Statistic</button>
        <br />
        <br />SCU Voltage 0.1V <input class="SCUVoltage" />SCU Current 0.1A
        <input class="SCUCurrent" />MSU mum in SCU <input class="MSUmum" />Load
        Value
        <button @click="scucalibrate">SCU Calibrate</button>
        <br />
        <br />SCU Addr <input class="SCUAddr" />SCU Voltage 0.1V
        <input class="SCUVoltages" />
        <button @click="scumodify">SCU Modify</button>
        <br />
        <br />
        <button @click="cmds('scusnstore')">SCU S/N Store</button>
      </div>
      <div v-show="currentmenu == 'System info'">
        GSE VIN
        <input class="systeminfo" />
        <button @click="cmdsysteminfo">Upload IDs</button>
        <br />
        <br />
      </div>
      <div v-show="currentmenu == 'Firmeware Release'">
        <button @click="cmds('bcufirmwarerelease')">
          BCU Firmware Release
        </button>
        <button @click="cmds('scufirmwarerelease')">
          SCU Firmware Release
        </button>
        <br />
        <br />
        <input class="firmewarerelease" />
        <button @click="cmdfirmewarerelease">Certificate</button>
      </div>
    </el-card>
  </div>
</template>
<script>
import { get, post } from "network/configRequest";
export default {
  data() {
    return {
      currentmenu: "System info",
      options: [
        {
          value: "400A75mV",
          label: "400A75mV",
        },
        {
          value: "600A75mV",
          label: "600A75mV",
        },
        {
          value: "800A75mV",
          label: "800A75mV",
        },
        {
          value: "1200A75mV",
          label: "1200A75mV",
        },
      ],
      value: "",
    };
  },

  created() {},

  methods: {
    loadMenu(currentmenuName) {
      this.currentmenu = currentmenuName;
    },
    cmds(cmdName) {
      get("o/" + cmdName)
        .then((res) => console.log(res))
        .catch((error) => {
          console.log(error);
        });
    },
    cmdselect(cmdName) {
      get("o/" + cmdName, document.querySelector(".calibration").value)
        .then((res) => console.log(res))
        .catch((error) => {
          console.log(error);
        });
    },
    cmdsysteminfo() {
      get("o/systeminfo", document.querySelector(".systeminfo").value)
        .then((res) => console.log(res))
        .catch((error) => {
          console.log(error);
        });
    },
    cmdfirmewarerelease() {
      get(
        "o/firmewarerelease",
        document.querySelector(".firmewarerelease").value
      )
        .then((res) => console.log(res))
        .catch((error) => {
          console.log(error);
        });
    },
    scucalibrate() {
      let SCUVoltage = document.querySelector(".SCUVoltage").value;
      let SCUCurrent = document.querySelector(".SCUCurrent").value;
      let MSUmum = document.querySelector(".MSUmum").value;
      post("o/scucalibrate", { SCUVoltage, SCUCurrent, MSUmum })
        .then((res) => {
          console.log(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    scumodify() {
      let SCUAddr = document.querySelector(".SCUAddr").value;
      let SCUVoltages = document.querySelector(".SCUVoltages").value;
      post("o/scumodify", { SCUAddr, SCUVoltages })
        .then((res) => {
          console.log(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
<style scoped>
.card {
  width: 13%;
  height: 100px;
  margin: 10px 0px;
}
.cards {
  display: flex;
  flex: 1;
  justify-content: space-between;
}
.lfont {
  font-weight: bold;
  font-size: 10px;
  color: #95aac9;
  font-family: "Cerebri Sans", sans-serif;
}
.tfont {
  font-weight: bold;
  font-size: 18px;
  font-family: "Cerebri Sans", sans-serif;
  margin: 0px;
  padding: 0px;
}
.top {
  height: 100px;
  width: 100%;
  line-height: 20px;
  padding: 0px;
}
.top:hover {
  cursor: pointer;
}
.cardMain {
  width: 100%;
  height: 450px;
  padding: 0px;
}

button {
  background-color: #007bff;
  border: none;
  width: 150px;
  height: 50px;
  margin: 10px 10px 10px 15px;
  color: #edf2f9;
  border-radius: 3px;
}
input:focus {
  border-color: #66afe9;
  outline: 0;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(102, 175, 233, 0.6);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(102, 175, 233, 0.6);
}
input {
  outline-style: none;
  border: 1px solid #ccc;
  border-radius: 3px;
  padding: 8px 10px;

  font-family: "Microsoft soft";
  width: 180px;
}

select {
  height: 34px;
  border-radius: 3px;
  border: 1px solid #ccc;

  width: 180px;
}
</style>
