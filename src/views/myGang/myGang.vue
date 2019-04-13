<template>
  <section class="myGang-container">
    <!-- 头部背景 -->
    <i class="myGang-top-bg"></i>
    <!-- header -->
    <Header class="myGang-header">
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
        我的团队
      </h2>
      <div slot="right" style="font-size:0.28rem;color:#ffffff;">
        我的上级
      </div>
    </Header>
    <!-- 主体 -->
    <div class="myGang-main">
      <!-- 计数 -->
      <section class="myGang-count">
        <div class="myGang-count-item">
          <p class="item-val"><strong>568</strong>&nbsp;&nbsp;人</p>
          <p class="item-key">今日新增</p>
        </div>
        <div class="myGang-count-item">
          <p class="item-val"><strong>268</strong>&nbsp;&nbsp;人</p>
          <p class="item-key">团队总数</p>
        </div>
      </section>
      <!-- 邀请奖励 -->
      <section class="public-section reward-box">
        <div class="reward-top">
          <p class="reward-top-left">
            <span>我的等级:</span>
            <span class="reward-status">
              <i class="reward-vip-icon"></i>
              <span class="reward-vip-label">会员</span>
            </span>
          </p>
          <p class="reward-top-right">
            已邀请&nbsp;&nbsp;<strong>12</strong>/20
          </p>
        </div>
        <div class="reward-progress">
          <div class="reward-progress-on" style="width:80%"></div>
        </div>
        <p class="reward-ponit">
          您还需成功邀请<strong>8</strong>位会员即可升级为会长!
        </p>
      </section>
      <!-- 类别统计图 -->
      <section class="public-section category-box">
        <Swiper-grid
          :data="echartsData"
          v-if="echartsData.length > 0"
          :slice="1"
          style="min-height:8rem;"
        >
          <li slot-scope="scope" style="width:100%;height:7.2rem;">
            <Echarts
              ref="echartsNode"
              v-model="scope.props"
              type="pie"
              :isShowLoading="false"
            ></Echarts>
          </li>
        </Swiper-grid>
        <Logo-loading
          style="min-height:8rem;"
          v-else
          :isTip="true"
        ></Logo-loading>
      </section>
    </div>
  </section>
</template>

<script>
import { Icon } from "vant";
import SwiperGrid from "@/components/swiperGrid/swiperGrid.vue";
import Header from "@/components/header/header.vue";
import Echarts from "@/components/echarts/echarts.vue";
import LogoLoading from "@/components/logoLoading/logoLoading.vue";
export default {
  components: {
    "van-icon": Icon,
    Header,
    SwiperGrid,
    Echarts,
    LogoLoading
  },
  data() {
    return {
      echartsData: []
    };
  },
  mounted() {
    let _that = this;
    setTimeout(() => {
      // 颜色
      let colorMap = ["#7461EE", "#FF7D30", "#CA4EFF", "#FF0A0A", "#FF8144"];

      let options = {
        title: [
          {
            text: "用户类别构成图",
            left: "center",
            top: 15,
            textStyle: {
              fontSize: _that.$METHOD.conversionUnit("0.36rem", 1)
            }
          },
          {
            text: 7789,
            subtext: "用户总数",
            textStyle: {
              color: "#656565",
              fontSize: _that.$METHOD.conversionUnit("0.68rem", 1),
              fontWeight: "bold"
            },
            subtextStyle: {
              fontSize: _that.$METHOD.conversionUnit("0.24rem", 1),
              color: "#656565"
            },
            x: "center",
            y: "38%"
          }
        ],
        legend: {
          bottom: _that.$METHOD.conversionUnit("0.4rem", 1),
          left: "center",
          orient: "horizontal",
          itemWidth: _that.$METHOD.conversionUnit("0.3rem", 1),
          itemHeight: _that.$METHOD.conversionUnit("0.3rem", 1),
          itemGap: _that.$METHOD.conversionUnit("0.3rem", 1),
          textStyle: {
            fontSize: _that.$METHOD.conversionUnit("0.3rem", 1),
            padding: [0, 0, 0, _that.$METHOD.conversionUnit("0.1rem", 1)],
            rich: {
              // 遍历设置rich
              ...colorMap.reduce((begin, curr, index) => {
                begin["val" + [index]] = {
                  color: curr,
                  fontSize: _that.$METHOD.conversionUnit("0.3rem", 1)
                };
                return begin;
              }, {})
            }
          },
          formatter: function(name) {
            let data = options.series[0].data;
            // 匹配color
            let index = data.findIndex(item => item.name === name);
            return data[index].name + `({val${index}|${data[index].value}}) `;
          },
          selectedMode: true
        },
        color: colorMap,
        series: [
          {
            type: "pie",
            radius: ["35%", "50%"],
            center: ["50%", "45%"],
            selectedMode: true,
            clockwise: false,
            legendHoverLink: false,
            hoverAnimation: false,
            data: [
              {
                value: 1548,
                name: "付费用户"
              },
              {
                value: 535,
                name: "非付费用户"
              }
            ],
            itemStyle: {
              shadowBlur: _that.$METHOD.conversionUnit("0.4rem", 1),
              shadowOffsetX: 0,
              shadowColor: "rgba(116,97,238,0.45)",
              shadowOffsetY: _that.$METHOD.conversionUnit("0.2rem", 1)
            },
            label: {
              formatter: "{d}%",
              fontSize: _that.$METHOD.conversionUnit("0.36rem", 1),
              fontWeight: "bold"
            },
            labelLine: {
              lineStyle: {
                width: _that.$METHOD.conversionUnit("0.04rem", 1)
              },
              show: true,
              length: _that.$METHOD.conversionUnit("0.3rem", 1),
              length2: _that.$METHOD.conversionUnit("0.1rem", 1)
            }
          }
        ]
      };
      // legend排版
      options.legend.orient =
        options.series[0].data.length > 2 ? "horizontal" : "vertical";

      // 添加进echarts数据,动态加载
      this.echartsData.push(options);
      this.echartsData.push(options);
    }, 1000);
  },
  methods: {}
};
</script>

<style lang="less" scoped>
.myGang-container {
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
.myGang-top-bg {
  height: 225px;
  width: 100%;
  background: linear-gradient(85deg, #65bcff 0%, #3082fd 100%);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
}
// 头部
.myGang-header {
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
.myGang-main {
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
  .myGang-count {
    padding: 25px 15px 30px;
    display: flex;
    .myGang-count-item {
      flex: 1;
      width: 100%;
      overflow: hidden;
      color: #ffffff;
      text-align: center;
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
  .public-section {
    margin: 0 15px 15px;
    background-color: #ffffff;
    border-radius: 5px;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.05);
  }
  // 邀请统计
  .reward-box {
    padding: 15px;
    .reward-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .reward-top-left {
        font-size: 14px;
        color: #282828;
        line-height: 20px;
      }
      // 身份
      .reward-status {
        margin-left: 5px;
        .reward-vip-icon {
          width: 18px;
          height: 16px;
          background: url("../../assets/img/type_vip01.png") no-repeat;
          background-size: 100% 100%;
          display: inline-block;
          vertical-align: middle;
        }
        .reward-vip-label {
          color: #4f8ff8;
          font-size: 14px;
        }
      }
      // 邀请
      .reward-top-right {
        font-size: 14px;
        color: #656565;
        strong {
          color: #4a9efe;
        }
      }
    }
    .reward-progress {
      width: 100%;
      height: 10px;
      background-color: #f0f0f0;
      border-radius: 5px;
      margin: 15px 0;
      overflow: hidden;
      position: relative;
      .reward-progress-on {
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        height: 100%;
        width: 0px;
        transition: all 0.3s ease-out;
        background: linear-gradient(
          90deg,
          rgba(100, 198, 255, 1) 0%,
          rgba(61, 97, 243, 1) 100%
        );
        border-radius: 5px;
      }
    }
    .reward-ponit {
      font-size: 14px;
      color: #282828;
      text-align: center;
      line-height: 20px;
      strong {
        margin: 0 2px;
        color: #4f8ff8;
      }
    }
  }
  // 类别统计
  .category-box {
  }
}

.canvas-container {
  width: 100%;
  height: 100%;
}
.canvas-wrap {
  width: 100%;
  height: 100%;
}
</style>
