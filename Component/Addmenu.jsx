import React, { useState } from "react";
import {View,Text,SafeAreaView,StyleSheet,TextInput,TouchableOpacity} from "react-native";





const Addmenu=()=>{

    const [Itemcount,setItemCount]=useState(0);

    const cutomchangevlue=(num)=>{
      const integerValue = parseInt(num);
      setItemCount(integerValue);
      
    }

    const increment=()=>{

      const integerValue = parseInt(Itemcount);
      if(isNaN(integerValue)){
        setItemCount(1);
      } else {
        
         setItemCount(integerValue + 1);
      }
       
    }

    const decriment=()=>{
      const integerValue = parseInt(Itemcount);
      if(isNaN(integerValue)){
         setItemCount(0);
       } else if(integerValue>0) {
         
          setItemCount(integerValue - 1);
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
               <TextInput style={Addmenustyle.textinputstylebox} placeholder="Enter text here" multiline={true} numberOfLines={5} onChangeText={null}/>
            </View>

            <View style={Addmenustyle.Inputlayer}>
               <Text>QTY     : </Text>
               <TouchableOpacity onPress={increment} ><View style={Addmenustyle.Adddmenubutton}><Text style={{fontWeight:'200',fontSize:40}}>+</Text></View></TouchableOpacity>
               <TextInput onChangeText={cutomchangevlue} keyboardType="numeric" style={Addmenustyle.QTYStyle} maxLength={6}>{Itemcount}</TextInput>
               <TouchableOpacity onPress={decriment}><View style={Addmenustyle.Adddmenubutton}><Text style={{fontWeight:'200',fontSize:40}}>-</Text></View></TouchableOpacity>
            </View>
            <View style={Addmenustyle.Inputlayer}>
               <Text>Large price :    Rs   </Text>
               <TextInput style={Addmenustyle.PriceBox} placeholder="Price" onChangeText={null} keyboardType="numeric"/>
            </View>
            <View style={Addmenustyle.Inputlayer}>
               <Text>Small price :    Rs   </Text>
               <TextInput style={Addmenustyle.PriceBox} placeholder="Price" onChangeText={null} keyboardType="numeric"/>
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
        borderBottomWidth:1,
        borderBottomColor:'#cbcfcc',
        height:40,
        width:'40%',
    },
    textinputstylebox:{
        borderColor:'#dbdddc',
        borderWidth:1,
        borderRadius:10,
        width:'60%',
        height:100,
        textAlignVertical: 'top',
        padding:10
    },
  Inputlayer:{
     display:'flex',
     flexDirection:'row',
     margin:10,
     alignItems:'center'
     
  },

  QTYStyle:{
    borderWidth:1,
    width:70,
    height:40,
    padding:10,
    borderColor:'#dbdddc',
    textAlign:'center',
    borderRadius:10
  },

  PriceBox:{
   borderWidth:1,
   width:50,
   height:40,
   borderColor:'#dbdddc',
   textAlign:'center',
   borderRadius:10
  },
  Adddmenubutton:{
    width:60,
    height:60,
    margin:10,
    alignItems:'center',
    justifyContent:'center',
    fontWeight:'800',

  },

 

})