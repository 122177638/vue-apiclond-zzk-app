<template>
  <section class="systemSetup-container">
    <Header :border="true">
      <div class="header-left" slot="left">
        <van-icon
          name="arrow-left"
          size="0.44rem"
          color="#282828"
          @click="$router.back()"
        />
      </div>
      <h2
        class="header-title"
        style="font-size: 0.36rem;
        color: #282828;
        font-weight: 500;"
        slot="title"
      >
        系统设置
      </h2>
      <div slot="right"></div>
    </Header>
    <Better-scroll class="systemSetup-main">
      <van-cell-group style="margin-top:15px;">
        <van-cell title="所在城市" is-link value="北京市" :clickable="false" />
      </van-cell-group>
      <van-cell-group style="margin:10px 0;">
        <van-cell title="绑定手机号" is-link value="136 1234 5678" />
        <van-cell title="绑定提现支付宝" is-link value="136 1234 5678" />
        <van-cell title="绑定微信" is-link value="anles5254" />
        <van-cell title="提现密码" is-link />
      </van-cell-group>
      <van-cell-group style="margin-bottom:15px;">
        <van-cell title="版本号" value="v4.0.0">
          <div slot="right-icon" style="padding:0 10px;"></div>
        </van-cell>
      </van-cell-group>
      <van-button
        text="清除缓存"
        style="color:#FF7D30;font-size:0.3rem;"
        block
      ></van-button>
      <van-button
        text="退出登录"
        style="color:#F90C0C;font-size:0.3rem;margin-top:15px;"
        block
      ></van-button>
    </Better-scroll>
  </section>
</template>

<script>
import { Icon, Cell, CellGroup, Button } from "vant";
import Header from "@/components/header/header.vue";
export default {
  components: {
    Header,
    "van-icon": Icon,
    "van-cell": Cell,
    "van-cell-group": CellGroup,
    "van-button": Button
  }
};
</script>

<style lang="less" scoped>
.systemSetup-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  .systemSetup-main {
    flex: 1;
    height: 100%;
    overflow: hidden;
    /deep/ .van-cell:not(:last-child)::after {
      left: 0;
    }
    /deep/ .van-cell__value {
      color: #b1b1b1;
    }
    /deep/ .van-cell {
      font-size: 15px;
      // padding: 10px 15px 10px 30px;
      -webkit-tap-highlight-color: transparent;
    }
  }
}
</style>
