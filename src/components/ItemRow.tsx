import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Item} from '../screens/Home';
import {colors, TextColors} from '../theme/colors';
import {CustomText, TextTypes} from './text';
import {Amount} from './amount';

type ItemRowProps = {
  item: Item;
};

const ItemRow = ({item}: ItemRowProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <CustomText
          type={TextTypes.body_small}
          color={TextColors.text_secondary}>
          {item.date}
        </CustomText>
        <CustomText type={TextTypes.body}>{item.title}</CustomText>
        <CustomText
          type={TextTypes.body_small}
          color={TextColors.text_secondary}>
          {item.desc}
        </CustomText>
      </View>
      <Amount amount={item.amount} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 24,
    backgroundColor: colors.newTextColors.primary_color_light,
    borderRadius: 16,
  },
  mainContainer: {
    rowGap: 4,
  },
});

export default ItemRow;
