import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

import { MyCarousel } from "./MyCarousel";
import person from "./PersonalData";

export default function PersonalHome({ navigation }) {
  return (
    <View style={styles.default}>
      <View style={styles.profileImageBar}>
        {/* TODO: image data */}
        <Image source={person[0].profileImage} style={styles.profileImage} />

        <View style={styles.followBox}>
          <Text style={styles.followText}>关注</Text>
          <Text style={styles.followNumber}>{person[0].follow}</Text>
        </View>
        <View style={styles.followBox}>
          <Text style={styles.followText}>被关注</Text>
          <Text style={styles.followNumber}>{person[0].followed}</Text>
        </View>
      </View>

      <View style={styles.profileRootBox}>
        <View style={styles.profileBox}>
          <Text style={styles.profileName}>{person[0].name}</Text>
          <Text style={styles.profilewords}>{person[0].profile}</Text>
        </View>

        {/* 自定义按钮 */}
        <View style={styles.PostButton}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate({
                name: "PersonalInfo",
                // params: { post: postText },
                // merge: true,
              });
            }}
          >
            <Text style={styles.PostButtonText}>编辑资料</Text>
          </TouchableOpacity>
        </View>

        {/* <View /> */}
        <View />
      </View>
      <Text style={styles.dividerLine} />
      <MyCarousel />
    </View>
  );
}

export function HeaderImage() {
  return <Image style={styles.headerImage} source={person[0].headerImage} />;
}

const styles = StyleSheet.create({
  default: {
    flex: 1,
    alignContent: "flex-start",
  },
  headerImage: {
    height: 150,
    resizeMode: "cover",
  },
  profileImage: {
    borderRadius: 100,
    resizeMode: "cover",
    margin: 10,
    height: 50,
    width: 50,
  },
  profileImageBar: {
    paddingLeft: 30,
    width: "80%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  followText: {
    color: "grey",
  },
  followNumber: {
    fontWeight: "bold",
  },
  followBox: {
    alignItems: "center",
  },
  profileBox: {
    flexDirection: "column",
    paddingLeft: 18,
  },
  profileName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  profilewords: {
    fontSize: 12,
    paddingLeft: 2,
  },
  dividerLine: {
    height: 5,
    borderColor: "grey",
    paddingTop: 1,
    borderBottomWidth: 1,
    marginLeft: 10,
    marginRight: 10,
  },
  PostButton: {
    // 圆角
    borderRadius: 35,
    backgroundColor: "#d7d7d7",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    width: 70,
    height: 30,
  },
  profileRootBox: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
