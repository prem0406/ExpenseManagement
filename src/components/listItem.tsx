import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {colors, TextColors} from '../theme/colors';
import {CustomText, TextTypes} from './text';
import {Amount} from './amount';
import {DateTile} from './dateTile';
import {Expence} from '../types';
import {useDarkMode} from '../hooks/useDarkMode';

type ItemRowProps = {
  item: Expence;
  onPress: (item: Expence) => void;
};

export const ListItem = ({item, onPress}: ItemRowProps) => {
  const onPressItem = () => onPress(item);
  const {isDarkMode} = useDarkMode();

  const styles = getStyles({isDarkMode});

  return (
    <TouchableOpacity style={styles.container} onPress={onPressItem}>
      <DateTile date={item?.date} />
      <View style={styles.mainContainer}>
        {/* convert to tag for may be 'category' */}
        <CustomText
          type={TextTypes.body_small}
          color={
            isDarkMode ? TextColors.text_On_Dark : TextColors.text_secondary
          }>
          Label/Tag
        </CustomText>
        <View style={styles.centerContainer}>
          <View style={styles.titleWrapper}>
            <CustomText
              type={TextTypes.h4}
              color={
                isDarkMode ? TextColors.text_On_Dark : TextColors.text_primary
              }>
              {item.title?.toLocaleUpperCase()}
            </CustomText>
          </View>
          <Amount amount={item.amount} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const getStyles = ({isDarkMode}: {isDarkMode: boolean}) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      paddingVertical: 16,
      paddingHorizontal: 24,
      backgroundColor: isDarkMode ? '#444' : colors.backgroundColors.white,
      borderColor: isDarkMode ? '#666' : colors.backgroundColors.mainColor,
      borderRadius: 16,
      borderWidth: 2,
    },
    mainContainer: {
      flex: 1,
      paddingStart: 24,
    },
    centerContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingTop: 8,
    },
    titleWrapper: {width: '67%'},
  });
