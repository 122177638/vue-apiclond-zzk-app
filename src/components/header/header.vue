<template>
  <header class="public_header">
    <van-nav-bar :border="border">
      <slot name="left" slot="left">
        <div class="nav-left">
          <figure>
            <img
              src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=83479406,3830298088&fm=27&gp=0.jpg"
              class="user-avait"
            />
          </figure>
          <h3 class="user-name">千城墨白</h3>
        </div>
      </slot>
      <slot name="title" slot="title"></slot>
      <slot name="right" slot="right">
        <van-icon
          name="chat-o"
          size="0.44rem"
          @click="$router.push('/msgCenter')"
          color="#282828"
          info="9"
        />
      </slot>
    </van-nav-bar>
  </header>
</template>

<script>
import { NavBar, Icon } from "vant";
export default {
  props: {
    border: {
      type: Boolean,
      default: false
    }
  },
  components: {
    "van-nav-bar": NavBar,
    "van-icon": Icon
  }
};
</script>

<style lang="less" scoped>
.public_header {
  // height: 79px;
  padding-top: 20px;
  background-color: #ffffff;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .nav-left {
    display: flex;
    align-items: center;
    .user-avait {
      width: 34px;
      height: 34px;
      border-radius: 50%;
      vertical-align: middle;
    }
    .user-name {
      margin-left: 10px;
      font-size: 18px;
      font-weight: bold;
      color: #282828;
    }
  }
}
</style>
