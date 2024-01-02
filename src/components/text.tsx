import {
  StyleProp,
  StyleSheet,
  Text,
  TextProps as RNTextProps,
  TextStyle,
} from 'react-native';
import React from 'react';

export interface TextProps extends RNTextProps {
  //   preset?: TextTypes;
  //   weight?: Weights;
  //   size?: Sizes;
  //   color?: TextColors;
  styleOverride?: StyleProp<TextStyle>;
  children?: React.ReactNode;
}

export const CustomText = ({children}: TextProps) => {
  return <Text style={styles.textStyle}>{children}</Text>;
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    color: 'black',
  },
});
