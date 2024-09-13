import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {colors, TextColors} from '../theme/colors';
import {CustomText, TextTypes} from './text';
import {Amount} from './amount';
import {DateTile} from './dateTile';
import {Expence} from '../types';

type ItemRowProps = {
  item: Expence;
  onPress?: () => void;
};

const ItemRow = ({item, onPress}: ItemRowProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <DateTile date={item?.date} />
      <View style={styles.mainContainer}>
        <View style={styles.centerContainer}>
          {/* convert to tag for may be 'category' */}
          <CustomText
            type={TextTypes.body_small}
            color={TextColors.text_secondary}>
            Label/Tag
          </CustomText>
          <CustomText type={TextTypes.body}>{item.title}</CustomText>
          {item?.desc && (
            <CustomText
              type={TextTypes.body_small}
              color={TextColors.text_secondary}>
              {item.desc}
            </CustomText>
          )}
        </View>
        <Amount amount={item.amount} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 16,
    paddingHorizontal: 24,
    backgroundColor: colors.newTextColors.primary_color_light,
    borderRadius: 16,
  },
  mainContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  centerContainer: {
    paddingLeft: 24,
    rowGap: 4,
  },
});

export default ItemRow;
