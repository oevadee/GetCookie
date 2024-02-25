import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Settings from '../../views/Settings';
import {RootStackParamList} from '../types';

const SettingsStack = createNativeStackNavigator<RootStackParamList>();

export const SettingsStackScreen = () => {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={Settings} />
    </SettingsStack.Navigator>
  );
};
