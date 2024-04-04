import React from "react";
import { View, Text, StyleSheet, SafeAreaView, Pressable } from "react-native";


const Footer=()=>{
  
    return(

        <View style={FooterStyle.Footer}>

          <Text>HOME</Text>
          <Text>HOME</Text>
          <Text>HOME</Text>
          
        </View>
    )

};


const FooterStyle=StyleSheet.create({

    Footer:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',

        height:60,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 4,
      }
});


export default Footer;