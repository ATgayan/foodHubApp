import * as React from 'react';
import { StyleSheet, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './Component/homescreen';
import Order from './Component/ORDER';
import Addmenu from './Component/Addmenu';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    
    <View style={styles.container}>
      <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name='Home' component={HomeScreen} options={{headerShown:false}}/>
        <Stack.Screen name='MANAGE FOOD' component={Order}/>
         <Stack.Screen name='Addmenu' component={Addmenu}/> 
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
