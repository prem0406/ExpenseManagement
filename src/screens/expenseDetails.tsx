import React from 'react';
import {NavigationLayout} from '../components/navigationLayout';
import {useNavigation} from '@react-navigation/native';
import {CustomText} from '../components';

export const ExpenseDetails = () => {
  const navigation = useNavigation();
  return (
    <NavigationLayout
      headerText="Add New Expense"
      leftIcon={{name: 'back', onPress: navigation.goBack}}>
      <CustomText>ExpenseDetails</CustomText>
    </NavigationLayout>
  );
};
