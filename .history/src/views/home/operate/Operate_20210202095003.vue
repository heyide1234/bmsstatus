<template>
  <div>
    <div class="cards">
      <el-card class="card" @click.native="loadMenu('Common')">
        <div class="top">
          <span class="lfont">menu</span>
          <h1 class="tfont">Common</h1>
        </div>
      </el-card>
      <el-card class="card" @click.native="loadMenu('User')">
        <div class="top">
          <span class="lfont">menu</span>
          <h1 class="tfont">User</h1>
        </div>
      </el-card>
      <el-card class="card" @click.native="loadMenu('Simulator')">
        <div class="top">
          <span class="lfont">menu</span>
          <h1 class="tfont">Simulator</h1>
        </div>
      </el-card>
      <el-card class="card" @click.native="loadMenu1('Tool')">
        <div class="top">
          <span class="lfont">menu</span>
          <h1 class="tfont">Tool</h1>
        </div>
      </el-card>
      <el-card class="card" @click.native="loadMenu('Other')">
        <div class="top">
          <span class="lfont">menu</span>
          <h1 class="tfont">Other</h1>
        </div>
      </el-card>
    </div>
    <el-card
      class="cardMain"
      :style="{ height: clientHeight + 'px' }"
      v-show="currentmenu != 'Tool'"
    >
      <listForm-my
        :datas="dt"
        @parentmt="cmdsend"
        :widthLengthD="lenw"
      ></listForm-my>
    </el-card>
    <el-card
      class="cardMain ps"
      :style="{ height: clientHeight + 'px', color: dts.color }"
      v-show="currentmenu == 'Tool'"
    >
      <el-button @click="starorendHandle">{{ starorend }}</el-button>
      <p v-for="(item, index) in dts.value" :key="index">{{ item }}</p>
    </el-card>

    <div class="center" :class="{ bg: flag }">
      <div class="lodding">
        <div class="el-icon-loading ld"></div>
        <div>{{ Loadingtxt }}</div>
      </div>
    </div>
  </div>
</template>
<script>
import { get, post } from "network/configRequest";
import { getTime } from "common/time/getTime";

export default {
  data() {
    return {
      starorend: "start",
      currentmenu: "System info",
      Loadingtxt: "",
      // value: "",
      //currentdt
      currentdt: {},
      lenh: 25,
      flag: false,

      //模拟后台数据
      dtseq: {
        // len: 25,
        data: [
          {
            Value: "buttton1",
            ViewType: "Button",
          },
        ],
      },
      dts: {
        value: ["..."], //发送的数据内容（必须）
        color: "#666", //字体颜色
        await: "1000", //请求间隔时间，毫秒数
        number: "15", //界面显示的行数
      },
      timer: 0,
    };
  },

  created() {
    this.getNetwork();
  },
  mounted() {
    // this.$EventBus.$on("getNetwork", (v) => {
    //   this.dts = v;
    // });
  },
  methods: {
    starorendHandle() {
      if (this.starorend === "start") {
        this.starorend = "end";
        clearInterval(this.timer);
        this.timer = setInterval(() => {
          this.getNetwork();
        }, parseInt(this.dts.await));
      } else {
        this.starorend = "start";
        clearInterval(this.timer);
      }
    },
    getNetwork() {
      get("t/Tool")
        .then((res) => {
          console.log(res.data);
          //后台请求数据
          this.dts.unshift(res.data.data.value);
          this.dts =
            res.data.data.number &&
            this.dts.slice(0, parseInt(res.data.data.number));
          this.dts.color = res.data.data.color && res.data.data.color;
          this.dts.await = res.data.data.await && res.data.data.await; //需要开始定义
        })
        .catch((error) => {
          console.log(error);
        });

      // setTimeout(() => {
      //   this.dts.value.unshift("666");
      //   this.dts.value = this.dts.value.slice(0, parseInt("10"));
      //   this.dts.color = "red";
      //   this.dts.await = "5000"; //需要开始定义
      // }, 0);
    },
    //按钮命令
    cmdsend(opName) {
      let param1 = this.currentdt;
      if (opName === "setTime") {
        param1 = getTime();
      }
      // this.loadingco();
      // setTimeout(() => loading.close(), 10000);

      post("o/" + opName.replace(/\s*/g, ""), param1)
        .then((res) => {
          console.log(res.data);
          if (res.data === "readstatus") {
            // this.loadingco(this);
            this.flag = true;
            let interval = setInterval(() => {
              post("readstatus")
                .then((res) => {
                  console.log(res.data);
                  if (res.data === "ok" || res.data === null) {
                    clearInterval(interval);
                    setTimeout(() => (this.flag = false), 1000);
                  }

                  this.Loadingtxt = res.data;

                  ///////
                })
                .catch((err) => {
                  this.$message.error("服务器出错");

                  clearInterval(interval);
                  this.flag = false;
                  console.log(err);
                });
            }, 1000);
          }
          if (res.data === "boot") {
            this.$message.warning("Switch boot loader in 10 seconds");
            setTimeout(() => {
              window.location.href =
                "http://192.168.0.1/login?username=Camy0000&password=1qaz2wsx";
            }, 10000);
          }
          if (res.data === "ok" || res.data === "fail") {
            this.$message(res.data);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    // loadingco(t) {
    //   let ths = t;
    //   console.log("状态this:", ths);
    //   loading = this.$loading({
    //     lock: true,
    //     text: ths.Loadingtxt,
    //     spinner: "el-icon-loading",
    //     background: "rgba(0, 0, 0, 0.7)"
    //   });
    // },
    loadMenu(currentmenuName) {
      clearInterval(this.timer);
      this.starorend = "start";
      this.currentmenu = currentmenuName.replace(/\s*/g, "");

      this.currentdt = this.dtseq.data;
      this.lenh = this.dtseq.len;
      get("t/" + this.currentmenu)
        .then((res) => {
          console.log(res.data);
          //后台请求数据
          this.currentdt = res.data.data;
          this.lenh = res.data.len;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    loadMenu1(currentmenuName) {
      this.currentmenu = currentmenuName.replace(/\s*/g, "");
    },
  },
  computed: {
    dt() {
      return this.currentdt;
    },
    lenw() {
      return this.lenh;
    },
    clientHeight() {
      // return document.body.clientHeight / 10;
      return window.screen.availHeight - 260;
    },
  },
  components: {
    "listForm-my": () =>
      import(
        // webpackChunkName:"myComp",
        "components/content/ListForm"
      ),
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
};
</script>
<style scoped>
.ld {
  font-size: 30px;
}
.lodding {
  color: #fff;
  text-align: center;
  line-height: 30px;
  font-size: 15px;
}
.bg {
  height: 100%;
  width: 100%;
  background-color: black;
  opacity: 0.7;
  position: absolute;
  z-index: 100;
  top: 0;
  left: 0;
}
.card {
  width: 19%;
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

.center {
  display: -webkit-box;
  -webkit-box-orient: horizontal;
  -webkit-box-pack: center;
  -webkit-box-align: center;

  display: -moz-box;
  -moz-box-orient: horizontal;
  -moz-box-pack: center;
  -moz-box-align: center;

  display: -o-box;
  -o-box-orient: horizontal;
  -o-box-pack: center;
  -o-box-align: center;

  display: -ms-box;
  -ms-box-orient: horizontal;
  -ms-box-pack: center;
  -ms-box-align: center;

  display: box;
  box-orient: horizontal;
  box-pack: center;
  box-align: center;
}
.ps {
  color: #666;
  overflow: auto;
}
</style>
