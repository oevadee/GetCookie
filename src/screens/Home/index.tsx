import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { Header } from "../../components/Header";
import { Article } from "../../components/Article";
import { RootStackParamList } from "../../navigation/types";
import { articles } from "../../../data/articles";
import { screenStyles } from "../../styles/screenStyles";

type NavigatorProps = NativeStackScreenProps<RootStackParamList, "Home">;

export const HomeScreen = ({ navigation, route }: NavigatorProps) => {
  return (
    <View style={styles.mainWrapper}>
      <Header />
      <FlatList
        data={articles}
        renderItem={({ item }) => <Article {...item} />}
        keyExtractor={article => article.title}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  ...screenStyles,
});
