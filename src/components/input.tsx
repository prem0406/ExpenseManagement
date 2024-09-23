import {TextInput, StyleSheet, TextInputProps} from 'react-native';
import React from 'react';
import {colors} from '../theme/colors';
import {useDarkMode} from '../hooks/useDarkMode';

export const CustomTextInput = ({...rest}: TextInputProps) => {
  const {isDarkMode} = useDarkMode();

  const styles = getStyles({isDarkMode});
  return (
    <TextInput style={styles.nameInput} {...rest} placeholderTextColor="#999" />
  );
};

const getStyles = ({isDarkMode}: {isDarkMode: boolean}) =>
  StyleSheet.create({
    nameInput: {
      borderColor: colors.backgroundColors.mainColor,
      borderWidth: 2,
      borderRadius: 8,
      paddingHorizontal: 24,
      paddingVertical: 16,
      backgroundColor: isDarkMode ? '#333' : '#efefef',
      color: isDarkMode
        ? colors.textColors.text_On_Dark
        : colors.textColors.text_primary,
      fontSize: 24,
      lineHeight: 24,
      fontWeight: '500',
    },
  });
