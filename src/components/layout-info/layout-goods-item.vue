<template>
  <div class="goods-item">
    <div class="item-box">
      <div class="item-left">
        <figure>
          <img class="goods-img" alt="" v-lazy="item.img" />
        </figure>
      </div>
      <div class="item-right">
        <h4 class="goods-title">
          {{ item.title }}
        </h4>
        <div class="goods-cont">
          <p class="goods-money-box">
            <span class="money-type">￥</span
            ><strong class="goods-price">59.99</strong>
          </p>
          <p class="goods-share">8591次分享</p>
        </div>
      </div>
    </div>
    <div class="goods-footer">
      <ul class="goods-share-price">
        <li
          class="goods-share-type on"
          v-for="(item, index) in item.shareTag"
          :key="index"
        >
          {{ item.name }}￥{{ item.money.toFixed(2) }}
        </li>
      </ul>
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
.goods-item {
  margin-top: 15px;
  background-color: #ffffff;
  padding: 20px 15px 15px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  overflow: hidden;
  &:nth-last-child(1) {
    margin-bottom: 25px;
  }
  .item-box {
    display: flex;
  }
  .item-left {
    margin-right: 15px;
    .goods-img {
      width: 100px;
      height: 100px;
      border-radius: 5px;
      vertical-align: middle;
      object-fit: cover;
      display: inline-block;
    }
  }
  .item-right {
    flex: 1;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    min-height: 100%;
    overflow: hidden;
    .goods-title {
      font-size: 16px;
      color: #282828;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      text-overflow: ellipsis;
      overflow: hidden;
    }
    .goods-cont {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      margin-top: 15px;
      .goods-money-box {
        .money-type {
          font-size: 12px;
          color: #ff0a0a;
        }
        .goods-price {
          font-size: 20px;
          color: #ff0a0a;
          font-weight: bold;
        }
      }
      .goods-share {
        font-size: 12px;
        color: #b1b1b1;
      }
    }
  }
  .goods-footer {
    margin-top: 15px;
    .goods-share-price {
      display: flex;
      flex-wrap: nowrap;
      .goods-share-type {
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
</style>
