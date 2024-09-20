import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import Ionicons from '@expo/vector-icons'
import { Colors } from '../../constants/Colors'
import{useNavigation, useRouter} from 'expo-router'

const NewTrip = () => {
    const router = useRouter()
    const navigation= useNavigation()
    useEffect(()=>{
        navigation.setOptions({
            headerShown:true,
            headerTransparent:true,
            headertitle:'Search'
        })
    },[])
  return (
    <View style={{padding:20,marginTop:50,display:'flex',alignItems:'center',gap:20}}>
      <Ionicons name='location-shape' size={30} color ='black'/>
      <Text style={{fontSize:25,textTransform:'uppercase'}}>No Trips Planned yet.</Text>
      <Text style={{fontSize:20,textTransform:'uppercase',textAlign:'center',color:Colors.GRAY}}>Looks like its time to plan a new travel experience! get started below</Text>
     <TouchableOpacity style={{padding:10,paddingHorizontal:30,borderRadius:15,backgroundColor:Colors.WHITE}} onPress={router.push('/Createtrips/search_place_trip')}>
        <Text style={{color:Colors.WHITE,fontSize:20}}>Start New Trip</Text>
     </TouchableOpacity>


    </View>
  )
}

export default NewTrip