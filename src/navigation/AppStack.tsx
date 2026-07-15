//import liraries
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppStackParamList } from './../../navigationTypes';

import LoginScreen from '../screens/LoginScreen/LoginScreen';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import AddInspectionScreen from '../screens/AddInspectionScreen/AddInspectionScreen';

const Stack = createNativeStackNavigator<AppStackParamList>();

const Routes = () => {
  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AddInspectionScreen"
          component={AddInspectionScreen}
          options={{ headerShown: false }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default Routes;
