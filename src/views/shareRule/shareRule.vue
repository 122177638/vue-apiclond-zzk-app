<template>
  <section class="shareRule-container">
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
        分享收益规则
      </h2>
      <div slot="right"></div>
    </Header>
    <van-tabs
      v-model="activeIndex"
      title-active-color="#FF7D30"
      title-inactive-color="#656565"
      color="#FF7D30"
      sticky
    >
      <van-tab title="新手指南">
        新手指南
        <!-- <section class="newGuide-container">
          <ul class="newGuide-list">
            <li class="newGuide-item">
              <h3 class="newGuide-item-title"></h3>
              <p class="newGuide-item-value"></p>
            </li>
          </ul>
        </section> -->
      </van-tab>
      <van-tab title="赚钱秘笈">
        赚钱秘籍
      </van-tab>
    </van-tabs>
  </section>
</template>

<script>
import Header from "@/components/header/header.vue";
import { Icon, Tab, Tabs } from "vant";
export default {
  components: {
    Header,
    "van-tab": Tab,
    "van-icon": Icon,
    "van-tabs": Tabs
  },
  data() {
    return {
      activeIndex: 0
    };
  }
};
</script>

<style lang="less" scoped>
.shareRule-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.newGuide-container {
  .newGuide-list {
    padding: 15px;
    .newGuide-item {
      .newGuide-item-title {
      }
    }
  }
}
</style>
