<template>
  <div class="cont" :style="{ height: clientHeight * 10 - 60 + 'px' }">
    <div class="carda">
      <div class="ct">
        <el-card class="card1">
          <EchartsBattery
            :ElectricityQuantity="Monitor.soc"
            class="echar"
          ></EchartsBattery>
        </el-card>

        <CardTitle :titleheight="40" class="vards cardTitle">
          <template slot="top">
            <div class="cardsd">SoH</div>
          </template>
          <template slot="content">
            <div class="cardst">{{ Monitor.soh }}</div>
          </template>
        </CardTitle>
      </div>
      <div class="card2">
        <div class="card21">
          <CardTitle :titleheight="42" class="cadest">
            <template slot="top">
              <div class="cardsd">Total_V</div>
            </template>
            <template slot="content">
              <div>{{ Monitor.TotalV }}</div>
            </template>
          </CardTitle>
          <CardTitle :titleheight="40" class="cadest">
            <template slot="top">
              <div class="cardsd">Total_I</div>
            </template>
            <template slot="content">
              <div>{{ Monitor.TotalI }}</div>
            </template>
          </CardTitle>
        </div>
        <div class="card22 card22-101">
          <div class="ds">
            <div class="dsc">name</div>
            <div class="dsc">value</div>
            <div class="dsc">s</div>
            <div class="dsc">m</div>
            <div class="dsc">c</div>
          </div>
          <div class="ds" v-for="(item, key) of Monitor.ind" :key="key">
            <div class="dsc">{{ item.n }}</div>
            <el-tag class="dsc">{{ item.d }}</el-tag>
            <el-tag class="dsc">{{ item.s }}</el-tag>
            <el-tag class="dsc">{{ item.m }}</el-tag>
            <el-tag class="dsc">{{ item.c }}</el-tag>
          </div>
        </div>
        <div class="card23">
          <CardTitle :titleheight="1" class="cadest">
            <template slot="content">
              <div class="card231">
                <div class="card231-1 a">
                  <img
                    src="~assets/tz.png"
                    alt
                    :class="{ opacitysq: !Monitor.sleep }"
                  />
                </div>

                <div class="card231-1 b">
                  <img
                    src="~assets/yx.png"
                    alt
                    :class="{ opacitysq: !Monitor.kop }"
                  />
                </div>
                <div class="card231-1 c">
                  <img
                    src="~assets/bl.png"
                    alt
                    :class="{ opacitysq: !Monitor.parallel }"
                  />
                </div>
                <div class="card231-1 d">
                  <img
                    src="~assets/cl.png"
                    alt
                    :class="{ opacitysq: !Monitor.series }"
                  />
                </div>
                <div class="card231-1 e">
                  <img
                    src="~assets/cd.png"
                    alt
                    :class="{ opacitysq: !Monitor.cc2 }"
                  />
                </div>
              </div>
            </template>
          </CardTitle>
          <CardTitle :titleheight="40" class="cadest">
            <template slot="top">
              <div class="cardsd">WorkHour</div>
            </template>
            <template slot="content">
              <div>{{ Monitor.workHour }}</div>
            </template>
          </CardTitle>
        </div>
      </div>
      <div class="ct">
        <el-card class="card00">
          <!-- {{ Monitor.fc }} -->
          <div class="ti">{{ Monitor.time }}</div>
          <div class="mesdiv">
            <div
              class="mesdivItem"
              v-for="(item, key) of Monitor.fc"
              :key="key"
            >
              {{ item }}
            </div>
          </div>
        </el-card>
        <CardTitle :titleheight="50" class="vards vsq">
          <template slot="top">
            <div class="t">
              <div class="t1">
                <div class="t2">OUT</div>
              </div>

              <el-tag class="t11" type="danger" v-show="Monitor.out === 'open'"
                >open</el-tag
              >
              <el-tag
                class="t11"
                type="success"
                v-show="Monitor.out === 'close'"
                >close</el-tag
              >
            </div>
          </template>
          <template slot="content">
            <div class="t">
              <div class="t1">
                <div class="t2">IN</div>
              </div>

              <el-tag class="t11" type="danger" v-show="Monitor.in === 'open'"
                >open</el-tag
              >
              <el-tag class="t11" type="success" v-show="Monitor.in === 'close'"
                >close</el-tag
              >
            </div>
          </template>
        </CardTitle>
      </div>
    </div>

    <div class="card22 fd">
      <div class="ds">
        <div class="dsc">
          <el-tag class="t11" type="info" size="mini">name</el-tag>
        </div>
        <div class="dsc">
          <el-tag class="t11" type="info" size="mini">status</el-tag>
        </div>

        <div class="dsc">
          <el-tag class="t11" type="info" size="mini">relay</el-tag>
        </div>
        <div class="dsc">
          <el-tag class="t11" type="info" size="mini">UV</el-tag>
        </div>
        <div class="dsc">
          <el-tag class="t11" type="info" size="mini">smoke</el-tag>
        </div>
        <div class="dsc">
          <el-tag class="t11" type="info" size="mini">Voltage</el-tag>
        </div>
      </div>
      <div class="ds" v-for="(item, key) in Monitor.sub" :key="key">
        <div class="dsc">{{ item.name }}</div>
        <div class="dsc">{{ item.status }}</div>

        <div class="dsc">{{ item.relay }}</div>
        <div class="dsc">{{ item.UV }}</div>
        <div class="dsc">{{ item.smoke }}</div>

        <div class="dsc">{{ item.voltage }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { monitor } from "network/configRequest";
var interval;
export default {
  data() {
    return {
      Monitorq: {
        // soc: 60,
        // soh: 20,
        // TotalV: 0,
        // TotalI: 0,
        // ind: [
        //   { n: "CV_max", d: 10, s: 30, m: 80, c: 70 },
        //   { n: "CV_min", d: 20, s: 20, m: 0, c: 0 },
        //   { n: "CT_max", d: 30, s: 10, m: 40, c: 70 },
        //   { n: "CT_min", d: 40, s: 0, m: 0, c: 0 },
        // ],
        // sleep: true,
        // kop: true,
        // parallel: false,
        // series: true,
        // cc2: false,
        // out: "open",
        // in: "close",
        // workHour: 0,
        // time: "2020/01/01 00:00:00",
        // fc: ["11234123", "dfdgaf", "messafda"],
        // sub: [
        //   {
        //     name: "1",
        //     status: "2",
        //     relay: "3",
        //     UV: "4",
        //     smoke: "5",
        //     voltage: 0,
        //   },
        //   {
        //     name: "2",
        //     status: "2",
        //     relay: "2",
        //     UV: "2",
        //     smoke: "2",
        //     voltage: 0,
        //   },
        //   {
        //     name: "3",
        //     status: "3",
        //     relay: "2",
        //     UV: "1",
        //     smoke: "1",
        //     voltage: 0,
        //   },
        //   {
        //     name: "3",
        //     status: "3",
        //     relay: "2",
        //     UV: "1",
        //     smoke: "1",
        //     voltage: 0,
        //   },
        // ],
      },
    };
  },
  methods: {
    requestMonitor() {
      interval = setInterval(this.getmonitor, 1000);
    },
    getmonitor() {
      monitor()
        .then((res) => {
          console.log("获取到的正确数据:", res.data);
          this.Monitorq = res.data;
        })
        .catch((error) => {
          console.log("获取出错:", error);
        });
    },
  },
  created() {
    this.getmonitor();
  },
  mounted() {
    this.requestMonitor();
  },
  computed: {
    Monitor: function () {
      return this.Monitorq;
    },
    clientHeight() {
      // return document.body.clientHeight / 10;
      return (window.screen.availHeight - 70) / 10;
    },
  },
  components: {
    EchartsBattery: () =>
      import(
        // webpackChunkName:"myComp",
        "components/content/EchartsBattery"
      ),
    CardTitle: () =>
      import(
        // webpackChunkName:"myComp",
        "components/common/TitleCard"
      ),
  },
  destroyed() {
    clearInterval(interval);
  },
};
</script>
<style scoped>
.ti {
  height: 22px;
  width: 100%;
  border-bottom: rgb(191, 207, 236) 1px solid;
  margin-bottom: 20px;
  font-size: 15px;
}
.mesdiv {
  width: 100%;
  margin: 0 auto;
}
.mesdivItem {
  height: 20px;
  line-height: 20px;
  font-size: 13px;
}
.fd {
  margin: 0 5px !important;
  width: 98.8% !important;
}
.t11 {
  height: 25px;
  line-height: 25px;
}
.cardTitle {
  height: 70px;
}

.cadest {
  width: 49%;
  height: 70px;
}
.vards {
  margin-top: 5px;
}
.vsq {
  height: 70px;
}
.cardsd {
  line-height: 40px;
}
.t {
  line-height: 35px;
  font-size: 14px;

  color: #fff;

  position: relative;
}
.t1 {
  position: absolute;
  left: 10px;
  font-weight: bold;
  font-size: 12px;
  color: #95aac9;
  font-family: "Cerebri Sans", sans-serif;
}
.t2 {
  text-align: center;
}
.c {
  line-height: 35px;
  font-size: 14px;
  color: #fff;
}
.c21 {
  line-height: 35px;
  font-size: 14px;
  height: 100%;
  background-color: #f56c6c;
  color: #fff;
}

.c1 {
  background-color: rgb(17, 202, 125);
  line-height: 25px;
  height: 25px;
}
.c2 {
  background-color: rgb(207, 40, 40);
  line-height: 25px;
  height: 25px;
}

.card23 {
  display: flex;
  flex: 1;
  justify-content: space-between;
  height: 70px;
}
.card231 {
  width: 100%;
  height: 40px;
  margin-top: 13px;
  display: flex;
  flex: 1;
  justify-content: space-between;
}

.card231-1 {
  float: left;
  width: 38px;
  height: 35px;
  margin: 5px;
}
.card231-1 img {
  height: 100%;
  width: 100%;
}
.opacitysq {
  opacity: 0.1;
}
.ds {
  width: 100%;
  height: 45px;
  border-bottom: #e7ecf2 solid 1px;
  line-height: 45px;
  text-align: left;
  left: 5px;
  display: flex;
  flex: 1;
  justify-content: space-between;

  font-weight: bold;
  font-size: 10px;
  color: #95aac9;
  font-family: "Cerebri Sans", sans-serif;
}
.dsc {
  margin: auto 10px;
  min-width: 80px;
  text-align: center;
}
.card21 {
  width: 100%;
  height: 70px;
  display: flex;
  flex: 1;
  justify-content: space-between;
}
.card211 {
  width: 49.5%;
  height: 100%;
}
.card22-101 {
  height: 235px;
}
.card22 {
  width: 99.6%;

  margin: 5px 0px;
  padding: 0px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  border: 1px solid #ebeef5;
  background-color: #fff;
  color: #303133;
  transition: 0.3s;
  border-radius: 4px;
  overflow: hidden;
}

.cont {
  overflow: auto;
  height: 800px;
  width: 957px;
  margin: 0 auto;
}
.echar {
  margin: 20px -10px;
}
.soh {
  height: 50px;
  width: 200px;

  margin: 10px auto;
}
.carda {
  display: flex;
  flex: 1;
  justify-content: space-between;
}
.ct {
  width: 20%;
  height: 390px;
  text-align: center;
  margin: 5px;
}
.card1 {
  width: 100%;
  height: 310px;
  text-align: center;
  background: rgb(226, 229, 231);
  position: relative;
}
.card00 {
  width: 100%;
  height: 310px;
  text-align: left;
  background: rgb(250, 251, 252);
  font-size: 12px;
  color: #7392c2;
  font-family: "Cerebri Sans", sans-serif;
  overflow: auto;
}

.card11 {
  width: 100%;
  height: 70px;
  text-align: center;
  margin-top: 5px;
}
.card2 {
  width: 60%;
  height: 390px;
  text-align: center;
  margin: 5px;
}
.card3 {
  width: 20%;
  height: 390px;
  text-align: left;
  margin: 5px;
}

.top {
  height: 100px;
  width: 100%;
  line-height: 20px;
  padding: 0px;
}
</style>
