<template>
  <van-popup
    v-model="isMenusPopupShow"
    position="bottom"
    @open="$emit('handleOpenChange')"
    @close="$emit('handleCloseChange')"
    class="share-popup-container"
  >
    <ul class="share-list">
      <li class="share-item" @click="handleShareChange('wx')">
        <i class="share-icon wx"></i>
        <span class="share-name">微信</span>
      </li>
      <li class="share-item" @click="handleShareChange('pyq')">
        <i class="share-icon pyq"></i>
        <span class="share-name">朋友圈</span>
      </li>
      <li class="share-item" @click="handleShareChange('url')">
        <i class="share-icon url"></i>
        <span class="share-name">链接</span>
      </li>
    </ul>
  </van-popup>
</template>

<script>
import { Popup, Toast } from "vant";
export default {
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    isMenusPopupShow: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit("input", val);
      }
    }
  },
  components: {
    "van-popup": Popup
  },
  methods: {
    handleShareChange(shareType) {
      switch (shareType) {
        case "wx":
          this.$toast("微信分享");
          break;
        case "pyq":
          this.$toast("朋友圈分享");
          break;
        case "url":
          this.$toast("链接分享");
          break;
        default:
          this.$toast("你还未定义分享类型");
          break;
      }
    }
  }
};
</script>

<style lang="less" scoped>
.share-popup-container {
  background-color: #ffffff;
  border-radius: 15px 15px 0px 0px;
  .share-list {
    padding: 45px 50px;
    display: flex;
    justify-content: space-between;
    .share-item {
      display: flex;
      flex-direction: column;
      .share-icon {
        width: 44px;
        height: 44px;
        margin-bottom: 7px;
        display: block;
        &.wx {
          background: url("./img/share_wx.png") no-repeat;
          background-size: 100% 100%;
        }
        &.pyq {
          background: url("./img/share_pyq.png") no-repeat;
          background-size: 100% 100%;
        }
        &.url {
          background: url("./img/share_url.png") no-repeat;
          background-size: 100% 100%;
        }
      }
      .share-name {
        font-size: 15px;
        color: #282828;
        display: block;
        text-align: center;
      }
    }
  }
}
</style>
