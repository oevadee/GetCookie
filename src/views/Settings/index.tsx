import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation/types';

type NavigatorProps = NativeStackScreenProps<RootStackParamList, 'Settings'>;

const SettingsView = ({route, navigation}: NavigatorProps) => {
  return (
    <View>
      <Text>SettingsView</Text>
    </View>
  );
};

export default SettingsView;

const styles = StyleSheet.create({});
