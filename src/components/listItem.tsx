import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {colors, TextColors} from '../theme/colors';
import {CustomText, TextTypes} from './text';
import {Amount} from './amount';
import {DateTile} from './dateTile';
import {Expence} from '../types';

type ItemRowProps = {
  item: Expence;
  onPress: (item: Expence) => void;
};

export const ListItem = ({item, onPress}: ItemRowProps) => {
  const onPressItem = () => onPress(item);
  return (
    <TouchableOpacity style={styles.container} onPress={onPressItem}>
      <DateTile date={item?.date} />
      <View style={styles.mainContainer}>
        {/* convert to tag for may be 'category' */}
        <CustomText
          type={TextTypes.body_small}
          color={TextColors.text_secondary}>
          Label/Tag
        </CustomText>
        <View style={styles.centerContainer}>
          <View style={styles.titleWrapper}>
            <CustomText type={TextTypes.h4}>
              {item.title?.toLocaleUpperCase()}
            </CustomText>
          </View>
          <Amount amount={item.amount} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 16,
    paddingHorizontal: 24,
    backgroundColor: colors.backgroundColors.white,
    borderRadius: 16,
    borderColor: colors.backgroundColors.mainColor,
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
