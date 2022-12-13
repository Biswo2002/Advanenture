import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screen/Home'
import Details from '../screen/Details'


const Stack = createNativeStackNavigator()

const PrivateRoutes = () => {
  return (
   <Stack.Navigator initialRouteName='Home' >
    <Stack.Screen
    name="Home"
    component={Home}
    options={{headerShown:false}}
    />
    <Stack.Screen
    name="Details"
    component={Details}
    options={{headerShown:false}}
    />
  </Stack.Navigator>
  )
}
export default PrivateRoutes


const styles = StyleSheet.create({})