<template>
  <section class="nodata-container">
    <div class="nodata-box"><img src="./no-data.png" alt="" /></div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.nodata-container {
  flex: 1;
  .nodata-box {
    padding: 15px 50px;
    box-sizing: border-box;
    img {
      width: 100%;
      vertical-align: middle;
    }
  }
}
</style>
