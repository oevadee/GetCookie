import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../../views/Home';
import {RootStackParamList} from '../types';

const HomeStack = createNativeStackNavigator<RootStackParamList>();

export const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Home} />
    </HomeStack.Navigator>
  );
};
