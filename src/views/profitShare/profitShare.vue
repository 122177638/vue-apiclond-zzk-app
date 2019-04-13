<template>
  <section class="profitShare_container">
    <Header>
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
        style="font-size: 0.36rem;color: #ff7d30;font-weight: 500;"
        slot="title"
      >
        分享赚
      </h2>
      <div slot="right"></div>
    </Header>
    <!-- tab-main -->
    <van-tabs
      v-model="activeIndex"
      title-active-color="#FF7D30"
      title-inactive-color="#656565"
      color="#FF7D30"
      :line-width="18"
      swipeable
      sticky
    >
      <!-- menues按钮 -->
      <div class="tab-menus" @click="handleMenus()">
        <i class="tab-menus-shadow"></i>
        <i class="tab-menus-icon"></i>
      </div>
      <!-- fill填充物 -->
      <div class="tab-menus-fill" slot="nav-right"></div>
      <!-- 主体内容 -->
      <van-tab
        v-for="(item, index) in menusData"
        :key="index"
        :title="item.title"
      >
      </van-tab>
      <!-- content -->
      <Better-scroll
        ref="scroll"
        :pullDownRefresh="{ threshold: 50, stop: 40, txt: '刷新成功' }"
        :pullUpLoad="{
          threshold: 50,
          txt: { more: '上拉加载更多', noMore: '暂无更多数据' }
        }"
        @pullingDown="onPullingDown"
        @pullingUp="onPullingUp"
        v-if="infoData.length > 0"
      >
        <!-- 渲染数据 -->
        <div class="info-list">
          <template v-for="(infoItem, index) in infoData">
            <Layout-video-item
              @click.native="handleNavToDetailes(infoItem)"
              :item="infoItem"
              :key="index"
              v-if="infoItem.infoType == 'video'"
            ></Layout-video-item>

            <Layout-article-item
              @click.native="handleNavToDetailes(infoItem)"
              :item="infoItem"
              :key="index"
              v-if="infoItem.infoType == 'article'"
            ></Layout-article-item>
          </template>
        </div>
      </Better-scroll>
      <NoData v-else />
    </van-tabs>
    <!-- menus-popup -->
    <van-popup
      v-model="isMenusPopupShow"
      position="bottom"
      class="menus-popup-container"
    >
      <div class="menus-popup-title">
        <van-icon
          name="cross"
          size="22px"
          color="#282828"
          @click.native="isMenusPopupShow = false"
        />
      </div>
      <div class="menus-popup-content">
        <section class="menus-popup-allType">
          <h2 class="menus-popup-subtitle">
            全部分类<span class="subtitle-tips">点击切换分类</span>
          </h2>
          <ul class="category-list">
            <li
              class="category-item"
              v-for="(item, index) in menusData"
              :key="index"
              @click="switchMenusType(index)"
            >
              {{ item.title }}
            </li>
          </ul>
        </section>
      </div>
    </van-popup>
  </section>
</template>

<script>
import Header from "@/components/header/header.vue";
import LayoutArticleItem from "@/components/layout-info/layout-article-item.vue";
import LayoutVideoItem from "@/components/layout-info/layout-video-item.vue";
import NoData from "@/components/noData/noData.vue";

import { Icon, Tab, Tabs, Popup } from "vant";
export default {
  components: {
    Header,
    "van-icon": Icon,
    "van-tab": Tab,
    "van-tabs": Tabs,
    "van-popup": Popup,
    LayoutArticleItem,
    LayoutVideoItem,
    NoData
  },
  data() {
    return {
      activeIndex: 0,
      isMenusPopupShow: false,
      infoData: [
        {
          infoType: "article",
          type: 0,
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
          infoType: "article",
          type: 1,
          title: " 嫦娥四号登陆月球表面，登陆的技术和经验，是否会和外国分享。",
          img: [
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1542650171,4231117759&fm=26&gp=0.jpg",
            "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=4267526740,3256690651&fm=26&gp=0.jpg",
            "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2114821591,513102869&fm=26&gp=0.jpg"
          ],
          isTag: "高收益",
          shareTag: [
            { name: "游客", money: 15.0 },
            { name: "会员", money: 15.0 }
          ]
        },
        {
          infoType: "article",
          type: 2,
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
          infoType: "video",
          type: 1,
          title: " 嫦娥四号登陆月球表面，登陆的技术和经验，是否会和外国分享。",
          img:
            "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1847752171,2187735158&fm=26&gp=0.jpg",
          isTag: "高收益",
          shareTag: [
            { name: "游客", money: 15.0 },
            { name: "会员", money: 15.0 }
          ]
        }
      ],
      menusData: [
        { title: "推荐", typeid: 0 },
        { title: "视频", typeid: 1 },
        { title: "热点", typeid: 2 },
        { title: "小说", typeid: 3 },
        { title: "社会", typeid: 4 },
        { title: "健康", typeid: 5 },
        { title: "情感", typeid: 6 },
        { title: "搞笑", typeid: 7 },
        { title: "生活", typeid: 8 },
        { title: "科技", typeid: 9 },
        { title: "学术", typeid: 10 }
      ]
    };
  },
  watch: {
    activeIndex(nowval, oldval) {
      if (nowval !== oldval) {
        console.log(this.menusData[nowval]);
      }
    }
  },
  methods: {
    /**
     * @description: 操作菜单栏
     * @return: undefined
     * @Date: 2019-03-28 10:06:38
     */
    handleMenus() {
      this.isMenusPopupShow = !this.isMenusPopupShow;
      console.log(this.activeIndex);
    },
    /**
     * @description: 切换分类
     * @return: undefined
     * @Date: 2019-03-28 17:09:05
     */
    switchMenusType(index) {
      this.activeIndex = index;
      this.isMenusPopupShow = !this.isMenusPopupShow;
    },
    /**
     * @description: 跳转详情
     * @param {Object} 列表子项
     * @return: undefined
     * @Date: 2019-03-28 17:19:59
     */
    handleNavToDetailes() {
      this.$router.push("/profitShareDetails");
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
.profitShare_container {
  height: 100%;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  .tab-menus-fill {
    padding: 0 22px;
  }
  .tab-menus {
    width: 44px;
    position: absolute;
    right: 0;
    height: 42px;
    top: 1px;
    z-index: 100;
    background: linear-gradient(
      left,
      rgba(255, 255, 255, 0.7),
      rgba(255, 255, 255, 1) 35%
    );
    display: flex;
    justify-content: center;
    align-items: center;
    .tab-menus-icon {
      width: 24px;
      height: 24px;
      background: url("../../assets/img/menus.png") no-repeat;
      background-size: 100% 100%;
      display: block;
    }
    .tab-menus-shadow {
      width: 10px;
      height: 100%;
      background: url("../../assets/img/menus_shadow.png") no-repeat;
      background-size: 100% 100%;
      position: absolute;
      left: -10px;
      right: 0;
    }
  }
  .info-list {
    padding: 0 15px;
    background-color: #ffffff;
  }
  // menus-popup
  .menus-popup-container {
    height: calc(100% - 20px);
    width: 100%;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    .menus-popup-title {
      padding: 15px;
      font-size: 0;
      border-bottom: 1px solid #f7f7f7;
    }
    .menus-popup-content {
      .menus-popup-allType {
        .menus-popup-subtitle {
          padding: 15px 10px;
          font-size: 18px;
          font-weight: bold;
          color: #282828;
          .subtitle-tips {
            font-size: 12px;
            color: #999999;
            margin-left: 10px;
          }
        }
        .category-list {
          padding: 0 10px;
          display: flex;
          flex-wrap: wrap;
          .category-item {
            margin-top: 10px;
            width: calc(100% / 4 - (30px / 4));
            margin-right: 10px;
            height: 45px;
            line-height: 45px;
            font-size: 16px;
            text-align: center;
            border-radius: 5px;
            background-color: #f4f5f7;
            &:nth-child(4n) {
              margin-right: 0;
            }
          }
        }
      }
    }
  }

  /deep/ .van-tabs {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  /deep/ .van-tabs__content {
    flex: 1;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      width: 0;
      height: 0;
      color: transparent;
    }
  }
  /deep/ .van-tabs__line {
    bottom: 20px;
  }
  // /deep/ .van-tab__pane {
  //   height: 100%;
  // }
  /deep/ .van-tab--active .van-ellipsis {
    font-size: 16px;
    font-weight: bold;
  }
  /deep/ .van-tabs__wrap--scrollable .van-tab {
    flex: none !important;
    padding: 0 13px;
  }
}
</style>
