import { View, Text } from 'react-native'
import React, { useState } from 'react'
import {Colors} from '../../constants/Colors';
import Ionicons from '@expo/vector-icons'
import NewTrip from '../../Components/MyTrip/NewTrip';
const Mytrip = () => {

  const[userTrips,setusertrip]=useState([])










  return (
    <View style={{padding:25,paddingTop:55,backgroundColor:Colors.WHITE,height:'100%'}}>
      <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignContent:'center'}}>
      <Text style={{fontSize:35}}>My Trips</Text>
      <Ionicons name='add-circle' size={35} color ='black'/>
      </View>
      {userTrips?.length==0
       ?<NewTrip/>: null
      }
    </View>
  )
}

export default Mytrip