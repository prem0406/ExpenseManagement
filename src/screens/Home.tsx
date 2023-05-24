import React from 'react';
import {Text} from 'react-native';
import {RootStackParamList} from '../../App';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home = ({route}: Props) => {
  const {name} = route.params;
  return <Text>Welcome: {name}</Text>;
};

export default Home;
