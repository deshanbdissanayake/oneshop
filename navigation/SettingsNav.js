import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import SettingsScreen from '../screens/SettingsScreen';

const Stack = createStackNavigator();

const SettingsNav = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Settings Screen" component={SettingsScreen} options={{headerShown: false}} />
    </Stack.Navigator>
  )
}

export default SettingsNav