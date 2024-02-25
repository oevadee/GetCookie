import { Image, ImageSourcePropType, StyleSheet } from "react-native";
import React from "react";

type Props = {
  imageSource: ImageSourcePropType;
};

export default function Avatar({ imageSource }: Props) {
  return <Image style={styles.avatar} source={imageSource} />;
}

const styles = StyleSheet.create({
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
});
