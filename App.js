import * as React from 'react';
import { StyleSheet, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';


import HomeScreen from './Component/homescreen';
import Order from './Component/ORDER';
import Addmenu from './Component/Addmenu';

//OrderState Component
import OrderState from './Component/OrderState';
//Manage Order Component
import OrderHistory from './Component/OderHistory';
import OrderStatus from './Component/OrderStatus';

const Stack = createNativeStackNavigator();
 


export default function App() {
  return (
    
    <View style={styles.container}>
      <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name='Home' component={HomeScreen} options={{headerShown:false}}/>
        <Stack.Screen name='MANAGE FOOD' component={Order}/>
        <Stack.Screen name='Addmenu' component={Addmenu}/> 
        <Stack.Screen name='Pending Order' component={OrderState}/> 
        <Stack.Screen name='Accept Order' component={OrderState}/> 
        <Stack.Screen name='Reject Order' component={OrderState}/> 
        <Stack.Screen name='Complite Order' component={OrderState}/>
        <Stack.Screen name='Order History' component={OrderHistory}/>
        <Stack.Screen name='Order State' component={OrderStatus}/>

      </Stack.Navigator>
    </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
