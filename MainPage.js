import { StyleSheet } from "react-native";
import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialCommunityIcons, Feather } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";

import FeedPage from "./Feed/FeedPage";
import PostPage from "./Post/PostPage";
import PersonalPage from "./personal/PersonalPage";

// const Tab = createBottomTabNavigator();
// 使用 Material Bottom Tab
const Tab = createMaterialBottomTabNavigator();

export default function MainPage() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Feed"
        activeColor="#0A0A0A"
        inactiveColor="#FFFFFF"
        barStyle={styles.BottomTab}
      >
        <Tab.Screen
          name="Feed"
          component={FeedPage}
          options={{
            tabBarLabel: "动态",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={24} />
            ),
            headerShown: true,
          }}
        />
        <Tab.Screen
          name="Post"
          component={PostPage}
          options={{
            tabBarLabel: "发布",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="plus-box" color={color} size={24} />
            ),
          }}
        />
        <Tab.Screen
          name="Personal"
          component={PersonalPage}
          options={{
            tabBarLabel: "我",
            tabBarIcon: ({ color }) => (
              <Feather name="user" color={color} size={24} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  BottomTab: {
    backgroundColor: "#469FFF",
    height: 50,
  },
});
