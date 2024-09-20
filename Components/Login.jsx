import { View, Text, Image } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";

import {
  GestureHandlerRootView,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { StyleSheet } from "react-native";
const Login = () => {
  // it is used for navigate screens
  const router = useRouter();
  return (
    <View style={{ backgroundColor: Colors.WHITE }}>
      <Image
        source={require("../assets/images/hero.jpg")}
        style={{ width: "100%", height:'100%' }}
      ></Image>
      <View style={styles.Container}>
        <Text
          style={{
            fontSize: 35,
            fontWeight: "bold",
            textAlign: "center",
            marginTop: 10,
          }}
        >
          AI Travel Planner
        </Text>
        <Text
          style={{
            fontSize: 17,
            textAlign: "center",
            color: Colors.GRAY,
            fontWeight: "bold",
            marginTop: 20,
          }}
        >
          Discover your next adventure effortlessly personalized at your
          fingertips.travel smarter with AI-driven Insights.
        </Text>
        <GestureHandlerRootView>
          <TouchableOpacity
            onPress={() => router.push("auth/sign-in")}
            style={styles.button}
          >
            <Text
              style={{
                color: Colors.WHITE,
                fontSize: 17,
                textAlign: "center",
              }}
            >
              Get Started
            </Text>
          </TouchableOpacity>
        </GestureHandlerRootView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    backgroundColor:'#efd2c8',
    marginTop: 20,
    // height: "100%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 15,
    position:'absolute',
    bottom:0,
    width:'100%'

  },
  button: {
    padding: 15,
    backgroundColor: Colors.PRIMARY,
    borderRadius: 99,
    marginTop: "15%",
    textAlign: "center",
  },
});
export default Login;
