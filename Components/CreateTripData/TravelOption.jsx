import { View, Text } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'













export default function TravelOption({option,selected}) {
  return (
    <View style={[{padding:25,display:'flex',justifyContent:"space-between",flexDirection:'row',backgroundColor:Colors.LiGHT_GRAY,borderRadius:15},selected.id==option.id&&{borderWidth:3}]}>
        <View>
            <Text style={{fontSize:20,fontWeight:'bold'}}>{option?.title}</Text>
            <Text style={{fontSize:17,color:Colors.GRAY}}>{option?.desc}</Text>
        </View>
        <Text style={{fontSize:30}}>
             {option.icon}
        </Text>
    </View>
  )
}