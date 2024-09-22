import {View, StyleSheet} from 'react-native';
import React from 'react';
import {CustomText, TextTypes} from './text';
import {colors, TextColors} from '../theme/colors';

export const DateTile = ({date}: {date: string}) => {
  const dateObj = new Date(date);
  const formatter = new Intl.DateTimeFormat('fr', {month: 'short'});
  const tempMonth = formatter.format(new Date())?.toUpperCase();
  const month = tempMonth.length > 3 ? tempMonth.substring(0, 3) : tempMonth;

  const dateStr = dateObj.getDate();

  return (
    <View style={styles.container}>
      <CustomText type={TextTypes.h2} color={TextColors.text_On_Dark}>
        {dateStr}
      </CustomText>
      <CustomText type={TextTypes.h4} color={TextColors.text_On_Dark}>
        {month}
      </CustomText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 8,
    borderRadius: 8,
    backgroundColor: colors.backgroundColors.mainColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
