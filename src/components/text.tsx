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
import {typography} from '../theme/typography';

export enum TextTypes {
  body = 'body',
  body_small = 'body_small',
  h4 = 'h4',
}

export interface TextProps extends RNTextProps {
  //   preset?: TextTypes;
  //   size?: Sizes;
  styleOverride?: StyleProp<TextStyle>;
  children?: React.ReactNode;
  weight?: Weights;
  color?: TextColors;
  type?: TextTypes;
}

export const CustomText = ({
  children,
  weight = 'normal',
  color,
  type,
}: TextProps) => {
  //weight will be removed
  const $weight = useMemo(() => {
    return $fontWeightStyles[weight as Weights];
  }, [weight]);

  const $color = useMemo(
    () => ({color: colors.textColors[color ?? TextColors.text_primary]}),
    [color],
  );

  const $type = useMemo(() => typeStyles[type ?? TextTypes.body], [type]);

  return (
    <Text style={[styles.textStyle, $type, $weight, $color]}>{children}</Text>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 10,
    fontWeight: '500',
    lineHeight: 12,
  },
});

const typeStyles: Record<keyof typeof TextTypes, TextStyle> = {
  [TextTypes.body]: {
    fontFamily: typography.fonts.openSans.bold,
    fontWeight: '700',
    ...typography.FONT_STYLES.fontStyle_16,
  },
  [TextTypes.body_small]: {
    //TO be changed
    ...typography.FONT_STYLES.fontStyle_12,
  },
  [TextTypes.h4]: {
    //TO be changed
    ...typography.FONT_STYLES.fontStyle_20,
    fontWeight: '700',
  },
};
