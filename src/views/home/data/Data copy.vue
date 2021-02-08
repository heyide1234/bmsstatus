<template>
  <div>
    <el-button type="primary" icon="el-icon-search" @click="dialogVisibles">选择服务器文件路径</el-button>
    <el-tag type="info" class="pat">{{ dirdata.path }}</el-tag>
    <el-dialog :visible.sync="dialogVisible" width="50%">
      <div slot="title" class="header-title">
        <!-- <el-button icon="el-icon-back" class="back"></el-button>
        <span class="nametile">{{ dird.path }}</span>-->
        <el-page-header @back="goBack">
          <template slot="content">
            <font class="dss">{{ dird.path }}</font>
          </template>
        </el-page-header>
      </div>
      <div class="alertcontent">
        <TextList-my>
          <TextListItem-my
            v-for="(item, key) of dird.data"
            :key="key"
            :widthLength="20"
            :leftLength="70"
            :rightLength="1"
            :isshowFs="true"
          >
            <template slot="left">
              <div class="imgdivs" @dblclick="gdir" @click="gdirone(item.value)">
                <div class="dirimg" v-show="item.dir">
                  <img src="~assets/dir.png" alt />
                </div>
                <div class="dirimg" v-show="!item.dir">
                  <img src="~assets/file.png" alt />
                </div>
                <div class="dirn" :class="{ cor: dpathTemp === item.value }">{{ item.value }}</div>
              </div>
            </template>
            <template slot="right"></template>
          </TextListItem-my>
        </TextList-my>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisiblefir">确 定</el-button>
      </span>
    </el-dialog>
    <br />
    <br />
    <br />
    <div>
      <el-upload
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
      </el-upload>

      <el-button @click="downloads" class="buttonf">
        <img src="~assets/dl.png" alt style="height:50%;width:30%" />
        <br />下载
      </el-button>
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
import { Dialog, Upload, Message, PageHeader } from "element-ui";
Vue.use(Dialog);
Vue.use(Upload);
Vue.use(PageHeader);
Vue.prototype.$message = Message;

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
          { value: "1231", dir: true },
          { value: "1232", dir: true },
          { value: "1233", dir: true },
          { value: "123.txt", dir: false }
        ]
      }
    };
  },
  methods: {
    goBack() {
      if (this.dirdata.path.indexOf("/") > 0) {
        this.dirdata.path = this.dirdata.path.substring(
          0,
          this.dirdata.path.lastIndexOf("/")
        );
        this.gofilepath(this.dirdata.path);
      }
    },
    // 上传前的回调函数
    handleBefore() {
      this.pData.path = this.dirdata.path;
    },
    // 上传成功回调
    handleSuccess(res) {
      if (res.status == 200) {
        this.$message.success("上传失败");
      } else {
        this.$message.error("上传失败");
      }
    },
    dialogVisiblefir() {
      this.dialogVisible = false;
      this.dirdata.path += "/" + this.dpathTemp;
    },
    gdir(event) {
      let vl = event.currentTarget.lastElementChild.innerHTML;
      let cod = this.dirdata.path + "/" + vl;
      if (vl.indexOf(".") > 0) {
        //点击为文件
        this.dirdata.path = cod;
        this.dialogVisible = false;
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

    dialogVisibles() {
      this.dialogVisible = true;
      this.dirdata.path = "0:";
      this.dpathTemp = "";
      this.gofilepath("0:");
    },
    gofilepath(path) {
      console.log("请求的路径参数", path);
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
    //下载文件
    downloads: function() {
      post("monitor.cgi", this.dirdata.path)
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
  components: {
    "TextList-my": () => import("components/common/TextList"),
    "TextListItem-my": () => import("components/common/TextListItem")
  },
  computed: {
    dird() {
      return this.dirdata;
    }
  }
};
</script>
<style scoped>
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
}
.dirimg {
  height: 50px;
  width: 100%;

  line-height: 10px;
  text-align: center;
}
.dirimg img:hover {
  background-color: rgb(162, 92, 228);
}

.dirn {
  height: 30px;
  width: 100%;
  font-size: 13px;
  text-align: center;
  line-height: 20px;
}
.nametile {
  font-size: 15px;
  margin-left: 40px;
}
.imgdivs img {
  height: 50px;
  width: 50px;
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
