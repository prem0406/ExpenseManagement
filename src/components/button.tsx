import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

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
      <Text style={styles.content}>{label}</Text>
    </TouchableOpacity>
  );
};

const getStyles = ({variant}: {variant: ButtonVariant}) =>
  StyleSheet.create({
    wrapper: {
      minHeight: 30,
      borderRadius: 8,
      borderWidth: 1,
      paddingHorizontal: 16,
      paddingVertical: 12,
      // backgroundColor: 'transparent',
      backgroundColor:
        variant === ButtonVariant.PRIMARY ? '#007567' : 'transparent',
      borderColor: '#758393',
    },
    content: {
      fontSize: 16,
      lineHeight: 24,
      color: variant === ButtonVariant.PRIMARY ? '#FFFFFF' : '#007567',
      textAlign: 'center',
    },
  });
