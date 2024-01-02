import {
  StyleProp,
  StyleSheet,
  Text,
  TextProps as RNTextProps,
  TextStyle,
} from 'react-native';
import React, {useMemo} from 'react';
import {$fontWeightStyles, Weights} from './text.types';
import {TextColors, colors} from '../theme/colors';

export interface TextProps extends RNTextProps {
  //   preset?: TextTypes;
  //   size?: Sizes;
  styleOverride?: StyleProp<TextStyle>;
  children?: React.ReactNode;
  weight?: Weights;
  color?: TextColors;
}

export const CustomText = ({children, weight = 'normal', color}: TextProps) => {
  const $weight = useMemo(() => {
    return $fontWeightStyles[weight as Weights];
  }, [weight]);

  const $color = useMemo(
    () => ({color: colors.textColors[color ?? TextColors.text_primary]}),
    [color],
  );

  return <Text style={[styles.textStyle, $weight, $color]}>{children}</Text>;
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
  },
});
