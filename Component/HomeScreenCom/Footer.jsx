import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { AntDesign, Ionicons } from '@expo/vector-icons';


const Footer = ({navigation}) => {
   
  return (

    <View style={FooterStyle.Footer}>
      
        <Pressable style={FooterStyle.btn} onPress={() => navigation.navigate('/')}>
          <AntDesign name="home" size={30} color="black" />
          <Text>HOME</Text>
        </Pressable>
      
      <Pressable style={FooterStyle.btn} onPress={() => navigation.navigate('MANAGE FOOD')}>
        <Ionicons name="fast-food-outline" size={30} color="black" />
        <Text>ORDER</Text>
      </Pressable>
      <Pressable style={FooterStyle.btn} onPress={()=>navigation.navigate('Addmenu')}>
        <AntDesign name="addfile" size={30} color="black" />
        <Text>ADD MENU</Text>
      </Pressable>
    </View>
  );
};

const FooterStyle = StyleSheet.create({
  Footer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    height: 60,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  btn: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 25,
    marginRight: 25,
    width: 80,
    height: 60,
  }
});

export default Footer;
