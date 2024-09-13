import {View, StyleSheet} from 'react-native';
import React from 'react';
import {CustomText, TextTypes} from './text';

export const DateTile = ({date}: {date: string}) => {
  const dateObj = new Date(date);
  const formatter = new Intl.DateTimeFormat('fr', {month: 'short'});
  const tempMonth = formatter.format(new Date())?.toUpperCase();
  const month = tempMonth.length > 3 ? tempMonth.substring(0, 3) : tempMonth;

  const dateStr = dateObj.getDate();

  return (
    <View style={styles.container}>
      <CustomText type={TextTypes.h1}>{dateStr}</CustomText>
      <CustomText type={TextTypes.h4}>{month}</CustomText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
