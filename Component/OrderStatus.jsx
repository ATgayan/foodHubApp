import React, { useState } from "react";
import { View, Text, StyleSheet, SafeAreaView, Pressable, Modal, TouchableOpacity,TextInput } from "react-native";



const OrderStatus=()=>{
  
    return(

        <View>
            <TextInput placeholder="enter" style={OrderStateStyle.serchbar}></TextInput>
        </View>
    )

}

export default OrderStatus;

const OrderStateStyle=StyleSheet.create({
      
    serchbar:{
        width:100,
        alignItems:'center',
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',

        
        

    }

})