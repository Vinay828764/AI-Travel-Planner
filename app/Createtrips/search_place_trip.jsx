import { View, Text } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { Colors } from "../../constants/Colors";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useNavigation, useRouter } from "expo-router";
import { CreateTripContext } from "../Context/CreatetripContext";
const search_place_trip = () => {
  const navigation = useNavigation();
  const router = useRouter();
  const { tripData, setTripData } = useContext(CreateTripContext);
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "Search",
    });
  }, []);
  useEffect(()=>{
    console.log(tripData);
  },[tripData])  // [tripdata is write outside )]

  return (
    <View
      style={{
        padding: 25,
        paddingTop: 75,
        height: "100%",
        backgroundColor: Colors.WHITE,
      }}
    >
      // GooglePlacesAutocomplete
      <GooglePlacesAutocomplete
        placeholder="Search Place"
        fetchDetails={true}
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
          console.log(details?.geometry.location);
          console.log(details?.photos[0]?.photo_reference);
          console.log(details?.url);
          setTripData({
            LocationInfo: {
              name: data.description,
              coordinates: details?.geometry.location,
              image: details?.photos[0]?.photo_reference,
              url: details?.url,
            },
          });
          router.push('/Createtrips/Select_travel')


        }}
        query={{
          key: process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY,
          language: "en",
        }}
        styles={{
            textInputContainer:{
                borderWidth:1,
                borderRadius:5,
                marginTop:25
            }
        }}
      />
    </View>
  );
};

export default search_place_trip;
