import {
  View,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  KeyboardAvoidingView,
} from 'react-native';
import React, {PropsWithChildren} from 'react';
import {CustomText} from './text';
import {colors, TextColors} from '../theme/colors';
import {Icon} from './icon';
import {IconsType} from '../assets/icons/iconsMap';

export type NavigationLayoutProps = PropsWithChildren<{
  headerText: string;
  leftIcon?: {
    name: IconsType;
    onPress?: () => void;
  };
  rightIcon?: {
    name: IconsType;
    onPress?: () => void;
  };
  keyboardAvoidingViewBehavior?: 'height' | 'position' | 'padding';
  enableKeyboardAvoidingView?: boolean;
}>;

export const NavigationLayout = ({
  headerText,
  children,
  leftIcon,
  rightIcon,
  keyboardAvoidingViewBehavior = 'padding',
  enableKeyboardAvoidingView,
}: NavigationLayoutProps) => {
  return (
    <>
      <View style={styles.headerStyles}>
        <View style={styles.iconWrapper}>
          {leftIcon?.name && (
            <TouchableOpacity onPress={leftIcon?.onPress}>
              <Icon name={leftIcon.name} />
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.center}>
          <CustomText
            color={TextColors.text_On_Dark}
            styleOverride={styles.headerStyle}>
            {headerText}
          </CustomText>
        </View>
        <View style={styles.iconWrapper}>
          {rightIcon?.name && (
            <TouchableOpacity onPress={rightIcon?.onPress}>
              <Icon name={rightIcon.name} />
            </TouchableOpacity>
          )}
        </View>
      </View>
      <KeyboardAvoidingView
        style={styles.keyboardAvoidingStyles}
        behavior={keyboardAvoidingViewBehavior}
        enabled={!!enableKeyboardAvoidingView}>
        {children}
      </KeyboardAvoidingView>
    </>
  );
};

const styles = StyleSheet.create({
  headerStyles: {
    flexDirection: 'row',
    paddingHorizontal: 8,
    backgroundColor: colors.backgroundColors.mainColor,
    height: (StatusBar.currentHeight ?? 0) + 60,
    alignItems: 'center',
    paddingTop: StatusBar.currentHeight,
    paddingBottom: 8,
  },
  center: {
    flex: 1,
  },
  headerStyle: {
    alignSelf: 'center',
  },
  iconWrapper: {
    height: 48,
    width: 48,
  },
  keyboardAvoidingStyles: {flex: 1},
});
