import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { HomeScreen } from "../screens/Home";
import { RootStackParamList } from "./types";
import { SettingsScreen } from "../screens/Settings";
import Icon from "../components/Icon";

const Tab = createBottomTabNavigator<RootStackParamList>();

const TabGroup = () => {
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

export const Navigation = () => {
  return (
    <NavigationContainer>
      <TabGroup />
    </NavigationContainer>
  );
};
