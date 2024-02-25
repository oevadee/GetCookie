import { Button, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/types";

export const Header = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <View style={styles.headerWrapper}>
      <View style={styles.headerUserWrapper}>
        <Image
          source={{
            uri: "https://i.seadn.io/gae/AYjmjIOns7qS6MxEjiZTy9dOtdacz-glSiKmzbuo3smKdG_GvUJP2XQt6mA_gbYVfVLv-OLJTYJKuCZscOSca7Idv-MU0h0l2Y1o?auto=format&dpr=1&w=1000",
          }}
          style={styles.profilePicture}
        />
        <View>
          <Text style={styles.headerUserInfoWelcome}>Welcome back!</Text>
          <Text style={styles.headerUserInfoName}>Adrian Szczechura</Text>
        </View>
      </View>
      <Button
        title="Settings"
        accessibilityLabel="Settings"
        onPress={() => navigation.navigate("Settings")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  headerUserWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  headerUserInfoWelcome: {
    fontSize: 15,
    fontFamily: "Poppins",
    fontWeight: "600",
  },
  headerUserInfoName: {
    fontSize: 13,
  },
  profilePicture: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
});
