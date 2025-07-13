import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import JoinRoomScreen from './screens/JoinRoomScreen';
import CatalogScreen from './screens/CatalogScreen';
import ChatScreen from './screens/ChatScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
   <NavigationContainer>
      <Stack.Navigator initialRouteName='JoinRoom' screenOptions={{
        headerShown:false
      }}>
          <Stack.Screen name='JoinRoom' component={JoinRoomScreen}/>
          <Stack.Screen name='Catalog' component={CatalogScreen}/>
          <Stack.Screen name='Chat' component={ChatScreen}/>
      </Stack.Navigator>
   </NavigationContainer>
  )
}