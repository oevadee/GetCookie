import { Pressable, StyleSheet, Text, View, Modal, Alert } from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/types";
import { Heading } from "../../components/Heading";
import { screenStyles } from "../../styles/screenStyles";
import Avatar from "../../components/Avatar";
import Icon from "../../components/Icon";

type NavigatorProps = NativeStackScreenProps<RootStackParamList, "Settings">;

export const SettingsScreen = ({ route, navigation }: NavigatorProps) => {
  const [modalVisible, setModalVisible] = React.useState(false);

  return (
    <View style={styles.mainWrapper}>
      <Heading
        style={{
          marginBottom: 20,
        }}>
        Settings
      </Heading>
      <View style={styles.contentWrapper}>
        <Heading
          size="S"
          style={{
            marginBottom: 20,
          }}>
          Account
        </Heading>
        <View style={styles.headerUserWrapper}>
          <Avatar
            imageSource={{
              uri: "https://i.seadn.io/gae/AYjmjIOns7qS6MxEjiZTy9dOtdacz-glSiKmzbuo3smKdG_GvUJP2XQt6mA_gbYVfVLv-OLJTYJKuCZscOSca7Idv-MU0h0l2Y1o?auto=format&dpr=1&w=1000",
            }}
          />
          <View>
            <Text style={styles.headerUserInfoWelcome}>Welcome back!</Text>
            <Text style={styles.headerUserInfoName}>Adrian Szczechura</Text>
          </View>
        </View>
        <Heading
          size="S"
          style={{
            marginBottom: 20,
          }}>
          Settings
        </Heading>
        <View style={styles.settingsWrapper}>
          <View style={styles.settingElement}>
            <Heading size="XS">Language</Heading>
            <View style={styles.languageWrapper}>
              <Text>English</Text>
              <Pressable
                style={styles.optionButton}
                onPress={() => {
                  setModalVisible(true);
                }}>
                <Icon
                  imagePath={require("../../../assets/icons/arrowRight.png")}
                />
                <Modal
                  transparent={true}
                  visible={modalVisible}
                  onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                  }}>
                  <Text>Test modal</Text>
                </Modal>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ...screenStyles,
  contentWrapper: {
    paddingVertical: 32,
    paddingHorizontal: 24,
  },
  settingsWrapper: {
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  settingElement: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerUserWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginBottom: 12,
  },
  headerUserInfoWelcome: {
    fontSize: 15,
    fontFamily: "Poppins",
    fontWeight: "600",
  },
  headerUserInfoName: {
    fontSize: 13,
  },
  languageWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  optionButton: {
    backgroundColor: "#cfcfcf",
    padding: 12,
    borderRadius: 12,
  },
});
