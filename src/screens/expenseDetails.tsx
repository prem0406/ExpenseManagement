import React from 'react';
import {NavigationLayout} from '../components/navigationLayout';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {ButtonVariant, CustomButton} from '../components';
import {StyleSheet, View} from 'react-native';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {removeExpense} from '../redux/app.slice';
import {DetailComponent} from '../components/detail';
import {useDarkMode} from '../hooks/useDarkMode';
import {RootStackParamList} from '../navigation/appNavigation';

export const ExpenseDetails = () => {
  const {isDarkMode} = useDarkMode();

  const styles = getStyles({isDarkMode});
  const selectedExpense = useAppSelector(
    state => state.expenseReducer.selectedExpense,
  );
  const dispatch = useAppDispatch();
  const navigation =
    useNavigation<NavigationProp<RootStackParamList, 'ExpenseDetails'>>();

  const handleEditBtn = () => {
    navigation.navigate('AddNew', {updateMode: true});
  };

  const onPressDelete = () => {
    dispatch(removeExpense({id: selectedExpense.id}));
    navigation.navigate('Home');
  };

  return (
    <NavigationLayout
      headerText={selectedExpense?.title}
      leftIcon={{name: 'chevronBack', onPress: navigation.goBack}}>
      <View style={styles.container}>
        <View style={styles.details}>
          <DetailComponent
            label="Amount"
            value={`Rs. ${selectedExpense.amount}`}
          />

          <DetailComponent label="Date" value={selectedExpense.date} />

          <DetailComponent label="Category" value={'Groceries'} />
          {selectedExpense.desc && (
            <DetailComponent label="Description" value={selectedExpense.desc} />
          )}
        </View>

        <View style={styles.btnContainer}>
          <CustomButton label="edit" onPress={handleEditBtn} />
          <CustomButton
            label="Delete"
            variant={ButtonVariant.SECONDARY}
            onPress={onPressDelete}
          />
        </View>
      </View>
    </NavigationLayout>
  );
};

const getStyles = ({isDarkMode}: {isDarkMode: boolean}) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-between',
      paddingTop: 16,
      paddingBottom: 24,
      backgroundColor: isDarkMode ? '#333333' : '#efefef',
    },

    details: {
      paddingHorizontal: 16,
      rowGap: 12,
    },
    btnContainer: {
      paddingHorizontal: 16,
      rowGap: 12,
    },
  });
