import React, { useState } from "react";
import {View,Text,SafeAreaView,StyleSheet,TextInput,TouchableOpacity} from "react-native";





const Addmenu=()=>{

    const [Itemcount,setItemCount]=useState(0);

    const increment=()=>{
        setItemCount(Itemcount+1);
    }

    const decriment=()=>{
         if(Itemcount>0){

            setItemCount(Itemcount-1);
         }
    }

    return(

       <SafeAreaView>
          <View style={Addmenustyle.view}>
            <View style={Addmenustyle.Inputlayer}>
               <Text>Food Name : </Text>
               <TextInput style={Addmenustyle.textinputstyle} placeholder="Enter text here" onChangeText={null}/>
            </View>
            <View style={Addmenustyle.Inputlayer}>
               <Text>Discription : </Text>
               <TextInput style={Addmenustyle.textinputstyle} placeholder="Enter text here" onChangeText={null}/>
            </View>

            <View style={Addmenustyle.Inputlayer}>
               <Text>QTY     : </Text>
               <Text>{Itemcount}</Text>
               <TouchableOpacity onPress={increment}><Text>  +  </Text></TouchableOpacity>
               <TouchableOpacity onPress={decriment}><Text>  -  </Text></TouchableOpacity>
            </View>
            <View style={Addmenustyle.Inputlayer}>
               <Text>Large price : </Text>
               <TextInput style={Addmenustyle.textinputstyle} placeholder="Enter text here" onChangeText={null}/>
            </View>
            <View style={Addmenustyle.Inputlayer}>
               <Text>Small price : </Text>
               <TextInput style={Addmenustyle.textinputstyle} placeholder="Enter text here" onChangeText={null}/>
            </View>
           
        </View>
       </SafeAreaView>
    )
}

export default Addmenu;


const Addmenustyle=StyleSheet.create({

    view:{
        display:'flex',
        flexDirection:'column',
        backgroundColor:'white',
        width:'100%',
        height:300,
        margin:10
    },
    textinputstyle:{
        borderBottomColor:'black',
        borderBottomWidth:2,
        borderBottomColor:'#cbcfcc',
        height:40,
        width:'40%',
    },
  Inputlayer:{
     display:'flex',
     flexDirection:'row',
     margin:10,
     alignItems:'center'
     
  }
})