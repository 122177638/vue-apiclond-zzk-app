<template>
  <section class="myWallet-container">
    <!-- 头部背景 -->
    <i class="myWallet-top-bg vip"></i>
    <!-- header -->
    <Header class="myWallet-header">
      <div class="header-left" slot="left">
        <van-icon
          name="arrow-left"
          size="0.44rem"
          color="#ffffff"
          @click="$router.back()"
        />
      </div>
      <h2
        class="header-title"
        style="font-size: 0.36rem;
        color: #ffffff;
        font-weight: 500;"
        slot="title"
      >
        我的钱包
      </h2>
      <div slot="right" style="font-size:0.28rem;color:#ffffff;">
        余额提现
      </div>
    </Header>
    <!-- 主体 -->
    <div class="myWallet-main">
      <!-- 计数 -->
      <section class="myWallet-count">
        <div class="myWallet-count-item">
          <p class="item-key">我的余额</p>
          <p class="item-val">￥<strong>568.37</strong></p>
        </div>
        <div class="myWallet-count-item">
          <p class="item-key">累计提现</p>
          <p class="item-val">￥<strong>2681.25</strong></p>
        </div>
      </section>
      <!-- 收益列表 -->
      <section
        class="myWallet-profit"
        v-for="(item, index) in profitData"
        :key="index"
      >
        <div class="profit-title">
          <div class="title-left">
            <div class="title-icon">
              <van-icon name="manager" size="0.24rem" color="#ffffff" />
            </div>
            <h3 class="title-title">{{ item.name }}</h3>
          </div>
          <div class="title-right">
            <p class="title-money">
              ￥<strong>{{ item.money }}</strong>
            </p>
          </div>
        </div>
        <div :class="['profit-detail', { show: item.isShow }]">
          <ul class="profit-list">
            <li
              :class="['profit-item', { none: item.value <= 0 }]"
              v-for="(item, index) in item.moneyList"
              :key="index"
            >
              <p class="item-val">{{ item.value }}</p>
              <p class="item-key">{{ item.label }}</p>
            </li>
          </ul>
          <div class="profit-user">
            <p class="user-item">付费用户：{{ item.payUser }}</p>
            <p class="user-item public">免费用户：{{ item.freeUser }}</p>
          </div>
          <div class="profit-user-chart">
            <div
              class="chart-item pay"
              :style="
                `width:${getProfitPercent(item.payUser, item.freeUser, 1)}%;`
              "
            >
              {{ getProfitPercent(item.payUser, item.freeUser, 1) }}
            </div>
            <div
              class="chart-item free"
              :style="
                `width:${getProfitPercent(item.payUser, item.freeUser, 0)}%;`
              "
            >
              {{ getProfitPercent(item.payUser, item.freeUser, 0) }}
            </div>
            <div
              class="slicing"
              :style="
                `left: calc(${getProfitPercent(
                  item.payUser,
                  item.freeUser,
                  1
                )}% - 10px)`
              "
            ></div>
          </div>
        </div>
        <div class="profit-btn" @click="handleReaderChange(index)">
          <div class="btn-txt">{{ item.isShow ? "收起明细" : "查看明细" }}</div>
          <div class="btn-icon">
            <van-icon
              :name="item.isShow ? 'arrow-up' : 'arrow-down'"
              size="0.2rem"
              color="#ffffff"
            ></van-icon>
          </div>
        </div>
      </section>
    </div>
  </section>
</template>

<script>
import { Icon } from "vant";
import Header from "@/components/header/header.vue";
export default {
  components: {
    "van-icon": Icon,
    Header
  },
  data() {
    return {
      profitData: [
        {
          name: "今日个人收益",
          money: "1315.27",
          moneyList: [
            { label: "分享赚", value: 18.52 },
            { label: "邀请赚", value: 18.52 },
            { label: "出租赚", value: 18.52 },
            { label: "团购赚", value: 18.52 },
            { label: "旅游赚", value: 0 },
            { label: "云享赚", value: 0 }
          ],
          payUser: 968.1,
          freeUser: 329.17,
          isShow: true
        },
        {
          name: "今日个人收益",
          money: "1315.27",
          moneyList: [
            { label: "分享赚", value: 18.52 },
            { label: "邀请赚", value: 18.52 },
            { label: "出租赚", value: 18.52 },
            { label: "团购赚", value: 18.52 },
            { label: "旅游赚", value: 0 },
            { label: "云享赚", value: 0 }
          ],
          payUser: 968.1,
          freeUser: 329.17,
          isShow: true
        },
        {
          name: "今日个人收益",
          money: "1315.27",
          moneyList: [
            { label: "分享赚", value: 18.52 },
            { label: "邀请赚", value: 18.52 },
            { label: "出租赚", value: 18.52 },
            { label: "团购赚", value: 18.52 },
            { label: "旅游赚", value: 0 },
            { label: "云享赚", value: 0 }
          ],
          payUser: 968.1,
          freeUser: 329.17,
          isShow: true
        },
        {
          name: "今日个人收益",
          money: "1315.27",
          moneyList: [
            { label: "分享赚", value: 18.52 },
            { label: "邀请赚", value: 18.52 },
            { label: "出租赚", value: 18.52 },
            { label: "团购赚", value: 18.52 },
            { label: "旅游赚", value: 0 },
            { label: "云享赚", value: 0 }
          ],
          payUser: 968.1,
          freeUser: 329.17,
          isShow: true
        }
      ]
    };
  },
  mounted() {},
  methods: {
    /**
     * @description: 切换状态
     * @param {type}
     * @return: undefined
     * @Date: 2019-04-11 14:37:11
     */
    handleReaderChange(index) {
      this.profitData[index].isShow = !this.profitData[index].isShow;
    },
    /**
     * @description: 计算收益百分比
     * @param {type}
     * @return: 收益百分比
     * @Date: 2019-04-11 14:48:41
     */
    getProfitPercent(pay, free, rets = 1) {
      let total = pay + free;
      let result;
      if (rets) {
        result = Math.round((pay / total) * 100);
      } else {
        result = Math.round((free / total) * 100);
      }
      return result;
    }
  }
};
</script>

<style lang="less" scoped>
.myWallet-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  position: relative;
}
.vant-info-icon {
  display: inline-block;
  vertical-align: middle;
}
// 头部背景
.myWallet-top-bg {
  height: 225px;
  width: 100%;
  background: linear-gradient(
    85deg,
    rgba(255, 198, 101, 1) 0%,
    rgba(253, 145, 48, 1) 100%
  );
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
}
// 头部
.myWallet-header {
  background-color: transparent;
  height: auto !important;
  .header-info-location {
    width: 16px;
    height: 16px;
    background: url("../../assets/img/location.png") no-repeat;
    background-size: 100% 100%;
    display: inline-block;
    vertical-align: middle;
  }
  .address-name {
    font-size: 14px;
    color: #ffffff;
    display: inline-block;
    vertical-align: middle;
  }
  /deep/ .van-nav-bar {
    background-color: transparent;
  }
}
// 主体
.myWallet-main {
  position: relative;
  z-index: 1;
  flex: 1;
  height: 100%;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
    display: none;
  }
  // 计数
  .myWallet-count {
    padding: 25px 15px 30px;
    display: flex;
    .myWallet-count-item {
      flex: 1;
      width: 100%;
      overflow: hidden;
      color: #ffffff;
      .item-key {
        font-size: 14px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }
      .item-val {
        font-size: 18px;
        margin-top: 5px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        strong {
          font-size: 32px;
          font-weight: bold;
        }
      }
    }
  }
  // 收益
  .myWallet-profit {
    margin: 0 15px 15px;
    background-color: #ffffff;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    padding: 25px 0;
    // 标题
    .profit-title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 20px;
      .title-left {
        display: flex;
        align-items: center;
      }
      .title-icon {
        width: 22px;
        height: 22px;
        font-size:16px;
        background-color: #feab58;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
      }
      .title-title {
        margin-left: 10px;
        font-size: 15px;
        color: #282828;
        font-weight: bold;
      }
      .title-right {
        flex: 1;
        width: 100%;
        overflow: hidden;
        text-align: right;
        .title-money {
          font-size: 14px;
          color: #ff0a0a;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
          strong {
            font-size: 20px;
            font-weight: bold;
          }
        }
      }
    }
    // 详情
    .profit-detail {
      max-height: 0;
      transition: all 0.3s;
      overflow: hidden;
      // 收益列表
      .profit-list {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        padding-bottom: 20px;
        .profit-item {
          width: calc(100% / 3);
          text-align: center;
          margin-top: 25px;
          .item-key {
            margin-top: 5px;
            font-size: 14px;
            color: #656565;
          }
          .item-val {
            font-size: 18px;
            color: #ff0a0a;
          }
          &.none {
            .item-key {
              color: #c1c1c1;
            }
            .item-val {
              color: #c1c1c1;
            }
          }
        }
      }
      // 用户分类
      .profit-user {
        display: flex;
        padding: 20px;
        justify-content: space-between;
        align-items: center;
        .user-item {
          padding-left: 20px;
          font-size: 14px;
          color: #282828;
          position: relative;
          &::after {
            content: "";
            width: 12px;
            height: 12px;
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
            background-color: #ff5656;
            border-radius: 50%;
          }
          &.public::after {
            background-color: #ff7d30;
          }
        }
      }
      // 分类统计图
      .profit-user-chart {
        height: 22px;
        margin: 0 20px;
        display: flex;
        position: relative;
        overflow: hidden;
        .chart-item {
          font-size: 12px;
          color: #ffffff;
          line-height: 22px;
          text-align: center;
          &.pay {
            border-top-left-radius: 17px;
            border-bottom-left-radius: 17px;
            background-color: #ff5656;
            box-shadow: 0px 1.5px 3px rgba(255, 30, 30, 0.35);
          }
          &.free {
            border-top-right-radius: 17px;
            border-bottom-right-radius: 17px;
            box-shadow: 0px 1.5px 3px rgba(255, 155, 66, 0.35);
            background-color: #ff7d30;
          }
        }
        .slicing {
          width: 20px;
          height: 100%;
          position: absolute;
          left: -20px;
          background: linear-gradient(
            -60deg,
            #ff7d30 45%,
            #ffffff 50%,
            #ffffff 55%,
            #ff5656 55%,
            #ff5656 100%
          );
        }
      }
      &.show {
        max-height: 250px;
      }
    }
    // 按钮
    .profit-btn {
      height: 34px;
      background-color: #f6f8fa;
      border-radius: 17px;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 25px 20px 0;
      .btn-txt {
        font-size: 14px;
        color: #b1b1b1;
      }
      .btn-icon {
        margin-left: 5px;
        width: 15px;
        height: 15px;
        background-color: #feab58;
        border-radius: 50%;
        vertical-align: middle;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
}
</style>
