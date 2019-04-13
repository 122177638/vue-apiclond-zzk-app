<template>
  <section class="myInfo-container">
    <!-- 头部背景 -->
    <i class="myInfo-top-bg vip"></i>
    <!-- 头部 -->
    <Header class="myInfo-header">
      <div class="myInfo-top-left" slot="left">
        <i class="header-info-location"></i>
        <span class="address-name">惠州</span>
      </div>
      <div class="myInfo-top-right" slot="right">
        <van-icon
          name="setting-o"
          class="vant-info-icon"
          size="0.44rem"
          color="#ffffff"
          style="margin-right:20px;"
          @click="$router.push('/systemSetup')"
        />
        <van-icon
          name="chat-o"
          class="vant-info-icon"
          size="0.44rem"
          info="9"
          color="#ffffff"
          @click="$router.push('/msgCenter')"
        />
      </div>
    </Header>
    <!-- 主体 -->
    <Better-scroll class="myInfo-main">
      <!-- 个人信息 -->
      <section class="myInfo-user-section">
        <div class="myInfo-user-top">
          <div class="user-top-left">
            <img
              src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2562216169,2976611441&fm=27&gp=0.jpg"
              class="user-img"
              alt=""
            />
            <div class="myInfo-user-box">
              <h2 class="user-name">千城墨白</h2>
              <div class="user-label">
                <span class="user-label-item">
                  <i class="user-label-icon"></i>
                  <span class="user-label-name">游客</span>
                </span>
                <span class="user-label-item vip">
                  <i class="user-label-icon"></i>
                  <span class="user-label-name">会员</span>
                </span>
              </div>
            </div>
          </div>
          <div class="user-top-right">升级为股东</div>
        </div>
        <ul class="myInfo-user-list">
          <li class="user-assets-item" @click="$router.push('/myWallet')">
            <strong class="assets-value">568.37</strong>
            <br />
            <span class="assets-name">我的钱包</span>
          </li>
          <li class="user-assets-item">
            <strong class="assets-value">225</strong>
            <br />
            <span class="assets-name" @click="$router.push('/myGang')">
              我的团队
            </span>
          </li>
          <li class="user-assets-item">
            <i class="erweima-icon"></i>
            <br />
            <span class="assets-name">我的邀请码</span>
          </li>
        </ul>
      </section>
      <!-- 数据中心 -->
      <section class="myInfo-record-section">
        <div class="record-title">
          <div class="title-left">
            <i class="title-icon"></i><span class="title-name">数据中心</span>
          </div>
          <div class="title-right">2018-12-25</div>
        </div>
        <ul class="record-list">
          <li class="record-item">
            <p class="record-tp">活跃时间</p>
            <p class="record-bt">
              <span class="record-value">59</span>
              <span class="record-unit">min</span>
            </p>
          </li>
          <li class="record-item">
            <p class="record-tp">分享次数</p>
            <p class="record-bt">
              <span class="record-value">96</span>
              <span class="record-unit">次</span>
            </p>
          </li>
          <li class="record-item">
            <p class="record-tp">新增会员</p>
            <p class="record-bt">
              <span class="record-value">3</span>
              <span class="record-unit">人</span>
            </p>
          </li>
          <li class="record-item">
            <p class="record-tp">预计收益</p>
            <p class="record-bt">
              <span class="record-value">86.56</span>
              <span class="record-unit">元</span>
            </p>
          </li>
        </ul>
      </section>
      <!-- 导航 -->
      <section class="myInfo-nav-section">
        <ul class="nav-list">
          <li class="nav-item" v-for="(item, index) in navData" :key="index">
            <div class="nav-item-left">
              <i :class="`nav-name-icon ${item.iconName}`"></i>
              <span class="nav-name">{{ item.name }}</span>
            </div>
            <div class="nav-item-right">
              <span class="nav-tips">{{ item.tips }}</span>
              <van-icon
                name="arrow"
                class="vant-info-icon"
                size="0.4rem"
                color="#B1B1B1"
              />
            </div>
          </li>
        </ul>
      </section>
    </Better-scroll>
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
      navData: [
        { name: "每日签到", iconName: "icon01", tips: "今日未签" },
        { name: "素材中心", iconName: "icon01", tips: "" },
        { name: "我的订单", iconName: "icon01", tips: "" },
        { name: "分享记录", iconName: "icon01", tips: "" },
        { name: "我的收藏", iconName: "icon01", tips: "" },
        { name: "我的课程", iconName: "icon01", tips: "" }
      ]
    };
  },
  methods: {}
};
</script>

<style lang="less" scoped>
.myInfo-container {
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
.myInfo-top-bg {
  height: 160px;
  width: 100%;
  background-color: #ff7d30;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  &.vip {
    background: linear-gradient(
      176deg,
      rgba(255, 193, 48, 1) 0%,
      rgba(255, 125, 48, 1) 100%
    );
  }
}
// 头部
.myInfo-header {
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
.myInfo-main {
  position: relative;
  z-index: 1;
  flex: 1;
  // 个人信息
  .myInfo-user-section {
    margin: 0 15px 14px;
    background-color: #ffffff;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    .myInfo-user-top {
      display: flex;
      padding: 20px;
      align-items: center;
      justify-content: space-between;
      .user-top-left {
        display: flex;
        flex: 1;
        overflow: hidden;
        margin-right: 10px;
        .user-img {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          display: block;
          margin-right: 10px;
        }
        .myInfo-user-box {
          flex: 1;
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          overflow: hidden;
          .user-name {
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            font-size: 18px;
            font-weight: bold;
          }
          .user-label {
            margin-top: 5px;
          }
          .user-label-item {
            width: 60px;
            height: 22px;
            line-height: 22px;
            text-align: center;
            display: inline-block;
            background-color: #f6f8fa;
            border-radius: 11px;
            .user-label-icon {
              width: 14px;
              height: 12px;
              background: url("../../assets/img/plane.png") no-repeat;
              background-size: 100% 100%;
              display: inline-block;
              vertical-align: middle;
            }
            .user-label-name {
              font-size: 11px;
              color: #b1b1b1;
              display: inline-block;
              vertical-align: middle;
            }
            &.vip {
              .user-label-icon {
                background: url("../../assets/img/type_vip.png") no-repeat;
                background-size: 100% 100%;
              }
              .user-label-name {
                color: #ff7d30;
              }
            }
          }
        }
      }
      .user-top-right {
        align-self: baseline;
        margin-top: 2px;
        width: 90px;
        height: 29px;
        text-align: center;
        border-radius: 17px;
        line-height: 29px;
        background-color: #ff7d30;
        color: #ffffff;
        font-size: 13px;
        box-shadow: 0px 5px 10px rgba(255, 125, 48, 0.35);
      }
    }
    .myInfo-user-list {
      display: flex;
      align-items: center;
      justify-content: center;
      padding-bottom: 20px;
      .user-assets-item {
        flex: 1;
        text-align: center;
        position: relative;
        &::after {
          content: "";
          width: 1px;
          height: 25px;
          background-color: #c3c3c3;
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
        }
        &:nth-last-child(1)::after {
          background-color: transparent;
        }
        .assets-value {
          font-size: 22px;
          color: #ff7d30;
          font-weight: bold;
        }
        .erweima-icon {
          width: 22px;
          height: 22px;
          background: url("../../assets/img/erweima.png") no-repeat;
          background-size: 100% 100%;
          display: inline-block;
        }
        .assets-name {
          display: inline-block;
          font-size: 12px;
          color: #282828;
        }
      }
    }
  }
  // 数据中心
  .myInfo-record-section {
    margin: 0 15px 15px;
    padding: 15px;
    border-radius: 5px;
    background-color: #253770;
    .record-title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 15px;
      .title-left {
        .title-icon {
          width: 15px;
          height: 15px;
          background: url("../../assets/img/record.png") no-repeat;
          background-size: 100% 100%;
          display: inline-block;
          vertical-align: middle;
          margin-right: 4px;
        }
        .title-name {
          font-size: 15px;
          color: #ffffff;
          display: inline-block;
          vertical-align: middle;
        }
      }
      .title-right {
        font-size: 12px;
        color: #ffffff;
      }
    }
    .record-list {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .record-item {
        flex: 1;
        display: flex;
        flex-direction: column;
        .record-tp {
          font-size: 12px;
          color: #1f7de9;
          margin-bottom: 5px;
        }
        .record-bt {
          .record-value {
            font-size: 22px;
            font-weight: bold;
            color: #ffffff;
          }
          .record-unit {
            font-size: 12px;
            color: #ffffff;
          }
        }
      }
    }
  }
  // 导航
  .myInfo-nav-section {
    .nav-list {
      .nav-item {
        padding: 13.5px 20px;
        background-color: #ffffff;
        border-bottom: 1px solid #f5f5f5;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .nav-item-left {
          font-size: 0;
          .nav-name-icon {
            width: 22px;
            height: 22px;
            display: inline-block;
            vertical-align: middle;
            margin-right: 10px;
            &.icon01 {
              background: url("../../assets/img/team.png") no-repeat;
              background-size: 100% 100%;
            }
          }
          .nav-name {
            font-size: 15px;
            color: #282828;
            display: inline-block;
            vertical-align: middle;
          }
        }
        .nav-item-right {
          .nav-tips {
            font-size: 14px;
            color: #ff7d30;
            display: inline-block;
            vertical-align: middle;
            margin-right: 3px;
          }
        }
      }
    }
  }
}
</style>
