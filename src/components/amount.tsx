import React from 'react';
import {CustomText, TextTypes} from './text';
import {TextColors} from '../theme/colors';
import {useDarkMode} from '../hooks/useDarkMode';

type AmountSizes = 'small' | 'medium' | 'large';

export const Amount = ({
  amount = '0',
  currency = 'Rs.',
  size = 'small',
  color = TextColors.text_primary,
}: {
  amount?: string;
  currency?: string;
  size?: AmountSizes;
  color?: TextColors;
}) => {
  const textType = size === 'small' ? TextTypes.h4 : TextTypes.h1;
  const {isDarkMode} = useDarkMode();

  return (
    <CustomText
      type={textType}
      color={isDarkMode ? TextColors.text_On_Dark : color}>
      {currency} {amount}
    </CustomText>
  );
};
