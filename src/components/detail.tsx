import React from 'react';
import {View} from 'react-native';
import {CustomText, TextTypes} from './text';
import {StyleSheet} from 'react-native';
import {colors, TextColors} from '../theme/colors';
import {useDarkMode} from '../hooks/useDarkMode';

interface IDetailComponent {
  label: string;
  value?: string;
}

export const DetailComponent = ({label, value = 'Value'}: IDetailComponent) => {
  const {isDarkMode} = useDarkMode();

  const styles = getStyles({isDarkMode});

  return (
    <View style={styles.detailItem}>
      <CustomText
        type={TextTypes.body_small}
        color={
          isDarkMode ? TextColors.text_On_Dark : TextColors.text_secondary
        }>
        {label}
      </CustomText>
      <CustomText
        color={isDarkMode ? TextColors.text_On_Dark : TextColors.text_primary}>
        {value}
      </CustomText>
    </View>
  );
};

const getStyles = ({isDarkMode}: {isDarkMode: boolean}) =>
  StyleSheet.create({
    detailItem: {
      padding: 16,
      rowGap: 8,
      borderRadius: 16,
      backgroundColor: isDarkMode ? '#444' : colors.backgroundColors.white,
      borderColor: isDarkMode ? '#666' : colors.backgroundColors.mainColor,
      borderWidth: 2,
    },
  });
