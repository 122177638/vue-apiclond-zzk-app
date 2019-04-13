<template>
  <div class="video-container">
    <!-- video -->
    <video
      class="video-js vjs-default-skin vjs-big-play-centered"
      playsinline
      webkit-playsinline
      ref="videoNode"
    >
      <p class="vjs-no-js">
        To view this video please enable JavaScript, and consider upgrading to a
        web browser that
        <a href="http://videojs.com/html5-video-support/" target="_blank">
          supports HTML5 video
        </a>
      </p>
    </video>
    <!-- goback -->
    <van-icon
      name="arrow-left"
      size="0.44rem"
      color="#ffffff"
      @click="$router.back()"
      class="goback"
    />
    <!-- 播放完毕 -->
    <div class="videoEnd-mask" v-show="maskShow">
      <!-- 分享列表 -->
      <ul class="share-list">
        <li class="share-item" @click.stop="handleShareChange('wx')">
          <i class="share-icon wx"></i>
          <span class="share-name">微信</span>
        </li>
        <li class="share-item" @click="handleShareChange('pyq')">
          <i class="share-icon pyq"></i>
          <span class="share-name">朋友圈</span>
        </li>
        <li class="share-item" @click.prevent="handleShareChange('replay')">
          <i class="share-icon replay"></i>
          <span class="share-name">重播</span>
        </li>
      </ul>
      <!-- 下个视频 -->
      <div class="next-item">
        <figure>
          <img
            src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1330370304,4024288080&fm=27&gp=0.jpg"
            class="next-img"
            alt=""
          />
        </figure>
        <div class="next-content">
          <strong class="next-txt">下个视频</strong>
          <p class="next-title">为什么深圳房价那么高，却有那么多创业者前去？</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Video from "video.js/dist/video.js";
import { Icon } from "vant";
export default {
  props: {
    // 视频资源
    videoData: {
      type: Object,
      required: true
    }
  },
  components: {
    "van-icon": Icon
  },
  data() {
    return {
      maskShow: false
    };
  },
  watch: {
    // 监听数据变化，切换视频。自动播放
    videoData(nowval) {
      this.switchVideoChange(nowval);
    }
  },
  mounted() {
    this.videoInit();
  },
  methods: {
    /**
     * @description: video初始化
     * @Date: 2019-04-09 14:23:02
     */
    videoInit() {
      this.myVideo = new Video(this.$refs.videoNode, {
        controls: true,
        //自动播放属性,muted:静音播放
        // autoplay: true,
        //建议浏览器是否应在<video>加载元素后立即开始下载视频数据。
        preload: "auto",
        poster: this.videoData.img,
        sources: this.videoData.src,
        // 播放错误提示
        notSupportedMessage: "视频资源错误或网络请求出错"
        // 快进倍率
        // playbackRates: [0.5, 1, 1.5, 2]
      });
      // 播放更新事件
      // this.myVideo.on("timeupdate", function(e) {
      //   // console.log(myVideo.currentTime());
      // });
      // 播放完毕
      this.myVideo.on("ended", () => {
        this.myVideo.controls(false);
        this.maskShow = !this.maskShow;
      });
      console.log(this.myVideo);
    },
    /**
     * @description: 视频切换
     * @param {Object} item 当前视频
     * @param {Object} nextItem 下一个视频
     * @Date: 2019-04-09 14:28:26
     */
    switchVideoChange(item) {
      // 初始化资源,自动播放
      this.maskShow = false;
      this.myVideo.controls(true);
      this.myVideo.poster(item.img);
      this.myVideo.src(item.src);
      this.myVideo.load(item.src);
      this.myVideo.play();
    },
    /**
     * @description: 分享事件
     * @param {String} shareType
     * @Date: 2019-04-09 14:25:38
     */
    handleShareChange(shareType) {
      switch (shareType) {
        case "wx":
          this.$toast("微信分享");
          break;
        case "pyq":
          this.$toast("朋友圈分享");
          break;
        case "replay":
          this.maskShow = !this.maskShow;
          this.myVideo.controls(true);
          this.myVideo.play();
          this.$toast("重播");
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
.video-container {
  height: 211px;
  width: 100%;
  z-index: 99;
  position: relative;
  .goback {
    position: absolute;
    top: 0px;
    left: 0px;
    transform: translate3d(10px, 10px, 0px);
    padding: 5px;
    z-index: 99;
  }
  // video遮罩
  .videoEnd-mask {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    z-index: 2;
    overflow: hidden;
    // 分享
    .share-list {
      padding: 45px 45px 20px;
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
          &.replay {
            background: url("./img/share_pyq.png") no-repeat;
            background-size: 100% 100%;
          }
        }
        .share-name {
          font-size: 15px;
          color: #ffffff;
          display: block;
          text-align: center;
        }
      }
    }
    //下个视频
    .next-item {
      display: flex;
      align-items: center;
      padding: 0 30px;
      .next-img {
        height: 58px;
        width: 58px;
        display: block;
        margin-right: 15px;
        object-fit: contain;
      }
      .next-content {
        flex: 1;
        overflow: hidden;
        .next-txt {
          font-size: 12px;
          color: #979797;
        }
        .next-title {
          color: #979797;
          margin-top: 10px;
          font-size: 14px;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
        }
      }
    }
  }
  // video
  .video-js {
    width: 100%;
    height: 100%;
  }
  /deep/ .video-js .vjs-big-play-button {
    font-size: 2.5em;
    line-height: 2.3em;
    height: 2.5em;
    width: 2.5em;
    -webkit-border-radius: 2.5em;
    -moz-border-radius: 2.5em;
    border-radius: 2.5em;
    background-color: #73859f;
    background-color: rgba(115, 133, 159, 0.5);
    border-width: 0.15em;
    transform: translate3d(-50%, -50%, 0);
    margin-top: 0em;
    margin-left: 0em;
  }
  /* 中间的播放箭头 */
  /deep/ .vjs-big-play-button .vjs-icon-placeholder {
    font-size: 1.45em;
  }
  /* 加载圆圈 */
  /deep/ .vjs-loading-spinner {
    font-size: 2.5em;
    width: 2em;
    height: 2em;
    border-radius: 1em;
    margin-top: -1em;
    margin-left: -1.5em;
  }
  /deep/ .video-js.vjs-playing .vjs-tech {
    pointer-events: auto;
  }
  // 视频已经播放过了
  // /deep/ .vjs-has-started .vjs-big-play-button {
  //   display: block;
  // }
  //视频播放过程中
  /deep/ .vjs-playing .vjs-big-play-button {
    display: none;
  }
  //视频暂停播放
  /deep/ .vjs-paused .vjs-big-play-button {
    display: block;
  }
  // 拖拽快进播放
  /deep/ .vjs-scrubbing .vjs-big-play-button {
    display: none;
  }
  //视频播放结束了
  /deep/ .vjs-ended .vjs-big-play-button {
    display: none;
  }
}
</style>
