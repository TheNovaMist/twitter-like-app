import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Header, HeaderBackButton } from "@react-navigation/elements";
import { useFocusEffect } from "@react-navigation/native";
import React from "react";
import TweetData from "../Feed/FeedData";

export default // 发布动态的界面
function PostPage({ navigation }) {
  // 保存文本的变量和更新文本的函数
  const [postText, setPostText] = React.useState("");

  const inputRef = React.useRef();

  useFocusEffect(() => {
    if (inputRef.current !== null) {
      inputRef.current.focus();
    }
  });

  return (
    <>
      <Header
        title="发布新动态"
        headerTitleAlign="center"
        headerStyle={styles.header}
        headerTitleStyle={styles.headerTitle}
        headerLeft={() => (
          <HeaderBackButton
            onPress={() => {
              navigation.goBack();
            }}
          />
        )}
      />
      <View style={styles.headerLine} />

      <TextInput
        ref={inputRef}
        autoFocus={true}
        multiline
        placeholder="分享你的想法..."
        style={styles.CreatePost}
        value={postText}
        onChangeText={setPostText}
      />

      {/* 发布按钮 */}
      <View style={styles.PostButton}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate({
              name: "Feed",
              params: { post: postText },
              merge: true,
            });
            console.log("t");
            // 增加动态
            TweetData.addTweet(postText);
            console.log(TweetData.tweetData);
          }}
        >
          <Text style={styles.PostButtonText}>发布</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  headerLine: {
    borderColor: "gray",
    borderWidth: 0.3,
    marginTop: 5,
  },
  header: {
    height: 60,
    borderBottomWidth: 10,
  },
  headerTitle: {
    fontSize: 18,
  },
  CreatePost: {
    height: 200,
    padding: 20,
    backgroundColor: "white",
  },
  PostButton: {
    // 圆角
    borderRadius: 35,
    backgroundColor: "#FFE411",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    width: 70,
    height: 30,
  },
  PostButtonText: {
    color: "black",
  },
});
