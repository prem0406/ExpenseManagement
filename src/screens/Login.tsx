import React, {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View, Alert} from 'react-native';
// import {NativeStackScreenProps} from '@react-navigation/native-stack';
// import {RootStackParamList} from '../../App';
import AsyncStorage from '@react-native-async-storage/async-storage';

// type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

const Login = ({}) => {
  const [name, setName] = useState('');

  const handleNameChange = (value: string) => {
    setName(value);
  };

  const storeData = async (value: string) => {
    try {
      await AsyncStorage.setItem('@user_name', value);
    } catch (e) {
      Alert.alert('Error StoreData: ', value);
    }
  };

  const handleSubmit = () => {
    storeData(name);
    // navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.heading}>Login</Text>
      </View>
      <View>
        <TextInput
          style={styles.nameInput}
          placeholder="Your name"
          autoComplete="off"
          value={name}
          onChangeText={handleNameChange}
        />
      </View>
      <View style={styles.btnContainer}>
        <Button title="Proceed" onPress={handleSubmit} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    paddingHorizontal: 50,
  },
  nameInput: {
    borderColor: '#0d99ff',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
    backgroundColor: '#efefef',
  },
  heading: {
    fontSize: 18,
    color: '#0d99ff',
    fontWeight: '600',
    marginBottom: 30,
    textAlign: 'center',
  },
  btnContainer: {
    marginTop: 60,
  },
});

export default Login;
