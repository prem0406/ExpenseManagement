import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import AddForm from '../screens/AddForm';
import {ExpenseDetails} from '../screens/expenseDetails';

export type RootStackParamList = {
  // Login: undefined;
  Home: undefined;
  AddNew?: {updateMode?: boolean};
  ExpenseDetails: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const AppNavigation = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="transparent" barStyle="default" translucent />
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}>
        {/* <Stack.Screen
      name="Login"
      component={Login}
      options={{title: 'Login'}}
    /> */}
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="AddNew" component={AddForm} />
        <Stack.Screen name="ExpenseDetails" component={ExpenseDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
