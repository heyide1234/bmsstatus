<template>
  <div class="showscroll">
    <!-- <table :data="Warranty.System" height="100" border style="width: 100%">
      <el-table-column prop="WorkingTime" label="工作时间" width="250"></el-table-column>
      <el-table-column prop="DischargeTime" label="放电时间" width="250"></el-table-column>
      <el-table-column prop="ChargeTime" label="充电时间" width="250"></el-table-column>
      <el-table-column prop="DischargeCapacity" label="放电容量" width="250"></el-table-column>
      <el-table-column prop="ChargeCapacity" label="充电容量"></el-table-column>
    <table>
    <table :data="Warranty.Subpack" height="450" border style="width: 100%">
      <el-table-column prop="Name" label="名称" width="120"></el-table-column>
      <el-table-column prop="OverVoltageTimes" label="超过电压时间" width="140"></el-table-column>
      <el-table-column prop="OverDischageTimes" label="过放电时间" width="140"></el-table-column>
      <el-table-column prop="OverCurrentTimes" label="过当前时间" width="140"></el-table-column>
      <el-table-column prop="TotalWorkingTime" label="总工作时间" width="140"></el-table-column>
      <el-table-column prop="TotalDischargeTime" label="总计时间" width="140"></el-table-column>
      <el-table-column prop="TotalChargeTime" label="总载荷时间" width="140"></el-table-column>
      <el-table-column prop="DischargeCapacity" label="放电容量" width="140"></el-table-column>
      <el-table-column prop="ChargeCapacity" label="充电容量"></el-table-column>
    </table>-->

    <TextList-my>
      <TextListItem-my
        v-for="(item, key) in Warranty.System[0]"
        :key="key"
        :widthLength="20"
        :leftLength="45"
        :rightLength="40"
      >
        <template slot="left">
          <font>{{ key }}</font>
        </template>
        <template slot="right">
          <font>{{ item }}</font>
        </template>
      </TextListItem-my>
    </TextList-my>
    <el-table
      :data="Warranty.Subpack"
      border
      style="width: 100%"
      :height="clientHeight"
    >
      <el-table-column prop="Name" label="Name"></el-table-column>
      <el-table-column prop="ODTimes" label="ODTimes"></el-table-column>
      <el-table-column prop="OCTimes" label="OCTimes"></el-table-column>
      <el-table-column prop="WOKHours" label="WOKHours"></el-table-column>
      <el-table-column prop="DISHours" label="DISHours"></el-table-column>
      <el-table-column prop="CHGHours" label="CHGHours"></el-table-column>
      <el-table-column prop="DISCap" label="DISCap"></el-table-column>
      <el-table-column prop="CHGCap" label="CHGCap"></el-table-column>
    </el-table>
  </div>
</template>

<script>
import { get } from "network/configRequest";
export default {
  data() {
    return {
      Warranty: {
        System: [
          // {
          //   WorkingTime: 1500000,
          //   DischargeTime: 1500000,
          //   ChargeTime: 1500000,
          //   DischargeCapacity: 1500000,
          //   ChargeCapacity: 1500000,
          // },
        ],
        Subpack: [
          // {
          //   Name: "Subpack1",
          //   OVTimes: 1000,
          //   OCTimes: 1000,
          //   WOKHours: 1500000,
          //   DISHours: 1500000,
          //   CHGHours: 1500000,
          //   DISCap: 1500000,
          //   CHGCap: 1500000,
          // },
          // {
          //   Name: "Subpack2",
          //   OVTimes: 1000,
          //   OCTimes: 1000,
          //   WOKHours: 1500000,
          //   DISHours: 1500000,
          //   CHGHours: 1500000,
          //   DISCap: 1500000,
          //   CHGCap: 1500000,
          // },
        ],
      },
    };
  },
  methods: {
    handleChange(val) {
      console.log(val);
    },
  },
  created() {
    get("warranty")
      .then((res) => {
        console.log(res.data);
        this.Warranty = res.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  components: {
    "TextList-my": () =>
      import(
        // webpackChunkName:"myComp",
        "components/common/TextList"
      ),
    "TextListItem-my": () =>
      import(
        // webpackChunkName:"myComp",
        "components/common/TextListItem"
      ),
  },
  computed: {
    clientHeight() {
      // return document.body.clientHeight / 10;
      return window.screen.availHeight - 200;
    },
  },
};
</script>
<style scoped>
/*定义滚动条轨道 内阴影+圆角*/

font {
  font-family: "Cerebri Sans", sans-serif;
  font-size: 13px;
  display: inline-block;
  width: 100%;
}
/* table {
  font-family: "Cerebri Sans", sans-serif;
  font-size: 13px;
  font-style: normal;
  font-weight: normal;
  text-transform: uppercase;
  letter-spacing: 0px;
  line-height: 1.7em;
  text-align: center;
  border-collapse: collapse;
  width: 100%;
}
th {
  background-color: rgb(248, 248, 250);
  font-weight: 500;
}
th,
td {
  text-align: center;
  border: rgb(212, 223, 224) 1px solid;
  height: 50px;
  padding: 0px, 10px;
} */
</style>
