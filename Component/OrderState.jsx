import React, { useState } from "react";
import { View, Text, StyleSheet, SafeAreaView, Pressable, Modal, TouchableOpacity } from "react-native";

const OrderState = ({SectionName,OrderDetails}) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView style={styles.view}>
      <Pressable style={styles.footitem} onPress={() => setModalVisible(!modalVisible)}>
        <View style={styles.orderW}>
          <View style={styles.orderW1}></View>
          <View style={styles.orderW2}></View>
        </View>
      </Pressable>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <TouchableOpacity style={styles.modalOverlay} activeOpacity={1} onPress={() => setModalVisible(false)}>
          <View style={styles.modalView}>
            <TouchableOpacity
              style={styles.draggableArea}
              activeOpacity={1}
              onPress={() => setModalVisible(false)}
            />
            <Text style={styles.modalText}>Swipe down to close</Text>
          </View>
        </TouchableOpacity>
      </Modal>
    </SafeAreaView>
  );
}

export default OrderState;

const styles = StyleSheet.create({
  view: {
    display: "flex",
    flex:1,
    flexDirection: "column",
    justifyContent: "space-between",
    width: "100%",
    height: "100%",
    backgroundColor: "#EAEEED",
    
  },
  footitem:{
    height:'20%',
   
  },
  orderW: {
    width: '90%',
    height: '100%',
    margin: 10,
    backgroundColor: '#f3b405',
    alignSelf: 'center',
    borderRadius: 20,
    display: 'flex',
    flexDirection: 'row',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  orderW1: {
    width: '50%',
    height: '100%',
    marginLeft: 10,
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  orderW2: {
    width: '50%',
    height: '100%',
    backgroundColor: '#cecbcb',
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalView: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 350,
    backgroundColor: 'white',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 3,
    },
    shadowOpacity: 1.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  draggableArea: {
    width: '100%',
    height: 40,
    
  },
});
