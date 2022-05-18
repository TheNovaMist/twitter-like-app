import * as React from "react";
import { StyleSheet, Text, View, Button, TextInput, Image } from "react-native";
import MainPage from "./MainPage";

export default function App() {
  return <MainPage />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
