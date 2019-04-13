<template>
  <section class="videoDetailes-container">
    <Video ref="videoNode" :videoData="selvideoItem"></Video>
    <Better-scroll>
      <div class="details-header">
        <h2 class="details-title">
          全新马自达3官图曝光！“压燃汽油”黑科技 终于面世！
        </h2>
        <div class="details-ins">
          <div class="details-time">1.9万次播放</div>
          <div class="details-share">
            <i class="share-icon"></i>
            <span class="share-num">246563次分享</span>
          </div>
        </div>
      </div>
      <div class="video-list">
        <Layout-video-item
          @click.native="handleVideoItem(infoItem)"
          :item="infoItem"
          v-for="(infoItem, index) in videoList"
          :key="index"
        ></Layout-video-item>
      </div>
    </Better-scroll>
    <!-- 悬浮按钮 -->
    <div class="share-btn-box">
      <div class="share-btn-left">
        <span class="share-tips">分享本视频赚</span>
        <strong class="share-strong">￥18.00</strong>
      </div>
      <div class="share-btn-right" @click="isshow = true">
        <span class="share-btn-txt">分享</span>
        <i class="share-icon"></i>
      </div>
    </div>
    <!-- 分享 -->
    <Share-popup
      v-model="isshow"
      @handleOpenChange="handleOpenChange"
    ></Share-popup>
  </section>
</template>
<script>
import Video from "@/components/video/video.vue";
import SharePopup from "@/components/sharePopup/sharePopup.vue";
import LayoutVideoItem from "@/components/layout-info/layout-video-item.vue";
export default {
  components: {
    Video,
    SharePopup,
    LayoutVideoItem
  },
  data() {
    return {
      isshow: false,
      selvideoItem: {
        type: 2,
        title: " 嫦娥四号登陆月球表面，登陆的技术和经验，是否会和外国分享。",
        img:
          "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1330370304,4024288080&fm=27&gp=0.jpg",
        isTag: "高佣金",
        src:
          "http://edge.ivideo.sina.com.cn/161146881.mp4?KID=sina,viask&Expires=1554912000&ssig=L7vee0b%2Fku",
        shareTag: [{ name: "游客", money: 15.0 }, { name: "会员", money: 15.0 }]
      },
      videoList: [
        {
          type: 2,
          title: " 嫦娥四号登陆月球表面，登陆的技术和经验，是否会和外国分享。",
          img:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552023559132&di=c0a718bd96a13cdd872bcd0521a11e0a&imgtype=0&src=http%3A%2F%2Fimg.8794.cn%2F2017%2F0816%2F20170816032114400.png",
          isTag: "高佣金",
          src:
            "http://edge.ivideo.sina.com.cn/161146881.mp4?KID=sina,viask&Expires=1554912000&ssig=L7vee0b%2Fku",
          shareTag: [
            { name: "游客", money: 15.0 },
            { name: "会员", money: 15.0 }
          ]
        },
        {
          type: 2,
          title: "不懂中国筷子的历史？我可以教你啊",
          img:
            "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3987050592,1188857939&fm=26&gp=0.jpg",
          shareTag: [
            { name: "游客", money: 15.0 },
            { name: "会员", money: 15.0 }
          ],
          src:
            "http://edge.ivideo.sina.com.cn/142013384.mp4?KID=sina,viask&Expires=1554912000&ssig=ev0slxb0MC"
        },
        {
          type: 2,
          title: "不懂中国筷子的历史？我可以教你啊",
          img: "http://p.ivideo.sina.com.cn/video/251/134/258/251134258.jpg",
          shareTag: [
            { name: "游客", money: 15.0 },
            { name: "会员", money: 15.0 }
          ],
          src:
            "http://edge.ivideo.sina.com.cn/211354272.mp4?KID=sina,viask&Expires=1554912000&ssig=RCmg9TMQxo"
        }
      ]
    };
  },
  mounted() {
    // this.$APICLOUD.setFullScreen({
    //   fullScreen: true
    // });
  },
  methods: {
    /**
     * @description: 分享弹窗关闭
     * @Date: 2019-04-09 11:51:16
     */
    handleOpenChange() {
      // this.$refs.videoNode.myVideo.pause();
    },
    /**
     * @description: 切换视频
     * @Date: 2019-04-09 14:21:37
     */
    handleVideoItem(item) {
      console.log(item);
      this.selvideoItem = item;
    }
  }
};
</script>

<style lang="less" scoped>
.videoDetailes-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  //
  .details-header {
    padding: 15px;
    background-color: #ffffff;
    border-bottom: 1px solid #f5f5f5;
    .details-title {
      font-size: 18px;
      font-weight: bold;
      color: #282828;
      line-height: 30px;
      margin-bottom: 15px;
    }
    .details-ins {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .details-time {
        font-size: 14px;
        color: #b1b1b1;
      }
      .share-icon {
        width: 18px;
        height: 14px;
        background: url("../../assets/img/forward.png") no-repeat;
        background-size: 100% 100%;
        display: inline-block;
        vertical-align: middle;
      }
      .share-num {
        font-size: 14px;
        color: #b1b1b1;
      }
    }
  }
  .video-list {
    border-top: 10px solid #f5f5f5;
    overflow: hidden;
    padding: 0 15px;
    background-color: #ffffff;
  }
}
// 悬浮按钮
.share-btn-box {
  display: flex;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  background-color: #ffffff;
  border-top: 1px solid #f3f3f3;
  .share-btn-left {
    flex: 1;
    text-align: center;
    line-height: 46px;
    .share-tips {
      font-size: 18px;
      color: #282828;
    }
    .share-strong {
      font-size: 18px;
      color: rgba(255, 140, 52, 1);
    }
  }
  .share-btn-right {
    width: 120px;
    line-height: 46px;
    background: rgba(255, 140, 52, 1);
    text-align: center;
    font-size: 0;
    .share-btn-txt {
      font-size: 18px;
      color: #ffffff;
      display: inline-block;
      vertical-align: middle;
    }
    .share-icon {
      margin-left: 5px;
      width: 16px;
      height: 16px;
      display: inline-block;
      background: url("../../assets/img/share.png") no-repeat;
      background-size: 100% 100%;
      vertical-align: middle;
    }
  }
}
</style>
