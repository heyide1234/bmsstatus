<template>
  <div>
    <el-card>
      <el-page-header @back="goBack" class="hedp">
        <template slot="title">
          <font class="dss"></font>
        </template>
        <template slot="content">
          <font class="dss">{{ dird.path }}</font>
        </template>
      </el-page-header>
    </el-card>
    <el-table
      :data="dirdata.data"
      :height="currentheight"
      style="width: 100%"
      stripe
      :row-style="{ height: '40px' }"
      :cell-style="{ padding: '0' }"
      ref="multipleTable"
    >
      <el-table-column width="35" type="selection" disabled="true" :selectable="checkboxT"></el-table-column>
      <el-table-column label="Name" width>
        <template slot-scope="scope">
          <div class="imgdivs" @dblclick="gdir" @click="gdirone(scope.row.value)">
            <div class="dirimg" v-show="0 === scope.row.status">
              <img src="~assets/dir.png" alt />
            </div>
            <div class="dirimg" v-show="1 === scope.row.status">
              <img src="~assets/file.png" alt />
            </div>
            <div
              class="dirn"
              :class="{ cor: dpathTemp === scope.row.value }"
            >{{ scope.row.value | abpath }}</div>
          </div>
        </template>
      </el-table-column>
          <el-table-column label="Size" prop="size">
  
      </el-table-column>
    </el-table>
    <div>
      <!-- <el-upload
        class="file"
        drag
        action="fileUpload.cgi"
        multiple
        :before-upload="handleBefore"
        :on-success="handleSuccess"
        :data="pData"
      >
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">
          将文件拖到此处，或
          <em>点击上传</em>
        </div>
      </el-upload>-->
      <el-card class="dcard">
        <el-upload class="upl" ref="upload" action="upload.cgi" :auto-upload="false" :data="pData">
          <el-button slot="trigger" size="small" type="primary" class="xzdiv">
            <!-- 选取文件 -->
            <img src="~assets/xzwj.png" alt />
          </el-button>
          <el-button
            style="margin-left: 10px;"
            size="small"
            type="success"
            class="xzdiv"
            @click="submitUpload"
          >
            <img src="~assets/sc.png" alt />
          </el-button>
        </el-upload>
        <el-button type="primary" @click="downloads" size="small" class="del xzdiv">
          <img src="~assets/xz.png" alt />
        </el-button>

        <el-popconfirm
          :confirmButtonText="$t('home.data.del_ok')"
          :cancelButtonText="$t('home.data.del_cancel')"
          icon="el-icon-info"
          iconColor="red"
          :title="$t('home.data.del_msg')"
          @onConfirm="deletes"
        >
          <el-button type="warning" size="small" class="xzdiv dls" slot="reference">
            <img src="~assets/del.png" alt />
          </el-button>
        </el-popconfirm>
      </el-card>
    </div>
    <!-- <div class="uploads">
      <a href="javascript:;" class="file">
        文件上传
        <input
          type="file"
          @change="addFile"
          ref="inputer"
          accept="application/vnd.ms-powerpoint, application/vnd.openxmlformats-officedocument.presentationml.presentation, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document, application/pdf"
        />
      </a>
    </div>-->
  </div>
</template>
<script>
import { uploadFile, post } from "network/configRequest";
import Vue from "vue";
import { Dialog, Upload, PageHeader, Popconfirm } from "element-ui";
Vue.use(Dialog);
Vue.use(Upload);
Vue.use(PageHeader);
Vue.use(Popconfirm);

export default {
  data() {
    return {
      formData: new FormData(),
      file: {}, //文件数据
      dialogVisible: false,
      dpathTemp: "",

      pData: {
        path: ""
      },
      dirdata: {
        path: "0:",
        data: [
          // { value: "1231/123", status: 0,size:'123123' },
          // { value: "12321/1123", status: 0,size:'123123' },
          // { value: "d:/1233", status: 0,size:'123123' },
          // { value: "a:/123.txt", status: 1,size:'123123' },
          // { value: "/3333.txt", status: 1,size:'123123' },
          // { value: "/444.txt", status: 1,size:'123123' }
        ]
      }
    };
  },
  methods: {
    //复选框
    checkboxT(row) {
      if (row.status == 0) {
        return 0;
      } else {
        return 1;
      }
    },
    submitUpload() {
      this.pData.path = this.dirdata.path;
      this.$refs.upload.submit();
      //刷新界面
      this.gofilepath(this.dirdata.path);
    },
    goBack() {
      if (this.dirdata.path.indexOf("/") > 0) {
        this.dirdata.path = this.dirdata.path.substring(
          0,
          this.dirdata.path.lastIndexOf("/")
        );
        this.gofilepath(this.dirdata.path);
      }
    },

    // dialogVisiblefir() {
    //   this.dialogVisible = false;
    //   this.dirdata.path += "/" + this.dpathTemp;
    // },
    gdir(event) {
      let vl = event.currentTarget.lastElementChild.innerHTML.replace(
        /(^\s*)|(\s*$)/g,
        ""
      );

      let cod = this.dirdata.path + "/" + vl;
      console.log(cod);
      if (vl.indexOf(".") > 0) {
        //点击为文件
        //this.dirdata.path = cod;
      } else {
        //点击为文件夹
        this.gofilepath(cod);
      }
    },
    gdirone(val) {
      // let vlo = event.currentTarget.lastElementChild.innerHTML;
      this.dpathTemp = val;
      console.log(val);
    },

    // dialogVisibles() {
    //   this.dialogVisible = true;
    //   this.dirdata.path = "0:";
    //   this.dpathTemp = "";
    //   this.gofilepath("0:");
    // },
    gofilepath(path) {
      post("filepath", path)
        .then(res => {
          console.log(res.data);
          this.dirdata = res.data;
        })
        .catch(err => {
          console.log("错误", err);
        });
    },
    //上传文件
    addFile: function() {
      // var _this = this;
      let inputDOM = this.$refs.inputer;
      // let oldLen = this.filLen;
      this.file = inputDOM.files[0];
      // let len = this.file.length;
      let size = Math.floor(this.file.size / 1024);
      if (size > 20 * 1024 * 1024) {
        alert("文件大于20M！");
        return false;
      }
      this.formData.append("file", this.file);
      uploadFile(this.formData.data)
        .then(function(res) {
          console.log(res.data);
        })
        .catch(function(err) {
          console.log("错误", err);
        });
    },
    //删除文件
    async deletes() {
      for (let i of this.$refs.multipleTable.selection) {
        await this.del(i.value);
      }
      //刷新界面
      this.gofilepath(this.dirdata.path);
    },
    del(v) {
      post("delete", v)
        .then(res => {
          console.log(res.data);
        })
        .catch(error => {
          console.log(error);
        });
    },

    //下载文件
    async downloads() {
      let val = "";
      for (let i of this.$refs.multipleTable.selection) {
        //await this.dls(i.value);//文件流形式
        // console.log("下载路径：", i.value);

        //setTimeout("alert('x')", 2000);

        if (val == "") {
          val += "/download?" + i.value;
        } else {
          val += "&" + i.value;
        }
      }
      await this.xztodo(val);
    },
    xztodo(v) {
      console.log("下载请求路径", v);
      window.location.href = v;
    },
    dls(v) {
      post("download", v)
        .then(res => {
          console.log(res.data);
          let url = window.URL.createObjectURL(new Blob([res.data.data])); //创建下载链接
          let link = document.createElement("a"); //创建a标签
          link.style.display = "none"; //将a标签隐藏
          link.href = url; //给a标签添加下载链接
          link.setAttribute("download", res.data.fileName); // 此处注意，要给a标签添加一个download属性，属性值就是文件名称 否则下载出来的文件是没有属性的，空白白
          document.body.appendChild(link);
          link.click(); //执行a标签
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  created() {},
  mounted() {
    this.gofilepath("0:");
  },
  components: {
    // "TextList-my": () => import("components/common/TextList"),
    // "TextListItem-my": () => import("components/common/TextListItem")
  },
  computed: {
    dird() {
      return this.dirdata;
    },
    currentheight() {
      return window.screen.availHeight - 370;
    }
  },
  filters: {
    abpath(val) {
      return val.substring(val.lastIndexOf("/") + 1);
    }
  }
};
</script>
<style scoped>
.dls {
  margin-left: 10px;
}
.xzdiv {
  padding: 4px;
  height: 28px;
  width: 40px;
}
.xzdiv img {
  height: 20px;
  width: 20px;
}
.dcard {
  margin-top: 10px;
  line-height: 1px;
  box-shadow: 0 1px 1px 0 rgba(124, 122, 122, 0.1) !important;
  border: none;
  height: 150px;
  overflow: auto;
  position: relative;
}
.upl {
  float: left;
}
.del {
  margin-left: 10px;
}

.dss {
  font-size: 14px;
}
.cor {
  color: red;
}
.pat {
  margin-left: 100px;
}
.imgdivs {
  height: 150%;
  width: 100%;
  cursor: pointer;
  display: flex;
  flex: 1;
}
.dirimg {
  height: 20px;
  width: 20px;

  margin-top: 5px;
  text-align: center;
}
.dirimg img:hover {
  background-color: rgb(236, 231, 240);
}

.dirn {
  height: 30px;
  font-size: 13px;
  text-align: left;
  margin-left: 10px;
  line-height: 30px;
}
.nametile {
  font-size: 15px;
  margin-left: 40px;
}
.imgdivs img {
  height: 20px;
  width: 20px;
  padding: 0;
  margin: 0;
}

.alertcontent {
  height: 300px;
  width: 100%;
  overflow: auto;
}
.buttonf {
  border: none;
  width: 300px;
  height: 170px;
  margin: 5px 100px 10px 150px;
  text-align: center;
  border-radius: 3px;
  float: left;
  color: #7e8186;
  border: 1px dashed rgb(211, 209, 212);
}
.buttonf:hover {
  border: 1px royalblue dashed;
}

.uploads {
  width: 200px;
  height: 50px;
}

.file {
  /* position: relative;
  display: inline-block;
  background: #007bff;
  border: none;
  width: 150px;
  border-radius: 3px;
  overflow: hidden;
  color: #edf2f9;
  text-decoration: none;
  text-indent: 0;
  line-height: 50px;
  margin-left: 15px;
  text-align: center; */
  float: left;
  margin-left: 100px;
}
.file input {
  position: absolute;
  font-size: 15px;
  right: 0;
  top: 0;
  opacity: 0;
}
.uploads:hover {
  color: #fff;
  text-decoration: none;
  cursor: pointer;
}
</style>
