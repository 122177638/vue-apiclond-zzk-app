<template>
  <div class="main-sss">
    <van-nav-bar style="padding-top:20px;" title="我的" />
    <b-scroll>
      <div>
        我的
      </div>
    </b-scroll>
  </div>
</template>

<script>
import { NavBar, Icon } from "vant";
export default {
  components: {
    [NavBar.name]: NavBar,
    [Icon.name]: Icon
  }
};
</script>

<style>
.main-sss {
  height: 100%;
}
</style>
