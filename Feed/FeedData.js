import { action, makeObservable, observable } from "mobx";

class TweetData {
  id = 8;
  addTweet(postText) {
    this.tweetData = [
      {
        // for iterator
        id: this.id,
        user: {
          id: "u0",
          userName: "云啊☁",
          image: require("../assets/avatar/test.png"),
        },
        postTime: "1", // 1min ago
        content: postText,
        numberOfLike: 1,
      },
      ...this.tweetData,
    ];
    this.id++;
  }

  deleteTweet(id) {
    this.tweetData = this.tweetData.filter((item) => item.id != id);
  }

  // 使用
  constructor() {
    makeObservable(this, {
      tweetData: observable,
      addTweet: action,
    });
  }

  tweetData = [
    {
      // for iterator
      id: 7,
      user: {
        id: "u7",
        userName: "FFF团微博支部",
        image: require("../assets/avatar/avatar6.jpg"),
      },
      postTime: "10", // 12min ago
      content:
        "TV动画「派对浪客诸葛孔明」英子演唱的插曲「Be Crazy For Me」完整版全曲MV公开\n \
\n\
タイトル：「Be Crazy For Me」\n\
歌　： EIKO starring 96猫\n\
作詞：Kenn Kato\n\
作曲：大西克巳\n\
編曲：日比野裕史",
      numberOfLike: 233,
    },
    {
      // for iterator
      id: 6,
      user: {
        id: "u6",
        userName: "贝斯手瓦豆鲁迪！！",
        image: require("../assets/avatar/test2.png"),
      },
      postTime: "12", // 12min ago
      content: "嗨！",
      numberOfLike: 521,
    },
    {
      // for iterator
      id: 5,
      user: {
        id: "u5",
        userName: "千禧Bot",
        image: require("../assets/avatar/avatar5.jpg"),
      },
      postTime: "12", // 12min ago
      content:
        "1227.\n\
兔斯基，2006\n\
“兔斯基算得上是表情包的开山鼻祖了吧，以前小学的时候QQ和朋友聊天都会兔斯基的表情包” ​​​ ​​​",
      numberOfLike: 33,
    },
    {
      id: 4,
      user: {
        id: "u4",
        userName: "香菜啊香菜",
        image: require("../assets/avatar/avatar4.jpg"),
      },
      postTime: "30",
      content: "阴冷的天气，有十一月的感觉。",
      numberOfLike: 17,
    },
    {
      id: 3,
      user: {
        id: "u3",
        userName: "星星_LittleStar",
        image: require("../assets/avatar/avatar3.jpg"),
      },
      postTime: "45",
      content:
        "两个家长的对话\n\
一个小孩说饿\n\
家长：“他嘴巴饿，肚子不饿。”\n\
\n\
笑死，我觉得自己也是。\n\
有时候觉得不饿，但就是嘴巴想吃点东西",
      numberOfLike: 10,
    },
    {
      id: 2,
      user: {
        id: "u2",
        userName: "奖杯",
        image: require("../assets/avatar/avatar2.jpeg"),
      },
      postTime: "54",
      content: "同时拿到了三个版本的Magic4！\n\
五一可以给大家出评测视频了",
      numberOfLike: 22,
    },
    {
      id: 1,
      user: {
        id: "u1",
        userName: "小饼干咔咔香",
        image: require("../assets/avatar/avatar1.jpg"),
      },
      postTime: "56",
      content: "拉布拉多真好 不管烧什么饭 好吃与否 都不挑刺 统统炫完 呜呜 感动",
      numberOfLike: 17,
    },
  ];
}

export default TweetData = new TweetData();
