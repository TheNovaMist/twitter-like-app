import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import {
  FontAwesome,
  MaterialCommunityIcons,
  AntDesign,
} from "@expo/vector-icons";

function LeftContainer({ _image }) {
  let a = 1;
  // const image = _image;
  return (
    <View>
      {/* <Image
        source={require("../assets/test.png")}
        style={styles.profileImage}
      /> */}
      <Image source={_image} style={styles.profileImage} />
    </View>
  );
}

function TweetFooter({ numberOfLike }) {
  const [numLike, setNumLike] = React.useState(numberOfLike);
  return (
    <View style={styles.tweetFooter}>
      {/* <View style={styles.iconWithNum}></View> */}
      <TouchableOpacity
        style={styles.iconWithNum}
        onPress={() => setNumLike(numLike + 1)}
      >
        <FontAwesome name="heart-o" color={"red"} size={20} />
        <Text style={styles.number}>{numLike}</Text>
      </TouchableOpacity>

      <View>
        <MaterialCommunityIcons
          name="comment-text-outline"
          color={"grey"}
          size={20}
        />
      </View>
      <View>
        <AntDesign name="retweet" color={"grey"} size={20} />
      </View>
    </View>
  );
}

function MainContainer({ item }) {
  return (
    <View style={styles.mainContainer}>
      {/* username */}
      <Text style={styles.userName}>{item.user.userName}</Text>
      {/* time */}
      <Text style={styles.postTime}>{item.postTime}分钟前</Text>
      {/* content */}
      {/* TODO: fix long text */}
      <Text>
        {/* 今天读书日啊，最近有什么想读的书不？说说看，我抽五位朋友实现梦想（手动）
        sfsf sfsfsfsf sfsfsfsf sfsf 石原里美 第一个孩子诞生，母子平安
        石原里美：过去这一年真的感受到被周围的大家支持着。另外，第一次感觉比自己的生命还重要的存在诞生了，我从心底感到幸福。
        虽然现在的工作节奏有所改变，但今后也希望能够愉快地工作，请大家多多支持!
        石原里美 */}
        {item.content}
      </Text>
      {/* footer */}
      <TweetFooter
        style={styles.tweetFooter}
        numberOfLike={item.numberOfLike}
      />
    </View>
  );
}

export default function Tweet({ item }) {
  let a = 1;
  const { user } = item;
  return (
    <>
      <View style={styles.container}>
        <LeftContainer _image={user.image} />
        <MainContainer item={item} />
        {/* divider line */}
      </View>
      <View style={styles.tweetLine} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // height: 250,
    backgroundColor: "#FFFFFF",
    // backgroundColor: "grey",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexDirection: "row",
    // padding: 10,
  },
  profileImage: {
    borderRadius: 100,
    resizeMode: "cover",
    margin: 10,
    height: 50,
    width: 50,
  },
  number: {
    color: "grey",
  },
  tweetFooter: {
    padding: 8,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  iconWithNum: {
    flexDirection: "row",
  },
  mainContainer: {
    margin: 10,
    flex: 1,
  },
  userName: {
    fontWeight: "bold",
    fontSize: 14,
  },
  postTime: {
    fontWeight: "bold",
    color: "#A3A3A3",
    fontSize: 10,
  },
  tweetLine: {
    borderColor: "grey",
    borderWidth: 0.5,
    marginLeft: 30,
    marginRight: 30,
  },
});
