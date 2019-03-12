<template>
  <!-- 内部分化为后续迭代做准备 -->
  <div class="video-item">
    <!-- model ---  一张大图 -->
    <div class="video-model-01" v-if="item.type == 0">
      <div class="video-img-box">
        <figure>
          <img class="video-img" v-lazy="item.img" />
          <div class="video-mask">
            <div class="video-start"></div>
            <h4 class="video-title">
              {{ item.title }}
            </h4>
            <span class="video-time">11:35</span>
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
          <img v-lazy="item.img" class="video-img" />
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
    }
  }
};
</script>

<style lang="less" scoped>
.video-item {
  padding: 15px 0;
  background-color: #ffffff;
  border-bottom: 1px solid #f6f8fa;
  .video-model-01 {
    .video-img-box {
      margin-top: 10px;
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
          border-radius: 50%;
          background-color: rgba(0, 0, 0, 0.5);
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          &::after {
            content: "";
            border: 16px solid transparent;
            border-left-color: #ffffff;
            position: absolute;
            top: 50%;
            left: 68%;
            transform: translate(-50%, -50%);
            border-radius: 5px;
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
        .video-time {
          padding: 3px 8px;
          font-size: 14px;
          color: #ffffff;
          background-color: rgba(0, 0, 0, 0.5);
          border-radius: 5px;
          position: absolute;
          bottom: 15px;
          right: 15px;
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
          background-color: rgba(0, 0, 0, 0.5);
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          &::after {
            content: "";
            border: 8px solid transparent;
            border-left-color: #ffffff;
            position: absolute;
            top: 50%;
            left: 68%;
            transform: translate(-50%, -50%);
            border-radius: 5px;
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
        .video-time {
          padding: 3px 8px;
          font-size: 14px;
          color: #ffffff;
          background-color: rgba(0, 0, 0, 0.5);
          border-radius: 5px;
          position: absolute;
          bottom: 15px;
          right: 15px;
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
