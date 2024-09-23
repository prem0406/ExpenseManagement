import React from 'react';
import {View} from 'react-native';
import {CustomText, TextTypes} from './text';
import {StyleSheet} from 'react-native';
import {TextColors} from '../theme/colors';

interface IDetailComponent {
  label: string;
  value?: string;
}

export const DetailComponent = ({label, value = 'Value'}: IDetailComponent) => {
  return (
    <View style={styles.detailItem}>
      <CustomText type={TextTypes.body_small} color={TextColors.text_secondary}>
        {label}
      </CustomText>
      <CustomText>{value}</CustomText>
    </View>
  );
};

export const styles = StyleSheet.create({
  detailItem: {
    backgroundColor: 'white',
    padding: 16,
    rowGap: 8,
    borderRadius: 16,
  },
});
