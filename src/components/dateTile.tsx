import {View, StyleSheet} from 'react-native';
import React from 'react';
import {CustomText, TextTypes} from './text';

export const DateTile = () => {
  return (
    <View style={styles.container}>
      <CustomText type={TextTypes.h1}>25</CustomText>
      <CustomText type={TextTypes.h4}>AUG</CustomText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
