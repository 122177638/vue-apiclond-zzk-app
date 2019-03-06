<template>
  <section class="ranking-container">
    <div class="ranking-header">
      <ul class="nav-list">
        <li
          :class="['nav-item', { on: rankNavIndex === index }]"
          v-for="(item, index) of rankNavList"
          :key="index"
          @click="rankNavIndex = index"
        >
          {{ item }}
        </li>
      </ul>
      <van-icon name="chat-o" size="22px" color="#282828" info="9" />
    </div>
    <div class="ranking-main">
      <div class="ranking-top">
        <div
          :class="[
            'ranking-top-item',
            { No01: index == 0 },
            { No02: index == 1 },
            { No03: index == 2 }
          ]"
          v-for="(item, index) in getTopthree"
          :key="index"
        >
          <div class="item-avait-box">
            <figure class="item-relative">
              <img :src="item.userAvait" class="item-avait" alt="" />
              <span class="item-number">No.{{ index + 1 }}</span>
            </figure>
          </div>
          <div class="item-name ellipsis">{{ item.name }}</div>
          <div class="item-money">￥{{ item.money }}</div>
        </div>
      </div>
      <ul class="ranking-list" v-if="getBotthree.length > 0">
        <li
          class="ranking-item"
          v-for="(item, index) of getBotthree"
          :key="index"
        >
          <div class="item-left">
            <div class="item-number">{{ getFillNum(index + 4) }}</div>
            <figure>
              <img :src="item.userAvait" class="item-avait" alt="用户头像" />
            </figure>

            <p class="item-name ellipsis">{{ item.name }}</p>
          </div>
          <div class="item-right">￥{{ item.money }}</div>
        </li>
      </ul>
      <noData v-else></noData>
    </div>
  </section>
</template>

<script>
import { Icon } from "vant";
import noData from "@/components/noData/noData.vue";
export default {
  components: {
    [Icon.name]: Icon,
    noData
  },
  data() {
    return {
      rankNavIndex: 0,
      rankNavList: ["今日排行", "昨日", "累计", "收徒"],
      rankingList: [
        {
          name: "专属码农专属码农专属码农专属码农专属码农专属码农",
          money: 588.88,
          userAvait:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2562216169,2976611441&fm=27&gp=0.jpg"
        },
        {
          name: "专属码农专属码农专属码农专属码农专属码农专属码农",
          money: 588.88,
          userAvait:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2562216169,2976611441&fm=27&gp=0.jpg"
        },
        {
          name: "专属码农专属码农专属码农专属码农专属码农专属码农",
          money: 588.88,
          userAvait:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2562216169,2976611441&fm=27&gp=0.jpg"
        },
        {
          name: "专属码农专属码农专属码农专属码农专属码农专属码农",
          money: 588.88,
          userAvait:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2562216169,2976611441&fm=27&gp=0.jpg"
        }
      ]
    };
  },
  watch: {
    rankNavIndex(nowVal) {
      console.log(nowVal);
    }
  },
  computed: {
    getTopthree() {
      let result = this.rankingList.slice(0, 3) || [];
      if (result.length < 3) {
        let fillNum = 3 - result.length;
        for (let i = 0; fillNum > i; i++) {
          result.push({
            name: "虚位以待",
            money: "0",
            userAvait: require("@/assets/img/user_null.png")
          });
        }
      }
      return result;
    },
    getBotthree() {
      let result = this.rankingList.slice(3, this.rankingList.length) || [];
      return result;
    }
  },
  methods: {
    getFillNum(num) {
      num = num > 9 ? num : "0" + num;
      return num;
    }
  }
};
</script>

<style lang="less" scoped>
.ellipsis {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.ranking-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .ranking-header {
    padding: 20px 15px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #ffffff;
    .nav-list {
      padding: 17px 0;
      min-height: 63px;
      box-sizing: border-box;
      flex: 1;
      margin-right: 10px;
      display: flex;
      align-items: flex-end;
      .nav-item {
        font-size: 14px;
        color: #b1b1b1;
        margin-right: 15px;
        transition: all 0.08s linear;
        &.on {
          font-size: 18px;
          color: #282828;
          font-weight: bold;
        }
      }
    }
  }
  .ranking-main {
    flex: 1;
    overflow-y: auto;
    background-color: #ffffff;
    -webkit-overflow-scrolling: touch;
    .ranking-top {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      padding: 20px 25px 25px;
      .ranking-top-item {
        display: flex;
        flex-direction: column;
        .item-avait-box {
          width: 79px;
          height: 79px;
          box-sizing: border-box;
          box-shadow: 0px 10px 20px rgba(74, 158, 254, 0.35);
          border-radius: 50%;
          padding: 3px;
          border: 2px solid #4a9efe;
          .item-relative {
            width: 100%;
            height: 100%;
            position: relative;
            font-size: 0;
            .item-number {
              position: absolute;
              width: 100%;
              bottom: -4px;
              left: 0;
              right: 0;
              background-color: #4a9efe;
              border-radius: 29px;
              height: 20px;
              line-height: 20px;
              box-sizing: border-box;
              font-size: 12px;
              color: #ffffff;
            }
            .item-avait {
              width: 100%;
              height: 100%;
              border-radius: 50%;
              border: none;
            }
          }
        }
        .item-name {
          font-size: 15px;
          color: #282828;
          margin-top: 10px;
        }
        .item-money {
          margin-top: 5px;
          font-size: 16px;
          color: #4a9efe;
          font-weight: bold;
        }
        &.No01 {
          width: 94px;
          order: 2;
          .item-avait-box {
            width: 94px;
            height: 94px;
            box-shadow: 0px 10px 20px rgba(255, 125, 48, 0.5);
            border: 2px solid #ff7d30;
            .item-number {
              background-color: #ff7d30;
            }
          }
          .item-money {
            color: #ff7d30;
            font-size: 22px;
          }
        }
        &.No02 {
          order: 1;
          width: 79px;
          .item-avait-box {
            width: 79px;
            height: 79px;
            box-shadow: 0px 10px 20px rgba(74, 158, 254, 0.35);
            border: 2px solid #4a9efe;
            .item-number {
              background-color: #4a9efe;
            }
          }
          .item-money {
            color: #4a9efe;
          }
        }
        &.No03 {
          order: 3;
          width: 79px;
          .item-avait-box {
            width: 79px;
            height: 79px;
            box-shadow: 0px 10px 20px rgba(254, 171, 88, 0.35);
            border: 2px solid #feab58;
            .item-number {
              background-color: #feab58;
            }
          }
          .item-money {
            color: #feab58;
          }
        }
      }
    }
    .ranking-list {
      padding: 0 15px 30px;
      .ranking-item {
        padding: 15px 0;
        border-bottom: 1px solid #f6f8fa;
        display: flex;
        align-items: center;
        justify-content: space-between;
        &:nth-child(1) {
          border-top: 1px solid #f6f8fa;
        }
        .item-left {
          flex: 1;
          display: flex;
          align-items: center;
          overflow: hidden;
          .item-number {
            width: 56px;
            text-align: center;
            font-size: 15px;
            color: #b1b1b1;
            font-weight: bold;
          }
          .item-avait {
            width: 44px;
            height: 44px;
            border-radius: 50%;
            vertical-align: middle;
            margin-right: 15px;
          }
          .item-name {
            flex: 1;
            font-size: 15px;
            color: #282828;
            text-align: left;
            margin-right: 10px;
          }
        }
        .item-right {
          font-size: 16px;
          color: #ff7d30;
          font-weight: bold;
        }
      }
    }
  }
}
</style>
