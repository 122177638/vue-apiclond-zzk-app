<template>
  <div class="mf-loading-container">
    <img src="./loading.gif" /><span class="load-txt">正在努力加载中...</span>
  </div>
</template>
<script type="text/ecmascript-6">
const COMPONENT_NAME = 'loading'
export default {
  name: COMPONENT_NAME
}
</script>
<style lang="less">
.mf-loading-container {
  img {
    width: 20px;
    height: 20px;
    display: inline-block;
    vertical-align: middle;
  }
  .load-txt {
    margin-left: 5px;
    font-size: 14px;
    color: #989898;
    display: inline-block;
    vertical-align: middle;
  }
}
</style>
