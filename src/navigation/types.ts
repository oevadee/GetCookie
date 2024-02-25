import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamList = {
  Home: undefined;
  Settings: { userId: number } | undefined;
};

export type HomeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "Home"
>;

export type SettingsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "Settings"
>;

export type BottomTabParamList = {
  Home: undefined;
  Settings: undefined;
};

export type HomeTabProps = BottomTabScreenProps<BottomTabParamList, "Home">;

export type SettingsTabProps = BottomTabScreenProps<
  BottomTabParamList,
  "Settings"
>;
