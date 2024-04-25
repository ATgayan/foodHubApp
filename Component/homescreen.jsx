import React from "react";
import { View, Text, StyleSheet, SafeAreaView, Pressable } from "react-native";

import Navbar from "./HomeScreenCom/Navbar";
import Banner from "./HomeScreenCom/Banner";
import OderStateCom from "./HomeScreenCom/OderStateButon";
import ManageOderCom from "./HomeScreenCom/ManageOrder";
import Footer from "./HomeScreenCom/Footer";

const HomeScreen = ({ navigation }) => {
  return (
     <SafeAreaView style={styles.view}>
     <Navbar></Navbar>
      <Banner></Banner>
      <OderStateCom navigation={navigation}></OderStateCom>
      <ManageOderCom navigation={navigation}></ManageOderCom>
      <Footer navigation={navigation}></Footer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  view: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "100%",
    height: "100%",
    backgroundColor: "#EAEEED",
  },
});

export default HomeScreen;
