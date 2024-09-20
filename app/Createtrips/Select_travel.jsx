import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import {useNavigation, useRouter} from 'expo-router'
import { Colors } from '../../constants/Colors'
import { SelectTravelList } from '../../constants/Options'
import Optioncard from '../../Components/CreateTripData/TravelOption'
import { CreateTripContext } from "../Context/CreatetripContext";


export default function Select_travel() {
    

  const router = useRouter()
    const [selected,setslected]=useState()
   const { tripData, setTripData } = useContext(CreateTripContext);
    // .....
    const navigation = useNavigation()
    useEffect(()=>{
        navigation.setOptions({
           headerShown :true,
           headerTransparent:true,
           headerTitle:''

        },[])
    })
    useEffect(()=>{
      setTripData({...tripData,travelcount:selected})
    },[selected])
  return (
    <View style={{padding:25,paddingTop:75,backgroundColor:Colors.WHITE,height:'100%'}}>
      <Text style={{fontSize:35,marginTop:20}}>Who's Traveling</Text>
      <View style={{marginTop:20}}>
        <Text style={{fontSize:23}}>
            Choose your travel's
        </Text>
        <FlatList
        data={SelectTravelList}
        renderItem={({item,index})=>(
            <TouchableOpacity onPress={()=>setslected(item)} style={{marginVertical:10}}>
                <Optioncard option={item} selected={selected}>

                </Optioncard>
            </TouchableOpacity>
        )}
        />
      </View>
      <TouchableOpacity onPress={()=>{router.push('/Createtrips/Select_travel')}} style={{padding:15,backgroundColor:Colors.PRIMARY,borderRadius:15,marginTop:20}}>
        <Text style={{textAlign:'center',color:Colors.WHITE,fontSize:20}}>Continue</Text>
      </TouchableOpacity>
    </View>
  )
}