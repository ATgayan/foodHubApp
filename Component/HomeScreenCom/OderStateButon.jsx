import React from "react";
import { View, Text, StyleSheet,  TouchableOpacity } from "react-native";

import { Entypo,AntDesign } from '@expo/vector-icons';

const OderStateCom = () => {
  return (
    <View style={OderStateStyle.OderState}>
      <Text style={OderStateStyle.OderStatetext}>Order State</Text>
      <View style={OderStateStyle.OderStateButtonset}>
        <View style={OderStateStyle.OderButtonSet}>
            <TouchableOpacity style={OderStateStyle.btn}>
                <View style={OderStateStyle.btndetails}>
                   <Entypo name="circular-graph" size={30} color="black" />
                   <Text style={OderStateStyle.BtnText}>Pending Order</Text>
                </View> 
            </TouchableOpacity>
            <TouchableOpacity style={OderStateStyle.btn}>
            <View style={OderStateStyle.btndetails}>
                   <AntDesign name="checkcircleo" size={30} color="black" />
                   <Text style={OderStateStyle.BtnText}>Accept Order</Text>
                </View>
            </TouchableOpacity>
        </View>
        <View style={OderStateStyle.OderButtonSet}>
            <TouchableOpacity style={OderStateStyle.btn}>
            <View style={OderStateStyle.btndetails}>
                   <AntDesign name="carryout" size={30} color="black" />
                   <Text style={OderStateStyle.BtnText}>Compleat order</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={OderStateStyle.btn}>
            <View style={OderStateStyle.btndetails}>
                   <AntDesign name="closesquareo" size={30} color="black" />
                   <Text style={OderStateStyle.BtnText}>Reject Order</Text>
                </View>
            </TouchableOpacity>
        </View>

      </View>
    </View>
  );
};

const OderStateStyle=StyleSheet.create({

    OderState:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between',
        height:300
      },
    
      OderStatetext :{
          padding:20,
          fontSize:20,
          fontWeight:'500'
      },
    
      OderStateButtonset:{
         display:'flex',
         flexDirection:'column',
         justifyContent:'space-between',
         alignItems:'center',
          width:350,
          height:220,
          alignSelf:'center',
          marginBottom:20
      },
      OderButtonSet:{
        width:'80%',
        height:'50%',
        display:'flex',
        flexDirection: 'row',
        justifyContent: 'space-between', 
        padding: 10,
      },

      

     btn:{

        width:'45%',
        height:'95%',
        backgroundColor:'white',  
        borderRadius:10,
        alignItems:'center',
        shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 4,
      },    

      btndetails:{

        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between',
        padding:15,
        width:'100%',
        height:'100%',
        alignItems:'center',
        borderRadius:10,
      },

      BtnText:{

        fontSize:12,
        fontWeight:'500'
      }


});

export default OderStateCom;
