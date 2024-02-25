import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../views/Home';
import {RootStackParamList} from './types';
import SettingsView from '../views/Settings';
import Icon from '../components/Icon';

const Tab = createBottomTabNavigator<RootStackParamList>();

const TabGroup = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: () => (
            <Icon imagePath={require('../../assets/icons/home.png')} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsView}
        options={{
          tabBarIcon: () => (
            <Icon imagePath={require('../../assets/icons/settings.png')} />
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
