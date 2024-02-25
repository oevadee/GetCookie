import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

type Props = {
  imagePath: any;
};

const Icon = ({imagePath}: Props) => {
  return <Image style={styles.icon} source={imagePath} />;
};

export default Icon;

const styles = StyleSheet.create({
  icon: {
    width: 20,
    height: 20,
  },
});
