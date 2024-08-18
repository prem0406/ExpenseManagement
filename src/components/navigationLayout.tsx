import {View, StyleSheet} from 'react-native';
import React, {PropsWithChildren} from 'react';
import {CustomText} from './text';
import {colors, TextColors} from '../theme/colors';

export type NavigationLayoutProps = PropsWithChildren<{
  headerText: string;
}>;

export const NavigationLayout = ({
  headerText,
  children,
}: NavigationLayoutProps) => {
  return (
    <>
      <View style={styles.headerStyles}>
        <CustomText color={TextColors.text_On_Dark}>{headerText}</CustomText>
      </View>
      {children}
    </>
  );
};

const styles = StyleSheet.create({
  headerStyles: {
    backgroundColor: colors.backgroundColors.mainColor,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
