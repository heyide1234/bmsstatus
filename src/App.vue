<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  mounted: function() {
    document.querySelector("#app").style.height =
      document.body.clientHeight + "px";
    this.$router.push("Home");
  },
};
</script>
<style>
html,
body {
  height: 100%;
  width: 100%;
  margin: 0px;
  padding: 0px;

  font-family: Nunito, sans-serif;
  font-size: 0.9rem;
  font-weight: 400;
  line-height: 1.5;
  color: #6c757d;
  text-align: left;
  background-color: #fafbfe;
}
::-webkit-scrollbar {
  width: 2px;
  height: 10px;
}

::-webkit-scrollbar-thumb {
  background-color: #cfd2da;
  border-radius: 2px;
}
.el-table--scrollable-x .el-table__body-wrapper {
  overflow-x: hidden !important;
}
.el-table--scrollable-x .el-table__body-wrapper:hover {
  overflow-x: auto !important;
}
</style>
