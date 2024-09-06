import {StyleSheet, View} from 'react-native';
import React from 'react';
import Back from '../assets/icons/back';
import {IconsMap, IconsType} from '../assets/icons/iconsMap';

export const Icon = ({name}: {name: IconsType}) => {
  const SVGImage = IconsMap[name] ? IconsMap[name] : <Back />;
  const reactComponent = React.cloneElement(SVGImage, {color: 'white'});
  return <View style={styles.container}>{reactComponent}</View>;
};

const styles = StyleSheet.create({
  container: {
    height: 48,
    width: 48,
    borderRadius: 24,
  },
});
