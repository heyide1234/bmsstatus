<template>
  <el-container>
    <el-aside :style="{ width: widp, height: clientHeight * 10 + 'px' }">
      <div class="logodiv">
        <div class="top">
          <img src="~assets/logo.png" alt />
        </div>
      </div>
      <div class="nemus">
        <el-menu
          default-active="22222"
          class="bg1 el-menu-vertical-demo"
          background-color="#0e3256"
          text-color="#e2ebe7"
          active-text-color="#ffd04b"
          router
          :collapse="isCollapse"
        >
          <el-menu-item index="Status">
            <div class="nenunamesc" :class="{ dvc: isdvc }">
              <i class="el-icon-s-platform"></i>

              <span slot="title">{{ $t("home.nav.status") }}</span>
            </div>
          </el-menu-item>
          <el-menu-item index="Detail">
            <div class="nenunamesc" :class="{ dvc: isdvc }">
              <i class="el-icon-s-order"></i>
              <span slot="title">{{ $t("home.nav.detail") }}</span>
            </div>
          </el-menu-item>
          <el-submenu index="1" class="bg2">
            <template slot="title">
              <div class="nenunamesc" :class="{ dvc: isdvc }">
                <i class="el-icon-s-tools"></i>
                <span>{{ $t("home.nav.config") }}</span>
              </div>
            </template>

            <el-menu-item index="Config?view=Basic">
              <div class="nenunamesc" :class="{ dvc: isdvc }">
                <i class="el-icon-finished"></i>
                <span>{{ $t("home.nav.basic") }}</span>
              </div>
            </el-menu-item>
            <el-menu-item index="Config?view=System">
              <div class="nenunamesc" :class="{ dvc: isdvc }">
                <i class="el-icon-finished"></i>
                <span>{{ $t("home.nav.system") }}</span>
              </div>
            </el-menu-item>
            <el-menu-item index="Config?view=Subpack">
              <div class="nenunamesc" :class="{ dvc: isdvc }">
                <i class="el-icon-finished"></i>
                <span>{{ $t("home.nav.subpack") }}</span>
              </div>
            </el-menu-item>
            <el-menu-item index="Config?view=Hardware">
              <div class="nenunamesc" :class="{ dvc: isdvc }">
                <i class="el-icon-finished"></i>
                <span>{{ $t("home.nav.hardware") }}</span>
              </div>
            </el-menu-item>
            <el-menu-item index="Config?view=User">
              <div class="nenunamesc" :class="{ dvc: isdvc }">
                <i class="el-icon-finished"></i>
                <span>{{ $t("home.nav.user") }}</span>
              </div>
            </el-menu-item>
            <el-menu-item index="Config?view=Charge">
              <div class="nenunamesc" :class="{ dvc: isdvc }">
                <i class="el-icon-finished"></i>
                <span>{{ $t("home.nav.charge") }}</span>
              </div>
            </el-menu-item>

            <el-submenu index="1-4" class="bg3">
              <template slot="title">
                <div class="nenunamesc" :class="{ dvc: isdvc }">
                  <i class="el-icon-finished"></i>
                  <span>{{ $t("home.nav.control") }}</span>
                </div>
              </template>
              <el-menu-item index="Config?view=OverVoltage">
                <div class="nenunamesc" :class="{ dvc: isdvc }">
                  <i class="el-icon-finished"></i>
                  <span>{{ $t("home.nav.overVoltage") }}</span>
                </div>
              </el-menu-item>

              <el-menu-item index="Config?view=UnderVoltage">
                <div class="nenunamesc" :class="{ dvc: isdvc }">
                  <i class="el-icon-finished"></i>
                  <span>{{ $t("home.nav.underVoltage") }}</span>
                </div>
              </el-menu-item>
              <el-menu-item index="Config?view=Temperature">
                <div class="nenunamesc" :class="{ dvc: isdvc }">
                  <i class="el-icon-finished"></i>
                  <span>{{ $t("home.nav.temperature") }}</span>
                </div>
              </el-menu-item>
              <el-menu-item index="Config?view=VoltageDiff">
                <div class="nenunamesc" :class="{ dvc: isdvc }">
                  <i class="el-icon-finished"></i>
                  <span>{{ $t("home.nav.voltageDiff") }}</span>
                </div>
              </el-menu-item>
              <el-menu-item index="Config?view=Current">
                <div class="nenunamesc" :class="{ dvc: isdvc }">
                  <i class="el-icon-finished"></i>
                  <span>{{ $t("home.nav.current") }}</span>
                </div>
              </el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="Data">
            <div class="nenunamesc" :class="{ dvc: isdvc }">
              <i class="el-icon-s-cooperation"></i>
              <span slot="title">{{ $t("home.nav.data") }}</span>
            </div>
          </el-menu-item>
          <el-menu-item index="Operate">
            <div class="nenunamesc" :class="{ dvc: isdvc }">
              <i class="el-icon-s-check"></i>
              <span slot="title">{{ $t("home.nav.operate") }}</span>
            </div>
          </el-menu-item>
          <el-submenu index="-1" class="bg2">
            <template slot="title">
              <div class="nenunamesc" :class="{ dvc: isdvc }">
                <i class="el-icon-s-finance"></i>
                <span>{{ $t("home.nav.retrospect") }}</span>
              </div>
            </template>

            <el-menu-item index="Retrospect?view=UniqueID">
              <div class="nenunamesc" :class="{ dvc: isdvc }">
                <i class="el-icon-finished"></i>
                <span>{{ $t("home.nav.UniqueID") }}</span>
              </div>
            </el-menu-item>

            <el-menu-item index="Retrospect?view=PCBASN">
              <div class="nenunamesc" :class="{ dvc: isdvc }">
                <i class="el-icon-finished"></i>
                <span>{{ $t("home.nav.PCBA_SN") }}</span>
              </div>
            </el-menu-item>
            <el-menu-item index="Retrospect?view=ProductSN">
              <div class="nenunamesc" :class="{ dvc: isdvc }">
                <i class="el-icon-finished"></i>
                <span>{{ $t("home.nav.Product_SN") }}</span>
              </div>
            </el-menu-item>
            <el-menu-item index="Retrospect?view=VIN">
              <div class="nenunamesc" :class="{ dvc: isdvc }">
                <i class="el-icon-finished"></i>
                <span>{{ $t("home.nav.VIN") }}</span>
              </div>
            </el-menu-item>

            <el-menu-item index="Retrospect?view=HWVersion">
              <div class="nenunamesc" :class="{ dvc: isdvc }">
                <i class="el-icon-finished"></i>
                <span>{{ $t("home.nav.HW_Version") }}</span>
              </div>
            </el-menu-item>
            <el-menu-item index="Retrospect?view=SWVersion">
              <div class="nenunamesc" :class="{ dvc: isdvc }">
                <i class="el-icon-finished"></i>
                <span>{{ $t("home.nav.SW_Version") }}</span>
              </div>
            </el-menu-item>
          </el-submenu>

          <el-menu-item index="About">
            <div class="nenunamesc" :class="{ dvc: isdvc }">
              <i class="el-icon-platform-eleme"></i>
              <span slot="title">{{ $t("home.nav.about") }}</span>
            </div>
          </el-menu-item>
        </el-menu>
      </div>
    </el-aside>
    <el-container>
      <el-header height="40px">
        <el-button
          icon="el-icon-s-fold"
          size="mini"
          class="colspanq"
          @click="isCollapsem"
          v-show="!isCollapse"
        ></el-button>
        <el-button
          icon="el-icon-s-unfold"
          size="mini"
          class="colspanq"
          @click="isCollapsem"
          v-show="isCollapse"
        ></el-button>

        <span class="systemName"> BMS Configure System</span>

        <div class="lang">
          <el-dropdown>
            <div class="fydiv">
              <img src="~assets/fy.png" alt />
            </div>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item
                @click.native="toggleLang('zh')"
                :disabled="$i18n.locale == 'zh'"
                >中文</el-dropdown-item
              >
              <el-dropdown-item
                @click.native="toggleLang('en')"
                :disabled="$i18n.locale == 'en'"
                >English</el-dropdown-item
              >
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
// @ is an alias to /src
import Vue from "vue";
import {
  // Dialog,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Menu,
  Submenu,
  MenuItem,
  Input,
  Switch,
  Select,
  Option,
  Button,
  Tag,
  Table,
  TableColumn,
  Icon,
  // Upload,
  Card,
  Container,
  Header,
  Aside,
  Main,
  Message,
  Loading,

  // Message,
} from "element-ui";
// Vue.use(Dialog);

Vue.prototype.$loading = Loading.service;
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(Input);
Vue.use(Switch);
Vue.use(Select);
Vue.use(Option);
Vue.use(Button);
Vue.use(Tag);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Icon);
// Vue.use(Upload);
Vue.use(Card);
Vue.use(Container);
Vue.use(Header);
Vue.use(Aside);
Vue.use(Main);
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.prototype.$message = Message;

// Vue.prototype.$message = Message;

export default {
  data() {
    return {
      isCollapse: false,
      widp: "220px",
      isdvc: true,
    };
  },
  created() {},
  mounted() {
    //监控Network
    setTimeout(() => {
      setInterval(() => {
        this.getNetwork();
      }, parseInt(this.dts.await));
    }, 1000);
  },

  computed: {
    clientHeight() {
      // return document.body.clientHeight / 10;
      return (window.screen.availHeight - 70) / 10;
    },
  },
  methods: {
    isCollapsem() {
      if (!this.isCollapse) {
        this.widp = "43px";
        this.isdvc = false;
      } else {
        this.widp = "220px";
        this.isdvc = true;
      }

      this.isCollapse = !this.isCollapse;
    },
    // fy() {
    //   let locale = this.$i18n.locale;
    //   locale === "zh" ? (this.$i18n.locale = "en") : (this.$i18n.locale = "zh");
    // },

    toggleLang(lang) {
      if (lang == "zh") {
        localStorage.setItem("locale", "zh");
        this.$i18n.locale = localStorage.getItem("locale");
        this.$message({
          message: "切换为中文！",
          type: "success",
        });
      } else if (lang == "en") {
        localStorage.setItem("locale", "en");
        this.$i18n.locale = localStorage.getItem("locale");
        this.$message({
          message: "Switch to English!",
          type: "success",
        });
      }
    },
  },
};
</script>
<style scoped>
.lang {
  float: right;
}
.dvc {
  padding-left: 30px;
}
.fydiv {
  height: 30px;
  width: 30px;
  margin: 5px 40px 0px 0px;
  float: right;
  cursor: pointer;
}
.fydiv img {
  height: 100%;
  width: 100%;
  margin: 0px;
  padding: 0px;
}

.colspanq {
  margin: 5px 0px 0px 0px;
  font-size: 20px;
  padding: 3px;
  border: none;
}

.el-menu-item:hover {
  background-color: #061320;
}
.nenunamesc {
  display: inline-block;
  width: 1px;
  margin-left: -10px;
}

.bg1 {
  text-align: left;
}
.bg2 {
  background-color: #0c2a47 !important;
}
.bg3 {
  background-color: #081d30 !important;
}
.top {
  height: 100%;
  width: 70%;

  margin: 0px auto;
}
.logodiv img {
  height: 30px;
  width: 120px;
  text-align: center;
  float: left;
  margin-top: 5px;
}

.tilename {
  margin-left: 10px;

  font-weight: bold;
  font-size: 25px;

  font-family: "Cerebri Sans", sans-serif;

  float: left;
}

.el-menu {
  border: none;
}
.el-header {
  line-height: 30px;
  background-color: #fff;
}

.el-aside {
  background-color: #0e3256; /*#313a46; 0e3256*/
  color: #333;
  text-align: center;
}

.el-main {
  background-color: #f8fafd;
  color: #333;
  padding: 10px;
}
.systemName {
  float: right;
  margin: 10px 20px 0px 0px;
  font-size: 12px;
  color: #95aac9;
  float: right;
}
.logodiv {
  height: 40px;
  line-height: 40px;
  background-color: #0d2d4b;

  text-align: center;
}
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
  background-color: rgba(240, 240, 240, 1);
}
::-webkit-scrollbar {
  width: 0.1px;
  height: 10px;
}

::-webkit-scrollbar-thumb {
  background-color: #cfd2da;
  border-radius: 0.1px;
}
/*定义滚动条轨道 内阴影+圆角*/
/* ::-webkit-scrollbar-track {
  box-shadow: inset 0 0 0px rgba(240, 240, 240, 0.5);
  border-radius: 10px;
  background-color: rgba(240, 240, 240, 0.5);
} */

/*定义滑块 内阴影+圆角*/
/* ::-webkit-scrollbar-thumb {
  border-radius: 10px;
  box-shadow: inset 0 0 0px rgba(240, 240, 240, 0.5);
  background-color: rgba(240, 240, 240, 0.5);
} */
</style>
