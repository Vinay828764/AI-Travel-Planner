import { View, Text, ToastAndroid, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRouter } from "expo-router";
import { Colors } from "../../../constants/Colors";
import { TouchableOpacity } from "react-native-gesture-handler";
import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet } from "react-native";

// Import Firebase Authentication
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../configs/Firebaseconfiq";

export default function index() {
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const [FullName, setfullname] = useState();

  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  const router = useRouter();

  // for create a new user firebase
  const OnCreateAccount = async () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email && !password && !FullName) {
      ToastAndroid.show("Please enter all details", ToastAndroid.BOTTOM);
      return;
    }
    // Check if password has at least 6 characters
    if (password.length < 6) {
      ToastAndroid.show(
        "Password must be at least 6 characters",
        ToastAndroid.BOTTOM
      );
      return;
    }
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(user);
        ToastAndroid.show("User Created Successfully", ToastAndroid.BOTTOM);
        router.replace("/Mytrip");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage, errorCode);
      });
  };

  return (
    <View
      style={{
        padding: 25,
        paddingTop: 40,
        backgroundColor: Colors.WHITE,
        height: "100%",
      }}
    >
      <TouchableOpacity onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <Text style={{ fontSize: 30, marginTop: 30 }}>Create New Account</Text>
      {/* Full Name */}
      <View style={{ marginTop: 50 }}>
        <Text>FullName</Text>
        <TextInput
          placeholder="Enter Your Name"
          style={styles.input}
          onChangeText={(value) => setfullname(value)}
        />
      </View>
      {/* // Email */}
      <View style={{ marginTop: 20 }}>
        <Text>Email</Text>
        <TextInput
          placeholder="Enter Your Email"
          style={styles.input}
          onChangeText={(value) => setemail(value)}
        />
      </View>
      {/* //password */}
      <View style={{ marginTop: 20 }}>
        <Text>Password</Text>
        <TextInput
          secureTextEntry={true}
          placeholder="Enter Your Password"
          style={styles.input}
          onChangeText={(value) => setpassword(value)}
        />
      </View>
      <TouchableOpacity onPress={OnCreateAccount} style={styles.button}>
        <Text style={styles.buttonText}>Create Account</Text>
      </TouchableOpacity>
      {/* account button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.replace("auth/sign-in")}
      >
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  input: {
    padding: 15,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: Colors.GRAY,
  },
  button: {
    padding: 15,
    backgroundColor: Colors.PRIMARY,
    borderRadius: 15,
    marginTop: 50,
  },
  buttonText: {
    textAlign: "center",
    color: Colors.WHITE,
  },
});
