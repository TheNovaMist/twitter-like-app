import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

function InfoItem({ infoKey, infoValue, isEmpty }) {
  return (
    <View style={styles.infoItem}>
      <Text style={styles.infoKey}>{infoKey}</Text>
      <Text style={styles.infoValue}>{infoValue}</Text>
      <Text></Text>
      <Text></Text>
    </View>
  );
}

export default function PersonalInfo() {
  return (
    <View style={styles.default}>
      <View style={styles.imageBox}>
        <Image
          source={require("../assets/avatar/test2.png")}
          style={styles.profileImage}
        />
      </View>

      <InfoItem infoKey="名字" infoValue="云啊☁" />
      <InfoItem infoKey="简介" infoValue="一般有趣的人。" />
      <InfoItem infoKey="生日" infoValue="2001-08-09" />
      <InfoItem infoKey="所在地" infoValue="" />
    </View>
  );
}

const styles = StyleSheet.create({
  default: {
    flex: 1,
    // backgroundColor: "yellow",
    justifyContent: "center",
    // alignContent: "center",
    // alignItems: "center",
  },
  infoItem: {
    backgroundColor: "white",
    // flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    paddingLeft: 60,
    borderTopWidth: 0.2,
    borderColor: "grey",
    // alignContent: "space-around",
  },
  infoKey: {
    color: "grey",
  },
  infoValue: {
    fontWeight: "bold",
  },
  defaultInfoValue: {
    color: "#e3e3e3",
  },
  profileImage: {
    borderRadius: 100,
    resizeMode: "cover",
    margin: 10,
    height: 80,
    width: 80,
  },
  imageBox: {
    alignItems: "center",
  },
});
