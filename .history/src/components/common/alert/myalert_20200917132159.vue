<template>
  <transition name="fade">
    <div class="bg" v-if="show">
      <div style="opacity:1">{{content}}</div>

      <!-- <br />权限的但是接到甲方开具的实际付款 -->
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      show: true,
      content: ""
    };
  },
  mounted() {
    setTimeout(() => {
      this.show = false;
    }, 3000);
  },
  computed: {}
};
</script>
<style scoped>
.bg {
  min-height: 25px;
  min-width: 100px;

  background: rgba(0, 0, 0, 0.8);
  border-radius: 1px;
  color: #fff;
  position: fixed;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  z-index: 9999;
  text-align: center;
  padding: 5px;
  line-height: 25px;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
</style>
