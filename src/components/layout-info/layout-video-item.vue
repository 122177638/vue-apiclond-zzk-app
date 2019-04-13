<template>
  <!-- 内部分化为后续迭代做准备 -->
  <div class="video-item">
    <!-- model ---  一张大图 -->
    <div class="video-model-01" v-if="item.type == 1">
      <div class="video-img-box">
        <figure>
          <img class="video-img" :src="item.img" />
          <div class="video-mask">
            <div class="video-start"></div>
            <h4 class="video-title">
              {{ item.title }}
            </h4>
            <div class="video-sub-box">
              <p class="video-share-num"><span>19365次分享</span></p>
              <p class="video-time"><span>11:35</span></p>
            </div>
          </div>
          <!-- <span class="tag" v-if="item.isTag">{{ item.isTag }}</span> -->
        </figure>
      </div>
      <div class="video-footer">
        <ul class="video-share-price">
          <li
            class="video-share-type on"
            v-for="(item, index) in item.shareTag"
            :key="index"
          >
            {{ item.name }}￥{{ item.money.toFixed(2) }}
          </li>
        </ul>
      </div>
    </div>
    <!-- model --- left && right -->
    <div class="video-model-02" v-else-if="item.type == 2">
      <div class="model-left">
        <h4 class="video-title">
          {{ item.title }}
        </h4>
        <div class="video-footer">
          <ul class="video-share-price">
            <li
              class="video-share-type on"
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
          <img :src="item.img" class="video-img" />
          <div class="video-mask">
            <div class="video-start"></div>
          </div>
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
.video-item {
  padding: 15px 0;
  background-color: #ffffff;
  overflow: hidden;
  border-bottom: 1px solid #f6f8fa;
  .video-model-01 {
    .video-img-box {
      position: relative;
      overflow: hidden;
      .video-mask {
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        .video-start {
          width: 64px;
          height: 64px;
          background-color: rgba(115, 133, 159, 0.5);
          border-radius: 50%;
          border: 4px solid #ffffff;
          box-sizing: border-box;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          &::after {
            content: "\F101";
            font-size: 40px;
            color: #ffffff;
            text-align: center;
            font-family: VideoJS;
            font-weight: normal;
            font-style: normal;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
        }
        .video-title {
          font-size: 16px;
          line-height: 1.4;
          position: absolute;
          width: 100%;
          box-sizing: border-box;
          color: #ffffff;
          left: 0;
          top: 0;
          padding: 9px;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
        }
        .video-sub-box {
          position: absolute;
          width: 100%;
          left: 0;
          padding: 0 15px;
          box-sizing: border-box;
          bottom: 15px;
          right: 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .video-time {
            padding: 3px 8px;
            font-size: 14px;
            color: #ffffff;
            background-color: rgba(0, 0, 0, 0.5);
            border-radius: 5px;
          }
          .video-share-num {
            font-size: 14px;
            color: #ffffff;
          }
        }
      }
      .video-img {
        width: 100%;
        height: 194px;
        display: inline-block;
        vertical-align: middle;
      }
    }
    .video-footer {
      margin-top: 15px;
      .video-share-price {
        display: flex;
        flex-wrap: nowrap;
        .video-share-type {
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
    }
  }
  .video-model-02 {
    display: flex;
    align-items: center;
    .model-left {
      flex: 1;
      .video-title {
        color: #282828;
        font-size: 16px;
      }
      .video-footer {
        margin-top: 15px;
        .video-share-price {
          display: flex;
          flex-wrap: nowrap;
          .video-share-type {
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
      .video-mask {
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        .video-start {
          width: 29px;
          height: 29px;
          border-radius: 50%;
          background-color: rgba(115, 133, 159, 0.5);
          border: 2px solid #ffffff;
          box-sizing: border-box;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          &::after {
            content: "\F101";
            font-size: 20px;
            color: #ffffff;
            text-align: center;
            font-family: VideoJS;
            font-weight: normal;
            font-style: normal;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
        }
        .video-title {
          font-size: 16px;
          line-height: 1.4;
          position: absolute;
          width: 100%;
          box-sizing: border-box;
          color: #ffffff;
          left: 0;
          top: 0;
          padding: 9px;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
        }
        .video-sub-box {
          position: absolute;
          width: 100%;
          left: 0;
          padding: 0 15px;
          box-sizing: border-box;
          bottom: 15px;
          right: 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .video-time {
            padding: 3px 8px;
            font-size: 14px;
            color: #ffffff;
            background-color: rgba(0, 0, 0, 0.5);
            border-radius: 5px;
          }
          .video-share-num {
            font-size: 14px;
            color: #ffffff;
          }
        }
      }
      .video-img {
        width: 112px;
        height: 84px;
        display: inline-block;
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
