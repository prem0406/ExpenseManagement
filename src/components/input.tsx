import {TextInput, StyleSheet, TextInputProps} from 'react-native';
import React from 'react';

export const CustomTextInput = ({...rest}: TextInputProps) => {
  return <TextInput style={styles.nameInput} {...rest} />;
};

const styles = StyleSheet.create({
  nameInput: {
    borderColor: '#0d99ff',
    borderWidth: 2,
    borderRadius: 8,
    paddingHorizontal: 24,
    paddingVertical: 16,
    backgroundColor: '#efefef',
    fontSize: 24,
    lineHeight: 24,
    fontWeight: '500',
  },
});
