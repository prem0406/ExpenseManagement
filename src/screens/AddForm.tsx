import React, {useState} from 'react';
import {View, Alert, StyleSheet} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Item} from './Home';
import uuid from 'react-native-uuid';
import {CustomButton} from '../components';
import {CustomTextInput} from '../components/input';
import {NavigationLayout} from '../components/navigationLayout';

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
    <NavigationLayout
      headerText="Add New Expense"
      leftIcon={{name: 'back', onPress: navigation.goBack}}>
      <View style={styles.container}>
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
        <CustomTextInput
          placeholder="Date"
          onPressIn={() => setOpen(true)}
          value={getFormattedDate(date)}
        />
        <CustomTextInput
          placeholder="Title"
          value={title}
          onChangeText={val => setTitle(val)}
        />
        <CustomTextInput
          placeholder="Description (Optional)"
          value={desc}
          onChangeText={val => setDesc(val)}
        />
        <CustomTextInput
          placeholder="Amount (in Rs.)"
          inputMode="numeric"
          value={amount}
          onChangeText={val => setAmount(val)}
        />
        <CustomButton label="Add" onPress={handleBtnPress} />
      </View>
    </NavigationLayout>
  );
};

export default AddForm;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    rowGap: 16,
  },
});
