<template>
  <!-- 内部分化为后续迭代做准备 -->
  <div class="article-item">
    <!-- model ---  一张大图 -->
    <div class="article-model-01" v-if="item.type == 0">
      <h4 class="article-title">
        {{ item.title }}
      </h4>
      <div class="article-img-box">
        <figure>
          <img class="article-img" :src="item.img" />
          <span class="tag" v-if="item.isTag">{{ item.isTag }}</span>
        </figure>
      </div>
      <div class="article-footer">
        <ul class="article-share-price">
          <li
            class="article-share-type on"
            v-for="(item, index) in item.shareTag"
            :key="index"
          >
            {{ item.name }}￥{{ item.money.toFixed(2) }}
          </li>
        </ul>
        <div class="article-share-count" v-if="isShowShare">
          <i class="article-share-icon"></i>
          <span class="article-share-num">1326548次</span>
        </div>
      </div>
    </div>
    <!-- model ---  多张图片 -->
    <div class="article-model-02" v-else-if="item.type == 1">
      <h4 class="article-title">
        {{ item.title }}
      </h4>
      <div class="article-img-box">
        <figure v-for="(item, index) in item.img" :key="index">
          <img class="article-img" :src="item" />
        </figure>
      </div>
      <div class="article-footer">
        <ul class="article-share-price">
          <li
            class="article-share-type on"
            v-for="(item, index) in item.shareTag"
            :key="index"
          >
            {{ item.name }}￥{{ item.money.toFixed(2) }}
          </li>
        </ul>
      </div>
    </div>
    <!-- model --- left && right -->
    <div class="article-model-03" v-else-if="item.type == 2">
      <div class="model-left">
        <h4 class="article-title">
          {{ item.title }}
        </h4>
        <div class="article-footer">
          <ul class="article-share-price">
            <li
              class="article-share-type on"
              v-for="(item, index) in item.shareTag"
              :key="index"
            >
              {{ item.name }}￥{{ item.money.toFixed(2) }}
            </li>
          </ul>
        </div>
      </div>
      <div class="model-right">
        <figure>
          <img class="article-img" :src="item.img" />
          <span class="tag" v-if="item.isTag">{{ item.isTag }}</span>
        </figure>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    },
    isShowShare: {
      type: Boolean,
      default: true
    }
  }
};
</script>

<style lang="less" scoped>
.article-item {
  padding: 15px 0;
  background-color: #ffffff;
  border-bottom: 1px solid #f6f8fa;
  // 一张大图
  .article-model-01 {
    .article-title {
      font-size: 16px;
      color: #282828;
      line-height: 1.4;
    }
    .article-img-box {
      margin-top: 10px;
      position: relative;
      .article-img {
        width: 100%;
        height: 194px;
        vertical-align: middle;
      }
    }
    .article-footer {
      margin-top: 15px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .article-share-price {
        flex: 1;
        display: flex;
        flex-wrap: nowrap;
        .article-share-type {
          width: 99px;
          height: 24px;
          line-height: 24px;
          background-color: #f6f8fa;
          font-size: 12px;
          color: #b1b1b1;
          text-align: center;
          border-radius: 24px;
          margin-right: 0.1rem;
          &:nth-last-child(1) {
            margin-right: 0;
          }
          &.on {
            background-color: #fff1e9;
            color: #ff7d30;
          }
        }
      }
      .article-share-count {
        .article-share-icon {
          width: 18px;
          height: 14px;
          background: url("../../assets/img/forward.png") no-repeat;
          background-size: 100% 100%;
          display: inline-block;
          vertical-align: middle;
        }
        .article-share-num {
          font-size: 12px;
          color: #b1b1b1;
          display: inline-block;
          vertical-align: middle;
        }
      }
    }
  }
  // 三张图片
  .article-model-02 {
    .article-title {
      font-size: 16px;
      color: #282828;
      line-height: 1.4;
    }
    .article-img-box {
      position: relative;
      margin-top: 10px;
      display: flex;
      justify-content: space-between;
      .article-img {
        width: 110px;
        height: 84px;
        margin-right: 4px;
        vertical-align: middle;
        &:nth-last-child(1) {
          margin-right: 0;
        }
      }
    }
    .article-footer {
      margin-top: 15px;
      .article-share-price {
        display: flex;
        flex-wrap: nowrap;
        .article-share-type {
          width: 99px;
          height: 24px;
          line-height: 24px;
          background-color: #f6f8fa;
          font-size: 12px;
          color: #b1b1b1;
          text-align: center;
          border-radius: 24px;
          margin-right: 10px;
          &:nth-last-child(1) {
            margin-right: 0;
          }
          &.on {
            background-color: #fff1e9;
            color: #ff7d30;
          }
        }
      }
    }
  }
  // left && right
  .article-model-03 {
    display: flex;
    align-items: center;
    .model-left {
      flex: 1;
      .article-title {
        color: #282828;
        font-size: 16px;
      }
      .article-footer {
        margin-top: 15px;
        .article-share-price {
          display: flex;
          flex-wrap: nowrap;
          .article-share-type {
            width: 99px;
            height: 24px;
            line-height: 24px;
            background-color: #f6f8fa;
            font-size: 12px;
            color: #b1b1b1;
            text-align: center;
            border-radius: 24px;
            margin-right: 10px;
            &:nth-last-child(1) {
              margin-right: 0;
            }
            &.on {
              background-color: #fff1e9;
              color: #ff7d30;
            }
          }
        }
      }
    }
    .model-right {
      margin-left: 10px;
      .article-img {
        width: 112px;
        height: 84px;
        vertical-align: middle;
      }
    }
  }
  figure {
    position: relative;
    .tag {
      position: absolute;
      width: 54px;
      height: 24px;
      line-height: 24px;
      text-align: center;
      font-size: 13px;
      background-color: #f9510c;
      color: #ffffff;
      border-radius: 0px 0px 0px 5px;
      right: 0;
      top: 0;
    }
  }
}
</style>
