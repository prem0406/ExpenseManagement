import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';

import uuid from 'react-native-uuid';
import {CustomButton} from '../components';
import {CustomTextInput} from '../components/input';
import {NavigationLayout} from '../components/navigationLayout';
import {Expence} from '../types';
import {useAppDispatch} from '../../hooks';
import {addExpense} from '../redux/app.slice';

type Props = NativeStackScreenProps<RootStackParamList, 'AddNew'>;

const AddForm = ({navigation}: Props) => {
  const dipatch = useAppDispatch();
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

  const handleBtnPress = async () => {
    const expense: Expence = {
      id: uuid.v4().toString(),
      date: date.toDateString(),
      title,
      desc,
      amount,
    };
    dipatch(addExpense(expense));
    navigation.navigate('Home');
  };

  return (
    <NavigationLayout
      headerText="Add New Expense"
      leftIcon={{name: 'chevronBack', onPress: navigation.goBack}}>
      <View style={styles.container}>
        <View style={styles.topWrapper}>
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
        </View>
        <View style={styles.btnContainer}>
          <CustomButton label="Add" onPress={handleBtnPress} />
        </View>
      </View>
    </NavigationLayout>
  );
};

export default AddForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topWrapper: {
    padding: 16,
    rowGap: 16,
  },
  btnContainer: {
    paddingHorizontal: 16,
    rowGap: 12,
    position: 'absolute',
    bottom: 24,
    width: '100%',
  },
});
