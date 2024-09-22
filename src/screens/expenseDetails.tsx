import React from 'react';
import {NavigationLayout} from '../components/navigationLayout';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {
  ButtonVariant,
  CustomButton,
  CustomText,
  TextTypes,
} from '../components';
import {StyleSheet, View} from 'react-native';
import {Amount} from '../components/amount';
import {colors, TextColors} from '../theme/colors';
import {RootStackParamList} from '../../App';
import {useAppSelector} from '../../hooks';

export const ExpenseDetails = () => {
  const selectedExpense = useAppSelector(
    state => state.expenseReducer.selectedExpense,
  );
  const navigation =
    useNavigation<NavigationProp<RootStackParamList, 'ExpenseDetails'>>();
  const handleBtnAdd = () => {
    navigation.navigate('AddNew');
  };
  return (
    <NavigationLayout
      headerText={selectedExpense?.title || ''}
      leftIcon={{name: 'chevronBack', onPress: navigation.goBack}}>
      <View style={styles.container}>
        <View style={styles.banner}>
          <View style={styles.tag}>
            <CustomText color={TextColors.text_On_Dark}>Meal</CustomText>
          </View>
          <Amount amount="5000" color={TextColors.text_On_Dark} size="large" />
        </View>
        <View style={styles.tile}>
          <CustomText type={TextTypes.h1}>14 Sep 2024</CustomText>
        </View>
        <View style={styles.details}>
          <View style={styles.detailItem}>
            <CustomText
              type={TextTypes.body_small}
              color={TextColors.text_secondary}>
              Description
            </CustomText>
            <CustomText>Spent this amount on dinner at Biryani65</CustomText>
          </View>
        </View>

        <View style={styles.btnContainer}>
          <CustomButton label="Add new" onPress={handleBtnAdd} />
          <CustomButton label="Delete" variant={ButtonVariant.SECONDARY} />
        </View>
      </View>
    </NavigationLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tag: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: colors.newTextColors.accent_color,
    borderRadius: 12,
  },
  banner: {
    height: 200,
    backgroundColor: colors.newTextColors.primary_color_dark,
    alignItems: 'center',
    justifyContent: 'center',
    rowGap: 16,
  },
  tile: {
    backgroundColor: 'white',
    padding: 24,
    borderRadius: 16,
    marginHorizontal: 24,
    position: 'relative',
    top: -32,
    alignItems: 'center',
  },
  details: {
    paddingHorizontal: 16,
  },
  detailItem: {
    backgroundColor: 'white',
    padding: 16,
    rowGap: 8,
    borderRadius: 16,
  },
  btnContainer: {
    paddingHorizontal: 16,
    rowGap: 12,
    position: 'absolute',
    bottom: 24,
    width: '100%',
  },
});
