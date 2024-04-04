import React from "react";
import { View, Text, StyleSheet, SafeAreaView, Pressable } from "react-native";

const Banner=()=>{

return(

    <View style={BannerStyle.Banner}></View>
)
};

const BannerStyle=StyleSheet.create({

   
        Banner: {
            width: 300,
            height: 150,
            marginTop: 20,
            borderRadius: 20,
            alignSelf: "center",
            backgroundColor: "white",
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 4,
          },
        
    
});

export default Banner;
