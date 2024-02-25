import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RootStackParamList } from "./types";
import { HomeScreen } from "../screens/Home";
import Icon from "../components/Icon";
import { SettingsScreen } from "../screens/Settings";

const Tab = createBottomTabNavigator<RootStackParamList>();

export const TabGroup = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: () => (
            <Icon imagePath={require("../../assets/icons/home.png")} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: () => (
            <Icon imagePath={require("../../assets/icons/settings.png")} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
