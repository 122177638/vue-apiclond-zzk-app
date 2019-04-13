<template>
  <section class="share-details-container">
    <!-- header -->
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
        详情
      </h2>
      <div
        slot="right"
        style="font-size:0.3rem;color:#282828;"
        @click="navToShareRules"
      >
        分享规则
      </div>
    </Header>
    <!-- main -->
    <section class="share-details-main">
      <div class="details-content">
        <div class="details-header">
          <h2 class="details-title">
            陈凯歌再谈《霸王别姬》：扮演程蝶衣 是张国荣的宿命
          </h2>
          <div class="details-ins">
            <div class="details-time">12分钟前</div>
            <div class="details-share">
              <i class="share-icon"></i>
              <span class="share-num">24654163次</span>
            </div>
          </div>
        </div>
        <div class="details-info-content">
          <p>
            日前，北京电影学院七八级校友陈凯歌导演
            最近带着《霸王别姬》回到了母校，在映后交流
            阶段谈到这部影片的缘起、剧本创作、选角以及 给他带来的影响。
          </p>
          <img
            src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3961265890,1131901724&fm=200&gp=0.jpg"
            alt=""
          />
          <p>
            再次回到学校，今天看到这么多老师同学们
            在场感到非常的开心，虽然距离我入学已经四十
            年了，可是对这个学校，对这个地方，仍然有很
            深的个人情感，谢谢今天大家来。
            光阴似箭，霸王别姬这部电影问世已经有二
            十五年时光了，当年参与拍摄的有几百个工作人
            员，有些都已经不在了，还在的这些工作人员提
            起拍摄的那些事儿，都还和昨天一样非常感慨。
          </p>
          <p>
            我的两位非常亲密的合作者顾长卫老师、陶
            经老师，当年风华正茂，都是三十几岁的年龄，
            我的同校同届的同学，却创造出那样雄浑壮丽的 声音和画面，很了不起。
          </p>
          <p>
            我现在到了那个地方，自己对自己说：“真是
            风流总被雨打风吹去”，但即令如此，我已生了很
            多关于无常的感慨，唯一留下来的是这部电影， 二十五年来，一直都在这。
          </p>
        </div>
      </div>
    </section>
    <!-- 悬浮按钮 -->
    <div class="share-btn-box">
      <div class="share-btn-left">
        <span class="share-tips">分享本文章赚</span>
        <strong class="share-strong">￥18.00</strong>
      </div>
      <div class="share-btn-right" @click="isshow = true">
        <span class="share-btn-txt">分享</span>
        <i class="share-icon"></i>
      </div>
    </div>
    <!-- 分享 -->
    <Share-popup v-model="isshow"></Share-popup>
  </section>
</template>

<script>
import Header from "@/components/header/header.vue";
import SharePopup from "@/components/sharePopup/sharePopup.vue";

import { Icon } from "vant";
export default {
  components: {
    Header,
    SharePopup,
    "van-icon": Icon
  },
  data() {
    return {
      isshow: false
    };
  },
  methods: {
    /**
     * @description: 跳转分享规则
     * @return: undefined
     * @Date: 2019-03-29 09:53:44
     */
    navToShareRules() {
      this.$router.push("/shareRule");
    }
  }
};
</script>

<style lang="less" scoped>
.share-details-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  .share-details-main {
    flex: 1;
    height: 100%;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    background-color: #ffffff;
    box-sizing: border-box;
    &::-webkit-scrollbar {
      display: none;
    }
    // 文章内容
    .details-content {
      background-color: #ffffff;
      padding: 15px 15px 10px;
      .details-header {
        .details-title {
          font-size: 20px;
          font-weight: bold;
          color: #282828;
          line-height: 30px;
          margin-bottom: 15px;
        }
        .details-ins {
          display: flex;
          justify-content: space-between;
          align-items: center;
          .details-time {
            font-size: 14px;
            color: #b1b1b1;
          }
          .share-icon {
            width: 18px;
            height: 14px;
            background: url("../../assets/img/forward.png") no-repeat;
            background-size: 100% 100%;
            display: inline-block;
            vertical-align: middle;
          }
          .share-num {
            font-size: 14px;
            color: #b1b1b1;
          }
        }
      }
      .details-info-content {
        p {
          padding: 20px 0;
          font-size: 16px;
          color: #282828;
          line-height: 27px;
        }
        img {
          width: 100%;
          height: 192.5px;
        }
      }
    }
  }
  // 悬浮按钮
  .share-btn-box {
    display: flex;
    align-items: center;
    width: 100%;
    box-sizing: border-box;
    background-color: #ffffff;
    border-top: 1px solid #f3f3f3;
    .share-btn-left {
      flex: 1;
      text-align: center;
      line-height: 46px;
      .share-tips {
        font-size: 18px;
        color: #282828;
      }
      .share-strong {
        font-size: 18px;
        color: rgba(255, 140, 52, 1);
      }
    }
    .share-btn-right {
      width: 120px;
      line-height: 46px;
      background: rgba(255, 140, 52, 1);
      text-align: center;
      font-size: 0;
      .share-btn-txt {
        font-size: 18px;
        color: #ffffff;
        display: inline-block;
        vertical-align: middle;
      }
      .share-icon {
        margin-left: 5px;
        width: 16px;
        height: 16px;
        display: inline-block;
        background: url("../../assets/img/share.png") no-repeat;
        background-size: 100% 100%;
        vertical-align: middle;
      }
    }
  }
}
</style>
