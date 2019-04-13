<template>
  <section class="msgCenter-container">
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
        消息中心
      </h2>
      <div slot="right"></div>
    </Header>
    <Better-scroll class="msgCenter-main">
      <!-- 未读消息提醒 -->
      <div class="msgCenter-top">
        <div class="msgCenter-title">
          <van-icon
            name="smile-comment-o"
            size="0.44rem"
            color="#FF7D30"
            class="msg-icon"
          />
          <span class="msg-txt">您有<strong>3</strong>条未读消息</span>
        </div>
      </div>
      <!-- 消息列表 -->
      <ul class="msgCenter-list">
        <li
          :class="`msgCenter-item ${getTypeStyle(item.title)}`"
          v-for="(item, index) in msgList"
          :key="index"
          @click="
            $router.push({
              path: `/msgCenterDetails/${item.typeId}`,
              query: { title: item.title }
            })
          "
        >
          <div :class="['item-left', { news: item.isNews }]">
            <van-icon
              :name="getTypeIconName(item.title)"
              size="0.44rem"
              color="#ffffff"
            />
          </div>
          <div class="item-right">
            <h3 class="item-title">{{ item.title }}</h3>
            <p class="item-content">{{ item.content }}</p>
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
    return {
      msgList: [
        {
          typeId: 1,
          title: "系统通知",
          content: "我在年会现场等你!",
          isNews: 0
        },
        {
          typeId: 2,
          title: "团队动态",
          content: "新的小伙伴 “魑魅魍魉” 加入您的团队！!",
          isNews: 1
        },
        {
          typeId: 3,
          title: "订单动态",
          content: "您的订单 “朵颐日式餐前鲸...” 已发货！",
          isNews: 0
        },
        {
          typeId: 4,
          title: "提现通知",
          content: "暂无通知",
          isNews: 0
        },
        {
          typeId: 5,
          title: "活动通知",
          content: "暂无通知",
          isNews: 0
        }
      ]
    };
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
.msgCenter-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  .msgCenter-main {
    flex: 1;
    height: 100%;
    overflow: hidden;
    .msgCenter-top {
      padding-top: 25px;
    }
    .msgCenter-title {
      margin: auto;
      width: 210px;
      height: 44px;
      line-height: 44px;
      background-color: #ffffff;
      box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.05);
      border-radius: 22px;
      text-align: center;
      .msg-txt {
        font-size: 15px;
        color: #282828;
        display: inline-block;
        vertical-align: middle;
        strong {
          font-size: 20px;
          color: #ff0a0a;
          margin: 0 2px;
        }
      }
      .msg-icon {
        vertical-align: middle;
      }
    }
    .msgCenter-list {
      padding: 25px 15px;
      .msgCenter-item {
        padding: 15px;
        background: rgba(255, 255, 255, 1);
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.05);
        display: flex;
        align-items: center;
        border-radius: 5px;
        margin-bottom: 15px;
        .item-left {
          width: 54px;
          height: 54px;
          border-radius: 50%;
          background-color: #5bf1cc;
          margin-right: 10px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          &.news::after {
            content: "";
            width: 7px;
            height: 7px;
            background-color: #ff0a0a;
            position: absolute;
            right: 0;
            top: 0;
            border-radius: 50%;
          }
        }
        .item-right {
          flex: 1;
          width: 100%;
          overflow: hidden;
          .item-title {
            font-size: 18px;
            color: #282828;
            line-height: 25px;
          }
          .item-content {
            color: #989898;
            font-size: 14px;
            line-height: 20px;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
          }
        }
        &:nth-last-child(1) {
          margin-bottom: 0;
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
      }
    }
  }
}
</style>
