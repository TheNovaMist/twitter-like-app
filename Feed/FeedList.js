import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import Tweet from "./Tweet";

import TweetData from "./FeedData";

// const ()=>() 的形式也行
// const Item = ({ title, description, index }) => (
//   <View>
//     <Text style={styles.title}>
//       {index}. {title}
//     </Text>
//     <Text> {description} </Text>
//   </View>
// );

export default function FeedList() {
  // 声明数据
  // const [data, setData] = React.useState(null);

  // // 获取数据
  // const getData = async () => {
  //   // const resp = await fetch("https://api.sampleapis.com/coffee/hot");
  //   // const data = await resp.json();
  //   // const data = coffeData;
  //   // const data = tweets;
  //   const data = TweetData.tweetData;
  //   setData(data);
  // };

  // // 第一次加载的时候获取数据
  // React.useEffect(() => {
  //   setData();
  // }, []);

  const data = TweetData.tweetData;

  // 样式
  const renderItem = ({ item, index }) => <Tweet item={item} />;

  return (
    <View style={styles.container}>
      {data && <FlatList data={data} renderItem={renderItem} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexDirection: "row",
    paddingBottom: 60,
  },
  tweetLine: {
    borderColor: "grey",
    borderWidth: 0.5,
    marginLeft: 30,
    marginRight: 30,
  },
});
