import React, {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View, Alert} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Item} from './Home';
import uuid from 'react-native-uuid';

type Props = NativeStackScreenProps<RootStackParamList, 'AddNew'>;

const AddForm = ({navigation}: Props) => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [amount, setAmount] = useState('');
  const getFormattedDate = (d: Date): string => {
    const day = d.getDate();
    const month = d.getMonth() + 1;
    const year = d.getFullYear();

    return `${day}-${month}-${year}`;
  };

  const storeData = async (value: Item) => {
    try {
      let list: Item[] = [];
      const getJsonVal = await AsyncStorage.getItem('@storage_Key');

      if (getJsonVal != null) {
        list = [...JSON.parse(getJsonVal)];
      }

      const jsonValue = JSON.stringify([...list, value]);
      await AsyncStorage.setItem('@storage_Key', jsonValue);
      console.log('Success in store data');
    } catch (e) {
      Alert.alert('Error StoreData');
    }
  };

  const handleBtnPress = async () => {
    await storeData({
      id: uuid.v4().toString(),
      date: date.toDateString(),
      title,
      desc,
      amount,
    });
    navigation.navigate('Home');
  };

  return (
    <View>
      <DatePicker
        modal
        open={open}
        date={date}
        onConfirm={d => {
          setOpen(false);
          setDate(d);
        }}
        onCancel={() => {
          setOpen(false);
        }}
        mode="date"
      />
      <Text>Add new</Text>
      <TextInput
        style={styles.nameInput}
        placeholder="Date"
        onPressIn={() => setOpen(true)}
        value={getFormattedDate(date)}
      />
      <TextInput
        style={styles.nameInput}
        placeholder="Title"
        value={title}
        onChangeText={val => setTitle(val)}
      />
      <TextInput
        style={styles.nameInput}
        placeholder="Description"
        value={desc}
        onChangeText={val => setDesc(val)}
      />
      <TextInput
        style={styles.nameInput}
        placeholder="Amount (in Rs.)"
        inputMode="numeric"
        value={amount}
        onChangeText={val => setAmount(val)}
      />
      <Button title="Add" onPress={handleBtnPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  nameInput: {
    borderColor: '#0d99ff',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    backgroundColor: '#efefef',
  },
});

export default AddForm;
