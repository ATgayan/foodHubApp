import React from "react";
import { View, Text, StyleSheet, SafeAreaView, Pressable, TouchableOpacity  } from "react-native";

import { MaterialCommunityIcons } from '@expo/vector-icons';


const ManageOderCom=({navigation})=>{

    return(

        <View style={ManageOderStyle.ManageOrder}>
        <Text style={ManageOderStyle.OderStatetext}>Manage order</Text>
        <View style={ManageOderStyle.OderButtonSet}>
            <TouchableOpacity style={ManageOderStyle.btn} onPress={()=>navigation.navigate('Order History')}>
                <View style={ManageOderStyle.btndetails}>
                   <MaterialCommunityIcons name="history" size={30} color="black" />
                   <Text style={ManageOderStyle.BtnText}>Order history</Text>
                </View> 
            </TouchableOpacity>
            <TouchableOpacity style={ManageOderStyle.btn} onPress={()=>navigation.navigate('Order State')}>
            <View style={ManageOderStyle.btndetails}>
                   <MaterialCommunityIcons name="file-find-outline" size={30} color="black" />
                   <Text style={ManageOderStyle.BtnText}>Order Status</Text>
                </View>
            </TouchableOpacity>
        </View>
        </View>
    )
};

const ManageOderStyle=StyleSheet.create({

    ManageOrder:{
    
      
        height:200
      },
    OderStatetext :{
        padding:20,
        fontSize:20,
        fontWeight:'500'
    },
    OderButtonSet:{
        width:'80%',
        height:'50%',
        display:'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf:'center', 
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

export default ManageOderCom;