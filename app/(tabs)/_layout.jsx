import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../../constants/Colors";
const _layout = () => {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="Mytrip"
        options={{
          tabBarActiveTintColor: Colors.PRIMARY,
          tabBarLabel: "My Trip",
          tabBarIcon: ({ color }) => (
            <Ionicons name="location-shape" size={24} color={Colors} />
          ),
        }}
      />
      <Tabs.Screen
        name="Discover"
        options={{
          tabBarActiveTintColor: Colors.PRIMARY,
          tabBarLabel: "My Trip",
          tabBarIcon: ({ color }) => (
            <Ionicons name="globe-shape" size={24} color={Colors} />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          tabBarActiveTintColor: Colors.PRIMARY,
          tabBarLabel: "My Trip",
          tabBarIcon: ({ color }) => (
            <Ionicons name="people-circle" size={24} color={Colors} />
          ),
        }}
      />
    </Tabs>
  );
};

export default _layout;
