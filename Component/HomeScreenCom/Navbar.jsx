import React from "react";
import { View, Text, StyleSheet, SafeAreaView, Pressable } from "react-native";

import { Ionicons, AntDesign } from "@expo/vector-icons";

const Navbar = () => {
     
  return (   
    <View>
      
        <View style={styles.Nav}>
          <Ionicons name="menu" color={"balck"} size={25}></Ionicons>
          <Text style={styles.hedingtext}>ABC Shop  <AntDesign name="down" size={15}></AntDesign></Text>
          <View style={styles.profilephoto}></View>
        </View>
    
    </View>

  );
};

const styles = StyleSheet.create({
  
  Nav: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    height: 60,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    shadowColor: "#000",
    padding:15,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
 
  hedingtext: {
    fontSize: 20,
    fontWeight:'500'
  },

  profilephoto: {
    height: 35,
    width: 35,
    borderRadius: 30,
    borderWidth: 2,
  },
 
  
 
});

export default Navbar;
