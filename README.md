# hwplayer
将华为的直播web播放脚本hwplayer转为npm包

目前暂时只支持播放mp4

## 使用方法

import { hwplayerloaded, HWPlayer } from "hwplayer";

hwplayerloaded(function () {

​      let options = {

​        //是否显示控制栏，包括进度条，播放暂停按钮，音量调节等组件

​        controls: true,

​        autoplay: true,

​        userId: "playerDemo01",

​        domainId: "hwPlayer",

​        width: 375,

​        height: 212,

​        playbackRates: [0.5, 1, 1.5, 2],

​        loop: false,

​        muted: true,

​      };

​      let player = new HWPlayer("test", options, () => {

​        //播放器已经准备好了

​        player.src({

​          src:

​            "https://35.cdn-vod.huaweicloud.com/asset/ba4f5df688f4ed6f569470d688ec4a22/c5d8003cb1d108035d3a902adb2bc5cc.mp4", //视频地址

​          type: "video/mp4",

​        });

​        // "this"指向的是HWPlayer的实例对象player

​        player.play();

​        // 使用事件监听

​        player.on("ended", function () {

​          //播放结束了

​          console.log("end playing");

​        });

​        player.on("play", function () {

​          console.log("start playing");

​        });

​      });

​    });