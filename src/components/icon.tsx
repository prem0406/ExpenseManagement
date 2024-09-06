import {StyleSheet, View} from 'react-native';
import React from 'react';
import Back from '../assets/icons/back';
import {IconsMap} from '../assets/icons/iconsMap';

export const Icon = ({name}: {name: keyof typeof IconsMap}) => {
  const SVGImage = IconsMap[name] ? IconsMap[name] : <Back />;
  const reactComponent = React.cloneElement(SVGImage);
  return <View style={styles.container}>{reactComponent}</View>;
};

const styles = StyleSheet.create({
  container: {
    height: 49,
    backgroundColor: 'red',
  },
});
