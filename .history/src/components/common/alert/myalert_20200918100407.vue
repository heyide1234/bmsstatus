<template>
  <div class="main">
    <transition name="fade">
      <div class="bg" v-if="show">
        <div style="opacity:1">{{content}}</div>

        <!-- <br />权限的但是接到甲方开具的实际付款 -->
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      content: ""
    };
  },
  mounted() {
    this.show = true;
    setTimeout(() => {
      this.show = false;
    }, 3000);
  },
  computed: {}
};
</script>
<style scoped>
.bg {
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  border: 1px solid #ebeef5;
  transition: 0.3s;

  min-height: 25px;
  min-width: 100px;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 1px;
  color: #fff;
  /* position: fixed;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%); */
  display: inline-block;
  vertical-align: middle;

  z-index: 9999;
  text-align: center;
  padding: 5px;
  line-height: 25px;
}
.bg::after {
  display: inline-block;
  height: 100%;
  width: 0;
  vertical-align: middle;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.main {
  position: absolute;
  left: 0;
  top: 0;
}
</style>
