<template>
  <section class="msgCenterDetails-container">
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
        {{ this.$route.query.title || "消息中心详情" }}
      </h2>
      <div slot="right"></div>
    </Header>
    <Better-scroll class="msgCenterDetails-main">
      <ul class="msgCenterDetails-list">
        <li
          :class="
            `msgCenterDetails-item ${getTypeStyle(this.$route.query.title)}`
          "
        >
          <div class="item-left">
            <van-icon
              :name="getTypeIconName(this.$route.query.title)"
              size="0.28rem"
              color="#ffffff"
            />
          </div>
          <div class="item-right">
            <h3 class="item-title">{{ this.$route.query.title }}</h3>
            <p class="item-content">
              历史即将翻开崭新的一页，我们也将迎来充满希望和更具有挑战性的2019年！怀着美好的憧憬，带着新年的祝福，我们转转客也即将迎来4.0的全新版本升级！本次转转客4.0发布会我们还准备了丰盛的晚宴和精彩的节目与君共享，还安排了一系列抽奖环节，大奖连连不容错过！热情期待您的参与！
              报名参与请戳：
            </p>
            <p class="item-timer">2018-12-26 10:00</p>
          </div>
        </li>
        <li
          :class="
            `msgCenterDetails-item ${getTypeStyle(this.$route.query.title)}`
          "
        >
          <div class="item-left">
            <van-icon
              :name="getTypeIconName(this.$route.query.title)"
              size="0.28rem"
              color="#ffffff"
            />
          </div>
          <div class="item-right">
            <h3 class="item-title">{{ this.$route.query.title }}</h3>
            <p class="item-content">
              历史即将翻开崭新的一页，我们也将迎来充满希望和更具有挑战性的2019年！怀着美好的憧憬，带着新年的祝福，我们转转客也即将迎来4.0的全新版本升级！本次转转客4.0发布会我们还准备了丰盛的晚宴和精彩的节目与君共享，还安排了一系列抽奖环节，大奖连连不容错过！热情期待您的参与！
              报名参与请戳：
            </p>
            <p class="item-timer">2018-12-26 10:00</p>
          </div>
        </li>
      </ul>
    </Better-scroll>
  </section>
</template>

<script>
import { Icon } from "vant";
import Header from "@/components/header/header.vue";
export default {
  components: {
    Header,
    "van-icon": Icon
  },
  data() {
    return {};
  },
  created() {
    this.params = this.$route.params;
  },
  methods: {
    /**
     * @description: 获取风格样式
     * @return: className
     * @Date: 2019-04-10 16:29:02
     */
    getTypeStyle(title) {
      let result;
      switch (title) {
        case "系统通知":
          result = "style01";
          break;
        case "团队动态":
          result = "style02";
          break;
        case "订单动态":
          result = "style03";
          break;
        case "提现通知":
          result = "style04";
          break;
        case "活动通知":
          result = "style05";
          break;
        default:
          result = "style01";
          break;
      }
      return result;
    },
    /**
     * @description: 获取对应图标名字
     * @return: iconName
     */
    getTypeIconName(title) {
      let result;
      switch (title) {
        case "系统通知":
          result = "volume";
          break;
        case "团队动态":
          result = "friends";
          break;
        case "订单动态":
          result = "balance-list";
          break;
        case "提现通知":
          result = "bill";
          break;
        case "活动通知":
          result = "point-gift";
          break;
        default:
          result = "volume";
          break;
      }
      return result;
    }
  }
};
</script>

<style lang="less" scoped>
.msgCenterDetails-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  .msgCenterDetails-main {
    flex: 1;
    height: 100%;
    overflow: hidden;
    .msgCenterDetails-list {
      padding: 20px 15px;
      .msgCenterDetails-item {
        padding: 20px;
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.05);
        border-radius: 5px;
        background-color: #ffffff;
        display: flex;
        box-sizing: border-box;
        margin-bottom: 10px;
        position: relative;
        max-height: 500px;
        transition: all 0.3s linear;
        .item-left {
          width: 29px;
          height: 29px;
          border-radius: 50%;
          background-color: #5bf1cc;
          margin-right: 10px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .item-right {
          flex: 1;
          width: 100%;
          overflow: hidden;
          .item-title {
            font-size: 17px;
            color: #282828;
            line-height: 29px;
          }
          .item-content {
            margin: 10px 0;
            color: #282828;
            font-size: 14px;
            line-height: 28px;
          }
          .item-timer {
            font-size: 12px;
            color: #b1b1b1;
          }
        }
        &.style01 {
          .item-left {
            background-color: #ff7d30;
          }
        }
        &.style02 {
          .item-left {
            background-color: #4a9efe;
          }
        }
        &.style03 {
          .item-left {
            background-color: #fec84a;
          }
        }
        &.style04 {
          .item-left {
            background-color: #fb496a;
          }
        }
        &.style05 {
          .item-left {
            background-color: #b43ee7;
          }
        }
        &.hidden {
          max-height: 158px;
          .item-right {
            position: relative;
            &::after {
              content: "";
              width: 100%;
              height: 100%;
              position: absolute;
              left: 0;
              top: 0;
              right: 0;
              bottom: 0;
              background: linear-gradient(
                to bottom,
                rgba(255, 255, 255, 0) 50%,
                rgba(255, 255, 255, 0.78) 60%,
                rgba(255, 255, 255, 1) 100%
              );
            }
          }
        }
      }
    }
  }
}
</style>
