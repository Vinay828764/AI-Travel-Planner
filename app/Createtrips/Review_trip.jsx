import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from 'expo-router';
import { Colors } from '../../constants/Colors';
import { CreateTripContext } from "../Context/CreatetripContext";

import {Ionicons} from '@expo/vector-icons'
export default function Review_trip() {
    const { tripData, setTripData } = useContext(CreateTripContext);




  const navigation = useNavigation();
  useEffect(()=>{
      navigation.setOptions({
          headerShown:true,
          headerTransparent:true,
          headerTitle:''
      })
  },[])
  return (
    <View style={{padding:25,paddingTop:75,backgroundColor:Colors.WHITE,height:'100%'}}> 
      <Text style={{fontSize:35}}>Review_trip</Text>

      <View>
        <Text style={{fontSize:20}}>Before generating your trip,please review</Text>
      </View>
      <View style={{marginTop:20,display:'flex',flexDirection:'row',gap:20}}>
        <View style={{display:'flex',gap:20,flexDirection:'column'}}>
            <Ionicons name='location-sharp' size={24} color='black'/>
            <Text style={{fontSize:17}}>
             {tripData?.locationInfo.name}</Text>
        </View>
        <View style={{display:'flex',gap:20,flexDirection:'column'}}>
            <Ionicons name='location-sharp' size={24} color='black'/>
             <Text style={{fontSize:17}}>
             {tripData?.startdate + "To" + tripData?.enddate}</Text>
        </View>
        <View style={{display:'flex',gap:20,flexDirection:'column'}}>
            <Ionicons name='location-sharp' size={24} color='black'/>
             <Text style={{fontSize:17}}>
             {tripData?.toatldays}</Text>
        </View>
      </View>
      <View>
      <Ionicons name='calendar-number' size={24} color='black'/>
      <Text style={{fontSize:17}}>
      {tripData?.travelcount}</Text>
      </View>
      <View>
      <Ionicons name='move-outline' size={24} color='black'/>
      <Text style={{fontSize:17}}>
      {tripData?.budget}</Text>
      </View>
      <TouchableOpacity onPress={OnclickContinue} style={{padding:15,backgroundColor:Colors.PRIMARY,borderRadius:15,marginTop:20}}>
        <Text style={{textAlign:'center',color:Colors.WHITE,fontSize:20}}>Build my trip</Text>
      </TouchableOpacity>
    </View>
  )
}