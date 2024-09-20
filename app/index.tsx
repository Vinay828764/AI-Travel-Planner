import { View } from "react-native";
import Login from '../Components/Login' 
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {auth} from './../configs/Firebaseconfiq'
import { Redirect } from "expo-router";
export default function Index() {
  // In this code we chack if user already login in the app.
  const user = auth.currentUser;
  return (
    <GestureHandlerRootView>
      <View style={{flex:1}}>
       {
        user? <Redirect href={'/Mytrip'}/>:
        <Login/>
       }
    </View>
    </GestureHandlerRootView>
    
  );
}
// for used icons go for 
// icons.expo.fyi/index and select iconicons 