import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import {RootStackParamList} from '../../App';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {NavigationLayout} from '../components/navigationLayout';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {Expence} from '../types';
import {setSelectedExpense} from '../redux/app.slice';
import {ListItem} from '../components/listItem';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home = ({navigation}: Props) => {
  const {expenses} = useAppSelector(state => state.expenseReducer);
  const dispatch = useAppDispatch();

  const handleBtnPress = () => {
    navigation.navigate('AddNew');
  };

  const onItemPress = (item: Expence) => {
    dispatch(setSelectedExpense(item));
    navigation.navigate('ExpenseDetails');
  };

  const renderItem = ({item}: {item: Expence}) => (
    <ListItem
      item={{
        date: item?.date,
        title: item?.title,
        amount: item?.amount,
        id: item?.id,
        desc: item?.desc,
      }}
      onPress={onItemPress}
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
