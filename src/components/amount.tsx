import React from 'react';
import {CustomText, TextTypes} from './text';

export const Amount = ({
  amount,
  currency = 'Rs.',
}: {
  amount: string;
  currency?: string;
}) => {
  return (
    <CustomText type={TextTypes.h4}>
      {currency} {amount}
    </CustomText>
  );
};
