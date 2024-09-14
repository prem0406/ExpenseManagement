import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import {RootStackParamList} from '../../App';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import ItemRow from '../components/ItemRow';
import {NavigationLayout} from '../components/navigationLayout';
import {useAppSelector} from '../../hooks';
import {Expence} from '../types';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home = ({navigation}: Props) => {
  const {expenses} = useAppSelector(state => state.expenseReducer);

  const handleBtnPress = () => {
    navigation.navigate('AddNew');
  };

  // const totalAmount = itemList.reduce((acc: number, curr): number => {
  //   return parseInt(curr.amount, 10) + acc;
  // }, 0);

  const renderItem = ({item}: {item: Expence}) => (
    <ItemRow
      item={{
        date: item?.date,
        title: item?.title,
        amount: item?.amount,
        id: item?.id,
        desc: item?.desc,
      }}
      onPress={() => navigation.navigate('ExpenseDetails')}
    />
  );

  return (
    <NavigationLayout
      headerText="All Spents"
      leftIcon={{name: 'menuOutline'}}
      rightIcon={{name: 'plusRound', onPress: handleBtnPress}}>
      <View style={styles.container}>
        <View style={styles.topWrapper}>
          <FlatList
            data={expenses}
            renderItem={renderItem}
            contentContainerStyle={styles.contentContainerStyle}
            keyExtractor={item => item.id}
          />
        </View>
      </View>
    </NavigationLayout>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  topWrapper: {
    gap: 8,
  },
  contentContainerStyle: {
    gap: 8,
  },
});
