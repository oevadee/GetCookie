import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Home = () => {
  return (
    <View>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.backgroundStyle}>
        <View style={styles.header}>
          <Image
            source={{
              uri: 'https://i.seadn.io/gae/AYjmjIOns7qS6MxEjiZTy9dOtdacz-glSiKmzbuo3smKdG_GvUJP2XQt6mA_gbYVfVLv-OLJTYJKuCZscOSca7Idv-MU0h0l2Y1o?auto=format&dpr=1&w=1000',
            }}
            style={styles.profilePicture}
          />
          <Text>Settings</Text>
        </View>
        <Text>Home</Text>
        <Text>Here we will create a new Application</Text>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  backgroundStyle: {
    paddingHorizontal: 20,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profilePicture: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
});
