<template>
  <h2 class="info-public-title">
    <i
      v-if="icon"
      class="public-title-icon"
      :style="`background:url(${icon}) no-repeat;background-size:100% 100%;`"
    ></i>
    <span class="title">
      <slot></slot>
    </span>
  </h2>
</template>

<script>
export default {
  props: ["icon"]
};
</script>

<style lang="less" scoped>
.info-public-title {
  padding-top: 25px;
  .public-title-icon {
    width: 15px;
    min-height: 15px;
    display: inline-block;
    vertical-align: middle;
  }
  .title {
    vertical-align: middle;
    font-weight: bold;
    font-size: 18px;
    color: #282828;
    display: inline-block;
  }
}
</style>
