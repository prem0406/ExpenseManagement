import React, {useEffect, useState} from 'react';
import {View, Alert, FlatList, StyleSheet} from 'react-native';
import {RootStackParamList} from '../../App';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ItemRow from '../components/ItemRow';
import {CustomButton, CustomText} from '../components';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export type Item = {
  id: string;
  date: string;
  title: string;
  desc: string;
  amount: string;
};

const Home = ({navigation}: Props) => {
  const [itemList, setItemList] = useState<Item[]>([]);
  const [username, setUsername] = useState('HHHH');

  const handleBtnPress = () => {
    navigation.navigate('AddNew');
  };

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@storage_Key');
      const name_str = await AsyncStorage.getItem('@user_name');

      if (jsonValue != null) {
        const list = JSON.parse(jsonValue);
        setItemList([...list]);
      }
      if (name_str !== null) {
        setUsername(name_str);
      }
      Alert.alert('Success in GetData: ', jsonValue?.toString());
    } catch (e) {
      Alert.alert('Error in GetData');
    }
  };

  const clearData = async () => {
    try {
      await AsyncStorage.clear();
    } catch (e) {
      Alert.alert('Error in GetData');
    }
  };

  // useEffect(() => {
  //   console.log('Mounted');
  //   getData();

  //   return () => console.log('Un-Mounted');
  // }, []);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      // getData();
      console.log('Mounted');
    });

    return unsubscribe;
  }, [navigation]);

  console.log('Item LIst: ', itemList);

  const totalAmount = itemList.reduce((acc: number, curr): number => {
    return parseInt(curr.amount, 10) + acc;
  }, 0);

  return (
    <View style={styles.container}>
      <View style={styles.topWrapper}>
        <CustomText>Welcome: {username}</CustomText>
        <CustomButton label="Add new" onPress={handleBtnPress} />
        <CustomButton label="Get Data" onPress={getData} />
        <CustomButton label="Clear Data" onPress={clearData} />
        <FlatList
          data={itemList}
          renderItem={item => <ItemRow item={item.item} />}
          keyExtractor={item => item.id}
        />
      </View>
      <ItemRow
        item={{
          date: '',
          title: 'Total:',
          amount: totalAmount.toString(),
          id: '999',
          desc: '',
        }}
      />
    </View>
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
});
