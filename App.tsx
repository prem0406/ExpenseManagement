import React, {useState, useEffect} from 'react';
import {PersistGate} from 'redux-persist/integration/react';
import Login from './src/screens/Login';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import AddForm from './src/screens/AddForm';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert, StatusBar} from 'react-native';
import {ExpenseDetails} from './src/screens/expenseDetails';
import {Provider} from 'react-redux';
import {persistor, store} from './store';

export type RootStackParamList = {
  // Login: undefined;
  Home: undefined;
  AddNew: {updateMode?: boolean};
  ExpenseDetails: undefined;
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

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {username ? (
          <NavigationContainer>
            <StatusBar
              backgroundColor="transparent"
              barStyle="default"
              translucent
            />
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
        ) : (
          <Login />
        )}
      </PersistGate>
    </Provider>
  );
}

export default App;
