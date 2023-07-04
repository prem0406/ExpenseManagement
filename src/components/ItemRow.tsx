import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Item} from '../screens/Home';

type ItemRowProps = {
  item: Item;
};

const ItemRow = ({item}: ItemRowProps) => {
  return (
    <View style={styles.container}>
      <Text>{item.date}</Text>
      <Text>{item.title}</Text>
      <Text>{item.amount}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
});

export default ItemRow;
