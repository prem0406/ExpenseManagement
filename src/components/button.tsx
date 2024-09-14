import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {colors, TextColors} from '../theme/colors';
import {CustomText} from './text';

export enum ButtonVariant {
  PRIMARY = 'PRIMARY',
  SECONDARY = 'SECONDARY',
}

type CustomButtonProps = {
  variant?: ButtonVariant;
  label?: string;
  onPress?: () => void;
};

export const CustomButton = ({
  variant = ButtonVariant.PRIMARY,
  label = 'Label',
  onPress = () => {},
}: CustomButtonProps) => {
  const styles = getStyles({variant});
  return (
    <TouchableOpacity style={styles.wrapper} onPress={onPress}>
      <CustomText
        color={
          variant === ButtonVariant.PRIMARY
            ? TextColors.text_On_Dark
            : TextColors.text_primary
        }>
        {label}
      </CustomText>
    </TouchableOpacity>
  );
};

const getStyles = ({variant}: {variant: ButtonVariant}) =>
  StyleSheet.create({
    wrapper: {
      minHeight: 30,
      borderRadius: 16,
      borderWidth: 1,
      paddingHorizontal: 16,
      paddingVertical: 16,
      // backgroundColor: 'transparent',
      backgroundColor:
        variant === ButtonVariant.PRIMARY
          ? colors.backgroundColors.mainColor
          : 'transparent',
      borderColor: '#758393',
      alignItems: 'center',
    },
  });
