<template>
  <div class="bc">
    <div class="sarchs">
      <!-- <el-select v-model="value" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>-->
      <!-- <select @change="itemselect">
        <option v-for="item in selectval" :key="item" :value="item">{{
          item
        }}</option>
      </select>-->

      <el-select v-model="value" placeholder="Please select" @change="selectchangs">
        <el-option v-for="item in selectval" :key="item" :label="item" :value="item"></el-option>
      </el-select>
    </div>
    <!-- <table>
      <thead>
        <th v-for="(item, key) in datas[0]" :key="key">{{ key }}</th>
      </thead>
    </table>
    <div class="showscroll">
      <table>
        <tbody>
          <tr v-for="(item, key) in datas" :key="key">
            <td v-for="(items, key) in item" :key="key">{{ items }}</td>
          </tr>
        </tbody>
    </table>-->

    <el-table :data="datas" style="width: 98%;margin:0 auto" :height="clientHeight">
      <el-table-column fixed prop="Name" label="Name">
        <template scope="scope">
          <span
            :style="{ color: scope.row.Name.color }"
            :class="{ blink: scope.row.Name.color === 'red' }"
          >{{ scope.row.Name.value }}</span>
        </template>
      </el-table-column>
      <!-- <el-table-column prop="V1" label="V1"></el-table-column> -->
      <el-table-column label="V1" prop="V1">
        <template scope="scope">
          <span
            :style="{ color: scope.row.V1.color }"
            :class="{ blink: scope.row.V1.color === 'red' }"
          >{{ scope.row.V1.value }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="V2" label="V2">
        <template scope="scope">
          <span :style="{ color: scope.row.V2.color }">
            {{
            scope.row.V2.value
            }}
          </span>
        </template>
      </el-table-column>
      <el-table-column prop="V3" label="V3">
        <template scope="scope">
          <span :style="{ color: scope.row.V3.color }">
            {{
            scope.row.V3.value
            }}
          </span>
        </template>
      </el-table-column>
      <el-table-column prop="V4" label="V4">
        <template scope="scope">
          <span :style="{ color: scope.row.V4.color }">
            {{
            scope.row.V4.value
            }}
          </span>
        </template>
      </el-table-column>
      <el-table-column prop="V5" label="V5">
        <template scope="scope">
          <span :style="{ color: scope.row.V5.color }">
            {{
            scope.row.V5.value
            }}
          </span>
        </template>
      </el-table-column>
      <el-table-column prop="V6" label="V6">
        <template scope="scope">
          <span :style="{ color: scope.row.V6.color }">
            {{
            scope.row.V6.value
            }}
          </span>
        </template>
      </el-table-column>
      <el-table-column prop="V7" label="V7">
        <template scope="scope">
          <span :style="{ color: scope.row.V7.color }">
            {{
            scope.row.V7.value
            }}
          </span>
        </template>
      </el-table-column>
      <el-table-column prop="V8" label="V8">
        <template scope="scope">
          <span :style="{ color: scope.row.V8.color }">
            {{
            scope.row.V8.value
            }}
          </span>
        </template>
      </el-table-column>
      <el-table-column prop="V9" label="V9">
        <template scope="scope">
          <span :style="{ color: scope.row.V9.color }">
            {{
            scope.row.V9.value
            }}
          </span>
        </template>
      </el-table-column>
      <el-table-column prop="V10" label="V10">
        <template scope="scope">
          <span :style="{ color: scope.row.V10.color }">
            {{
            scope.row.V10.value
            }}
          </span>
        </template>
      </el-table-column>
      <el-table-column prop="V11" label="V11">
        <template scope="scope">
          <span :style="{ color: scope.row.V11.color }">
            {{
            scope.row.V11.value
            }}
          </span>
        </template>
      </el-table-column>
      <el-table-column prop="V12" label="V12">
        <template scope="scope">
          <span :style="{ color: scope.row.V12.color }">
            {{
            scope.row.V12.value
            }}
          </span>
        </template>
      </el-table-column>
      <el-table-column prop="T1" label="T1">
        <template scope="scope">
          <span :style="{ color: scope.row.T1.color }">
            {{
            scope.row.T1.value
            }}
          </span>
        </template>
      </el-table-column>
      <el-table-column prop="T2" label="T2">
        <template scope="scope">
          <span :style="{ color: scope.row.T2.color }">
            {{
            scope.row.T2.value
            }}
          </span>
        </template>
      </el-table-column>
      <el-table-column prop="T3" label="T3">
        <template scope="scope">
          <span :style="{ color: scope.row.T3.color }">
            {{
            scope.row.T3.value
            }}
          </span>
        </template>
      </el-table-column>
      <el-table-column prop="T4" label="T4">
        <template scope="scope">
          <span :style="{ color: scope.row.T4.color }">
            {{
            scope.row.T4.value
            }}
          </span>
        </template>
      </el-table-column>
      <el-table-column prop="T5" label="T5">
        <template scope="scope">
          <span :style="{ color: scope.row.T5.color }">
            {{
            scope.row.T5.value
            }}
          </span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { get } from "network/configRequest";
export default {
  data() {
    return {
      value: "",

      selectval: [
        // "subpack1",
        // "subpack2",
        // "subpack3",
        // "subpack4",
        // "subpack5",
        // "subpack6",
        // "subpack7",
        // "subpack8",
        // "subpack9",
        // "subpack10",
        // "subpack11",
        // "subpack12",
        // "subpack13",
        // "subpack14",
        // "subpack15",
        // "subpack16",
      ],

      currentdata: [
        // {
        //   Name: {
        //     value: "MSU1",
        //     color: "",
        //   },
        //   V1: {
        //     value: 1001,
        //     color: "red",
        //   },
        //   V2: {
        //     value: 1001,
        //     color: "Thistle",
        //   },
        //   V3: {
        //     value: 1001,
        //     color: "Thistle",
        //   },
        //   V4: {
        //     value: 1001,
        //     color: "Thistle",
        //   },
        //   V5: {
        //     value: 1001,
        //     color: "Thistle",
        //   },
        //   V6: {
        //     value: 1001,
        //     color: "Thistle",
        //   },
        //   V7: {
        //     value: 1001,
        //     color: "Thistle",
        //   },
        //   V8: {
        //     value: 1001,
        //     color: "Thistle",
        //   },
        //   V9: {
        //     value: 1001,
        //     color: "Thistle",
        //   },
        //   V10: {
        //     value: 1001,
        //     color: "Thistle",
        //   },
        //   V11: {
        //     value: 1001,
        //     color: "Thistle",
        //   },
        //   V12: {
        //     value: 1001,
        //     color: "Thistle",
        //   },
        //   T1: {
        //     value: 1001,
        //     color: "Thistle",
        //   },
        //   T2: {
        //     value: 1001,
        //     color: "Thistle",
        //   },
        //   T3: {
        //     value: 1001,
        //     color: "Thistle",
        //   },
        //   T4: {
        //     value: 1001,
        //     color: "Thistle",
        //   },
        //   T5: {
        //     value: 1001,
        //     color: "Thistle",
        //   },
        // },
        // {
        //   Name: {
        //     value: "MSU2",
        //     color: "red",
        //   },
        //   V1: {
        //     value: 1001,
        //     color: "Thistle",
        //   },
        //   V2: {
        //     value: 1001,
        //     color: "Thistle",
        //   },
        //   V3: {
        //     value: 1001,
        //     color: "Thistle",
        //   },
        //   V4: {
        //     value: 1001,
        //     color: "Thistle",
        //   },
        //   V5: {
        //     value: 1001,
        //     color: "Thistle",
        //   },
        //   V6: {
        //     value: 1001,
        //     color: "Thistle",
        //   },
        //   V7: {
        //     value: 1001,
        //     color: "Thistle",
        //   },
        //   V8: {
        //     value: 1001,
        //     color: "Thistle",
        //   },
        //   V9: {
        //     value: 1001,
        //     color: "Thistle",
        //   },
        //   V10: {
        //     value: 1001,
        //     color: "Thistle",
        //   },
        //   V11: {
        //     value: 1001,
        //     color: "green",
        //   },
        //   V12: {
        //     value: 1001,
        //     color: "Thistle",
        //   },
        //   T1: {
        //     value: 1001,
        //     color: "Thistle",
        //   },
        //   T2: {
        //     value: 1001,
        //     color: "Thistle",
        //   },
        //   T3: {
        //     value: 1001,
        //     color: "Thistle",
        //   },
        //   T4: {
        //     value: 1001,
        //     color: "Thistle",
        //   },
        //   T5: {
        //     value: 1001,
        //     color: "Thistle",
        //   },
        // },
        // {
        //   Name: {
        //     value: "MSU3",
        //     color: "Thistle",
        //   },
        //   V1: {
        //     value: 1001,
        //     color: "Thistle",
        //   },
        //   V2: {
        //     value: 1001,
        //     color: "Thistle",
        //   },
        //   V3: {
        //     value: 1001,
        //     color: "Thistle",
        //   },
        //   V4: {
        //     value: 1001,
        //     color: "yellow",
        //   },
        //   V5: {
        //     value: 1001,
        //     color: "Thistle",
        //   },
        //   V6: {
        //     value: 1001,
        //     color: "Thistle",
        //   },
        //   V7: {
        //     value: 1001,
        //     color: "Thistle",
        //   },
        //   V8: {
        //     value: 1001,
        //     color: "Thistle",
        //   },
        //   V9: {
        //     value: 1001,
        //     color: "Thistle",
        //   },
        //   V10: {
        //     value: 1001,
        //     color: "Thistle",
        //   },
        //   V11: {
        //     value: 1001,
        //     color: "Thistle",
        //   },
        //   V12: {
        //     value: 1001,
        //     color: "Thistle",
        //   },
        //   T1: {
        //     value: 1001,
        //     color: "Thistle",
        //   },
        //   T2: {
        //     value: 1001,
        //     color: "Thistle",
        //   },
        //   T3: {
        //     value: 1001,
        //     color: "Thistle",
        //   },
        //   T4: {
        //     value: 1001,
        //     color: "Thistle",
        //   },
        //   T5: {
        //     value: 1001,
        //     color: "Thistle",
        //   },
        // },
      ],
      data: {},
      SCUDetail: []
    };
  },
  methods: {
    // itemselect() {
    //   console.log("dossdfghjgf");
    //   let dos = this.value;
    //console.log("dos");
    //console.log(dos);
    //console.log("---");

    //   this.currentdata = this.data.V_T.filter((item) => {
    //     if ("all" === dos) return item;
    //     if (item.subpack === dos) return item;
    //   });
    //   console.log(this.currentdata);
    // },
    //选择要查询的数据
    selectchangs(itemq) {
      get("scudetail", itemq)
        .then(res => {
          console.log(res.data);
          this.currentdata = res.data;
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  created() {
    // let tempval = ["all"];
    // for (let cod of this.SCUDetail.V_T) {
    //   if (tempval.indexOf(cod.subpack) == -1) {
    //     tempval.push(cod.subpack);
    //   }
    // }
    // console.log("value值", tempval);
    // this.selectval = tempval;
    // this.data = this.SCUDetail;
    // this.currentdata = this.data.V_T; //
    get("scunum")
      .then(res => {
        console.log(res.data);
        this.selectval = res.data;
      })
      .catch(error => {
        console.log(error);
      });
  },
  computed: {
    datas() {
      return this.currentdata;
    },
    clientHeight() {
      // return document.body.clientHeight / 10;
      return window.screen.availHeight - 200;
    }
  }
};
</script>

<style>
@keyframes blink {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}
/* 添加兼容性前缀 */
@-webkit-keyframes blink {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@-moz-keyframes blink {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@-ms-keyframes blink {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@-o-keyframes blink {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
/* 定义blink类*/
.blink {
  animation: blink 2s linear infinite;
  /* 其它浏览器兼容性前缀 */
  -webkit-animation: blink 2s linear infinite;
  -moz-animation: blink 2s linear infinite;
  -ms-animation: blink 2s linear infinite;
  -o-animation: blink 2s linear infinite;
}
.bc {
  position: relative;
}
.sarchs {
  width: 200px;
  height: 40px;

  margin: 10px;
}

/* input,
button,
select,
option,
a {
  outline: 0 none !important;
} */
</style>
