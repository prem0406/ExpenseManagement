import React from 'react';
import {StyleSheet, View} from 'react-native';
import {CustomText, TextTypes} from './text';
import {TextColors} from '../theme/colors';

interface IErrorMessage {
  error?: string | false;
}

export const ErrorMessage: React.FC<IErrorMessage> = ({error}) => {
  return error ? (
    <View style={styles.container}>
      <CustomText
        type={TextTypes.body_small}
        color={TextColors.error}
        styleOverride={styles.text}>
        {error}
      </CustomText>
    </View>
  ) : null;
};

const styles = StyleSheet.create({
  container: {paddingTop: 4},
  text: {fontStyle: 'italic'},
});
