import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Header } from "@react-navigation/elements";
import FeedList from "./FeedList";

export default function FeedPage({ navigation, route }) {
  return (
    <>
      <Header
        title="动态"
        headerTitleAlign="center"
        headerStyle={styles.header}
        headerTitleStyle={styles.headerTitle}
      />
      <View style={styles.headerLine} />
      <FeedList />
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
});
