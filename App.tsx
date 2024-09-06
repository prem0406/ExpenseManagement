import React, {useState, useEffect} from 'react';
import Login from './src/screens/Login';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import AddForm from './src/screens/AddForm';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert, StatusBar} from 'react-native';

export type RootStackParamList = {
  // Login: undefined;
  Home: undefined;
  AddNew: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): React.JSX.Element {
  const [username, setUsername] = useState('TEST1');
  const getData = async () => {
    try {
      const name_str = await AsyncStorage.getItem('@user_name');

      if (name_str !== null) {
        setUsername(name_str);
      }
    } catch (e) {
      Alert.alert('Error in GetData');
    }
  };

  useEffect(() => {
    getData();
  }, []);

  console.log('username: ', username);

  return username ? (
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
      </Stack.Navigator>
    </NavigationContainer>
  ) : (
    <Login />
  );
}

export default App;
