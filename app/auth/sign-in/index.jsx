import { View, Text, TextInput, ToastAndroid } from "react-native";
import React, { useEffect, useState } from "react";
import { router, useNavigation, useRouter } from "expo-router";
import { Colors } from "../../../constants/Colors";
import { TouchableOpacity } from "react-native-gesture-handler";
import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet } from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../configs/Firebaseconfiq";
export default function index() {
  const [email, setemail] = useState();
  const [password, setpassword] = useState();

  // it is used for remove the header which is shown inside every page because we have not use any stack tag.
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  // router for sign up
  const router = useRouter();
  //  sign in user
  const signInUser = () => {
    if (!email && !password) {
      ToastAndroid.show("Please Enter all details", ToastAndroid.LONG);
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        ToastAndroid.show("Login Successfull", ToastAndroid.LONG);
        router.replace("/Mytrip");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage)
        if (errorCode == "auth/invalid-credential")
        {
          ToastAndroid.show("Invalid credential", ToastAndroid.LONG);
        }
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
      <Text style={{ fontSize: 30, marginTop: 20 }}>Let's Sign You In</Text>
      <Text style={{ fontSize: 30, color: Colors.GRAY, marginTop: 20 }}>
        Welcome Back
      </Text>
      <Text style={{ fontSize: 30, color: Colors.GRAY, marginTop: 10 }}>
        You've been missed!
      </Text>
      {/* // Email */}
      <View style={{ marginTop: 50 }}>
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
          minlength="6"
          placeholder="Enter Your Password"
          style={styles.input}
          onChangeText={(value) => setpassword(value)}
        />
      </View>

      {/* Sign in button */}
      <TouchableOpacity style={styles.button} onPress={signInUser}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
      {/* account button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.replace("auth/Sign-up")}
      >
        <Text style={styles.buttonText}>Create Account</Text>
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
