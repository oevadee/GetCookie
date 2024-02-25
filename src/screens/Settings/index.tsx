import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/types";

type NavigatorProps = NativeStackScreenProps<RootStackParamList, "Settings">;

export const SettingsScreen = ({ route, navigation }: NavigatorProps) => {
  return (
    <View>
      <Text>SettingsScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
