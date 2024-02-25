import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../components/Header';

const Home = () => {
  return (
    <View>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.backgroundStyle}>
        <Header />
        <Text>Home</Text>
        <Text>Here we will create a new Application</Text>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  backgroundStyle: {
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
});
