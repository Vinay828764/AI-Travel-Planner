import { View, Text, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { Colors } from '../../constants/Colors';
import CalendarPicker from 
'react-native-calendar-picker'
import moment from 'moment'
import { CreateTripContext } from "../Context/CreatetripContext";


export default function Select_dates() {
   const { tripData, setTripData } = useContext(CreateTripContext);
    const router = useRouter();
    const [startdate, setstartdate]=useState()
    const [enddate, setenddate]=useState()
    const navigation = useNavigation();
    useEffect(()=>{
        navigation.setOptions({
            headerShown:true,
            headerTransparent:true,
            headerTitle:''
        })
    },[])
   /// for show start and end date of travel 
    const onDateChange=(date,type)=>{
     console.log(date,type)
     if(type=='START_DATE'){
        setstartdate(moment(date))
     }
     else{
        setenddate(moment(date))
     }
    }
    const onDateSelect=()=>{
           if(!startdate&& !enddate){
            ToastAndroid.show('Please Select Start and End Date',ToastAndroid.LONG());
            return;
           }
           const toatldays= enddate.diff(startdate,'days')
           console.log(toatldays+1)
           setTripData({
            ...tripData,
            startdate:startdate,
            enddate:enddate,
            toatldays:toatldays+1
           })
           router.push('/Createtrips/Select_budget')
    }
    
  return (
    
     <View>
          <View style={{padding:25,paddingTop:75,backgroundColor:Colors.WHITE,height:'100%'}}>
      <Text style={{fontSize:35,marginTop:20}}>Select_dates</Text>

     <CalendarPicker onDateChange ={onDateChange}
      allowRangeSelection={true} minDate={new Date()} maxRangeDuration={6}
      selectRangeStyle={{
        backgroundColor:Colors.PRIMARY
      }}
      selectedDayTextStyle={{
        color:Colors.WHITE
      }}
     />
         </View>

         <TouchableOpacity onPress={onDateSelect} style={{padding:15,backgroundColor:Colors.PRIMARY,borderRadius:15,marginTop:20}}>
        <Text style={{textAlign:'center',color:Colors.WHITE,fontSize:20}}>Continue</Text>
      </TouchableOpacity>
     </View>
  )
}
// insall krne h date ko