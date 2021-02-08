<template>
  <div class="systtem">
    <div class="title">
      <h1>{{ querydt }}</h1>
      <el-button
        @click="editBtn"
        class="editBtn"
        type="primary"
        icon="el-icon-edit"
        v-show="querydt != 'UniqueID'"
      >SAVE</el-button>
    </div>
    <el-card class="content" :style="{ height: clientHeight * 10 + 'px' }">
      <listForm-my :datas="configdata" :widthLengthD="len"></listForm-my>
    </el-card>
  </div>

  <!--
    <card-my :h="200" :w="200" :istitle="false">
      <template slot="content">2</template>
    </card-my>
    <card-my :h="200" :w="200" :istitle="false">
      <template slot="content">1</template>
    </card-my>
    <card-my :h="200" :w="200" :istitle="false">
      <template slot="content">2</template>
    </card-my>
    <card-my :h="200" :w="200" :istitle="false">
  <template slot="content">2</template>
  -->
</template>
<script>
// import { ConfigComp } from "components/referenceComps/ConfigComp";
import { get, post } from "network/configRequest"; //, updateSystem

export default {
  data() {
    return {
      isactiv: "system",
      currentdatas: {},
      lenw: 100,
      example: {
        len: 50,
        data: [
          //   {
          //     Key: "example1666",
          //     Value: "Normal",
          //     ViewType: "Input"
          //   },
          //   { Key: "example1666", Value: "Normal", ViewType: "Input" },
          //   { Key: "example1666", Value: "Normal", ViewType: "Input" },
          //   { Key: "example1666", Value: "Normal", ViewType: "Input" },
          //   { Key: "example1666", Value: "Normal", ViewType: "Input" },
          //   { Key: "example1666", Value: "Normal", ViewType: "Input" },
          //   { Key: "example1666", Value: "Normal", ViewType: "Input" },
          //   {
          //     Key: "example1666",
          //     Value: "PCPD",
          //     ViewType: "Select",
          //     SubItem: ["SCSD", "PCPD", "SCPD", "PCSD", "ACPD", "ACSD"]
          //   },
          //   { Key: "example1666", Value: true, ViewType: "Switch" },
          //   { Key: "example1666", Value: "Normal", ViewType: "Input" },
          //   {
          //     Key: "example1666",
          //     Value: "PCPD",
          //     ViewType: "Select",
          //     SubItem: ["SCSD", "PCPD", "SCPD", "PCSD", "ACPD", "ACSD"]
          //   },
          //   { Key: "example1666", Value: true, ViewType: "Switch" }
        ]
      }
    };
  },
  components: {
    "listForm-my": () =>
      import(
        // webpackChunkName:"myComp",
        "components/content/ListForm"
      )
  },
  methods: {
    querydatas(param) {
      this.isactiv = param;
      get("i/" + this.isactiv)
        .then(res => {
          console.log(res.data);
          this.currentdatas = res.data.data;
          this.lenw = res.data.len;
        })
        .catch(error => {
          console.log(error);
        });
    },
    editBtn() {
      post("i/" + this.isactiv + "edit", this.configdata)
        .then(res => {
          console.log(res.data);
           this.$myalert({ content: res.data });
        })
        .catch(error => {
          console.log(error);
          this.$myalert({ content: error });
        });
    }
  },
  created() {
    console.log("参数", this.$route.query.view);
    this.currentdatas = this.example.data;
  },
  mounted() {
    // ConfigComp(); //组件样式生成
    //this.getNetDate(); //请求数据
    //alert(this.$refs.systtem.clientHeight);
  },
  computed: {
    configdata() {
      return this.currentdatas;
    },
    querydt() {
      this.querydatas(this.$route.query.view);

      return this.$route.query.view;
    },
    clientHeight() {
      // return document.body.clientHeight / 10;
      return (window.screen.availHeight - 200) / 10;
    },
    len() {
      return this.lenw;
    }
  }
};
</script>
<style scoped>
.editBtn {
  margin-top: 0px;
  float: right;
  margin-right: 20px;
}
h1 {
  display: inline-block;
  color: #95aac9;
}

.title {
  height: 50px;
  line-height: 0px;
  width: 100%;
}
.content {
  /* margin: 10px 20px; */

  width: 100%;
  text-align: left;
  padding-top: 10px;
  overflow: auto;
  box-shadow: 0 0 35px 0 rgba(154, 161, 171, 0.15);
  border-radius: 0px;
}
.systtem {
  height: 90%;
  width: 100%;
  padding: 0px;
}

#nav {
  width: 100%;
  height: 50px;
  margin: 0px;
}
#nav ul li {
  margin: 10px 10px;
  float: left;
  list-style: none;
}
#nav ul li a {
  float: left;
  padding: 0px 16px;
  font-family: "Cerebri Sans", sans-serif;
  font-size: 15px;
  text-decoration: none;
}

li a {
  color: rgb(15, 14, 15);
}
.activ {
  color: rgb(117, 168, 21);
  font-weight: blod;
}
</style>
