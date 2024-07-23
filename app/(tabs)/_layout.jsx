import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import {Colors} from "./../../constants/Colors";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ 
        headerShown: false,
        tabBarActiveTintColor: Colors.PRIMARY
    }}>
      <Tabs.Screen name="mytrip"
        options={{
          tabBarLabel:"My Trip",
          tabBarIcon:({color})=><Ionicons name="location-sharp" 
          size={24} color={color} />
        }}
      />
      <Tabs.Screen name="discover" />
      <Tabs.Screen name="profile" />
    </Tabs>
  );
}
