<template>
  <section class="home-container">
    <Header></Header>
    <b-scroll
      class="home-main"
      ref="scroll"
      :pullDownRefresh="{ threshold: 50, stop: 50, txt: '刷新成功' }"
      :pullUpLoad="{
        threshold: 50,
        txt: { more: '下拉加载更多', noMore: '暂无更多数据' }
      }"
      @pullingDown="onPullingDown"
      @pullingUp="onPullingUp"
    >
      <Banner></Banner>
      <MenusGrid
        :data="navlistArr"
        :slice="8"
        @selectChange="navigationTo"
      ></MenusGrid>
      <!-- 头条推送 -->
      <section class="socketInfo-container">
        <div class="socketInfo-wrap">
          <div class="socketInfo-left">
            <h3 class="logo-name">转转</h3>
            <p class="logo-type">头条</p>
          </div>
          <div class="socketInfo-right">
            <marquee :interval="2000" direction="down">
              <marquee-item
                v-for="i in 5"
                :key="i"
                @click.native="onClick(i)"
                class="socketInfo-txt"
              >
                <span class="infoColor"> 千城墨白0{{ i }}购买了 </span>
                Ps零基础从入门Ps零基础从入门</marquee-item
              >
            </marquee>
            <marquee :interval="2500" style="margin-top:7px;">
              <marquee-item
                v-for="i in 5"
                :key="i"
                @click.native="onClick(i)"
                class="socketInfo-txt"
              >
                <span class="infoColor"> 用户我爱转转客0{{ i }} </span>
                加入了转转客会员
              </marquee-item>
            </marquee>
          </div>
        </div>
      </section>
      <!-- 推荐头条信息 -->
      <section
        class="layout-public-container"
        v-for="(item, index) in headInfoData"
        :style="
          `background-color:${item.type == 'goods' ? 'transparent' : '#ffffff'}`
        "
        :key="index"
      >
        <Layout-public-title :icon="item.icon">{{
          item.title
        }}</Layout-public-title>
        <!-- 图文模板 -->
        <template v-if="item.type == 'text'">
          <Layout-article-item
            @click.native="handleNavToDetailes(infoItem)"
            :item="infoItem"
            v-for="(infoItem, index) in item.content"
            :key="index"
          ></Layout-article-item>
        </template>
        <!-- 视频模板 -->
        <template v-if="item.type == 'video'">
          <Layout-video-item
            @click.native="handleNavToDetailes(infoItem)"
            :item="infoItem"
            v-for="(infoItem, index) in item.content"
            :key="index"
          ></Layout-video-item>
        </template>
        <!-- 商品模板 -->
        <template v-if="item.type == 'goods'">
          <Layout-goods-item
            @click.native="handleNavToDetailes(infoItem)"
            :item="infoItem"
            v-for="(infoItem, index) in item.content"
            :key="index"
          ></Layout-goods-item>
        </template>
      </section>
    </b-scroll>
  </section>
</template>

<script>
import Header from "@/components/header/header.vue";
import Banner from "@/components/banner/banner.vue";
import MenusGrid from "@/components/menusGrid/menusGrid.vue";
import Marquee from "@/components/marquee/marquee.vue";
import MarqueeItem from "@/components/marquee/marquee-item.vue";
import LayoutArticleItem from "@/components/layout-info/layout-article-item.vue";
import LayoutVideoItem from "@/components/layout-info/layout-video-item.vue";
import LayoutGoodsItem from "@/components/layout-info/layout-goods-item.vue";
import LayoutPublicTitle from "@/components/layout-info/layout-public-title.vue";
export default {
  components: {
    Header,
    Banner,
    MenusGrid,
    Marquee,
    MarqueeItem,
    LayoutPublicTitle,
    LayoutArticleItem,
    LayoutGoodsItem,
    LayoutVideoItem
  },
  data() {
    return {
      navlistArr: [
        { title: "分享赚", icon: require("@/assets/Share_iCon.png") },
        { title: "分享赚", icon: require("@/assets/Share_iCon.png") },
        { title: "分享赚", icon: require("@/assets/Share_iCon.png") },
        { title: "分享赚", icon: require("@/assets/Share_iCon.png") },
        { title: "分享赚", icon: require("@/assets/Share_iCon.png") },
        { title: "分享赚", icon: require("@/assets/Share_iCon.png") },
        { title: "分享赚", icon: require("@/assets/Share_iCon.png") },
        { title: "分享赚", icon: require("@/assets/Share_iCon.png") },
        { title: "分享赚", icon: require("@/assets/Share_iCon.png") },
        { title: "分享赚", icon: require("@/assets/Share_iCon.png") }
      ],
      headInfoData: [
        {
          title: "爆文推荐",
          icon:
            "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1382591489,2254826798&fm=26&gp=0.jpg",
          type: "text",
          content: [
            {
              type: 0,
              title:
                " 嫦娥四号登陆月球表面，登陆的技术和经验，是否会和外国分享。",
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
              title:
                " 嫦娥四号登陆月球表面，登陆的技术和经验，是否会和外国分享。",
              img: [
                "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1542650171,4231117759&fm=26&gp=0.jpg",
                "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=4267526740,3256690651&fm=26&gp=0.jpg",
                "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2114821591,513102869&fm=26&gp=0.jpg"
              ],
              isTag: 1,
              shareTag: [
                { name: "游客", money: 15.0 },
                { name: "会员", money: 15.0 }
              ]
            },
            {
              type: 2,
              title:
                "嫦娥四号登陆月球表面，登陆的技术和经验，是否会和外国分享。",
              img:
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552023559132&di=c0a718bd96a13cdd872bcd0521a11e0a&imgtype=0&src=http%3A%2F%2Fimg.8794.cn%2F2017%2F0816%2F20170816032114400.png",
              isTag: "高佣金",
              shareTag: [
                { name: "游客", money: 15.0 },
                { name: "会员", money: 15.0 }
              ]
            },
            {
              type: 2,
              title:
                "嫦娥四号登陆月球表面，登陆的技术和经验，是否会和外国分享。",
              img:
                "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3987050592,1188857939&fm=26&gp=0.jpg",
              shareTag: [
                { name: "游客", money: 15.0 },
                { name: "会员", money: 15.0 }
              ]
            }
          ]
        },
        {
          title: "视频专区",
          icon:
            "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1382591489,2254826798&fm=26&gp=0.jpg",
          type: "video",
          content: [
            {
              type: 1,
              title:
                " 嫦娥四号登陆月球表面，登陆的技术和经验，是否会和外国分享。",
              img:
                "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1847752171,2187735158&fm=26&gp=0.jpg",
              isTag: "高收益",
              shareTag: [
                { name: "游客", money: 15.0 },
                { name: "会员", money: 15.0 }
              ]
            },
            {
              type: 2,
              title:
                " 嫦娥四号登陆月球表面，登陆的技术和经验，是否会和外国分享。",
              img:
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552023559132&di=c0a718bd96a13cdd872bcd0521a11e0a&imgtype=0&src=http%3A%2F%2Fimg.8794.cn%2F2017%2F0816%2F20170816032114400.png",
              isTag: "高佣金",
              shareTag: [
                { name: "游客", money: 15.0 },
                { name: "会员", money: 15.0 }
              ]
            },
            {
              type: 2,
              title: "不懂中国筷子的历史？我可以教你啊",
              img:
                "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3987050592,1188857939&fm=26&gp=0.jpg",
              shareTag: [
                { name: "游客", money: 15.0 },
                { name: "会员", money: 15.0 }
              ]
            }
          ]
        },
        {
          type: "goods",
          title: "好物精选",
          icon:
            "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1382591489,2254826798&fm=26&gp=0.jpg",
          content: [
            {
              title: "清纯可爱宋祖儿小哪咤，陪打王者荣耀, 机会难得，不要错过",
              img:
                "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1847752171,2187735158&fm=26&gp=0.jpg",
              shareTag: [
                { name: "会员", money: 18.0 },
                { name: "会长", money: 20.0 },
                { name: "股东", money: 30.0 }
              ]
            },
            {
              title: "清纯可爱宋祖儿小哪咤，陪打王者荣耀, 机会难得，不要错过",
              img:
                "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1847752171,2187735158&fm=26&gp=0.jpg",
              shareTag: [
                { name: "会员", money: 18.0 },
                { name: "会长", money: 20.0 },
                { name: "股东", money: 30.0 }
              ]
            },
            {
              title: "清纯可爱宋祖儿小哪咤，陪打王者荣耀, 机会难得，不要错过",
              img:
                "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1847752171,2187735158&fm=26&gp=0.jpg",
              shareTag: [
                { name: "会员", money: 18.0 },
                { name: "会长", money: 20.0 },
                { name: "股东", money: 30.0 }
              ]
            }
          ]
        }
      ]
    };
  },
  mounted() {},
  methods: {
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
    },
    /**
     * @description: 子组件导航事件
     * @param {item} 选中props对象
     * @param {index} 当前group内选中
     * @return: undefined
     * @Date: 2019-03-07 10:36:54
     */
    navigationTo(item) {
      console.log(item);
    },
    /**
     * @description: 头条信息item事件
     * @param {item} 选中props对象
     * @return: undefined
     * @Date: 2019-03-11 10:43:28
     */
    handleNavToDetailes(item) {
      this.$router.push("/headInfoDetails");
    }
  }
};
</script>

<style lang="less" scoped>
.infoColor {
  color: #282828;
}
.home-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .home-main {
    flex: 1;
    // overflow-y: scroll;
    // -webkit-overflow-scrolling: touch;
  }
}

.socketInfo-container {
  margin: 10px 0;
  .socketInfo-wrap {
    background-color: #ffffff;
    display: flex;
    padding: 17px 0;
    .socketInfo-left {
      padding: 0 20px;
      position: relative;
      &::after {
        content: "";
        height: 34px;
        width: 1px;
        background-color: #e6e7e9;
        position: absolute;
        right: 0;
        top: 50%;
        margin-top: -17px;
      }
      .logo-name {
        width: 54px;
        height: 25px;
        line-height: 25px;
        font-size: 19px;
        color: #ffffff;
        font-weight: bold;
        background-color: #ff7d30;
        text-align: center;
      }
      .logo-type {
        text-align: center;
        font-size: 19px;
        font-weight: bold;
        color: #282828;
      }
    }
    .socketInfo-right {
      flex: 1;
      margin: 0 15px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      justify-content: center;
      .socketInfo-txt {
        text-align: left;
        font-size: 14px;
        color: #ff7d30;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }
    }
  }
}

.layout-public-container {
  padding: 0 15px;
  overflow: hidden;
}
</style>
