import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation/types';
import {articles} from '../../../data/articles';
import Article from '../../components/Article';

type NavigatorProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home = ({navigation, route}: NavigatorProps) => {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <FlatList
          data={articles}
          renderItem={({item}) => <Article {...item} />}
          keyExtractor={article => article.title}
        />
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
});
