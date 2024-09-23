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
import {useAppDispatch, useAppSelector} from '../../hooks';
import {addExpense, updateExpense} from '../redux/app.slice';
import * as Yup from 'yup';
import {useFormik} from 'formik';
import {ErrorMessage} from '../components/error';
import {useDarkMode} from '../hooks/useDarkMode';

// Validation schema using Yup
const validationSchema = Yup.object().shape({
  date: Yup.string().required('Date is required'),
  title: Yup.string().required('Title is required'),
  desc: Yup.string(),
  amount: Yup.number()
    .typeError('Amount must be a number')
    .required('Amount is required'),
});

const initialValues: Expence = {
  id: uuid.v4().toString(),
  date: new Date().toDateString(),
  title: '',
  desc: '',
  amount: '',
};

type Props = NativeStackScreenProps<RootStackParamList, 'AddNew'>;

const AddForm = ({navigation, route}: Props) => {
  const {isDarkMode} = useDarkMode();

  const styles = getStyles({isDarkMode});

  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const selectedExpense = useAppSelector(
    state => state.expenseReducer.selectedExpense,
  );
  const dipatch = useAppDispatch();
  const updateMode = route?.params?.updateMode;

  const filledValues: Expence = {
    id: selectedExpense.id ?? '',
    date: selectedExpense.date ?? '',
    title: selectedExpense.title ?? '',
    desc: selectedExpense.desc ?? '',
    amount: selectedExpense.amount ?? '',
  };

  const formik = useFormik<Expence>({
    initialValues: updateMode ? filledValues : initialValues,
    validationSchema: validationSchema,
    onSubmit: (values, {resetForm}) => {
      // Handle form submission
      const expense: Expence = {
        ...values,
      };
      if (updateMode) {
        dipatch(updateExpense(expense));
      } else {
        dipatch(addExpense(expense));
      }
      navigation.navigate('Home');
      resetForm();
    },
  });

  const handleConfirmDate = (selectedDate: Date) => {
    setDate(selectedDate);
    formik.setFieldValue('date', selectedDate.toDateString());
    setOpen(false);
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
            onConfirm={handleConfirmDate}
            onCancel={() => {
              setOpen(false);
            }}
            mode="date"
          />
          <View>
            <CustomTextInput
              placeholder="Date"
              onPressIn={() => setOpen(true)}
              value={formik.values.date}
            />
            <ErrorMessage error={formik.touched.date && formik.errors.date} />
          </View>

          <View>
            <CustomTextInput
              placeholder="Title"
              onChangeText={formik.handleChange('title')}
              onBlur={formik.handleBlur('title')}
              value={formik.values.title}
            />
            <ErrorMessage error={formik.touched.title && formik.errors.title} />
          </View>

          <CustomTextInput
            placeholder="Description (Optional)"
            onChangeText={formik.handleChange('desc')}
            onBlur={formik.handleBlur('desc')}
            value={formik.values.desc}
            multiline
            textAlignVertical="top"
          />
          <View>
            <CustomTextInput
              placeholder="Amount (in Rs.)"
              inputMode="numeric"
              onChangeText={formik.handleChange('amount')}
              onBlur={formik.handleBlur('amount')}
              value={formik.values.amount}
            />
            <ErrorMessage
              error={formik.touched.amount && formik.errors.amount}
            />
          </View>
        </View>
        <View style={styles.btnContainer}>
          <CustomButton label="Add" onPress={formik.handleSubmit} />
        </View>
      </View>
    </NavigationLayout>
  );
};

export default AddForm;

const getStyles = ({isDarkMode}: {isDarkMode: boolean}) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-between',
      paddingBottom: 24,
      backgroundColor: isDarkMode ? '#333333' : '#efefef',
    },
    topWrapper: {
      padding: 16,
      rowGap: 16,
    },
    btnContainer: {
      paddingHorizontal: 16,
      width: '100%',
    },
  });
