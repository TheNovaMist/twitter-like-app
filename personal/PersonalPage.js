import { StyleSheet, Text, View } from "react-native";
import PersonalHome, { HeaderImage } from "./PersonalHome";
import React from "react";
import PersonalInfo from "./PersonalInfo";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Person = createNativeStackNavigator();

export default function PersonalPage() {
  return (
    <View style={{ flex: 1 }} collapsable={false}>
      <Person.Navigator initialRouteName="PersonalHome">
        <Person.Screen
          name="PersonalHome"
          component={PersonalHome}
          options={{ headerTitle: (props) => <HeaderImage /> }}
        />
        <Person.Screen
          name="PersonalInfo"
          component={PersonalInfo}
          options={{ title: "编辑资料" }}
        />
      </Person.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({});
