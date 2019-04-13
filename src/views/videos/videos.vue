<template>
  <section class="video-container">
    <Header></Header>
    <Better-scroll
      class="video-main"
      ref="scroll"
      :pullDownRefresh="{ threshold: 50, stop: 40, txt: '刷新成功' }"
      :pullUpLoad="{
        threshold: 50,
        txt: { more: '上拉加载更多', noMore: '暂无更多数据' }
      }"
      @pullingDown="onPullingDown"
      @pullingUp="onPullingUp"
    >
      <div class="video-list">
        <Layout-video-item
          @click.native="navToVideoDetails(item)"
          :item="item"
          :style="index === 0 ? 'padding:0 0 15px' : 'padding:15px 0'"
          :key="index"
          :isShowShare="true"
          v-for="(item, index) in content"
        ></Layout-video-item>
      </div>
    </Better-scroll>
  </section>
</template>

<script>
import Header from "@/components/header/header.vue";
import LayoutVideoItem from "@/components/layout-info/layout-video-item.vue";
export default {
  components: {
    Header,
    LayoutVideoItem
  },
  data() {
    return {
      content: [
        {
          type: 1,
          title: " 嫦娥四号登陆月球表面，登陆的技术和经验，是否会和外国分享。",
          img:
            "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1847752171,2187735158&fm=26&gp=0.jpg",
          isTag: "高收益",
          shareTag: [
            { name: "游客", money: 15.0 },
            { name: "会员", money: 15.0 }
          ]
        },
        {
          type: 1,
          title: " 嫦娥四号登陆月球表面，登陆的技术和经验，是否会和外国分享。",
          img:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552023559132&di=c0a718bd96a13cdd872bcd0521a11e0a&imgtype=0&src=http%3A%2F%2Fimg.8794.cn%2F2017%2F0816%2F20170816032114400.png",
          isTag: "高佣金",
          shareTag: [
            { name: "游客", money: 15.0 },
            { name: "会员", money: 15.0 }
          ]
        },
        {
          type: 1,
          title: "不懂中国筷子的历史？我可以教你啊",
          img:
            "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3987050592,1188857939&fm=26&gp=0.jpg",
          shareTag: [
            { name: "游客", money: 15.0 },
            { name: "会员", money: 15.0 }
          ]
        },
        {
          type: 1,
          title: "不懂中国筷子的历史？我可以教你啊",
          img:
            "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3987050592,1188857939&fm=26&gp=0.jpg",
          shareTag: [
            { name: "游客", money: 15.0 },
            { name: "会员", money: 15.0 }
          ]
        },
        {
          type: 1,
          title: "不懂中国筷子的历史？我可以教你啊",
          img:
            "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3987050592,1188857939&fm=26&gp=0.jpg",
          shareTag: [
            { name: "游客", money: 15.0 },
            { name: "会员", money: 15.0 }
          ]
        },
        {
          type: 1,
          title: "不懂中国筷子的历史？我可以教你啊",
          img:
            "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3987050592,1188857939&fm=26&gp=0.jpg",
          shareTag: [
            { name: "游客", money: 15.0 },
            { name: "会员", money: 15.0 }
          ]
        }
      ]
    };
  },
  methods: {
    /**
     * @description: 前往视频详情
     * @param {Object} item 列表子项
     * @return: undefined
     * @Date: 2019-03-29 11:10:08
     */
    navToVideoDetails(item) {
      console.log(item);
      this.$router.push("/videosDetails");
    },
    onPullingDown() {
      // 模拟更新数据
      console.log("pulling down and load data");
      setTimeout(() => {
        if (this._isDestroyed) {
          return;
        }
        if (false) {
          // 如果有新数据
          // this.questData();
        } else {
          // 如果没有新数据
          this.$refs.scroll.forceUpdate();
        }
      }, 2000);
    },
    onPullingUp() {
      // 更新数据
      console.log("pulling up and load data");
      setTimeout(() => {
        if (this._isDestroyed) {
          return;
        }
        if (false) {
          // 如果有新数据
          // this.questData();
        } else {
          // 如果没有新数据
          this.$refs.scroll.forceUpdate();
        }
      }, 1500);
    }
  }
};
</script>

<style lang="less" scoped>
.video-container {
  width: 100%;
  height: 100%;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  .video-main {
    .video-list {
      padding: 0 15px;
      background-color: #ffffff;
    }
  }
}
</style>
