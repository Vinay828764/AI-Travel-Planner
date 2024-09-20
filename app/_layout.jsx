import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import {CreateTripContext} from '../Context/CreatetripContext'
import { useState } from "react";

export default function RootLayout() {
  useFonts({
    outfit: require("../assets/fonts/Outfit-Regular.ttf"),
    "outfit-Medium": require("../assets/fonts/Outfit-Medium.ttf"),
    "outfit-Bold": require("../assets/fonts/Outfit-Bold.ttf"),
  });

  const [tripData,setTripData]=useState([])
  return (
    // // <GestureHandlerRootView>
    //   {/* <Stack screenOptions={{headerShown:false , title: 'Home'}}> */}
    //   <Stack screenOptions={{}}>
    //   <Stack.Screen name="(tabs)" />
    // </Stack>
    // // </GestureHandlerRootView>
    // <Stack/>
    <CreateTripContext.Provider value={{tripData,setTripData}}>
    <GestureHandlerRootView>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
      </Stack>
    </GestureHandlerRootView>
    </CreateTripContext.Provider>
  );
}
