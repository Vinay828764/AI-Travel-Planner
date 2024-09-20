import { View, Text, FlatList, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRouter } from 'expo-router';
import {OptionCard} from '../../constants/Options'
import { Colors } from '../../constants/Colors';
import { CreateTripContext } from "../Context/CreatetripContext";



export default function Select_budget() {
const [selectedoption,setselectedoption]=useState();
const { tripData, setTripData } = useContext(CreateTripContext);

  const router = useRouter()
  const navigation = useNavigation();
  useEffect(()=>{
      navigation.setOptions({
          headerShown:true,
          headerTransparent:true,
          headerTitle:''
      })
  },[])
  useEffect(()=>{
   setTripData({
        ...tripData,
        budget:selectedoption?.title
   })
  },[selectedoption])

   // check selcted option or not in budget option
   const OnclickContinue=()=>{
    if(!selectedoption){
      ToastAndroid.show('Select Your Budget',ToastAndroid.LONG)
      return;
    }
    router.push('/Createtrips/Review_trip')
   }


  return (
    <View style={{paddingTop:75,padding:25}}>
      <Text style={{fontSize:30,marginTop:20}}>Select-budget</Text>
      <View style={{marginTop:20}}>
        <Text style={{fontSize:20}}>Choose sepending habits for your trip</Text>

        <FlatList 
      data={SelectBudget}
      renderItem={({item,index})=>(
        <TouchableOpacity onPress={()=>setselectedoption(item)} style={{marginVertical:10,backgroundColor:Colors.LIGHT_GRAY}}>
          <OptionCard option={item} selected={selectedoption}>
          </OptionCard>
        </TouchableOpacity>
      )}
      />
      </View>
     
      <TouchableOpacity onPress={OnclickContinue} style={{padding:15,backgroundColor:Colors.PRIMARY,borderRadius:15,marginTop:20}}>
        <Text style={{textAlign:'center',color:Colors.WHITE,fontSize:20}}>Continue</Text>
      </TouchableOpacity>
    </View>
  )
}